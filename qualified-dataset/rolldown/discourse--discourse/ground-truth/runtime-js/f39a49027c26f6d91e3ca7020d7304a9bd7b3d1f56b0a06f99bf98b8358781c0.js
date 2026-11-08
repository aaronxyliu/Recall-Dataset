'use strict';

// Plugins (and core features) can register handlers for notification action
// buttons by calling self.registerNotificationActionHandler(action, handler).
//
// The push payload may include:
//   actions:     a Web Notifications API "actions" array, attached to the
//                notification verbatim (each entry: { action, title, type,
//                placeholder, icon }).
//   action_data: an arbitrary object made available to the handler at
//                event.notification.data.actionData when the user activates
//                an action button.
//
// When the user activates an action, the handler registered for that
// action name is invoked with the original notificationclick event.
self.notificationActionHandlers = {};

self.registerNotificationActionHandler = function (action, handler) {
  self.notificationActionHandlers[action] = handler;
};

function buildNotificationOptions(payload) {
  var options = {
    body: payload.body,
    icon: payload.icon,
    badge: payload.badge,
    data: {
      url: payload.url,
      baseUrl: payload.base_url,
      actionData: payload.action_data || {},
    },
    tag: payload.tag,
  };

  if (Array.isArray(payload.actions) && payload.actions.length > 0) {
    options.actions = payload.actions;
  }

  return options;
}

function focusOrOpenWindow(event) {
  var url = event.notification.data.url;
  var baseUrl = event.notification.data.baseUrl;

  return clients.matchAll({ type: "window" }).then(function (clientList) {
    // Skip nested frames (e.g. full-app embed iframes) — we want to
    // focus/open a standalone Discourse window, not navigate an embed.
    var topLevelClients = clientList.filter(function (client) {
      return client.frameType !== "nested";
    });

    var reusedClientWindow = topLevelClients.some(function (client) {
      if (client.url === baseUrl + url && "focus" in client) {
        client.focus();
        return true;
      }

      if ("postMessage" in client && "focus" in client) {
        client.focus();
        client.postMessage({ url: url });
        return true;
      }
      return false;
    });

    if (!reusedClientWindow && clients.openWindow)
      return clients.openWindow(baseUrl + url);
  });
}

self.addEventListener('push', function(event) {
  var payload = event.data.json();
  event.waitUntil(
    self.registration.showNotification(payload.title, buildNotificationOptions(payload))
  );
});

self.addEventListener('notificationclick', function(event) {
  // Android doesn't close the notification when you click on it
  // See: http://crbug.com/463146
  event.notification.close();

  if (event.action) {
    var handler = self.notificationActionHandlers[event.action];
    if (handler) {
      event.waitUntil(
        Promise.resolve()
          .then(function () { return handler(event); })
          .catch(function (err) {
            console.error("Push notification action handler failed", event.action, err);
            return focusOrOpenWindow(event);
          })
      );
      return;
    }
  }

  event.waitUntil(focusOrOpenWindow(event));
});

self.addEventListener('pushsubscriptionchange', function(event) {
  event.waitUntil(
    Promise.all(
      fetch('http://127.0.0.1:19202/push_notifications/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: new URLSearchParams({
          "subscription[endpoint]": event.newSubscription.endpoint,
          "subscription[keys][auth]": event.newSubscription.toJSON().keys.auth,
          "subscription[keys][p256dh]": event.newSubscription.toJSON().keys.p256dh,
          "send_confirmation": false
        })
      }),
      fetch('http://127.0.0.1:19202/push_notifications/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: new URLSearchParams({
          "subscription[endpoint]": event.oldSubscription.endpoint,
          "subscription[keys][auth]": event.oldSubscription.toJSON().keys.auth,
          "subscription[keys][p256dh]": event.oldSubscription.toJSON().keys.p256dh
        })
      })
    )
  );
});

// Web Share Target (Level 2). The manifest registers a multipart/form-data
// POST share target at SHARE_TARGET_PATH. Browsers can't hand a multipart body
// to a single-page app directly, so we intercept the POST here, stash the
// shared title/text/url/files in the Cache API, and redirect to the same path
// as a GET navigation. The Ember `share-target` route then reads the payload
// back out of the cache and opens the "what do you want to do?" modal.
var SHARE_TARGET_PATH = '/share-target';
var SHARE_TARGET_CACHE = 'discourse-share-target';
var SHARE_TARGET_KEY_PREFIX = '/__discourse_share_target__/';

function stashSharedContent(request) {
  return request.formData().then(function (formData) {
    return caches.open(SHARE_TARGET_CACHE).then(function (cache) {
      var files = formData.getAll('files').filter(function (file) {
        return file && typeof file !== 'string';
      });

      var fileMeta = [];
      var puts = files.map(function (file, index) {
        var key = SHARE_TARGET_KEY_PREFIX + 'file-' + index;
        fileMeta.push({ key: key, name: file.name, type: file.type });
        return cache.put(
          new Request(key),
          new Response(file, {
            headers: {
              'content-type': file.type || 'application/octet-stream',
              'x-share-filename': encodeURIComponent(file.name || ('shared-file-' + index)),
            },
          })
        );
      });

      var meta = {
        title: formData.get('title') || '',
        text: formData.get('text') || '',
        url: formData.get('url') || '',
        files: fileMeta,
      };

      puts.push(
        cache.put(
          new Request(SHARE_TARGET_KEY_PREFIX + 'meta'),
          new Response(JSON.stringify(meta), {
            headers: { 'content-type': 'application/json' },
          })
        )
      );

      return Promise.all(puts);
    });
  });
}

self.addEventListener('fetch', function (event) {
  var url = new URL(event.request.url);

  if (event.request.method === 'POST' && url.pathname === SHARE_TARGET_PATH) {
    event.respondWith(
      stashSharedContent(event.request)
        .catch(function (err) {
          console.error('Failed to stash shared content', err);
        })
        .then(function () {
          // 303 forces the follow-up navigation to be a GET.
          return Response.redirect(SHARE_TARGET_PATH, 303);
        })
    );
  }
});

self.addEventListener('message', function(event) {
  if (event.data?.action !== "primaryTab" || !event.source) {
    return;
  }

  event.waitUntil(
    // includeUncontrolled so first-visit and hard-reloaded tabs take part in
    // the election instead of silently failing open client-side
    self.clients.matchAll({ includeUncontrolled: true }).then(function(clients) {
      const activeClient =
        clients.find(client => client.focused) ||
        clients.find(client => client.visibilityState === "visible");

      // when every tab is hidden (user is in another app or on another site),
      // the requester acts as primary — unlike an elected hidden tab it is
      // provably running, and simultaneous self-elections are deduped
      event.source.postMessage({
        primaryTab: activeClient ? event.source.id === activeClient.id : true
      });
    })
  );
 });

// Registers a "chat-reply" handler for the Web Notifications API "Reply"
// quick-action button on chat push notifications. Invoked by the core
// service worker (app/views/static/service-worker.js.erb) when the user
// types a reply and submits the action button on the notification.
//
// If the reply is a single emoji grapheme (typical of smartwatch quick
// reply chips), it is sent to the chat reaction endpoint instead of
// posting a one-character message in the channel. Reaction failures
// transparently fall back to a normal message post so a user's tap is
// never lost.
//
// The matching action button and its action_data payload are produced
// server-side by Chat::Notifier.push_notification_reply_action.

// Matches a single base pictographic codepoint, optionally followed by
// a variation selector (U+FE0F) or skin tone (U+1F3FB..U+1F3FF), plus
// zero or more ZWJ-joined (U+200D) parts. Used as a fallback when
// Intl.Segmenter is unavailable.
const SINGLE_EMOJI_FALLBACK_RE =
  /^(?:\p{Extended_Pictographic}(?:\u{FE0F}|[\u{1F3FB}-\u{1F3FF}])?)(?:\u{200D}\p{Extended_Pictographic}(?:\u{FE0F}|[\u{1F3FB}-\u{1F3FF}])?)*$/u;

function isSingleEmoji(text) {
  if (!text) {
    return false;
  }

  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const iter = new Intl.Segmenter(undefined, {
      granularity: "grapheme",
    })
      .segment(text)
      [Symbol.iterator]();
    const first = iter.next();
    if (first.done || !iter.next().done) {
      return false;
    }
    return /\p{Extended_Pictographic}/u.test(first.value.segment);
  }

  return SINGLE_EMOJI_FALLBACK_RE.test(text);
}

function fetchCsrfToken(baseUrl) {
  return fetch(baseUrl + "/session/csrf", {
    credentials: "include",
    headers: { Accept: "application/json" },
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("CSRF fetch failed: " + response.status);
      }
      return response.json();
    })
    .then(function (json) {
      return json.csrf;
    });
}

function postChatMessage({ baseUrl, csrf, channelId, threadId, message }) {
  const body = new URLSearchParams();
  body.set("message", message);
  if (threadId) {
    body.set("thread_id", String(threadId));
  }

  return fetch(baseUrl + "/chat/" + encodeURIComponent(channelId), {
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-CSRF-Token": csrf,
      Accept: "application/json",
    },
    body: body.toString(),
    method: "POST",
  }).then(function (response) {
    if (!response.ok) {
      throw new Error("Chat reply POST failed: " + response.status);
    }
    return response;
  });
}

function reactToChatMessage({ baseUrl, csrf, channelId, messageId, emoji }) {
  const body = new URLSearchParams();
  body.set("react_action", "add");
  body.set("emoji", emoji);

  return fetch(
    baseUrl +
      "/chat/" +
      encodeURIComponent(channelId) +
      "/react/" +
      encodeURIComponent(messageId),
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-CSRF-Token": csrf,
        Accept: "application/json",
      },
      body: body.toString(),
      method: "PUT",
    }
  ).then(function (response) {
    if (!response.ok) {
      throw new Error("Chat reaction PUT failed: " + response.status);
    }
    return response;
  });
}

self.registerNotificationActionHandler("chat-reply", function (event) {
  const data = event.notification.data || {};
  const actionData = data.actionData || {};
  const baseUrl = data.baseUrl || "";
  const fallbackUrl = data.url || "";
  const reply = (event.reply || "").trim();

  function openFallback() {
    if (!fallbackUrl || !self.clients || !self.clients.openWindow) {
      return Promise.resolve();
    }
    return self.clients.openWindow(baseUrl + fallbackUrl);
  }

  if (!actionData.channel_id || !reply) {
    return openFallback();
  }

  const tryReact =
    actionData.message_id && isSingleEmoji(reply)
      ? function (csrf) {
          return reactToChatMessage({
            baseUrl,
            csrf,
            channelId: actionData.channel_id,
            messageId: actionData.message_id,
            emoji: reply,
          }).catch(function (err) {
            // eslint-disable-next-line no-console
            console.warn("Chat reaction failed, falling back to message", err);
            return postChatMessage({
              baseUrl,
              csrf,
              channelId: actionData.channel_id,
              threadId: actionData.thread_id,
              message: reply,
            });
          });
        }
      : function (csrf) {
          return postChatMessage({
            baseUrl,
            csrf,
            channelId: actionData.channel_id,
            threadId: actionData.thread_id,
            message: reply,
          });
        };

  return fetchCsrfToken(baseUrl)
    .then(tryReact)
    .catch(function (err) {
      // eslint-disable-next-line no-console
      console.error("Chat quick reply failed", err);
      return openFallback();
    });
});

