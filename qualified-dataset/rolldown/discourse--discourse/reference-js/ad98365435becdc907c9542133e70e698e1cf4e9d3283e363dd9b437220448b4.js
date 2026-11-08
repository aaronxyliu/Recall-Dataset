import { tracked, cached } from '@glimmer/tracking';
import { Context } from '@warp-drive/core/reactive/-private';
import { a as decorateFieldV2, i as initializeDeferredDecorator, d as decorateMethodV2 } from "./runtime-BPCpkOf1-BKOwiRJp.js";
class Fragment {
  static {
    decorateFieldV2(this.prototype, "isDestroying", [tracked], function () {
      return false;
    });
  }
  #isDestroying = (initializeDeferredDecorator(this, "isDestroying"), void 0); // We might want to check the parent values once we move this code to warp-drive.
  static {
    decorateFieldV2(this.prototype, "isDestroyed", [tracked], function () {
      return false;
    });
  }
  #isDestroyed = (initializeDeferredDecorator(this, "isDestroyed"), void 0);
  get hasDirtyAttributes() {
    const {
      path,
      resourceKey,
      store
    } = this[Context];
    const record = store.peekRecord(resourceKey);
    if (record.hasDirtyAttributes && path) {
      const root = path.at(0);
      return root in record.changedAttributes();
    }
    return false;
  }
  static {
    decorateMethodV2(this.prototype, "hasDirtyAttributes", [cached]);
  }
  get isFragment() {
    return true;
  }
  get $type() {
    const {
      field
    } = this[Context];
    return field?.type;
  }
  rollbackAttributes() {
    const {
      path,
      resourceKey,
      store
    } = this[Context];
    if (path) {
      const oldValue = store.cache.getRemoteAttr(resourceKey, path);
      store.cache.setAttr(resourceKey, path, oldValue);
    }
  }
}
const FragmentExtension = {
  kind: 'object',
  name: 'fragment',
  features: Fragment
};
class FragmentArray {
  static {
    decorateFieldV2(this.prototype, "isDestroying", [tracked], function () {
      return false;
    });
  }
  #isDestroying = (initializeDeferredDecorator(this, "isDestroying"), void 0); // We might want to check the parent values once we move this code to warp-drive.
  static {
    decorateFieldV2(this.prototype, "isDestroyed", [tracked], function () {
      return false;
    });
  }
  #isDestroyed = (initializeDeferredDecorator(this, "isDestroyed"), void 0);
  get hasDirtyAttributes() {
    const {
      path,
      resourceKey,
      store
    } = this[Context];
    const record = store.peekRecord(resourceKey);
    if (record.hasDirtyAttributes && path) {
      const root = path.at(0);
      return root in record.changedAttributes();
    }
    return false;
  }
  static {
    decorateMethodV2(this.prototype, "hasDirtyAttributes", [cached]);
  }
  addFragment(fragment) {
    if (!fragment) {
      return;
    }
    return this.addObject(fragment);
  }
  createFragment(fragment) {
    if (!fragment) {
      return;
    }
    return this.pushObject(fragment);
  }
  removeFragment(fragment) {
    if (!fragment) {
      return;
    }
    const index = this.indexOf(fragment);
    if (index !== -1) {
      this.splice(index, 1);
    }
  }
  rollbackAttributes() {
    for (const fragment of this) {
      // @ts-expect-error TODO: fix these types
      fragment?.rollbackAttributes?.();
    }
  }
}
const FragmentArrayExtension = {
  kind: 'array',
  name: 'fragment-array',
  features: FragmentArray
};

// if modelFor turns out to be a bottleneck we should replace with a Map
// and clear it during store teardown.
const AvailableShims = new WeakMap();
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
const AttributeKinds = ['field', 'attribute', 'object', 'array', 'schema-object', 'schema-array'];

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
      // @ts-expect-error checking if a string is a valid string
      if (AttributeKinds.includes(schema.kind)) {
        fields.set(key, 'attribute');
      } else if (schema.kind === 'belongsTo' || schema.kind === 'hasMany') {
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
        // @ts-expect-error checking if a string is a valid string
      } else if (AttributeKinds.includes(schema.kind)) {
        attrs.set(key, {
          kind: 'attribute',
          name: key,
          type: null,
          options: schema.options ?? {}
        });
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
    this.attributes.forEach((schema, key) => {
      callback.call(binding, key, schema);
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
function fragmentsModelFor(modelName) {
  return getShimClass(this, modelName);
}
const modelFor = fragmentsModelFor;
export { FragmentExtension as F, FragmentArrayExtension as a, FragmentArray as b, Fragment as c, fragmentsModelFor as f, modelFor as m };