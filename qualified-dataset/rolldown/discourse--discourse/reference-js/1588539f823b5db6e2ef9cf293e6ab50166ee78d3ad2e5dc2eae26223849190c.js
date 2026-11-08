import { assertPrivateStore, ensureStringId, recordIdentifierFor, constructResource, storeFor } from '@warp-drive/core/store/-private';
import { SkipCache } from '@warp-drive/core/types/request';
import { i as isMaybeIdentifier } from "./utils-Cqw9eRj5.js";
import { n as normalizeModelName } from "./util-Dul6TZts.js";
import { defineSignal } from '@warp-drive/core/signals/-leaked';
import { getOrSetGlobal } from '@warp-drive/core/types/-private';
import { macroCondition, getGlobalConfig } from '@embroider/macros';

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
  assertPrivateStore(store);
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
 * for @ember-data/model or when wrapping schema for legacy
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

  /** @internal */
  // unsubscribe token given to us by the notification manager
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
     If you pass a promise to `push`, Ember Data will not ask the adapter
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
     @return {Model} the record for this RecordReference
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

// Mimics the static apis of @ember-data/model
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
function restoreDeprecatedStoreBehaviors(StoreKlass) {
  StoreKlass.prototype.findRecord = function (resource, id, options) {
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
    assertPrivateStore(this);
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
  StoreKlass.prototype.findAll = function (type, options = {}) {
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
  StoreKlass.prototype.query = function (type, query, options = {}) {
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
  StoreKlass.prototype.queryRecord = function (type, query, options) {
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

  // do not put a ts-expect-error here, because typedoc will fail to
  // build due to this error only occurring when references are in use in the editor
  StoreKlass.prototype.getReference = function (resource, id) {
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
    assertPrivateStore(this);
    const cache = upgradeInstanceCaches(this._instanceCache.__instances).reference;
    let reference = cache.get(identifier);
    if (!reference) {
      reference = new RecordReference(this, identifier);
      cache.set(identifier, reference);
    }
    return reference;
  };
  StoreKlass.prototype.modelFor = function (type) {
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
  StoreKlass.prototype.saveRecord = function (record, options = {}) {
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
    assertPrivateStore(this);
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
export { restoreDeprecatedStoreBehaviors };