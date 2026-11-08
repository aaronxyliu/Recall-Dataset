import { deprecate } from '@ember/debug';
import { recordIdentifierFor } from '@warp-drive/core';
import { Context } from '@warp-drive/core/reactive/-private';
import { notifyInternalSignal } from '@warp-drive/core/signals/-leaked';
import { assertPrivateStore } from '@warp-drive/core/store/-private';
import { getOrSetGlobal } from '@warp-drive/core/types/-private';
import { Type } from '@warp-drive/core/types/symbols';
import { l as lookupLegacySupport, E as Errors } from "../errors-Cz5KrzBk.js";
import { b as buildSchema, u as unloadRecord, s as serialize, _ as _save, a as save, r as rollbackAttributes, c as _reload, d as reload, h as hasMany, e as _destroyRecord, f as destroyRecord, i as deleteRecord, R as RecordState, j as changedAttributes, k as belongsTo, l as createSnapshot } from "../schema-provider-DJCV_6AF.js";
import { macroCondition, getGlobalConfig } from '@embroider/macros';

/**
 * This module provides support for migrating away from @warp-drive/legacy/model
 * to ReactiveResource from @warp-drive/core/reactive.
 *
 * It includes:
 *
 * - A `withDefaults` function to assist in creating a schema in LegacyMode
 * - A `registerDerivations` function to register the derivations necessary to support LegacyMode
 * - A `DelegatingSchemaService` that can be used to provide a schema service that works with both
 *   @warp-drive/legacy/model and @warp-drive/core/reactive simultaneously for migration purposes.
 * - A `WithLegacy` type util that can be used to create a type that includes the legacy
 *   properties and methods of a record.
 *
 * Using LegacyMode features on a ReactiveResource *requires* the use of these derivations and schema
 * additions. LegacyMode is not intended to be a long-term solution, but rather a stepping stone
 * to assist in more rapidly adopting modern WarpDrive features.
 *
 * @module
 */
// 'isDestroying', 'isDestroyed'
const LegacyFields = ['_createSnapshot', 'adapterError', 'belongsTo', 'changedAttributes', 'constructor', 'currentState', 'deleteRecord', 'destroyRecord', 'dirtyType', 'errors', 'hasDirtyAttributes', 'hasMany', 'isDeleted', 'isEmpty', 'isError', 'isLoaded', 'isLoading', 'isNew', 'isSaving', 'isValid', 'reload', 'rollbackAttributes', 'save', 'serialize', 'unloadRecord'];

/**
 * A Type utility that enables quickly adding type information for the fields
 * defined by `import { withDefaults } from '@warp-drive/legacy/model/migration-support'`.
 *
 * Example:
 *
 * ```ts
 * import { withDefaults, WithLegacy } from '@warp-drive/legacy/model/migration-support';
 * import { Type } from '@warp-drive/core/types/symbols';
 * import type { HasMany } from '@@warp-drive/legacy/model';
 *
 * export const UserSchema = withDefaults({
 *   type: 'user',
 *   fields: [
 *     { name: 'firstName', kind: 'attribute' },
 *     { name: 'lastName', kind: 'attribute' },
 *     { name: 'age', kind: 'attribute' },
 *     { name: 'friends',
 *       kind: 'hasMany',
 *       type: 'user',
 *       options: { inverse: 'friends', async: false }
 *     },
 *     { name: 'bestFriend',
 *       kind: 'belongsTo',
 *       type: 'user',
 *       options: { inverse: null, async: false }
 *     },
 *   ],
 * });
 *
 * export type User = WithLegacy<{
 *   firstName: string;
 *   lastName: string;
 *   age: number;
 *   friends: HasMany<User>;
 *   bestFriend: User | null;
 *   [Type]: 'user';
 * }>
 * ```
 *
 */

const LegacySupport = getOrSetGlobal('LegacySupport', new WeakMap());
function legacySupport(record, options, prop) {
  let state = LegacySupport.get(record);
  if (!state) {
    state = {};
    LegacySupport.set(record, state);
  }
  const suppressDeprecation = Boolean(options && options.suppressDeprecation);
  switch (prop) {
    case '_createSnapshot':
      // FIXME should be deprecated too?
      return createSnapshot;
    case 'adapterError':
      // FIXME should be deprecated too?
      return record.currentState.adapterError;
    case 'belongsTo':
      return belongsTo;
    case 'changedAttributes':
      return changedAttributes;
    case 'constructor':
      return state._constructor = state._constructor || {
        isModel: true,
        name: `Record<${recordIdentifierFor(record).type}>`,
        modelName: recordIdentifierFor(record).type
      };
    case 'currentState':
      return state.recordState = state.recordState || new RecordState(record);
    case 'deleteRecord':
      return deleteRecord;
    case 'destroyRecord':
      return suppressDeprecation ? _destroyRecord : destroyRecord;
    case 'dirtyType':
      return record.currentState.dirtyType;
    case 'errors':
      // FIXME should be deprecated too?
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      return state.errors = state.errors || Errors.create({
        __record: record
      });
    case 'hasDirtyAttributes':
      return record.currentState.isDirty;
    case 'hasMany':
      return hasMany;
    case 'isDeleted':
      return record.currentState.isDeleted;
    case 'isEmpty':
      return record.currentState.isEmpty;
    case 'isError':
      return record.currentState.isError;
    case 'isLoaded':
      return record.currentState.isLoaded;
    case 'isLoading':
      return record.currentState.isLoading;
    case 'isNew':
      return record.currentState.isNew;
    case 'isSaving':
      return record.currentState.isSaving;
    case 'isValid':
      return record.currentState.isValid;
    case 'reload':
      return suppressDeprecation ? _reload : reload;
    case 'rollbackAttributes':
      return rollbackAttributes;
    case 'save':
      return suppressDeprecation ? _save : save;
    case 'serialize':
      // FIXME should be deprecated too? (is somewhat deprecated via store.serializeRecord)
      return serialize;
    case 'unloadRecord':
      return unloadRecord;
    default:
      macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
        {
          throw new Error(`${prop} is not a supported legacy field`);
        }
      })() : {};
  }
}
legacySupport[Type] = '@legacy';

/**
 * A function which adds the necessary fields to a schema and marks it as
 * being in LegacyMode. This is used to support the legacy features of
 * @warp-drive/legacy/model while migrating to WarpDrive.
 *
 * Example:
 *
 * ```ts
 * import { withDefaults, WithLegacy } from '@warp-drive/legacy/model/migration-support';
 * import { Type } from '@warp-drive/core/types/symbols';
 * import type { HasMany } from '@warp-drive/legacy/model';
 *
 * export const UserSchema = withDefaults({
 *   type: 'user',
 *   fields: [
 *     { name: 'firstName', kind: 'attribute' },
 *     { name: 'lastName', kind: 'attribute' },
 *     { name: 'age', kind: 'attribute' },
 *     { name: 'friends',
 *       kind: 'hasMany',
 *       type: 'user',
 *       options: { inverse: 'friends', async: false }
 *     },
 *     { name: 'bestFriend',
 *       kind: 'belongsTo',
 *       type: 'user',
 *       options: { inverse: null, async: false }
 *     },
 *   ],
 * });
 *
 * export type User = WithLegacy<{
 *   firstName: string;
 *   lastName: string;
 *   age: number;
 *   friends: HasMany<User>;
 *   bestFriend: User | null;
 *   [Type]: 'user';
 * }>
 * ```
 *
 * Using this function require registering the derivations
 * it requires with the schema service.
 *
 * ```ts
 * import { registerDerivations } from '@warp-drive/legacy/model/migration-support';
 *
 * registerDerivations(schema);
 * ```
 *
 * @param schema The schema to add legacy support to.
 * @return The schema with legacy support added.
 * @public
 */
function withDefaults(schema) {
  schema.legacy = true;
  schema.identity = {
    kind: '@id',
    name: 'id'
  };
  LegacyFields.forEach(field => {
    schema.fields.push({
      type: '@legacy',
      name: field,
      kind: 'derived'
    });
  });
  schema.fields.push({
    name: '_isReloading',
    kind: '@local',
    type: 'boolean',
    options: {
      defaultValue: false
    }
  });
  schema.fields.push({
    name: 'isDestroying',
    kind: '@local',
    type: 'boolean',
    options: {
      defaultValue: false
    }
  });
  schema.fields.push({
    name: 'isDestroyed',
    kind: '@local',
    type: 'boolean',
    options: {
      defaultValue: false
    }
  });
  schema.objectExtensions = schema.objectExtensions || [];
  schema.objectExtensions.push('deprecated-model-behaviors');
  return schema;
}

/**
 * Adds the necessasary fields to the schema for supporting
 * the deprecated request methods on LegacyMode schemas.
 *
 * Use this instead of `withDefaults` to add the fields
 * and behaviors necessary to support Model-Like capabilities.
 *
 * ```ts
 * import { withRestoredDeprecatedModelRequestBehaviors } from '@warp-drive/legacy/model/migration-support';
 *
 * export const UserSchema = withRestoredDeprecatedModelRequestBehaviors({
 *   type: 'user',
 *   fields: [
 *     { name: 'firstName', kind: 'attribute' },
 *     { name: 'lastName', kind: 'attribute' },
 *   ]
 * });
 * ```
 */
function withRestoredDeprecatedModelRequestBehaviors(schema) {
  schema.legacy = true;
  schema.identity = {
    kind: '@id',
    name: 'id'
  };
  LegacyFields.forEach(field => {
    schema.fields.push({
      type: '@legacy',
      name: field,
      kind: 'derived',
      options: {
        suppressDeprecation: true
      }
    });
  });
  schema.fields.push({
    name: 'isReloading',
    kind: '@local',
    type: 'boolean',
    options: {
      defaultValue: false
    }
  });
  schema.fields.push({
    name: 'isDestroying',
    kind: '@local',
    type: 'boolean',
    options: {
      defaultValue: false
    }
  });
  schema.fields.push({
    name: 'isDestroyed',
    kind: '@local',
    type: 'boolean',
    options: {
      defaultValue: false
    }
  });
  return schema;
}

/**
 * A function which registers the necessary derivations to support
 * the LegacyMode features of @warp-drive/legacy/model while migrating to WarpDrive.
 *
 * This must be called in order to use the fields added by {@link withDefaults} or
 * {@link withRestoredDeprecatedModelRequestBehaviors}.
 *
 * @param schema The schema service to register the derivations with.
 * @public
 */
function registerDerivations(schema) {
  schema.registerDerivation(legacySupport);
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  schema._registerMode('@legacy', {
    belongsTo: {
      get(store, record, cacheKey, field) {
        // FIXME field.name here should likely be field.sourceKey || field.name
        return lookupLegacySupport(record).getBelongsTo(field.name);
      },
      set(store, record, cacheKey, field, value) {
        assertPrivateStore(store);
        store._join(() => {
          // FIXME field.name here should likely be field.sourceKey || field.name
          lookupLegacySupport(record).setDirtyBelongsTo(field.name, value);
        });
      }
    },
    hasMany: {
      get(store, record, cacheKey, field) {
        // FIXME field.name here should likely be field.sourceKey || field.name
        return lookupLegacySupport(record).getHasMany(field.name);
      },
      set(store, record, cacheKey, field, value) {
        assertPrivateStore(store);
        store._join(() => {
          const support = lookupLegacySupport(record);
          // FIXME field.name here should likely be field.sourceKey || field.name
          const manyArray = support.getManyArray(field.name);
          manyArray.splice(0, manyArray.length, ...value);
        });
      },
      notify(store, record, cacheKey, field) {
        const support = lookupLegacySupport(record);
        // FIXME field.name here should likely be field.sourceKey || field.name
        const manyArray = support && support._manyArrayCache[field.name];
        const hasPromise = support && support._relationshipPromisesCache[field.name];
        if (manyArray && hasPromise) {
          // do nothing, we will notify the ManyArray directly
          // once the fetch has completed.
          return false;
        }
        if (manyArray) {
          notifyInternalSignal(manyArray[Context].signal);
          return true;
        }
        return false;
      }
    }
  });
  schema.CAUTION_MEGA_DANGER_ZONE_registerExtension({
    name: 'deprecated-model-behaviors',
    kind: 'object',
    features: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      get isReloading() {
        deprecate(`record.isReloading is deprecated, please use store.request and either <Request> or getRequuestState to keep track of the request state instead.`, false, {
          id: 'warp-drive:deprecate-legacy-request-methods',
          until: '6.0',
          for: '@warp-drive/core',
          url: 'https://docs.warp-drive.io/api/@warp-drive/core/build-config/deprecations/variables/ENABLE_LEGACY_REQUEST_METHODS',
          since: {
            enabled: '5.7',
            available: '5.7'
          }
        });
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this._isReloading;
      },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      set isReloading(v) {
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this._isReloading = v;
      }
    }
  });
}

/**
 * A class which provides a schema service that delegates between
 * a primary schema service and one that supports legacy model
 * classes as its schema source.
 *
 * When the primary schema service has a schema for the given
 * resource, it will be used. Otherwise, the fallback schema
 * service will be used.
 *
 * This can be used when incrementally migrating from Models to
 * ReactiveResources by enabling unmigrated Models to continue to
 * provide their own schema information to the application.
 *
 * ```ts
 * import { DelegatingSchemaService } from '@warp-drive/legacy/model/migration-support';
 * import { SchemaService } from '@warp-drive/core/reactive';
 *
 * class AppStore extends Store {
 *   createSchemaService() {
 *     const schema = new SchemaService();
 *     return new DelegatingSchemaService(this, schema);
 *   }
 * }
 * ```
 *
 * All calls to register resources, derivations, transformations, hash functions
 * etc. will be delegated to the primary schema service.
 *
 * @class DelegatingSchemaService
 * @public
 */

class DelegatingSchemaService {
  /** @internal */
  _preferred;
  /** @internal */
  _secondary;
  constructor(store, schema) {
    this._preferred = schema;
    this._secondary = buildSchema(store);
  }
  isDelegated(resource) {
    return !this._preferred.hasResource(resource) && this._secondary.hasResource(resource);
  }
  resourceTypes() {
    return Array.from(new Set(this._preferred.resourceTypes().concat(this._secondary.resourceTypes())));
  }
  hasResource(resource) {
    return this._preferred.hasResource(resource) || this._secondary.hasResource(resource);
  }
  hasTrait(type) {
    if (this._preferred.hasResource({
      type
    })) {
      return this._preferred.hasTrait(type);
    }
    return this._secondary.hasTrait(type);
  }
  resourceHasTrait(resource, trait) {
    if (this._preferred.hasResource(resource)) {
      return this._preferred.resourceHasTrait(resource, trait);
    }
    return this._secondary.resourceHasTrait(resource, trait);
  }
  fields(resource) {
    if (this._preferred.hasResource(resource)) {
      return this._preferred.fields(resource);
    }
    return this._secondary.fields(resource);
  }
  cacheFields(resource) {
    if (this._preferred.hasResource?.(resource)) {
      // @ts-expect-error
      return this._preferred.cacheFields?.(resource);
    }

    // @ts-expect-error
    return this._secondary.cacheFields?.(resource);
  }
  transformation(field) {
    return this._preferred.transformation(field);
  }
  hashFn(field) {
    return this._preferred.hashFn(field);
  }
  derivation(field) {
    return this._preferred.derivation(field);
  }
  resource(resource) {
    if (this._preferred.hasResource(resource)) {
      return this._preferred.resource(resource);
    }
    return this._secondary.resource(resource);
  }
  registerResources(schemas) {
    this._preferred.registerResources(schemas);
  }
  registerResource(schema) {
    this._preferred.registerResource(schema);
  }
  registerTransformation(transform) {
    this._preferred.registerTransformation(transform);
  }
  registerDerivation(derivation) {
    this._preferred.registerDerivation(derivation);
  }
  registerHashFn(hashFn) {
    this._preferred.registerHashFn(hashFn);
  }
  CAUTION_MEGA_DANGER_ZONE_hasExtension(ext) {
    return this._preferred.CAUTION_MEGA_DANGER_ZONE_hasExtension(ext);
  }
  CAUTION_MEGA_DANGER_ZONE_registerExtension(extension) {
    this._preferred.CAUTION_MEGA_DANGER_ZONE_registerExtension(extension);
  }
  CAUTION_MEGA_DANGER_ZONE_resourceExtensions(resource) {
    return this._preferred.CAUTION_MEGA_DANGER_ZONE_resourceExtensions(resource);
  }
  CAUTION_MEGA_DANGER_ZONE_objectExtensions(field, resolvedType) {
    return this._preferred.CAUTION_MEGA_DANGER_ZONE_objectExtensions(field, resolvedType);
  }
  CAUTION_MEGA_DANGER_ZONE_arrayExtensions(field) {
    return this._preferred.CAUTION_MEGA_DANGER_ZONE_arrayExtensions(field);
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
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this._preferred._registerMode(mode, kinds);
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
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return this._preferred._kind(mode, kind);
  }
}
if (macroCondition(getGlobalConfig().WarpDrive.deprecations.ENABLE_LEGACY_SCHEMA_SERVICE)) {
  DelegatingSchemaService.prototype.attributesDefinitionFor = function (resource) {
    if (this._preferred.hasResource(resource)) {
      return this._preferred.attributesDefinitionFor(resource);
    }
    return this._secondary.attributesDefinitionFor(resource);
  };
  DelegatingSchemaService.prototype.relationshipsDefinitionFor = function (resource) {
    if (this._preferred.hasResource(resource)) {
      return this._preferred.relationshipsDefinitionFor(resource);
    }
    return this._secondary.relationshipsDefinitionFor(resource);
  };
  DelegatingSchemaService.prototype.doesTypeExist = function (type) {
    return this._preferred.doesTypeExist?.(type) || this._secondary.doesTypeExist?.(type) || false;
  };
}
export { DelegatingSchemaService, registerDerivations, withDefaults, withRestoredDeprecatedModelRequestBehaviors };