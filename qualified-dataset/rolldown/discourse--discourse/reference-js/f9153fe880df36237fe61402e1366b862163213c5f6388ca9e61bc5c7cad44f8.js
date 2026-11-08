import { macroCondition, getGlobalConfig } from '@embroider/macros';

// provided for additional debuggability
const DEBUG_CLIENT_ORIGINATED = Symbol('record-originated-on-client');
const DEBUG_KEY_TYPE = Symbol('key-type');
const DEBUG_STALE_CACHE_OWNER = Symbol('warpDriveStaleCache');
function ProdSymbol(str, debugStr) {
  return macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? Symbol(debugStr) : str;
}

// also present in production
const CACHE_OWNER = ProdSymbol('__$co', 'CACHE_OWNER');

/**
 * A referentially stable object with a unique string (lid) that can be used
 * as a reference to request data in the cache.
 *
 * Only requests that are assigned a RequestKey are retrievable/replayable from
 * the cache, though requests without RequestKeys may still update cache state.
 *
 * @public
 */

/** @deprecated use {@link RequestKey} */

/**
 * Used when an ResourceKey is known to be the stable version
 */

/**
 * Used when a ResourceKey was not created locally as part
 * of a call to store.createRecord
 *
 * Distinguishing between this ResourceKey and one for a client created
 * resource that was created with an ID is generally speaking not possible
 * at runtime, so anything with an ID typically narrows to this.
 */

/** @deprecated use {@link PersistedResourceKey} */

/**
 * Used when a ResourceKey was created locally
 * (by a call to store.createRecord).
 *
 * It is possible in rare circumstances to have a ResourceKey
 * that is not for a new record but does not have an ID. This would
 * happen if a user intentionally created one for use with a secondary-index
 * prior to the record having been fully loaded.
 */

/**
 * A referentially stable object with a unique string (lid) that can be used
 * as a reference to data in the cache.
 *
 * Every resource has a unique ResourceKey, and ResourceKeys may refer
 * to data that has never been loaded (for instance, in an async relationship).
 *
 * @public
 */

/** @deprecated use {@link ResourceKey} */

export { CACHE_OWNER, DEBUG_CLIENT_ORIGINATED, DEBUG_KEY_TYPE, DEBUG_STALE_CACHE_OWNER };