export { C as ComputedProperty, P as PROPERTY_DID_CHANGE, i as autoComputed, b as beginPropertyChanges, f as changeProperties, c as computed, h as defineDecorator, d as defineProperty, g as defineValue, a as endPropertyChanges, e as expandProperties, j as isComputed, n as notifyPropertyChange } from '../../../shared-chunks/computed-BNdMwGhH.js';
export { g as getCachedValueFor } from '../../../shared-chunks/computed_cache-DmYKevAP.js';
export { a as alias } from '../../../shared-chunks/alias-IFzw6sv_.js';
import { g as get } from '../../../shared-chunks/property_get-DuDs6rLg.js';
export { P as PROXY_CONTENT, _ as _getPath, a as _getProp, h as hasUnknownProperty } from '../../../shared-chunks/property_get-DuDs6rLg.js';
import { s as set } from '../../../shared-chunks/property_set-BmAQ0MGK.js';
export { _ as _setProp, t as trySet } from '../../../shared-chunks/property_set-BmAQ0MGK.js';
export { c as addArrayObserver, b as arrayContentDidChange, a as arrayContentWillChange, d as removeArrayObserver, r as replace, e as replaceInNativeArray } from '../../../shared-chunks/array-CnXdmzOG.js';
export { a as addListener, h as hasListeners, o as on, r as removeListener, s as sendEvent } from '../../../shared-chunks/events-DYrYz3V8.js';
export { c as ComputedDescriptor, b as descriptorForDecorator, d as descriptorForProperty, a as isClassicDecorator, i as isElementDescriptor, m as makeComputedDecorator, n as nativeDescDecorator, s as setClassicDecorator } from '../../../shared-chunks/decorator-9ikVwsjY.js';
export { L as Libraries, a as libraries } from '../../../shared-chunks/libraries-Dx5DiBJv.js';
export { g as getProperties } from '../../../shared-chunks/get_properties-CkJ_mhLz.js';
export { s as setProperties } from '../../../shared-chunks/set_properties-DYiBfzdk.js';
export { A as ASYNC_OBSERVERS, S as SYNC_OBSERVERS, a as activateObserver, b as addObserver, f as flushAsyncObservers, r as removeObserver, c as revalidateObservers } from '../../../shared-chunks/observers-BmobpXAF.js';
export { D as DEBUG_INJECTION_FUNCTIONS, i as inject } from '../../../shared-chunks/injected_property-DqQ0XV7k.js';
export { m as markObjectAsDirty, o as objectAt, t as tagForObject, a as tagForProperty } from '../../../shared-chunks/chain-tags-B2J7DsxO.js';
export { T as TrackedDescriptor, t as tracked } from '../../../shared-chunks/tracked-DvOpYI0o.js';
export { cached } from '../../../@glimmer/tracking/index.js';
export { e as createCache, g as getValue, i as isConst } from '../../../shared-chunks/cache-CofLhaS4.js';
export { N as NAMESPACES, a as NAMESPACES_BY_ID, b as addNamespace, f as findNamespace, c as findNamespaces, i as isNamespaceSearchDisabled, p as processAllNamespaces, d as processNamespace, r as removeNamespace, e as setNamespaceSearchDisabled, s as setUnprocessedMixins } from '../../../shared-chunks/namespace_search-BfvzEQzN.js';

/**
@module ember
*/


/**
  Used internally to allow changing properties in a backwards compatible way, and print a helpful
  deprecation warning.

  @method deprecateProperty
  @param {Object} object The object to add the deprecated property to.
  @param {String} deprecatedKey The property to add (and print deprecation warnings upon accessing).
  @param {String} newKey The property that will be aliased.
  @private
  @since 1.7.0
*/

function deprecateProperty(object, deprecatedKey, newKey, options) {
  Object.defineProperty(object, deprecatedKey, {
    configurable: true,
    enumerable: false,
    set(value) {
      set(this, newKey, value);
    },
    get() {
      return get(this, newKey);
    }
  });
}

const EACH_PROXIES = new WeakMap();
function eachProxyArrayWillChange(array, idx, removedCnt, addedCnt) {
  let eachProxy = EACH_PROXIES.get(array);
  if (eachProxy !== undefined) {
    eachProxy.arrayWillChange(array, idx, removedCnt, addedCnt);
  }
}
function eachProxyArrayDidChange(array, idx, removedCnt, addedCnt) {
  let eachProxy = EACH_PROXIES.get(array);
  if (eachProxy !== undefined) {
    eachProxy.arrayDidChange(array, idx, removedCnt, addedCnt);
  }
}

export { deprecateProperty, eachProxyArrayDidChange, eachProxyArrayWillChange, get, set };
