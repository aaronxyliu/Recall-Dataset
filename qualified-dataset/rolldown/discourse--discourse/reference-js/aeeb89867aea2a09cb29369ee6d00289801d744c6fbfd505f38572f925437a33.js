import { setOwner, getOwner } from '@ember/application';
import { assertPrivateStore, setRecordIdentifier, StoreMap } from '@warp-drive/core/store/-private';
import { g as getModelFactory } from "./schema-provider-DJCV_6AF.js";
import { n as normalizeModelName } from "./util-Dul6TZts.js";
import { macroCondition, getGlobalConfig } from '@embroider/macros';
function instantiateRecord(identifier, createRecordArgs) {
  const type = identifier.type;

  // TODO deprecate allowing unknown args setting
  const createOptions = {
    _createProps: createRecordArgs ?? {},
    // TODO @deprecate consider deprecating accessing record properties during init which the below is necessary for
    _secretInit: {
      identifier,
      store: this,
      cb: secretInit
    }
  };

  // ensure that `getOwner(this)` works inside a model instance
  setOwner(createOptions, getOwner(this));
  const factory = getModelFactory(this, type);
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`No model was found for '${type}'`);
    }
  })(factory) : {};
  return factory.class.create(createOptions);
}
function teardownRecord(record) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`expected to receive an instance of Model from @ember-data/model. If using a custom model make sure you implement teardownRecord`);
    }
  })('destroy' in record) : {};
  record.destroy();
}
function modelFor(modelName) {
  assertPrivateStore(this);
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Attempted to call store.modelFor(), but the store instance has already been destroyed.`);
    }
  })(!this.isDestroyed && !this.isDestroying) : {};
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`You need to pass a model name to the store's modelFor method`);
    }
  })(modelName) : {};
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Please pass a proper model name to the store's modelFor method`);
    }
  })(typeof modelName === 'string' && modelName.length) : {};
  const type = normalizeModelName(modelName);
  const maybeFactory = getModelFactory(this, type);
  const klass = maybeFactory && maybeFactory.class ? maybeFactory.class : null;
  const ignoreType = !klass || !klass.isModel || this._forceShim;
  if (!ignoreType) {
    return klass;
  }
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`No model was found for '${type}' and no schema handles the type`);
    }
  })(this.schema.hasResource({
    type
  })) : {};
}
function secretInit(record, identifier, store) {
  setRecordIdentifier(record, identifier);
  StoreMap.set(record, store);
}
export { instantiateRecord as i, modelFor as m, teardownRecord as t };