import { a as defineGate, c as withSignalStore, n as notifyInternalSignal, p as peekInternalSignal, j as willSyncFlushWatchers, k as getOrCreateInternalSignal, l as consumeInternalSignal, o as createInternalSignal, A as ARRAY_SIGNAL, S as Signals, q as createSignalDescriptor, b as defineSignal, e as entangleSignal, r as entangleInitiallyStaleSignal, O as OBJECT_SIGNAL, t as createInternalMemo, w as waitFor } from "./configure-BlQ9ebNX.js";
import { deprecate, warn } from '@ember/debug';
import { EnableHydration, SkipCache, STRUCTURED } from './types/request.js';
import { macroCondition, getGlobalConfig, dependencySatisfies, importSync } from '@embroider/macros';
import { D as Destroy, a as Context, S as SOURCE, C as Checkout, b as Commit } from "./symbols-3C1OkYtZ.js";
import { isResourceSchema } from './types/schema/fields.js';
import { a as cloneResponseProperties, I as IS_CACHE_HANDLER, b as assertValidRequest, e as executeNextHandler, d as getRequestResult, u as upgradePromise, s as setPromiseResult, f as clearRequestResult } from "./future-CPfkKOvf.js";
import { getOrSetGlobal, peekTransient, setTransient, peekUniversalTransient, setUniversalTransient } from './types/-private.js';
import { D as DefaultCachePolicy } from "./default-cache-policy-D7_u4YRH.js";
import { withBrand } from './request.js';
import { CACHE_OWNER, DEBUG_STALE_CACHE_OWNER, DEBUG_KEY_TYPE, DEBUG_CLIENT_ORIGINATED } from './types/identifier.js';
import { dasherize } from './utils/string.js';
import { setLogging, getRuntimeConfig } from './types/runtime.js';
import { RecordStore, Type } from './types/symbols.js';
function urlFromLink(link) {
  if (typeof link === 'string') return link;
  return link.href;
}

/**
 * A Document is a class that wraps the response content from a request to the API
 * returned by `Cache.put` or `Cache.peek`, converting ResourceKeys into
 * ReactiveResource instances.
 *
 * It is not directly instantiated by the user, and its properties should not
 * be directly modified. Whether individual properties are mutable or not is
 * determined by the record instance itself.
 *
 * @public
 */

const ReactiveDocumentProto = {
  async _request(link, options = withBrand({
    url: '',
    method: 'GET'
  })) {
    const href = this.links?.[link];
    if (!href) {
      return null;
    }
    options.method = options.method || 'GET';
    Object.assign(options, {
      url: urlFromLink(href)
    });
    const response = await this._store.request(options);
    return response.content;
  },
  fetch(options = withBrand({
    url: '',
    method: 'GET'
  })) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`No self or related link`);
      }
    })(this.links?.related || this.links?.self) : {};
    options.cacheOptions = options.cacheOptions || {};
    options.cacheOptions.key = this.identifier?.lid;
    return this._request(this.links.related ? 'related' : 'self', options);
  },
  next(options) {
    return this._request('next', options);
  },
  prev(options) {
    return this._request('prev', options);
  },
  first(options) {
    return this._request('first', options);
  },
  last(options) {
    return this._request('last', options);
  },
  toJSON() {
    const data = {};
    data.identifier = this.identifier;
    if (this.data !== undefined) {
      data.data = this.data;
    }
    if (this.links !== undefined) {
      data.links = this.links;
    }
    if (this.errors !== undefined) {
      data.errors = this.errors;
    }
    if (this.meta !== undefined) {
      data.meta = this.meta;
    }
    return data;
  },
  [Destroy]() {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Cannot destroy a ReactiveDocument which has already been destroyed`);
      }
    })(this._store) : {};
    if (this._subscription) {
      this._store.notifications.unsubscribe(this._subscription);
      // @ts-expect-error
      this._store = null;
      // @ts-expect-error
      this._subscription = null;
    }
  }
};
defineGate(ReactiveDocumentProto, 'errors', {
  get() {
    const {
      identifier
    } = this;
    if (!identifier) {
      const {
        document
      } = this._localCache;
      if ('errors' in document) {
        return document.errors;
      }
      return;
    }
    const doc = this._store.cache.peek(identifier);
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`No cache data was found for the document '${identifier.lid}'`);
      }
    })(doc) : {};
    return 'errors' in doc ? doc.errors : undefined;
  }
});
defineGate(ReactiveDocumentProto, 'data', {
  get() {
    const {
      identifier,
      _localCache
    } = this;
    const doc = identifier ? this._store.cache.peek(identifier) : _localCache.document;
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`No cache data was found for the document '${identifier?.lid ?? '<uncached document>'}'`);
      }
    })(doc) : {};
    const data = 'data' in doc ? doc.data : undefined;
    if (Array.isArray(data)) {
      return identifier ? this._store.recordArrayManager.getCollection({
        source: data.slice(),
        requestKey: identifier
      }) : this._store.recordArrayManager.getCollection({
        source: data.slice()
      });
    } else if (data) {
      return this._store.peekRecord(data);
    } else {
      return data;
    }
  }
});
defineGate(ReactiveDocumentProto, 'links', {
  get() {
    const {
      identifier
    } = this;
    if (!identifier) {
      return this._localCache.document.links;
    }
    const data = this._store.cache.peek(identifier);
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`No cache data was found for the document '${identifier.lid}'`);
      }
    })(data) : {};
    return data.links;
  }
});
defineGate(ReactiveDocumentProto, 'meta', {
  get() {
    const {
      identifier
    } = this;
    if (!identifier) {
      return this._localCache.document.meta;
    }
    const data = this._store.cache.peek(identifier);
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`No cache data was found for the document '${identifier.lid}'`);
      }
    })(data) : {};
    return data.meta;
  }
});
function createReactiveDocument(store, cacheKey, localCache) {
  const doc = Object.create(ReactiveDocumentProto);
  doc._store = store;
  doc._localCache = localCache;
  // @ts-expect-error we are initializing it here
  doc.identifier = cacheKey;
  const signals = withSignalStore(doc);

  // TODO if we ever enable auto-cleanup of the cache, we will need to tear this down
  // in a destroy method
  if (cacheKey) {
    doc._subscription = store.notifications.subscribe(cacheKey, (_key, type) => {
      switch (type) {
        case 'updated':
          // FIXME in the case of a collection we need to notify it's length
          // and have it recalc
          notifyInternalSignal(peekInternalSignal(signals, 'data'));
          notifyInternalSignal(peekInternalSignal(signals, 'links'));
          notifyInternalSignal(peekInternalSignal(signals, 'meta'));
          notifyInternalSignal(peekInternalSignal(signals, 'errors'));
          break;
      }
    });
  }
  return doc;
}
const TEXT_COLORS = {
  TEXT: 'inherit',
  notify: ['white', 'white', 'inherit', 'magenta', 'inherit'],
  'reactive-ui': ['white', 'white', 'inherit', 'magenta', 'inherit'],
  graph: ['white', 'white', 'inherit', 'magenta', 'inherit'],
  request: ['white', 'white', 'inherit', 'magenta', 'inherit'],
  cache: ['white', 'white', 'inherit', 'magenta', 'inherit']
};
const BG_COLORS = {
  TEXT: 'transparent',
  notify: ['dimgray', 'cadetblue', 'transparent', 'transparent', 'transparent'],
  'reactive-ui': ['dimgray', 'cadetblue', 'transparent', 'transparent', 'transparent'],
  graph: ['dimgray', 'cadetblue', 'transparent', 'transparent', 'transparent'],
  request: ['dimgray', 'cadetblue', 'transparent', 'transparent', 'transparent'],
  cache: ['dimgray', 'cadetblue', 'transparent', 'transparent', 'transparent']
};
const NOTIFY_BORDER = {
  TEXT: 0,
  notify: [3, 2, 0, 0, 0],
  'reactive-ui': [3, 2, 0, 0, 0],
  graph: [3, 2, 0, 0, 0],
  request: [3, 2, 0, 0, 0],
  cache: [3, 2, 0, 0, 0]
};
const LIGHT_DARK_ALT = {
  lightgreen: 'green',
  green: 'lightgreen'
};
function badge(isLight, color, bgColor, border) {
  return [`color: ${correctColor(isLight, color)}; background-color: ${correctColor(isLight, bgColor)}; padding: ${border}px ${2 * border}px; border-radius: ${border}px;`, `color: ${TEXT_COLORS.TEXT}; background-color: ${BG_COLORS.TEXT};`];
}
function colorForBucket(isLight, scope, bucket) {
  if (scope === 'request') {
    return bucket === 'blocking' ? badge(isLight, 'red', 'transparent', 0) : bucket === 'cached' ? badge(isLight, 'lightgreen', 'transparent', 0) : bucket === 'non-blocking' ? badge(isLight, 'orange', 'transparent', 0) : badge(isLight, 'gray', 'transparent', 0);
  }
  if (scope === 'notify') {
    return bucket === 'added' ? badge(isLight, 'lightgreen', 'transparent', 0) : bucket === 'removed' ? badge(isLight, 'red', 'transparent', 0) : badge(isLight, TEXT_COLORS[scope][2], BG_COLORS[scope][2], NOTIFY_BORDER[scope][2]);
  }
  if (scope === 'reactive-ui') {
    return bucket === 'created' ? badge(isLight, 'lightgreen', 'transparent', 0) : bucket === 'disconnected' ? badge(isLight, 'red', 'transparent', 0) : badge(isLight, TEXT_COLORS[scope][2], BG_COLORS[scope][2], NOTIFY_BORDER[scope][2]);
  }
  if (scope === 'cache') {
    return bucket === 'inserted' ? badge(isLight, 'lightgreen', 'transparent', 0) : bucket === 'removed' ? badge(isLight, 'red', 'transparent', 0) : badge(isLight, TEXT_COLORS[scope][2], BG_COLORS[scope][2], NOTIFY_BORDER[scope][2]);
  }
  return badge(isLight, TEXT_COLORS[scope][3], BG_COLORS[scope][3], NOTIFY_BORDER[scope][3]);
}
function logGroup(scope, prefix, subScop1, subScop2, subScop3, subScop4) {
  // eslint-disable-next-line no-console
  console.groupCollapsed(..._log(scope, prefix, subScop1, subScop2, subScop3, subScop4));
}
function log(scope, prefix, subScop1, subScop2, subScop3, subScop4) {
  // eslint-disable-next-line no-console
  console.log(..._log(scope, prefix, subScop1, subScop2, subScop3, subScop4));
}
function correctColor(isLight, color) {
  if (!isLight) {
    return color;
  }
  return color in LIGHT_DARK_ALT ? LIGHT_DARK_ALT[color] : color;
}
function isLightMode() {
  if (window?.matchMedia?.('(prefers-color-scheme: light)').matches) {
    return true;
  }
  return false;
}
function _log(scope, prefix, subScop1, subScop2, subScop3, subScop4) {
  const isLight = isLightMode();
  switch (scope) {
    case 'request':
    case 'reactive-ui':
    case 'notify':
      {
        const scopePath = prefix ? `[${prefix}] ${scope}` : scope;
        const path = subScop4 ? `${subScop3}.${subScop4}` : subScop3;
        return [`%c@warp%c-%cdrive%c %c${scopePath}%c %c${subScop1}%c %c${subScop2}%c %c${path}%c`, ...badge(isLight, 'lightgreen', 'transparent', 0), ...badge(isLight, 'magenta', 'transparent', 0), ...badge(isLight, TEXT_COLORS[scope][0], BG_COLORS[scope][0], NOTIFY_BORDER[scope][0]), ...badge(isLight, TEXT_COLORS[scope][1], BG_COLORS[scope][1], NOTIFY_BORDER[scope][1]), ...badge(isLight, TEXT_COLORS[scope][2], BG_COLORS[scope][2], NOTIFY_BORDER[scope][2]), ...colorForBucket(isLight, scope, path)];
      }
    case 'cache':
      {
        const scopePath = prefix ? `${scope} (${prefix})` : scope;
        return [`%c@warp%c-%cdrive%c %c${scopePath}%c %c${subScop1}%c %c${subScop2}%c %c${subScop3}%c %c${subScop4}%c`, ...badge(isLight, 'lightgreen', 'transparent', 0), ...badge(isLight, 'magenta', 'transparent', 0), ...badge(isLight, TEXT_COLORS[scope][0], BG_COLORS[scope][0], NOTIFY_BORDER[scope][0]), ...badge(isLight, TEXT_COLORS[scope][1], BG_COLORS[scope][1], NOTIFY_BORDER[scope][1]), ...badge(isLight, TEXT_COLORS[scope][2], BG_COLORS[scope][2], NOTIFY_BORDER[scope][2]), ...colorForBucket(isLight, scope, subScop3), ...badge(isLight, TEXT_COLORS[scope][4], BG_COLORS[scope][4], NOTIFY_BORDER[scope][4])];
      }
  }
  return [];
}
function isResource(resource) {
  return Boolean(resource && typeof resource === 'object');
}
function hasProp(resource, prop) {
  return Boolean(isResource(resource) && prop in resource && typeof resource[prop] === 'string' && resource[prop].length);
}
function hasLid(resource) {
  return hasProp(resource, 'lid');
}
function hasId(resource) {
  return hasProp(resource, 'id') || Boolean(isResource(resource) && 'id' in resource && typeof resource.id === 'number');
}
function hasType(resource) {
  return hasProp(resource, 'type');
}
function coerceId(id) {
  if (macroCondition(getGlobalConfig().WarpDrive.deprecations.DEPRECATE_NON_STRICT_ID)) {
    let normalized;
    if (id === null || id === undefined || id === '') {
      normalized = null;
    } else {
      normalized = String(id);
    }
    deprecate(`The resource id '<${typeof id}> ${String(id)} ' is not normalized. Update your application code to use '${JSON.stringify(normalized)}' instead.`, normalized === id, {
      id: 'ember-data:deprecate-non-strict-id',
      until: '6.0',
      for: 'ember-data',
      since: {
        available: '4.13',
        enabled: '5.3'
      }
    });
    return normalized;
  }
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Resource IDs must be a non-empty string or null. Received '${String(id)}'.`);
    }
  })(id === null || typeof id === 'string' && id.length > 0) : {};
  return id;
}
function ensureStringId(id) {
  let normalized = null;
  if (typeof id === 'string') {
    normalized = id.length > 0 ? id : null;
  } else if (typeof id === 'number' && !isNaN(id)) {
    normalized = String(id);
  }
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Expected id to be a string or number, received ${String(id)}`);
    }
  })(normalized !== null) : {};
  return normalized;
}
function normalizeModelName(type) {
  if (macroCondition(getGlobalConfig().WarpDrive.deprecations.DEPRECATE_NON_STRICT_TYPES)) {
    const result = dasherize(type);
    deprecate(`The resource type '${type}' is not normalized. Update your application code to use '${result}' instead of '${type}'.`, result === type, {
      id: 'ember-data:deprecate-non-strict-types',
      until: '6.0',
      for: 'ember-data',
      since: {
        available: '4.13',
        enabled: '5.3'
      }
    });
    return result;
  }
  return type;
}
function installPolyfill() {
  const isFastBoot = typeof FastBoot !== 'undefined';
  const CRYPTO = isFastBoot ? FastBoot.require('crypto') : globalThis.crypto;
  if (!CRYPTO.randomUUID) {
    // we might be able to optimize this by requesting more bytes than we need at a time
    const rng = function () {
      // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
      const rnds8 = new Uint8Array(16);
      if (!CRYPTO.getRandomValues && !isFastBoot) {
        throw new Error(`Unable to generate bytes for UUID`);
      }
      return CRYPTO.getRandomValues ? CRYPTO.getRandomValues(rnds8) : CRYPTO.randomFillSync(rnds8);
    };

    /*
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */
    const byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex[i] = (i + 0x100).toString(16).substr(1);
    }
    const bytesToUuid = function (buf) {
      const bth = byteToHex;
      // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
      return [bth[buf[0]], bth[buf[1]], bth[buf[2]], bth[buf[3]], '-', bth[buf[4]], bth[buf[5]], '-', bth[buf[6]], bth[buf[7]], '-', bth[buf[8]], bth[buf[9]], '-', bth[buf[10]], bth[buf[11]], bth[buf[12]], bth[buf[13]], bth[buf[14]], bth[buf[15]]].join('');
    };
    CRYPTO.randomUUID = function uuidv4() {
      const rnds = rng();

      // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
      rnds[6] = rnds[6] & 0x0f | 0x40;
      rnds[8] = rnds[8] & 0x3f | 0x80;
      return bytesToUuid(rnds);
    };
  }
}
function isResourceKey(identifier) {
  if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
    return !!identifier && typeof identifier === 'object' && 'type' in identifier && 'id' in identifier && identifier.type !== '@document' && identifier[CACHE_OWNER] !== undefined;
  } else {
    return identifier.type !== '@document' && identifier[CACHE_OWNER] !== undefined;
  }
}
function isRequestKey(identifier) {
  if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
    return !!identifier && typeof identifier === 'object' && 'type' in identifier && !('id' in identifier) && identifier.type === '@document' && identifier[CACHE_OWNER] !== undefined;
  } else {
    return identifier.type === '@document' && identifier[CACHE_OWNER] !== undefined;
  }
}
const isFastBoot = typeof FastBoot !== 'undefined';
const _crypto = isFastBoot ? FastBoot.require('crypto') : globalThis.crypto;
if (macroCondition(getGlobalConfig().WarpDrive.polyfillUUID)) {
  installPolyfill();
}
function uuidv4() {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error('crypto.randomUUID needs to be avaliable. Some browsers incorrectly disallow it in insecure contexts. You maybe want to enable the polyfill: https://github.com/warp-drive-data/warp-drive#randomuuid-polyfill');
    }
  })(typeof _crypto.randomUUID === 'function') : {};
  return _crypto.randomUUID();
}
function freeze(obj) {
  if (typeof Object.freeze === 'function') {
    return Object.freeze(obj);
  }
  return obj;
}

// type IdentifierTypeLookup = { all: Set<ResourceKey>; id: Map<string, ResourceKey> };
// type IdentifiersByType = Map<string, IdentifierTypeLookup>;

/**
  Configures how unique identifier lid strings are generated by @ember-data/store.

  This configuration MUST occur prior to the store instance being created.

  Takes a method which can expect to receive various data as its first argument
  and the name of a bucket as its second argument.

  Currently there are two buckets, 'record' and 'document'.

  ### Resource (`Record`) Identity

  If the bucket is `record` the method must return a unique (to at-least
  the given bucket) string identifier for the given data as a string to be
  used as the `lid` of an `Identifier` token.

  This method will only be called by either `getOrCreateRecordIdentifier` or
  `createIdentifierForNewRecord` when an identifier for the supplied data
  is not already known via `lid` or `type + id` combo and one needs to be
  generated or retrieved from a proprietary cache.

  `data` will be the same data argument provided to `getOrCreateRecordIdentifier`
  and in the `createIdentifierForNewRecord` case will be an object with
  only `type` as a key.

  ```ts
  import { setIdentifierGenerationMethod } from '@warp-drive/core';

  export function initialize(applicationInstance) {
    // note how `count` here is now scoped to the application instance
    // for our generation method by being inside the closure provided
    // by the initialize function
    let count = 0;

    setIdentifierGenerationMethod((resource, bucket) => {
      return resource.lid || `my-key-${count++}`;
    });
  }

  export default {
    name: 'configure-ember-data-identifiers',
    initialize
  };
  ```

  ### Document Identity

  If the bucket is `document` the method will receive the associated
  immutable `request` passed to `store.request` as its first argument
  and should return a unique string for the given request if the document
  should be cached, and `null` if it should not be cached.

  Note, the request result will still be passed to the cache via `Cache.put`,
  but caches should take this as a signal that the document should not itself
  be cached, while its contents may still be used to update other cache state.

  The presence of `cacheOptions.key` on the request will take precedence
  for the document cache key, and this method will not be called if it is
  present.

  The default method implementation for this bucket is to return `null`
  for all requests whose method is not `GET`, and to return the `url` for
  those where it is.

  This means that queries via `POST` MUST provide `cacheOptions.key` or
  implement this hook.

  ⚠️ Caution: Requests that do not have a `method` assigned are assumed to be `GET`

  @public
*/
function setIdentifierGenerationMethod(method) {
  setTransient('configuredGenerationMethod', method);
}

/**
 Configure a callback for when the identifier cache encounters new resource
 data for an existing resource.

 This configuration MUST occur prior to the store instance being created.

 ```js
 import { setIdentifierUpdateMethod } from '@warp-drive/core';
 ```

 Takes a method which can expect to receive an existing `Identifier` alongside
 some new data to consider as a second argument. This is an opportunity
 for secondary lookup tables and caches associated with the identifier
 to be amended.

 This method is called everytime `updateRecordIdentifier` is called and
  with the same arguments. It provides the opportunity to update secondary
  lookup tables for existing identifiers.

 It will always be called after an identifier created with `createIdentifierForNewRecord`
  has been committed, or after an update to the `record` a `RecordIdentifier`
  is assigned to has been committed. Committed here meaning that the server
  has acknowledged the update (for instance after a call to `.save()`)

 If `id` has not previously existed, it will be assigned to the `Identifier`
  prior to this `UpdateMethod` being called; however, calls to the parent method
  `updateRecordIdentifier` that attempt to change the `id` or calling update
  without providing an `id` when one is missing will throw an error.

  @public
*/
function setIdentifierUpdateMethod(method) {
  setTransient('configuredUpdateMethod', method);
}

/**
 Configure a callback for when the identifier cache is going to release an identifier.

 This configuration MUST occur prior to the store instance being created.

 ```js
 import { setIdentifierForgetMethod } from '@warp-drive/core';
 ```

 Takes method which can expect to receive an existing `Identifier` that should be eliminated
 from any secondary lookup tables or caches that the user has populated for it.

  @public
*/
function setIdentifierForgetMethod(method) {
  setTransient('configuredForgetMethod', method);
}

/**
 Configure a callback for when the identifier cache is being torn down.

 This configuration MUST occur prior to the store instance being created.

 ```js
 import { setIdentifierResetMethod } from '@warp-drive/core';
 ```

 Takes a method which can expect to be called when the parent application is destroyed.

 If you have properly used a WeakMap to encapsulate the state of your customization
 to the application instance, you may not need to implement the `resetMethod`.

  @public
*/
function setIdentifierResetMethod(method) {
  setTransient('configuredResetMethod', method);
}

/**
 Configure a callback for when the identifier cache is generating a new
 ResourceKey for a resource.

 This method controls the `type` and `id` that will be assigned to the
 `ResourceKey` that is created.

 This configuration MUST occur prior to the store instance being created.

 ```js
 import { setKeyInfoForResource } from '@warp-drive/core';
 ```

  @public
 */
function setKeyInfoForResource(method) {
  setTransient('configuredKeyInfoMethod', method);
}

// Map<type, Map<id, lid>>

// TODO can we just delete this?
const NEW_IDENTIFIERS = new Map();
// TODO @runspired maybe needs peekTransient ?
let IDENTIFIER_CACHE_ID = 0;
function updateTypeIdMapping(typeMap, identifier, id) {
  let idMap = typeMap.get(identifier.type);
  if (!idMap) {
    idMap = new Map();
    typeMap.set(identifier.type, idMap);
  }
  idMap.set(id, identifier.lid);
}
function defaultUpdateMethod(identifier, data, bucket) {
  if (bucket === 'record') {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected identifier to be a ResourceKey`);
      }
    })(isResourceKey(identifier)) : {};
    if (!identifier.id && hasId(data)) {
      updateTypeIdMapping(NEW_IDENTIFIERS, identifier, data.id);
    }
  }
}
function defaultKeyInfoMethod(resource, known) {
  // TODO RFC something to make this configurable
  const id = hasId(resource) ? coerceId(resource.id) : null;
  const type = hasType(resource) ? normalizeModelName(resource.type) : known ? known.type : null;
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Expected keyInfoForResource to provide a type for the resource`);
    }
  })(type) : {};
  return {
    type,
    id
  };
}
function defaultGenerationMethod(data, bucket) {
  if (bucket === 'record') {
    if (hasLid(data)) {
      return data.lid;
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Cannot generate an identifier for a resource without a type`);
      }
    })(hasType(data)) : {};
    if (hasId(data)) {
      const type = normalizeModelName(data.type);
      const lid = NEW_IDENTIFIERS.get(type)?.get(data.id);
      return lid || `@lid:${type}-${data.id}`;
    }
    return uuidv4();
  } else if (bucket === 'document') {
    if (!data.url) {
      return null;
    }
    if (!data.method || data.method.toUpperCase() === 'GET') {
      return data.url;
    }
    return null;
  }
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    {
      throw new Error(`Unknown bucket ${bucket}`);
    }
  })() : {};
}
function defaultEmptyCallback(...args) {}
function defaultMergeMethod(a, _b, _c) {
  return a;
}
let DEBUG_MAP;
if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
  DEBUG_MAP = getOrSetGlobal('DEBUG_MAP', new WeakMap());
}

/**
 * Each instance of {@link Store} receives a unique instance of a CacheKeyManager.
 *
 * This cache is responsible for assigning or retrieving the unique identify
 * for arbitrary resource data encountered by the store. Data representing
 * a unique resource or record should always be represented by the same
 * identifier.
 *
 * It can be configured by consuming applications.
 *
 * @hideconstructor
 * @public
 */
class CacheKeyManager {
  /** @internal */
  _cache;
  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  constructor() {
    // we cache the user configuredGenerationMethod at init because it must
    // be configured prior and is not allowed to be changed
    this._generate = peekTransient('configuredGenerationMethod') || defaultGenerationMethod;
    this._update = peekTransient('configuredUpdateMethod') || defaultUpdateMethod;
    this._forget = peekTransient('configuredForgetMethod') || defaultEmptyCallback;
    this._reset = peekTransient('configuredResetMethod') || defaultEmptyCallback;
    this._merge = defaultMergeMethod;
    this._keyInfoForResource = peekTransient('configuredKeyInfoMethod') || defaultKeyInfoMethod;
    this._id = IDENTIFIER_CACHE_ID++;
    this._cache = {
      resources: new Map(),
      resourcesByType: Object.create(null),
      documents: new Map(),
      polymorphicLidBackMap: new Map()
    };
  }

  /**
   * Internal hook to allow management of merge conflicts with identifiers.
   *
   * we allow late binding of this private internal merge so that
   * the cache can insert itself here to handle elimination of duplicates
   *
   * @internal
   */
  __configureMerge(method) {
    this._merge = method || defaultMergeMethod;
  }

  /** @internal */
  upgradeIdentifier(resource) {
    return this._getRecordIdentifier(resource, 2);
  }

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */
  _getRecordIdentifier(resource, shouldGenerate) {
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_IDENTIFIERS)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_IDENTIFIERS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_IDENTIFIERS) {
        // eslint-disable-next-line no-console
        console.groupCollapsed(`Identifiers: ${shouldGenerate ? 'Generating' : 'Peeking'} Identifier`, resource);
      }
    }
    // short circuit if we're already the stable version
    if (isResourceKey(resource)) {
      if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
        // TODO should we instead just treat this case as a new generation skipping the short circuit?
        if (!this._cache.resources.has(resource.lid) || this._cache.resources.get(resource.lid) !== resource) {
          throw new Error(`The supplied identifier ${JSON.stringify(resource)} does not belong to this store instance`);
        }
      }
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_IDENTIFIERS)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_IDENTIFIERS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_IDENTIFIERS) {
          // eslint-disable-next-line no-console
          console.log(`Identifiers: cache HIT - Stable ${resource.lid}`);
          // eslint-disable-next-line no-console
          console.groupEnd();
        }
      }
      return resource;
    }

    // the resource is unknown, ask the application to identify this data for us
    const lid = this._generate(resource, 'record');
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_IDENTIFIERS)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_IDENTIFIERS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_IDENTIFIERS) {
        // eslint-disable-next-line no-console
        console.log(`Identifiers: ${lid ? 'no ' : ''}lid ${lid ? lid + ' ' : ''}determined for resource`, resource);
      }
    }
    let identifier = /*#__NOINLINE__*/getIdentifierFromLid(this._cache, lid, resource);
    if (identifier !== null) {
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_IDENTIFIERS)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_IDENTIFIERS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_IDENTIFIERS) {
          // eslint-disable-next-line no-console
          console.groupEnd();
        }
      }
      return identifier;
    }
    if (shouldGenerate === 0) {
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_IDENTIFIERS)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_IDENTIFIERS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_IDENTIFIERS) {
          // eslint-disable-next-line no-console
          console.groupEnd();
        }
      }
      return;
    }

    // if we still don't have an identifier, time to generate one
    if (shouldGenerate === 2) {
      resource.lid = lid;
      resource[CACHE_OWNER] = this._id;
      identifier = /*#__NOINLINE__*/makeResourceKey(resource, 'record', false);
    } else {
      // we lie a bit here as a memory optimization
      const keyInfo = this._keyInfoForResource(resource, null);
      keyInfo.lid = lid;
      keyInfo[CACHE_OWNER] = this._id;
      identifier = /*#__NOINLINE__*/makeResourceKey(keyInfo, 'record', false);
    }
    addResourceToCache(this._cache, identifier);
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_IDENTIFIERS)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_IDENTIFIERS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_IDENTIFIERS) {
        // eslint-disable-next-line no-console
        console.groupEnd();
      }
    }
    return identifier;
  }

  /**
   * allows us to peek without generating when needed
   * useful for the "create" case when we need to see if
   * we are accidentally overwritting something
   *
   * @private
   */
  peekResourceKey(resource) {
    return this._getRecordIdentifier(resource, 0);
  }

  /**
   * Peeks the {@link RequestKey} for the given {@link RequestInfo}, but will not
   * create one if none has been previously generated.
   *
   * @public
   */
  peekRequestKey(request) {
    let cacheKey = request.cacheOptions?.key;
    if (!cacheKey) {
      cacheKey = this._generate(request, 'document');
    }
    if (!cacheKey) {
      return null;
    }
    const identifier = this._cache.documents.get(cacheKey);
    return identifier ?? null;
  }

  /**
   * Returns the {@link RequestKey} for the given {@link RequestInfo} if the request is
   * considered cacheable. For cacheable requests, this method will create
   * a RequestKey if none is found.
   *
   * A `null` response indicates the request cannot/will not be cached,
   * generally this means either
   *
   * - {@link RequestInfo.cacheOptions.key} is not present on the `RequestInfo`
   * - the request's method is `GET` but it has no `url`
   *
   * Generally you should not seek to cache requests that are not idempotent
   * or have side effects, such as mutations that create, update or delete
   * a resource.
   *
   * @public
   */
  getOrCreateDocumentIdentifier(request) {
    let cacheKey = request.cacheOptions?.key;
    if (!cacheKey) {
      cacheKey = this._generate(request, 'document');
    }
    if (!cacheKey) {
      return null;
    }
    let identifier = this._cache.documents.get(cacheKey);
    if (identifier === undefined) {
      identifier = {
        lid: cacheKey,
        type: '@document',
        [CACHE_OWNER]: this._id
      };
      if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
        Object.freeze(identifier);
      }
      this._cache.documents.set(cacheKey, identifier);
    }
    return identifier;
  }

  /**
    Returns the {@link ResourceKey} for the given Resource, creates one if it does not yet exist.
     Specifically this means that we:
     - validate the `id` `type` and `lid` combo against known identifiers
    - return an object with an `lid` that is stable (repeated calls with the same
      `id` + `type` or `lid` will return the same `lid` value)
    - this referential stability of the object itself is guaranteed
     @public
  */
  getOrCreateRecordIdentifier(resource) {
    return this._getRecordIdentifier(resource, 1);
  }

  /**
   Returns a new Identifier for the supplied data. Call this method to generate
   an identifier when a new resource is being created local to the client and
   potentially does not have an `id`.
    Delegates generation to the user supplied `GenerateMethod` if one has been provided
   with the signature `generateMethod({ type }, 'record')`.
    @public
  */
  createIdentifierForNewRecord(data) {
    const newLid = this._generate(data, 'record');
    const identifier = /*#__NOINLINE__*/makeResourceKey({
      id: data.id || null,
      type: data.type,
      lid: newLid,
      [CACHE_OWNER]: this._id
    }, 'record', true);

    // populate our unique table
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      if (this._cache.resources.has(identifier.lid)) {
        throw new Error(`The lid generated for the new record is not unique as it matches an existing identifier`);
      }
    }

    /*#__NOINLINE__*/
    addResourceToCache(this._cache, identifier);
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_IDENTIFIERS)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_IDENTIFIERS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_IDENTIFIERS) {
        // eslint-disable-next-line no-console
        console.log(`Identifiers: created identifier ${String(identifier)} for newly generated resource`, data);
      }
    }
    return identifier;
  }

  /**
   Provides the opportunity to update secondary lookup tables for existing identifiers
   Called after an identifier created with `createIdentifierForNewRecord` has been
   committed.
    Assigned `id` to an `Identifier` if `id` has not previously existed; however,
   attempting to change the `id` or calling update without providing an `id` when
   one is missing will throw an error.
     - sets `id` (if `id` was previously `null`)
    - `lid` and `type` MUST NOT be altered post creation
     If a merge occurs, it is possible the returned identifier does not match the originally
    provided identifier. In this case the abandoned identifier will go through the usual
    `forgetRecordIdentifier` codepaths.
     @public
  */
  // FIXME audit usage
  updateRecordIdentifier(identifierObject, data) {
    let identifier = this.getOrCreateRecordIdentifier(identifierObject);
    const keyInfo = this._keyInfoForResource(data, identifier);
    let existingIdentifier = /*#__NOINLINE__*/detectMerge(this._cache, keyInfo, identifier, data);
    const hadLid = hasLid(data);
    if (!existingIdentifier) {
      // If the incoming type does not match the identifier type, we need to create an identifier for the incoming
      // data so we can merge the incoming data with the existing identifier, see #7325 and #7363
      if (identifier.type !== keyInfo.type) {
        if (hadLid) {
          // Strip the lid to ensure we force a new identifier creation
          delete data.lid;
        }
        existingIdentifier = this.getOrCreateRecordIdentifier(data);
      }
    }
    if (existingIdentifier) {
      const generatedIdentifier = identifier;
      identifier = this._mergeRecordIdentifiers(keyInfo, generatedIdentifier, existingIdentifier, data);

      // make sure that the `lid` on the data we are processing matches the lid we kept
      if (hadLid) {
        data.lid = identifier.lid;
      }
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_IDENTIFIERS)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_IDENTIFIERS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_IDENTIFIERS) {
          // eslint-disable-next-line no-console
          console.log(`Identifiers: merged identifiers ${generatedIdentifier.lid} and ${existingIdentifier.lid} for resource into ${identifier.lid}`, data);
        }
      }
    }
    const id = identifier.id;
    /*#__NOINLINE__*/
    performRecordIdentifierUpdate(identifier, keyInfo, data, this._update);
    const newId = identifier.id;

    // add to our own secondary lookup table
    if (id !== newId && newId !== null) {
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_IDENTIFIERS)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_IDENTIFIERS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_IDENTIFIERS) {
          // eslint-disable-next-line no-console
          console.log(`Identifiers: updated id for identifier ${identifier.lid} from '${String(id)}' to '${String(newId)}' for resource`, data);
        }
      }
      const typeSet = this._cache.resourcesByType[identifier.type];
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`Expected to find a typeSet for ${identifier.type}`);
        }
      })(typeSet) : {};
      typeSet.id.set(newId, identifier);
      if (id !== null) {
        typeSet.id.delete(id);
      }
    } else if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_IDENTIFIERS)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_IDENTIFIERS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_IDENTIFIERS) {
        // eslint-disable-next-line no-console
        console.log(`Identifiers: updated identifier ${identifier.lid} resource`, data);
      }
    }
    return identifier;
  }

  /**
   * @internal
   */
  _mergeRecordIdentifiers(keyInfo, identifier, existingIdentifier, data) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected keyInfo to contain an id`);
      }
    })(hasId(keyInfo)) : {};
    // delegate determining which identifier to keep to the configured MergeMethod
    const kept = this._merge(identifier, existingIdentifier, data);
    const abandoned = kept === identifier ? existingIdentifier : identifier;

    // get any backreferences before forgetting this identifier, as it will be removed from the cache
    // and we will no longer be able to find them
    const abandonedBackReferences = this._cache.polymorphicLidBackMap.get(abandoned.lid);
    // delete the backreferences for the abandoned identifier so that forgetRecordIdentifier
    // does not try to remove them.
    if (abandonedBackReferences) this._cache.polymorphicLidBackMap.delete(abandoned.lid);

    // cleanup the identifier we no longer need
    this.forgetRecordIdentifier(abandoned);

    // ensure a secondary cache entry for the original lid for the abandoned identifier
    this._cache.resources.set(abandoned.lid, kept);

    // backReferences let us know which other identifiers are pointing at this identifier
    // so we can delete them later if we forget this identifier
    const keptBackReferences = this._cache.polymorphicLidBackMap.get(kept.lid) ?? [];
    keptBackReferences.push(abandoned.lid);

    // update the backreferences from the abandoned identifier to be for the kept identifier
    if (abandonedBackReferences) {
      abandonedBackReferences.forEach(lid => {
        keptBackReferences.push(lid);
        this._cache.resources.set(lid, kept);
      });
    }
    this._cache.polymorphicLidBackMap.set(kept.lid, keptBackReferences);
    return kept;
  }

  /**
   Provides the opportunity to eliminate an identifier from secondary lookup tables
   as well as eliminates it from ember-data's own lookup tables and book keeping.
    Useful when a record has been deleted and the deletion has been persisted and
   we do not care about the record anymore. Especially useful when an `id` of a
   deleted record might be reused later for a new record.
    @public
  */
  // FIXME audit usage
  forgetRecordIdentifier(identifierObject) {
    const identifier = this.getOrCreateRecordIdentifier(identifierObject);
    const typeSet = this._cache.resourcesByType[identifier.type];
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected to find a typeSet for ${identifier.type}`);
      }
    })(typeSet) : {};
    if (identifier.id !== null) {
      typeSet.id.delete(identifier.id);
    }
    this._cache.resources.delete(identifier.lid);
    typeSet.lid.delete(identifier.lid);
    const backReferences = this._cache.polymorphicLidBackMap.get(identifier.lid);
    if (backReferences) {
      backReferences.forEach(lid => {
        this._cache.resources.delete(lid);
      });
      this._cache.polymorphicLidBackMap.delete(identifier.lid);
    }
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      identifier[DEBUG_STALE_CACHE_OWNER] = identifier[CACHE_OWNER];
    }
    identifier[CACHE_OWNER] = undefined;
    this._forget(identifier, 'record');
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_IDENTIFIERS)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_IDENTIFIERS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_IDENTIFIERS) {
        // eslint-disable-next-line no-console
        console.log(`Identifiers: released identifier ${identifierObject.lid}`);
      }
    }
  }

  /** @internal */
  destroy() {
    NEW_IDENTIFIERS.clear();
    this._reset();
  }
}

/**
 * This type exists for internal use only for
 * where intimate contracts still exist either for
 * the Test Suite or for Legacy code.
 *
 * @private
 */

function makeResourceKey(recordIdentifier, bucket, clientOriginated) {
  if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
    // we enforce immutability in dev
    //  but preserve our ability to do controlled updates to the reference
    let wrapper = {
      type: recordIdentifier.type,
      lid: recordIdentifier.lid,
      get id() {
        return recordIdentifier.id;
      }
    };
    const proto = {
      get [CACHE_OWNER]() {
        return recordIdentifier[CACHE_OWNER];
      },
      set [CACHE_OWNER](value) {
        recordIdentifier[CACHE_OWNER] = value;
      },
      get [DEBUG_STALE_CACHE_OWNER]() {
        return recordIdentifier[DEBUG_STALE_CACHE_OWNER];
      },
      set [DEBUG_STALE_CACHE_OWNER](value) {
        recordIdentifier[DEBUG_STALE_CACHE_OWNER] = value;
      },
      get [DEBUG_CLIENT_ORIGINATED]() {
        return clientOriginated;
      },
      get [DEBUG_KEY_TYPE]() {
        return bucket;
      }
    };
    Object.defineProperty(proto, 'toString', {
      enumerable: false,
      value: () => {
        const {
          type,
          id,
          lid
        } = recordIdentifier;
        return `${clientOriginated ? '[CLIENT_ORIGINATED] ' : ''}${String(type)}:${String(id)} (${lid})`;
      }
    });
    Object.defineProperty(proto, 'toJSON', {
      enumerable: false,
      value: () => {
        const {
          type,
          id,
          lid
        } = recordIdentifier;
        return {
          type,
          id,
          lid
        };
      }
    });
    Object.setPrototypeOf(wrapper, proto);
    DEBUG_MAP.set(wrapper, recordIdentifier);
    wrapper = freeze(wrapper);
    return wrapper;
  }
  return recordIdentifier;
}
function performRecordIdentifierUpdate(identifier, keyInfo, data, updateFn) {
  if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
    const {
      id,
      type
    } = keyInfo;

    // get the mutable instance behind our proxy wrapper
    const wrapper = identifier;
    identifier = DEBUG_MAP.get(wrapper);
    if (hasLid(data)) {
      const lid = data.lid;
      if (lid !== identifier.lid) {
        throw new Error(`The 'lid' for a ResourceKey cannot be updated once it has been created. Attempted to set lid for '${wrapper.lid}' to '${lid}'.`);
      }
    }
    if (id && identifier.id !== null && identifier.id !== id) {
      // here we warn and ignore, as this may be a mistake, but we allow the user
      // to have multiple cache-keys pointing at a single lid so we cannot error
      warn(`The 'id' for a ResourceKey should not be updated once it has been set. Attempted to set id for '${wrapper.lid}' to '${id}'.`, false, {
        id: 'ember-data:multiple-ids-for-identifier'
      });
    }

    // TODO consider just ignoring here to allow flexible polymorphic support
    if (type && type !== identifier.type) {
      throw new Error(`The 'type' for a ResourceKey cannot be updated once it has been set. Attempted to set type for '${wrapper.lid}' to '${type}'.`);
    }
    updateFn(wrapper, data, 'record');
  } else {
    updateFn(identifier, data, 'record');
  }

  // upgrade the ID, this is a "one time only" ability
  // for the multiple-cache-key scenario we "could"
  // use a heuristic to guess the best id for display
  // (usually when `data.id` is available and `data.attributes` is not)
  if (data.id !== undefined) {
    identifier.id = coerceId(data.id);
  }
}
function detectMerge(cache, keyInfo, identifier, data) {
  const newId = keyInfo.id;
  const {
    id,
    type,
    lid
  } = identifier;
  const typeSet = cache.resourcesByType[identifier.type];

  // if the IDs are present but do not match
  // then check if we have an existing identifier
  // for the newer ID.
  if (id !== null && id !== newId && newId !== null) {
    const existingIdentifier = typeSet && typeSet.id.get(newId);
    return existingIdentifier !== undefined ? existingIdentifier : false;
  } else {
    const newType = keyInfo.type;

    // If the ids and type are the same but lid is not the same, we should trigger a merge of the identifiers
    // we trigger a merge of the identifiers
    // though probably we should just throw an error here
    if (id !== null && id === newId && newType === type && hasLid(data) && data.lid !== lid) {
      return getIdentifierFromLid(cache, data.lid, data) || false;

      // If the lids are the same, and ids are the same, but types are different we should trigger a merge of the identifiers
    } else if (id !== null && id === newId && newType && newType !== type && hasLid(data) && data.lid === lid) {
      const newTypeSet = cache.resourcesByType[newType];
      const existingIdentifier = newTypeSet && newTypeSet.id.get(newId);
      return existingIdentifier !== undefined ? existingIdentifier : false;
    }
  }
  return false;
}
function getIdentifierFromLid(cache, lid, resource) {
  const identifier = cache.resources.get(lid);
  if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_IDENTIFIERS)) {
    if (getGlobalConfig().WarpDrive.debug.LOG_IDENTIFIERS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_IDENTIFIERS) {
      // eslint-disable-next-line no-console
      console.log(`Identifiers: cache ${identifier ? 'HIT' : 'MISS'} - Non-Stable ${lid}`, resource);
    }
  }
  return identifier || null;
}
function addResourceToCache(cache, identifier) {
  cache.resources.set(identifier.lid, identifier);
  let typeSet = cache.resourcesByType[identifier.type];
  if (!typeSet) {
    typeSet = {
      lid: new Map(),
      id: new Map()
    };
    cache.resourcesByType[identifier.type] = typeSet;
  }
  typeSet.lid.set(identifier.lid, identifier);
  if (identifier.id) {
    typeSet.id.set(identifier.id, identifier);
  }
}
class CacheCapabilitiesManager {
  /** @internal */

  /** @internal */

  /** @internal */

  constructor(_store) {
    this._store = _store;
    this._willNotify = false;
    this._pendingNotifies = new Map();
  }
  get cacheKeyManager() {
    return this._store.cacheKeyManager;
  }

  /** @deprecated use {@link CacheCapabilitiesManager.cacheKeyManager} */
  get identifierCache() {
    return this.cacheKeyManager;
  }

  /** @internal */
  _scheduleNotification(identifier, key) {
    let pending = this._pendingNotifies.get(identifier);
    if (!pending) {
      pending = new Set();
      this._pendingNotifies.set(identifier, pending);
    }
    pending.add(key);
    if (this._willNotify === true) {
      return;
    }
    this._willNotify = true;
    // it's possible a cache adhoc notifies us,
    // in which case we sync flush
    if (this._store._cbs) {
      this._store._schedule('notify', () => this._flushNotifications());
    } else {
      // TODO @runspired determine if relationship mutations should schedule
      // into join/run vs immediate flush
      this._flushNotifications();
    }
  }

  /** @internal */
  _flushNotifications() {
    if (this._willNotify === false) {
      return;
    }
    const pending = this._pendingNotifies;
    this._pendingNotifies = new Map();
    this._willNotify = false;
    pending.forEach((set, identifier) => {
      set.forEach(key => {
        this._store.notifications.notify(identifier, 'relationships', key);
      });
    });
  }
  notifyChange(identifier, namespace, key) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected a stable identifier`);
      }
    })(isResourceKey(identifier) || isRequestKey(identifier)) : {};

    // TODO do we still get value from this?
    if (namespace === 'relationships' && key) {
      this._scheduleNotification(identifier, key);
      return;
    }

    // @ts-expect-error
    this._store.notifications.notify(identifier, namespace, key);
  }
  get schema() {
    return this._store.schema;
  }
  setRecordId(identifier, id) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected a stable identifier`);
      }
    })(isResourceKey(identifier)) : {};
    this._store._instanceCache.setRecordId(identifier, id);
  }
  hasRecord(identifier) {
    return Boolean(this._store._instanceCache.peek(identifier));
  }
  disconnectRecord(identifier) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected a stable identifier`);
      }
    })(isResourceKey(identifier)) : {};
    this._store._instanceCache.disconnect(identifier);
    this._pendingNotifies.delete(identifier);
  }
}

/**
 * This type exists for internal use only for
 * where intimate contracts still exist either for
 * the Test Suite or for Legacy code.
 *
 * @private
 */

if (macroCondition(getGlobalConfig().WarpDrive.deprecations.ENABLE_LEGACY_SCHEMA_SERVICE)) {
  CacheCapabilitiesManager.prototype.getSchemaDefinitionService = function () {
    // FIXME add deprecation for this
    return this.schema;
  };
}
function assertPrivateCapabilities(manager) {}
function isDestroyable(record) {
  return Boolean(record && typeof record === 'object' && typeof record.destroy === 'function');
}
const RecordCache = getOrSetGlobal('RecordCache', new Map());
function peekResourceKey(record) {
  return RecordCache.get(record);
}

/**
  Retrieves the unique referentially-stable {@link ResourceKey}
  assigned to the given record instance.

  ```js
  import { recordIdentifierFor } from "@warp-drive/core";
  // ... gain access to a record, for instance with peekRecord or findRecord
  const record = store.peekRecord("user", "1");
  // get the identifier for the record (see docs for ResourceKey)
  const identifier = recordIdentifierFor(record);
  // access the identifier's properties.
  const { id, type, lid } = identifier;
  ```

  @public
  @param record a record instance previously obstained from the store.
 */

function recordIdentifierFor(record) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`${String(record)} is not a ReactiveResource or Model known to WarpDrive`);
    }
  })(RecordCache.has(record)) : {};
  return RecordCache.get(record);
}
function setRecordIdentifier(record, identifier) {
  if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
    if (RecordCache.has(record) && RecordCache.get(record) !== identifier) {
      throw new Error(`${String(record)} was already assigned an identifier`);
    }
  }

  /*
  It would be nice to do a reverse check here that an identifier has not
  previously been assigned a record; however, unload + rematerialization
  prevents us from having a great way of doing so when CustomRecordClasses
  don't necessarily give us access to a `isDestroyed` for dematerialized
  instance.
  */

  RecordCache.set(record, identifier);
}
function removeRecordIdentifier(record) {
  if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
    if (!RecordCache.has(record)) {
      throw new Error(`${String(record)} had no assigned identifier to remove`);
    }
  }
  RecordCache.delete(record);
}
const StoreMap = getOrSetGlobal('StoreMap', new Map());

/**
 * We may eventually make this public, but its likely better for this to be killed off
 * @private
 */
function storeFor(record, ignoreMissing) {
  const store = StoreMap.get(record);
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`A record in a disconnected state cannot utilize the store. This typically means the record has been destroyed, most commonly by unloading it.`);
    }
  })(ignoreMissing || store) : {};
  return store ?? null;
}
class InstanceCache {
  constructor(store) {
    this.store = store;
    this.__instances = {
      record: new Map(),
      document: new Map()
    };
    this._storeWrapper = new CacheCapabilitiesManager(this.store);
    store.cacheKeyManager.__configureMerge((identifier, matchedIdentifier, resourceData) => {
      let keptIdentifier = identifier;
      if (identifier.id !== matchedIdentifier.id) {
        // @ts-expect-error TODO this needs to be fixed
        keptIdentifier = 'id' in resourceData && identifier.id === resourceData.id ? identifier : matchedIdentifier;
      } else if (identifier.type !== matchedIdentifier.type) {
        keptIdentifier =
        // @ts-expect-error TODO this needs to be fixed
        'type' in resourceData && identifier.type === resourceData.type ? identifier : matchedIdentifier;
      }
      const staleIdentifier = identifier === keptIdentifier ? matchedIdentifier : identifier;

      // check for duplicate entities
      const keptHasRecord = this.__instances.record.has(keptIdentifier);
      const staleHasRecord = this.__instances.record.has(staleIdentifier);

      // we cannot merge entities when both have records
      // (this may not be strictly true, we could probably swap the cache data the record points at)
      if (keptHasRecord && staleHasRecord) {
        // TODO we probably don't need to throw these errors anymore
        // we can probably just "swap" what data source the abandoned
        // record points at so long as
        // it itself is not retained by the store in any way.
        // @ts-expect-error TODO this needs to be fixed
        if ('id' in resourceData) {
          throw new Error(`Failed to update the 'id' for the ResourceKey '${identifier.type}:${String(identifier.id)} (${identifier.lid})' to '${String(resourceData.id)}', because that id is already in use by '${matchedIdentifier.type}:${String(matchedIdentifier.id)} (${matchedIdentifier.lid})'`);
        }
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          {
            throw new Error(`Failed to update the ResourceKey '${identifier.type}:${String(identifier.id)} (${identifier.lid})' to merge with the detected duplicate identifier '${matchedIdentifier.type}:${String(matchedIdentifier.id)} (${String(matchedIdentifier.lid)})'`);
          }
        })() : {};
      }
      this.store.cache.patch({
        op: 'mergeIdentifiers',
        record: staleIdentifier,
        value: keptIdentifier
      });

      /*
      TODO @runspired consider adding this to make polymorphism even nicer
      if (identifier.type !== matchedIdentifier.type) {
      this.store._graph?.registerPolymorphicType(identifier.type, matchedIdentifier.type);
      }
      */

      this.unloadRecord(staleIdentifier);
      return keptIdentifier;
    });
  }
  peek(identifier) {
    return this.__instances.record.get(identifier);
  }
  getDocument(identifier) {
    let doc = this.__instances.document.get(identifier);
    if (!doc) {
      doc = createReactiveDocument(this.store, identifier, null);
      this.__instances.document.set(identifier, doc);
    }
    return doc;
  }
  getRecord(identifier) {
    let record = this.__instances.record.get(identifier);
    if (!record) {
      record = _createRecord(this, identifier, {});
    }
    return record;
  }
  recordIsLoaded(identifier, filterDeleted = false) {
    const cache = this.cache;
    if (!cache) {
      return false;
    }
    const isNew = cache.isNew(identifier);
    const isEmpty = cache.isEmpty(identifier);

    // if we are new we must consider ourselves loaded
    if (isNew) {
      return !cache.isDeleted(identifier);
    }
    // even if we have a past request, if we are now empty we are not loaded
    // typically this is true after an unloadRecord call

    // if we are not empty, not new && we have a fulfilled request then we are loaded
    // we should consider allowing for something to be loaded that is simply "not empty".
    // which is how RecordState currently handles this case; however, RecordState is buggy
    // in that it does not account for unloading.
    return filterDeleted && cache.isDeletionCommitted(identifier) ? false : !isEmpty;
  }
  disconnect(identifier) {
    const record = this.__instances.record.get(identifier);
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error('Cannot destroy record while it is still materialized');
      }
    })(!isDestroyable(record) || record.isDestroyed || record.isDestroying) : {};
    this.store._graph?.remove(identifier);
    this.store.cacheKeyManager.forgetRecordIdentifier(identifier);
    StoreMap.delete(identifier);
    this.store._requestCache._clearEntries(identifier);
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_INSTANCE_CACHE)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_INSTANCE_CACHE || globalThis.getWarpDriveRuntimeConfig().debug.LOG_INSTANCE_CACHE) {
        log('reactive-ui', '', identifier.type, identifier.lid, 'disconnected', '');
      }
    }
  }
  unloadRecord(identifier) {
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      const requests = this.store.getRequestStateService().getPendingRequestsForRecord(identifier);
      if (requests.some(req => {
        return req.type === 'mutation';
      })) {
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          {
            throw new Error(`You can only unload a record which is not inFlight. '${String(identifier)}'`);
          }
        })() : {};
      }
    }
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_INSTANCE_CACHE)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_INSTANCE_CACHE || globalThis.getWarpDriveRuntimeConfig().debug.LOG_INSTANCE_CACHE) {
        // eslint-disable-next-line no-console
        console.groupCollapsed(`InstanceCache: unloading record for ${String(identifier)}`);
      }
    }

    // TODO is this join still necessary?
    this.store._join(() => {
      unloadRecord(this, identifier);
    });
  }
  clear(type) {
    const cache = this.store.cacheKeyManager._cache;
    if (type === undefined) {
      // it would be cool if we could just de-ref cache here
      // but probably would require WeakRef models to do so.
      cache.resources.forEach(identifier => {
        this.unloadRecord(identifier);
      });
    } else {
      const typeCache = cache.resourcesByType;
      const identifiers = typeCache[type]?.lid;
      if (identifiers) {
        identifiers.forEach(identifier => {
          // if (rds.has(identifier)) {
          this.unloadRecord(identifier);
          // }
          // TODO we don't remove the identifier, should we?
        });
      }
    }
  }

  // TODO this should move into something coordinating operations
  setRecordId(identifier, id) {
    const {
      type,
      lid
    } = identifier;
    const oldId = identifier.id;

    // ID absolutely can't be missing if the oldID is empty (missing Id in response for a new record)
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`'${type}' was saved to the server, but the response does not have an id and your record does not either.`);
      }
    })(!(id === null && oldId === null)) : {};

    // ID absolutely can't be different than oldID if oldID is not null
    // TODO this assertion and restriction may not strictly be needed in the identifiers world
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Cannot update the id for '${type}:${lid}' from '${String(oldId)}' to '${id}'.`);
      }
    })(!(oldId !== null && id !== oldId)) : {};

    // ID can be null if oldID is not null (altered ID in response for a record)
    // however, this is more than likely a developer error.
    if (oldId !== null && id === null) {
      warn(`Your ${type} record was saved to the server, but the response does not have an id.`, !(oldId !== null && id === null));
      return;
    }
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_INSTANCE_CACHE)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_INSTANCE_CACHE || globalThis.getWarpDriveRuntimeConfig().debug.LOG_INSTANCE_CACHE) {
        // eslint-disable-next-line no-console
        console.log(`InstanceCache: updating id to '${id}' for record ${String(identifier)}`);
      }
    }
    const existingIdentifier = this.store.cacheKeyManager.peekResourceKey({
      type,
      id
    });
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`'${type}' was saved to the server, but the response returned the new id '${id}', which has already been used with another record.'`);
      }
    })(!existingIdentifier || existingIdentifier === identifier) : {};
    if (identifier.id === null) {
      // TODO potentially this needs to handle merged result
      this.store.cacheKeyManager.updateRecordIdentifier(identifier, {
        type,
        id
      });
    }

    // TODO update resource cache if needed ?
    // TODO handle consequences of identifier merge for notifications
    this.store.notifications.notify(identifier, 'identity', null);
  }
}
function getNewRecord(instances, identifier, properties) {
  let record = instances.__instances.record.get(identifier);
  if (!record) {
    record = _createRecord(instances, identifier, properties);
    if (record instanceof ReactiveResource && instances.store.schema.resource) {
      // this is a work around until we introduce a new async createRecord API
      const schema = instances.store.schema.resource(identifier);
      if (!schema.legacy) {
        const editable = _CHECKOUT(record);
        if (properties) {
          Object.assign(editable, properties);
        }
        return editable;
      }
    }
  }
  return record;
}
function _createRecord(instances, identifier, properties) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Cannot create a new record instance while the store is being destroyed`);
    }
  })(!instances.store.isDestroying && !instances.store.isDestroyed) : {};
  const record = instances.store.instantiateRecord(identifier, properties);
  setRecordIdentifier(record, identifier);
  StoreMap.set(record, instances.store);
  instances.__instances.record.set(identifier, record);
  if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_INSTANCE_CACHE)) {
    if (getGlobalConfig().WarpDrive.debug.LOG_INSTANCE_CACHE || globalThis.getWarpDriveRuntimeConfig().debug.LOG_INSTANCE_CACHE) {
      logGroup('reactive-ui', '', identifier.type, identifier.lid, 'created', '');
      // eslint-disable-next-line no-console
      console.groupEnd();
    }
  }
  return record;
}
function _clearCaches() {
  RecordCache.clear();
  StoreMap.clear();
}
function unloadRecord(instances, identifier) {
  const record = instances.__instances.record.get(identifier);
  const cache = instances.cache;
  if (record) {
    instances.store.teardownRecord(record);
    instances.__instances.record.delete(identifier);
    StoreMap.delete(record);
    RecordCache.delete(record);
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_INSTANCE_CACHE)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_INSTANCE_CACHE || globalThis.getWarpDriveRuntimeConfig().debug.LOG_INSTANCE_CACHE) {
        // eslint-disable-next-line no-console
        console.log(`InstanceCache: destroyed record for ${String(identifier)}`);
      }
    }
  }
  if (cache) {
    cache.unloadRecord(identifier);
    StoreMap.delete(identifier);
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_INSTANCE_CACHE)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_INSTANCE_CACHE || globalThis.getWarpDriveRuntimeConfig().debug.LOG_INSTANCE_CACHE) {
        // eslint-disable-next-line no-console
        console.log(`InstanceCache: destroyed cache for ${String(identifier)}`);
      }
    }
  } else {
    instances.disconnect(identifier);
  }
  instances.store._requestCache._clearEntries(identifier);
  if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_INSTANCE_CACHE)) {
    if (getGlobalConfig().WarpDrive.debug.LOG_INSTANCE_CACHE || globalThis.getWarpDriveRuntimeConfig().debug.LOG_INSTANCE_CACHE) {
      // eslint-disable-next-line no-console
      console.log(`InstanceCache: unloaded RecordData for ${String(identifier)}`);
      // eslint-disable-next-line no-console
      console.groupEnd();
    }
  }
}

/**
 * The CacheManager wraps a Cache enforcing that only
 * the public API surface area is exposed.
 *
 * Hence, it is the value of `Store.cache`, wrapping
 * the cache instance returned by `Store.createCache`.
 *
 * It handles translating between cache versions when
 * necessary, for instance when a Store is configured
 * to use both a v1 and a v2 cache depending on some
 * heuristic.
 *
 * Starting with the v2 spec, the cache is designed such
 * that it must be implemented as a singleton.
 *
 * @class CacheManager
 * @public
 */
class CacheManager {
  version = '2';

  /** @internal */

  constructor(cache) {
    this.___cache = cache;
  }

  // Cache Management
  // ================

  /**
   * Cache the response to a request
   *
   * Unlike `store.push` which has UPSERT
   * semantics, `put` has `replace` semantics similar to
   * the `http` method `PUT`
   *
   * the individually cacheable
   * e resource data it may contain
   * should upsert, but the document data surrounding it should
   * fully replace any existing information
   *
   * Note that in order to support inserting arbitrary data
   * to the cache that did not originate from a request `put`
   * should expect to sometimes encounter a document with only
   * a `content` member and therefor must not assume the existence
   * of `request` and `response` on the document.
   *
   * @public
   */
  put(doc) {
    return this.___cache.put(doc);
  }

  /**
   * Perform an operation on the cache to update the remote state.
   *
   * @public
   * @param op the operation to perform
   */
  patch(op) {
    this.___cache.patch(op);
  }

  /**
   * Update resource data with a local mutation. Currently supports operations
   * on relationships only.
   *
   * @public
   */
  mutate(mutation) {
    this.___cache.mutate(mutation);
  }

  /**
   * Peek resource data from the Cache.
   *
   * In development, if the return value
   * is JSON the return value
   * will be deep-cloned and deep-frozen
   * to prevent mutation thereby enforcing cache
   * Immutability.
   *
   * This form of peek is useful for implementations
   * that want to feed raw-data from cache to the UI
   * or which want to interact with a blob of data
   * directly from the presentation cache.
   *
   * An implementation might want to do this because
   * de-referencing records which read from their own
   * blob is generally safer because the record does
   * not require retaining connections to the Store
   * and Cache to present data on a per-field basis.
   *
   * This generally takes the place of `getAttr` as
   * an API and may even take the place of `getRelationship`
   * depending on implementation specifics, though this
   * latter usage is less recommended due to the advantages
   * of the Graph handling necessary entanglements and
   * notifications for relational data.
   *
   * @public
   * @return the known resource data
   */

  peek(cacheKey) {
    return this.___cache.peek(cacheKey);
  }
  peekRemoteState(cacheKey) {
    return this.___cache.peekRemoteState(cacheKey);
  }
  /**
   * Peek the Cache for the existing request data associated with
   * a cacheable request
   *
   * @public
   */
  peekRequest(key) {
    return this.___cache.peekRequest(key);
  }

  /**
   * Push resource data from a remote source into the cache for this ResourceKey
   *
   * @public
   * @return if `hasRecord` is true then calculated key changes should be returned
   */
  upsert(key, data, hasRecord) {
    return this.___cache.upsert(key, data, hasRecord);
  }

  // Cache Forking Support
  // =====================

  /**
   * Create a fork of the cache from the current state.
   *
   * Applications should typically not call this method themselves,
   * preferring instead to fork at the Store level, which will
   * utilize this method to fork the cache.
   *
   * @public
   */
  fork() {
    return this.___cache.fork();
  }

  /**
   * Merge a fork back into a parent Cache.
   *
   * Applications should typically not call this method themselves,
   * preferring instead to merge at the Store level, which will
   * utilize this method to merge the caches.
   *
   * @public
   */
  merge(cache) {
    return this.___cache.merge(cache);
  }

  /**
   * Generate the list of changes applied to all
   * record in the store.
   *
   * Each individual resource or document that has
   * been mutated should be described as an individual
   * `Change` entry in the returned array.
   *
   * A `Change` is described by an object containing up to
   * three properties: (1) the `ResourceKey` of the entity that
   * changed; (2) the `op` code of that change being one of
   * `upsert` or `remove`, and if the op is `upsert` a `patch`
   * containing the data to merge into the cache for the given
   * entity.
   *
   * This `patch` is opaque to the Store but should be understood
   * by the Cache and may expect to be utilized by an Adapter
   * when generating data during a `save` operation.
   *
   * It is generally recommended that the `patch` contain only
   * the updated state, ignoring fields that are unchanged
   *
   * ```ts
   * interface Change {
   *  key: ResourceKey | RequestKey;
   *  op: 'upsert' | 'remove';
   *  patch?: unknown;
   * }
   * ```
   *
   * @public
   */
  diff() {
    return this.___cache.diff();
  }

  // SSR Support
  // ===========

  /**
   * Serialize the entire contents of the Cache into a Stream
   * which may be fed back into a new instance of the same Cache
   * via `cache.hydrate`.
   *
   * @public
   */
  dump() {
    return this.___cache.dump();
  }

  /**
   * hydrate a Cache from a Stream with content previously serialized
   * from another instance of the same Cache, resolving when hydration
   * is complete.
   *
   * This method should expect to be called both in the context of restoring
   * the Cache during application rehydration after SSR **AND** at unknown
   * times during the lifetime of an already booted application when it is
   * desired to bulk-load additional information into the cache. This latter
   * behavior supports optimizing pre/fetching of data for route transitions
   * via data-only SSR modes.
   *
   * @public
   */
  hydrate(stream) {
    return this.___cache.hydrate(stream);
  }

  // Cache
  // =====

  // Resource Support
  // ================

  /**
   * [LIFECYCLE] Signal to the cache that a new record has been instantiated on the client
   *
   * It returns properties from options that should be set on the record during the create
   * process. This return value behavior is deprecated.
   *
   * @public
   */
  clientDidCreate(key, options) {
    return this.___cache.clientDidCreate(key, options);
  }

  /**
   * [LIFECYCLE] Signals to the cache that a resource
   * will be part of a save transaction.
   *
   * @public
   * @param key
   */
  willCommit(key, context) {
    this.___cache.willCommit(key, context);
  }

  /**
   * [LIFECYCLE] Signals to the cache that a resource
   * was successfully updated as part of a save transaction.
   *
   * @public
   */

  didCommit(key, result) {
    // @ts-expect-error TS doesn't enable proxying overload calls
    return this.___cache.didCommit(key, result);
  }

  /**
   * [LIFECYCLE] Signals to the cache that a resource
   * was update via a save transaction failed.
   *
   * @public
   */
  commitWasRejected(key, errors) {
    this.___cache.commitWasRejected(key, errors);
  }

  /**
   * [LIFECYCLE] Signals to the cache that all data for a resource
   * should be cleared.
   *
   * @public
   */
  unloadRecord(key) {
    this.___cache.unloadRecord(key);
  }

  // Granular Resource Data APIs
  // ===========================

  /**
   * Retrieve the data for an attribute from the cache
   *
   * @public
   */
  getAttr(key, propertyName) {
    return this.___cache.getAttr(key, propertyName);
  }

  /**
   * Retrieve the remote state for an attribute from the cache
   *
   * @public
   */
  getRemoteAttr(key, propertyName) {
    return this.___cache.getRemoteAttr(key, propertyName);
  }

  /**
   * Mutate the data for an attribute in the cache
   *
   * @public
   */
  setAttr(key, propertyName, value) {
    this.___cache.setAttr(key, propertyName, value);
  }

  /**
   * Query the cache for the changed attributes of a resource.
   *
   * @public
   */
  changedAttrs(key) {
    return this.___cache.changedAttrs(key);
  }

  /**
   * Query the cache for whether any mutated attributes exist
   *
   * @public
   */
  hasChangedAttrs(key) {
    return this.___cache.hasChangedAttrs(key);
  }

  /**
   * Tell the cache to discard any uncommitted mutations to attributes
   *
   * @public
   * @return the names of attributes that were restored
   */
  rollbackAttrs(key) {
    return this.___cache.rollbackAttrs(key);
  }

  // Relationships
  // =============

  /**
   * Query the cache for the changes to relationships of a resource.
   *
   * Returns a map of relationship names to RelationshipDiff objects.
   *
   * ```ts
   * type RelationshipDiff =
  | {
      kind: 'collection';
      remoteState: ResourceKey[];
      additions: Set<ResourceKey>;
      removals: Set<ResourceKey>;
      localState: ResourceKey[];
      reordered: boolean;
    }
  | {
      kind: 'resource';
      remoteState: ResourceKey | null;
      localState: ResourceKey | null;
    };
    ```
   *
   * @public
   */
  changedRelationships(key) {
    return this.___cache.changedRelationships(key);
  }

  /**
   * Query the cache for whether any mutated attributes exist
   *
   * @public
   */
  hasChangedRelationships(key) {
    return this.___cache.hasChangedRelationships(key);
  }

  /**
   * Tell the cache to discard any uncommitted mutations to relationships.
   *
   * This will also discard the change on any appropriate inverses.
   *
   * This method is a candidate to become a mutation
   *
   * @public
   * @return the names of relationships that were restored
   */
  rollbackRelationships(key) {
    return this.___cache.rollbackRelationships(key);
  }

  /**
   * Query the cache for the current state of a relationship property
   *
   * @public
   * @return resource relationship object
   */
  getRelationship(key, propertyName) {
    return this.___cache.getRelationship(key, propertyName);
  }

  /**
   * Query the cache for the remote state of a relationship property
   *
   * @public
   * @return resource relationship object
   */
  getRemoteRelationship(key, propertyName) {
    return this.___cache.getRemoteRelationship(key, propertyName);
  }

  // Resource State
  // ===============

  /**
   * Update the cache state for the given resource to be marked as locally deleted,
   * or remove such a mark.
   *
   * @public
   */
  setIsDeleted(key, isDeleted) {
    this.___cache.setIsDeleted(key, isDeleted);
  }

  /**
   * Query the cache for any validation errors applicable to the given resource.
   *
   * @public
   */
  getErrors(key) {
    return this.___cache.getErrors(key);
  }

  /**
   * Query the cache for whether a given resource has any available data
   *
   * @public
   */
  isEmpty(key) {
    return this.___cache.isEmpty(key);
  }

  /**
   * Query the cache for whether a given resource was created locally and not
   * yet persisted.
   *
   * @public
   */
  isNew(key) {
    return this.___cache.isNew(key);
  }

  /**
   * Query the cache for whether a given resource is marked as deleted (but not
   * necessarily persisted yet).
   *
   * @public
   */
  isDeleted(key) {
    return this.___cache.isDeleted(key);
  }

  /**
   * Query the cache for whether a given resource has been deleted and that deletion
   * has also been persisted.
   *
   * @public
   */
  isDeletionCommitted(key) {
    return this.___cache.isDeletionCommitted(key);
  }
}
function isCacheOperationValue(value) {
  return value === 'added' || value === 'state' || value === 'updated' || value === 'removed' || value === 'invalidated';
}
function count(label) {
  // @ts-expect-error
  // eslint-disable-next-line
  globalThis.__WarpDriveMetricCountData[label] = (globalThis.__WarpDriveMetricCountData[label] || 0) + 1;
}
function asInternalToken(token) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Expected a token with a 'for' property`);
    }
  })(token && typeof token === 'function' && 'for' in token) : {};
}
function _unsubscribe(token, cache) {
  asInternalToken(token);
  const cacheKey = token.for;
  if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_NOTIFICATIONS)) {
    if (getGlobalConfig().WarpDrive.debug.LOG_NOTIFICATIONS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_NOTIFICATIONS) {
      if (!cacheKey) {
        // eslint-disable-next-line no-console
        console.log('Passed unknown unsubscribe token to unsubscribe', cacheKey);
      }
    }
  }
  if (cacheKey) {
    const callbacks = cache.get(cacheKey);
    if (!callbacks) {
      return;
    }
    const index = callbacks.indexOf(token);
    if (index === -1) {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`Cannot unsubscribe a token that is not subscribed`);
        }
      })(index !== -1) : {};
      return;
    }
    callbacks.splice(index, 1);
  }
}

/**
 * The NotificationManager provides the ability to subscribe to
 * changes to Cache state.
 *
 * This Feature is what allows WarpDrive to create subscriptions that
 * work with any framework or change-notification system.
 *
 * @hideconstructor
 * @public
 */
class NotificationManager {
  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  constructor(store) {
    this.store = store;
    this.isDestroyed = false;
    this._buffered = new Map();
    this._hasFlush = false;
    this._cache = new Map();
  }

  /**
   * Subscribe to changes for a given ResourceKey, RequestKey, or addition/removal of any resource
   * or document.
   *
   * ```ts
   * export type CacheOperation = 'added' | 'removed' | 'updated' | 'state';
   *
   * export interface NotificationCallback {
   *   (cacheKey: ResourceKey, notificationType: 'attributes' | 'relationships', key?: string): void;
   *   (cacheKey: ResourceKey, notificationType: 'errors' | 'meta' | 'identity' | 'state'): void;
   *   (cacheKey: ResourceKey, notificationType: NotificationType, key?: string): void;
   * }
   * export interface ResourceOperationCallback {
   *   // resource updates
   *   (cacheKey: ResourceKey, notificationType: CacheOperation): void;
   * }
   * export interface DocumentOperationCallback {
   *   // document updates
   *   (cacheKey: RequestKey, notificationType: CacheOperation): void;
   * }
   * ```
   *
   * @public
   * @return an opaque token to be used with unsubscribe
   */

  subscribe(cacheKey, callback) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected not to be destroyed`);
      }
    })(!this.isDestroyed) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected to receive a stable Identifier to subscribe to`);
      }
    })(cacheKey === 'resource' || cacheKey === 'document' || isResourceKey(cacheKey) || isRequestKey(cacheKey)) : {};
    let callbacks = this._cache.get(cacheKey);
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`expected to receive a valid callback`);
      }
    })(typeof callback === 'function') : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`cannot subscribe with the same callback twice`);
      }
    })(!callbacks || !callbacks.includes(callback)) : {};
    // we use the callback as the cancellation token
    //@ts-expect-error
    callback.for = cacheKey;
    if (!callbacks) {
      callbacks = [];
      this._cache.set(cacheKey, callbacks);
    }
    callbacks.push(callback);
    return callback;
  }

  /**
   * remove a previous subscription
   *
   * @public
   */
  unsubscribe(token) {
    if (!this.isDestroyed) {
      _unsubscribe(token, this._cache);
    }
  }

  /**
   * Custom Caches and Application Code should not call this method directly.
   *
   * @private
   */

  notify(cacheKey, value, key) {
    if (this.isDestroyed) {
      return false;
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Notify does not accept a key argument for the namespace '${value}'. Received key '${key || ''}'.`);
      }
    })(!key || value === 'attributes' || value === 'relationships') : {};
    if (!isResourceKey(cacheKey) && !isRequestKey(cacheKey)) {
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_NOTIFICATIONS)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_NOTIFICATIONS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_NOTIFICATIONS) {
          // eslint-disable-next-line no-console
          console.log(`Notifying: Expected to receive a stable Identifier to notify '${value}' '${key || ''}' with, but ${String(cacheKey)} is not in the cache`, cacheKey);
        }
      }
      return false;
    }
    const _hasSubscribers = hasSubscribers(this._cache, cacheKey, value);
    if (_hasSubscribers) {
      let buffer = this._buffered.get(cacheKey);
      if (!buffer) {
        buffer = [];
        this._buffered.set(cacheKey, buffer);
      }
      buffer.push([value, key || null]);
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_METRIC_COUNTS)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_METRIC_COUNTS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_METRIC_COUNTS) {
          count(`notify ${'type' in cacheKey ? cacheKey.type : '<document>'} ${value} ${key}`);
        }
      }
      if (!this._scheduleNotify()) {
        if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_NOTIFICATIONS)) {
          if (getGlobalConfig().WarpDrive.debug.LOG_NOTIFICATIONS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_NOTIFICATIONS) {
            log('notify', 'buffered', `${'type' in cacheKey ? cacheKey.type : 'document'}`, cacheKey.lid, `${value}`, key || '');
          }
        }
      }
    } else {
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_NOTIFICATIONS)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_NOTIFICATIONS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_NOTIFICATIONS) {
          log('notify', 'discarded', `${'type' in cacheKey ? cacheKey.type : 'document'}`, cacheKey.lid, `${value}`, key || '');
        }
      }
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_METRIC_COUNTS)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_METRIC_COUNTS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_METRIC_COUNTS) {
          count(`DISCARDED notify ${'type' in cacheKey ? cacheKey.type : '<document>'} ${value} ${key}`);
        }
      }
    }
    return _hasSubscribers;
  }

  /** @internal */
  _onNextFlush(cb) {
    this._onFlushCB = cb;
  }

  /** @internal */
  _scheduleNotify() {
    const asyncFlush = this.store._enableAsyncFlush;
    if (this._hasFlush) {
      if (asyncFlush !== false && !willSyncFlushWatchers()) {
        return false;
      }
    }
    if (asyncFlush && !willSyncFlushWatchers()) {
      this._hasFlush = true;
      return false;
    }
    this._flush();
    return true;
  }

  /** @internal */
  _flush() {
    const buffered = this._buffered;
    if (buffered.size) {
      this._buffered = new Map();
      for (const [cacheKey, states] of buffered) {
        for (let i = 0; i < states.length; i++) {
          // @ts-expect-error
          _flushNotification(this._cache, cacheKey, states[i][0], states[i][1]);
        }
      }
    }
    this._hasFlush = false;
    this._onFlushCB?.();
    this._onFlushCB = undefined;
  }

  /** @internal */
  destroy() {
    this.isDestroyed = true;
    this._cache.clear();
  }
}

/**
 * This type exists for internal use only for
 * where intimate contracts still exist either for
 * the Test Suite or for Legacy code.
 *
 * @private
 */

function _flushNotification(cache, cacheKey, value, key) {
  if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_NOTIFICATIONS)) {
    if (getGlobalConfig().WarpDrive.debug.LOG_NOTIFICATIONS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_NOTIFICATIONS) {
      log('notify', '', `${'type' in cacheKey ? cacheKey.type : 'document'}`, cacheKey.lid, `${value}`, key || '');
    }
  }

  // TODO for documents this will need to switch based on Identifier kind
  if (isCacheOperationValue(value)) {
    const callbackMap = cache.get(isRequestKey(cacheKey) ? 'document' : 'resource');
    if (callbackMap) {
      callbackMap.forEach(cb => {
        cb(cacheKey, value);
      });
    }
  }
  const callbacks = cache.get(cacheKey);
  if (!callbacks || !callbacks.length) {
    return false;
  }
  callbacks.forEach(cb => {
    // @ts-expect-error overload doesn't narrow within body
    cb(cacheKey, value, key);
  });
  return true;
}
function hasSubscribers(cache, cacheKey, value) {
  const hasSubscriber = Boolean(cache.get(cacheKey)?.length);
  if (hasSubscriber || !isCacheOperationValue(value)) {
    return hasSubscriber;
  }
  const callbackMap = cache.get(isRequestKey(cacheKey) ? 'document' : 'resource');
  return Boolean(callbackMap?.length);
}
function update() {
  if (this.isUpdating) {
    return this._updatingPromise;
  }
  this.isUpdating = true;

  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const updatingPromise = this._update();
  void updatingPromise.finally(() => {
    this._updatingPromise = null;
    if (this.isDestroying || this.isDestroyed) {
      return;
    }
    this.isUpdating = false;
  });
  this._updatingPromise = updatingPromise;
  return updatingPromise;
}
function save() {
  const context = this[Context];
  const promise = Promise.all(this.map(record => context.store.saveRecord(record))).then(() => this);
  return promise;
}
const ARRAY_GETTER_METHODS$1 = new Set([Symbol.iterator, 'concat', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'flat', 'flatMap', 'forEach', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'map', 'reduce', 'reduceRight', 'slice', 'some', 'values']);
const ARRAY_SETTER_METHODS$1 = new Set(['push', 'pop', 'unshift', 'shift', 'splice', 'sort']);
function isArrayGetter$1(prop) {
  return ARRAY_GETTER_METHODS$1.has(prop);
}
function isArraySetter$1(prop) {
  return ARRAY_SETTER_METHODS$1.has(prop);
}
function convertToInt$1(prop) {
  if (typeof prop === 'symbol') return null;
  const num = Number(prop);
  if (isNaN(num)) return null;
  return num % 1 === 0 ? num : null;
}
function safeForEach$1(instance, arr, store, callback, target) {
  if (target === undefined) {
    target = null;
  }
  // clone to prevent mutation
  arr = arr.slice();
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error('`forEach` expects a function as first argument.');
    }
  })(typeof callback === 'function') : {};

  // because we retrieveLatest above we need not worry if array is mutated during iteration
  // by unloadRecord/rollbackAttributes
  // push/add/removeObject may still be problematic
  // but this is a more traditionally expected forEach bug.
  const length = arr.length; // we need to access length to ensure we are consumed

  for (let index = 0; index < length; index++) {
    callback.call(target, store._instanceCache.getRecord(arr[index]), index, instance);
  }
  return instance;
}
function isExtensionProp(extensions, prop) {
  return Boolean(extensions && typeof prop !== 'number' && extensions.has(prop));
}
function performObjectExtensionGet(receiver, extensions, signals, prop) {
  const desc = extensions.get(prop);
  switch (desc.kind) {
    case 'method':
      {
        return desc.fn;
      }
    case 'readonly-value':
      {
        return desc.value;
      }
    case 'mutable-value':
      {
        const signal = getOrCreateInternalSignal(signals, receiver, prop, desc.value);
        // we don't consume this signal, since its not a true local.
        return signal.value;
      }
    case 'readonly-field':
    case 'mutable-field':
      {
        return desc.get.call(receiver);
      }
    case 'writeonly-field':
      {
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          {
            throw new Error(`Cannot get extended field ${String(prop)} as its definition has only a setter`);
          }
        })() : {};
        return undefined;
      }
    default:
      {
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          {
            throw new Error(`Unhandled extension kind ${desc.kind}`);
          }
        })() : {};
        return undefined;
      }
  }
}
function performExtensionSet(receiver, extensions, signals, prop, value) {
  const desc = extensions.get(prop);
  switch (desc.kind) {
    case 'method':
    case 'readonly-value':
    case 'readonly-field':
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        {
          throw new Error(`Cannot set extension field ${String(prop)} as it is a ${desc.kind}`);
        }
      })() : {};
      return false;
    case 'mutable-value':
      {
        const signal = getOrCreateInternalSignal(signals, receiver, prop, desc.value);
        if (signal.value !== value) {
          // we don't notify this signal, since its not a true local.
          signal.value = value;
        }
        return true;
      }
    case 'writeonly-field':
    case 'mutable-field':
      {
        desc.set.call(receiver, value);
        return true;
      }
    default:
      {
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          {
            throw new Error(`Unhandled extension kind ${desc.kind}`);
          }
        })() : {};
        return false;
      }
  }
}
function performArrayExtensionGet(receiver, extensions, signals, prop, _SIGNAL, boundFns, transaction) {
  const desc = extensions.get(prop);
  switch (desc.kind) {
    case 'method':
      {
        let fn = boundFns.get(prop);
        if (fn === undefined) {
          fn = function () {
            consumeInternalSignal(_SIGNAL);
            transaction(true);
            const result = Reflect.apply(desc.fn, receiver, arguments);
            transaction(false);
            return result;
          };
          boundFns.set(prop, fn);
        }
        return fn;
      }
    case 'mutable-field':
    case 'readonly-field':
      {
        return desc.get.call(receiver);
      }
    case 'readonly-value':
      {
        return desc.value;
      }
    case 'mutable-value':
      {
        const signal = getOrCreateInternalSignal(signals, receiver, prop, desc.value);
        // we don't consume this signal, since its not a true local.
        return signal.value;
      }
    case 'writeonly-field':
      {
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          {
            throw new Error(`Cannot get extended field ${String(prop)} as its definition has only a setter`);
          }
        })() : {};
        return undefined;
      }
    default:
      {
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          {
            throw new Error(`Unhandled extension kind ${desc.kind}`);
          }
        })() : {};
        return undefined;
      }
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/*
  We redefine Proxy because the native Proxy type treats the `target` and
  `receiver` as the same type incorrectly.

  We ported this from Typescript's own Proxy types on 3/10/2024.
*/

const NativeProxy = Proxy;
const IS_COLLECTION = getOrSetGlobal('IS_COLLECTION', Symbol.for('Collection'));
function isContextProp(prop) {
  return prop === 'destroy' || prop === 'isDestroying' || prop === 'isDestroyed';
}
// these are "internally" mutable, they should not be mutated by consumers
// though this is not currently enforced.
//
// all of these should become gated by field-type as they shouldn't be available
// on request results or non-legacy relationships.
const MUTABLE_PROPS = ['_updatingPromise', 'isDestroying', 'isDestroyed', 'query', 'isUpdating', 'isLoaded', 'meta', 'links', 'isAsync', 'isPolymorphic', 'identifier', 'cache', 'key', 'DEPRECATED_CLASS_NAME'];
// this will error if someone tries to call
// A(identifierArray) since it is not configurable
// which is preferable to the `meta` override we used
// before which required importing all of Ember
const ARR_BRACKET_DESC = {
  enumerable: true,
  configurable: false,
  get: function () {
    // here to support computed chains
    // and {{#each}}
    if (macroCondition(getGlobalConfig().WarpDrive.deprecations.DEPRECATE_COMPUTED_CHAINS)) {
      return this;
    }
  }
};
const IS_UPDATING_DESC = createSignalDescriptor('isUpdating', false);
const ArrayHandler = {
  getOwnPropertyDescriptor(target, prop) {
    if (prop === '[]') {
      // proxies do not allow you to report a descriptor as non-configurable
      // if there is no descriptor or the underlying descriptor is configurable
      const underlying = Reflect.getOwnPropertyDescriptor(target, prop);
      if (!underlying) {
        Object.defineProperty(target, prop, ARR_BRACKET_DESC);
      }
      return ARR_BRACKET_DESC;
    }
    if (prop === 'isUpdating') {
      return IS_UPDATING_DESC;
    }
    return Reflect.getOwnPropertyDescriptor(target, prop);
  },
  get(target, prop, receiver) {
    const CONTEXT = target[Context];

    // we place this prop first as it needs initialized
    // prior to the signal check below
    if (prop === Signals) return CONTEXT.signals;
    const index = convertToInt$1(prop);
    if (
    // prettier-ignore
    CONTEXT.signal.isStale && (index !== null || prop === 'length' || prop === '[]' || CONTEXT.data && prop in CONTEXT.data || isArrayGetter$1(prop))) {
      CONTEXT.manager._syncArray(receiver);
      CONTEXT.signal.isStale = false;
    }
    if (index !== null) {
      const identifier = target[index];
      if (!CONTEXT.transaction) {
        consumeInternalSignal(CONTEXT.signal);
      }
      return identifier && CONTEXT.store._instanceCache.getRecord(identifier);
    }
    if (prop === 'length') return consumeInternalSignal(CONTEXT.signal), target.length;
    if (prop === '[]') return consumeInternalSignal(CONTEXT.signal), receiver;
    // TODO move this to ?? so its only on subclasses
    if (prop === 'isUpdating') return IS_UPDATING_DESC.get.call(receiver);
    if (prop === IS_COLLECTION) return true;
    if (prop === Context) return CONTEXT;
    if (isContextProp(prop)) {
      return CONTEXT[prop];
    }
    if (CONTEXT.data && prop in CONTEXT.data) {
      // all props in data are reactive props.
      return consumeInternalSignal(CONTEXT.signal), CONTEXT.data[prop];
    }
    if (isArrayGetter$1(prop)) {
      let fn = CONTEXT.boundFns.get(prop);
      if (fn === undefined) {
        if (prop === 'forEach') {
          fn = function () {
            consumeInternalSignal(CONTEXT.signal);
            CONTEXT.transaction = true;
            const result = safeForEach$1(receiver, target, CONTEXT.store, arguments[0], arguments[1]);
            CONTEXT.transaction = false;
            return result;
          };
        } else {
          fn = function () {
            consumeInternalSignal(CONTEXT.signal);
            // array functions must run through Reflect to work properly
            // binding via other means will not work.
            CONTEXT.transaction = true;
            const result = Reflect.apply(target[prop], receiver, arguments);
            CONTEXT.transaction = false;
            return result;
          };
        }
        CONTEXT.boundFns.set(prop, fn);
      }
      return fn;
    }
    if (isArraySetter$1(prop)) {
      let fn = CONTEXT.boundFns.get(prop);
      if (fn === undefined) {
        fn = function () {
          // array functions must run through Reflect to work properly
          // binding via other means will not work.
          if (!CONTEXT.editable) {
            macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
              if (!test) {
                throw new Error(`Mutating this array of records via ${String(prop)} is not allowed.`);
              }
            })(CONTEXT.editable) : {};
            return;
          }
          const args = Array.prototype.slice.call(arguments);
          macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
            if (!test) {
              throw new Error(`Cannot start a new array transaction while a previous transaction is underway`);
            }
          })(!CONTEXT.transaction) : {};
          CONTEXT.transaction = true;
          const result = CONTEXT.mutate(target, receiver, prop, args, CONTEXT.signal);
          CONTEXT.transaction = false;
          return result;
        };
        CONTEXT.boundFns.set(prop, fn);
      }
      return fn;
    }
    if (CONTEXT.features && prop in CONTEXT.features) {
      let fn = CONTEXT.boundFns.get(prop);
      if (fn) return fn;

      // @ts-expect-error
      const outcome = CONTEXT.features[prop];
      if (typeof outcome === 'function') {
        fn = function () {
          consumeInternalSignal(CONTEXT.signal);
          // array functions must run through Reflect to work properly
          // binding via other means will not work.
          return Reflect.apply(outcome, receiver, arguments);
        };
        CONTEXT.boundFns.set(prop, fn);
        return fn;
      }
      return consumeInternalSignal(CONTEXT.signal), outcome;
    }
    if (isExtensionProp(CONTEXT.extensions, prop)) {
      return performArrayExtensionGet(receiver, CONTEXT.extensions, CONTEXT.signals, prop, CONTEXT.signal, CONTEXT.boundFns, v => void (CONTEXT.transaction = v));
    }
    return target[prop];
  },
  set(target, prop, value, receiver) {
    const CONTEXT = target[Context];
    if (prop === Signals) {
      CONTEXT.signals = value;
      return true;
    }
    if (!CONTEXT.editable && !MUTABLE_PROPS.includes(prop)) {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`Mutating ${String(prop)} on this Array is not allowed.`);
        }
      })(CONTEXT.editable) : {};
      return false;
    }
    if (prop === 'length') {
      if (!CONTEXT.transaction && value === 0) {
        CONTEXT.transaction = true;
        CONTEXT.mutate(target, receiver, 'length 0', [], CONTEXT.signal);
        CONTEXT.transaction = false;
        return true;
      } else if (CONTEXT.transaction) {
        return Reflect.set(target, prop, value);
      } else {
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          {
            throw new Error(`unexpected length set`);
          }
        })() : {};
      }
    }
    if (isContextProp(prop)) {
      // @ts-expect-error
      CONTEXT[prop] = value;
      return true;
    }
    if (CONTEXT.data && prop in CONTEXT.data) {
      CONTEXT.data[prop] = value || null;
      return true;
    }

    // TODO move this to subclass
    if (prop === 'isUpdating') {
      IS_UPDATING_DESC.set.call(receiver, value);
      return true;
    }
    if (isExtensionProp(CONTEXT.extensions, prop)) {
      return performExtensionSet(receiver, CONTEXT.extensions, CONTEXT.signals, prop, value);
    }
    const index = convertToInt$1(prop);

    // we do not allow "holey" arrays and so if the index is
    // greater than length then we will disallow setting it.
    // however, there is a special case for "unshift" with more than
    // one item being inserted since current items will be moved to the
    // new indices first.
    // we "loosely" detect this by just checking whether we are in
    // a transaction.
    if (index === null || index > target.length) {
      if (index !== null && CONTEXT.transaction) {
        const identifier = recordIdentifierFor(value);
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          if (!test) {
            throw new Error(`Cannot set index ${index} past the end of the array.`);
          }
        })(isResourceKey(identifier)) : {};
        target[index] = identifier;
        return true;
      } else if (CONTEXT.features && prop in CONTEXT.features) {
        CONTEXT.features[prop] = value;
        return true;
      }
      return false;
    }
    const original = target[index];
    const newIdentifier = extractIdentifierFromRecord$2(value);
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected a record`);
      }
    })(newIdentifier && isResourceKey(newIdentifier)) : {};
    // We generate "transactions" whenever a setter method on the array
    // is called and might bulk update multiple array cells. Fundamentally,
    // all array operations decompose into individual cell replacements.
    // e.g. a push is really a "replace cell at next index with new value"
    // or a splice is "shift all values left/right by X and set out of new
    // bounds cells to undefined"
    //
    // so, if we are in a transaction, then this is not a user generated change
    // but one generated by a setter method. In this case we want to only apply
    // the change to the target array and not call the MUTATE method.
    // If there is no transaction though, then this means the user themselves has
    // directly changed the value of a specific index and we need to thus generate
    // a mutation for that change.
    // e.g. "arr.push(newVal)" is handled by a "addToRelatedRecords" mutation within
    // a transaction.
    // while "arr[arr.length] = newVal;" is handled by this replace cell code path.
    if (!CONTEXT.transaction) {
      CONTEXT.mutate(target, receiver, 'replace cell', [index, original, newIdentifier], CONTEXT.signal);
    } else {
      target[index] = newIdentifier;
    }
    return true;
  },
  deleteProperty(target, prop) {
    const CONTEXT = target[Context];
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Deleting keys on managed arrays is disallowed`);
      }
    })(CONTEXT.transaction) : {};
    if (!CONTEXT.transaction) {
      return false;
    }
    return Reflect.deleteProperty(target, prop);
  },
  getPrototypeOf() {
    return Array.prototype;
  }
};
const ILLEGAL_MUTATION = () => {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    {
      throw new Error(`ILLEGAL OPERATION: This ReactiveResourceArray is immutable`);
    }
  })() : {};
};
function createReactiveResourceArray(options) {
  const TARGET = options.source;
  const context = {
    store: options.store,
    manager: options.manager,
    editable: options.editable,
    source: options.source,
    data: options.data,
    features: options.features,
    extensions: options.extensions,
    options: options.options,
    destroy: options.destroy || destroy,
    mutate: options.mutate || ILLEGAL_MUTATION,
    signals: null,
    signal: null,
    isDestroying: false,
    isDestroyed: false,
    transaction: false,
    boundFns: new Map()
  };
  TARGET[Context] = context;
  const proxy = new NativeProxy(TARGET, ArrayHandler);
  if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
    Object.defineProperty(TARGET, '__SHOW_ME_THE_DATA_(debug mode only)__', {
      enumerable: false,
      configurable: true,
      get() {
        return proxy.slice();
      }
    });
  }

  // we entangle the signal on the returned proxy since that is
  // the object that other code will be interfacing with.
  // when a mutation occurs
  // we track all mutations within the call
  // and forward them as one
  withSignalStore(proxy);
  context.signal = createInternalSignal(context.signals, proxy, ARRAY_SIGNAL, undefined);
  return proxy;
}

// Ensure instanceof works correctly
// Object.setPrototypeOf(IdentifierArray.prototype, Array.prototype);

function extractIdentifierFromRecord$2(record) {
  if (!record) {
    return null;
  }
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`All elements of a ReactiveResourceArray must be instances of a ReactiveResource, you passed $${typeof record}`);
    }
  })(function () {
    try {
      recordIdentifierFor(record);
      return true;
    } catch {
      return false;
    }
  }()) : {};
  return recordIdentifierFor(record);
}
function destroy(clear) {
  const context = this[Context];
  this.isDestroying = !clear;
  // changing the reference breaks the Proxy
  // this[SOURCE] = [];
  context.source.length = 0;
  notifyInternalSignal(context.signal);
  this.isDestroyed = !clear;
}
function createRequestCollection(config) {
  return createReactiveResourceArray({
    store: config.store,
    manager: config.manager,
    editable: false,
    source: config.source,
    data: null,
    features: null,
    extensions: null,
    options: config.options,
    destroy: null,
    mutate: null
  });
}

/**
 * The options for {@link createLegacyLiveArray}
 *
 * @private
 */
/**
 * Creates a {@link LegacyLiveArray}
 *
 * @internal
 */
function createLegacyLiveArray(options) {
  return createReactiveResourceArray({
    store: options.store,
    manager: options.manager,
    editable: false,
    source: options.source,
    data: null,
    features: {
      modelName: options.type,
      update,
      _update: _updateLiveArray,
      save,
      DEPRECATED_CLASS_NAME: 'LiveArray',
      isUpdating: false,
      isLoaded: true,
      _updatingPromise: null
    },
    extensions: null,
    options: null,
    destroy: null,
    mutate: null
  });
}
function _updateLiveArray() {
  const context = this[Context];
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`_update cannot be used with this array`);
    }
  })(this.modelName) : {};
  // @ts-expect-error typescript is unable to handle the complexity of
  //   T = unknown, modelName = string
  //   T extends TypedRecordInstance, modelName = TypeFromInstance<T>
  // both being valid options to pass through here.
  return context.store.findAll(this.modelName, {
    reload: true
  });
}

/**
 * The options for {@link createLegacyQueryArray}
 *
 * See also {@link LegacyLiveArrayCreateOptions} which
 * this extends.
 *
 * @internal
 */
/**
 * Creates a {@link LegacyQueryArray}
 *
 * Options: {@link LegacyQueryArrayCreateOptions}
 *
 * @internal
 */
function createLegacyQueryArray(options) {
  return createReactiveResourceArray({
    store: options.store,
    manager: options.manager,
    editable: false,
    source: options.source,
    data: {
      links: options.links,
      meta: options.meta
    },
    features: {
      query: options.query,
      modelName: options.type,
      update,
      _update: _updateCollection,
      save,
      DEPRECATED_CLASS_NAME: 'LegacyQueryArray',
      isUpdating: false,
      isLoaded: options.isLoaded,
      _updatingPromise: null
    },
    extensions: null,
    options: null,
    destroy: destroyCollection,
    mutate: null
  });
}
function _updateCollection() {
  const context = this[Context];
  const {
    query
  } = this;
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`update cannot be used with this array`);
    }
  })(this.modelName) : {};
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`update cannot be used with no query`);
    }
  })(query) : {};
  // @ts-expect-error typescript is unable to handle the complexity of
  //   T = unknown, modelName = string
  //   T extends TypedRecordInstance, modelName = TypeFromInstance<T>
  // both being valid options to pass through here.
  const promise = context.store.query(this.modelName, query, {
    _recordArray: this
  });
  return promise;
}
function destroyCollection(clear) {
  destroy.call(this, clear ?? false);
  const {
    manager
  } = this[Context];
  manager._managed.delete(this);
  manager._pending.delete(this);
}
const FAKE_ARR = getOrSetGlobal('FAKE_ARR', {});
const SLICE_BATCH_SIZE = 4761;
/**
 * This is a clever optimization.
 *
 * clever optimizations rarely stand the test of time, so if you're
 * ever curious or think something better is possible please benchmark
 * and discuss. The benchmark for this at the time of writing is in
 * `scripts/benchmark-push.js`
 *
 * This approach turns out to be 150x faster in Chrome and node than
 * simply using push or concat. It's highly susceptible to the specifics
 * of the batch size, and may require tuning.
 *
 * Clever optimizations should always come with a `why`. This optimization
 * exists for two reasons.
 *
 * 1) array.push(...objects) and Array.prototype.push.apply(arr, objects)
 *   are susceptible to stack overflows. The size of objects at which this
 *   occurs varies by environment, browser, and current stack depth and memory
 *   pressure; however, it occurs in all browsers in fairly pristine conditions
 *   somewhere around 125k to 200k elements. Since WarpDrive regularly encounters
 *   arrays larger than this in size, we cannot use push.
 *
 * 2) `array.concat` or simply setting the array to a new reference is often an
 *   easier approach; however, native Proxy to an array cannot swap it's target array
 *   and attempts at juggling multiple array sources have proven to be victim to a number
 *   of browser implementation bugs. Should these bugs be addressed then we could
 *   simplify to using `concat`, however, do note this is currently 150x faster
 *   than concat, and due to the overloaded signature of concat will likely always
 *   be faster.
 *
 * Sincerely,
 *   - runspired (Chris Thoburn) 08/21/2022
 *
 * @private
 * @param target the array to push into
 * @param source the items to push into target
 */
function fastPush(target, source) {
  let batch;
  while (source.length > SLICE_BATCH_SIZE) {
    batch = source.splice(0, SLICE_BATCH_SIZE);
    target.push(...batch);
  }
  target.push(...source);
}
/**
  @hideconstructor
  @private
*/
class RecordArrayManager {
  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /**
   * LiveArray (peekAll/findAll) array instances
   * keyed by their ResourceType.
   *
   * @internal
   */

  /** @internal */

  /**
   * Buffered changes to apply keyed by the array to
   * which to apply them to.
   *
   * @internal
   */

  /**
   * An inverse map from ResourceKey to the list
   * of arrays it can be found in, useful for fast updates
   * when state changes to a resource occur.
   *
   * @internal
   */

  /**
   * When we do not yet have a LiveArray, this keeps track of
   * the added/removed identifiers to enable us to more efficiently
   * produce the LiveArray later.
   *
   * It's possible that using a Set and only storing additions instead of
   * additions and deletes would be more efficient.
   *
   * @internal
   */

  /** @internal */

  /** @internal */

  /**
   * KeyedArrays are arrays associated to a specific RequestKey.
   * @internal
   */

  /**
   * The visibility set tracks whether a given identifier should
   * be shown in RecordArrays. It is used to dedupe added/removed
   * and state change events.
   *
   * As a Map, it grows to be very large - there may be ways to
   * reduce its size by instead migrating to it functioning as
   * an exclusion list. Any entry not in the list would be considered
   * visible.
   * @internal
   */

  constructor(options) {
    this.store = options.store;
    this.isDestroying = false;
    this.isDestroyed = false;
    this._live = new Map();
    this._managed = new Set();
    this._pending = new Map();
    this._staged = new Map();
    this._keyedArrays = new Map();
    this._identifiers = new Map();
    this._set = new Map();
    this._visibilitySet = new Map();
    this._documentSubscription = this.store.notifications.subscribe('document', (identifier, type) => {
      if (type === 'updated' && this._keyedArrays.has(identifier.lid)) {
        const array = this._keyedArrays.get(identifier.lid);
        this.dirtyArray(array, 0, true);
      }
    });
    this._subscribeToResourceChanges();
  }

  /** @internal */
  _subscribeToResourceChanges() {
    this._subscription = this.store.notifications.subscribe('resource', (identifier, type) => {
      const schema = this.store.schema.resource?.(identifier);
      // If we are a polaris mode schema
      // and we are in the `isNew` state, we are kept hidden from
      // record arrays.
      if (schema && (!('legacy' in schema) || !schema.legacy)) {
        if (this.store.cache.isNew(identifier)) {
          return;
        }
      }
      if (type === 'added') {
        this._visibilitySet.set(identifier, true);
        this.identifierAdded(identifier);
      } else if (type === 'removed') {
        this._visibilitySet.set(identifier, false);
        this.identifierRemoved(identifier);
      } else if (type === 'state') {
        this.identifierChanged(identifier);
      }
    });
  }

  /** @internal */
  _syncArray(array) {
    const pending = this._pending.get(array);
    const isLegacyQuery = isLegacyQueryArray(array);
    if (isLegacyQuery && !pending || this.isDestroying || this.isDestroyed) {
      return;
    }

    // first flush any staged changes
    if (pending) {
      sync(array, pending, this._set.get(array));
      this._pending.delete(array);
    }

    // then pull new state if required
    if (!isLegacyQuery && !isLegacyLiveArray(array)) {
      const context = array[Context];
      const signal = context.signal;
      const identifier = context.options.requestKey;

      // we only need to rebuild the array from cache if a full sync is required
      // due to notification that the cache has changed
      if (signal.value === 'cache-sync') {
        const doc = this.store.cache.peek(identifier);
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          if (!test) {
            throw new Error(`Expected to find a document for ${identifier.lid} but found none`);
          }
        })(doc) : {};
        const data = !('data' in doc) || !Array.isArray(doc.data) ? [] : doc.data;
        // TODO technically we should destroy here if
        // !('data' in doc) || !Array.isArray(doc.data)
        // is true.
        this.populateManagedArray(array, data, null);
      }
    }
  }
  mutate(mutation) {
    this.store.cache.mutate(mutation);
  }

  /**
    Get the `RecordArray` for a modelName, which contains all loaded records of
    given modelName.
     @private
  */
  liveArrayFor(type) {
    let array = this._live.get(type);
    const identifiers = [];
    const staged = this._staged.get(type);
    if (staged) {
      staged.forEach((value, key) => {
        if (value === 'add') {
          identifiers.push(key);
        }
      });
      this._staged.delete(type);
    }
    if (!array) {
      array = createLegacyLiveArray({
        store: this.store,
        manager: this,
        source: identifiers,
        type
      });
      this._live.set(type, array);
      this._set.set(array, new Set(identifiers));
    }
    return array;
  }
  getCollection(config) {
    if ('requestKey' in config && this._keyedArrays.has(config.requestKey.lid)) {
      return this._keyedArrays.get(config.requestKey.lid);
    }
    let array = null;
    if ('requestKey' in config) {
      const options = {
        store: this.store,
        manager: this,
        source: config.source,
        options: {
          requestKey: config.requestKey
        }
      };
      array = createRequestCollection(options);
      this._keyedArrays.set(config.requestKey.lid, array);
      this._set.set(array, new Set(config.source));
      associate(this._identifiers, array, config.source);
    } else if ('query' in config) {
      const options = {
        store: this.store,
        manager: this,
        source: [],
        type: config.type,
        query: config.query,
        isLoaded: false,
        links: null,
        meta: null
      };
      array = createLegacyQueryArray(options);
      this._set.set(array, new Set());
    } else {
      const options = {
        store: this.store,
        manager: this,
        source: config.source,
        options: null
      };
      array = createRequestCollection(options);
      this._set.set(array, new Set(config.source));
      associate(this._identifiers, array, config.source);
    }
    this._managed.add(array);
    return array;
  }

  /** @internal */
  dirtyArray(array, delta, shouldSyncFromCache) {
    if (array === FAKE_ARR) {
      return;
    }
    const signal = array[Context].signal;
    if (!signal.isStale || delta > 0) {
      notifyInternalSignal(signal);

      // when the cache has updated for our array, we need to
      // do a full rebuild of the array
      signal.value = shouldSyncFromCache ? 'cache-sync' : 'patch';
    }
  }

  /** @internal */
  _getPendingFor(identifier, includeManaged, isRemove) {
    if (this.isDestroying || this.isDestroyed) {
      return;
    }
    const liveArray = this._live.get(identifier.type);
    const allPending = this._pending;
    const pending = new Map();
    if (includeManaged) {
      const managed = this._identifiers.get(identifier);
      if (managed) {
        managed.forEach(arr => {
          let changes = allPending.get(arr);
          if (!changes) {
            changes = new Map();
            allPending.set(arr, changes);
          }
          pending.set(arr, changes);
        });
      }
    }

    // during unloadAll we can ignore removes since we've already
    // cleared the array.
    if (liveArray && liveArray[Context].source.length === 0 && isRemove) {
      const pendingLive = allPending.get(liveArray);
      if (!pendingLive || pendingLive.size === 0) {
        return pending;
      }
    }
    if (!liveArray) {
      // start building a changeset for when we eventually
      // do have a live array
      let changes = this._staged.get(identifier.type);
      if (!changes) {
        changes = new Map();
        this._staged.set(identifier.type, changes);
      }
      pending.set(FAKE_ARR, changes);
    } else {
      let changes = allPending.get(liveArray);
      if (!changes) {
        changes = new Map();
        allPending.set(liveArray, changes);
      }
      pending.set(liveArray, changes);
    }
    return pending;
  }

  /**
   * @private
   */
  populateManagedArray(array, identifiers, payload) {
    this._pending.delete(array);
    const source = array[Context].source;
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`The new state of the collection should not be using the same array reference as the original state.`);
      }
    })(source !== identifiers) : {};
    const old = source.slice();
    source.length = 0;
    fastPush(source, identifiers);
    this._set.set(array, new Set(identifiers));
    if (isLegacyQueryArray(array)) {
      notifyInternalSignal(array[Context].signal);
      array.meta = payload?.meta || null;
      array.links = payload?.links || null;
      array.isLoaded = true;
    }
    disassociate(this._identifiers, array, old);
    associate(this._identifiers, array, identifiers);
  }

  /** @internal */
  identifierAdded(identifier) {
    const changeSets = this._getPendingFor(identifier, false);
    if (changeSets) {
      changeSets.forEach((changes, array) => {
        const existing = changes.get(identifier);
        if (existing === 'del') {
          changes.delete(identifier);
        } else {
          changes.set(identifier, 'add');
          this.dirtyArray(array, changes.size, false);
        }
      });
    }
  }

  /** @internal */
  identifierRemoved(identifier) {
    const changeSets = this._getPendingFor(identifier, true, true);
    if (changeSets) {
      changeSets.forEach((changes, array) => {
        const existing = changes.get(identifier);
        if (existing === 'add') {
          changes.delete(identifier);
        } else {
          changes.set(identifier, 'del');
          this.dirtyArray(array, changes.size, false);
        }
      });
    }
  }

  /** @internal */
  identifierChanged(identifier) {
    const newState = this.store._instanceCache.recordIsLoaded(identifier, true);

    // if the change matches the most recent direct added/removed
    // state, then we can ignore it
    if (this._visibilitySet.get(identifier) === newState) {
      return;
    }
    if (newState) {
      this.identifierAdded(identifier);
    } else {
      this.identifierRemoved(identifier);
    }
  }
  pause() {
    this.store.notifications.unsubscribe(this._subscription);
  }
  resume() {
    this._subscribeToResourceChanges();
  }

  /**
   * @internal
   */
  clear(isClear = true) {
    for (const array of this._live.values()) {
      array.destroy(isClear);
    }
    for (const array of this._managed.values()) {
      array.destroy(isClear);
    }
    this._managed.clear();
    this._identifiers.clear();
    this._pending.clear();
    for (const set of this._set.values()) {
      set.clear();
    }
    this._visibilitySet.clear();
  }
  destroy() {
    this.isDestroying = true;
    this.clear(false);
    this._live.clear();
    this.store.notifications.unsubscribe(this._subscription);
    this.store.notifications.unsubscribe(this._documentSubscription);
    this.isDestroyed = true;
  }
}

/**
 * This type exists for internal use only for
 * where intimate contracts still exist either for
 * the Test Suite or for Legacy code.
 *
 * @private
 */

function associate(ArraysCache, array, identifiers) {
  for (let i = 0; i < identifiers.length; i++) {
    const identifier = identifiers[i];
    let cache = ArraysCache.get(identifier);
    if (!cache) {
      cache = new Set();
      ArraysCache.set(identifier, cache);
    }
    cache.add(array);
  }
}
function disassociate(ArraysCache, array, identifiers) {
  for (let i = 0; i < identifiers.length; i++) {
    disassociateIdentifier(ArraysCache, array, identifiers[i]);
  }
}
function disassociateIdentifier(ArraysCache, array, identifier) {
  const cache = ArraysCache.get(identifier);
  if (cache) {
    cache.delete(array);
  }
}
function sync(array, changes, arraySet) {
  const state = array[Context].source;
  const adds = [];
  const removes = [];
  changes.forEach((value, key) => {
    if (value === 'add') {
      // likely we want to keep a Set along-side
      if (arraySet.has(key)) {
        return;
      }
      adds.push(key);
      arraySet.add(key);
    } else {
      if (arraySet.has(key)) {
        removes.push(key);
        arraySet.delete(key);
      }
    }
  });
  if (removes.length) {
    if (removes.length === state.length) {
      state.length = 0;
      // changing the reference breaks the Proxy
      // state = array[SOURCE] = [];
    } else {
      removes.forEach(i => {
        const index = state.indexOf(i);
        if (index !== -1) {
          state.splice(index, 1);
          arraySet.delete(i);
        }
      });
    }
  }
  if (adds.length) {
    fastPush(state, adds);
    // changing the reference breaks the Proxy
    // else we could do this
    /*
    if (state.length === 0) {
      array[SOURCE] = adds;
    } else {
      array[SOURCE] = state.concat(adds);
    }
    */
  }
}
function isLegacyQueryArray(array) {
  const context = array[Context];
  return context.features !== null && context.features.DEPRECATED_CLASS_NAME === 'LegacyQueryArray';
}
function isLegacyLiveArray(array) {
  const context = array[Context];
  return context.features !== null && context.features.DEPRECATED_CLASS_NAME === 'LiveArray';
}
const Touching = getOrSetGlobal('Touching', Symbol('touching'));
const RequestPromise = getOrSetGlobal('RequestPromise', Symbol('promise'));
const EMPTY_ARR = macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? Object.freeze([]) : [];
function hasRecordIdentifier(op) {
  return 'recordIdentifier' in op;
}

/**
 * The RequestStateService is used to track the state of requests
 * for fetching or updating known resource identifies that are inflight.
 *
 * @hideconstructor
 * @public
 */
class RequestStateService {
  /** @internal */
  _pending = new Map();
  /** @internal */
  _done = new Map();
  /** @internal */
  _subscriptions = new Map();
  /** @internal */
  _toFlush = [];
  /** @internal */
  _store;
  constructor(store) {
    this._store = store;
  }
  /** @internal */
  _clearEntries(identifier) {
    this._done.delete(identifier);
  }
  /** @internal */
  _enqueue(promise, queryRequest) {
    const query = queryRequest.data[0];
    if (hasRecordIdentifier(query)) {
      const identifier = query.recordIdentifier;
      const type = query.op === 'saveRecord' ? 'mutation' : 'query';
      if (!this._pending.has(identifier)) {
        this._pending.set(identifier, []);
      }
      const request = {
        state: 'pending',
        request: queryRequest,
        type
      };
      request[Touching] = [query.recordIdentifier];
      request[RequestPromise] = promise;
      this._pending.get(identifier).push(request);
      this._triggerSubscriptions(request);
      return promise.then(result => {
        this._dequeue(identifier, request);
        const finalizedRequest = {
          state: 'fulfilled',
          request: queryRequest,
          type,
          response: {
            data: result
          }
        };
        finalizedRequest[Touching] = request[Touching];
        this._addDone(finalizedRequest);
        this._triggerSubscriptions(finalizedRequest);
        return result;
      }, error => {
        this._dequeue(identifier, request);
        const finalizedRequest = {
          state: 'rejected',
          request: queryRequest,
          type,
          response: {
            data: error
          }
        };
        finalizedRequest[Touching] = request[Touching];
        this._addDone(finalizedRequest);
        this._triggerSubscriptions(finalizedRequest);
        throw error;
      });
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      {
        throw new Error(`Expected a well formed  query`);
      }
    })() : {};
  }

  /** @internal */
  _triggerSubscriptions(req) {
    if (req.state === 'pending') {
      this._flushRequest(req);
      return;
    }
    this._toFlush.push(req);
    if (this._toFlush.length === 1) {
      this._store.notifications._onNextFlush(() => {
        this._flush();
      });
    }
  }

  /** @internal */
  _flush() {
    this._toFlush.forEach(req => {
      this._flushRequest(req);
    });
    this._toFlush = [];
  }

  /** @internal */
  _flushRequest(req) {
    req[Touching].forEach(identifier => {
      const subscriptions = this._subscriptions.get(identifier);
      if (subscriptions) {
        subscriptions.forEach(callback => callback(req));
      }
    });
  }

  /** @internal */
  _dequeue(identifier, request) {
    const pending = this._pending.get(identifier);
    this._pending.set(identifier, pending.filter(req => req !== request));
  }

  /** @internal */
  _addDone(request) {
    request[Touching].forEach(identifier => {
      // TODO add support for multiple
      const requestDataOp = request.request.data[0].op;
      let requests = this._done.get(identifier);
      if (requests) {
        requests = requests.filter(req => {
          // TODO add support for multiple
          let data;
          if (Array.isArray(req.request.data)) {
            data = req.request.data[0];
          } else {
            data = req.request.data;
          }
          return data.op !== requestDataOp;
        });
      }
      requests = requests || [];
      requests.push(request);
      this._done.set(identifier, requests);
    });
  }

  /**
   * Subscribe to requests for a given resource identity.
   *
   * The callback will receive the current state of the request.
   *
   * ```ts
   * interface RequestState {
   *   state: 'pending' | 'fulfilled' | 'rejected';
   *   type: 'query' | 'mutation';
   *   request: Request;
   *   response?: { data: unknown };
   * }
   * ```
   *
   * Note: It should be considered dangerous to use this API for more than simple
   * state derivation or debugging. The `request` and `response` properties are poorly
   * spec'd and may change unexpectedly when shifting what Handlers are in use or how
   * requests are issued from the Store.
   *
   * We expect to revisit this API in the near future as we continue to refine the
   * RequestManager ergonomics, as a simpler but more powerful direct integration
   * with the RequestManager for these purposes is likely to be a better long-term
   * design.
   *
   * @public
   * @param {ResourceKey} identifier
   * @param {(state: RequestCacheRequestState) => void} callback
   */
  subscribeForRecord(identifier, callback) {
    let subscriptions = this._subscriptions.get(identifier);
    if (!subscriptions) {
      subscriptions = [];
      this._subscriptions.set(identifier, subscriptions);
    }
    subscriptions.push(callback);
  }

  /**
   * Retrieve all active requests for a given resource identity.
   *
   * @public
   * @param {ResourceKey} identifier
   * @return {RequestCacheRequestState[]} an array of request states for any pending requests for the given identifier
   */
  getPendingRequestsForRecord(identifier) {
    return this._pending.get(identifier) || EMPTY_ARR;
  }

  /**
   * Retrieve the last completed request for a given resource identity.
   *
   * @public
   * @param {ResourceKey} identifier
   * @return {RequestCacheRequestState | null} the state of the most recent request for the given identifier
   */
  getLastRequestForRecord(identifier) {
    const requests = this._done.get(identifier);
    if (requests) {
      return requests[requests.length - 1];
    }
    return null;
  }
}

/**
 * This type exists for internal use only for
 * where intimate contracts still exist either for
 * the Test Suite or for Legacy code.
 *
 * @private
 */

// this import location is deprecated but breaks in 4.8 and older
if (macroCondition(getGlobalConfig().WarpDrive.env.TESTING)) {
  // @ts-expect-error adding to globalThis
  globalThis.setWarpDriveLogging = setLogging;

  // @ts-expect-error adding to globalThis
  globalThis.getWarpDriveRuntimeConfig = getRuntimeConfig;
}
if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_METRIC_COUNTS)) {
  if (getGlobalConfig().WarpDrive.debug.LOG_METRIC_COUNTS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_METRIC_COUNTS) {
    // @ts-expect-error adding to globalThis
    // eslint-disable-next-line
    globalThis.__WarpDriveMetricCountData = globalThis.__WarpDriveMetricCountData || {};

    // @ts-expect-error adding to globalThis
    globalThis.getWarpDriveMetricCounts = () => {
      // @ts-expect-error
      // eslint-disable-next-line
      return structuredClone(globalThis.__WarpDriveMetricCountData);
    };

    // @ts-expect-error adding to globalThis
    globalThis.resetWarpDriveMetricCounts = () => {
      // @ts-expect-error
      globalThis.__WarpDriveMetricCountData = {};
    };
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.__INTERNAL_LOG_NATIVE_MAP_SET_COUNTS)) {
      if (getGlobalConfig().WarpDrive.debug.__INTERNAL_LOG_NATIVE_MAP_SET_COUNTS || globalThis.getWarpDriveRuntimeConfig().debug.__INTERNAL_LOG_NATIVE_MAP_SET_COUNTS) {
        // @ts-expect-error adding to globalThis
        globalThis.__primitiveInstanceId = 0;
        function interceptAndLog(klassName, methodName) {
          const klass = globalThis[klassName];
          if (methodName === 'constructor') {
            const instantiationLabel = `new ${klassName}()`;
            // @ts-expect-error
            globalThis[klassName] = class extends klass {
              // @ts-expect-error
              constructor(...args) {
                // eslint-disable-next-line
                super(...args);
                // @ts-expect-error

                const instanceId = globalThis.__primitiveInstanceId++;
                // @ts-expect-error
                // eslint-disable-next-line
                globalThis.__WarpDriveMetricCountData[instantiationLabel] =
                // @ts-expect-error
                // eslint-disable-next-line
                (globalThis.__WarpDriveMetricCountData[instantiationLabel] || 0) + 1;
                // @ts-expect-error
                this.instanceName = `${klassName}:${instanceId} - ${new Error().stack?.split('\n')[2]}`;
              }
            };
          } else {
            // @ts-expect-error
            // eslint-disable-next-line
            const original = klass.prototype[methodName];
            const logName = `${klassName}.${methodName}`;

            // @ts-expect-error
            klass.prototype[methodName] = function (...args) {
              // @ts-expect-error
              // eslint-disable-next-line
              globalThis.__WarpDriveMetricCountData[logName] = (globalThis.__WarpDriveMetricCountData[logName] || 0) + 1;
              // @ts-expect-error
              const {
                instanceName
              } = this;
              if (!instanceName) {
                // @ts-expect-error
                const instanceId = globalThis.__primitiveInstanceId++;
                // @ts-expect-error
                this.instanceName = `${klassName}.${methodName}:${instanceId} - ${new Error().stack?.split('\n')[2]}`;
              }
              const instanceLogName = `${logName} (${instanceName})`;
              // @ts-expect-error
              // eslint-disable-next-line
              globalThis.__WarpDriveMetricCountData[instanceLogName] =
              // @ts-expect-error
              // eslint-disable-next-line
              (globalThis.__WarpDriveMetricCountData[instanceLogName] || 0) + 1;
              // eslint-disable-next-line
              return original.apply(this, args);
            };
          }
        }
        interceptAndLog('Set', 'constructor');
        interceptAndLog('Set', 'add');
        interceptAndLog('Set', 'delete');
        interceptAndLog('Set', 'has');
        interceptAndLog('Set', 'set');
        interceptAndLog('Set', 'get');
        interceptAndLog('Map', 'constructor');
        interceptAndLog('Map', 'set');
        interceptAndLog('Map', 'delete');
        interceptAndLog('Map', 'has');
        interceptAndLog('Map', 'add');
        interceptAndLog('Map', 'get');
        interceptAndLog('WeakSet', 'constructor');
        interceptAndLog('WeakSet', 'add');
        interceptAndLog('WeakSet', 'delete');
        interceptAndLog('WeakSet', 'has');
        interceptAndLog('WeakSet', 'set');
        interceptAndLog('WeakSet', 'get');
        interceptAndLog('WeakMap', 'constructor');
        interceptAndLog('WeakMap', 'set');
        interceptAndLog('WeakMap', 'delete');
        interceptAndLog('WeakMap', 'has');
        interceptAndLog('WeakMap', 'add');
        interceptAndLog('WeakMap', 'get');
      }
    }
  }
}

// `AwaitedKeys` is needed here to resolve any promise types like `PromiseBelongsTo`.

/**
 * Currently only records that extend object can be created via
 * store.createRecord. This is a limitation of the current API,
 * but can be worked around by creating a new identifier, running
 * the cache.clientDidCreate method, and then peeking the record
 * for the identifier.
 *
 * To assign primary key to a record during creation, only `id` will
 * work correctly for `store.createRecord`, other primary key may be
 * handled by updating the record after creation or using the flow
 * described above.
 *
 * TODO: These are limitations we want to (and can) address. If you
 * have need of lifting these limitations, please open an issue.
 *
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
const EmptyClass = class {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(args) {}
};
const _BaseClass = macroCondition(dependencySatisfies('ember-source', '*')) ? macroCondition(getGlobalConfig().WarpDrive.deprecations.DEPRECATE_STORE_EXTENDS_EMBER_OBJECT) ? importSync('@ember/object') : EmptyClass : EmptyClass;
const BaseClass = _BaseClass.default ? _BaseClass.default : _BaseClass;
if (BaseClass !== EmptyClass) {
  deprecate(`The Store class extending from EmberObject is deprecated.
Please remove usage of EmberObject APIs and mark your class as not requiring it.

To mark the class as no longer extending from EmberObject, in ember-cli-build.js
set the following config:

\`\`\`js
const app = new EmberApp(defaults, {
  emberData: {
    deprecations: {
      DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false
    }
  }
});
\`\`\`
`, false, {
    id: 'ember-data:deprecate-store-extends-ember-object',
    until: '6.0',
    for: 'ember-data',
    url: 'https://deprecations.emberjs.com/id/ember-data-deprecate-store-extends-ember-object',
    since: {
      available: '4.13',
      enabled: '5.4'
    }
  });
}
/**
 * ```ts
 * import { Store } from '@warp-drive/core';
 * ```
 *
 * The `Store` is the central piece of the ***Warp*Drive** experience. It connects
 * requests for data with schemas, caching and reactivity.
 *
 * While it's easy to use ***just*** ***Warp*Drive**'s request management, most projects will find they
 * require far more than basic fetch management. For this reason it's often best to start with a `Store`
 * even when you aren't sure yet.
 *
 * Most projects will only have a single `Store`, though using multiple distinct stores
 * is possible.
 *
 * @public
 * @hideconstructor
 */
class Store extends BaseClass {
  /** @internal */

  /**
   * Provides access to the {@link NotificationManager} associated
   * with this Store instance.
   *
   * The NotificationManager can be used to subscribe to
   * changes to the cache.
   *
   * @public
   */

  /**
   * Provides access to the SchemaService instance
   * for this Store instance.
   *
   * The SchemaService can be used to query for
   * information about the schema of a resource.
   *
   * @public
   */
  get schema() {
    if (!this._schema) {
      this._schema = this.createSchemaService();
    }
    return this._schema;
  }
  /** @internal */

  /**
   * Provides access to the CacheKeyManager
   * for this store.
   *
   * The CacheKeyManager can be used to generate or
   * retrieve a stable unique CacheKey for any resource
   * or request.
   *
   * @public
   */

  /**
   * Provides access to the {@link RequestManager} instance associated
   * with this Store instance.
   *
   * See also:
   * - {@link Fetch}
   * - {@link CacheHandlerInterface | CacheHandler (Interface)}
   * - {@link CacheHandler | CacheHandler (Class)}
   *
   * ```ts
   * import { CacheHandler, Fetch, RequestManager, Store } from '@warp-drive/core';
   *
   * class AppStore extends Store {
   *   requestManager = new RequestManager()
   *    .use([Fetch])
   *    .useCache(CacheHandler);
   * }
   * ```
   *
   * @public
   */

  /**
   * A Property which an App may set to provide a CachePolicy
   * to control when a cached request becomes stale.
   *
   * Note, when defined, these methods will only be invoked if a
   * cache key exists for the request, either because the request
   * contains `cacheOptions.key` or because the {@link CacheKeyManager}
   * was able to generate a key for the request using the configured
   * {@link setIdentifierGenerationMethod | generation method}.
   *
   * `isSoftExpired` will only be invoked if `isHardExpired` returns `false`.
   *
   * ```ts
   * store.lifetimes = {
   *   // make the request and ignore the current cache state
   *   isHardExpired(key: RequestKey): boolean {
   *     return false;
   *   }
   *
   *   // make the request in the background if true, return cache state
   *   isSoftExpired(key: RequestKey): boolean {
   *     return false;
   *   }
   * }
   * ```
   *
   * @public
   */

  // Private
  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /**
   * Async flush buffers notifications until flushed
   * by finalization of a future configured by store.request
   *
   * This is useful for ensuring that notifications are delivered
   * prior to the promise resolving but without risk of promise
   * interleaving.
   *
   * @internal
   */

  /**
   * Available in DEBUG Only
   * @internal
   */

  /** @internal */

  /** @internal */

  /** @private */
  get isDestroying() {
    return this._isDestroying;
  }
  /** @internal */
  set isDestroying(value) {
    this._isDestroying = value;
  }
  /** @private */
  get isDestroyed() {
    return this._isDestroyed;
  }
  /** @internal */
  set isDestroyed(value) {
    this._isDestroyed = value;
  }

  /** @deprecated use {@link Store.cacheKeyManager} */
  get identifierCache() {
    return this.cacheKeyManager;
  }

  /**
    @private
  */
  constructor(createArgs) {
    super(createArgs);
    Object.assign(this, createArgs);
    this.cacheKeyManager = new CacheKeyManager();
    this.notifications = new NotificationManager(this);

    // private but maybe useful to be here, somewhat intimate
    this.recordArrayManager = new RecordArrayManager({
      store: this
    });

    // private
    this._requestCache = new RequestStateService(this);
    this._instanceCache = new InstanceCache(this);
    this.isDestroying = false;
    this.isDestroyed = false;
  }

  /** @internal */
  _run(cb) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`WarpDrive should never encounter a nested run`);
      }
    })(!this._cbs) : {};
    const _cbs = this._cbs = {};
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      try {
        cb();
        if (_cbs.coalesce) {
          _cbs.coalesce();
        }
        if (_cbs.sync) {
          _cbs.sync();
        }
        if (_cbs.notify) {
          _cbs.notify();
        }
      } finally {
        this._cbs = null;
      }
    } else {
      cb();
      if (_cbs.coalesce) {
        _cbs.coalesce();
      }
      if (_cbs.sync) {
        _cbs.sync();
      }
      if (_cbs.notify) {
        _cbs.notify();
      }
      this._cbs = null;
    }
  }

  /**
   * Executes the callback, ensurng that any work that calls
   * store._schedule is executed after in the right order.
   *
   * When queues already exist, scheduled callbacks will
   * join the existing queue.
   *
   * @internal
   */
  _join(cb) {
    if (this._cbs) {
      cb();
    } else {
      this._run(cb);
    }
  }

  /** @internal */
  _schedule(name, cb) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`WarpDrive expects to schedule only when there is an active run`);
      }
    })(!!this._cbs) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`WarpDrive expects only one flush per queue name, cannot schedule ${name}`);
      }
    })(!this._cbs[name]) : {};
    this._cbs[name] = cb;
  }

  /**
   * Retrieve the RequestStateService instance
   * associated with this Store.
   *
   * This can be used to query the status of requests
   * that have been initiated for a given identifier.
   *
   * @return {RequestStateService}
   * @public
   */
  getRequestStateService() {
    return this._requestCache;
  }

  /** @internal */
  _getAllPending() {
    if (macroCondition(getGlobalConfig().WarpDrive.env.TESTING)) {
      const all = [];
      const pending = this._requestCache._pending;
      pending.forEach(requests => {
        all.push(...requests.map(v => v[RequestPromise]));
      });
      this.requestManager._pending.forEach(v => all.push(v));
      const promise = Promise.allSettled(all);
      promise.length = all.length;
      return promise;
    }
  }

  /**
   * ::: tip 💡 For a more complete overview see the [Request Guide](/guides/2-requests/1-overview)
   * :::
   *
   * Issue a request via the configured {@link RequestManager},
   * inserting the response into the {@link Store.cache | cache} and handing
   * back a {@link Future} which resolves to a {@link ReactiveDocument | ReactiveDocument}
   *
   * #### Request Cache Keys
   *
   * Only {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/GET | GET} requests with a url or requests with an explicit
   * {@link CacheOptions.key | cache key} will have the request result
   * and document cached.
   *
   * The cache key used is {@link RequestInfo.cacheOptions.key | RequestInfo.cacheOptions.key}
   * if present, falling back to {@link RequestInfo.url}.
   *
   * Params are not serialized as part of the cache-key, so
   * either ensure they are already in the url or utilize
   * `requestConfig.cacheOptions.key`. For queries issued
   * via the {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST | POST} method `requestConfig.cacheOptions.key`
   * MUST be supplied for the document to be cached.
   *
   * #### Requesting Without a Cache Key
   *
   * Resource data within the request is always updated in the cache,
   * regardless of whether a cache key is present for the request.
   *
   * #### Fulfilling From Cache
   *
   * When a cache-key is determined, the request may fulfill
   * from cache provided the cache is not stale.
   *
   * Cache staleness is determined by the configured {@link CachePolicy}
   * with priority given to the  {@link CacheOptions.reload} and
   * {@link CacheOptions.backgroundReload} on the request if present.
   *
   * If the cache data has soft expired or the request asks for a background
   * reload, the request will fulfill from cache if possible and
   * make a non-blocking request in the background to update the cache.
   *
   * If the cache data has hard expired or the request asks for a reload,
   * the request will not fulfill from cache and will make a blocking
   * request to update the cache.
   *
   * #### The Response
   *
   * The primary difference between {@link RequestManager.request} and `store.request`
   * is that `store.request` will convert the response into a {@link ReactiveDocument}
   * containing {@link Store.instantiateRecord | ReactiveResources}.
   *
   * @public
   */
  request(requestConfig) {
    // we lazily set the cache handler when we issue the first request
    // because constructor doesn't allow for this to run after
    // the user has had the chance to set the prop.
    const opts = {
      store: this,
      [EnableHydration]: requestConfig[EnableHydration] ?? true
    };
    if (requestConfig.records) {
      const cacheKeyManager = this.cacheKeyManager;
      opts.records = requestConfig.records.map(r => cacheKeyManager.getOrCreateRecordIdentifier(r));
    }
    if (macroCondition(getGlobalConfig().WarpDrive.env.TESTING)) {
      if (this.DISABLE_WAITER) {
        opts.disableTestWaiter = typeof requestConfig.disableTestWaiter === 'boolean' ? requestConfig.disableTestWaiter : true;
      }
    }
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_REQUESTS)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_REQUESTS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_REQUESTS) {
        let options;
        try {
          options = JSON.parse(JSON.stringify(requestConfig));
        } catch {
          options = requestConfig;
        }
        // eslint-disable-next-line no-console
        console.log(`request: [[START]] ${requestConfig.op && !requestConfig.url ? '(LEGACY) ' : ''}${requestConfig.op || '<unknown operation>'} ${requestConfig.url || '<empty url>'}  ${requestConfig.method || '<empty method>'}`, options);
      }
    }
    const request = Object.assign({}, requestConfig, opts);
    const future = this.requestManager.request(request);
    future.onFinalize(() => {
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_REQUESTS)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_REQUESTS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_REQUESTS) {
          // eslint-disable-next-line no-console
          console.log(`request: [[FINALIZE]] ${requestConfig.op && !requestConfig.url ? '(LEGACY) ' : ''}${requestConfig.op || '<unknown operation>'} ${requestConfig.url || '<empty url>'}  ${requestConfig.method || '<empty method>'}`);
        }
      }
      // skip flush for legacy belongsTo
      if (requestConfig.op === 'findBelongsTo' && !requestConfig.url) {
        return;
      }
      this.notifications._flush();
    });
    return future;
  }

  /**
    Creates a new record in the current store.
     > [!CAUTION]
    > This should not be used to mock records or to create
    > a record representing data that could be fetched from
    > the API.
     The properties passed to this method are set on
    the newly created record.
     For instance: to create a new `post`:
     ```js
    store.createRecord('post', {
      title: 'WarpDrive is Stellar!'
    });
    ```
     Relationships can be set during create. For instance,
    to create a new `post` that has an existing user as
    it's author:
     ```js
    const user = store.peekRecord('user', '1');
     store.createRecord('post', {
      title: 'WarpDrive is Stellar!',
      user: user
    });
    ```
     ### lid handling
     All new records are assigned an `lid` that can be used to handle
    transactional saves of multiple records, or to link the data to
    other data in scenarios involving eventual-consistency or remote
    syncing.
     ```ts
    const post = store.createRecord('post', {
      title: 'WarpDrive is Stellar!'
    });
    const { lid } = recordIdentifierFor(post);
    ```
     The `lid` defaults to a uuidv4 string.
     In order to support receiving knowledge about unpersisted creates
    from other sources (say a different tab in the same web-browser),
    createRecord allows for the `lid` to be provided as part of an
    optional third argument. **If this lid already exists in the store
    an error will be thrown.**
     ```ts
    const post = store.createRecord(
      'post',
      { title: 'WarpDrive is Stellar!' },
      { lid: '4d47bb88-931f-496e-986d-c4888cef7373' }
    );
    ```
     @public
    @param type the name of the resource
    @param inputProperties a hash of properties to set on the
      newly created record.
    @return a record in the "isNew" state
  */

  createRecord(type, inputProperties, context) {
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      assertDestroyingStore(this, 'createRecord');
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You need to pass a model name to the store's createRecord method`);
      }
    })(type) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Passing classes to store methods has been removed. Please pass a dasherized string instead of ${type}`);
      }
    })(typeof type === 'string') : {};

    // This is wrapped in a `run.join` so that in test environments users do not need to manually wrap
    //   calls to `createRecord`. The run loop usage here is because we batch the joining and updating
    //   of record-arrays via ember's run loop, not our own.
    //
    //   to remove this, we would need to move to a new `async` API.
    let record;
    this._join(() => {
      const normalizedModelName = normalizeModelName(type);
      const properties = {
        ...inputProperties
      };

      // If the passed properties do not include a primary key,
      // give the adapter an opportunity to generate one. Typically,
      // client-side ID generators will use something like uuid.js
      // to avoid conflicts.
      let id = null;
      if (properties.id === null || properties.id === undefined) {
        const adapter = this.adapterFor?.(normalizedModelName, true);
        if (adapter && adapter.generateIdForRecord) {
          id = properties.id = coerceId(adapter.generateIdForRecord(this, normalizedModelName, properties));
        } else {
          id = properties.id = null;
        }
      } else {
        id = properties.id = coerceId(properties.id);
      }
      const resource = {
        type: normalizedModelName,
        id
      };
      if (resource.id) {
        const identifier = this.cacheKeyManager.peekResourceKey(resource);
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          if (!test) {
            throw new Error(`The id ${String(properties.id)} has already been used with another '${normalizedModelName}' record.`);
          }
        })(!identifier) : {};
      }
      if (context?.lid) {
        const identifier = this.cacheKeyManager.peekResourceKey({
          lid: context?.lid
        });
        resource.lid = context.lid;
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          if (!test) {
            throw new Error(`The lid ${context.lid} has already been used with another '${identifier?.type}' record.`);
          }
        })(!identifier) : {};
      }
      const identifier = this.cacheKeyManager.createIdentifierForNewRecord(resource);
      const cache = this.cache;
      const createOptions = normalizeProperties(this, identifier, properties);
      const resultProps = cache.clientDidCreate(identifier, createOptions);
      record = getNewRecord(this._instanceCache, identifier, resultProps);
    });
    return record;
  }

  /**
    For symmetry, a record can be deleted via the store.
     Example
     ```javascript
    let post = store.createRecord('post', {
      title: 'Ember is awesome!'
    });
     store.deleteRecord(post);
    ```
     @public
    @param {unknown} record
  */
  deleteRecord(record) {
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      assertDestroyingStore(this, 'deleteRecord');
    }
    const identifier = peekResourceKey(record);
    const cache = this.cache;
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`expected the record to be connected to a cache`);
      }
    })(identifier) : {};
    this._join(() => {
      cache.setIsDeleted(identifier, true);
      if (cache.isNew(identifier)) {
        this._instanceCache.unloadRecord(identifier);
      }
    });
  }

  /**
    For symmetry, a record can be unloaded via the store.
    This will cause the record to be destroyed and freed up for garbage collection.
     Example
     ```javascript
    const { content: { data: post } } = await store.request(findRecord({ type: 'post', id: '1' }));
    store.unloadRecord(post);
    ```
     @public
    @param {Model} record
  */
  unloadRecord(record) {
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      assertDestroyingStore(this, 'unloadRecord');
    }
    const identifier = peekResourceKey(record);
    if (identifier) {
      this._instanceCache.unloadRecord(identifier);
    }
  }

  /**
    Get a record by a given type and ID without triggering a fetch.
     This method will synchronously return the record if it is available in the store,
    otherwise it will return `null`. A record is available if it has been fetched earlier, or
    pushed manually into the store.
     **Example 1**
     ```ts
    const post = store.peekRecord('post', '1');
     post.id; // '1'
    ```
     `peekRecord` can be called with a single identifier argument instead of the combination
    of `type` (modelName) and `id` as separate arguments. You may recognize this combo as
    the typical pairing from [JSON:API](https://jsonapi.org/format/#document-resource-object-identification)
     **Example 2**
     ```ts
    const post = store.peekRecord({ type: 'post', id: '1' });
    post.id; // '1'
    ```
     If you have previously received an lid from an Identifier for this record, you can lookup the record again using
    just the lid.
     **Example 3**
     ```js
    let post = store.peekRecord({ lid });
    post.id; // '1'
    ```
     @since 1.13.0
    @public
    @param type - either a string representing the modelName or a ResourceIdentifier object containing both the type (a string) and the id (a string) for the record or an lid (a string) of an existing record
    @param id - optional only if the first param is a ResourceIdentifier, else the string id of the record to be retrieved.
  */

  peekRecord(identifier, id) {
    if (arguments.length === 1 && isMaybeIdentifier(identifier)) {
      const stableIdentifier = this.cacheKeyManager.peekResourceKey(identifier);
      const isLoaded = stableIdentifier && this._instanceCache.recordIsLoaded(stableIdentifier);
      // TODO come up with a better mechanism for determining if we have data and could peek.
      // this is basically an "are we not empty" query.
      return isLoaded ? this._instanceCache.getRecord(stableIdentifier) : null;
    }
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      assertDestroyingStore(this, 'peekRecord');
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You need to pass a model name to the store's peekRecord method`);
      }
    })(identifier) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Passing classes to store methods has been removed. Please pass a dasherized string instead of ${String(identifier)}`);
      }
    })(typeof identifier === 'string') : {};
    const type = normalizeModelName(identifier);
    const normalizedId = ensureStringId(id);
    const resource = {
      type,
      id: normalizedId
    };
    const stableIdentifier = this.cacheKeyManager.peekResourceKey(resource);
    const isLoaded = stableIdentifier && this._instanceCache.recordIsLoaded(stableIdentifier);
    return isLoaded ? this._instanceCache.getRecord(stableIdentifier) : null;
  }

  /**
    This method returns the {@link LegacyLiveArray} that contains all of the
    known records for a given type in the store. Each ResourceType has only
    one LiveArray instance, so multiple calls to `peekAll` with the same type
    will always return the same instance.
     Note that because it's a LiveArray, the result will contain any
    locally created records of the type, however, it will not make a
    request to the backend to retrieve additional records.
     Example
     ```ts
    const allPosts = store.peekAll('post');
    ```
     @since 1.13.0
    @public
    @param type the name of the resource
  */

  peekAll(type) {
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      assertDestroyingStore(this, 'peekAll');
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You need to pass a model name to the store's peekAll method`);
      }
    })(type) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Passing classes to store methods has been removed. Please pass a dasherized string instead of ${type}`);
      }
    })(typeof type === 'string') : {};
    return this.recordArrayManager.liveArrayFor(normalizeModelName(type));
  }

  /**
    This method unloads all records in the store.
    It schedules unloading to happen during the next run loop.
     Optionally you can pass a type which unload all records for a given type.
     ```javascript
    store.unloadAll();
    store.unloadAll('post');
    ```
     @param {String} type the name of the resource
    @public
  */

  unloadAll(type) {
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      assertDestroyedStoreOnly(this, 'unloadAll');
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Passing classes to store methods has been removed. Please pass a dasherized string instead of ${String(type)}`);
      }
    })(!type || typeof type === 'string') : {};
    this._join(() => {
      this._enableAsyncFlush = true;
      if (type === undefined) {
        this.recordArrayManager.pause();
        // destroy the graph before unloadAll
        // since then we avoid churning relationships
        // during unload
        this._graph?.identifiers.clear();
        this.recordArrayManager.clear();
        this._instanceCache.clear();
      } else {
        this._instanceCache.clear(normalizeModelName(type));
      }
      this._enableAsyncFlush = null;
      this.notifications._flush();
      if (type === undefined) {
        this.recordArrayManager.resume();
      }
    });
  }

  /**
    Push some data for a given type into the store.
     This method expects normalized [JSON API](http://jsonapi.org/) document. This means you have to follow [JSON API specification](http://jsonapi.org/format/) with few minor adjustments:
    - record's `type` should always be in singular, dasherized form
    - members (properties) should be camelCased
     [Your primary data should be wrapped inside `data` property](http://jsonapi.org/format/#document-top-level):
     ```js
    store.push({
      data: {
        // primary data for single record of type `Person`
        id: '1',
        type: 'person',
        attributes: {
          firstName: 'Daniel',
          lastName: 'Kmak'
        }
      }
    });
    ```
     [Demo.](http://ember-twiddle.com/fb99f18cd3b4d3e2a4c7)
     `data` property can also hold an array (of records):
     ```js
    store.push({
      data: [
        // an array of records
        {
          id: '1',
          type: 'person',
          attributes: {
            firstName: 'Daniel',
            lastName: 'Kmak'
          }
        },
        {
          id: '2',
          type: 'person',
          attributes: {
            firstName: 'Tom',
            lastName: 'Dale'
          }
        }
      ]
    });
    ```
     [Demo.](http://ember-twiddle.com/69cdbeaa3702159dc355)
     There are some typical properties for `JSONAPI` payload:
    * `id` - mandatory, unique record's key
    * `type` - mandatory string which matches `model`'s dasherized name in singular form
    * `attributes` - object which holds data for record attributes - `attr`'s declared in model
    * `relationships` - object which must contain any of the following properties under each relationships' respective key (example path is `relationships.achievements.data`):
      - [`links`](http://jsonapi.org/format/#document-links)
      - [`data`](http://jsonapi.org/format/#document-resource-object-linkage) - place for primary data
      - [`meta`](http://jsonapi.org/format/#document-meta) - object which contains meta-information about relationship
     For this model:
     ```js [app/models/person.js]
    import Model, { attr, hasMany } from '@warp-drive/legacy/model';
     export default class PersonRoute extends Route {
      @attr('string') firstName;
      @attr('string') lastName;
       @hasMany('person') children;
    }
    ```
     To represent the children as IDs:
     ```js
    {
      data: {
        id: '1',
        type: 'person',
        attributes: {
          firstName: 'Tom',
          lastName: 'Dale'
        },
        relationships: {
          children: {
            data: [
              {
                id: '2',
                type: 'person'
              },
              {
                id: '3',
                type: 'person'
              },
              {
                id: '4',
                type: 'person'
              }
            ]
          }
        }
      }
    }
    ```
     [Demo.](http://ember-twiddle.com/343e1735e034091f5bde)
     To represent the children relationship as a URL:
     ```js
    {
      data: {
        id: '1',
        type: 'person',
        attributes: {
          firstName: 'Tom',
          lastName: 'Dale'
        },
        relationships: {
          children: {
            links: {
              related: '/people/1/children'
            }
          }
        }
      }
    }
    ```
     If you're streaming data, or implementing response handling, make sure
    that you have converted the incoming data into this form.
     This method can be used both to push in brand new
    records, as well as to update existing records.
     See also {@link Cache.patch}
     @public
    @param data
    @return the primary record(s) that created or updated.
  */

  push(data) {
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      assertDestroyingStore(this, 'push');
    }
    const pushed = this._push(data, false);
    if (Array.isArray(pushed)) {
      return pushed.map(identifier => this._instanceCache.getRecord(identifier));
    }
    if (pushed === null) {
      return null;
    }
    return this._instanceCache.getRecord(pushed);
  }

  /**
    Push some data in the form of a json-api document into the store,
    without creating materialized records.
     @private
    @return identifiers for the primary records that had data loaded
  */
  _push(jsonApiDoc, asyncFlush) {
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      assertDestroyingStore(this, '_push');
    }
    if (asyncFlush) {
      this._enableAsyncFlush = true;
    }
    let ret;
    this._join(() => {
      ret = this.cache.put({
        content: jsonApiDoc
      });
    });
    this._enableAsyncFlush = null;
    return 'data' in ret ? ret.data : null;
  }

  /**
   * Returns the cache instance associated to this Store, instantiates the Cache
   * if necessary via `Store.createCache`
   *
   * @public
   */
  get cache() {
    let {
      cache
    } = this._instanceCache;
    if (!cache) {
      cache = this._instanceCache.cache = this.createCache(this._instanceCache._storeWrapper);
      if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
        cache = this._instanceCache.cache = new CacheManager(cache);
      }
    }
    return cache;
  }

  /** @private */
  destroy() {
    if (this.isDestroyed) {
      // @ember/test-helpers will call destroy multiple times
      return;
    }
    this.isDestroying = true;
    this._graph?.destroy();
    this._graph = undefined;
    this.notifications.destroy();
    this.recordArrayManager.destroy();
    this.cacheKeyManager.destroy();
    this._instanceCache.clear();
    this.isDestroyed = true;
  }

  /**
   * This method
   *
   * @private
   */
  static create(args) {
    return new this(args);
  }
}

/**
 * This type exists for internal use only for
 * where intimate contracts still exist either for
 * the Test Suite or for Legacy code.
 *
 * @private
 */

/**
 * Upgrade the type for Store to PrivateStore, which will also
 * upgrade any associated types to their private equivalents.
 *
 * @private
 */
function assertPrivateStore(store) {}
/**
 * Upgrade the type for Store to PrivateStore, which will also
 * upgrade any associated types to their private equivalents.
 *
 * @private
 */
function isPrivateStore(store) {
  return store;
}
if (macroCondition(getGlobalConfig().WarpDrive.deprecations.ENABLE_LEGACY_SCHEMA_SERVICE)) {
  Store.prototype.getSchemaDefinitionService = function () {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You must registerSchemaDefinitionService with the store to use custom model classes`);
      }
    })(this._schema) : {};
    deprecate(`Use \`store.schema\` instead of \`store.getSchemaDefinitionService()\``, false, {
      id: 'ember-data:schema-service-updates',
      until: '6.0',
      for: 'ember-data',
      since: {
        available: '4.13',
        enabled: '5.4'
      }
    });
    return this._schema;
  };
  Store.prototype.registerSchemaDefinitionService = function (schema) {
    deprecate(`Use \`store.createSchemaService\` instead of \`store.registerSchemaDefinitionService()\``, false, {
      id: 'ember-data:schema-service-updates',
      until: '6.0',
      for: 'ember-data',
      since: {
        available: '4.13',
        enabled: '5.4'
      }
    });
    this._schema = schema;
  };
  Store.prototype.registerSchema = function (schema) {
    deprecate(`Use \`store.createSchemaService\` instead of \`store.registerSchema()\``, false, {
      id: 'ember-data:schema-service-updates',
      until: '6.0',
      for: 'ember-data',
      since: {
        available: '4.13',
        enabled: '5.4'
      }
    });
    this._schema = schema;
  };
}
let assertDestroyingStore;
let assertDestroyedStoreOnly;
if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  assertDestroyingStore = function assertDestroyingStore(store, method) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Attempted to call store.${method}(), but the store instance has already been destroyed.`);
      }
    })(!(store.isDestroying || store.isDestroyed)) : {};
  };
  // eslint-disable-next-line @typescript-eslint/no-shadow
  assertDestroyedStoreOnly = function assertDestroyedStoreOnly(store, method) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Attempted to call store.${method}(), but the store instance has already been destroyed.`);
      }
    })(!store.isDestroyed) : {};
  };
}
function isMaybeIdentifier(maybeIdentifier) {
  return Boolean(maybeIdentifier !== null && typeof maybeIdentifier === 'object' && ('id' in maybeIdentifier && 'type' in maybeIdentifier && maybeIdentifier.id && maybeIdentifier.type || maybeIdentifier.lid));
}
function normalizeProperties(store, identifier, properties) {
  // assert here
  if (properties !== undefined) {
    if ('id' in properties) {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`expected id to be a string or null`);
        }
      })(properties.id !== undefined) : {};
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You passed '${typeof properties}' as properties for record creation instead of an object.`);
      }
    })(typeof properties === 'object' && properties !== null) : {};
    const {
      type
    } = identifier;

    // convert relationship Records to RecordDatas before passing to RecordData
    const defs = store.schema.fields({
      type
    });
    if (defs.size) {
      const keys = Object.keys(properties);
      for (let i = 0; i < keys.length; i++) {
        const prop = keys[i];
        const field = defs.get(prop);
        if (!field) continue;
        if (field.kind === 'hasMany') {
          if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
            assertRecordsPassedToHasMany(properties[prop]);
          }
          properties[prop] = extractIdentifiersFromRecords$1(properties[prop]);
        } else if (field.kind === 'belongsTo') {
          properties[prop] = extractIdentifierFromRecord$1(properties[prop]);
        }
      }
    }
  }
  return properties;
}
function assertRecordsPassedToHasMany(records) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`You must pass an array of records to set a hasMany relationship`);
    }
  })(Array.isArray(records)) : {};
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`All elements of a hasMany relationship must be instances of Model, you passed ${records.map(r => `${typeof r}`).join(', ')}`);
    }
  })(function () {
    return records.every(record => {
      try {
        recordIdentifierFor(record);
        return true;
      } catch {
        return false;
      }
    });
  }()) : {};
}
function extractIdentifiersFromRecords$1(records) {
  return records.map(record => extractIdentifierFromRecord$1(record));
}
function extractIdentifierFromRecord$1(recordOrPromiseRecord) {
  if (!recordOrPromiseRecord) {
    return null;
  }
  const extract = recordIdentifierFor;
  return extract(recordOrPromiseRecord);
}

/*
    When a find request is triggered on the store, the user can optionally pass in
    attributes and relationships to be preloaded. These are meant to behave as if they
    came back from the server, except the user obtained them out of band and is informing
    the store of their existence. The most common use case is for supporting client side
    nested URLs, such as `/posts/1/comments/2` so the user can do
    `store.findRecord('comment', 2, { preload: { post: 1 } })` without having to fetch the post.

    Preloaded data can be attributes and relationships passed in either as IDs or as actual
    models.
  */
function preloadData(store, identifier, preload) {
  const jsonPayload = {};
  //TODO(Igor) consider the polymorphic case
  const schemas = store.schema;
  const fields = schemas.fields(identifier);
  Object.keys(preload).forEach(key => {
    const preloadValue = preload[key];
    const field = fields.get(key);
    if (field && (field.kind === 'hasMany' || field.kind === 'belongsTo')) {
      if (!jsonPayload.relationships) {
        jsonPayload.relationships = {};
      }
      jsonPayload.relationships[key] = preloadRelationship(field, preloadValue);
    } else {
      if (!jsonPayload.attributes) {
        jsonPayload.attributes = {};
      }
      jsonPayload.attributes[key] = preloadValue;
    }
  });
  const cache = store.cache;
  const hasRecord = Boolean(store._instanceCache.peek(identifier));
  cache.upsert(identifier, jsonPayload, hasRecord);
}
function preloadRelationship(schema, preloadValue) {
  const relatedType = schema.type;
  if (schema.kind === 'hasMany') {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error('You need to pass in an array to set a hasMany property on a record');
      }
    })(Array.isArray(preloadValue)) : {};
    return {
      data: preloadValue.map(value => _convertPreloadRelationshipToJSON(value, relatedType))
    };
  }
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error('You should not pass in an array to set a belongsTo property on a record');
    }
  })(!Array.isArray(preloadValue)) : {};
  return {
    data: preloadValue ? _convertPreloadRelationshipToJSON(preloadValue, relatedType) : null
  };
}

/*
  findRecord('user', '1', { preload: { friends: ['1'] }});
  findRecord('user', '1', { preload: { friends: [record] }});
*/
function _convertPreloadRelationshipToJSON(value, type) {
  if (typeof value === 'string' || typeof value === 'number') {
    return {
      type,
      id: ensureStringId(value)
    };
  }
  // TODO if not a record instance assert it's an identifier
  // and allow identifiers to be used
  return recordIdentifierFor(value);
}

/**
 * Minimum subset of static schema methods and properties on the
 * "model" class.
 *
 * Only used when using the legacy schema-service implementation
 * for @warp-drive/legacy/model or when wrapping schema for legacy
 * Adapters/Serializers.
 *
 */

function _resourceIsFullDeleted(identifier, cache) {
  return cache.isDeletionCommitted(identifier) || cache.isNew(identifier) && cache.isDeleted(identifier);
}
function resourceIsFullyDeleted(instanceCache, identifier) {
  const cache = instanceCache.cache;
  return !cache || _resourceIsFullDeleted(identifier, cache);
}

/**
   A `RecordReference` is a low-level API that allows users and
   addon authors to perform meta-operations on a record.

   @hideconstructor
   @public
*/
class RecordReference {
  /** @internal */

  // unsubscribe token given to us by the notification manager
  /** @internal */
  ___token;
  /** @internal */
  ___identifier;
  /** @internal */

  constructor(store, identifier) {
    this.store = store;
    this.___identifier = identifier;
    this.___token = store.notifications.subscribe(identifier, (_, bucket, notifiedKey) => {
      if (bucket === 'identity' || bucket === 'attributes' && notifiedKey === 'id') {
        this._ref++;
      }
    });
  }

  /** @internal */
  destroy() {
    this.store.notifications.unsubscribe(this.___token);
  }
  get type() {
    return this.identifier().type;
  }

  /**
     The `id` of the record that this reference refers to.
      Together, the `type` and `id` properties form a composite key for
     the identity map.
      Example
      ```javascript
     let userRef = store.getReference('user', 1);
      userRef.id(); // '1'
     ```
     @public
    @return The id of the record.
  */
  id() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this._ref; // consume the tracked prop
    return this.___identifier.id;
  }

  /**
     The `identifier` of the record that this reference refers to.
      Together, the `type` and `id` properties form a composite key for
     the identity map.
      Example
      ```javascript
     let userRef = store.getReference('user', 1);
      userRef.identifier(); // '1'
     ```
     @public
    @return The identifier of the record.
  */
  identifier() {
    return this.___identifier;
  }

  /**
     How the reference will be looked up when it is loaded. Currently
     this always returns `identity` to signify that a record will be
     loaded by its `type` and `id`.
      Example
      ```javascript
     const userRef = store.getReference('user', 1);
      userRef.remoteType(); // 'identity'
     ```
      @public
  */
  remoteType() {
    return 'identity';
  }

  /**
    This API allows you to provide a reference with new data. The
    simplest usage of this API is similar to `store.push`: you provide a
    normalized hash of data and the object represented by the reference
    will update.
     If you pass a promise to `push`, WarpDrive will not ask the adapter
    for the data if another attempt to fetch it is made in the
    interim. When the promise resolves, the underlying object is updated
    with the new data, and the promise returned by *this function* is resolved
    with that object.
     For example, `recordReference.push(promise)` will be resolved with a
    record.
      Example
      ```javascript
     let userRef = store.getReference('user', 1);
      // provide data for reference
     userRef.push({
       data: {
         id: "1",
         type: "user",
         attributes: {
           username: "@user"
         }
       }
     }).then(function(user) {
       userRef.value() === user;
     });
     ```
     @public
    @param objectOrPromise a JSON:API ResourceDocument or a promise resolving to one
    @return a promise for the value (record or relationship)
  */
  push(objectOrPromise) {
    // TODO @deprecate pushing unresolved payloads
    return Promise.resolve(objectOrPromise).then(data => {
      return this.store.push(data);
    });
  }

  /**
    If the entity referred to by the reference is already loaded, it is
    present as `reference.value`. Otherwise the value returned by this function
    is `null`.
      Example
      ```javascript
     let userRef = store.getReference('user', 1);
      userRef.value(); // user
     ```
     @public
    @return the record for this RecordReference
  */
  value() {
    return this.store.peekRecord(this.___identifier);
  }

  /**
     Triggers a fetch for the backing entity based on its `remoteType`
     (see `remoteType` definitions per reference type).
      Example
      ```javascript
     let userRef = store.getReference('user', 1);
      // load user (via store.find)
     userRef.load().then(...)
     ```
     @public
    @return the record for this RecordReference
  */
  load() {
    const id = this.id();
    if (id !== null) {
      return this.store.findRecord(this.type, id);
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      {
        throw new Error(`Unable to fetch record of type ${this.type} without an id`);
      }
    })() : {};
  }

  /**
     Reloads the record if it is already loaded. If the record is not
     loaded it will load the record via `store.findRecord`
      Example
      ```javascript
     let userRef = store.getReference('user', 1);
      // or trigger a reload
     userRef.reload().then(...)
     ```
     @public
    @return the record for this RecordReference
  */
  reload() {
    const id = this.id();
    if (id !== null) {
      return this.store.findRecord(this.type, id, {
        reload: true
      });
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      {
        throw new Error(`Unable to fetch record of type ${this.type} without an id`);
      }
    })() : {};
  }
}
defineSignal(RecordReference.prototype, '_ref');

// if modelFor turns out to be a bottleneck we should replace with a Map
// and clear it during store teardown.
const AvailableShims = getOrSetGlobal('AvailableShims', new WeakMap());
function getShimClass(store, modelName) {
  let shims = AvailableShims.get(store);
  if (!shims) {
    shims = Object.create(null);
    AvailableShims.set(store, shims);
  }
  let shim = shims[modelName];
  if (shim === undefined) {
    shim = shims[modelName] = new ShimModelClass(store, modelName);
  }
  return shim;
}

// Mimics the static apis of @warp-drive/legacy/model
class ShimModelClass {
  constructor(store, modelName) {
    this.__store = store;
    this.modelName = modelName;
  }
  get fields() {
    const fields = new Map();
    const fieldSchemas = this.__store.schema.fields({
      type: this.modelName
    });
    fieldSchemas.forEach((schema, key) => {
      if (schema.kind === 'attribute' || schema.kind === 'belongsTo' || schema.kind === 'hasMany') {
        fields.set(key, schema.kind);
      }
    });
    return fields;
  }
  get attributes() {
    const attrs = new Map();
    const fields = this.__store.schema.fields({
      type: this.modelName
    });
    fields.forEach((schema, key) => {
      if (schema.kind === 'attribute') {
        attrs.set(key, schema);
      }
    });
    return attrs;
  }
  get relationshipsByName() {
    const rels = new Map();
    const fields = this.__store.schema.fields({
      type: this.modelName
    });
    fields.forEach((schema, key) => {
      if (schema.kind === 'belongsTo' || schema.kind === 'hasMany') {
        rels.set(key, schema);
      }
    });
    return rels;
  }
  eachAttribute(callback, binding) {
    this.__store.schema.fields({
      type: this.modelName
    }).forEach((schema, key) => {
      if (schema.kind === 'attribute') {
        callback.call(binding, key, schema);
      }
    });
  }
  eachRelationship(callback, binding) {
    this.__store.schema.fields({
      type: this.modelName
    }).forEach((schema, key) => {
      if (schema.kind === 'belongsTo' || schema.kind === 'hasMany') {
        callback.call(binding, key, schema);
      }
    });
  }
  eachTransformedAttribute(callback, binding) {
    this.__store.schema.fields({
      type: this.modelName
    }).forEach((schema, key) => {
      if (schema.kind === 'attribute') {
        const type = schema.type;
        if (type) callback.call(binding, key, type);
      }
    });
  }
}
if (macroCondition(getGlobalConfig().WarpDrive.deprecations.ENABLE_LEGACY_REQUEST_METHODS)) {
  Store.prototype.findRecord = function (resource, id, options) {
    deprecate(`store.findRecord is deprecated. Use store.request instead.`, false, {
      id: 'warp-drive:deprecate-legacy-request-methods',
      until: '6.0',
      for: '@warp-drive/core',
      url: 'https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS',
      since: {
        enabled: '5.7',
        available: '5.7'
      }
    });
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Attempted to call store.findRecord(), but the store instance has already been destroyed.`);
      }
    })(!(this.isDestroying || this.isDestroyed)) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You need to pass a modelName or resource identifier as the first argument to the store's findRecord method`);
      }
    })(resource) : {};
    if (isMaybeIdentifier(resource)) {
      options = id;
    } else {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`Passing classes to store methods has been removed. Please pass a dasherized string instead of ${resource}`);
        }
      })(typeof resource === 'string') : {};
      const type = normalizeModelName(resource);
      const normalizedId = ensureStringId(id);
      resource = constructResource(type, normalizedId);
    }
    const identifier = this.cacheKeyManager.getOrCreateRecordIdentifier(resource);
    options = options || {};
    if (options.preload) {
      // force reload if we preload to ensure we don't resolve the promise
      // until we are complete, else we will end up background-reloading
      // even for initial load.
      if (!this._instanceCache.recordIsLoaded(identifier)) {
        options.reload = true;
      }
      this._join(() => {
        preloadData(this, identifier, options.preload);
      });
    }
    const promise = this.request({
      op: 'findRecord',
      data: {
        record: identifier,
        options
      },
      cacheOptions: {
        [SkipCache]: true
      }
    });
    return promise.then(document => {
      return document.content;
    });
  };
  Store.prototype.findAll = function (type, options = {}) {
    deprecate(`store.findAll is deprecated. Use store.request instead.`, false, {
      id: 'warp-drive:deprecate-legacy-request-methods',
      until: '6.0',
      for: '@warp-drive/core',
      url: 'https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS',
      since: {
        enabled: '5.7',
        available: '5.7'
      }
    });
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Attempted to call store.findAll(), but the store instance has already been destroyed.`);
      }
    })(!(this.isDestroying || this.isDestroyed)) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You need to pass a model name to the store's findAll method`);
      }
    })(type) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Passing classes to store methods has been removed. Please pass a dasherized string instead of ${type}`);
      }
    })(typeof type === 'string') : {};
    const promise = this.request({
      op: 'findAll',
      data: {
        type: normalizeModelName(type),
        options: options || {}
      },
      cacheOptions: {
        [SkipCache]: true
      }
    });
    return promise.then(document => document.content);
  };
  Store.prototype.query = function (type, query, options = {}) {
    deprecate(`store.query is deprecated. Use store.request instead.`, false, {
      id: 'warp-drive:deprecate-legacy-request-methods',
      until: '6.0',
      for: '@warp-drive/core',
      url: 'https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS',
      since: {
        enabled: '5.7',
        available: '5.7'
      }
    });
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Attempted to call store.query(), but the store instance has already been destroyed.`);
      }
    })(!(this.isDestroying || this.isDestroyed)) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You need to pass a model name to the store's query method`);
      }
    })(type) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You need to pass a query hash to the store's query method`);
      }
    })(query) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Passing classes to store methods has been removed. Please pass a dasherized string instead of ${type}`);
      }
    })(typeof type === 'string') : {};
    const promise = this.request({
      op: 'query',
      data: {
        type: normalizeModelName(type),
        query,
        options: options
      },
      cacheOptions: {
        [SkipCache]: true
      }
    });
    return promise.then(document => document.content);
  };
  Store.prototype.queryRecord = function (type, query, options) {
    deprecate(`store.queryRecord is deprecated. Use store.request instead.`, false, {
      id: 'warp-drive:deprecate-legacy-request-methods',
      until: '6.0',
      for: '@warp-drive/core',
      url: 'https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS',
      since: {
        enabled: '5.7',
        available: '5.7'
      }
    });
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Attempted to call store.queryRecord(), but the store instance has already been destroyed.`);
      }
    })(!(this.isDestroying || this.isDestroyed)) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You need to pass a model name to the store's queryRecord method`);
      }
    })(type) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You need to pass a query hash to the store's queryRecord method`);
      }
    })(query) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Passing classes to store methods has been removed. Please pass a dasherized string instead of ${type}`);
      }
    })(typeof type === 'string') : {};
    const promise = this.request({
      op: 'queryRecord',
      data: {
        type: normalizeModelName(type),
        query,
        options: options || {}
      },
      cacheOptions: {
        [SkipCache]: true
      }
    });
    return promise.then(document => document.content);
  };
  Store.prototype.getReference = function (resource, id) {
    deprecate(`store.getReference is deprecated. There is no direct replacement. For working with the cache and relationships, use the cache with the appropriate identifiers. To load, use store.request.`, false, {
      id: 'warp-drive:deprecate-legacy-request-methods',
      until: '6.0',
      for: '@warp-drive/core',
      url: 'https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS',
      since: {
        enabled: '5.7',
        available: '5.7'
      }
    });
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Attempted to call store.getReference(), but the store instance has already been destroyed.`);
      }
    })(!(this.isDestroying || this.isDestroyed)) : {};
    let resourceIdentifier;
    if (arguments.length === 1 && isMaybeIdentifier(resource)) {
      resourceIdentifier = resource;
    } else {
      const type = normalizeModelName(resource);
      const normalizedId = ensureStringId(id);
      resourceIdentifier = constructResource(type, normalizedId);
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error('getReference expected to receive either a resource identifier or type and id as arguments');
      }
    })(isMaybeIdentifier(resourceIdentifier)) : {};
    const identifier = this.cacheKeyManager.getOrCreateRecordIdentifier(resourceIdentifier);
    const cache = upgradeInstanceCaches(this._instanceCache.__instances).reference;
    let reference = cache.get(identifier);
    if (!reference) {
      reference = new RecordReference(this, identifier);
      cache.set(identifier, reference);
    }
    return reference;
  };
  Store.prototype.modelFor = function (type) {
    deprecate(`store.modelFor is deprecated, please use store.schema.fields({ type: '${type}' }) to access schema information instead.`, false, {
      id: 'warp-drive:deprecate-legacy-request-methods',
      until: '6.0',
      for: '@warp-drive/core',
      url: 'https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS',
      since: {
        enabled: '5.7',
        available: '5.7'
      }
    });
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Attempted to call store.modelFor(), but the store instance has already been destroyed.`);
      }
    })(!this.isDestroyed) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You need to pass <type> to the store's modelFor method`);
      }
    })(typeof type === 'string' && type.length) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`No model was found for '${type}' and no schema handles the type`);
      }
    })(this.schema.hasResource({
      type
    })) : {};
    return getShimClass(this, type);
  };
  Store.prototype.saveRecord = function (record, options = {}) {
    deprecate(`store.saveRecord is deprecated, please use store.request to initiate a save request instead.`, false, {
      id: 'warp-drive:deprecate-legacy-request-methods',
      until: '6.0',
      for: '@warp-drive/core',
      url: 'https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS',
      since: {
        enabled: '5.7',
        available: '5.7'
      }
    });
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Attempted to call store.saveRecord(), but the store instance has already been destroyed.`);
      }
    })(!(this.isDestroying || this.isDestroyed)) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Unable to initiate save for a record in a disconnected state`);
      }
    })(storeFor(record, true)) : {};
    const identifier = recordIdentifierFor(record);
    const cache = this.cache;
    if (!identifier) {
      // this commonly means we're disconnected
      // but just in case we reject here to prevent bad things.
      return Promise.reject(new Error(`Record Is Disconnected`));
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Cannot initiate a save request for an unloaded record: ${identifier.lid}`);
      }
    })(this._instanceCache.recordIsLoaded(identifier)) : {};
    if (resourceIsFullyDeleted(this._instanceCache, identifier)) {
      return Promise.resolve(record);
    }
    if (!options) {
      options = {};
    }
    let operation = 'updateRecord';
    if (cache.isNew(identifier)) {
      operation = 'createRecord';
    } else if (cache.isDeleted(identifier)) {
      operation = 'deleteRecord';
    }
    const request = {
      op: operation,
      data: {
        options,
        record: identifier
      },
      records: [identifier],
      cacheOptions: {
        [SkipCache]: true
      }
    };
    return this.request(request).then(document => document.content);
  };
}
function upgradeInstanceCaches(cache) {
  const withReferences = cache;
  if (!withReferences.reference) {
    withReferences.reference = new WeakMap();
  }
  return withReferences;
}
const MUTATION_OPS$1 = new Set(['createRecord', 'updateRecord', 'deleteRecord']);
function calcShouldFetch(store, request, hasCachedValue, identifier) {
  const {
    cacheOptions
  } = request;
  return request.op && MUTATION_OPS$1.has(request.op) || cacheOptions?.reload || !hasCachedValue || (store.lifetimes && identifier ? store.lifetimes.isHardExpired(identifier, store) : false);
}
function calcShouldBackgroundFetch(store, request, willFetch, identifier) {
  const {
    cacheOptions
  } = request;
  return cacheOptions?.backgroundReload || (store.lifetimes && identifier ? store.lifetimes.isSoftExpired(identifier, store) : false);
}
function isMutation(request) {
  return Boolean(request.op && MUTATION_OPS$1.has(request.op));
}
function isCacheAffecting(document) {
  if (!isMutation(document.request)) {
    return true;
  }
  // a mutation combined with a 204 has no cache impact when no known records were involved
  // a createRecord with a 201 with an empty response and no known records should similarly
  // have no cache impact

  if (document.request.op === 'createRecord' && document.response?.status === 201) {
    return document.content ? Object.keys(document.content).length > 0 : false;
  }
  return document.response?.status !== 204;
}
function isAggregateError(error) {
  return error instanceof AggregateError || error.name === 'AggregateError' && Array.isArray(error.errors);
}
// TODO @runspired, consider if we should deep freeze errors (potentially only in debug) vs cloning them
function cloneError(error) {
  const isAggregate = isAggregateError(error);
  const cloned = isAggregate ? new AggregateError(structuredClone(error.errors), error.message) : new Error(error.message);
  cloned.stack = error.stack;
  cloned.error = error.error;

  // copy over enumerable properties
  Object.assign(cloned, error);
  return cloned;
}
function getPriority(identifier, deduped, priority) {
  if (identifier) {
    const existing = deduped.get(identifier);
    if (existing) {
      return existing.priority;
    }
  }
  return priority;
}

/**
 * A CacheHandler that adds support for using an WarpDrive Cache with a RequestManager.
 *
 * This handler will only run when a request has supplied a `store` instance. Requests
 * issued by the store via `store.request()` will automatically have the `store` instance
 * attached to the request.
 *
 * ```ts
 * requestManager.request({
 *   store: store,
 *   url: '/api/posts',
 *   method: 'GET'
 * });
 * ```
 *
 * When this handler elects to handle a request, it will return the raw `StructuredDocument`
 * unless the request has `[EnableHydration]` set to `true`. In this case, the handler will
 * return a `Document` instance that will automatically update the UI when the cache is updated
 * in the future and will hydrate any identifiers in the StructuredDocument into Record instances.
 *
 * When issuing a request via the store, [EnableHydration] is automatically set to `true`. This
 * means that if desired you can issue requests that utilize the cache without needing to also
 * utilize Record instances if desired.
 *
 * Said differently, you could elect to issue all requests via a RequestManager, without ever using
 * the store directly, by setting [EnableHydration] to `true` and providing a store instance. Not
 * necessarily the most useful thing, but the decoupled nature of the RequestManager and incremental-feature
 * approach of WarpDrive allows for this flexibility.
 *
 * ```ts
 * import { EnableHydration } from '@warp-drive/core/types/request';
 *
 * requestManager.request({
 *   store: store,
 *   url: '/api/posts',
 *   method: 'GET',
 *   [EnableHydration]: true
 * });
 *
 */
const CacheHandler = {
  request(context, next) {
    // if we have no cache or no cache-key skip cache handling
    if (!context.request.store || context.request.cacheOptions?.[SkipCache]) {
      return next(context.request);
    }
    const {
      store
    } = context.request;
    const identifier = store.cacheKeyManager.getOrCreateDocumentIdentifier(context.request);
    if (identifier) {
      context.setIdentifier(identifier);
    }

    // used to dedupe existing requests that match
    const DEDUPE = store.requestManager._deduped;
    const activeRequest = identifier && DEDUPE.get(identifier);
    const peeked = identifier ? store.cache.peekRequest(identifier) : null;

    // determine if we should skip cache
    if (calcShouldFetch(store, context.request, !!peeked, identifier)) {
      if (activeRequest) {
        activeRequest.priority = {
          blocking: true
        };
        if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_REQUESTS)) {
          if (getGlobalConfig().WarpDrive.debug.LOG_REQUESTS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_REQUESTS) {
            log('request', '', 'DEDUPED', identifier.lid, 'blocking', '');
          }
        }
        return activeRequest.promise;
      }
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_REQUESTS)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_REQUESTS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_REQUESTS) {
          log('request', '', 'ISSUED', identifier?.lid ?? context.request.url ?? context.request.op ?? '<unknown request>', 'blocking', '');
        }
      }
      let promise = fetchContentAndHydrate(next, context, identifier, {
        blocking: true
      });
      if (identifier) {
        promise = promise.finally(() => {
          DEDUPE.delete(identifier);
          store.notifications.notify(identifier, 'state', null);
        });
        DEDUPE.set(identifier, {
          priority: {
            blocking: true
          },
          promise
        });
        queueMicrotask(() => {
          store.notifications.notify(identifier, 'state', null);
        });
      }
      store.requestManager._pending.set(context.id, promise);
      return promise;
    }

    // if we have not skipped cache, determine if we should update behind the scenes
    if (calcShouldBackgroundFetch(store, context.request, false, identifier)) {
      let promise = activeRequest?.promise || fetchContentAndHydrate(next, context, identifier, {
        blocking: false
      });
      if (identifier && !activeRequest) {
        promise = promise.finally(() => {
          DEDUPE.delete(identifier);
          store.notifications.notify(identifier, 'state', null);
        });
        DEDUPE.set(identifier, {
          priority: {
            blocking: false
          },
          promise
        });
        queueMicrotask(() => {
          store.notifications.notify(identifier, 'state', null);
        });
      }
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_REQUESTS)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_REQUESTS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_REQUESTS) {
          if (activeRequest && identifier) {
            log('request', '', 'DEDUPED', identifier.lid, activeRequest.priority.blocking ? 'blocking' : 'non-blocking', '');
          } else {
            log('request', '', 'ISSUED', identifier?.lid ?? context.request.url ?? context.request.op ?? '<unknown request>', 'non-blocking', '');
          }
        }
      }
      store.requestManager._pending.set(context.id, promise);
    }
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_REQUESTS)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_REQUESTS || globalThis.getWarpDriveRuntimeConfig().debug.LOG_REQUESTS) {
        log('request', '', 'CACHE-HIT', identifier?.lid ?? context.request.url ?? context.request.op ?? '<unknown request>', 'cached', '');
      }
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected a peeked request to be present`);
      }
    })(peeked) : {};
    const shouldHydrate = context.request[EnableHydration] || false;
    context.setResponse(peeked.response);
    if ('error' in peeked) {
      const content = shouldHydrate ? maybeUpdateUiObjects(store, context.request, {
        shouldHydrate,
        identifier
      }, peeked.content) : peeked.content;
      const newError = cloneError(peeked);
      newError.content = content;
      throw newError;
    }
    const result = shouldHydrate ? maybeUpdateUiObjects(store, context.request, {
      shouldHydrate,
      identifier
    }, peeked.content) : peeked.content;
    return result;
  }
};
function maybeUpdateUiObjects(store, request, options, document) {
  const {
    identifier
  } = options;
  if (!document || !options.shouldHydrate) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`The CacheHandler expected response content but none was found`);
      }
    })(!options.shouldHydrate) : {};
    return document ?? null;
  }
  if (identifier) {
    return store._instanceCache.getDocument(identifier);
  }

  // if we don't have an identifier, we give the document
  // its own local cache
  return createReactiveDocument(store, null, {
    request,
    document
  });
}
function updateCacheForSuccess(store, request, options, document) {
  let response = null;
  if (isMutation(request)) {
    if (Array.isArray(request.records)) {
      response = store.cache.didCommit(request.records, document);
    } else if (request.data?.record) {
      // legacy fallback, the data option should no longer be used for this
      response = store.cache.didCommit(request.data.record, document);

      // a mutation combined with a 204 has no cache impact when no known records were involved
      // a createRecord with a 201 with an empty response and no known records should similarly
      // have no cache impact
    } else if (isCacheAffecting(document)) {
      response = store.cache.put(document);
    }
  } else {
    response = store.cache.put(document);
  }
  return maybeUpdateUiObjects(store, request, options, response);
}
function handleFetchSuccess(store, context, options, document) {
  const {
    request
  } = context;
  store.requestManager._pending.delete(context.id);
  store._enableAsyncFlush = true;
  let response;
  store._join(() => {
    response = updateCacheForSuccess(store, request, options, document);
  });
  store._enableAsyncFlush = null;
  if (store.lifetimes?.didRequest) {
    store.lifetimes.didRequest(context.request, document.response, options.identifier, store);
  }
  const finalPriority = getPriority(options.identifier, store.requestManager._deduped, options.priority);
  if (finalPriority.blocking) {
    return response;
  } else {
    store.notifications._flush();
  }
}
function updateCacheForError(store, context, options, error) {
  let response;
  if (isMutation(context.request)) {
    // TODO similar to didCommit we should spec this to be similar to cache.put for handling full response
    // currently we let the response remain undefiend.
    const errors = error && error.content && typeof error.content === 'object' && 'errors' in error.content && Array.isArray(error.content.errors) ? error.content.errors : undefined;
    if (Array.isArray(context.request.records)) {
      store.cache.commitWasRejected(context.request.records, errors);
    } else if (context.request.data?.record) {
      // legacy fallback, the data option should no longer be used for this
      store.cache.commitWasRejected(context.request.data.record, errors);
    } else {
      store.cache.put(error);
    }
  } else {
    response = store.cache.put(error);
    return maybeUpdateUiObjects(store, context.request, options, response);
  }
}
function handleFetchError(store, context, options, error) {
  store.requestManager._pending.delete(context.id);
  if (context.request.signal?.aborted) {
    throw error;
  }
  store._enableAsyncFlush = true;
  let response;
  store._join(() => {
    response = updateCacheForError(store, context, options, error);
  });
  store._enableAsyncFlush = null;
  if (options.identifier && store.lifetimes?.didRequest) {
    store.lifetimes.didRequest(context.request, error.response, options.identifier, store);
  }
  if (isMutation(context.request)) {
    throw error;
  }
  const finalPriority = getPriority(options.identifier, store.requestManager._deduped, options.priority);
  if (finalPriority.blocking) {
    const newError = cloneError(error);
    newError.content = response;
    throw newError;
  } else {
    store.notifications._flush();
  }
}
function fetchContentAndHydrate(next, context, identifier, priority) {
  const {
    store
  } = context.request;
  const shouldHydrate = context.request[EnableHydration] || false;
  const options = {
    shouldHydrate,
    identifier,
    priority
  };
  let isMut = false;
  if (isMutation(context.request)) {
    isMut = true;
    if (Array.isArray(context.request.records)) {
      context.request.records.forEach(record => {
        store.cache.willCommit(record, context);
      });
    } else if (context.request.data?.record) {
      // legacy fallback, the data option should no longer be used for this
      store.cache.willCommit(context.request.data.record, context);
    }
  }
  if (store.lifetimes?.willRequest) {
    store.lifetimes.willRequest(context.request, identifier, store);
  }
  const promise = next(context.request).then(document => {
    return handleFetchSuccess(store, context, options, document);
  }, error => {
    return handleFetchError(store, context, options, error);
  });
  if (!isMut) {
    return promise;
  }
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Expected a mutation`);
    }
  })(isMutation(context.request)) : {};

  // for mutations we need to enqueue the promise with the requestStateService
  // TODO should we enque a request per record in records?
  const record = context.request.data?.record || context.request.records?.[0];
  return store._requestCache._enqueue(promise, {
    data: [{
      op: 'saveRecord',
      recordIdentifier: record,
      options: undefined
    }]
  });
}
function isNonEmptyString(str) {
  return Boolean(str && typeof str === 'string');
}
function constructResource(type, id, lid) {
  if (typeof type === 'object' && type !== null) {
    const resource = type;
    if (isResourceKey(resource)) {
      return resource;
    }
    if ('id' in resource) {
      resource.id = coerceId(resource.id);
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error('Expected either id or lid to be a valid string');
      }
    })('id' in resource && isNonEmptyString(resource.id) || isNonEmptyString(resource.lid)) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error('if id is present, the type must be a string');
      }
    })(!('id' in resource) || typeof resource.type === 'string') : {};
    return resource;
  } else {
    const trueId = coerceId(id);
    if (!isNonEmptyString(trueId)) {
      if (isNonEmptyString(lid)) {
        return {
          lid
        };
      }
      throw new Error('Expected either id or lid to be a valid string');
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error('type must be a string');
      }
    })(typeof type === 'string') : {};
    if (isNonEmptyString(lid)) {
      return {
        type,
        id: trueId,
        lid
      };
    }
    return {
      type,
      id: trueId
    };
  }
}

/**
 * The options for {@link createLegacyManyArray}
 *
 * @private
 */
/**
 * Creates a {@link LegacyManyArray}
 *
 * @private
 */
function createLegacyManyArray(options) {
  const extensions = options.store.schema.CAUTION_MEGA_DANGER_ZONE_arrayExtensions ? options.store.schema.CAUTION_MEGA_DANGER_ZONE_arrayExtensions(options.field) : null;
  return createReactiveResourceArray({
    store: options.store,
    manager: options.manager,
    editable: options.editable,
    source: options.source,
    data: {
      links: options.links,
      meta: options.meta
    },
    features: {
      modelName: options.type,
      save,
      DEPRECATED_CLASS_NAME: 'ManyArray',
      isLoaded: options.isLoaded,
      isAsync: options.isAsync,
      isPolymorphic: options.isPolymorphic,
      identifier: options.identifier,
      key: options.field.name,
      reload,
      createRecord,
      notify
    },
    extensions,
    options: null,
    destroy: destroyLegacyManyArray,
    mutate: _MUTATE
  });
}
function _MUTATE(target, receiver, prop, args, _SIGNAL) {
  const collection = receiver;
  switch (prop) {
    case 'length 0':
      {
        Reflect.set(target, 'length', 0);
        mutateReplaceRelatedRecords(collection, [], _SIGNAL);
        return true;
      }
    case 'replace cell':
      {
        const [index, prior, value] = args;
        target[index] = value;
        mutateReplaceRelatedRecord(collection, {
          value,
          prior,
          index
        }, _SIGNAL);
        return true;
      }
    case 'push':
      {
        const newValues = extractIdentifiersFromRecords(args);
        assertNoDuplicates(collection, target, currentState => currentState.push(...newValues), `Cannot push duplicates to a hasMany's state.`);
        if (macroCondition(getGlobalConfig().WarpDrive.deprecations.DEPRECATE_MANY_ARRAY_DUPLICATES)) {
          // dedupe
          const seen = new Set(target);
          const unique = new Set();
          args.forEach(item => {
            const identifier = recordIdentifierFor(item);
            if (!seen.has(identifier)) {
              seen.add(identifier);
              unique.add(item);
            }
          });
          const newArgs = Array.from(unique);
          const result = Reflect.apply(target[prop], receiver, newArgs);
          if (newArgs.length) {
            mutateAddToRelatedRecords(collection, {
              value: extractIdentifiersFromRecords(newArgs)
            }, _SIGNAL);
          }
          return result;
        }

        // else, no dedupe, error on duplicates
        const result = Reflect.apply(target[prop], receiver, args);
        if (newValues.length) {
          mutateAddToRelatedRecords(collection, {
            value: newValues
          }, _SIGNAL);
        }
        return result;
      }
    case 'pop':
      {
        const result = Reflect.apply(target[prop], receiver, args);
        if (result) {
          mutateRemoveFromRelatedRecords(collection, {
            value: recordIdentifierFor(result)
          }, _SIGNAL);
        }
        return result;
      }
    case 'unshift':
      {
        const newValues = extractIdentifiersFromRecords(args);
        assertNoDuplicates(collection, target, currentState => currentState.unshift(...newValues), `Cannot unshift duplicates to a hasMany's state.`);
        if (macroCondition(getGlobalConfig().WarpDrive.deprecations.DEPRECATE_MANY_ARRAY_DUPLICATES)) {
          // dedupe
          const seen = new Set(target);
          const unique = new Set();
          args.forEach(item => {
            const identifier = recordIdentifierFor(item);
            if (!seen.has(identifier)) {
              seen.add(identifier);
              unique.add(item);
            }
          });
          const newArgs = Array.from(unique);
          const result = Reflect.apply(target[prop], receiver, newArgs);
          if (newArgs.length) {
            mutateAddToRelatedRecords(collection, {
              value: extractIdentifiersFromRecords(newArgs),
              index: 0
            }, _SIGNAL);
          }
          return result;
        }

        // else, no dedupe, error on duplicates
        const result = Reflect.apply(target[prop], receiver, args);
        if (newValues.length) {
          mutateAddToRelatedRecords(collection, {
            value: newValues,
            index: 0
          }, _SIGNAL);
        }
        return result;
      }
    case 'shift':
      {
        const result = Reflect.apply(target[prop], receiver, args);
        if (result) {
          mutateRemoveFromRelatedRecords(collection, {
            value: recordIdentifierFor(result),
            index: 0
          }, _SIGNAL);
        }
        return result;
      }
    case 'sort':
      {
        const result = Reflect.apply(target[prop], receiver, args);
        mutateSortRelatedRecords(collection, result.map(recordIdentifierFor), _SIGNAL);
        return result;
      }
    case 'splice':
      {
        const [start, _deleteCount, ...adds] = args;

        // Don't know if I like this approach, is there not a way where we can just use splice, see what it deleted and go from there?
        let deleteCount;
        if (args.length === 1) {
          // Omitting deleteCount: remove ALL elements (a.k.a. Infinity)
          deleteCount = Infinity;
        } else {
          // deleteCount is undefined, not a valid number, a negative number...
          if (typeof _deleteCount !== 'number' || _deleteCount < 0) {
            // do not remove any elements
            deleteCount = 0;
          } else {
            deleteCount = _deleteCount;
          }
        }

        // sanitize deleteCount to not exceed length / amount of items from index to end
        deleteCount = Math.min(collection[Context].source.length - start, deleteCount);

        // detect a full replace
        if (start === 0 && deleteCount === collection[Context].source.length) {
          const newValues = extractIdentifiersFromRecords(adds);
          assertNoDuplicates(collection, target, currentState => currentState.splice(start, deleteCount, ...newValues), `Cannot replace a hasMany's state with a new state that contains duplicates.`);
          if (macroCondition(getGlobalConfig().WarpDrive.deprecations.DEPRECATE_MANY_ARRAY_DUPLICATES)) {
            // dedupe
            const current = new Set(adds);
            const unique = Array.from(current);
            const newArgs = [start, deleteCount].concat(unique);
            const result = Reflect.apply(target[prop], receiver, newArgs);
            mutateReplaceRelatedRecords(collection, extractIdentifiersFromRecords(unique), _SIGNAL);
            return result;
          }

          // else, no dedupe, error on duplicates
          const result = Reflect.apply(target[prop], receiver, args);
          mutateReplaceRelatedRecords(collection, newValues, _SIGNAL);
          return result;
        }
        const newValues = extractIdentifiersFromRecords(adds);
        assertNoDuplicates(collection, target, currentState => currentState.splice(start, deleteCount, ...newValues), `Cannot splice a hasMany's state with a new state that contains duplicates.`);
        if (macroCondition(getGlobalConfig().WarpDrive.deprecations.DEPRECATE_MANY_ARRAY_DUPLICATES)) {
          // dedupe
          const currentState = target.slice();
          currentState.splice(start, deleteCount);
          const seen = new Set(currentState);
          const unique = [];
          adds.forEach(item => {
            const identifier = recordIdentifierFor(item);
            if (!seen.has(identifier)) {
              seen.add(identifier);
              unique.push(item);
            }
          });
          const newArgs = [start, deleteCount, ...unique];
          const result = Reflect.apply(target[prop], receiver, newArgs);
          if (deleteCount > 0) {
            mutateRemoveFromRelatedRecords(collection, {
              value: result.map(recordIdentifierFor),
              index: start
            }, _SIGNAL);
          }
          if (unique.length > 0) {
            mutateAddToRelatedRecords(collection, {
              value: extractIdentifiersFromRecords(unique),
              index: start
            }, _SIGNAL);
          }
          return result;
        }

        // else, no dedupe, error on duplicates
        const result = Reflect.apply(target[prop], receiver, args);
        if (deleteCount > 0) {
          mutateRemoveFromRelatedRecords(collection, {
            value: result.map(recordIdentifierFor),
            index: start
          }, _SIGNAL);
        }
        if (newValues.length > 0) {
          mutateAddToRelatedRecords(collection, {
            value: newValues,
            index: start
          }, _SIGNAL);
        }
        return result;
      }
    default:
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        {
          throw new Error(`unable to convert ${prop} into a transaction that updates the cache state for this record array`);
        }
      })() : {};
  }
}
function notify() {
  notifyInternalSignal(this[Context].signal);
}
function reload(options) {
  const {
    manager
  } = this[Context];
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Expected the manager for ManyArray to implement reloadHasMany`);
    }
  })(typeof manager.reloadHasMany === 'function') : {};
  // TODO this is odd, we don't ask the store for anything else like this?
  return manager.reloadHasMany(this.key, options);
}
function createRecord(hash) {
  const {
    store
  } = this[Context];
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Expected modelName to be set`);
    }
  })(this.modelName) : {};
  const record = store.createRecord(this.modelName, hash);
  this.push(record);
  return record;
}
function destroyLegacyManyArray() {
  destroy.call(this, false);
}
function assertRecordPassedToHasMany(record) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`All elements of a hasMany relationship must be instances of Model, you passed ${typeof record}`);
    }
  })(function () {
    try {
      recordIdentifierFor(record);
      return true;
    } catch {
      return false;
    }
  }()) : {};
}
function extractIdentifiersFromRecords(records) {
  return records.map(extractIdentifierFromRecord);
}
function extractIdentifierFromRecord(recordOrPromiseRecord) {
  assertRecordPassedToHasMany(recordOrPromiseRecord);
  return recordIdentifierFor(recordOrPromiseRecord);
}
function assertNoDuplicates(collection, target, callback, reason) {
  const identifier = collection[Context].features.identifier;
  const state = target.slice();
  callback(state);
  if (state.length !== new Set(state).size) {
    const duplicates = state.filter((currentValue, currentIndex) => state.indexOf(currentValue) !== currentIndex);
    if (macroCondition(getGlobalConfig().WarpDrive.deprecations.DEPRECATE_MANY_ARRAY_DUPLICATES)) {
      deprecate(`${reason} This behavior is deprecated. Found duplicates for the following records within the new state provided to \`<${identifier.type}:${identifier.id || identifier.lid}>.${collection.key}\`\n\t- ${Array.from(new Set(duplicates)).map(r => isResourceKey(r) ? r.lid : recordIdentifierFor(r).lid).sort((a, b) => a.localeCompare(b)).join('\n\t- ')}`, false, {
        id: 'ember-data:deprecate-many-array-duplicates',
        for: 'ember-data',
        until: '6.0',
        since: {
          enabled: '5.3',
          available: '4.13'
        }
      });
    } else {
      throw new Error(`${reason} Found duplicates for the following records within the new state provided to \`<${identifier.type}:${identifier.id || identifier.lid}>.${collection.key}\`\n\t- ${Array.from(new Set(duplicates)).map(r => isResourceKey(r) ? r.lid : recordIdentifierFor(r).lid).sort((a, b) => a.localeCompare(b)).join('\n\t- ')}`);
    }
  }
}
function mutateAddToRelatedRecords(collection, operationInfo, _SIGNAL) {
  const identifier = collection[Context].features.identifier;

  // FIXME field needs to use sourceKey
  mutate(collection, {
    op: 'add',
    record: identifier,
    field: collection.key,
    ...operationInfo
  }, _SIGNAL);
}
function mutateRemoveFromRelatedRecords(collection, operationInfo, _SIGNAL) {
  const identifier = collection[Context].features.identifier;

  // FIXME field needs to use sourceKey
  mutate(collection, {
    op: 'remove',
    record: identifier,
    field: collection.key,
    ...operationInfo
  }, _SIGNAL);
}
function mutateReplaceRelatedRecord(collection, operationInfo, _SIGNAL) {
  const identifier = collection[Context].features.identifier;

  // FIXME field needs to use sourceKey
  mutate(collection, {
    op: 'replaceRelatedRecord',
    record: identifier,
    field: collection.key,
    ...operationInfo
  }, _SIGNAL);
}
function mutateReplaceRelatedRecords(collection, value, _SIGNAL) {
  const identifier = collection[Context].features.identifier;

  // FIXME field needs to use sourceKey
  mutate(collection, {
    op: 'replaceRelatedRecords',
    record: identifier,
    field: collection.key,
    value
  }, _SIGNAL);
}
function mutateSortRelatedRecords(collection, value, _SIGNAL) {
  const identifier = collection[Context].features.identifier;

  // FIXME field needs to use sourceKey
  mutate(collection, {
    op: 'sortRelatedRecords',
    record: identifier,
    field: collection.key,
    value
  }, _SIGNAL);
}
function mutate(collection, mutation, _SIGNAL) {
  const {
    manager
  } = collection[Context];
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Expected the manager for ManyArray to implement mutate`);
    }
  })(typeof manager.mutate === 'function') : {};
  manager.mutate(mutation);
  notifyInternalSignal(_SIGNAL);
}
function getAliasField(context) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    {
      throw new Error(`Alias field access is not implemented`);
    }
  })() : {};
}
function setAliasField(context) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    {
      throw new Error(`Alias field setting is not implemented`);
    }
  })() : {};
  return false;
}
const ARRAY_GETTER_METHODS = new Set([Symbol.iterator, 'concat', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'flat', 'flatMap', 'forEach', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'map', 'reduce', 'reduceRight', 'slice', 'some', 'values']);
// const ARRAY_SETTER_METHODS = new Set<KeyType>(['push', 'pop', 'unshift', 'shift', 'splice', 'sort']);
const SYNC_PROPS = new Set(['[]', 'length']);
function isArrayGetter(prop) {
  return ARRAY_GETTER_METHODS.has(prop);
}
const ARRAY_SETTER_METHODS = new Set(['push', 'pop', 'unshift', 'shift', 'splice', 'sort']);
function isArraySetter(prop) {
  return ARRAY_SETTER_METHODS.has(prop);
}

// function isSelfProp<T extends object>(self: T, prop: KeyType): prop is keyof T {
//   return prop in self;
// }

function convertToInt(prop) {
  if (typeof prop === 'symbol') return null;
  const num = Number(prop);
  if (isNaN(num)) return null;
  return num % 1 === 0 ? num : null;
}
function safeForEach(instance, arr, store, callback, target) {
  if (target === undefined) {
    target = null;
  }
  // clone to prevent mutation
  arr = arr.slice();
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error('`forEach` expects a function as first argument.');
    }
  })(typeof callback === 'function') : {};

  // because we retrieveLatest above we need not worry if array is mutated during iteration
  // by unloadRecord/rollbackAttributes
  // push/add/removeObject may still be problematic
  // but this is a more traditionally expected forEach bug.
  const length = arr.length; // we need to access length to ensure we are consumed

  for (let index = 0; index < length; index++) {
    callback.call(target, arr[index], index, instance);
  }
  return instance;
}
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class ManagedArray {
  constructor(context, owner, data) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    this[SOURCE] = data?.slice();
    const IS_EDITABLE = context.editable ?? false;
    this[Context] = context;
    const schema = context.store.schema;
    const cache = context.store.cache;
    const {
      field
    } = context;
    const signals = withSignalStore(this);
    let _SIGNAL = null;
    const boundFns = new Map();
    this.identifier = context.resourceKey;
    this.path = context.path;
    this.owner = owner;
    let transaction = false;
    const KeyMode = field.options?.key ?? '@identity';
    // listener.
    const RefStorage = KeyMode === '@identity' ? WeakMap :
    // CAUTION CAUTION CAUTION
    // this is a pile of lies
    // the Map is Map<string, WeakRef<ReactiveResource>>
    // but TS does not understand how to juggle modes like this
    // internal to a method like ours without us duplicating the code
    // into two separate methods.
    Map;
    const ManagedRecordRefs = field.kind === 'schema-array' ? new RefStorage() : null;
    const extensions = context.legacy ? schema.CAUTION_MEGA_DANGER_ZONE_arrayExtensions(field) : null;
    const proxy = new Proxy(this[SOURCE], {
      get(target, prop, receiver) {
        if (prop === ARRAY_SIGNAL) {
          return _SIGNAL;
        }
        if (prop === 'identifier') {
          return self.identifier;
        }
        if (prop === 'owner') {
          return self.owner;
        }
        if (prop === Context) {
          return self[Context];
        }
        const index = convertToInt(prop);
        if (_SIGNAL.isStale && (index !== null || SYNC_PROPS.has(prop) || isArrayGetter(prop))) {
          _SIGNAL.isStale = false;
          const newData = cache.getAttr(context.resourceKey, context.path);
          if (newData && newData !== self[SOURCE]) {
            self[SOURCE].length = 0;
            self[SOURCE].push(...newData);
          }
        }
        if (prop === 'length') {
          return consumeInternalSignal(_SIGNAL), target.length;
        }
        if (prop === '[]') return consumeInternalSignal(_SIGNAL), receiver;
        if (index !== null) {
          if (!transaction) {
            consumeInternalSignal(_SIGNAL);
          }
          const rawValue = target[index];
          if (field.kind === 'array') {
            if (field.type) {
              const transform = schema.transformation(field);
              return transform.hydrate(rawValue, field.options ?? null, self.owner);
            }
            return rawValue;
          }

          /**
           * When the array is polymorphic, we need to determine the real type
           * in order to apply the correct identity as schema-object identity
           * is only required to be unique by type
           */
          let objectType;
          if (field.options?.polymorphic) {
            const typePath = field.options.type ?? 'type';
            // if we are polymorphic, then context.field.options.type will
            // either specify a path on the rawValue to use as the type, defaulting to "type" or
            // the special string "@hash" which tells us to treat field.type as a hashFn name with which
            // to calc the type.
            if (typePath === '@hash') {
              macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
                if (!test) {
                  throw new Error(`Expected the field to define a hashFn as its type`);
                }
              })(field.type) : {};
              const hashFn = schema.hashFn({
                type: field.type
              });
              // TODO consider if there are better options and name args we could provide.
              objectType = hashFn(rawValue, null, null);
            } else {
              objectType = rawValue[typePath];
              macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
                if (!test) {
                  throw new Error(`Expected the type path for the field to be a value on the raw object`);
                }
              })(typePath && objectType && typeof objectType === 'string') : {};
            }
          } else {
            macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
              if (!test) {
                throw new Error(`A non-polymorphic SchemaArrayField must provide a SchemaObject type in its definition`);
              }
            })(field.type) : {};
            objectType = field.type;
          }

          /**
           * When KeyMode=@hash the ReactiveResource is keyed into
           * ManagedRecordRefs by the return value of @hash on the rawValue.
           *
           * This means that we could find a way to only recompute the identity
           * when ARRAY_SIGNAL is dirty if hash performance becomes a bottleneck.
           */
          let schemaObjectKeyValue;
          if (KeyMode === '@hash') {
            const hashField = schema.resource({
              type: objectType
            }).identity;
            const hashFn = schema.hashFn(hashField);
            schemaObjectKeyValue = hashFn(rawValue, hashField.options ?? null, hashField.name);
          } else {
            // if mode is not @identity or @index, then access the key path.
            // we should assert that `mode` is a string
            // it should read directly from the cache value for that field (e.g. no derivation, no transformation)
            // and, we likely should lookup the associated field and throw an error IF
            // the given field does not exist OR
            // the field is anything other than a GenericField or LegacyAttributeField.
            if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
              const isPathKeyMode = KeyMode !== '@identity' && KeyMode !== '@index';
              if (isPathKeyMode) {
                macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
                  if (!test) {
                    throw new Error('mode must be a string');
                  }
                })(typeof KeyMode === 'string' && KeyMode !== '') : {};
                const modeField = schema.fields({
                  type: objectType
                }).get(KeyMode);
                macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
                  if (!test) {
                    throw new Error('field must exist in schema');
                  }
                })(modeField) : {};
                macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
                  if (!test) {
                    throw new Error('field must be a GenericField or LegacyAttributeField');
                  }
                })(modeField.kind === 'field' || modeField.kind === 'attribute') : {};
              }
            }
            schemaObjectKeyValue = KeyMode === '@identity' ? rawValue : KeyMode === '@index' ? index : rawValue[KeyMode];
          }
          if (!schemaObjectKeyValue && schemaObjectKeyValue !== 0) {
            macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
              {
                throw new Error(`Unexpected out of bounds access on SchemaArray`);
              }
            })() : {};
            return undefined;
          }
          const recordRef = ManagedRecordRefs.get(schemaObjectKeyValue);
          const record = recordRef?.value.deref();

          // confirm the type and key still match
          if (record && recordRef.type === objectType && recordRef.identity === schemaObjectKeyValue) {
            if (recordRef.index !== index) {
              recordRef.index = index;
              recordRef.context.path[recordRef.context.path.length - 1] = index;
            }
            return record;
          } else if (record) {
            // TODO schedule idle once we can
            void Promise.resolve().then(() => {
              record[Destroy]();
            });
          }
          const recordPath = context.path.slice();
          // this is a dirty lie since path is string[] but really we
          // should change the types for paths to `Array<string | number>`
          recordPath.push(index);
          const objectContext = {
            store: context.store,
            resourceKey: context.resourceKey,
            modeName: context.modeName,
            legacy: context.legacy,
            editable: context.editable,
            path: recordPath,
            field: field,
            value: objectType
          };
          const schemaObject = new ReactiveResource(objectContext);
          ManagedRecordRefs.set(schemaObjectKeyValue, {
            type: objectType,
            identity: schemaObjectKeyValue,
            index,
            context: objectContext,
            value: new WeakRef(schemaObject)
          });
          return schemaObject;
        }
        if (isArrayGetter(prop)) {
          let fn = boundFns.get(prop);
          if (fn === undefined) {
            if (prop === 'forEach') {
              fn = function () {
                consumeInternalSignal(_SIGNAL);
                transaction = true;
                const result = safeForEach(receiver, target, context.store, arguments[0], arguments[1]);
                transaction = false;
                return result;
              };
            } else {
              fn = function () {
                consumeInternalSignal(_SIGNAL);
                // array functions must run through Reflect to work properly
                // binding via other means will not work.
                transaction = true;
                const result = Reflect.apply(target[prop], receiver, arguments);
                transaction = false;
                return result;
              };
            }
            boundFns.set(prop, fn);
          }
          return fn;
        }
        if (isArraySetter(prop)) {
          let fn = boundFns.get(prop);
          if (fn === undefined) {
            fn = function () {
              if (!IS_EDITABLE) {
                throw new Error(`Mutating this array via ${String(prop)} is not allowed because the ReactiveResource is not editable`);
              }
              consumeInternalSignal(_SIGNAL);
              transaction = true;
              const result = Reflect.apply(target[prop], receiver, arguments);
              transaction = false;
              return result;
            };
            boundFns.set(prop, fn);
          }
          return fn;
        }
        if (isExtensionProp(extensions, prop)) {
          return performArrayExtensionGet(receiver, extensions, signals, prop, _SIGNAL, boundFns, v => void (transaction = v));
        }
        return Reflect.get(target, prop, receiver);
      },
      set(target, prop, value, receiver) {
        if (!IS_EDITABLE) {
          let errorPath = context.resourceKey.type;
          if (context.path) {
            errorPath = context.path[context.path.length - 1];
          }
          macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
            {
              throw new Error(`Cannot set ${String(prop)} on ${errorPath} because the ReactiveResource is not editable`);
            }
          })() : {};
          return false;
        }
        if (prop === 'identifier') {
          self.identifier = value;
          return true;
        }
        if (prop === 'owner') {
          self.owner = value;
          return true;
        }
        if (isExtensionProp(extensions, prop)) {
          return performExtensionSet(receiver, extensions, signals, prop, value);
        }
        const reflect = Reflect.set(target, prop, value, receiver);
        if (reflect) {
          if (!field.type) {
            cache.setAttr(context.resourceKey, context.path, self[SOURCE]);
            _SIGNAL.isStale = true;
            return true;
          }
          let rawValue = self[SOURCE];
          if (field.kind !== 'schema-array') {
            const transform = schema.transformation(field);
            if (!transform) {
              throw new Error(`No '${field.type}' transform defined for use by ${context.resourceKey.type}.${String(prop)}`);
            }
            rawValue = self[SOURCE].map(item => transform.serialize(item, field.options ?? null, self.owner));
          }
          cache.setAttr(context.resourceKey, context.path, rawValue);
          _SIGNAL.isStale = true;
        }
        return reflect;
      },
      has(target, prop) {
        if (prop === 'identifier' || prop === 'owner' || prop === ARRAY_SIGNAL) {
          return true;
        }
        return Reflect.has(target, prop);
      }
    });

    // we entangle the signal on the returned proxy since that is
    // the object that other code will be interfacing with.
    _SIGNAL = entangleSignal(signals, proxy, ARRAY_SIGNAL, undefined);
    return proxy;
  }
}

// this will error if someone tries to call
// A(identifierArray) since it is not configurable
// which is preferable to the `meta` override we used
// before which required importing all of Ember
const desc = {
  enumerable: true,
  configurable: false,
  get: function () {
    // here to support computed chains
    // and {{#each}}
    if (macroCondition(getGlobalConfig().WarpDrive.deprecations.DEPRECATE_COMPUTED_CHAINS)) {
      return this;
    }
  }
};
// compat(desc);
Object.defineProperty(ManagedArray.prototype, '[]', desc);
function getArrayField(context) {
  const signal = entangleSignal(context.signals, context.record, context.path.at(-1), null);
  // the thing we hand out needs to know its owner and path in a private manner
  // its "address" is the parent identifier (identifier) + field name (field.name)
  //  in the nested object case field name here is the full dot path from root resource to this value
  // its "key" is the field on the parent record
  // its "owner" is the parent record
  const {
    record
  } = context;
  let managedArray = signal.value;
  if (managedArray) {
    // if the signal is stale, we need to check the rawValue has not become
    // `null`.
    if (signal.isStale) {
      const {
        store,
        resourceKey,
        path,
        field
      } = context;
      const {
        cache
      } = store;
      const rawValue = cache.getAttr(resourceKey, path);
      // if the rawValue is null or the rawValue is undefined and the field has no defaultValue
      // we need to reset the managedArray to null
      if (rawValue === null || !rawValue && typeof rawValue === 'undefined' && !field.options?.defaultValue) {
        signal.value = null;
        // TODO once we fix schema-object GC we should run Destroy here on the managed array
        return null;
      }
    }
    return managedArray;
  } else {
    const {
      store,
      resourceKey,
      path,
      field
    } = context;
    const {
      cache
    } = store;
    let rawValue = context.editable ? cache.getAttr(resourceKey, path) : cache.getRemoteAttr(resourceKey, path);

    // we only apply the defaultValue if the rawValue is undefined, this allows
    // use of explicit null for the field.
    if (!rawValue && typeof rawValue === 'undefined' && field.options?.defaultValue) {
      rawValue = [];
    }
    if (!rawValue) {
      return null;
    }
    managedArray = new ManagedArray(context, record, rawValue);
    signal.value = managedArray;
  }
  return managedArray;
}
function setArrayField(context) {
  const {
    field,
    record,
    value
  } = context;
  const {
    cache,
    schema
  } = context.store;
  const fieldSignal = peekInternalSignal(context.signals, context.path.at(-1));
  const peeked = fieldSignal?.value;
  const transform = field.type ? schema.transformation(field) : null;
  // prettier-ignore
  const rawValue = value === null ? null : field.type ? value.map(item => transform.serialize(item, field.options ?? null, record)) : value?.slice();
  cache.setAttr(context.resourceKey, context.path, rawValue);
  if (peeked) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected the peekManagedArray for ${field.kind} to return a ManagedArray`);
      }
    })(ARRAY_SIGNAL in peeked) : {};
    const arrSignal = peeked[ARRAY_SIGNAL];
    arrSignal.isStale = true;
    // TODO run array destroy?
  }
  if (!Array.isArray(rawValue) && fieldSignal) {
    fieldSignal.value = null;
  }
  return true;
}
function getAttributeField(context) {
  entangleInitiallyStaleSignal(context.signals, context.record, context.path.at(-1), null);
  const {
    cache
  } = context.store;
  return context.editable ? cache.getAttr(context.resourceKey, context.path) : cache.getRemoteAttr(context.resourceKey, context.path);
}
function setAttributeField(context) {
  context.store.cache.setAttr(context.resourceKey, context.path, context.value);
  return true;
}
const InvalidKinds = ['alias', 'derived', '@local'];
function isInvalidKind(kind) {
  return InvalidKinds.includes(kind);
}
function isNonIdentityCacheableField(field) {
  return !isInvalidKind(field.kind) && field.kind !== '@id' && field.kind !== '@hash';
}
function getFieldCacheKeyStrict(field) {
  return field.sourceKey || field.name;
}
function getFieldCacheKey(field) {
  return 'sourceKey' in field && field.sourceKey ? field.sourceKey : field.name;
}
function getBelongsToField(context) {
  entangleSignal(context.signals, context.record, context.path.at(-1), null);
  const {
    field,
    resourceKey,
    store
  } = context;
  const {
    schema,
    cache
  } = store;
  if (field.options.linksMode) {
    const rawValue = context.editable ? cache.getRelationship(resourceKey, getFieldCacheKeyStrict(field)) : cache.getRemoteRelationship(resourceKey, getFieldCacheKeyStrict(field));
    return rawValue.data ? store.peekRecord(rawValue.data) : null;
  }

  // FIXME move this to a "LegacyMode" make this part of "PolarisMode"
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Can only use belongsTo fields when the resource is in legacy mode`);
    }
  })(context.legacy) : {};
  return schema._kind('@legacy', 'belongsTo').get(store, context.record, resourceKey, field);
}
function setBelongsToField(context) {
  const {
    store
  } = context;
  const {
    schema
  } = store;
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Can only mutate belongsTo fields when the resource is in legacy mode`);
    }
  })(context.legacy) : {};
  schema._kind('@legacy', 'belongsTo').set(store, context.record, context.resourceKey, context.field, context.value);
  return true;
}
function getCollectionField(context) {
  entangleSignal(context.signals, context.record, context.path.at(-1), null);
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    {
      throw new Error(`Accessing collection fields is not yet implemented`);
    }
  })() : {};
}
function setCollectionField(context) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    {
      throw new Error(`Setting collection fields is not yet implemented`);
    }
  })() : {};
  return false;
}
function getDerivedField(context) {
  const {
    schema
  } = context.store;
  return schema.derivation(context.field)(context.record, context.field.options ?? null, context.field.name);
}
function setDerivedField(context) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    {
      throw new Error(`ILLEGAL SET: Cannot set '${context.path.join('.')}' on '${context.resourceKey.type}' as ${context.field.kind} fields are not mutable`);
    }
  })() : {};
  return false;
}
function getGenericField(context) {
  const signal = entangleInitiallyStaleSignal(context.signals, context.record, context.path.at(-1), null);
  // FIXME we should be able to cache the computation here, but some tests fail.
  // if (!signal.isStale) {
  //   return signal.value;
  // }
  signal.isStale = false;
  const {
    cache,
    schema
  } = context.store;
  const rawValue = context.editable ? cache.getAttr(context.resourceKey, context.path) : cache.getRemoteAttr(context.resourceKey, context.path);
  const {
    field
  } = context;
  if (!field.type) {
    // signal.value = rawValue;
    return rawValue;
  }
  const transform = schema.transformation(field);
  // signal.value = transform.hydrate(rawValue, field.options ?? null, context.record);
  // return signal.value;
  return transform.hydrate(rawValue, field.options ?? null, context.record);
}
function setGenericField(context) {
  const {
    cache,
    schema
  } = context.store;
  const {
    field
  } = context;
  if (!field.type) {
    cache.setAttr(context.resourceKey, context.path, context.value);
    return true;
  }
  const transform = schema.transformation(field);
  const rawValue = transform.serialize(context.value, field.options ?? null, context.record);
  cache.setAttr(context.resourceKey, context.path, rawValue);
  return true;
}
class ManyArrayManager {
  constructor(record, editable) {
    const context = record[Context];
    this.record = record;
    this.store = context.store;
    this.identifier = context.resourceKey;
    this.editable = editable;
  }
  _syncArray(array) {
    const method = this.editable ? 'getRelationship' : 'getRemoteRelationship';
    // FIXME field needs to use sourceKey
    const rawValue = this.store.cache[method](this.identifier, array.key);
    if (rawValue.meta) {
      array.meta = rawValue.meta;
    }
    if (rawValue.links) {
      array.links = rawValue.links;
    }
    const currentState = array[Context].source;

    // unlike in the normal RecordArray case, we don't need to divorce the reference
    // because we don't need to worry about associate/disassociate since the graph
    // takes care of that for us
    if (currentState !== rawValue.data) {
      currentState.length = 0;
      fastPush(currentState, rawValue.data);
    }
  }
  reloadHasMany(key, options) {
    // FIXME field needs to use sourceKey
    const field = this.store.schema.fields(this.identifier).get(key);
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected a hasMany field for ${key}`);
      }
    })(field?.kind === 'hasMany') : {};
    const cacheOptions = options ? extractCacheOptions(options) : {
      reload: true
    };
    cacheOptions.types = [field.type];
    const rawValue = this.store.cache.getRelationship(this.identifier, key);
    const req = {
      url: getRelatedLink(rawValue),
      op: 'findHasMany',
      method: 'GET',
      records: rawValue.data,
      cacheOptions,
      options: {
        field,
        identifier: this.identifier,
        links: rawValue.links,
        meta: rawValue.meta
      },
      [EnableHydration]: false
    };
    return this.store.request(req);
  }
  mutate(mutation) {
    this.store.cache.mutate(mutation);
  }
}
function getRelatedLink(resource) {
  const related = resource.links?.related;
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Expected a related link`);
    }
  })(related) : {};
  return typeof related === 'object' ? related.href : related;
}
function extractCacheOptions(options) {
  const cacheOptions = {};
  if ('reload' in options) {
    cacheOptions.reload = options.reload;
  }
  if ('backgroundReload' in options) {
    cacheOptions.backgroundReload = options.backgroundReload;
  }
  return cacheOptions;
}
function getHasManyField(context) {
  const signal = entangleSignal(context.signals, context.record, context.path.at(-1), null);
  const {
    store,
    field
  } = context;
  if (field.options.linksMode) {
    const {
      record
    } = context;
    // the thing we hand out needs to know its owner and path in a private manner
    // its "address" is the parent identifier (identifier) + field name (field.name)
    //  in the nested object case field name here is the full dot path from root resource to this value
    // its "key" is the field on the parent record
    // its "owner" is the parent record

    const cached = signal.value;
    if (cached) {
      return cached;
    }
    const {
      editable,
      resourceKey
    } = context;
    const {
      cache
    } = store;
    const rawValue = cache.getRelationship(resourceKey, getFieldCacheKeyStrict(field));
    if (!rawValue) {
      return null;
    }
    const managedArray = createLegacyManyArray({
      store,
      manager: new ManyArrayManager(record, editable),
      source: rawValue.data?.slice() ?? [],
      type: field.type,
      isLoaded: true,
      editable,
      isAsync: field.options.async ?? false,
      isPolymorphic: field.options.polymorphic ?? false,
      field,
      identifier: resourceKey,
      links: rawValue.links || null,
      meta: rawValue.meta || null
    });
    signal.value = managedArray;
    return managedArray;
  }
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Can only use hasMany fields when the resource is in legacy mode`);
    }
  })(context.legacy) : {};
  return store.schema._kind('@legacy', 'hasMany').get(store, context.record, context.resourceKey, field);
}
function setHasManyField(context) {
  const {
    store
  } = context;
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Can only use hasMany fields when the resource is in legacy mode`);
    }
  })(context.legacy) : {};
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`You must pass an array of records to set a hasMany relationship`);
    }
  })(Array.isArray(context.value)) : {};
  store.schema._kind('@legacy', 'hasMany').set(store, context.record, context.resourceKey, context.field, context.value);
  return true;
}
function getHashField(context) {
  const {
    field,
    path,
    resourceKey
  } = context;
  const {
    schema,
    cache
  } = context.store;
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Cannot use a ${field.kind} directly on a resource.`);
    }
  })(Array.isArray(path) && path.length > 1) : {};
  const realPath = path.slice(0, -1);
  const rawData = context.editable ? cache.getAttr(resourceKey, realPath) : cache.getRemoteAttr(resourceKey, realPath);
  return schema.hashFn(field)(rawData, field.options ?? null, field.name ?? null);
}
function setHashField(context) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    {
      throw new Error(`ILLEGAL SET: Cannot set '${Array.isArray(context.path) ? context.path.join('.') : context.path}' on '${context.resourceKey.type}' as ${context.field.kind} fields are not mutable`);
    }
  })() : {};
  return false;
}
function getIdentityField(context) {
  entangleSignal(context.signals, context.record, '@identity', null);
  return context.resourceKey.id;
}
function setIdentityField(context) {
  const {
    value,
    resourceKey,
    store
  } = context;
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Expected to receive a string id`);
    }
  })(typeof value === 'string' && value.length) : {};
  const normalizedId = String(value);
  const didChange = normalizedId !== resourceKey.id;
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Cannot set ${resourceKey.type} record's id to ${normalizedId}, because id is already ${resourceKey.id}`);
    }
  })(!didChange || resourceKey.id === null) : {};
  if (normalizedId !== null && didChange) {
    store._instanceCache.setRecordId(resourceKey, normalizedId);
    store.notifications.notify(resourceKey, 'identity', null);
  }
  return true;
}
function getLocalField(context) {
  const {
    field
  } = context;
  const signal = getOrCreateInternalSignal(context.signals, context.record, field.name, field.options?.defaultValue ?? null);
  consumeInternalSignal(signal);
  return signal.value;
}
function setLocalField(context) {
  const {
    value
  } = context;
  const signal = getOrCreateInternalSignal(context.signals, context.record, context.field.name, value);
  if (signal.value !== value) {
    signal.value = value;
    notifyInternalSignal(signal);
  }
  return true;
}
const ObjectSymbols = new Set([OBJECT_SIGNAL, Context, SOURCE]);

// const ignoredGlobalFields = new Set<string>(['setInterval', 'nodeType', 'nodeName', 'length', 'document', STRUCTURED]);

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class ManagedObject {
  constructor(context) {
    const {
      field,
      path
    } = context;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    this[SOURCE] = Object.assign({}, context.value);
    const signals = withSignalStore(this);
    const _SIGNAL = this[OBJECT_SIGNAL] = entangleSignal(signals, this, OBJECT_SIGNAL, undefined);
    this[Context] = context;
    const identifier = context.resourceKey;
    const {
      cache,
      schema
    } = context.store;

    // prettier-ignore
    const extensions = !context.legacy ? null : schema.CAUTION_MEGA_DANGER_ZONE_objectExtensions(field, null);
    const proxy = new Proxy(this[SOURCE], {
      ownKeys() {
        return Object.keys(self[SOURCE]);
      },
      has(target, prop) {
        return prop in self[SOURCE];
      },
      getOwnPropertyDescriptor(target, prop) {
        return {
          writable: context.editable,
          enumerable: true,
          configurable: true
        };
      },
      get(target, prop, receiver) {
        if (ObjectSymbols.has(prop)) {
          return self[prop];
        }
        if (prop === Symbol.toPrimitive) {
          return () => null;
        }
        if (prop === Symbol.toStringTag) {
          return `ManagedObject<${identifier.type}:${identifier.id} (${identifier.lid})>`;
        }
        if (prop === 'constructor') {
          return Object;
        }
        if (prop === 'toString') {
          return function () {
            return `ManagedObject<${identifier.type}:${identifier.id} (${identifier.lid})>`;
          };
        }
        if (prop === 'toHTML') {
          return function () {
            return '<span>ManagedObject</span>';
          };
        }
        if (_SIGNAL.isStale) {
          _SIGNAL.isStale = false;
          let newData = cache.getAttr(identifier, path);
          if (newData && newData !== self[SOURCE]) {
            if (field.type) {
              const transform = schema.transformation(field);
              newData = transform.hydrate(newData, field.options ?? null, context.record);
            }
            self[SOURCE] = Object.assign({}, newData); // Add type assertion for newData
          }
        }

        // toJSON and extensions need to come after we update data if stale
        if (prop === 'toJSON') {
          return function () {
            return structuredClone(self[SOURCE]);
          };
        }

        // we always defer to data before extensions
        if (prop in self[SOURCE]) {
          consumeInternalSignal(_SIGNAL);
          return self[SOURCE][prop];
        }
        if (isExtensionProp(extensions, prop)) {
          return performObjectExtensionGet(receiver, extensions, signals, prop);
        }
        return Reflect.get(target, prop, receiver);
      },
      set(target, prop, value, receiver) {
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          if (!test) {
            throw new Error(`Cannot set read-only property '${String(prop)}' on ManagedObject`);
          }
        })(context.editable) : {};

        // since objects function as dictionaries, we can't defer to schema/data before extensions
        // unless the prop is in the existing data.
        if (!(prop in self[SOURCE]) && isExtensionProp(extensions, prop)) {
          return performExtensionSet(receiver, extensions, signals, prop, value);
        }
        const reflect = Reflect.set(target, prop, value, receiver);
        if (!reflect) {
          return false;
        }
        if (!field.type) {
          cache.setAttr(identifier, path, self[SOURCE]);
        } else {
          const transform = schema.transformation(field);
          const val = transform.serialize(self[SOURCE], field.options ?? null, context.record);
          cache.setAttr(identifier, path, val);
        }
        _SIGNAL.isStale = true;
        return true;
      }
    });
    return proxy;
  }
}
const ManagedObjectMap = getOrSetGlobal('ManagedObjectMap', new Map());
function peekManagedObject(record, field) {
  const managedObjectMapForRecord = ManagedObjectMap.get(record);
  if (managedObjectMapForRecord) {
    return managedObjectMapForRecord.get(field.name);
  }
}
function getObjectField(context) {
  entangleSignal(context.signals, context.record, context.path.at(-1), null);
  const {
    record,
    field
  } = context;
  const managedObjectMapForRecord = ManagedObjectMap.get(record);
  let managedObject;
  if (managedObjectMapForRecord) {
    managedObject = managedObjectMapForRecord.get(field.name);
  }
  if (managedObject) {
    return managedObject;
  } else {
    const {
      store,
      resourceKey,
      path
    } = context;
    const {
      cache,
      schema
    } = store;
    let rawValue = context.editable ? cache.getAttr(resourceKey, path) : cache.getRemoteAttr(resourceKey, path);
    if (!rawValue) {
      return null;
    }
    if (field.type) {
      const transform = schema.transformation(field);
      rawValue = transform.hydrate(rawValue, field.options ?? null, record);
    }
    managedObject = new ManagedObject({
      store,
      resourceKey,
      modeName: context.modeName,
      legacy: context.legacy,
      editable: context.editable,
      path,
      field,
      record,
      signals: context.signals,
      value: rawValue
    });
    if (!managedObjectMapForRecord) {
      ManagedObjectMap.set(record, new Map([[field.name, managedObject]]));
    } else {
      managedObjectMapForRecord.set(field.name, managedObject);
    }
  }
  return managedObject;
}
function setObjectField(context) {
  const {
    field,
    value,
    record
  } = context;
  const {
    cache,
    schema
  } = context.store;
  if (!field.type) {
    let newValue = value;
    if (value !== null) {
      newValue = {
        ...value
      };
    } else {
      ManagedObjectMap.delete(record);
    }
    cache.setAttr(context.resourceKey, context.path, newValue);
    const peeked = peekManagedObject(record, field);
    if (peeked) {
      const objSignal = peeked[OBJECT_SIGNAL];
      objSignal.isStale = true;
    }
    return true;
  }
  const transform = schema.transformation(field);
  const rawValue = transform.serialize({
    ...value
  }, field.options ?? null, record);
  cache.setAttr(context.resourceKey, context.path, rawValue);
  const peeked = peekManagedObject(record, field);
  if (peeked) {
    const objSignal = peeked[OBJECT_SIGNAL];
    objSignal.isStale = true;
  }
  return true;
}

// TODO probably this should just be a Document
// but its separate until we work out the lid situation
class ResourceRelationship {
  constructor(context) {
    const {
      store,
      resourceKey
    } = context;
    const {
      cache
    } = store;
    const name = getFieldCacheKeyStrict(context.field);
    const rawValue = context.editable ? cache.getRelationship(resourceKey, name) : cache.getRemoteRelationship(resourceKey, name);

    // TODO setup true lids for relationship documents
    // @ts-expect-error we need to give relationship documents a lid
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.lid = rawValue.lid ?? rawValue.links?.self ?? `relationship:${resourceKey.lid}.${name}`;
    this.data = rawValue.data ? store.peekRecord(rawValue.data) : null;
    this.name = name;
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      this.links = Object.freeze(Object.assign({}, rawValue.links));
      this.meta = Object.freeze(Object.assign({}, rawValue.meta));
    } else {
      this.links = rawValue.links ?? {};
      this.meta = rawValue.meta ?? {};
    }
    this[Context] = context;
  }
  fetch(options) {
    const url = options?.url ?? getHref(this.links.related) ?? getHref(this.links.self) ?? null;
    if (!url) {
      throw new Error(`Cannot ${options?.method ?? 'fetch'} ${this[Context].resourceKey.type}.${String(this.name)} because it has no related link`);
    }
    const request = Object.assign({
      url,
      method: 'GET'
    }, options);
    return this[Context].store.request(request);
  }
}
defineSignal(ResourceRelationship.prototype, 'data', null);
defineSignal(ResourceRelationship.prototype, 'links', null);
defineSignal(ResourceRelationship.prototype, 'meta', null);
function getHref(link) {
  if (!link) {
    return null;
  }
  if (typeof link === 'string') {
    return link;
  }
  return link.href;
}
function getResourceField(context) {
  entangleSignal(context.signals, context.record, context.path.at(-1), null);
  return new ResourceRelationship(context);
}
function setResourceField(context) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    {
      throw new Error(`setting resource relationships is not yet supported`);
    }
  })() : {};
  return false;
}
function setSchemaArrayField(context) {
  const arrayValue = context.value === null ? null : context.value?.slice();
  const fieldSignal = peekInternalSignal(context.signals, context.path.at(-1));
  const peeked = fieldSignal?.value;
  context.store.cache.setAttr(context.resourceKey, context.path, arrayValue);
  if (peeked) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected the peekManagedArray for ${context.field.kind} to return a ManagedArray`);
      }
    })(ARRAY_SIGNAL in peeked) : {};
    const arrSignal = peeked[ARRAY_SIGNAL];
    arrSignal.isStale = true;
    if (!Array.isArray(arrayValue)) {
      fieldSignal.value = null;
    }
  }
  return true;
}
function getSchemaObjectField(context) {
  const signal = entangleSignal(context.signals, context.record, context.path.at(-1), null);
  const {
    store,
    resourceKey,
    path,
    field
  } = context;
  const {
    cache
  } = store;
  let rawValue = context.editable ? cache.getAttr(resourceKey, path) : cache.getRemoteAttr(resourceKey, path);
  if (!rawValue && !field.options?.polymorphic && field.options?.defaultValue) {
    rawValue = {};
  }
  if (!rawValue) {
    if (signal.value) {
      const value = signal.value;
      // TODO if we had idle scheduling this should be done there.
      void Promise.resolve().then(() => {
        value.value[Destroy]();
      });
      signal.value = null;
    }
    return null;
  }
  const {
    schema
  } = store;
  let objectType;
  if (field.options?.polymorphic) {
    const typePath = field.options.type ?? 'type';
    // if we are polymorphic, then context.field.options.type will
    // either specify a path on the rawValue to use as the type, defaulting to "type" or
    // the special string "@hash" which tells us to treat field.type as a hashFn name with which
    // to calc the type.
    if (typePath === '@hash') {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`Expected the field to define a hashFn as its type`);
        }
      })(field.type) : {};
      const hashFn = schema.hashFn({
        type: field.type
      });
      // TODO consider if there are better options and name args we could provide.
      objectType = hashFn(rawValue, null, null);
    } else {
      objectType = rawValue[typePath];
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`Expected the type path for the field to be a value on the raw object`);
        }
      })(typePath && objectType && typeof objectType === 'string') : {};
    }
  } else {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`A non-polymorphic SchemaObjectField must provide a SchemaObject type in its definition`);
      }
    })(field.type) : {};
    objectType = field.type;
  }
  const hashField = schema.resource({
    type: objectType
  }).identity;
  const identity = hashField ? schema.hashFn(hashField)(rawValue, hashField.options ?? null, hashField.name) : field.name;
  const cachedSchemaObject = signal.value;
  if (cachedSchemaObject) {
    if (cachedSchemaObject.type === objectType && cachedSchemaObject.identity === identity) {
      return cachedSchemaObject.value;
    } else {
      // TODO if we had idle scheduling this should be done there.
      void Promise.resolve().then(() => {
        cachedSchemaObject.value[Destroy]();
      });
    }
  }
  const schemaObject = new ReactiveResource({
    store: context.store,
    resourceKey: context.resourceKey,
    modeName: context.modeName,
    legacy: context.legacy,
    editable: context.editable,
    path: context.path,
    field: context.field,
    value: objectType
  });
  signal.value = {
    type: objectType,
    identity: identity,
    value: schemaObject
  };
  return schemaObject;
}
function setSchemaObjectField(context) {
  const {
    store,
    value
  } = context;
  let newValue = value;
  if (value !== null) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected value to be an object`);
      }
    })(typeof value === 'object') : {};
    newValue = {
      ...value
    };
    // FIXME the case of field.type to string here is likely incorrect
    const schemaFields = store.schema.fields({
      type: context.field.type
    });
    for (const key of Object.keys(newValue)) {
      if (!schemaFields.has(key)) {
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          {
            throw new Error(`Field ${key} does not exist on schema object ${context.field.type}`);
          }
        })() : {};
        return false;
      }
    }
  } else {
    ManagedObjectMap.delete(context.record);
  }
  store.cache.setAttr(context.resourceKey, context.path, newValue);
  // const peeked = peekManagedObject(self, field);
  // if (peeked) {
  //   const objSignal = peeked[OBJECT_SIGNAL];
  //   objSignal.isStale = true;
  // }
  return true;
}
const DefaultMode = {
  '@hash': {
    get: getHashField,
    set: setHashField,
    mutable: false,
    enumerable: false,
    serializable: false
  },
  '@id': {
    get: getIdentityField,
    set: setIdentityField,
    mutable: true,
    enumerable: true,
    serializable: true
  },
  '@local': {
    get: getLocalField,
    set: setLocalField,
    mutable: true,
    enumerable: false,
    serializable: false
  },
  alias: {
    get: getAliasField,
    set: setAliasField,
    mutable: true,
    enumerable: true,
    serializable: false
  },
  array: {
    get: getArrayField,
    set: setArrayField,
    mutable: true,
    enumerable: true,
    serializable: true
  },
  attribute: {
    get: getAttributeField,
    set: setAttributeField,
    mutable: true,
    enumerable: true,
    serializable: true
  },
  belongsTo: {
    get: getBelongsToField,
    set: setBelongsToField,
    mutable: true,
    enumerable: true,
    serializable: true
  },
  collection: {
    get: getCollectionField,
    set: setCollectionField,
    mutable: true,
    enumerable: true,
    serializable: true
  },
  derived: {
    get: getDerivedField,
    set: setDerivedField,
    mutable: true,
    enumerable: true,
    serializable: false
  },
  field: {
    get: getGenericField,
    set: setGenericField,
    mutable: true,
    enumerable: true,
    serializable: true
  },
  hasMany: {
    get: getHasManyField,
    set: setHasManyField,
    mutable: true,
    enumerable: true,
    serializable: true
  },
  object: {
    get: getObjectField,
    set: setObjectField,
    mutable: true,
    enumerable: true,
    serializable: true
  },
  resource: {
    get: getResourceField,
    set: setResourceField,
    mutable: true,
    enumerable: true,
    serializable: true
  },
  'schema-array': {
    get: getArrayField,
    set: setSchemaArrayField,
    mutable: true,
    enumerable: true,
    serializable: true
  },
  'schema-object': {
    get: getSchemaObjectField,
    set: setSchemaObjectField,
    mutable: true,
    enumerable: true,
    serializable: true
  }
};
const IgnoredGlobalFields = new Set(['length', 'nodeType', 'then', 'setInterval', 'document', STRUCTURED]);
const symbolList = [Context, Destroy, RecordStore, Checkout, Commit];
const RecordSymbols = new Set(symbolList);
function isPathMatch(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}
function isNonEnumerableProp(prop) {
  return prop === 'constructor' || prop === 'prototype' || prop === '__proto__' || prop === 'toString' || prop === 'toJSON' || prop === 'toHTML' || typeof prop === 'symbol';
}
const Editables = new Map();

/**
 * @private
 */

/**
 * A class that uses a the ResourceSchema for a ResourceType
 * and a ResourceKey to transform data from the cache into a rich, reactive
 * object.
 *
 * This class is not directly instantiable. To use it, you should
 * configure the store's `instantiateRecord` and `teardownRecord` hooks
 * with the matching hooks provided by this package.
 *
 * @hideconstructor
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class ReactiveResource {
  constructor(context) {
    const resourceKey = context.resourceKey;
    const isEmbedded = context.path !== null;
    const schema = context.store.schema;
    const objectType = isEmbedded ? context.value : resourceKey.type;
    const ResourceSchema = schema.resource(isEmbedded ? {
      type: objectType
    } : resourceKey);
    const identityField = ResourceSchema.identity;
    const BoundFns = new Map();

    // prettier-ignore
    const extensions = !context.legacy ? null : isEmbedded ? schema.CAUTION_MEGA_DANGER_ZONE_objectExtensions(context.field, objectType) : schema.CAUTION_MEGA_DANGER_ZONE_resourceExtensions(resourceKey);
    this[Context] = context;
    this[RecordStore] = context.store;
    const fields = isEmbedded ? schema.fields({
      type: objectType
    }) : schema.fields(resourceKey);
    const method = typeof schema.cacheFields === 'function' ? 'cacheFields' : 'fields';
    const cacheFields = isEmbedded ? schema[method]({
      type: objectType
    }) : schema[method](resourceKey);
    const signals = withSignalStore(this);
    this.___notifications = context.store.notifications.subscribe(resourceKey, (_, type, key) => {
      switch (type) {
        case 'identity':
          {
            if (isEmbedded || !identityField) return; // base paths never apply to embedded records

            if (identityField.name && identityField.kind === '@id') {
              const signal = signals.get('@identity');
              if (signal) {
                notifyInternalSignal(signal);
              }
            }
            break;
          }
        case 'attributes':
          if (key) {
            if (Array.isArray(key)) {
              if (context.path === null) return; // deep paths will be handled by embedded records
              // TODO we should have the notification manager
              // ensure it is safe for each callback to mutate this array
              if (isPathMatch(context.path, key)) {
                // handle the notification
                // TODO we should likely handle this notification here
                // also we should add a LOGGING flag
                // eslint-disable-next-line no-console
                console.warn(`Notification unhandled for ${key.join(',')} on ${resourceKey.type}`, proxy);
                return;
              }

              // TODO we should add a LOGGING flag
              // console.log(`Deep notification skipped for ${key.join('.')} on ${identifier.type}`, proxy);
              // deep notify the key path
            } else {
              if (isEmbedded) return; // base paths never apply to embedded records

              // TODO determine what LOGGING flag to wrap this in if any
              // console.log(`Notification for ${key} on ${identifier.type}`, proxy);
              const signal = signals.get(key);
              if (signal) {
                notifyInternalSignal(signal);
              }
              const field = cacheFields.get(key);
              if (field?.kind === 'array' || field?.kind === 'schema-array') {
                const peeked = signal?.value;
                if (peeked) {
                  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
                    if (!test) {
                      throw new Error(`Expected the peekManagedArray for ${field.kind} to return a ManagedArray`);
                    }
                  })(ARRAY_SIGNAL in peeked) : {};
                  const arrSignal = peeked[ARRAY_SIGNAL];
                  notifyInternalSignal(arrSignal);
                }
              }
              if (field?.kind === 'object') {
                const peeked = peekManagedObject(proxy, field);
                if (peeked) {
                  const objSignal = peeked[OBJECT_SIGNAL];
                  notifyInternalSignal(objSignal);
                }
              }
            }
          }
          break;
        case 'relationships':
          if (key) {
            if (Array.isArray(key)) ;else {
              if (isEmbedded) return; // base paths never apply to embedded records

              const field = cacheFields.get(key);
              macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
                if (!test) {
                  throw new Error(`Expected relationship ${key} to be the name of a field`);
                }
              })(field) : {};
              if (field.kind === 'belongsTo') {
                // TODO determine what LOGGING flag to wrap this in if any
                // console.log(`Notification for ${key} on ${identifier.type}`, proxy);
                const signal = signals.get(key);
                if (signal) {
                  notifyInternalSignal(signal);
                }
                // FIXME
              } else if (field.kind === 'resource') ;else if (field.kind === 'hasMany') {
                if (field.options.linksMode) {
                  const signal = signals.get(key);
                  if (signal) {
                    const peeked = signal.value;
                    if (peeked) {
                      notifyInternalSignal(peeked[Context].signal);
                    }
                  }
                  return;
                }
                macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
                  if (!test) {
                    throw new Error(`Can only use hasMany fields when the resource is in legacy mode`);
                  }
                })(context.legacy) : {};
                if (schema._kind('@legacy', 'hasMany').notify(context.store, proxy, resourceKey, field)) {
                  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
                    if (!test) {
                      throw new Error(`Expected options to exist on relationship meta`);
                    }
                  })(field.options) : {};
                  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
                    if (!test) {
                      throw new Error(`Expected async to exist on relationship meta options`);
                    }
                  })('async' in field.options) : {};
                  if (field.options.async) {
                    const signal = signals.get(key);
                    if (signal) {
                      notifyInternalSignal(signal);
                    }
                  }
                }
              } else if (field.kind === 'collection') ;
            }
          }
          break;
      }
    });
    const proxy = new Proxy(this, {
      ownKeys() {
        const identityKey = identityField?.name;
        const keys = Array.from(fields.keys());
        if (identityKey) {
          keys.unshift(identityKey);
        }
        return keys;
      },
      has(target, prop) {
        if (prop === Destroy || prop === Checkout) {
          return true;
        }
        return fields.has(prop);
      },
      getOwnPropertyDescriptor(target, prop) {
        const schemaForField = prop === identityField?.name ? identityField : fields.get(prop);
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          if (!test) {
            throw new Error(`No field named ${String(prop)} on ${resourceKey.type}`);
          }
        })(schemaForField) : {};
        if (isNonEnumerableProp(prop)) {
          return {
            writable: false,
            enumerable: false,
            configurable: true
          };
        }
        switch (schemaForField.kind) {
          case 'derived':
            return {
              writable: false,
              enumerable: true,
              configurable: true
            };
          case '@id':
            return {
              writable: resourceKey.id === null,
              enumerable: true,
              configurable: true
            };
          case '@hash':
            return schemaForField.name ? {
              writable: false,
              enumerable: true,
              configurable: true
            } : {
              writable: false,
              enumerable: false,
              configurable: false
            };
          case '@local':
          case 'field':
          case 'attribute':
          case 'resource':
          case 'alias':
          case 'belongsTo':
          case 'hasMany':
          case 'collection':
          case 'schema-array':
          case 'array':
          case 'schema-object':
          case 'object':
            return {
              writable: context.editable,
              enumerable: true,
              configurable: true
            };
          default:
            return {
              writable: false,
              enumerable: false,
              configurable: false
            };
        }
      },
      get(target, prop, receiver) {
        if (RecordSymbols.has(prop)) {
          if (prop === Destroy) {
            return () => _DESTROY(receiver);
          }
          if (prop === Checkout) {
            return () => Promise.resolve(_CHECKOUT(receiver));
          }
          if (prop === Commit) {
            return () => Promise.resolve(_COMMIT(receiver));
          }
          return target[prop];
        }
        if (prop === Signals) {
          return signals;
        }

        // TODO make this a symbol
        if (prop === '___notifications') {
          return target.___notifications;
        }

        // ReactiveResource reserves use of keys that begin with these characters
        // for its own usage.
        // _, @, $, *

        const maybeField = prop === identityField?.name ? identityField : fields.get(prop);
        if (!maybeField) {
          if (IgnoredGlobalFields.has(prop)) {
            return undefined;
          }

          /////////////////////////////////////////////////////////////
          //// Note these bound function behaviors are essentially ////
          //// built-in but overrideable derivations.              ////
          ////                                                     ////
          //// The bar for this has to be "basic expectations of   ////
          ///  an object" – very, very high                        ////
          /////////////////////////////////////////////////////////////

          if (prop === Symbol.toStringTag || prop === 'toString') {
            let fn = BoundFns.get('toString');
            if (!fn) {
              fn = function () {
                entangleSignal(signals, receiver, '@identity', null);
                return `Record<${resourceKey.type}:${resourceKey.id} (${resourceKey.lid})>`;
              };
              BoundFns.set(prop, fn);
            }
            return fn;
          }
          if (prop === 'toHTML') {
            let fn = BoundFns.get('toHTML');
            if (!fn) {
              fn = function () {
                entangleSignal(signals, receiver, '@identity', null);
                return `<span>Record<${resourceKey.type}:${resourceKey.id} (${resourceKey.lid})></span>`;
              };
              BoundFns.set(prop, fn);
            }
            return fn;
          }
          if (prop === 'toJSON') {
            let fn = BoundFns.get('toJSON');
            if (!fn) {
              fn = function () {
                const json = {};
                for (const key in receiver) {
                  json[key] = receiver[key];
                }
                return json;
              };
              BoundFns.set(prop, fn);
            }
            return fn;
          }
          if (prop === Symbol.toPrimitive) return () => null;
          if (prop === Symbol.iterator) {
            let fn = BoundFns.get(Symbol.iterator);
            if (!fn) {
              fn = function* () {
                for (const key in receiver) {
                  yield [key, receiver[key]];
                }
              };
              BoundFns.set(Symbol.iterator, fn);
            }
            return fn;
          }
          if (prop === 'constructor') {
            return ReactiveResource;
          }
          if (isExtensionProp(extensions, prop)) {
            return performObjectExtensionGet(receiver, extensions, signals, prop);
          }

          // too many things check for random symbols
          if (typeof prop === 'symbol') return undefined;
          macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
            {
              throw new Error(`No field named ${String(prop)} on ${context.path ? context.value : resourceKey.type}`);
            }
          })() : {};
          return undefined;
        }
        const field = maybeField.kind === 'alias' ? maybeField.options : maybeField;
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          if (!test) {
            throw new Error(`Alias fields cannot alias '@id' '@local' '@hash' or 'derived' fields`);
          }
        })(maybeField.kind !== 'alias' || !['@id', '@local', '@hash', 'derived'].includes(maybeField.options.kind)) : {};
        /**
         * Prop Array is the path from a resource to the field including
         * intermediate "links" on arrays,objects,schema-arrays and schema-objects.
         *
         * E.g. in the following
         *
         * ```
         * const user = {
         *   addresses: [{
         *     street: 'Sunset Blvd',
         *     zip: 90210
         *   }]
         * }
         * ```
         *
         * The propArray for "street" is ['addresses', 0, 'street']
         *
         * Prop Array follows the `cache` path to the value, not the ui path.
         * Thus, if `addresses` has a sourceKey of `user_addresses` and
         * `zip` has a sourceKey of `zip_code` then the propArray for "zip" is
         * ['user_addresses', 0, 'zip_code']
         */
        const propArray = context.path?.slice() ?? [];
        // we use the field.name instead of prop here because we want to use the cache-path not
        // the record path.
        // SAFETY: we lie as string here because if we were to get null
        // we would be in a field kind that won't use the propArray below.
        const fieldCacheKey = getFieldCacheKey(field);
        propArray.push(fieldCacheKey);
        switch (field.kind) {
          case '@id':
          case '@hash':
          case '@local':
          case 'derived':
          case 'field':
          case 'attribute':
          case 'schema-array':
          case 'array':
          case 'schema-object':
          case 'object':
          case 'resource':
          case 'belongsTo':
          case 'hasMany':
          case 'collection':
            return DefaultMode[field.kind].get({
              store: context.store,
              resourceKey: resourceKey,
              modeName: context.modeName,
              legacy: context.legacy,
              editable: context.editable,
              path: propArray,
              field: field,
              record: receiver,
              signals,
              value: null
            });
          default:
            assertNeverField(resourceKey, field, propArray);
        }
      },
      set(target, prop, value, receiver) {
        // the only "editable" prop as it is currently a proxy for "isDestroyed"
        if (prop === '___notifications') {
          target[prop] = value;
          return true;
        }
        if (!context.editable) {
          macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
            {
              throw new Error(`Cannot set ${String(prop)} on ${context.path !== null ? context.value : resourceKey.type} because the ReactiveResource is not editable`);
            }
          })() : {};
          return false;
        }
        const maybeField = prop === identityField?.name ? identityField : fields.get(prop);
        if (!maybeField) {
          const type = context.path !== null ? context.value : resourceKey.type;
          if (isExtensionProp(extensions, prop)) {
            return performExtensionSet(receiver, extensions, signals, prop, value);
          }
          macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
            {
              throw new Error(`There is no settable field named ${String(prop)} on ${type}`);
            }
          })() : {};
          return false;
        }
        const field = maybeField.kind === 'alias' ? maybeField.options : maybeField;
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          if (!test) {
            throw new Error(`Alias fields cannot alias '@id' '@local' '@hash' or 'derived' fields`);
          }
        })(maybeField.kind !== 'alias' || !['@id', '@local', '@hash', 'derived'].includes(maybeField.options.kind)) : {};
        /**
         * Prop Array is the path from a resource to the field including
         * intermediate "links" on arrays,objects,schema-arrays and schema-objects.
         *
         * E.g. in the following
         *
         * ```
         * const user = {
         *   addresses: [{
         *     street: 'Sunset Blvd',
         *     zip: 90210
         *   }]
         * }
         * ```
         *
         * The propArray for "street" is ['addresses', 0, 'street']
         *
         * Prop Array follows the `cache` path to the value, not the ui path.
         * Thus, if `addresses` has a sourceKey of `user_addresses` and
         * `zip` has a sourceKey of `zip_code` then the propArray for "zip" is
         * ['user_addresses', 0, 'zip_code']
         */
        const propArray = context.path?.slice() ?? [];
        // we use the field.name instead of prop here because we want to use the cache-path not
        // the record path.
        // SAFETY: we lie as string here because if we were to get null
        // we would be in a field kind that won't use the propArray below.
        const fieldCacheKey = getFieldCacheKey(field);
        propArray.push(fieldCacheKey);
        switch (field.kind) {
          case '@id':
          case '@hash':
          case '@local':
          case 'field':
          case 'attribute':
          case 'derived':
          case 'array':
          case 'schema-array':
          case 'schema-object':
          case 'object':
          case 'resource':
          case 'belongsTo':
          case 'hasMany':
          case 'collection':
            return DefaultMode[field.kind].set({
              store: context.store,
              resourceKey: resourceKey,
              modeName: context.modeName,
              legacy: context.legacy,
              editable: context.editable,
              path: propArray,
              field: field,
              record: receiver,
              signals,
              value
            });
          default:
            return assertNeverField(resourceKey, field, propArray);
        }
      }
    });
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      Object.defineProperty(this, '__SHOW_ME_THE_DATA_(debug mode only)__', {
        enumerable: false,
        configurable: true,
        get() {
          const data = {};
          for (const key of fields.keys()) {
            data[key] = proxy[key];
          }
          return data;
        }
      });
    }
    return proxy;
  }
}
async function _COMMIT(record) {
  await Promise.resolve();
  const context = record[Context];
  context.store.cache.willCommit(context.resourceKey, null);
  context.store.cache.didCommit(context.resourceKey, null);
}
function _CHECKOUT(record) {
  const context = record[Context];

  // IF we are already the editable record, throw an error
  if (context.editable) {
    throw new Error(`Cannot checkout an already editable record`);
  }
  const editable = Editables.get(record);
  if (editable) {
    return editable;
  }
  if (context.path !== null) {
    throw new Error(`Cannot checkout an embedded record`);
  }
  const editableRecord = new ReactiveResource({
    store: context.store,
    resourceKey: context.resourceKey,
    modeName: context.legacy ? 'legacy' : 'polaris',
    legacy: context.legacy,
    editable: true,
    path: null,
    field: null,
    value: null
  });
  setRecordIdentifier(editableRecord, recordIdentifierFor(record));
  Editables.set(record, editableRecord);
  return editableRecord;
}
function _DESTROY(record) {
  if (record[Context].legacy) {
    // @ts-expect-error
    record.isDestroying = true;
    // @ts-expect-error
    record.isDestroyed = true;
  } else if (!record[Context].editable) {
    const editable = Editables.get(record);
    if (editable) {
      _DESTROY(editable);
      removeRecordIdentifier(editable);
    }
  }
  record[Context].store.notifications.unsubscribe(record.___notifications);
  record.___notifications = null;

  // FIXME we need a way to also unsubscribe all SchemaObjects when the primary
  // resource is destroyed.
}
function assertNeverField(identifier, field, path) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    {
      throw new Error(`Cannot use unknown field kind ${field.kind} on <${identifier.type}>.${Array.isArray(path) ? path.join('.') : path}`);
    }
  })() : {};
  return false;
}

/**
 * Checkout an immutable resource for editing.
 *
 * {@link ReactiveResource | ReactiveResources} are not editable by default. This method
 * creates an editable copy of the resource.
 *
 * This returns a promise which resolves with the editable
 * version of the resource.
 *
 * ```ts
 * import { checkout } from '@warp-drive/core/reactive';
 *
 * const immutable = store.peekRecord('user', '1');
 * const editable = await checkout(immutable);
 * ```
 *
 * Edits to editable resources will be automatically committed if a new
 * payload from the cache matches their existing value.
 *
 * @public
 *
 * @returns a promise that resolves to the editable resource
 * @throws if the resource is already editable or if resource is an embedded object
 */
function checkout(resource) {
  return resource[Checkout]();
}

/**
 * Forcibly commit all local changes on an editable resource to
 * the remote (immutable) version.
 *
 * This API should only be used cautiously. Typically a better
 * approach is for either the API or a Handler to reflect saved
 * changes back to update the cache.
 *
 * @public
 */
function commit(record) {
  return record[Commit]();
}
function instantiateRecord(store, identifier, createArgs) {
  const schema = store.schema;
  const resourceSchema = schema.resource(identifier);
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Expected a resource schema`);
    }
  })(isResourceSchema(resourceSchema)) : {};
  const legacy = resourceSchema?.legacy ?? false;
  const editable = legacy;
  const record = new ReactiveResource({
    store,
    resourceKey: identifier,
    modeName: legacy ? 'legacy' : 'polaris',
    legacy: legacy,
    editable: editable,
    path: null,
    field: null,
    value: null
  });
  if (createArgs && editable) {
    Object.assign(record, createArgs);
  }
  return record;
}
function assertReactiveResource(record) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error('Expected a ReactiveResource');
    }
  })(record && typeof record === 'object' && Destroy in record) : {};
}
function teardownRecord(record) {
  assertReactiveResource(record);
  record[Destroy]();
}
const Support = getOrSetGlobal('Support', new WeakMap());
const ConstructorField = {
  type: '@constructor',
  name: 'constructor',
  kind: 'derived'
};
const TypeField = {
  type: '@identity',
  name: '$type',
  kind: 'derived',
  options: {
    key: 'type'
  }
};
const DefaultIdentityField = {
  name: 'id',
  kind: '@id'
};
function _constructor(record) {
  let state = Support.get(record);
  if (!state) {
    state = {};
    Support.set(record, state);
  }
  return state._constructor = state._constructor || {
    name: `ReactiveResource<${recordIdentifierFor(record).type}>`,
    get modelName() {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        {
          throw new Error(`record.constructor.modelName is not available outside of legacy mode`);
        }
      })() : {};
      return undefined;
    }
  };
}
_constructor[Type] = '@constructor';

/**
 * Extensions allow providing non-schema driven behaviors to
 * ReactiveResources, ReactiveArrays, and ReactiveObjects.
 *
 * This should only be used for temporary migration purposes
 * to the new schema system when migrating from either Model
 * or ModelFragments.
 */

const BannedKeys = ['constructor', '__proto__'];
function processExtension(extension) {
  const {
    kind,
    name
  } = extension;
  const features = new Map();
  const baseFeatures = typeof extension.features === 'function' ? extension.features.prototype : extension.features;
  for (const key of Object.getOwnPropertyNames(baseFeatures)) {
    if (BannedKeys.includes(key)) continue;
    const decl = Object.getOwnPropertyDescriptor(baseFeatures, key);
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected to find a declaration for ${key} on extension ${name}`);
      }
    })(decl) : {};
    if (decl.value) {
      const {
        value
      } = decl;
      features.set(key, typeof value === 'function' ? {
        kind: 'method',
        fn: value
      } : decl.writable ? {
        kind: 'mutable-value',
        value
      } : {
        kind: 'readonly-value',
        value
      });
      continue;
    }
    if (decl.get || decl.set) {
      const {
        get,
        set
      } = decl;
      features.set(key,
      // prettier-ignore
      get && set ? {
        kind: 'mutable-field',
        get,
        set
      } : get ? {
        kind: 'readonly-field',
        get
      } : {
        kind: 'writeonly-field',
        set: set
      });
      continue;
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      {
        throw new Error(`The feature ${key} on extension ${name} is of an unknown variety.`);
      }
    })() : {};
  }
  return {
    kind,
    name,
    features
  };
}
function getExt(extCache, type, extName) {
  const ext = extCache[type].get(extName);
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`expected to have an extension named ${String(extName)} available for ${type}s`);
    }
  })(ext) : {};
  return ext?.features ?? null;
}
function hasObjectSchema(field) {
  return 'kind' in field && (field.kind === 'schema-array' || field.kind === 'schema-object');
}
function processExtensions(schema, field, scenario, resolvedType) {
  // if we're looking up extensions for a resource, there is no
  // merging required so if we have no objectExtensions
  // we are done.
  if (scenario === 'resource') {
    if (!('objectExtensions' in field || !field.objectExtensions?.length)) {
      return null;
    }
  }
  const type = scenario === 'resource' ? 'object' : scenario;
  const extCache = schema._extensions;
  const fieldCache = schema._cachedFieldExtensionsByField;
  if (fieldCache[type].has(field)) {
    return fieldCache[type].get(field);
  }

  // prettier-ignore
  const extensions = (scenario === 'resource' ? field.objectExtensions : scenario === 'object' ? field.options?.objectExtensions : field.options?.arrayExtensions) || null;

  // if we are a resource scenario, we know from the first check we do have extensions
  // if we are an object scenario, we can now return the resource scenario.
  // if we are an array scenario, there is nothing more to process.
  if (!extensions) {
    if (scenario === 'array') return null;
    if (!hasObjectSchema(field)) {
      return null;
    }
    return schema.CAUTION_MEGA_DANGER_ZONE_resourceExtensions(resolvedType ? {
      type: resolvedType
    } : field);
  }

  // if we have made it here, we have extensions, lets check if there's
  // a cached version we can use
  const baseExtensions = scenario === 'resource' && hasObjectSchema(field) ? schema.CAUTION_MEGA_DANGER_ZONE_resourceExtensions(field) : scenario === 'object' && hasObjectSchema(field) ? schema.CAUTION_MEGA_DANGER_ZONE_resourceExtensions(resolvedType ? {
    type: resolvedType
  } : field) : null;
  if (!baseExtensions && extensions.length === 1) {
    const value = getExt(extCache, type, extensions[0]);
    fieldCache[type].set(field, value);
    return value;
  }
  const features = new Map(baseExtensions);
  for (const extName of extensions) {
    const value = getExt(extCache, type, extName);
    if (value) {
      for (const [feature, desc] of value) {
        features.set(feature, desc);
      }
    }
  }
  const value = features.size ? features : null;
  fieldCache[type].set(field, value);
  return value;
}

/**
 * Utility for constructing a ResourceSchema with the recommended
 * fields for the PolarisMode experience.
 *
 * Using this requires registering the PolarisMode derivations
 *
 * ```ts
 * import { registerDerivations } from '@warp-drive/schema-record';
 *
 * registerDerivations(schema);
 * ```
 *
 * @public
 * @param schema
 * @return {PolarisResourceSchema}
 */
function withDefaults(schema) {
  schema.identity = schema.identity || DefaultIdentityField;

  // because fields gets iterated in definition order,
  // we add TypeField to the beginning so that it will
  // appear right next to the identity field
  schema.fields.unshift(TypeField);
  schema.fields.push(ConstructorField);
  return schema;
}
/**
 * A derivation that computes its value from the
 * record's identity.
 *
 * It can be used via a derived field definition like:
 *
 * ```ts
 * {
 *   kind: 'derived',
 *   name: 'id',
 *   type: '@identity',
 *   options: { key: 'id' }
 * }
 * ```
 *
 * Valid keys are `'id'`, `'lid'`, `'type'`, and `'^'`.
 *
 * `^` returns the entire identifier object.
 *
 * @public
 */
const fromIdentity = (record, options, key) => {
  const context = record[Context];
  const identifier = context.resourceKey;
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Cannot compute @identity for a record without an identifier`);
    }
  })(identifier) : {};
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Expected to receive a key to compute @identity, but got ${String(options)}`);
    }
  })(options?.key && ['lid', 'id', 'type', '^'].includes(options.key)) : {};
  return options.key === '^' ? identifier : identifier[options.key];
};
fromIdentity[Type] = '@identity';

/**
 * Registers the default derivations for records that want
 * to use the PolarisMode defaults provided by
 *
 * ```ts
 * import { withDefaults } from '@warp-drive/schema-record';
 * ```
 *
 * @public
 */
function registerDerivations(schema) {
  schema.registerDerivation(fromIdentity);
  schema.registerDerivation(_constructor);
}
/**
 * Wraps a derivation in a new function with Derivation signature but that looks
 * up the value in the cache before recomputing.
 *
 * @internal
 */
function makeCachedDerivation(derivation) {
  const memoizedDerivation = (record, options, prop) => {
    const signals = withSignalStore(record);
    let signal = signals.get(prop);
    if (!signal) {
      signal = createInternalMemo(signals, record, prop, () => {
        return derivation(record, options, prop);
      }); // a total lie, for convenience of reusing the storage
    }
    return signal();
  };
  memoizedDerivation[Type] = derivation[Type];
  return memoizedDerivation;
}
/**
 * A SchemaService designed to work with dynamically registered schemas.
 *
 * @public
 */
class SchemaService {
  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  constructor() {
    this._schemas = new Map();
    this._transforms = new Map();
    this._hashFns = new Map();
    this._derivations = new Map();
    this._traits = new Map();
    this._modes = new Map();
    this._extensions = {
      object: new Map(),
      array: new Map()
    };
    this._cachedFieldExtensionsByField = {
      object: new Map(),
      array: new Map()
    };
  }
  resourceTypes() {
    return Array.from(this._schemas.keys());
  }
  hasTrait(type) {
    return this._traits.has(type);
  }
  resourceHasTrait(resource, trait) {
    return this._schemas.get(resource.type).traits.has(trait);
  }
  transformation(field) {
    const kind = 'kind' in field ? field.kind : '<unknown kind>';
    const name = 'name' in field ? field.name : '<unknown name>';
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`'${kind}' fields cannot be transformed. Only fields of kind 'field' 'object' or 'array' can specify a transformation. Attempted to find '${field.type ?? '<unknown type>'}' on field '${name}'.`);
      }
    })(!('kind' in field) || ['field', 'object', 'array'].includes(kind)) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected the '${kind}' field '${name}' to specify a transformation via 'field.type', but none was present`);
      }
    })(field.type) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`No transformation registered with name '${field.type}' for '${kind}' field '${name}'`);
      }
    })(this._transforms.has(field.type)) : {};
    return this._transforms.get(field.type);
  }
  derivation(field) {
    const kind = 'kind' in field ? field.kind : '<unknown kind>';
    const name = 'name' in field ? field.name : '<unknown name>';
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`The '${kind}' field '${name}' is not derived and so cannot be used to lookup a derivation`);
      }
    })(!('kind' in field) || kind === 'derived') : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected the '${kind}' field '${name}' to specify a derivation via 'field.type', but no value was present`);
      }
    })(field.type) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`No '${field.type}' derivation registered for use by the '${kind}' field '${name}'`);
      }
    })(this._derivations.has(field.type)) : {};
    return this._derivations.get(field.type);
  }
  hashFn(field) {
    const kind = 'kind' in field ? field.kind : '<unknown kind>';
    const name = 'name' in field ? field.name : '<unknown name>';
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`The '${kind}' field '${name}' is not a HashField and so cannot be used to lookup a hash function`);
      }
    })(!('kind' in field) || kind === '@hash') : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Expected the '${kind}' field '${name}' to specify a hash function via 'field.type', but no value was present`);
      }
    })(field.type) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`No '${field.type}' hash function is registered for use by the '${kind}' field '${name}'`);
      }
    })(this._hashFns.has(field.type)) : {};
    return this._hashFns.get(field.type);
  }
  resource(resource) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`No resource registered with name '${resource.type}'`);
      }
    })(this._schemas.has(resource.type)) : {};
    return this._schemas.get(resource.type).original;
  }
  registerResources(schemas) {
    schemas.forEach(schema => {
      this.registerResource(schema);
    });
  }
  registerResource(schema) {
    const fields = new Map();
    const relationships = {};
    const attributes = {};
    for (const field of schema.fields) {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`${field.kind} is not valid inside a ResourceSchema's fields.`);
        }
      })(
      // @ts-expect-error we are checking for mistakes at runtime
      field.kind !== '@id' && field.kind !== '@hash') : {};
      fields.set(field.name, field);
      if (field.kind === 'attribute') {
        attributes[field.name] = field;
      } else if (field.kind === 'belongsTo' || field.kind === 'hasMany') {
        relationships[field.name] = field;
      }
    }
    const cacheFields = null;
    const traits = new Set(isResourceSchema(schema) ? schema.traits : []);
    const finalized = traits.size === 0;
    const internalSchema = {
      original: schema,
      finalized,
      fields,
      cacheFields,
      relationships,
      attributes,
      traits
    };
    if (traits.size === 0) {
      internalSchema.cacheFields = getCacheFields(internalSchema);
    }
    this._schemas.set(schema.type, internalSchema);
  }

  /**
   * Registers a {@link Trait} for use by resource schemas.
   *
   * Traits are re-usable collections of fields that can be composed to
   * build up a resource schema. Often they represent polymorphic behaviors
   * a resource should exhibit.
   *
   * When we finalize a resource, we walk its traits and apply their fields
   * to the resource's fields. All specified traits must be registered by
   * this time or an error will be thrown.
   *
   * Traits are applied left-to-right, with traits of traits being applied in the same
   * way. Thus for the most part, application of traits is a post-order graph traversal
   * problem.
   *
   * A trait is only ever processed once. If multiple traits (A, B, C) have the same
   * trait (D) as a dependency, D will be included only once when first encountered by
   * A.
   *
   * If a cycle exists such that trait A has trait B which has Trait A, trait A will
   * be applied *after* trait B in production. In development a cycle error will be thrown.
   *
   * Fields are finalized on a "last wins principle". Thus traits appearing higher in
   * the tree and further to the right of a traits array take precedence, with the
   * resource's fields always being applied last and winning out.
   *
   * @public
   */
  registerTrait(trait) {
    const internalTrait = Object.assign({}, trait, {
      fields: new Map()
    });
    for (const field of trait.fields) {
      internalTrait.fields.set(field.name, field);
    }
    this._traits.set(trait.name, internalTrait);
  }
  registerTransformation(transformation) {
    this._transforms.set(transformation[Type], transformation);
  }
  registerDerivation(derivation) {
    this._derivations.set(derivation[Type], makeCachedDerivation(derivation));
  }
  CAUTION_MEGA_DANGER_ZONE_registerExtension(extension) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`an extension named ${extension.name} for ${extension.kind} already exists!`);
      }
    })(!this._extensions[extension.kind].has(extension.name)) : {};
    this._extensions[extension.kind].set(extension.name, processExtension(extension));
  }
  CAUTION_MEGA_DANGER_ZONE_resourceExtensions(resource) {
    const schema = this.resource(resource);
    return processExtensions(this, schema, 'resource', null);
  }
  CAUTION_MEGA_DANGER_ZONE_objectExtensions(field, resolvedType) {
    return processExtensions(this, field, 'object', resolvedType);
  }
  CAUTION_MEGA_DANGER_ZONE_arrayExtensions(field) {
    return processExtensions(this, field, 'array', null);
  }
  CAUTION_MEGA_DANGER_ZONE_hasExtension(ext) {
    return this._extensions[ext.kind].has(ext.name);
  }

  /**
   * This is an internal method used to register behaviors for legacy mode.
   * It is not intended for public use.
   *
   * We do think a generalized `kind` registration system would be useful,
   * but we have not yet designed it.
   *
   * See https://github.com/warp-drive-data/warp-drive/issues/9534
   *
   * @internal
   */
  _registerMode(mode, kinds) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Mode '${mode}' is already registered`);
      }
    })(!this._modes.has(mode)) : {};
    this._modes.set(mode, kinds);
  }

  /**
   * This is an internal method used to enable legacy behaviors for legacy mode.
   * It is not intended for public use.
   *
   * We do think a generalized `kind` registration system would be useful,
   * but we have not yet designed it.
   *
   * See https://github.com/warp-drive-data/warp-drive/issues/9534
   *
   * @internal
   */
  _kind(mode, kind) {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Mode '${mode}' is not registered`);
      }
    })(this._modes.has(mode)) : {};
    const kinds = this._modes.get(mode);
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Kind '${kind}' is not registered for mode '${mode}'`);
      }
    })(kinds[kind]) : {};
    return kinds[kind];
  }

  /**
   * Registers a {@link HashFn} for use with a {@link HashField} for
   * either {@link ObjectSchema} identity or polymorphic type calculation.
   *
   * @public
   */
  registerHashFn(hashFn) {
    this._hashFns.set(hashFn[Type], hashFn);
  }
  fields({
    type
  }) {
    const schema = this._schemas.get(type);
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`No schema defined for ${type}`);
      }
    })(schema) : {};
    if (!schema.finalized) {
      finalizeResource(this, schema);
    }
    return schema.fields;
  }
  cacheFields({
    type
  }) {
    const schema = this._schemas.get(type);
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`No schema defined for ${type}`);
      }
    })(schema) : {};
    if (!schema.finalized) {
      finalizeResource(this, schema);
    }
    return schema.cacheFields;
  }
  hasResource(resource) {
    return this._schemas.has(resource.type);
  }
}
if (macroCondition(getGlobalConfig().WarpDrive.deprecations.ENABLE_LEGACY_SCHEMA_SERVICE)) {
  SchemaService.prototype.attributesDefinitionFor = function ({
    type
  }) {
    deprecate(`Use \`schema.fields({ type })\` instead of \`schema.attributesDefinitionFor({ type })\``, false, {
      id: 'ember-data:schema-service-updates',
      until: '6.0',
      for: 'ember-data',
      since: {
        available: '4.13',
        enabled: '5.4'
      }
    });
    const schema = this._schemas.get(type);
    if (!schema) {
      throw new Error(`No schema defined for ${type}`);
    }
    return schema.attributes;
  };
  SchemaService.prototype.relationshipsDefinitionFor = function ({
    type
  }) {
    deprecate(`Use \`schema.fields({ type })\` instead of \`schema.relationshipsDefinitionFor({ type })\``, false, {
      id: 'ember-data:schema-service-updates',
      until: '6.0',
      for: 'ember-data',
      since: {
        available: '4.13',
        enabled: '5.4'
      }
    });
    const schema = this._schemas.get(type);
    if (!schema) {
      throw new Error(`No schema defined for ${type}`);
    }
    return schema.relationships;
  };
  SchemaService.prototype.doesTypeExist = function (type) {
    deprecate(`Use \`schema.hasResource({ type })\` instead of \`schema.doesTypeExist(type)\``, false, {
      id: 'ember-data:schema-service-updates',
      until: '6.0',
      for: 'ember-data',
      since: {
        available: '4.13',
        enabled: '5.4'
      }
    });
    return this._schemas.has(type);
  };
}

/**
 * When we finalize a resource, we walk its traits and apply their fields
 * to the resource's fields.
 *
 * Traits are applied left-to-right, with traits of traits being applied in the same
 * way. Thus for the most part, application of traits is a post-order graph traversal
 * problem.
 *
 * A trait is only ever processed once. If multiple traits (A, B, C) have the same
 * trait (D) as a dependency, D will be included only once when first encountered by
 * A.
 *
 * If a cycle exists such that trait A has trait B which has Trait A, trait A will
 * be applied *after* trait B in production. In development a cycle error will be thrown.
 *
 * Fields are finalized on a "last wins principle". Thus traits appearing higher in
 * the tree and further to the right of a traits array take precedence, with the
 * resource's fields always being applied last and winning out.
 */
function finalizeResource(schema, resource) {
  const fields = new Map();
  const seen = new Set();
  for (const traitName of resource.traits) {
    const trait = schema._traits.get(traitName);
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`The trait ${traitName} MUST be supplied before the resource ${resource.original.type} can be finalized for use.`);
      }
    })(trait) : {};
    walkTrait(schema, trait, fields, seen, resource.original.type, macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? [] : null);
  }
  mergeMap(fields, resource.fields);
  resource.fields = fields;
  resource.cacheFields = getCacheFields(resource);
  resource.finalized = true;
}
function getCacheFields(resource) {
  const {
    fields
  } = resource;
  const cacheFields = new Map();
  for (const [key, value] of fields) {
    if (isNonIdentityCacheableField(value)) {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`The sourceKey '${value.sourceKey}' for the field '${key}' on ${resource.original.type} is invalid because it matches the name of an existing field`);
        }
      })(!value.sourceKey || value.sourceKey === key || !fields.has(value.sourceKey)) : {};
      const cacheKey = getFieldCacheKeyStrict(value);
      cacheFields.set(cacheKey, value);
    }
  }
  return cacheFields;
}
function walkTrait(schema, trait, fields, seen, type, debugPath) {
  if (seen.has(trait)) {
    // if the trait is in the current path, we throw a cycle error in dev.
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      if (debugPath.includes(trait.name)) {
        throw new Error(`CycleError: The Trait '${trait.name}' utilized by the Resource '${type}' includes the following circular reference "${debugPath.join(' > ')} > ${trait.name}"`);
      }
    }
    return;
  }
  const ownPath = macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? [...debugPath, trait.name] : null;

  // immediately mark as seen to prevent cycles
  // further down the tree from looping back
  seen.add(trait);

  // first apply any child traits
  if (trait.traits?.length) {
    for (const traitName of trait.traits) {
      const subtrait = schema._traits.get(traitName);
      if (macroCondition(getGlobalConfig().WarpDrive.features.ENFORCE_STRICT_RESOURCE_FINALIZATION)) {
        macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
          if (!test) {
            throw new Error(`The trait ${traitName} used by the trait ${trait.name} MUST be supplied before the resource ${type} can be finalized for use.`);
          }
        })(subtrait) : {};
      } else {
        warn(`The trait ${traitName} used by the trait ${trait.name} MUST be supplied before the resource ${type} can be finalized for use.`, !!subtrait, {
          id: 'warp-drive:missing-trait-schema-for-resource'
        });
      }
      if (!subtrait) continue;
      walkTrait(schema, subtrait, fields, seen, type, ownPath);
    }
  }

  // then apply our own fields
  mergeMap(fields, trait.fields);
}
function mergeMap(base, toApply) {
  for (const [key, value] of toApply) {
    base.set(key, value);
  }
}

// Lazily close over fetch to avoid breaking Mirage
const _fetch = typeof fetch !== 'undefined' ? (...args) => fetch(...args) : typeof FastBoot !== 'undefined' ? (...args) => FastBoot.require('node-fetch')(...args) : () => {
  throw new Error('No Fetch Implementation Found');
};

// clones a response in a way that should still
// allow it to stream
function cloneResponse(response, overrides) {
  const props = cloneResponseProperties(response);
  return new Response(response.body, Object.assign(props, overrides));
}
let IS_MAYBE_MIRAGE = () => false;
if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
  IS_MAYBE_MIRAGE = () => Boolean(typeof window !== 'undefined' && (window.server?.pretender || window.fetch.toString().replace(/\s+/g, '') !== 'function fetch() { [native code] }'.replace(/\s+/g, '')));
}
const MUTATION_OPS = new Set(['updateRecord', 'createRecord', 'deleteRecord']);
const ERROR_STATUS_CODE_FOR = new Map([[400, 'Bad Request'], [401, 'Unauthorized'], [402, 'Payment Required'], [403, 'Forbidden'], [404, 'Not Found'], [405, 'Method Not Allowed'], [406, 'Not Acceptable'], [407, 'Proxy Authentication Required'], [408, 'Request Timeout'], [409, 'Conflict'], [410, 'Gone'], [411, 'Length Required'], [412, 'Precondition Failed'], [413, 'Payload Too Large'], [414, 'URI Too Long'], [415, 'Unsupported Media Type'], [416, 'Range Not Satisfiable'], [417, 'Expectation Failed'], [419, 'Page Expired'], [420, 'Enhance Your Calm'], [421, 'Misdirected Request'], [422, 'Unprocessable Entity'], [423, 'Locked'], [424, 'Failed Dependency'], [425, 'Too Early'], [426, 'Upgrade Required'], [428, 'Precondition Required'], [429, 'Too Many Requests'], [430, 'Request Header Fields Too Large'], [431, 'Request Header Fields Too Large'], [450, 'Blocked By Windows Parental Controls'], [451, 'Unavailable For Legal Reasons'], [500, 'Internal Server Error'], [501, 'Not Implemented'], [502, 'Bad Gateway'], [503, 'Service Unavailable'], [504, 'Gateway Timeout'], [505, 'HTTP Version Not Supported'], [506, 'Variant Also Negotiates'], [507, 'Insufficient Storage'], [508, 'Loop Detected'], [509, 'Bandwidth Limit Exceeded'], [510, 'Not Extended'], [511, 'Network Authentication Required']]);

/**
 * ```ts
 * import { Fetch } from '@warp-drive/core';
 * ```
 *
 * A basic Fetch Handler which converts a request into a
 * `fetch` call presuming the response to be `json`.
 *
 * ```ts
 * import { RequestManager, Fetch } from '@warp-drive/core';
 *
 * const manager = new RequestManager()
 *   .use([Fetch]);
 * ```
 *
 * @public
 */
const Fetch = {
  async request(context) {
    let response;
    try {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error('The Fetch handler expects the request to have a URL, none was provided.');
        }
      })(context.request.url && typeof context.request.url === 'string') : {};
      response = await _fetch(context.request.url, context.request);
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') {
        e.statusText = 'Aborted';
        e.status = 20;
        e.isRequestError = true;
      } else {
        e.statusText = 'Unknown Network Error';
        e.status = 0;
        if (!(e instanceof DOMException)) {
          e.code = 0;
        }
        e.isRequestError = true;
      }
      throw e;
    }
    const isError = !response.ok || response.status >= 400;
    const op = context.request.op;
    const isMutationOp = Boolean(op && MUTATION_OPS.has(op));
    if (!isError && !isMutationOp && response.status !== 204 && !response.headers.has('date')) {
      if (IS_MAYBE_MIRAGE()) {
        response.headers.set('date', new Date().toUTCString());
      } else {
        const headers = new Headers(response.headers);
        headers.set('date', new Date().toUTCString());
        response = cloneResponse(response, {
          headers
        });
      }
    }
    context.setResponse(response);
    if (response.status === 204 || context.request.method === 'HEAD') {
      return null;
    }
    let text = '';
    // if we are in a mirage context, we cannot support streaming
    if (IS_MAYBE_MIRAGE()) {
      text = await response.text();
    } else {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let isStreaming = context.hasRequestedStream;
      let stream = isStreaming ? new TransformStream() : null;
      let writer = stream?.writable.getWriter();
      if (isStreaming) {
        // Listen for the abort event on the AbortSignal
        context.request.signal?.addEventListener('abort', () => {
          if (!isStreaming) {
            return;
          }
          void stream.writable.abort('Request Aborted');
          void stream.readable.cancel('Request Aborted');
        });
        context.setStream(stream.readable);
      }
      while (true) {
        // we manually read the stream instead of using `response.json()`
        // or `response.text()` because if we need to stream the body
        // we need to be able to pass the stream along efficiently.
        const {
          done,
          value
        } = await reader.read();
        if (done) {
          if (isStreaming) {
            isStreaming = false;
            await writer.ready;
            await writer.close();
          }
          break;
        }
        text += decoder.decode(value, {
          stream: true
        });

        // if we are streaming, we want to pass the stream along
        if (isStreaming) {
          await writer.ready;
          await writer.write(value);
        } else if (context.hasRequestedStream) {
          const encode = new TextEncoder();
          isStreaming = true;
          stream = new TransformStream();
          // Listen for the abort event on the AbortSignal
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          context.request.signal?.addEventListener('abort', () => {
            if (!isStreaming) {
              return;
            }
            void stream.writable.abort('Request Aborted');
            void stream.readable.cancel('Request Aborted');
          });
          context.setStream(stream.readable);
          writer = stream.writable.getWriter();
          await writer.ready;
          await writer.write(encode.encode(text));
          await writer.ready;
          await writer.write(value);
        }
      }
      if (isStreaming) {
        isStreaming = false;
        await writer.ready;
        await writer.close();
      }
    }
    // if we are an error, we will want to throw
    if (isError) {
      let errorPayload;
      try {
        errorPayload = JSON.parse(text);
      } catch {
        // void;
      }
      // attempt errors discovery
      const errors = Array.isArray(errorPayload) ? errorPayload : isDict(errorPayload) && Array.isArray(errorPayload.errors) ? errorPayload.errors : null;
      const statusText = response.statusText || ERROR_STATUS_CODE_FOR.get(response.status) || 'Unknown Request Error';
      const msg = `[${response.status} ${statusText}] ${context.request.method ?? 'GET'} (${response.type}) - ${response.url}`;
      const error = errors ? new AggregateError(errors, msg) : new Error(msg);
      error.status = response.status;
      error.statusText = statusText;
      error.isRequestError = true;
      error.code = error.status;
      error.name = error.statusText.replaceAll(' ', '') + 'Error';
      error.content = errorPayload;
      throw error;
    } else {
      return JSON.parse(text);
    }
  }
};
function isDict(v) {
  return v !== null && typeof v === 'object';
}
class RequestManager {
  /** @internal */

  /** @internal */

  /**
   * A map of pending requests from request.id to their
   * associated CacheHandler promise.
   *
   * This queue is managed by the CacheHandler
   *
   * @internal
   */

  /** @internal */

  constructor(options) {
    Object.assign(this, options);
    this._pending = new Map();
    this._deduped = new Map();
    this._handlers = [];
  }

  /**
   * Register a handler to use for primary cache intercept.
   *
   * Only one such handler may exist. If using the same
   * RequestManager as the Store instance the Store
   * registers itself as a Cache handler.
   *
   * @public
   */
  useCache(cacheHandler) {
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      if (this._hasCacheHandler) {
        throw new Error(`\`RequestManager.useCache(<handler>)\` May only be invoked once.`);
      }
      if (Object.isFrozen(this._handlers)) {
        throw new Error(`\`RequestManager.useCache(<handler>)\` May only be invoked prior to any request having been made.`);
      }
      this._hasCacheHandler = true;
    }
    cacheHandler[IS_CACHE_HANDLER] = true;
    this._handlers.unshift(cacheHandler);
    return this;
  }

  /**
   * Register handler(s) to use when a request is issued.
   *
   * Handlers will be invoked in the order they are registered.
   * Each Handler is given the opportunity to handle the request,
   * curry the request, or pass along a modified request.
   *
   * @public
   */
  use(newHandlers) {
    const handlers = this._handlers;
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      if (Object.isFrozen(handlers)) {
        throw new Error(`Cannot add a Handler to a RequestManager after a request has been made`);
      }
      if (!Array.isArray(newHandlers)) {
        throw new Error(`\`RequestManager.use(<Handler[]>)\` expects an array of handlers, but was called with \`${typeof newHandlers}\``);
      }
      newHandlers.forEach((handler, index) => {
        if (!handler || typeof handler !== 'function' && typeof handler !== 'object' || typeof handler.request !== 'function') {
          throw new Error(`\`RequestManager.use(<Handler[]>)\` expected to receive an array of handler objects with request methods, by the handler at index ${index} does not conform.`);
        }
      });
    }
    handlers.push(...newHandlers);
    return this;
  }

  /**
   * Issue a Request.
   *
   * Returns a Future that fulfills with a StructuredDocument
   *
   * @public
   */
  request(request) {
    const handlers = this._handlers;
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      if (!Object.isFrozen(handlers)) {
        Object.freeze(handlers);
      }
      assertValidRequest(request, true);
    }
    const controller = request.controller || new AbortController();
    if (request.controller) {
      delete request.controller;
    }
    const requestId = peekUniversalTransient('REQ_ID') ?? 0;
    setUniversalTransient('REQ_ID', requestId + 1);
    const context = {
      controller,
      response: null,
      stream: null,
      hasRequestedStream: false,
      id: requestId,
      identifier: null,
      requester: request[EnableHydration] && request.store ? request.store : this
    };
    const promise = executeNextHandler(handlers, request, 0, context);

    // the cache handler will set the result of the request synchronously
    // if it is able to fulfill the request from the cache
    const cacheResult = getRequestResult(requestId);
    if (macroCondition(getGlobalConfig().WarpDrive.env.TESTING)) {
      if (!request.disableTestWaiter) {
        const newPromise = waitFor(promise);
        const finalPromise = upgradePromise(newPromise.then(result => {
          setPromiseResult(finalPromise, {
            isError: false,
            result
          });
          clearRequestResult(requestId);
          return result;
        }, error => {
          setPromiseResult(finalPromise, {
            isError: true,
            result: error
          });
          clearRequestResult(requestId);
          throw error;
        }), promise);
        if (cacheResult) {
          setPromiseResult(finalPromise, cacheResult);
        }
        return finalPromise;
      }
    }

    // const promise1 = store.request(myRequest);
    // const promise2 = store.request(myRequest);
    // promise1 === promise2; // false
    // either we need to make promise1 === promise2, or we need to make sure that
    // we need to have a way to key from request to result
    // such that we can lookup the result here and return it if it exists
    const finalPromise = upgradePromise(promise.then(result => {
      setPromiseResult(finalPromise, {
        isError: false,
        result
      });
      clearRequestResult(requestId);
      return result;
    }, error => {
      setPromiseResult(finalPromise, {
        isError: true,
        result: error
      });
      clearRequestResult(requestId);
      throw error;
    }), promise);
    if (cacheResult) {
      setPromiseResult(finalPromise, cacheResult);
    }
    return finalPromise;
  }

  /**
   * This method exists so that the RequestManager can be created
   * can be created by container/factory systems that expect to
   * call a static `create` method to instantiate the class.
   *
   * Using `new RequestManager()` directly is preferred.
   *
   * @private
   */
  static create(options) {
    return new this(options);
  }
}

/**
 * This type exists for internal use only for
 * where intimate contracts still exist either for
 * the Test Suite or for Legacy code.
 *
 * @private
 */

/**
 * @module
 * @mergeModuleWith <project>
 */

if (macroCondition(getGlobalConfig().WarpDrive.env.TESTING)) {
  // @ts-expect-error adding to globalThis
  globalThis.setWarpDriveLogging = setLogging;

  // @ts-expect-error adding to globalThis
  globalThis.getWarpDriveRuntimeConfig = getRuntimeConfig;
}

/**
 * Options for setting up a Store instance with `useRecommendedStore`.
 */

/**
 * Creates a configured Store class with recommended defaults
 * for schema handling, reactivity, caching, and request management.
 *
 * ```ts
 * import { useRecommendedStore } from '@warp-drive/core';
 * import { JSONAPICache } from '@warp-drive/json-api';
 *
 * export const Store = useRecommendedStore({
 *   cache: JSONAPICache,
 *   schemas: [],
 * });
 * ```
 */
function useRecommendedStore(options, StoreKlass = Store) {
  return class AppStore extends StoreKlass {
    requestManager = new RequestManager().use([...(options.handlers ?? []), Fetch]).useCache(CacheHandler);
    lifetimes = options.policy ?? new DefaultCachePolicy({
      apiCacheHardExpires: 15 * 60 * 1000,
      // 15 minutes
      apiCacheSoftExpires: 1 * 30 * 1000,
      // 30 seconds
      constraints: {
        headers: {
          'X-WarpDrive-Expires': true,
          'Cache-Control': true,
          Expires: true
        }
      }
    });
    createSchemaService() {
      const schema = new SchemaService();
      registerDerivations(schema);
      if (options.schemas) schema.registerResources(options.schemas);
      if (options.traits) {
        for (const trait of options.traits) {
          schema.registerTrait(trait);
        }
      }
      if (options.derivations) {
        for (const derivation of options.derivations) {
          schema.registerDerivation(derivation);
        }
      }
      if (options.transformations) {
        for (const transformation of options.transformations) {
          schema.registerTransformation(transformation);
        }
      }
      if (options.hashFns) {
        for (const hashFn of options.hashFns) {
          schema.registerHashFn(hashFn);
        }
      }
      if (options.CAUTION_MEGA_DANGER_ZONE_extensions) {
        for (const extension of options.CAUTION_MEGA_DANGER_ZONE_extensions) {
          schema.CAUTION_MEGA_DANGER_ZONE_registerExtension(extension);
        }
      }
      return schema;
    }
    createCache(capabilities) {
      // eslint-disable-next-line new-cap
      return new options.cache(capabilities);
    }
    instantiateRecord(key, createArgs) {
      return instantiateRecord(this, key, createArgs);
    }
    teardownRecord(record) {
      return teardownRecord(record);
    }
  };
}
export { useRecommendedStore as A, setIdentifierGenerationMethod as B, CacheHandler as C, setIdentifierUpdateMethod as D, setIdentifierForgetMethod as E, Fetch as F, setIdentifierResetMethod as G, setKeyInfoForResource as H, RecordArrayManager as R, Store as S, _clearCaches as _, isRequestKey as a, coerceId as b, constructResource as c, assertPrivateStore as d, ensureStringId as e, fastPush as f, isPrivateStore as g, assertPrivateCapabilities as h, isResourceKey as i, setRecordIdentifier as j, StoreMap as k, createLegacyManyArray as l, log as m, normalizeModelName as n, logGroup as o, checkout as p, instantiateRecord as q, recordIdentifierFor as r, storeFor as s, teardownRecord as t, SchemaService as u, fromIdentity as v, withDefaults as w, registerDerivations as x, commit as y, RequestManager as z };