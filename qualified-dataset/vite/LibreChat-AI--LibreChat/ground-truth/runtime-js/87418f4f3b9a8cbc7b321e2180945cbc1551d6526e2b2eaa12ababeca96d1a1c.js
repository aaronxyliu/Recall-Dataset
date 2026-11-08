
      (function () {
        /* Applied before first paint so the app does not flash at the wrong scale.
         * A stored value outside the supported range is clamped rather than ignored,
         * so the rendered scale cannot disagree with the value the setting shows. */
        let uiScale = 1;
        try {
          const storedScale = JSON.parse(localStorage.getItem('uiScale'));
          if (typeof storedScale === 'number' && Number.isFinite(storedScale)) {
            uiScale = Math.min(1.5, Math.max(0.5, storedScale));
          }
        } catch (e) {
          /* Web Storage denied or unparsable: the default scale applies. */
        }
        /* The stylesheet's :root already declares 1, so the default leaves the
         * root's inline style untouched. */
        if (uiScale !== 1) {
          document.documentElement.style.setProperty('--ui-scale', String(uiScale));
        }

        /* Direction before first paint, from the same sources `detectInitialLanguage` reads,
         * so a right-to-left interface does not render one frame left-to-right. The list is
         * the right-to-left locales the app ships; i18n.ts reapplies `dir` once it loads. */
        const cookie = document.cookie.match(/(?:^|;\s*)lang=([^;]*)/);
        let lang = cookie ? cookie[1] : '';
        if (!lang) {
          try {
            lang = localStorage.getItem('lang') || '';
            lang = JSON.parse(lang);
          } catch (e) {
            /* Stored unquoted, or Web Storage denied: the raw value or the browser language. */
          }
        }
        lang = String(lang || navigator.language || '').toLowerCase();
        if (['ar', 'he', 'fa', 'ug'].indexOf(lang.split(/[-_]/)[0]) !== -1) {
          document.documentElement.dir = 'rtl';
        }

        let theme = null;
        try {
          theme = localStorage.getItem('color-theme');
        } catch (e) {
          /* Web Storage denied by browser policy: the shell falls back to the system theme. */
        }
        /* `interface.colorModeFromUrl` marks the shell (packages/api/src/html/handoff.ts)
         * so a link from another app can hand over its colour mode as `?theme=`. It is
         * stored as the user's own choice, which a later in-app change replaces, and
         * leaves the address before the router reads it. A high-contrast choice of the
         * same scheme is kept, since the link asks for a scheme, not less contrast. */
        if (document.documentElement.hasAttribute('data-color-mode-from-url')) {
          const params = new URLSearchParams(location.search);
          const handoff = params.get('theme');
          if (handoff === 'dark' || handoff === 'light' || handoff === 'system') {
            if (theme !== 'high-contrast-' + handoff) {
              theme = handoff;
              try {
                localStorage.setItem('color-theme', handoff);
              } catch (e) {
                /* Unstored, the handed-over mode still paints this page. */
              }
            }
            params.delete('theme');
            const query = params.toString();
            history.replaceState(
              history.state,
              '',
              location.pathname + (query ? '?' + query : '') + location.hash,
            );
          }
        }
        const loadingContainerStyle = document.createElement('style');
        let dark;
        let contrast;

        if (theme === 'high-contrast-dark' || theme === 'high-contrast-light') {
          dark = theme === 'high-contrast-dark';
          contrast = true;
        } else if (theme === 'dark' || theme === 'light') {
          dark = theme === 'dark';
          contrast = false;
        } else {
          /* `system`, and anything unset or unrecognised, which ThemeProvider also
           * resolves as `system`. The OS decides the scheme and the contrast, and
           * a contrast request moves the dark canvas to pure black, so keying off
           * the scheme alone would flash #0d0d0d behind the black palette.
           * The three contrast queries mirror ThemeProvider's `CONTRAST_QUERIES`:
           * a Windows Contrast Theme reports `forced-colors: active` with
           * `prefers-contrast: custom`, never `more`. */
          dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          contrast = [
            '(prefers-contrast: more)',
            '(prefers-contrast: custom)',
            '(forced-colors: active)',
          ].some(function (query) {
            return window.matchMedia(query).matches;
          });
        }
        let backgroundColor = dark ? (contrast ? '#000000' : '#0d0d0d') : '#ffffff';
        const root = document.documentElement;
        root.classList.add(dark ? 'dark' : 'light');

        /* The deployment theme (`interface.theme`) arrives with /api/config, so a
         * signed-in reload replays the copy DeploymentTheme cached under
         * `deployment-theme` (client/src/Providers/themeCache.ts) to paint it
         * before the bundle runs. The session cookies are unreadable here, so the
         * copy paints only for the identity this tab last saw signed in
         * (`deployment-theme-owner` in session storage); any other tab waits for
         * its own answer. High contrast outranks it, as in ThemeProvider, which
         * drops this copy (`data-theme-boot`) once it applies its own. */
        const base = document.querySelector('base');
        const basePath = base ? new URL(base.href).pathname : '/';
        const path =
          location.pathname.indexOf(basePath) === 0
            ? location.pathname.slice(basePath.length)
            : location.pathname.replace(/^\//, '');
        /* Same list as `isPublicRoute`: auth pages and shared links never render
         * under the viewer's signed-in config. */
        const publicRoute =
          /^(?:share|oauth|login|register|forgot-password|reset-password|verify)(?:\/|$)/i.test(
            path,
          );
        const mode = dark ? 'dark' : 'light';
        let boot = null;
        if (!contrast && !publicRoute) {
          try {
            const cached = JSON.parse(localStorage.getItem('deployment-theme') || 'null');
            /* The server names the session's owner and expiry here (`<expiry>~<owner>`), since
             * the session cookies are unreadable: only a live session of the cache's owner replays it. */
            const hint = /(?:^|;\s*)session_hint=([^;]*)/.exec(document.cookie);
            const session = hint ? decodeURIComponent(hint[1]) : '';
            const separator = session.indexOf('~');
            boot =
              cached &&
              separator > 0 &&
              Number(session.slice(0, separator)) > Date.now() &&
              session.slice(separator + 1) === cached.owner &&
              cached.v === '1.5.1ln9dy9' &&
              typeof cached.owner === 'string' &&
              cached.owner === sessionStorage.getItem('deployment-theme-owner') &&
              cached.modes &&
              cached.modes[mode];
          } catch (e) {
            /* Denied or corrupt storage replays no cached copy. */
          }
        }
        /* With no copy of its own, the tab paints the deployment's base theme, which the
         * server embeds in the shell for a bundled name (`readShellTheme` in themeCache.ts),
         * so even a first-ever visit wears it. Shared links paint their own tenant's. */
        if (!contrast && !boot && !/^share(?:\/|$)/i.test(path)) {
          try {
            const block = document.getElementById('deployment-theme-boot');
            const shell = block && JSON.parse(block.textContent);
            boot = shell && shell.modes && shell.modes[mode];
          } catch (e) {
            /* A malformed block paints the stock shell. */
          }
        }
        if (boot) {
          try {
            if (Array.isArray(boot.properties)) {
              let surface;
              let canvas;
              /* Only the conversation paints the canvas, and the redirects that land on it; other routes keep the split surface. */
              const chatRoute =
                path === '' ||
                /^(?:c(?:\/|$)|prompts(?:\/new)?\/?$)/i.test(path) ||
                (/^d(?:\/|$)/i.test(path) && !/^d\/prompts\/(?!new\/?$)[^/]/i.test(path));
              boot.properties.forEach(function (entry) {
                if (typeof entry[0] === 'string' && entry[0].indexOf('--') === 0) {
                  root.style.setProperty(entry[0], String(entry[1]));
                  /* Only an `R G B` triple reaches the shell's stylesheet text; any
                   * whitespace between channels is accepted, as the theme validator does. */
                  const channels = String(entry[1]).trim().split(/\s+/);
                  if (
                    (entry[0] === '--surface-primary-alt' || entry[0] === '--surface-canvas') &&
                    channels.length === 3 &&
                    channels.every(function (channel) {
                      return /^\d{1,3}$/.test(channel);
                    })
                  ) {
                    /* The conversation paints `surface-canvas`; a cache from before that role
                     * existed carries only the split surface it followed. */
                    if (entry[0] === '--surface-canvas') {
                      canvas = channels.join(', ');
                    } else {
                      surface = channels.join(', ');
                    }
                  }
                }
              });
              ['data-theme', 'data-theme-disabled', 'data-theme-field-focus'].forEach(
                function (name) {
                  const value = boot.attributes && boot.attributes[name];
                  if (typeof value === 'string') {
                    root.setAttribute(name, value);
                  }
                },
              );
              root.setAttribute('data-theme-boot', '');
              if ((chatRoute && canvas) || surface) {
                backgroundColor = 'rgb(' + ((chatRoute && canvas) || surface) + ')';
              }
            }
          } catch (e) {
            /* A malformed copy paints the stock shell, as before. */
          }
        }

        loadingContainerStyle.innerHTML = `
          #loading-container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: ${backgroundColor};
          }
        `;
        document.head.appendChild(loadingContainerStyle);
      })();
    