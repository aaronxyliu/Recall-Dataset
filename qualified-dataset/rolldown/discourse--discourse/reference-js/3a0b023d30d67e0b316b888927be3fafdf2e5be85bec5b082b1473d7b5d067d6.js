import { meta } from '../@ember/-internals/meta/lib/meta.js';
import inspect from '../@ember/debug/lib/inspect.js';
import { u as untrack, v as validateTag, U as UPDATE_TAG, a as valueForTag, c as consumeTag } from './cache-CofLhaS4.js';
import { a as tagMetaFor, t as tagFor } from './meta-BJtIZDir.js';
import { C as CHAIN_PASS_THROUGH, g as getChainTagsForKey, f as finishLazyChains } from './chain-tags-B2J7DsxO.js';
import { m as makeComputedDecorator, b as descriptorForDecorator, c as ComputedDescriptor } from './decorator-9ikVwsjY.js';
import { d as defineProperty } from './computed-BNdMwGhH.js';
import { g as get } from './property_get-DuDs6rLg.js';
import { s as set } from './property_set-BmAQ0MGK.js';

function alias(altKey) {
  return makeComputedDecorator(new AliasedProperty(altKey), AliasDecoratorImpl);
}

// TODO: This class can be svelted once `meta` has been deprecated
class AliasDecoratorImpl extends Function {
  readOnly() {
    descriptorForDecorator(this).readOnly();
    return this;
  }
  oneWay() {
    descriptorForDecorator(this).oneWay();
    return this;
  }
  meta(meta) {
    let prop = descriptorForDecorator(this);
    if (arguments.length === 0) {
      return prop._meta || {};
    } else {
      prop._meta = meta;
    }
  }
}
class AliasedProperty extends ComputedDescriptor {
  altKey;
  constructor(altKey) {
    super();
    this.altKey = altKey;
  }
  setup(obj, keyName, propertyDesc, meta) {
    super.setup(obj, keyName, propertyDesc, meta);
    CHAIN_PASS_THROUGH.add(this);
  }
  get(obj, keyName) {
    let ret;
    let meta$1 = meta(obj);
    let tagMeta = tagMetaFor(obj);
    let propertyTag = tagFor(obj, keyName, tagMeta);

    // We don't use the tag since CPs are not automatic, we just want to avoid
    // anything tracking while we get the altKey
    untrack(() => {
      ret = get(obj, this.altKey);
    });
    let lastRevision = meta$1.revisionFor(keyName);
    if (lastRevision === undefined || !validateTag(propertyTag, lastRevision)) {
      UPDATE_TAG(propertyTag, getChainTagsForKey(obj, this.altKey, tagMeta, meta$1));
      meta$1.setRevisionFor(keyName, valueForTag(propertyTag));
      finishLazyChains(meta$1, keyName, ret);
    }
    consumeTag(propertyTag);
    return ret;
  }
  set(obj, _keyName, value) {
    return set(obj, this.altKey, value);
  }
  readOnly() {
    this.set = AliasedProperty_readOnlySet;
  }
  oneWay() {
    this.set = AliasedProperty_oneWaySet;
  }
}
function AliasedProperty_readOnlySet(obj, keyName) {
  throw new Error(`Cannot set read-only property '${keyName}' on object: ${inspect(obj)}`);
}
function AliasedProperty_oneWaySet(obj, keyName, value) {
  defineProperty(obj, keyName, null);
  return set(obj, keyName, value);
}

export { alias as a };
