import { Store, RequestManager, Fetch, CacheHandler, recordIdentifierFor } from '@warp-drive/core';
import { SchemaService, registerDerivations, instantiateRecord as instantiateRecord$1, teardownRecord as teardownRecord$1 } from '@warp-drive/core/reactive';
import { DefaultCachePolicy } from '@warp-drive/core/store';
import { LegacyNetworkHandler, adapterFor, serializerFor, pushPayload, normalize, serializeRecord, cleanup } from './compat.js';
import { EmberArrayLikeExtension, EmberObjectArrayExtension, EmberObjectExtension } from './compat/extensions.js';
import '@ember/object';
import '@warp-drive/core/types/symbols';
import '@ember/debug';
import '@warp-drive/utilities/string';
import { macroCondition, getGlobalConfig } from '@embroider/macros';
import '@warp-drive/core/store/-private';
import { L as LEGACY_SUPPORT } from "./errors-Cz5KrzBk.js";
import "./schema-provider-DJCV_6AF.js";
import { i as instantiateRecord, t as teardownRecord, m as modelFor } from "./hooks-D6diaM34.js";
import { registerDerivations as registerDerivations$1, DelegatingSchemaService } from './model/migration-support.js';
import { F as FragmentExtension, a as FragmentArrayExtension, f as fragmentsModelFor } from "./model-for-CqXsIKws.js";
import { restoreDeprecatedStoreBehaviors } from './store.js';

/**
 * @module
 * @mergeModuleWith <project>
 */

/**
 * Use the legacy store with the given options.
 */
function useLegacyStore(options, StoreKlass = Store) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`If legacyRequests is true, linksMode must be false`);
    }
  })(!(options.linksMode && options.legacyRequests)) : {};
  // we extend the store to ensure we don't leak our prototype overrides to other stores below.
  class BaseKlass extends StoreKlass {}
  class LegacyConfiguredStore extends BaseKlass {
    requestManager = new RequestManager().use([options.linksMode ? null : LegacyNetworkHandler, ...(options.handlers ?? []), Fetch].filter(Boolean)).useCache(CacheHandler);
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
      // prepare for PolarisMode
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

      // Add support for LegacyMode ReactiveResource with Maximal coverage
      // for upgrading from 4.x
      registerDerivations$1(schema);
      schema.CAUTION_MEGA_DANGER_ZONE_registerExtension(EmberArrayLikeExtension);
      schema.CAUTION_MEGA_DANGER_ZONE_registerExtension(EmberObjectArrayExtension);
      schema.CAUTION_MEGA_DANGER_ZONE_registerExtension(EmberObjectExtension);

      // add support for fragments
      if (options.modelFragments) {
        schema.CAUTION_MEGA_DANGER_ZONE_registerExtension?.(FragmentExtension);
        schema.CAUTION_MEGA_DANGER_ZONE_registerExtension?.(FragmentArrayExtension);
      }

      // Add fallback for Models
      return new DelegatingSchemaService(this, schema);
    }
    createCache(capabilities) {
      // eslint-disable-next-line new-cap
      return new options.cache(capabilities);
    }
    instantiateRecord(key, createArgs) {
      if (this.schema.isDelegated(key)) {
        return instantiateRecord.call(this, key, createArgs);
      }
      return instantiateRecord$1(this, key, createArgs);
    }
    teardownRecord(record) {
      const key = recordIdentifierFor(record);
      if (this.schema.isDelegated(key)) {
        return teardownRecord.call(this, record);
      }
      const support = LEGACY_SUPPORT.get(key);
      if (support) {
        support.destroy();
        LEGACY_SUPPORT.delete(key);
      }
      return teardownRecord$1(record);
    }
    modelFor(type) {
      assertType(this.schema, type);
      // TODO I'm not sure this is right
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`modelFor should only be used to lookup legacy models when in linksMode: false`);
        }
      })(!options.linksMode || !this.schema.isDelegated({
        type
      })) : {};
      const klass =
      // prefer real models if present
      modelFor.call(this, type) || (
      // fallback to ShimModelClass specific to fragments if fragments support in use
      options.modelFragments ? fragmentsModelFor.call(this, type) : false) ||
      // fallback to ShimModelClass
      super.modelFor(type);
      return klass;
    }
    adapterFor(modelName, _allowMissing) {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`useLegacyStore was setup in linksMode. linksMode assumes that all requests have been migrated away from adapters and serializers.`);
        }
      })(!options.linksMode) : {};
      // @ts-expect-error
      return adapterFor.call(this, modelName, _allowMissing);
    }
    serializerFor(...args) {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`useLegacyStore was setup in linksMode. linksMode assumes that all requests have been migrated away from adapters and serializers.`);
        }
      })(!options.linksMode) : {};
      return serializerFor.call(this, ...args);
    }
    pushPayload(...args) {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`useLegacyStore was setup in linksMode. linksMode assumes that all requests have been migrated away from adapters and serializers.`);
        }
      })(!options.linksMode) : {};
      return pushPayload.call(this, ...args);
    }
    normalize(...args) {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`useLegacyStore was setup in linksMode. linksMode assumes that all requests have been migrated away from adapters and serializers.`);
        }
      })(!options.linksMode) : {};
      return normalize.call(this, ...args);
    }
    serializeRecord(...args) {
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error(`useLegacyStore was setup in linksMode. linksMode assumes that all requests have been migrated away from adapters and serializers.`);
        }
      })(!options.linksMode) : {};
      return serializeRecord.call(this, ...args);
    }
    destroy() {
      if (!options.linksMode) {
        cleanup.call(this);
      }
      super.destroy();
    }
  }
  if (options.legacyRequests) {
    restoreDeprecatedStoreBehaviors(BaseKlass);
  }
  return LegacyConfiguredStore;
}
function assertType(schema, type) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Expected type ${type} to be a valid ResourceType`);
    }
  })(schema.hasResource({
    type
  })) : {};
}
export { useLegacyStore };