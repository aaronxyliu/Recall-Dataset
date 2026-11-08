import { deprecate } from '@ember/debug';
import { LRUCache } from './utils/string.js';
import { macroCondition, getGlobalConfig } from '@embroider/macros';

/**
 * Interface of a parsed Cache-Control header value.
 *
 * - [MDN Cache-Control Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control)
 */
const NUMERIC_KEYS = new Set(['max-age', 's-maxage', 'stale-if-error', 'stale-while-revalidate']);

/**
 *  Parses a string Cache-Control header value into an object with the following structure:
 *
 * ```ts
 * interface CacheControlValue {
 *   immutable?: boolean;
 *   'max-age'?: number;
 *   'must-revalidate'?: boolean;
 *   'must-understand'?: boolean;
 *   'no-cache'?: boolean;
 *   'no-store'?: boolean;
 *   'no-transform'?: boolean;
 *   'only-if-cached'?: boolean;
 *   private?: boolean;
 *   'proxy-revalidate'?: boolean;
 *   public?: boolean;
 *   's-maxage'?: number;
 *   'stale-if-error'?: number;
 *   'stale-while-revalidate'?: number;
 * }
 * ```
 *
 * See also {@link CacheControlValue} and [Response Directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control#response_directives)
 *
 * @public
 */
function parseCacheControl(header) {
  return CACHE_CONTROL_CACHE.get(header);
}
const CACHE_CONTROL_CACHE = new LRUCache(header => {
  let key = '';
  let value = '';
  let isParsingKey = true;
  const cacheControlValue = {};
  for (let i = 0; i < header.length; i++) {
    const char = header.charAt(i);
    if (char === ',') {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`Invalid Cache-Control value, expected a value`);
        }
      })(!isParsingKey || !NUMERIC_KEYS.has(key)) : {};
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`Invalid Cache-Control value, expected a value after "=" but got ","`);
        }
      })(i === 0 || header.charAt(i - 1) !== '=') : {};
      isParsingKey = true;
      // @ts-expect-error TS incorrectly thinks that optional keys must have a type that includes undefined
      cacheControlValue[key] = NUMERIC_KEYS.has(key) ? parseCacheControlValue(value) : true;
      key = '';
      value = '';
      continue;
    } else if (char === '=') {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`Invalid Cache-Control value, expected a value after "="`);
        }
      })(i + 1 !== header.length) : {};
      isParsingKey = false;
    } else if (char === ' ' || char === `\t` || char === `\n`) {
      continue;
    } else if (isParsingKey) {
      key += char;
    } else {
      value += char;
    }
    if (i === header.length - 1) {
      // @ts-expect-error TS incorrectly thinks that optional keys must have a type that includes undefined
      cacheControlValue[key] = NUMERIC_KEYS.has(key) ? parseCacheControlValue(value) : true;
    }
  }
  return cacheControlValue;
}, 200);
function parseCacheControlValue(stringToParse) {
  const parsedValue = Number.parseInt(stringToParse);
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Invalid Cache-Control value, expected a number but got - ${stringToParse}`);
    }
  })(!Number.isNaN(parsedValue)) : {};
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Invalid Cache-Control value, expected a number greater than 0 but got - ${stringToParse}`);
    }
  })(parsedValue >= 0) : {};
  if (Number.isNaN(parsedValue) || parsedValue < 0) {
    return 0;
  }
  return parsedValue;
}
function isExpired(cacheKey, request, config) {
  const {
    constraints
  } = config;
  if (constraints?.isExpired) {
    const result = constraints.isExpired(request);
    if (result !== null) {
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_CACHE_POLICY)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_CACHE_POLICY || globalThis.getWarpDriveRuntimeConfig().debug.LOG_CACHE_POLICY) {
          // eslint-disable-next-line no-console
          console.log(`CachePolicy: ${cacheKey.lid} is ${result ? 'EXPIRED' : 'NOT expired'} because constraints.isExpired returned ${result}`);
        }
      }
      return result;
    }
  }
  const {
    headers
  } = request.response;
  if (!headers) {
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_CACHE_POLICY)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_CACHE_POLICY || globalThis.getWarpDriveRuntimeConfig().debug.LOG_CACHE_POLICY) {
        // eslint-disable-next-line no-console
        console.log(`CachePolicy: ${cacheKey.lid} is EXPIRED because no headers were provided`);
      }
    }

    // if we have no headers then both the headers based expiration
    // and the time based expiration will be considered expired
    return true;
  }

  // check for X-WarpDrive-Expires
  const now = Date.now();
  const date = headers.get('Date');
  if (constraints?.headers) {
    if (constraints.headers['X-WarpDrive-Expires']) {
      const xWarpDriveExpires = headers.get('X-WarpDrive-Expires');
      if (xWarpDriveExpires) {
        const expirationTime = new Date(xWarpDriveExpires).getTime();
        const result = now >= expirationTime;
        if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_CACHE_POLICY)) {
          if (getGlobalConfig().WarpDrive.debug.LOG_CACHE_POLICY || globalThis.getWarpDriveRuntimeConfig().debug.LOG_CACHE_POLICY) {
            // eslint-disable-next-line no-console
            console.log(`CachePolicy: ${cacheKey.lid} is ${result ? 'EXPIRED' : 'NOT expired'} because the time set by X-WarpDrive-Expires header is ${result ? 'in the past' : 'in the future'}`);
          }
        }
        return result;
      }
    }

    // check for Cache-Control
    if (constraints.headers['Cache-Control']) {
      const cacheControl = headers.get('Cache-Control');
      const age = headers.get('Age');
      if (cacheControl && age && date) {
        const cacheControlValue = parseCacheControl(cacheControl);

        // max-age and s-maxage are stored in
        const maxAge = cacheControlValue['max-age'] || cacheControlValue['s-maxage'];
        if (maxAge) {
          // age is stored in seconds
          const ageValue = parseInt(age, 10);
          macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
            if (!test) {
              throw new Error(`Invalid Cache-Control value, expected a number but got - ${age}`);
            }
          })(!Number.isNaN(ageValue)) : {};
          macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
            if (!test) {
              throw new Error(`Invalid Cache-Control value, expected a number greater than 0 but got - ${age}`);
            }
          })(ageValue >= 0) : {};
          if (!Number.isNaN(ageValue) && ageValue >= 0) {
            const dateValue = new Date(date).getTime();
            const expirationTime = dateValue + (maxAge - ageValue) * 1000;
            const result = now >= expirationTime;
            if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_CACHE_POLICY)) {
              if (getGlobalConfig().WarpDrive.debug.LOG_CACHE_POLICY || globalThis.getWarpDriveRuntimeConfig().debug.LOG_CACHE_POLICY) {
                // eslint-disable-next-line no-console
                console.log(`CachePolicy: ${cacheKey.lid} is ${result ? 'EXPIRED' : 'NOT expired'} because the time set by Cache-Control header is ${result ? 'in the past' : 'in the future'}`);
              }
            }
            return result;
          }
        }
      }
    }

    // check for Expires
    if (constraints.headers.Expires) {
      const expires = headers.get('Expires');
      if (expires) {
        const expirationTime = new Date(expires).getTime();
        const result = now >= expirationTime;
        if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_CACHE_POLICY)) {
          if (getGlobalConfig().WarpDrive.debug.LOG_CACHE_POLICY || globalThis.getWarpDriveRuntimeConfig().debug.LOG_CACHE_POLICY) {
            // eslint-disable-next-line no-console
            console.log(`CachePolicy: ${cacheKey.lid} is ${result ? 'EXPIRED' : 'NOT expired'} because the time set by Expires header is ${result ? 'in the past' : 'in the future'}`);
          }
        }
        return result;
      }
    }
  }

  // check for Date
  if (!date) {
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_CACHE_POLICY)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_CACHE_POLICY || globalThis.getWarpDriveRuntimeConfig().debug.LOG_CACHE_POLICY) {
        // eslint-disable-next-line no-console
        console.log(`CachePolicy: ${cacheKey.lid} is EXPIRED because no Date header was provided`);
      }
    }
    return true;
  }
  let expirationTime = config.apiCacheHardExpires;
  if (macroCondition(getGlobalConfig().WarpDrive.env.TESTING)) {
    if (!config.disableTestOptimization) {
      expirationTime = config.apiCacheSoftExpires;
    }
  }
  const time = new Date(date).getTime();
  const deadline = time + expirationTime;
  const result = now >= deadline;
  if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_CACHE_POLICY)) {
    if (getGlobalConfig().WarpDrive.debug.LOG_CACHE_POLICY || globalThis.getWarpDriveRuntimeConfig().debug.LOG_CACHE_POLICY) {
      // eslint-disable-next-line no-console
      console.log(`CachePolicy: ${cacheKey.lid} is ${result ? 'EXPIRED' : 'NOT expired'} because the apiCacheHardExpires time since the response's Date header is ${result ? 'in the past' : 'in the future'}`);
    }
  }
  return result;
}

/**
 * The constraint options for {@link PolicyConfig.constraints}
 */

/**
 * The configuration options for the {@link DefaultCachePolicy}
 *
 * ```ts [app/services/store.ts]
 * import { Store } from '@warp-drive/core';
 * import { DefaultCachePolicy } from '@warp-drive/core/store'; // [!code focus]
 *
 * export default class AppStore extends Store {
 *   lifetimes = new DefaultCachePolicy({ // [!code focus:3]
 *     // ... PolicyConfig Settings ... //
 *   });
 * }
 * ```
 *
 */

/**
 * A basic {@link CachePolicy} that can be added to the Store service.
 *
 * ```ts [app/services/store.ts]
 * import { Store } from '@warp-drive/core';
 * import { DefaultCachePolicy } from '@warp-drive/core/store'; // [!code focus]
 *
 * export default class AppStore extends Store {
 *   lifetimes = new DefaultCachePolicy({ // [!code focus:5]
 *     apiCacheSoftExpires: 30_000,
 *     apiCacheHardExpires: 60_000,
 *     // ... Other PolicyConfig Settings ... //
 *   });
 * }
 * ```
 *
 * :::tip 💡 TIP
 * Date headers do not have millisecond precision, so expiration times should
 * generally be larger than 1000ms.
 * :::
 *
 * See also {@link PolicyConfig} for configuration options.
 *
 * ### The Mechanics
 *
 * This policy determines staleness based on various configurable constraints falling back to a simple
 * check of the time elapsed since the request was last received from the API using the `date` header
 * from the last response.
 *
 * :::tip 💡 TIP
 * The {@link Fetch} handler provided by `@warp-drive/core` will automatically
 * add the `date` header to responses if it is not present.
 * :::
 *
 * - For manual override of reload see {@link CacheOptions.reload | cacheOptions.reload}
 * - For manual override of background reload see {@link CacheOptions.backgroundReload | cacheOptions.backgroundReload}
 *
 * In order expiration is determined by:
 *
 * ```md
 * Is explicitly invalidated by `cacheOptions.reload`
 *   ↳ (if falsey) if the request has been explicitly invalidated
 *      since the last request (see Automatic Invalidation below)
 *   ↳ (if false) (If Active) isExpired function
 *   ↳ (if null) (If Active) X-WarpDrive-Expires header
 *   ↳ (if null) (If Active) Cache-Control header
 *   ↳ (if null) (If Active) Expires header
 *   ↳ (if null) Date header + apiCacheHardExpires < current time
 *
 *   -- <if above is false, a background request is issued if> --
 *
 *   ↳ is invalidated by `cacheOptions.backgroundReload`
 *   ↳ (if falsey) Date header + apiCacheSoftExpires < current time
 * ```
 *
 * ### Automatic Invalidation / Entanglement
 *
 * It also invalidates any request with an {@link RequestInfo.op | OpCode} of `"query"`
 * for which {@link CacheOptions.types | cacheOptions.types} was provided
 * when a request with an `OpCode` of `"createRecord"` is successful and also includes
 * a matching type in its own `cacheOptions.types` array.

 * :::tip 💡 TIP
 * Abstracting this behavior via builders is recommended to ensure consistency.
 * :::
 *
 * ### Testing
 *
 * In Testing environments:
 *
 * - `apiCacheSoftExpires` will always be `false`
 * - `apiCacheHardExpires` will use the `apiCacheSoftExpires` value.
 *
 * This helps reduce flakiness and produce predictably rendered results in test suites.
 *
 * Requests that specifically set `cacheOptions.backgroundReload = true` will
 * still be background reloaded in tests.
 *
 * This behavior can be opted out of by setting `disableTestOptimization = true`
 * in the policy config.
 *
 * @public
 */
class DefaultCachePolicy {
  /**
   * @internal
   */

  /**
   * @internal
   */

  /**
   * @internal
   */
  _getStore(store) {
    let set = this._stores.get(store);
    if (!set) {
      set = {
        invalidated: new Set(),
        types: new Map()
      };
      this._stores.set(store, set);
    }
    return set;
  }
  constructor(config) {
    this._stores = new WeakMap();
    const _config = arguments.length === 1 ? config : arguments[1];
    deprecate(`Passing a Store to the CachePolicy is deprecated, please pass only a config instead.`, arguments.length === 1, {
      id: 'ember-data:request-utils:lifetimes-service-store-arg',
      since: {
        enabled: '5.4',
        available: '4.13'
      },
      for: '@ember-data/request-utils',
      until: '6.0'
    });
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You must pass a config to the CachePolicy`);
      }
    })(_config) : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You must pass a apiCacheSoftExpires to the CachePolicy`);
      }
    })(typeof _config.apiCacheSoftExpires === 'number') : {};
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You must pass a apiCacheHardExpires to the CachePolicy`);
      }
    })(typeof _config.apiCacheHardExpires === 'number') : {};
    this.config = _config;
  }

  /**
   * Invalidate a request by its CacheKey for the given store instance.
   *
   * While the store argument may seem redundant, the CachePolicy
   * is designed to be shared across multiple stores / forks
   * of the store.
   *
   * ```ts
   * store.lifetimes.invalidateRequest(store, cacheKey);
   * ```
   *
   * @public
   */
  invalidateRequest(cacheKey, store) {
    this._getStore(store).invalidated.add(cacheKey);
  }

  /**
   * Invalidate all requests associated to a specific type
   * for a given store instance.
   *
   * While the store argument may seem redundant, the CachePolicy
   * is designed to be shared across multiple stores / forks
   * of the store.
   *
   * This invalidation is done automatically when using this service
   * for both the {@link CacheHandler} and the [NetworkHandler](/api/@warp-drive/legacy/compat/variables/LegacyNetworkHandler).
   *
   * ```ts
   * store.lifetimes.invalidateRequestsForType(store, 'person');
   * ```
   *
   * @public
   */
  invalidateRequestsForType(type, store) {
    const storeCache = this._getStore(store);
    const set = storeCache.types.get(type);
    const notifications = store.notifications;
    if (set) {
      // TODO batch notifications
      set.forEach(id => {
        storeCache.invalidated.add(id);
        // @ts-expect-error
        notifications.notify(id, 'invalidated', null);
      });
    }
  }

  /**
   * Invoked when a request has been fulfilled from the configured request handlers.
   * This is invoked by the CacheHandler for both foreground and background requests
   * once the cache has been updated.
   *
   * Note, this is invoked by the {@link CacheHandler} regardless of whether
   * the request has a cache-key.
   *
   * This method should not be invoked directly by consumers.
   *
   * @public
   */
  didRequest(request, response, cacheKey, store) {
    // if this is a successful createRecord request, invalidate the cacheKey for the type
    if (request.op === 'createRecord') {
      const statusNumber = response?.status ?? 0;
      if (statusNumber >= 200 && statusNumber < 400) {
        const types = new Set(request.records?.map(r => r.type));
        const additionalTypes = request.cacheOptions?.types;
        additionalTypes?.forEach(type => {
          types.add(type);
        });
        types.forEach(type => {
          this.invalidateRequestsForType(type, store);
        });
      }

      // add this document's cacheKey to a map for all associated types
      // it is recommended to only use this for queries
    } else if (cacheKey && request.cacheOptions?.types?.length) {
      const storeCache = this._getStore(store);
      request.cacheOptions?.types.forEach(type => {
        const set = storeCache.types.get(type);
        if (set) {
          set.add(cacheKey);
          storeCache.invalidated.delete(cacheKey);
        } else {
          storeCache.types.set(type, new Set([cacheKey]));
        }
      });
    }
  }

  /**
   * Invoked to determine if the request may be fulfilled from cache
   * if possible.
   *
   * Note, this is only invoked by the {@link CacheHandler} if the request has
   * a cache-key.
   *
   * If no cache entry is found or the entry is hard expired,
   * the request will be fulfilled from the configured request handlers
   * and the cache will be updated before returning the response.
   *
   * @public
   * @return true if the request is considered hard expired
   */
  isHardExpired(cacheKey, store) {
    // if we are explicitly invalidated, we are hard expired
    const storeCache = this._getStore(store);
    if (storeCache.invalidated.has(cacheKey)) {
      return true;
    }
    const cache = store.cache;
    const cached = cache.peekRequest(cacheKey);
    if (!cached?.response) {
      if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_CACHE_POLICY)) {
        if (getGlobalConfig().WarpDrive.debug.LOG_CACHE_POLICY || globalThis.getWarpDriveRuntimeConfig().debug.LOG_CACHE_POLICY) {
          // eslint-disable-next-line no-console
          console.log(`CachePolicy: ${cacheKey.lid} is EXPIRED because no cache entry was found`);
        }
      }
      return true;
    }
    return isExpired(cacheKey, cached, this.config);
  }

  /**
   * Invoked if `isHardExpired` is false to determine if the request
   * should be update behind the scenes if cache data is already available.
   *
   * Note, this is only invoked by the {@link CacheHandler} if the request has
   * a cache-key.
   *
   * If true, the request will be fulfilled from cache while a backgrounded
   * request is made to update the cache via the configured request handlers.
   *
   * @public
   * @return true if the request is considered soft expired
   */
  isSoftExpired(cacheKey, store) {
    if (macroCondition(getGlobalConfig().WarpDrive.env.TESTING)) {
      if (!this.config.disableTestOptimization) {
        return false;
      }
    }
    const cache = store.cache;
    const cached = cache.peekRequest(cacheKey);
    if (cached?.response) {
      const date = cached.response.headers.get('date');
      if (!date) {
        if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_CACHE_POLICY)) {
          if (getGlobalConfig().WarpDrive.debug.LOG_CACHE_POLICY || globalThis.getWarpDriveRuntimeConfig().debug.LOG_CACHE_POLICY) {
            // eslint-disable-next-line no-console
            console.log(`CachePolicy: ${cacheKey.lid} is STALE because no date header was found`);
          }
        }
        return true;
      } else {
        const time = new Date(date).getTime();
        const now = Date.now();
        const deadline = time + this.config.apiCacheSoftExpires;
        const result = now >= deadline;
        if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_CACHE_POLICY)) {
          if (getGlobalConfig().WarpDrive.debug.LOG_CACHE_POLICY || globalThis.getWarpDriveRuntimeConfig().debug.LOG_CACHE_POLICY) {
            // eslint-disable-next-line no-console
            console.log(`CachePolicy: ${cacheKey.lid} is ${result ? 'STALE' : 'NOT stale'}. Expiration time: ${deadline}, now: ${now}`);
          }
        }
        return result;
      }
    }
    if (macroCondition(getGlobalConfig().WarpDrive.activeLogging.LOG_CACHE_POLICY)) {
      if (getGlobalConfig().WarpDrive.debug.LOG_CACHE_POLICY || globalThis.getWarpDriveRuntimeConfig().debug.LOG_CACHE_POLICY) {
        // eslint-disable-next-line no-console
        console.log(`CachePolicy: ${cacheKey.lid} is STALE because no cache entry was found`);
      }
    }
    return true;
  }
}
export { DefaultCachePolicy as D, parseCacheControl as p };