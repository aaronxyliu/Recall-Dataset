import { defineComponent, computed, useAttrs, resolveComponent, openBlock, createElementBlock, mergeProps, unref, renderSlot, createBlock, withCtx, normalizeClass, resolveDynamicComponent, createCommentVNode, createTextVNode, toDisplayString, ref, onMounted, watch, withDirectives, createElementVNode, withModifiers, vModelDynamic, Fragment, renderList, inject, resolveDirective, createVNode, getCurrentScope, onScopeDispose, getCurrentInstance, onBeforeMount, nextTick, isRef, onBeforeUnmount, useSlots, Transition, normalizeStyle, withKeys, markRaw, vShow, provide, watchEffect, pushScopeId, popScopeId, h, TransitionGroup, vModelText, normalizeProps, guardReactiveProps, reactive, onUnmounted } from "vue";
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$f = Object.prototype;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
var nativeObjectToString$1 = objectProto$f.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$e = Object.prototype;
var nativeObjectToString = objectProto$e.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$3 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
}
function arrayMap(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var isArray = Array.isArray;
const isArray$1 = isArray;
var INFINITY$1 = 1 / 0;
var symbolProto$2 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
const coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$d = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap = getNative(root$1, "WeakMap");
const WeakMap$1 = WeakMap;
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
const baseCreate$1 = baseCreate;
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function copyArray(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
const defineProperty$1 = defineProperty;
var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
const baseSetToString$1 = baseSetToString;
var setToString = shortOut(baseSetToString$1);
const setToString$1 = setToString;
function arrayEach(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$a.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props2, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props2.length;
  while (++index2 < length) {
    var key = props2[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var objectProto$b = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$b;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$3 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}
var objectProto$a = Object.prototype;
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
const isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
const isBuffer$1 = isBuffer;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
const nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
const isTypedArray$1 = isTypedArray;
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
const nativeKeys$1 = nativeKeys;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$6.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
const nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$5.call(data, key) ? data[key] : void 0;
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$4.call(data, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, "Map");
const Map$2 = Map$1;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
const stringToPath$1 = stringToPath;
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
function arrayPush(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray$1(value) || isArguments$1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
function flatRest(func) {
  return setToString$1(overRest(func, void 0, flatten), func + "");
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
const getPrototype$1 = getPrototype;
var objectTag$3 = "[object Object]";
var funcProto = Function.prototype, objectProto$4 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$3.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function baseSlice(array, start, end) {
  var index2 = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index2 < length) {
    result[index2] = array[index2 + start];
  }
  return result;
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$3 = Object.prototype;
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
const getSymbols$1 = getSymbols;
function copySymbols(source, object) {
  return copyObject(source, getSymbols$1(source), object);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
const getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn$1);
}
var DataView = getNative(root$1, "DataView");
const DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
const Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
const Set$2 = Set$1;
var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$2 && getTag(new Map$2()) != mapTag$4 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
const getTag$1 = getTag;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$2.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var Uint8Array = root$1.Uint8Array;
const Uint8Array$1 = Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);
    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);
    case dataViewTag$2:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$3:
      return new Ctor();
    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);
    case regexpTag$2:
      return cloneRegExp(object);
    case setTag$3:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
var mapTag$2 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$2;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
const isMap$1 = isMap;
var setTag$2 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$2;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
const isSet$1 = isSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack2) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack2) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack2 || (stack2 = new Stack());
  var stacked = stack2.get(value);
  if (stacked) {
    return stacked;
  }
  stack2.set(value, result);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack2));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack2));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props2 = isArr ? void 0 : keysFunc(value);
  arrayEach(props2 || value, function(subValue, key2) {
    if (props2) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack2));
  });
  return result;
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack2) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack2.get(array);
  var othStacked = stack2.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack2.set(array, other);
  stack2.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack2) : customizer(arrValue, othValue, index2, array, other, stack2);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack2))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack2))) {
      result = false;
      break;
    }
  }
  stack2["delete"](array);
  stack2["delete"](other);
  return result;
}
function mapToArray(map2) {
  var index2 = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index2 = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack2) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack2.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack2.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack2);
      stack2["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack2) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack2.get(object);
  var othStacked = stack2.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack2.set(object, other);
  stack2.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack2) : customizer(objValue, othValue, key, object, other, stack2);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack2) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack2["delete"](object);
  stack2["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack2) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack2 || (stack2 = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack2) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack2);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack2 || (stack2 = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack2);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack2 || (stack2 = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack2);
}
function baseIsEqual(value, other, bitmask, customizer, stack2) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack2);
}
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}
function customOmitClone(value) {
  return isPlainObject(value) ? void 0 : value;
}
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
const omit$1 = omit;
const _hoisted_1$z = ["href"];
const _hoisted_2$t = ["href"];
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Link",
  props: {
    to: {
      type: String,
      default: ""
    },
    blank: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props2 = __props;
    const renderedTag = computed(() => {
      if (!props2.to) {
        return "BUTTON";
      } else if (props2.blank) {
        return "ANCHOR";
      } else if (/^\/(?!\/).*$/.test(props2.to)) {
        return "FRAMEWORK";
      } else {
        return "ANCHOR";
      }
    });
    const $attrs = useAttrs();
    const updatedAttrs = computed(
      () => renderedTag.value === "ANCHOR" && !$attrs.disabled ? omit$1($attrs, "disabled") : $attrs
    );
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return renderedTag.value === "BUTTON" ? (openBlock(), createElementBlock("button", mergeProps({
        key: 0,
        "aria-label": "button",
        role: "button"
      }, unref($attrs)), [
        renderSlot(_ctx.$slots, "default")
      ], 16)) : renderedTag.value === "ANCHOR" && !__props.blank ? (openBlock(), createElementBlock("a", mergeProps({
        key: 1,
        "aria-label": "Link",
        href: __props.to,
        role: "link"
      }, updatedAttrs.value), [
        renderSlot(_ctx.$slots, "default")
      ], 16, _hoisted_1$z)) : renderedTag.value === "ANCHOR" && __props.blank ? (openBlock(), createElementBlock("a", mergeProps({
        key: 2,
        "aria-label": "Link",
        href: __props.to,
        role: "link",
        target: "_blank",
        rel: "noopener"
      }, updatedAttrs.value), [
        renderSlot(_ctx.$slots, "default")
      ], 16, _hoisted_2$t)) : (openBlock(), createBlock(_component_RouterLink, mergeProps({
        key: 3,
        to: __props.to
      }, updatedAttrs.value), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["to"]));
    };
  }
});
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "Anchor",
  props: {
    to: { default: "" },
    exact: { type: Boolean, default: true },
    blank: { type: Boolean, default: false },
    label: { default: "" },
    icon: { default: null },
    svg: { default: null },
    color: { default: "" },
    disabled: { type: Boolean, default: false },
    reverse: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$v, {
        to: _ctx.to,
        exact: _ctx.exact,
        blank: _ctx.blank,
        class: normalizeClass(["inline-flex items-center justify-center focus:outline-none", [
          _ctx.color ? `text-${_ctx.color}-500 hover:text-${_ctx.color}-600 focus-visible:text-${_ctx.color}-600` : "hover:text-secondaryDark focus-visible:text-secondaryDark",
          { "cursor-not-allowed opacity-75": _ctx.disabled },
          { "flex-row-reverse": _ctx.reverse }
        ]]),
        disabled: _ctx.disabled,
        tabindex: "0"
      }, {
        default: withCtx(() => [
          _ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
            key: 0,
            class: normalizeClass(["svg-icons", _ctx.label ? _ctx.reverse ? "ml-2" : "mr-2" : ""])
          }, null, 8, ["class"])) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(_ctx.label), 1)
        ]),
        _: 1
      }, 8, ["to", "exact", "blank", "class", "disabled"]);
    };
  }
});
const _hoisted_1$y = { class: "autocomplete-wrapper" };
const _hoisted_2$s = ["type", "placeholder", "spellcheck", "autocapitalize", "onInput"];
const _hoisted_3$n = {
  key: 0,
  class: "suggestions"
};
const _hoisted_4$a = ["onClick"];
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "AutoComplete",
  props: {
    spellcheck: {
      type: Boolean,
      default: true,
      required: false
    },
    autocapitalize: {
      type: String,
      default: "off",
      required: false
    },
    placeholder: {
      type: String,
      default: "",
      required: false
    },
    source: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      default: "",
      required: false
    },
    styles: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    }
  },
  emits: ["input", "change"],
  setup(__props, { emit: __emit }) {
    const acInput = ref();
    const props2 = __props;
    const emit2 = __emit;
    const text = ref(props2.value);
    const selectionStart = ref(0);
    const currentSuggestionIndex = ref(-1);
    const suggestionsVisible = ref(false);
    onMounted(() => {
      updateSuggestions({
        target: acInput
      });
    });
    watch(
      () => props2.value,
      (newValue) => {
        text.value = newValue;
      }
    );
    const suggestions = computed(() => {
      const input = text.value.substring(0, selectionStart.value);
      return props2.source.filter(
        (entry) => entry.toLowerCase().startsWith(input.toLowerCase()) && input.toLowerCase() !== entry.toLowerCase()
      ).slice(0, 10);
    });
    function updateSuggestions(event) {
      var _a2, _b;
      if (event.code && event.code === "Escape") {
        event.preventDefault();
        suggestionsVisible.value = false;
        currentSuggestionIndex.value = -1;
        return;
      }
      selectionStart.value = (_b = (_a2 = acInput.value) == null ? void 0 : _a2.selectionStart) != null ? _b : -1;
      suggestionsVisible.value = true;
    }
    const onInput = (e) => {
      emit2("input", e.target.value);
      updateSuggestions(e);
    };
    function forceSuggestion(suggestion) {
      text.value = suggestion;
      selectionStart.value = text.value.length;
      suggestionsVisible.value = true;
      currentSuggestionIndex.value = -1;
      emit2("input", text.value);
    }
    function handleKeystroke(event) {
      switch (event.code) {
        case "ArrowUp":
          event.preventDefault();
          currentSuggestionIndex.value = currentSuggestionIndex.value - 1 >= 0 ? currentSuggestionIndex.value - 1 : 0;
          break;
        case "ArrowDown":
          event.preventDefault();
          currentSuggestionIndex.value = currentSuggestionIndex.value < suggestions.value.length - 1 ? currentSuggestionIndex.value + 1 : suggestions.value.length - 1;
          break;
        case "Enter":
          event.preventDefault();
          if (currentSuggestionIndex.value > -1)
            forceSuggestion(
              suggestions.value.find(
                (_item, index2) => index2 === currentSuggestionIndex.value
              )
            );
          break;
        case "Tab": {
          event.preventDefault();
          const activeSuggestion = suggestions.value[currentSuggestionIndex.value >= 0 ? currentSuggestionIndex.value : 0];
          if (!activeSuggestion)
            return;
          forceSuggestion(activeSuggestion);
          break;
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$y, [
        withDirectives(createElementVNode("input", {
          ref_key: "acInput",
          ref: acInput,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => text.value = $event),
          type: __props.type,
          autocomplete: "off",
          placeholder: __props.placeholder,
          spellcheck: __props.spellcheck,
          autocapitalize: __props.autocapitalize,
          class: normalizeClass(__props.styles),
          onInput: withModifiers(onInput, ["stop"]),
          onKeyup: updateSuggestions,
          onClick: updateSuggestions,
          onKeydown: handleKeystroke,
          onChange: _cache[1] || (_cache[1] = ($event) => emit2("change", $event))
        }, null, 42, _hoisted_2$s), [
          [vModelDynamic, text.value]
        ]),
        suggestions.value.length > 0 && suggestionsVisible.value ? (openBlock(), createElementBlock("ul", _hoisted_3$n, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(suggestions.value, (suggestion, index2) => {
            return openBlock(), createElementBlock("li", {
              key: `suggestion-${index2}`,
              class: normalizeClass({ active: currentSuggestionIndex.value === index2 }),
              onClick: withModifiers(($event) => forceSuggestion(suggestion), ["prevent"])
            }, toDisplayString(suggestion), 11, _hoisted_4$a);
          }), 128))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const AutoComplete_vue_vue_type_style_index_0_scoped_322d3646_lang = "";
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const AutoComplete = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-322d3646"]]);
const _hoisted_1$x = ["aria-checked"];
const _hoisted_2$r = ["name", "checked"];
let checkboxIDCounter = 564275;
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  props: {
    on: { type: Boolean, default: false },
    name: { default: "checkbox" }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const checkboxID = `checkbox-${checkboxIDCounter++}`;
    const emit2 = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "group inline-flex cursor-pointer flex-nowrap items-center justify-center transition hover:text-secondaryDark",
        role: "checkbox",
        "aria-checked": _ctx.on,
        onClick: _cache[1] || (_cache[1] = ($event) => emit2("change"))
      }, [
        createElementVNode("input", {
          id: checkboxID,
          type: "checkbox",
          name: _ctx.name,
          class: "checkbox",
          checked: _ctx.on,
          onChange: _cache[0] || (_cache[0] = ($event) => emit2("change"))
        }, null, 40, _hoisted_2$r),
        createElementVNode("label", {
          for: checkboxID,
          class: "cursor-pointer truncate pl-0 align-middle font-semibold"
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ], 8, _hoisted_1$x);
    };
  }
});
const Checkbox_vue_vue_type_style_index_0_scoped_f23d9178_lang = "";
const Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-f23d9178"]]);
const styles = "";
const tailwind = "";
const HOPP_UI_OPTIONS = "HOPP_UI_OPTIONS";
const plugin = {
  install(app, options = {}) {
    app.provide(HOPP_UI_OPTIONS, options);
  }
};
const _hoisted_1$w = { class: "text-center" };
const _hoisted_2$q = { class: "flex space-x-2" };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "ConfirmModal",
  props: {
    show: { type: Boolean },
    title: { default: null },
    confirm: { default: null },
    yes: { default: null },
    no: { default: null },
    loadingState: { type: [Boolean, null], default: null }
  },
  emits: ["hide-modal", "resolve"],
  setup(__props, { emit: __emit }) {
    var _a2;
    const { t } = (_a2 = inject(HOPP_UI_OPTIONS)) != null ? _a2 : {};
    const props2 = __props;
    const emit2 = __emit;
    const hideModal = () => {
      emit2("hide-modal");
    };
    const resolve = () => {
      emit2("resolve", props2.title);
      if (props2.loadingState === null)
        emit2("hide-modal");
    };
    return (_ctx, _cache) => {
      var _a3, _b, _c;
      const _directive_focus = resolveDirective("focus");
      return _ctx.show ? (openBlock(), createBlock(unref(HoppSmartModal), {
        key: 0,
        dialog: "",
        title: (_c = (_b = _ctx.confirm) != null ? _b : (_a3 = unref(t)) == null ? void 0 : _a3("modal.confirm")) != null ? _c : "Confirm",
        role: "dialog",
        "aria-modal": "true",
        onClose: hideModal
      }, {
        body: withCtx(() => [
          createElementVNode("div", _hoisted_1$w, toDisplayString(_ctx.title), 1)
        ]),
        footer: withCtx(() => {
          var _a4, _b2, _c2, _d, _e2, _f;
          return [
            createElementVNode("span", _hoisted_2$q, [
              withDirectives(createVNode(unref(_sfc_main$4), {
                label: (_c2 = (_b2 = _ctx.yes) != null ? _b2 : (_a4 = unref(t)) == null ? void 0 : _a4("action.yes")) != null ? _c2 : "Yes",
                loading: !!_ctx.loadingState,
                outline: "",
                onClick: resolve
              }, null, 8, ["label", "loading"]), [
                [_directive_focus]
              ]),
              createVNode(unref(_sfc_main$3), {
                label: (_f = (_e2 = _ctx.no) != null ? _e2 : (_d = unref(t)) == null ? void 0 : _d("action.no")) != null ? _f : "No",
                filled: "",
                outline: "",
                onClick: hideModal
              }, null, 8, ["label"])
            ])
          ];
        }),
        _: 1
      }, 8, ["title"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$v = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$p = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m18 15l-6-6l-6 6"
}, null, -1);
const _hoisted_3$m = [
  _hoisted_2$p
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$v, [..._hoisted_3$m]);
}
const IconChevronUp = { name: "lucide-chevron-up", render: render$7 };
const _hoisted_1$u = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$o = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m6 9l6 6l6-6"
}, null, -1);
const _hoisted_3$l = [
  _hoisted_2$o
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$u, [..._hoisted_3$l]);
}
const IconChevronDown = { name: "lucide-chevron-down", render: render$6 };
const _hoisted_1$t = { class: "sticky inset-x-0 bottom-0 flex items-center justify-center flex-shrink-0 overflow-x-auto" };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "Expand",
  props: {
    less: { default: "Less" },
    more: { default: "More" }
  },
  setup(__props) {
    var _a2;
    const { t } = (_a2 = inject(HOPP_UI_OPTIONS)) != null ? _a2 : {};
    const expand = ref(false);
    return (_ctx, _cache) => {
      var _a3, _b, _c, _d, _e2, _f;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["relative flex flex-col overflow-hidden space-y-2", expand.value ? "h-full" : "max-h-32"])
      }, [
        renderSlot(_ctx.$slots, "body"),
        createElementVNode("div", _hoisted_1$t, [
          createVNode(unref(_sfc_main$3), {
            icon: expand.value ? unref(IconChevronUp) : unref(IconChevronDown),
            label: expand.value ? (_c = (_b = _ctx.less) != null ? _b : (_a3 = unref(t)) == null ? void 0 : _a3("action.less")) != null ? _c : "Less" : (_f = (_e2 = _ctx.more) != null ? _e2 : (_d = unref(t)) == null ? void 0 : _d("action.more")) != null ? _f : "More",
            filled: "",
            rounded: "",
            onClick: _cache[0] || (_cache[0] = ($event) => expand.value = !expand.value)
          }, null, 8, ["icon", "label"])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$s = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$n = /* @__PURE__ */ createElementVNode("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ createElementVNode("path", { d: "M14 2v6h6" })
], -1);
const _hoisted_3$k = [
  _hoisted_2$n
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$s, [..._hoisted_3$k]);
}
const IconLucideFile = { name: "lucide-file", render: render$5 };
const _hoisted_1$r = { class: "inline-flex items-center justify-center px-2 rounded space-x-1 bg-primaryDark" };
const _hoisted_2$m = { class: "max-w-[16rem] truncate" };
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "FileChip",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1$r, [
        createVNode(unref(IconLucideFile), { class: "opacity-75 svg-icons" }),
        createElementVNode("span", _hoisted_2$m, [
          renderSlot(_ctx.$slots, "default")
        ])
      ]);
    };
  }
});
var _a;
const isClient = typeof window !== "undefined";
const isDef = (val) => typeof val !== "undefined";
const isString = (val) => typeof val === "string";
const noop = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function increaseWithUnit(target, delta) {
  var _a2;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a2 = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a2[0]) || "";
  const unit = target.slice(value.length);
  const result = parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function tryOnBeforeMount(fn, sync = true) {
  if (getCurrentInstance())
    onBeforeMount(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function unrefElement(elRef) {
  var _a2;
  const plain = unref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el2) => {
    cleanup();
    if (!el2)
      return;
    el2.addEventListener(event, listener, options);
    cleanup = () => {
      el2.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
const createKeyPredicate = (keyFilter) => {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  else if (keyFilter)
    return () => true;
  else
    return () => false;
};
function onKeyStroke(key, handler, options = {}) {
  const { target = defaultWindow, eventName = "keydown", passive = false } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = Boolean(window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches2 = ref(false);
  const update = () => {
    if (!isSupported)
      return;
    if (!mediaQuery)
      mediaQuery = window2.matchMedia(query);
    matches2.value = mediaQuery.matches;
  };
  tryOnBeforeMount(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in mediaQuery)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches2;
}
const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
var __defProp$i = Object.defineProperty;
var __getOwnPropSymbols$k = Object.getOwnPropertySymbols;
var __hasOwnProp$k = Object.prototype.hasOwnProperty;
var __propIsEnum$k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$i = (obj, key, value) => key in obj ? __defProp$i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$i = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$k.call(b2, prop))
      __defNormalProp$i(a, prop, b2[prop]);
  if (__getOwnPropSymbols$k)
    for (var prop of __getOwnPropSymbols$k(b2)) {
      if (__propIsEnum$k.call(b2, prop))
        __defNormalProp$i(a, prop, b2[prop]);
    }
  return a;
};
function useBreakpoints(breakpoints, options = {}) {
  function getValue2(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window: window2 = defaultWindow } = options;
  function match(query) {
    if (!window2)
      return false;
    return window2.matchMedia(query).matches;
  }
  const greater = (k) => {
    return useMediaQuery(`(min-width: ${getValue2(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greater(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return __spreadValues$i({
    greater,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue2(k, -0.1)})`, options);
    },
    between(a, b2) {
      return useMediaQuery(`(min-width: ${getValue2(a)}) and (max-width: ${getValue2(b2, -0.1)})`, options);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue2(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue2(k, -0.1)})`);
    },
    isInBetween(a, b2) {
      return match(`(min-width: ${getValue2(a)}) and (max-width: ${getValue2(b2, -0.1)})`);
    }
  }, shortcutMethods);
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$e.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$e.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a2 = options, { window: window2 = defaultWindow } = _a2, observerOptions = __objRest$2(_a2, ["window"]);
  let observer;
  const isSupported = window2 && "ResizeObserver" in window2;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el2) => {
    cleanup();
    if (isSupported && window2 && el2) {
      observer = new ResizeObserver(callback);
      observer.observe(el2, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const width = ref(initialSize.width);
  const height = ref(initialSize.height);
  useResizeObserver(target, ([entry]) => {
    width.value = entry.contentRect.width;
    height.value = entry.contentRect.height;
  }, options);
  watch(() => unrefElement(target), (ele) => {
    width.value = ele ? initialSize.width : 0;
    height.value = ele ? initialSize.height : 0;
  });
  return {
    width,
    height
  };
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
function useVModel(props2, key, emit2, options = {}) {
  var _a2, _b, _c;
  const {
    passive = false,
    eventName,
    deep = false,
    defaultValue
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit2 || (vm == null ? void 0 : vm.emit) || ((_a2 = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a2.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  if (!key) {
    {
      key = "modelValue";
    }
  }
  event = eventName || event || `update:${key.toString()}`;
  const getValue2 = () => isDef(props2[key]) ? props2[key] : defaultValue;
  if (passive) {
    const proxy = ref(getValue2());
    watch(() => props2[key], (v) => proxy.value = v);
    watch(proxy, (v) => {
      if (v !== props2[key] || deep)
        _emit(event, v);
    }, {
      deep
    });
    return proxy;
  } else {
    return computed({
      get() {
        return getValue2();
      },
      set(value) {
        _emit(event, value);
      }
    });
  }
}
const _hoisted_1$q = ["placeholder", "type", "disabled"];
let inputIDCounter = 564275;
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "Input",
  props: {
    id: { default: "" },
    styles: { default: "" },
    modelValue: { default: "" },
    placeholder: { default: "" },
    inputStyles: { default: "input" },
    type: { default: "text" },
    label: { default: "" },
    disabled: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: true }
  },
  emits: ["submit", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const inputID = `input-${inputIDCounter++}`;
    const inputRef = ref();
    onMounted(async () => {
      var _a2;
      if (props2.autofocus) {
        await nextTick();
        (_a2 = inputRef.value) == null ? void 0 : _a2.focus();
      }
    });
    const props2 = __props;
    const emit2 = __emit;
    const inputText = useVModel(props2, "modelValue", emit2);
    onKeyStroke(
      "Enter",
      (e) => {
        if (!e.repeat) {
          return emit2("submit");
        }
      },
      { target: inputRef, eventName: "keydown" }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["relative flex", _ctx.styles])
      }, [
        withDirectives(createElementVNode("input", {
          id: inputID,
          class: normalizeClass(["input", _ctx.inputStyles]),
          ref_key: "inputRef",
          ref: inputRef,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(inputText) ? inputText.value = $event : null),
          placeholder: _ctx.placeholder,
          type: _ctx.type,
          autocomplete: "off",
          required: "",
          disabled: _ctx.disabled
        }, null, 10, _hoisted_1$q), [
          [vModelDynamic, unref(inputText)]
        ]),
        _ctx.label.length > 0 ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: inputID
        }, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "button")
      ], 2);
    };
  }
});
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "Intersection",
  emits: ["intersecting"],
  setup(__props, { emit: __emit }) {
    const observer = ref();
    const container = ref();
    const emit2 = __emit;
    onMounted(() => {
      observer.value = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          emit2("intersecting", entry);
        }
      });
      observer.value.observe(container.value);
    });
    onBeforeUnmount(() => {
      observer.value.disconnect();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 512);
    };
  }
});
const _hoisted_1$p = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$l = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$l
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, [..._hoisted_3$j]);
}
const IconLucideLoader = { name: "lucide-loader", render: render$4 };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "Spinner",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IconLucideLoader), { class: "animate-spin svg-icons" });
    };
  }
});
const _sfc_main$l = defineComponent({
  components: {
    HoppSmartLink: _sfc_main$v,
    HoppSmartSpinner: _sfc_main$m
  },
  props: {
    to: {
      type: String,
      default: ""
    },
    exact: {
      type: Boolean,
      default: true
    },
    blank: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    icon: {
      type: Object,
      default: null
    },
    svg: {
      type: Object,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    shortcut: {
      type: Array,
      default: () => []
    },
    active: {
      type: Boolean,
      default: false
    },
    activeInfoIcon: {
      type: Boolean,
      default: false
    },
    infoIcon: {
      type: Object,
      default: null
    }
  }
});
const _hoisted_1$o = { class: "font-semibold truncate max-w-[16rem]" };
const _hoisted_2$k = {
  key: 0,
  class: "my-2 text-left text-secondaryLight"
};
const _hoisted_3$i = {
  key: 3,
  class: "ml-4 inline-flex <sm:hidden font-medium"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HoppSmartSpinner = resolveComponent("HoppSmartSpinner");
  const _component_HoppSmartLink = resolveComponent("HoppSmartLink");
  return openBlock(), createBlock(_component_HoppSmartLink, {
    to: _ctx.to,
    exact: _ctx.exact,
    blank: _ctx.blank,
    class: normalizeClass(["inline-flex items-center flex-shrink-0 px-4 py-2 rounded transition hover:bg-primaryDark hover:text-secondaryDark focus:outline-none focus-visible:bg-primaryDark focus-visible:text-secondaryDark", [
      { "opacity-75 cursor-not-allowed": _ctx.disabled },
      { "pointer-events-none": _ctx.loading },
      { "flex-1": _ctx.label },
      { "flex-row-reverse justify-end": _ctx.reverse },
      {
        "border border-divider hover:border-dividerDark focus-visible:border-dividerDark": _ctx.outline
      }
    ]]),
    disabled: _ctx.disabled,
    tabindex: _ctx.loading ? "-1" : "0",
    role: "menuitem"
  }, {
    default: withCtx(() => [
      !_ctx.loading ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["inline-flex items-center", { "self-start": !!_ctx.infoIcon }])
      }, [
        _ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
          key: 0,
          class: normalizeClass(["opacity-75 svg-icons", [
            _ctx.label ? _ctx.reverse ? "ml-4" : "mr-4" : "",
            { "text-accent": _ctx.active }
          ]])
        }, null, 8, ["class"])) : createCommentVNode("", true)
      ], 2)) : (openBlock(), createBlock(_component_HoppSmartSpinner, {
        key: 1,
        class: "mr-4 text-secondaryDark"
      })),
      createElementVNode("div", {
        class: normalizeClass(["inline-flex items-start flex-1 truncate", { "flex-col": _ctx.description }])
      }, [
        createElementVNode("div", _hoisted_1$o, toDisplayString(_ctx.label), 1),
        _ctx.description ? (openBlock(), createElementBlock("p", _hoisted_2$k, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true)
      ], 2),
      _ctx.infoIcon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.infoIcon), {
        key: 2,
        class: normalizeClass(["items-center self-center ml-6 -mr-2 svg-icons", { "text-accent": _ctx.activeInfoIcon }])
      }, null, 8, ["class"])) : createCommentVNode("", true),
      _ctx.shortcut.length ? (openBlock(), createElementBlock("div", _hoisted_3$i, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.shortcut, (key, index2) => {
          return openBlock(), createElementBlock("kbd", {
            key: `key-${index2}`,
            class: "-mr-2 shortcut-key"
          }, toDisplayString(key), 1);
        }), 128))
      ])) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["to", "exact", "blank", "class", "disabled", "tabindex"]);
}
const HoppSmartItem = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$1]]);
const _hoisted_1$n = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$j = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M18 6L6 18M6 6l12 12"
}, null, -1);
const _hoisted_3$h = [
  _hoisted_2$j
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, [..._hoisted_3$h]);
}
const IconX = { name: "lucide-x", render: render$3 };
const _hoisted_1$m = { class: "flex min-h-screen items-end justify-center text-center sm:!block" };
const _hoisted_2$i = {
  key: 0,
  class: "sm:h-screen sm:align-middle <sm:hidden",
  "aria-hidden": "true"
};
const _hoisted_3$g = { class: "flex items-center justify-start flex-1" };
const _hoisted_4$9 = { class: "flex items-center justify-center" };
const _hoisted_5$7 = { class: "heading" };
const _hoisted_6$2 = { class: "flex items-center justify-end flex-1" };
const PORTAL_DOM_ID = "hoppscotch-modal-portal";
let stackIDTicker = 0;
const stack = (() => {
  const stack2 = [];
  return {
    push: stack2.push.bind(stack2),
    pop: stack2.pop.bind(stack2),
    peek: () => stack2.length === 0 ? void 0 : stack2[stack2.length - 1]
  };
})();
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  props: {
    dialog: { type: Boolean, default: false },
    title: { default: "" },
    dimissible: { type: Boolean, default: true },
    placement: { default: "top" },
    fullWidth: { type: Boolean, default: false },
    fullWidthBody: { type: Boolean, default: false },
    styles: { default: "sm:max-w-lg" },
    closeText: { default: null }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    var _a2;
    const { t, onModalOpen, onModalClose } = (_a2 = inject(HOPP_UI_OPTIONS)) != null ? _a2 : {};
    const emit2 = __emit;
    onBeforeUnmount(() => {
      onModalClose == null ? void 0 : onModalClose();
    });
    const stackId = ref(stackIDTicker++);
    const shouldCleanupDomOnUnmount = ref(true);
    const slots = useSlots();
    const hasFooterSlot = computed(() => {
      return !!slots.footer;
    });
    const modal = ref();
    onMounted(() => {
      const portal = getPortal();
      portal.appendChild(modal.value);
      stack.push(stackId.value);
      document.addEventListener("keydown", onKeyDown);
      onModalOpen == null ? void 0 : onModalOpen();
    });
    onBeforeUnmount(() => {
      if (shouldCleanupDomOnUnmount.value && modal.value) {
        getPortal().removeChild(modal.value);
      }
      stack.pop();
      document.removeEventListener("keydown", onKeyDown);
    });
    const close = () => {
      emit2("close");
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape" && stackId.value === stack.peek()) {
        e.preventDefault();
        close();
      }
    };
    const onTransitionLeaveStart = () => {
      close();
      shouldCleanupDomOnUnmount.value = false;
    };
    const getPortal = () => {
      let el2 = document.querySelector("#" + PORTAL_DOM_ID);
      if (el2) {
        return el2;
      }
      el2 = document.createElement("DIV");
      el2.id = PORTAL_DOM_ID;
      document.body.appendChild(el2);
      return el2;
    };
    return (_ctx, _cache) => {
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createBlock(Transition, {
        name: "fade",
        appear: "",
        onLeave: onTransitionLeaveStart
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            ref_key: "modal",
            ref: modal,
            class: "fixed inset-0 z-[1000] overflow-y-auto transition",
            role: "dialog"
          }, [
            createElementVNode("div", _hoisted_1$m, [
              createVNode(Transition, {
                name: "fade",
                appear: ""
              }, {
                default: withCtx(() => [
                  createElementVNode("div", {
                    class: "fixed inset-0 transition-opacity",
                    onTouchstart: _cache[1] || (_cache[1] = ($event) => !_ctx.dialog ? close() : null),
                    onTouchend: _cache[2] || (_cache[2] = ($event) => !_ctx.dialog ? close() : null),
                    onMouseup: _cache[3] || (_cache[3] = ($event) => !_ctx.dialog ? close() : null),
                    onMousedown: _cache[4] || (_cache[4] = ($event) => !_ctx.dialog ? close() : null)
                  }, [
                    createElementVNode("div", {
                      class: "absolute inset-0 bg-primaryLight opacity-80 focus:outline-none",
                      tabindex: "0",
                      onClick: _cache[0] || (_cache[0] = ($event) => !_ctx.dialog ? close() : null)
                    })
                  ], 32)
                ]),
                _: 1
              }),
              _ctx.placement === "center" ? (openBlock(), createElementBlock("span", _hoisted_2$i, "\u200B")) : createCommentVNode("", true),
              createVNode(Transition, {
                name: "bounce",
                appear: ""
              }, {
                default: withCtx(() => {
                  var _a3, _b, _c;
                  return [
                    createElementVNode("div", {
                      class: normalizeClass(["inline-block w-full overflow-hidden text-left align-bottom shadow-lg transform border-dividerDark bg-primary transition-all sm:rounded-xl sm:border sm:align-middle", [{ "mt-16 md:mb-8": _ctx.placement === "top" }, _ctx.styles]])
                    }, [
                      _ctx.title ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass(["flex items-center justify-between border-b border-dividerLight", { "p-4": !_ctx.fullWidth }])
                      }, [
                        createElementVNode("div", _hoisted_3$g, [
                          renderSlot(_ctx.$slots, "actions", {}, void 0, true)
                        ]),
                        createElementVNode("div", _hoisted_4$9, [
                          createElementVNode("h3", _hoisted_5$7, toDisplayString(_ctx.title), 1)
                        ]),
                        createElementVNode("div", _hoisted_6$2, [
                          _ctx.dimissible ? withDirectives((openBlock(), createBlock(unref(_sfc_main$3), {
                            key: 0,
                            title: (_c = (_b = _ctx.closeText) != null ? _b : (_a3 = unref(t)) == null ? void 0 : _a3("action.close")) != null ? _c : "Close",
                            icon: unref(IconX),
                            onClick: close
                          }, null, 8, ["title", "icon"])), [
                            [_directive_tippy, { theme: "tooltip", delay: [500, 20] }]
                          ]) : createCommentVNode("", true)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      createElementVNode("div", {
                        class: normalizeClass(["flex max-h-[60vh] flex-col overflow-y-auto", { "p-4": !_ctx.fullWidth && !_ctx.fullWidthBody }])
                      }, [
                        renderSlot(_ctx.$slots, "body", {}, void 0, true)
                      ], 2),
                      hasFooterSlot.value ? (openBlock(), createElementBlock("div", {
                        key: 1,
                        class: normalizeClass(["flex items-center justify-between flex-1 border-t border-dividerLight bg-primaryContrast", { "p-4": !_ctx.fullWidth }])
                      }, [
                        renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                      ], 2)) : createCommentVNode("", true)
                    ], 2)
                  ];
                }),
                _: 3
              })
            ])
          ], 512)
        ]),
        _: 3
      });
    };
  }
});
const Modal_vue_vue_type_style_index_0_scoped_2e8a4801_lang = "";
const HoppSmartModal = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-2e8a4801"]]);
const _sfc_main$j = defineComponent({
  props: {
    radius: {
      type: Number,
      default: 12
    },
    progress: {
      type: Number,
      default: 50
    },
    stroke: {
      type: Number,
      default: 4
    }
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    return {
      normalizedRadius,
      circumference
    };
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - this.progress / 100 * this.circumference;
    }
  }
});
const _hoisted_1$l = ["height", "width"];
const _hoisted_2$h = ["stroke-width", "r", "cx", "cy"];
const _hoisted_3$f = ["stroke-width", "r", "cx", "cy", "stroke-dasharray"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    height: _ctx.radius * 2,
    width: _ctx.radius * 2
  }, [
    createElementVNode("circle", {
      "stroke-width": _ctx.stroke,
      class: "stroke-green-500",
      fill: "transparent",
      r: _ctx.normalizedRadius,
      cx: _ctx.radius,
      cy: _ctx.radius
    }, null, 8, _hoisted_2$h),
    createElementVNode("circle", {
      "stroke-width": _ctx.stroke,
      stroke: "currentColor",
      fill: "transparent",
      r: _ctx.normalizedRadius,
      cx: _ctx.radius,
      cy: _ctx.radius,
      style: normalizeStyle({ strokeDashoffset: _ctx.strokeDashoffset }),
      "stroke-dasharray": _ctx.circumference + " " + _ctx.circumference
    }, null, 12, _hoisted_3$f)
  ], 8, _hoisted_1$l);
}
const ProgressRing = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render]]);
const _hoisted_1$k = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$g = /* @__PURE__ */ createElementVNode("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ createElementVNode("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }),
  /* @__PURE__ */ createElementVNode("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  })
], -1);
const _hoisted_3$e = [
  _hoisted_2$g
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, [..._hoisted_3$e]);
}
const IconCircleDot = { name: "lucide-circle-dot", render: render$2 };
const _hoisted_1$j = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$f = /* @__PURE__ */ createElementVNode("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$f
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, [..._hoisted_3$d]);
}
const IconCircle = { name: "lucide-circle", render: render$1 };
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "Radio",
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit2 = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(HoppSmartItem), {
        label: __props.label,
        icon: __props.selected ? unref(IconCircleDot) : unref(IconCircle),
        active: __props.selected,
        role: "radio",
        "aria-checked": __props.selected,
        onClick: _cache[0] || (_cache[0] = ($event) => emit2("change", __props.value))
      }, null, 8, ["label", "icon", "active", "aria-checked"]);
    };
  }
});
const _hoisted_1$i = { class: "flex flex-col" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "RadioGroup",
  props: {
    radios: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit2 = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$i, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.radios, (radio, index2) => {
          return openBlock(), createBlock(unref(_sfc_main$i), {
            key: `radio-${index2}`,
            value: radio.value,
            label: radio.label,
            selected: _ctx.modelValue === radio.value,
            onChange: ($event) => emit2("update:modelValue", radio.value)
          }, null, 8, ["value", "label", "selected", "onChange"]);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$h = { class: "z-[1000]" };
const _hoisted_2$e = {
  key: 0,
  class: "fixed top-0 right-0 z-30 flex flex-col h-full max-w-full overflow-auto border-l shadow-xl border-dividerDark bg-primary w-96"
};
const _hoisted_3$c = { class: "flex items-center justify-between p-2 border-b border-dividerLight" };
const _hoisted_4$8 = { class: "ml-4 heading" };
const _hoisted_5$6 = { class: "flex items-center" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "SlideOver",
  props: {
    show: { type: Boolean },
    title: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props2 = __props;
    const emit2 = __emit;
    watch(
      () => props2.show,
      (show) => {
        if (show)
          document.body.style.setProperty("overflow", "hidden");
        else
          document.body.style.removeProperty("overflow");
      }
    );
    onMounted(() => {
      document.addEventListener("keydown", (e) => {
        if (e.keyCode === 27 && props2.show)
          close();
      });
    });
    const close = () => {
      emit2("close");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$h, [
        createVNode(Transition, {
          name: "fade",
          appear: ""
        }, {
          default: withCtx(() => [
            _ctx.show ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "fixed inset-0 z-20 transition-opacity",
              onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => close(), ["esc"]))
            }, [
              createElementVNode("div", {
                class: "absolute inset-0 bg-primaryLight opacity-90 focus:outline-none",
                tabindex: "0",
                onClick: _cache[0] || (_cache[0] = ($event) => close())
              })
            ], 32)) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, {
          name: "slide",
          appear: ""
        }, {
          default: withCtx(() => [
            _ctx.show ? (openBlock(), createElementBlock("aside", _hoisted_2$e, [
              createElementVNode("div", _hoisted_3$c, [
                createElementVNode("h3", _hoisted_4$8, toDisplayString(_ctx.title), 1),
                createElementVNode("span", _hoisted_5$6, [
                  createVNode(unref(_sfc_main$3), {
                    icon: unref(IconX),
                    onClick: _cache[2] || (_cache[2] = ($event) => close())
                  }, null, 8, ["icon"])
                ])
              ]),
              renderSlot(_ctx.$slots, "content")
            ])) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ]);
    };
  }
});
const _hoisted_1$g = {
  key: 0,
  class: "flex flex-1 flex-col"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Tab",
  props: {
    id: {},
    label: {},
    icon: { default: null },
    info: { default: null },
    indicator: { type: Boolean, default: false },
    indicatorVariant: { default: "accent" },
    disabled: { type: Boolean, default: false },
    alignLast: { type: Boolean, default: false },
    order: { default: 0 }
  },
  setup(__props) {
    const props2 = __props;
    const tabMeta = computed(() => ({
      icon: props2.icon && typeof props2.icon === "object" ? markRaw(props2.icon) : props2.icon,
      indicator: props2.indicator,
      indicatorVariant: props2.indicatorVariant,
      info: props2.info,
      label: props2.label,
      disabled: props2.disabled,
      alignLast: props2.alignLast,
      order: props2.order
    }));
    const {
      activeTabID,
      renderInactive,
      addTabEntry,
      updateTabEntry,
      removeTabEntry,
      isUnmounting
    } = inject("tabs-system");
    const active = computed(() => activeTabID.value === props2.id);
    const shouldRender = computed(() => {
      if (renderInactive.value)
        return true;
      return active.value;
    });
    onMounted(() => {
      addTabEntry(props2.id, tabMeta.value);
    });
    watch(tabMeta, (newMeta) => {
      updateTabEntry(props2.id, newMeta);
    });
    onBeforeUnmount(() => {
      if (isUnmounting.value)
        return;
      removeTabEntry(props2.id);
    });
    return (_ctx, _cache) => {
      return shouldRender.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$g, [
        renderSlot(_ctx.$slots, "default")
      ], 512)), [
        [vShow, active.value]
      ]) : createCommentVNode("", true);
    };
  }
});
var __spreadArray$2 = globalThis && globalThis.__spreadArray || function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l2 = from.length, ar; i < l2; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
function pipe(a, ab, bc, cd, de2, ef, fg, gh, hi) {
  switch (arguments.length) {
    case 1:
      return a;
    case 2:
      return ab(a);
    case 3:
      return bc(ab(a));
    case 4:
      return cd(bc(ab(a)));
    case 5:
      return de2(cd(bc(ab(a))));
    case 6:
      return ef(de2(cd(bc(ab(a)))));
    case 7:
      return fg(ef(de2(cd(bc(ab(a))))));
    case 8:
      return gh(fg(ef(de2(cd(bc(ab(a)))))));
    case 9:
      return hi(gh(fg(ef(de2(cd(bc(ab(a))))))));
    default: {
      var ret = arguments[0];
      for (var i = 1; i < arguments.length; i++) {
        ret = arguments[i](ret);
      }
      return ret;
    }
  }
}
var dual = function(arity, body) {
  var isDataFirst = typeof arity === "number" ? function(args) {
    return args.length >= arity;
  } : arity;
  return function() {
    var args = Array.from(arguments);
    if (isDataFirst(arguments)) {
      return body.apply(this, args);
    }
    return function(self2) {
      return body.apply(void 0, __spreadArray$2([self2], args, false));
    };
  };
};
var not = function(predicate) {
  return function(a) {
    return !predicate(a);
  };
};
var __spreadArray$1 = globalThis && globalThis.__spreadArray || function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l2 = from.length, ar; i < l2; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var none$1 = { _tag: "None" };
var some$2 = function(a) {
  return { _tag: "Some", value: a };
};
var fromReadonlyNonEmptyArray$1 = function(as) {
  return __spreadArray$1([as[0]], as.slice(1), true);
};
var __spreadArray = globalThis && globalThis.__spreadArray || function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l2 = from.length, ar; i < l2; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var isNonEmpty$1 = function(as) {
  return as.length > 0;
};
var isOutOfBound$1 = function(i, as) {
  return i < 0 || i >= as.length;
};
var appendW = function(end) {
  return function(init) {
    return __spreadArray(__spreadArray([], init, true), [end], false);
  };
};
var append$1 = appendW;
var unsafeUpdateAt$1 = function(i, a, as) {
  var xs = fromReadonlyNonEmptyArray(as);
  xs[i] = a;
  return xs;
};
var fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray$1;
globalThis && globalThis.__spreadArray || function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l2 = from.length, ar; i < l2; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var findIndex$1 = function(predicate) {
  return function(as) {
    for (var i = 0; i < as.length; i++) {
      if (predicate(as[i])) {
        return some$2(i);
      }
    }
    return none$1;
  };
};
var isNonEmpty = isNonEmpty$1;
var append = append$1;
var isOutOfBound = isOutOfBound$1;
var findIndex = findIndex$1;
var updateAt = function(i, a) {
  return modifyAt(i, function() {
    return a;
  });
};
var deleteAt = function(i) {
  return function(as) {
    return isOutOfBound(i, as) ? none$1 : some$2(unsafeDeleteAt(i, as));
  };
};
var modifyAt = function(i, f2) {
  return function(as) {
    return isOutOfBound(i, as) ? none$1 : some$2(unsafeUpdateAt(i, f2(as[i]), as));
  };
};
var unsafeUpdateAt = function(i, a, as) {
  return isNonEmpty(as) ? unsafeUpdateAt$1(i, a, as) : [];
};
var unsafeDeleteAt = function(i, as) {
  var xs = as.slice();
  xs.splice(i, 1);
  return xs;
};
var some$1 = function(predicate) {
  return function(as) {
    return as.some(predicate);
  };
};
var exists = some$1;
var none = none$1;
var some = some$2;
function fromPredicate(predicate) {
  return function(a) {
    return predicate(a) ? some(a) : none;
  };
}
var map = function(f2) {
  return function(fa) {
    return isNone(fa) ? none : some(f2(fa.value));
  };
};
var flatMap = /* @__PURE__ */ dual(2, function(ma, f2) {
  return isNone(ma) ? none : f2(ma.value);
});
var isNone = function(fa) {
  return fa._tag === "None";
};
var getOrElseW = function(onNone) {
  return function(ma) {
    return isNone(ma) ? onNone() : ma.value;
  };
};
var chain = flatMap;
const _hoisted_1$f = { class: "flex flex-1" };
const _hoisted_2$d = ["aria-label", "disabled", "onKeyup", "onClick"];
const _hoisted_3$b = { key: 1 };
const _hoisted_4$7 = {
  key: 2,
  class: "tab-info"
};
const _hoisted_5$5 = { class: "flex items-center justify-center" };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  props: {
    styles: {
      type: String,
      default: ""
    },
    renderInactiveTabs: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      required: true
    },
    contentStyles: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props2 = __props;
    const emit2 = __emit;
    const throwError = (message) => {
      throw new Error(message);
    };
    const tabEntries = ref([]);
    const orderOf = (meta) => {
      const raw = meta.order;
      if (typeof raw !== "number" && typeof raw !== "string")
        return 0;
      const n = Number(raw);
      return Number.isFinite(n) ? n : 0;
    };
    const alignedTabs = computed(() => {
      const indexed = tabEntries.value.map(
        (entry, idx) => [entry, idx]
      );
      indexed.sort(([[, a], aIdx], [[, b2], bIdx]) => {
        const delta = orderOf(a) - orderOf(b2);
        return delta !== 0 ? delta : aIdx - bIdx;
      });
      const sorted = indexed.map(([entry]) => entry);
      const leftTabs = sorted.filter(([_, tabMeta]) => !tabMeta.alignLast);
      const rightTabs = sorted.filter(([_, tabMeta]) => tabMeta.alignLast);
      return { left: leftTabs, right: rightTabs };
    });
    const addTabEntry = (tabID, meta) => {
      tabEntries.value = pipe(
        tabEntries.value,
        fromPredicate(not(exists(([id]) => id === tabID))),
        map(append([tabID, meta])),
        getOrElseW(() => throwError(`Tab with duplicate ID created: '${tabID}'`))
      );
    };
    const updateTabEntry = (tabID, newMeta) => {
      tabEntries.value = pipe(
        tabEntries.value,
        findIndex(([id]) => id === tabID),
        chain(
          (index2) => pipe(
            tabEntries.value,
            updateAt(index2, [tabID, newMeta])
          )
        ),
        getOrElseW(() => throwError(`Failed to update tab entry: ${tabID}`))
      );
    };
    const removeTabEntry = (tabID) => {
      var _a2;
      tabEntries.value = pipe(
        tabEntries.value,
        findIndex(([id]) => id === tabID),
        chain((index2) => pipe(tabEntries.value, deleteAt(index2))),
        getOrElseW(() => throwError(`Failed to remove tab entry: ${tabID}`))
      );
      if (props2.modelValue === tabID) {
        const ordered = [...alignedTabs.value.left, ...alignedTabs.value.right];
        const next = (_a2 = ordered.find(([, meta]) => !meta.disabled)) != null ? _a2 : ordered[0];
        if (next)
          selectTab(next[0]);
      }
    };
    const isUnmounting = ref(false);
    provide("tabs-system", {
      renderInactive: computed(() => props2.renderInactiveTabs),
      activeTabID: computed(() => props2.modelValue),
      addTabEntry,
      updateTabEntry,
      removeTabEntry,
      isUnmounting
    });
    onBeforeUnmount(() => {
      isUnmounting.value = true;
    });
    const INDICATOR_DOT_CLASSES = {
      accent: "bg-accentLight",
      error: "bg-error",
      warning: "bg-warning",
      success: "bg-success",
      info: "bg-info"
    };
    const indicatorDotClass = (variant) => {
      const key = variant != null ? variant : "accent";
      return Object.prototype.hasOwnProperty.call(INDICATOR_DOT_CLASSES, key) ? INDICATOR_DOT_CLASSES[key] : INDICATOR_DOT_CLASSES.accent;
    };
    const selectTab = (id) => {
      emit2("update:modelValue", id);
    };
    return (_ctx, _cache) => {
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["flex h-full flex-1 flex-nowrap", { "!h-auto !flex-col": !__props.vertical }])
      }, [
        createElementVNode("div", {
          class: normalizeClass(["tabs relative border-dividerLight", [__props.vertical ? "border-r" : "border-b", __props.styles]])
        }, [
          createElementVNode("div", _hoisted_1$f, [
            createElementVNode("div", {
              class: normalizeClass(["flex flex-1 justify-between", { "flex-col": __props.vertical }])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(alignedTabs.value, (tabGroup, alignment) => {
                return openBlock(), createElementBlock("div", {
                  key: alignment,
                  class: normalizeClass(["flex flex-1", {
                    "flex-col space-y-2 p-2": __props.vertical,
                    "justify-end": alignment === "right"
                  }])
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(tabGroup, ([tabID, tabMeta]) => {
                    return withDirectives((openBlock(), createElementBlock("button", {
                      key: tabID,
                      class: normalizeClass(["tab", [
                        { active: __props.modelValue === tabID },
                        { vertical: __props.vertical },
                        { "!cursor-not-allowed opacity-75": tabMeta.disabled }
                      ]]),
                      "aria-label": tabMeta.label || "",
                      disabled: tabMeta.disabled,
                      role: "button",
                      onKeyup: withKeys(($event) => selectTab(tabID), ["enter"]),
                      onClick: ($event) => selectTab(tabID)
                    }, [
                      tabMeta.icon ? (openBlock(), createBlock(resolveDynamicComponent(tabMeta.icon), {
                        key: 0,
                        class: normalizeClass(["svg-icons", { "mr-2": tabMeta.label && !__props.vertical }])
                      }, null, 8, ["class"])) : createCommentVNode("", true),
                      tabMeta.label && !__props.vertical ? (openBlock(), createElementBlock("span", _hoisted_3$b, toDisplayString(tabMeta.label), 1)) : createCommentVNode("", true),
                      tabMeta.info && tabMeta.info !== "null" ? (openBlock(), createElementBlock("span", _hoisted_4$7, toDisplayString(tabMeta.info), 1)) : createCommentVNode("", true),
                      tabMeta.indicator ? (openBlock(), createElementBlock("span", {
                        key: 3,
                        class: normalizeClass(["ml-2 h-1 w-1 rounded-full", indicatorDotClass(tabMeta.indicatorVariant)])
                      }, null, 2)) : createCommentVNode("", true)
                    ], 42, _hoisted_2$d)), [
                      [_directive_tippy, {
                        theme: "tooltip",
                        placement: "left",
                        content: __props.vertical ? tabMeta.label : null
                      }]
                    ]);
                  }), 128))
                ], 2);
              }), 128)),
              createElementVNode("div", _hoisted_5$5, [
                renderSlot(_ctx.$slots, "actions", {}, void 0, true)
              ])
            ], 2)
          ])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(["contents h-full w-full", [
            {
              "!flex flex-1 flex-col overflow-y-auto": __props.vertical
            },
            __props.contentStyles
          ]])
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2)
      ], 2);
    };
  }
});
const Tabs_vue_vue_type_style_index_0_scoped_39ebcb65_lang = "";
const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-39ebcb65"]]);
const _hoisted_1$e = { class: "overflow-auto rounded-md border border-dividerDark shadow-md" };
const _hoisted_2$c = { class: "w-full table-fixed" };
const _hoisted_3$a = { class: "border-b border-dividerDark bg-primaryLight text-left text-sm text-secondary" };
const _hoisted_4$6 = {
  key: 0,
  class: "w-24"
};
const _hoisted_5$4 = ["checked", "disabled", "onClick"];
const _hoisted_6$1 = { class: "divide-y divide-divider" };
const _hoisted_7$1 = { key: 0 };
const _hoisted_8$1 = ["colspan"];
const _hoisted_9$1 = { class: "mx-auto my-3 h-5 w-5 text-center" };
const _hoisted_10$1 = { key: 1 };
const _hoisted_11$1 = ["colspan"];
const _hoisted_12$1 = /* @__PURE__ */ createElementVNode("p", null, "No data available", -1);
const _hoisted_13$1 = [
  _hoisted_12$1
];
const _hoisted_14 = ["onClick"];
const _hoisted_15 = { key: 0 };
const _hoisted_16 = ["checked", "onClick"];
const _hoisted_17 = ["onClick"];
const _hoisted_18 = { class: "flex flex-col truncate" };
const _hoisted_19 = { class: "truncate" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Table",
  props: {
    showYBorder: { type: Boolean, default: false },
    list: {},
    headings: {},
    selectedRows: { default: void 0 },
    sort: { default: void 0 },
    loading: { type: Boolean, default: false },
    rowStyles: { default: () => ({}) },
    getRowStyleKey: { type: Function, default: () => null }
  },
  emits: ["onRowClicked", "update:list", "update:selectedRows"],
  setup(__props, { emit: __emit }) {
    const props2 = __props;
    const emit2 = __emit;
    const workingList = useVModel(props2, "list", emit2);
    const selectedRows = useVModel(props2, "selectedRows", emit2);
    watch(workingList.value, (updatedList) => {
      if (props2.selectedRows) {
        updatedList = updatedList.map((item) => ({
          ...item,
          selected: false
        }));
      }
    });
    const onRowClicked = (item) => emit2("onRowClicked", item);
    const isRowSelected = (item) => {
      var _a2;
      const { selected, ...data } = item;
      return (_a2 = selectedRows.value) == null ? void 0 : _a2.some((row) => isEqual(row, data));
    };
    const toggleRow = (item) => {
      var _a2, _b, _c;
      item.selected = !item.selected;
      const { selected, ...data } = item;
      const index2 = (_b = (_a2 = selectedRows.value) == null ? void 0 : _a2.findIndex((row) => isEqual(row, data))) != null ? _b : -1;
      if (item.selected && !isRowSelected(data)) {
        selectedRows.value.push(data);
      } else if (index2 !== -1) {
        (_c = selectedRows.value) == null ? void 0 : _c.splice(index2, 1);
      }
    };
    const selectAllCheckbox = ref(null);
    const toggleAllRows = () => {
      var _a2;
      const isChecked = (_a2 = selectAllCheckbox.value) == null ? void 0 : _a2.checked;
      workingList.value.forEach((item) => {
        var _a3, _b;
        item.selected = isChecked;
        const { selected, ...data } = item;
        if (isChecked) {
          if (!isRowSelected(item)) {
            selectedRows.value.push(data);
          }
          return;
        }
        const index2 = (_b = (_a3 = selectedRows.value) == null ? void 0 : _a3.findIndex((row) => isEqual(row, data))) != null ? _b : -1;
        selectedRows.value.splice(index2, 1);
      });
    };
    const areAllRowsSelected = computed(() => {
      var _a2;
      if (workingList.value.length === 0 || ((_a2 = selectedRows.value) == null ? void 0 : _a2.length) === 0)
        return false;
      return workingList.value.every((item) => {
        var _a3;
        const { selected, ...data } = item;
        return (_a3 = selectedRows.value) == null ? void 0 : _a3.some((row) => isEqual(row, data));
      });
    });
    watchEffect(() => {
      var _a2;
      if (((_a2 = selectedRows.value) == null ? void 0 : _a2.length) === 0) {
        workingList.value.forEach((item) => {
          item.selected = false;
        });
      }
    });
    const getRowCustomStyle = (rowData) => {
      var _a2;
      if (typeof props2.rowStyles === "string") {
        return props2.rowStyles;
      }
      const styleKey = (_a2 = props2.getRowStyleKey) == null ? void 0 : _a2.call(props2, rowData);
      if (!styleKey || !props2.rowStyles[styleKey])
        return "";
      return props2.rowStyles[styleKey].classes || "";
    };
    const sortList = (key, direction) => {
      workingList.value.sort((a, b2) => {
        const valueA = a[key];
        const valueB = b2[key];
        return direction === "ascending" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      });
    };
    watch(
      () => {
        var _a2;
        return (_a2 = props2.sort) == null ? void 0 : _a2.direction;
      },
      () => {
        if (props2.sort) {
          sortList(props2.sort.key, props2.sort.direction);
        }
      },
      { immediate: true }
    );
    const columnSpan = computed(
      () => {
        var _a2, _b;
        return ((_b = (_a2 = props2.headings) == null ? void 0 : _a2.length) != null ? _b : 0) + (props2.selectedRows ? 1 : 0);
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        renderSlot(_ctx.$slots, "extension"),
        createElementVNode("table", _hoisted_2$c, [
          createElementVNode("thead", null, [
            createElementVNode("tr", _hoisted_3$a, [
              unref(selectedRows) ? (openBlock(), createElementBlock("th", _hoisted_4$6, [
                createElementVNode("input", {
                  ref_key: "selectAllCheckbox",
                  ref: selectAllCheckbox,
                  type: "checkbox",
                  checked: areAllRowsSelected.value,
                  disabled: _ctx.loading,
                  class: "flex h-full w-full items-center justify-center",
                  onClick: withModifiers(toggleAllRows, ["stop"])
                }, null, 8, _hoisted_5$4)
              ])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "head", {}, () => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.headings, (th) => {
                  var _a2;
                  return openBlock(), createElementBlock("th", {
                    key: th.key,
                    scope: "col",
                    class: "px-6 py-3"
                  }, toDisplayString((_a2 = th.label) != null ? _a2 : th.key), 1);
                }), 128))
              ])
            ])
          ]),
          createElementVNode("tbody", _hoisted_6$1, [
            _ctx.loading ? (openBlock(), createElementBlock("tr", _hoisted_7$1, [
              renderSlot(_ctx.$slots, "loading-state", {}, () => [
                createElementVNode("td", { colspan: columnSpan.value }, [
                  createElementVNode("div", _hoisted_9$1, [
                    createVNode(_sfc_main$m)
                  ])
                ], 8, _hoisted_8$1)
              ])
            ])) : !_ctx.list.length ? (openBlock(), createElementBlock("tr", _hoisted_10$1, [
              renderSlot(_ctx.$slots, "empty-state", {}, () => [
                createElementVNode("td", {
                  colspan: columnSpan.value,
                  class: "py-3 text-center"
                }, _hoisted_13$1, 8, _hoisted_11$1)
              ])
            ])) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(unref(workingList), (rowData, rowIndex) => {
              return openBlock(), createElementBlock("tr", {
                key: rowIndex,
                class: normalizeClass(["rounded-xl text-secondaryDark hover:cursor-pointer hover:bg-divider", [
                  { "divide-x divide-divider": _ctx.showYBorder },
                  getRowCustomStyle(rowData)
                ]]),
                onClick: ($event) => onRowClicked(rowData)
              }, [
                unref(selectedRows) ? (openBlock(), createElementBlock("td", _hoisted_15, [
                  createElementVNode("input", {
                    type: "checkbox",
                    checked: isRowSelected(rowData),
                    class: "flex h-full w-full items-center justify-center",
                    onClick: withModifiers(($event) => toggleRow(rowData), ["stop"])
                  }, null, 8, _hoisted_16)
                ])) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "body", { row: rowData }, () => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.headings, (cellHeading) => {
                    return openBlock(), createElementBlock("td", {
                      key: cellHeading.key,
                      class: "px-4 py-2",
                      onClick: ($event) => !cellHeading.preventClick && onRowClicked(rowData)
                    }, [
                      renderSlot(_ctx.$slots, cellHeading.key, { item: rowData }, () => {
                        var _a2;
                        return [
                          createElementVNode("div", _hoisted_18, [
                            createElementVNode("span", _hoisted_19, toDisplayString((_a2 = rowData[cellHeading.key]) != null ? _a2 : "-"), 1)
                          ])
                        ];
                      })
                    ], 8, _hoisted_17);
                  }), 128))
                ])
              ], 10, _hoisted_14);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-0258fd94"), n = n(), popScopeId(), n);
const _hoisted_1$d = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "handle" }, null, -1));
const _hoisted_2$b = [
  _hoisted_1$d
];
const _hoisted_3$9 = { class: "pl-0 font-semibold truncate align-middle cursor-pointer" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Toggle",
  props: {
    on: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit2 = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "inline-flex items-center justify-center cursor-pointer transition flex-nowrap group hover:text-secondaryDark rounded py-0.5 px-1 -my-0.5 -mx-1 focus:outline-none focus-visible:ring focus-visible:ring-accent focus-visible:text-secondaryDark",
        tabindex: "0",
        onClick: _cache[0] || (_cache[0] = ($event) => emit2("change")),
        onKeyup: _cache[1] || (_cache[1] = withKeys(($event) => emit2("change"), ["enter"]))
      }, [
        createElementVNode("span", {
          ref: "toggle",
          class: normalizeClass(["toggle", { on: __props.on }])
        }, _hoisted_2$b, 2),
        createElementVNode("span", _hoisted_3$9, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ], 32);
    };
  }
});
const Toggle_vue_vue_type_style_index_0_scoped_0258fd94_lang = "";
const Toggle = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-0258fd94"]]);
const _hoisted_1$c = {
  key: 0,
  class: "flex flex-col flex-1 overflow-y-auto"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Window",
  props: {
    label: { default: null },
    info: { default: null },
    id: {},
    isRemovable: { type: Boolean, default: true },
    closeVisibility: { default: "always" },
    selected: { type: Boolean, default: false }
  },
  setup(__props) {
    const slots = useSlots();
    const props2 = __props;
    const tabMeta = computed(() => ({
      info: props2.info,
      label: props2.label,
      isRemovable: props2.isRemovable,
      icon: slots.icon,
      suffix: slots.suffix,
      tabhead: slots.tabhead,
      closeVisibility: props2.closeVisibility
    }));
    const {
      activeTabID,
      renderInactive,
      addTabEntry,
      updateTabEntry,
      removeTabEntry
    } = inject("tabs-system");
    const active = computed(() => activeTabID.value === props2.id);
    const shouldRender = computed(() => {
      if (renderInactive.value)
        return true;
      return active.value;
    });
    onMounted(() => {
      addTabEntry(props2.id, tabMeta.value);
    });
    watch(tabMeta, (newMeta) => {
      updateTabEntry(props2.id, newMeta);
    });
    onBeforeUnmount(() => {
      removeTabEntry(props2.id);
    });
    return (_ctx, _cache) => {
      return shouldRender.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$c, [
        renderSlot(_ctx.$slots, "default")
      ], 512)), [
        [vShow, active.value]
      ]) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$b = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 12h14m-7-7v14"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$a
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, [..._hoisted_3$8]);
}
const IconPlus = { name: "lucide-plus", render };
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var version = "1.14.0";
function userAgent(pattern) {
  if (typeof window !== "undefined" && window.navigator) {
    return !!/* @__PURE__ */ navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};
function on(el2, event, fn) {
  el2.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el2, event, fn) {
  el2.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(el2, selector) {
  if (!selector)
    return;
  selector[0] === ">" && (selector = selector.substring(1));
  if (el2) {
    try {
      if (el2.matches) {
        return el2.matches(selector);
      } else if (el2.msMatchesSelector) {
        return el2.msMatchesSelector(selector);
      } else if (el2.webkitMatchesSelector) {
        return el2.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el2) {
  return el2.host && el2 !== document && el2.host.nodeType ? el2.host : el2.parentNode;
}
function closest(el2, selector, ctx, includeCTX) {
  if (el2) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === ">" ? el2.parentNode === ctx && matches(el2, selector) : matches(el2, selector)) || includeCTX && el2 === ctx) {
        return el2;
      }
      if (el2 === ctx)
        break;
    } while (el2 = getParentOrHost(el2));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el2, name, state) {
  if (el2 && name) {
    if (el2.classList) {
      el2.classList[state ? "add" : "remove"](name);
    } else {
      var className = (" " + el2.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
      el2.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
    }
  }
}
function css(el2, prop, val) {
  var style = el2 && el2.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el2, "");
      } else if (el2.currentStyle) {
        val = el2.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf("webkit") === -1) {
        prop = "-webkit-" + prop;
      }
      style[prop] = val + (typeof val === "string" ? "" : "px");
    }
  }
}
function matrix(el2, selfOnly) {
  var appliedTransforms = "";
  if (typeof el2 === "string") {
    appliedTransforms = el2;
  } else {
    do {
      var transform = css(el2, "transform");
      if (transform && transform !== "none") {
        appliedTransforms = transform + " " + appliedTransforms;
      }
    } while (!selfOnly && (el2 = el2.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
function getRect(el2, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el2.getBoundingClientRect && el2 !== window)
    return;
  var elRect, top, left, bottom, right, height, width;
  if (el2 !== window && el2.parentNode && el2 !== getWindowScrollingElement()) {
    elRect = el2.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el2 !== window) {
    container = container || el2.parentNode;
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
          var containerRect = container.getBoundingClientRect();
          top -= containerRect.top + parseInt(css(container, "border-top-width"));
          left -= containerRect.left + parseInt(css(container, "border-left-width"));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el2 !== window) {
    var elMatrix = matrix(container || el2), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top,
    left,
    bottom,
    right,
    width,
    height
  };
}
function isScrolledPast(el2, elSide, parentSide) {
  var parent2 = getParentAutoScrollElement(el2, true), elSideVal = getRect(el2)[elSide];
  while (parent2) {
    var parentSideVal = getRect(parent2)[parentSide], visible = void 0;
    if (parentSide === "top" || parentSide === "left") {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible)
      return parent2;
    if (parent2 === getWindowScrollingElement())
      break;
    parent2 = getParentAutoScrollElement(parent2, false);
  }
  return false;
}
function getChild(el2, childNum, options, includeDragEl) {
  var currentChild = 0, i = 0, children = el2.children;
  while (i < children.length) {
    if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el2, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}
function lastChild(el2, selector) {
  var last2 = el2.lastElementChild;
  while (last2 && (last2 === Sortable.ghost || css(last2, "display") === "none" || selector && !matches(last2, selector))) {
    last2 = last2.previousElementSibling;
  }
  return last2 || null;
}
function index$1(el2, selector) {
  var index2 = 0;
  if (!el2 || !el2.parentNode) {
    return -1;
  }
  while (el2 = el2.previousElementSibling) {
    if (el2.nodeName.toUpperCase() !== "TEMPLATE" && el2 !== Sortable.clone && (!selector || matches(el2, selector))) {
      index2++;
    }
  }
  return index2;
}
function getRelativeScrollOffset(el2) {
  var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
  if (el2) {
    do {
      var elMatrix = matrix(el2), scaleX = elMatrix.a, scaleY = elMatrix.d;
      offsetLeft += el2.scrollLeft * scaleX;
      offsetTop += el2.scrollTop * scaleY;
    } while (el2 !== winScroller && (el2 = el2.parentNode));
  }
  return [offsetLeft, offsetTop];
}
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i))
      continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key])
        return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el2, includeSelf) {
  if (!el2 || !el2.getBoundingClientRect)
    return getWindowScrollingElement();
  var elem = el2;
  var gotSelf = false;
  do {
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
        if (!elem.getBoundingClientRect || elem === document.body)
          return getWindowScrollingElement();
        if (gotSelf || includeSelf)
          return elem;
        gotSelf = true;
      }
    }
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function() {
    if (!_throttleTimeout) {
      var args = arguments, _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function() {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el2, x2, y2) {
  el2.scrollLeft += x2;
  el2.scrollTop += y2;
}
function clone(el2) {
  var Polymer = window.Polymer;
  var $2 = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el2).cloneNode(true);
  } else if ($2) {
    return $2(el2).clone(true)[0];
  } else {
    return el2.cloneNode(true);
  }
}
var expando = "Sortable" + new Date().getTime();
function AnimationStateManager() {
  var animationStates = [], animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation)
        return;
      var children = [].slice.call(this.el.children);
      children.forEach(function(child) {
        if (css(child, "display") === "none" || child === Sortable.ghost)
          return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === "function")
          callback();
        return;
      }
      var animating = false, animationTime = 0;
      animationStates.forEach(function(state) {
        var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
        if (targetMatrix) {
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function() {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === "function")
          callback();
      } else {
        animationCallbackId = setTimeout(function() {
          if (typeof callback === "function")
            callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, "transition", "");
        css(target, "transform", "");
        var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
        this.forRepaintDummy = repaint(target);
        css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
        css(target, "transform", "translate3d(0,0,0)");
        typeof target.animated === "number" && clearTimeout(target.animated);
        target.animated = setTimeout(function() {
          css(target, "transition", "");
          css(target, "transform", "");
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin2) {
    for (var option2 in defaults) {
      if (defaults.hasOwnProperty(option2) && !(option2 in plugin2)) {
        plugin2[option2] = defaults[option2];
      }
    }
    plugins.forEach(function(p2) {
      if (p2.pluginName === plugin2.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin2.pluginName, " more than once");
      }
    });
    plugins.push(plugin2);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function() {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + "Global";
    plugins.forEach(function(plugin2) {
      if (!sortable[plugin2.pluginName])
        return;
      if (sortable[plugin2.pluginName][eventNameGlobal]) {
        sortable[plugin2.pluginName][eventNameGlobal](_objectSpread2({
          sortable
        }, evt));
      }
      if (sortable.options[plugin2.pluginName] && sortable[plugin2.pluginName][eventName]) {
        sortable[plugin2.pluginName][eventName](_objectSpread2({
          sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el2, defaults2, options) {
    plugins.forEach(function(plugin2) {
      var pluginName = plugin2.pluginName;
      if (!sortable.options[pluginName] && !plugin2.initializeByDefault)
        return;
      var initialized = new plugin2(sortable, el2, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;
      _extends(defaults2, initialized.defaults);
    });
    for (var option2 in sortable.options) {
      if (!sortable.options.hasOwnProperty(option2))
        continue;
      var modified = this.modifyOption(sortable, option2, sortable.options[option2]);
      if (typeof modified !== "undefined") {
        sortable.options[option2] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function(plugin2) {
      if (typeof plugin2.eventProperties !== "function")
        return;
      _extends(eventProperties, plugin2.eventProperties.call(sortable[plugin2.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function(plugin2) {
      if (!sortable[plugin2.pluginName])
        return;
      if (plugin2.optionListeners && typeof plugin2.optionListeners[name] === "function") {
        modifiedValue = plugin2.optionListeners[name].call(sortable[plugin2.pluginName], value);
      }
    });
    return modifiedValue;
  }
};
function dispatchEvent(_ref) {
  var sortable = _ref.sortable, rootEl2 = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl2 = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex2 = _ref.oldIndex, newIndex2 = _ref.newIndex, oldDraggableIndex2 = _ref.oldDraggableIndex, newDraggableIndex2 = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl2 && rootEl2[expando];
  if (!sortable)
    return;
  var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl2;
  evt.from = fromEl || rootEl2;
  evt.item = targetEl || rootEl2;
  evt.clone = cloneEl2;
  evt.oldIndex = oldIndex2;
  evt.newIndex = newIndex2;
  evt.oldDraggableIndex = oldDraggableIndex2;
  evt.newDraggableIndex = newDraggableIndex2;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable2 ? putSortable2.lastPutMode : void 0;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option2 in allEventProperties) {
    evt[option2] = allEventProperties[option2];
  }
  if (rootEl2) {
    rootEl2.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}
var _excluded = ["evt"];
var pluginEvent2 = function pluginEvent3(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    dragStarted: moved,
    putSortable,
    activeSortable: Sortable.active,
    originalEvent,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable,
        name,
        originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable,
    cloneEl,
    targetEl: dragEl,
    rootEl,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex
  }, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, ghostRelativeParent, ghostRelativeParentInitialScroll = [], _silent = false, savedInputChecked = [];
var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
  if (!documentExists)
    return;
  if (IE11OrLess) {
    return false;
  }
  var el2 = document.createElement("x");
  el2.style.cssText = "pointer-events:auto";
  return el2.style.pointerEvents === "auto";
}(), _detectDirection = function _detectDirection2(el2, options) {
  var elCSS = css(el2), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el2, 0, options), child2 = getChild(el2, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
  if (elCSS.display === "flex") {
    return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  }
  if (elCSS.display === "grid") {
    return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  }
  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
    var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
    return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
  }
  return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
}, _dragElInRowColumn = function _dragElInRowColumn2(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, _detectNearestEmptySortable = function _detectNearestEmptySortable2(x2, y2) {
  var ret;
  sortables.some(function(sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable))
      return;
    var rect = getRect(sortable), insideHorizontally = x2 >= rect.left - threshold && x2 <= rect.right + threshold, insideVertically = y2 >= rect.top - threshold && y2 <= rect.bottom + threshold;
    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
}, _prepareGroup = function _prepareGroup2(options) {
  function toFn(value, pull) {
    return function(to, from, dragEl2, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
      if (value == null && (pull || sameGroup)) {
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === "clone") {
        return value;
      } else if (typeof value === "function") {
        return toFn(value(to, from, dragEl2, evt), pull)(to, from, dragEl2, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }
  var group = {};
  var originalGroup = options.group;
  if (!originalGroup || _typeof(originalGroup) != "object") {
    originalGroup = {
      name: originalGroup
    };
  }
  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "none");
  }
}, _unhideGhostForTarget = function _unhideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "");
  }
};
if (documentExists) {
  document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent2(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl2(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
function Sortable(el2, options) {
  if (!(el2 && el2.nodeType && el2.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el2));
  }
  this.el = el2;
  this.options = options = _extends({}, options);
  el2[expando] = this;
  var defaults2 = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el2.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: false,
    invertedSwapThreshold: null,
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el2, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl2) {
      dataTransfer.setData("Text", dragEl2.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el2, defaults2);
  for (var name in defaults2) {
    !(name in options) && (options[name] = defaults2[name]);
  }
  _prepareGroup(options);
  for (var fn in this) {
    if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
      this[fn] = this[fn].bind(this);
    }
  }
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    this.options.touchStartThreshold = 1;
  }
  if (options.supportPointer) {
    on(el2, "pointerdown", this._onTapStart);
  } else {
    on(el2, "mousedown", this._onTapStart);
    on(el2, "touchstart", this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el2, "dragover", this);
    on(el2, "dragenter", this);
  }
  sortables.push(this.el);
  options.store && options.store.get && this.sort(options.store.get(this) || []);
  _extends(this, AnimationStateManager());
}
Sortable.prototype = {
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(evt) {
    if (!evt.cancelable)
      return;
    var _this = this, el2 = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
    _saveInputCheckedState(el2);
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return;
    }
    if (originalTarget.isContentEditable) {
      return;
    }
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") {
      return;
    }
    target = closest(target, options.draggable, el2, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      return;
    }
    oldIndex = index$1(target);
    oldDraggableIndex = index$1(target, options.draggable);
    if (typeof filter === "function") {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: "filter",
          targetEl: target,
          toEl: el2,
          fromEl: el2
        });
        pluginEvent2("filter", _this, {
          evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    } else if (filter) {
      filter = filter.split(",").some(function(criteria) {
        criteria = closest(originalTarget, criteria.trim(), el2, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: "filter",
            targetEl: target,
            fromEl: el2,
            toEl: el2
          });
          pluginEvent2("filter", _this, {
            evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el2, false)) {
      return;
    }
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(evt, touch, target) {
    var _this = this, el2 = _this.el, options = _this.options, ownerDocument = el2.ownerDocument, dragStartFn;
    if (target && !dragEl && target.parentNode === el2) {
      var dragRect = getRect(target);
      rootEl = el2;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style["will-change"] = "all";
      dragStartFn = function dragStartFn2() {
        pluginEvent2("delayEnded", _this, {
          evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }
        _this._triggerDragStart(evt, touch);
        _dispatchEvent({
          sortable: _this,
          name: "choose",
          originalEvent: evt
        });
        toggleClass(dragEl, options.chosenClass, true);
      };
      options.ignore.split(",").forEach(function(criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mouseup", _this._onDrop);
      on(ownerDocument, "touchend", _this._onDrop);
      on(ownerDocument, "touchcancel", _this._onDrop);
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent2("delayStart", this, {
        evt
      });
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        on(ownerDocument, "mouseup", _this._disableDelayedDrag);
        on(ownerDocument, "touchend", _this._disableDelayedDrag);
        on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
        on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
        on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._disableDelayedDrag);
    off(ownerDocument, "touchend", this._disableDelayedDrag);
    off(ownerDocument, "touchcancel", this._disableDelayedDrag);
    off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(evt, touch) {
    touch = touch || evt.pointerType == "touch" && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, "pointermove", this._onTouchMove);
      } else if (touch) {
        on(document, "touchmove", this._onTouchMove);
      } else {
        on(document, "mousemove", this._onTouchMove);
      }
    } else {
      on(dragEl, "dragend", this);
      on(rootEl, "dragstart", this._onDragStart);
    }
    try {
      if (document.selection) {
        _nextTick(function() {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {
    }
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent2("dragStarted", this, {
        evt
      });
      if (this.nativeDraggable) {
        on(document, "dragover", _checkOutsideTargetEl);
      }
      var options = this.options;
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();
      _dispatchEvent({
        sortable: this,
        name: "start",
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent2 = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent2)
          break;
        parent2 = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent2) {
        do {
          if (parent2[expando]) {
            var inserted = void 0;
            inserted = parent2[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target,
              rootEl: parent2
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent2;
        } while (parent2 = parent2.parentNode);
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(evt) {
    if (tapEvt) {
      var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, "webkitTransform", cssMatrix);
        css(ghostEl, "mozTransform", cssMatrix);
        css(ghostEl, "msTransform", cssMatrix);
        css(ghostEl, "transform", cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options;
      if (PositionGhostAbsolutely) {
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document)
            ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, "transition", "");
      css(ghostEl, "transform", "");
      css(ghostEl, "box-sizing", "border-box");
      css(ghostEl, "margin", 0);
      css(ghostEl, "top", rect.top);
      css(ghostEl, "left", rect.left);
      css(ghostEl, "width", rect.width);
      css(ghostEl, "height", rect.height);
      css(ghostEl, "opacity", "0.8");
      css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
      css(ghostEl, "zIndex", "100000");
      css(ghostEl, "pointerEvents", "none");
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);
      css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
    }
  },
  _onDragStart: function _onDragStart(evt, fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent2("dragStart", this, {
      evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent2("setupClone", this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style["will-change"] = "";
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }
    _this.cloneId = _nextTick(function() {
      pluginEvent2("clone", _this);
      if (Sortable.eventCanceled)
        return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: "clone"
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      off(document, "mouseup", _this._onDrop);
      off(document, "touchend", _this._onDrop);
      off(document, "touchcancel", _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = "move";
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, "drop", _this);
      css(dragEl, "transform", "translateZ(0)");
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, "selectstart", _this);
    moved = true;
    if (Safari) {
      css(document.body, "user-select", "none");
    }
  },
  _onDragOver: function _onDragOver(evt) {
    var el2 = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
    if (_silent)
      return;
    function dragOverEvent(name, extra) {
      pluginEvent2(name, _this, _objectSpread2({
        evt,
        isOwner,
        axis: vertical ? "vertical" : "horizontal",
        revert,
        dragRect,
        targetRect,
        canSort,
        fromSortable,
        target,
        completed,
        onMove: function onMove(target2, after2) {
          return _onMove(rootEl, el2, dragEl, dragRect, target2, getRect(target2), evt, after2);
        },
        changed
      }, extra));
    }
    function capture() {
      dragOverEvent("dragOverAnimationCapture");
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }
    function completed(insertion) {
      dragOverEvent("dragOverCompleted", {
        insertion
      });
      if (insertion) {
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function() {
          dragOverEvent("dragOverAnimationComplete");
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }
      if (target === dragEl && !dragEl.animated || target === el2 && !target.animated) {
        lastTarget = null;
      }
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }
    function changed() {
      newIndex = index$1(dragEl);
      newDraggableIndex = index$1(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: "change",
        toEl: el2,
        newIndex,
        newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el2, true);
    dragOverEvent("dragOver");
    if (Sortable.eventCanceled)
      return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === "vertical";
      dragRect = getRect(dragEl);
      dragOverEvent("dragOverValid");
      if (Sortable.eventCanceled)
        return completedFired;
      if (revert) {
        parentEl = rootEl;
        capture();
        this._hideClone();
        dragOverEvent("revert");
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el2, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        if (elLastChild === dragEl) {
          return completed(false);
        }
        if (elLastChild && el2 === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el2, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el2.appendChild(dragEl);
          parentEl = el2;
          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        var firstChild = getChild(el2, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el2, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el2.insertBefore(dragEl, firstChild);
          parentEl = el2;
          changed();
          return completed(true);
        }
      } else if (target.parentNode === el2) {
        targetRect = getRect(target);
        var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el2, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          var dragIndex = index$1(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
        }
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling, after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el2, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el2.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode;
          if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el2.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, "mousemove", this._onTouchMove);
    off(document, "touchmove", this._onTouchMove);
    off(document, "pointermove", this._onTouchMove);
    off(document, "dragover", nearestEmptyInsertDetectEvent);
    off(document, "mousemove", nearestEmptyInsertDetectEvent);
    off(document, "touchmove", nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._onDrop);
    off(ownerDocument, "touchend", this._onDrop);
    off(ownerDocument, "pointerup", this._onDrop);
    off(ownerDocument, "touchcancel", this._onDrop);
    off(document, "selectstart", this);
  },
  _onDrop: function _onDrop(evt) {
    var el2 = this.el, options = this.options;
    newIndex = index$1(dragEl);
    newDraggableIndex = index$1(dragEl, options.draggable);
    pluginEvent2("drop", this, {
      evt
    });
    parentEl = dragEl && dragEl.parentNode;
    newIndex = index$1(dragEl);
    newDraggableIndex = index$1(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);
    if (this.nativeDraggable) {
      off(document, "drop", this);
      off(el2, "dragstart", this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, "user-select", "");
    }
    css(dragEl, "transform", "");
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") {
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, "dragend", this);
        }
        _disableDraggable(dragEl);
        dragEl.style["will-change"] = "";
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);
        _dispatchEvent({
          sortable: this,
          name: "unchoose",
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            _dispatchEvent({
              rootEl: parentEl,
              name: "add",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "remove",
              toEl: parentEl,
              originalEvent: evt
            });
            _dispatchEvent({
              rootEl: parentEl,
              name: "sort",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "sort",
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              _dispatchEvent({
                sortable: this,
                name: "update",
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: "sort",
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: "end",
            toEl: parentEl,
            originalEvent: evt
          });
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent2("nulling", this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function(el2) {
      el2.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(evt) {
    switch (evt.type) {
      case "drop":
      case "dragend":
        this._onDrop(evt);
        break;
      case "dragenter":
      case "dragover":
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case "selectstart":
        evt.preventDefault();
        break;
    }
  },
  toArray: function toArray() {
    var order = [], el2, children = this.el.children, i = 0, n = children.length, options = this.options;
    for (; i < n; i++) {
      el2 = children[i];
      if (closest(el2, options.draggable, this.el, false)) {
        order.push(el2.getAttribute(options.dataIdAttr) || _generateId(el2));
      }
    }
    return order;
  },
  sort: function sort(order, useAnimation) {
    var items = {}, rootEl2 = this.el;
    this.toArray().forEach(function(id, i) {
      var el2 = rootEl2.children[i];
      if (closest(el2, this.options.draggable, rootEl2, false)) {
        items[id] = el2;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function(id) {
      if (items[id]) {
        rootEl2.removeChild(items[id]);
        rootEl2.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  closest: function closest$1(el2, selector) {
    return closest(el2, selector || this.options.draggable, this.el, false);
  },
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== "undefined") {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === "group") {
        _prepareGroup(options);
      }
    }
  },
  destroy: function destroy() {
    pluginEvent2("destroy", this);
    var el2 = this.el;
    el2[expando] = null;
    off(el2, "mousedown", this._onTapStart);
    off(el2, "touchstart", this._onTapStart);
    off(el2, "pointerdown", this._onTapStart);
    if (this.nativeDraggable) {
      off(el2, "dragover", this);
      off(el2, "dragenter", this);
    }
    Array.prototype.forEach.call(el2.querySelectorAll("[draggable]"), function(el3) {
      el3.removeAttribute("draggable");
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el2 = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent2("hideClone", this);
      if (Sortable.eventCanceled)
        return;
      css(cloneEl, "display", "none");
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable2) {
    if (putSortable2.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent2("showClone", this);
      if (Sortable.eventCanceled)
        return;
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, "display", "");
      cloneHidden = false;
    }
  }
};
function _globalDragOver(evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = "move";
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl2, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent("move", {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent("move", true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl2;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el2) {
  el2.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
  if (!invertSwap) {
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}
function _getInsertDirection(target) {
  if (index$1(dragEl) < index$1(target)) {
    return 1;
  } else {
    return -1;
  }
}
function _generateId(el2) {
  var str = el2.tagName + el2.className + el2.src + el2.href + el2.textContent, i = str.length, sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root2) {
  savedInputChecked.length = 0;
  var inputs = root2.getElementsByTagName("input");
  var idx = inputs.length;
  while (idx--) {
    var el2 = inputs[idx];
    el2.checked && savedInputChecked.push(el2);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}
if (documentExists) {
  on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}
Sortable.utils = {
  on,
  off,
  css,
  find,
  is: function is(el2, selector) {
    return !!closest(el2, selector, el2, false);
  },
  extend,
  throttle,
  closest,
  toggleClass,
  clone,
  index: index$1,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild
};
Sortable.get = function(element) {
  return element[expando];
};
Sortable.mount = function() {
  for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins2[_key] = arguments[_key];
  }
  if (plugins2[0].constructor === Array)
    plugins2 = plugins2[0];
  plugins2.forEach(function(plugin2) {
    if (!plugin2.prototype || !plugin2.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin2));
    }
    if (plugin2.utils)
      Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin2.utils);
    PluginManager.mount(plugin2);
  });
};
Sortable.create = function(el2, options) {
  return new Sortable(el2, options);
};
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };
    for (var fn in this) {
      if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, "dragover", this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, "pointermove", this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, "touchmove", this._handleFallbackAutoScroll);
        } else {
          on(document, "mousemove", this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop3() {
      if (this.sortable.nativeDraggable) {
        off(document, "dragover", this._handleAutoScroll);
      } else {
        off(document, "pointermove", this._handleFallbackAutoScroll);
        off(document, "touchmove", this._handleFallbackAutoScroll);
        off(document, "mousemove", this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x2 = (evt.touches ? evt.touches[0] : evt).clientX, y2 = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x2, y2);
      touchEvt$1 = evt;
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x2 !== lastAutoScrollX || y2 !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          pointerElemChangedInterval = setInterval(function() {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x2, y2), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x2;
          lastAutoScrollY = y2;
        }
      } else {
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: "scroll",
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function(autoScroll2) {
    clearInterval(autoScroll2.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl2, isFallback) {
  if (!options.scroll)
    return;
  var x2 = (evt.touches ? evt.touches[0] : evt).clientX, y2 = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
  var scrollThisInstance = false, scrollCustomFn;
  if (scrollRootEl !== rootEl2) {
    scrollRootEl = rootEl2;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl2, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el2 = currentParent, rect = getRect(el2), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el2.scrollWidth, scrollHeight = el2.scrollHeight, elCSS = css(el2), scrollPosX = el2.scrollLeft, scrollPosY = el2.scrollTop;
    if (el2 === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
    }
    var vx = canScrollX && (Math.abs(right - x2) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x2) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y2) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y2) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el2) {
      autoScrolls[layersOut].el = el2;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        autoScrolls[layersOut].pid = setInterval(function() {
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1);
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === "function") {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance;
}, 30);
var drop = function drop2(_ref) {
  var originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, dragEl2 = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent)
    return;
  var toSortable = putSortable2 || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent("spill");
    this.onSpill({
      dragEl: dragEl2,
      putSortable: putSortable2
    });
  }
};
function Revert() {
}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex2 = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex2;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl2 = _ref3.dragEl, putSortable2 = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable2) {
      putSortable2.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl2, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl2);
    }
    this.sortable.animateAll();
    if (putSortable2) {
      putSortable2.animateAll();
    }
  },
  drop
};
_extends(Revert, {
  pluginName: "revertOnSpill"
});
function Remove() {
}
Remove.prototype = {
  onSpill: function onSpill2(_ref4) {
    var dragEl2 = _ref4.dragEl, putSortable2 = _ref4.putSortable;
    var parentSortable = putSortable2 || this.sortable;
    parentSortable.captureAnimationState();
    dragEl2.parentNode && dragEl2.parentNode.removeChild(dragEl2);
    parentSortable.animateAll();
  },
  drop
};
_extends(Remove, {
  pluginName: "removeOnSpill"
});
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}
function insertNodeAt(fatherNode, node, position) {
  const refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}
function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }
  return global.console;
}
const console$1 = getConsole();
function cached(fn) {
  const cache = /* @__PURE__ */ Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
const regex = /-(\w)/g;
const camelize = cached((str) => str.replace(regex, (_, c) => c.toUpperCase()));
const manageAndEmit$1 = ["Start", "Add", "Remove", "Update", "End"];
const emit$1 = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
const manage$1 = ["Move"];
const eventHandlerNames = [manage$1, manageAndEmit$1, emit$1].flatMap((events2) => events2).map((evt) => `on${evt}`);
const events = {
  manage: manage$1,
  manageAndEmit: manageAndEmit$1,
  emit: emit$1
};
function isReadOnly(eventName) {
  return eventHandlerNames.indexOf(eventName) !== -1;
}
const tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function isHtmlTag(name) {
  return tags.includes(name);
}
function isTransition(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}
function isHtmlAttribute(value) {
  return ["id", "class", "role", "style"].includes(value) || value.startsWith("data-") || value.startsWith("aria-") || value.startsWith("on");
}
function project(entries) {
  return entries.reduce((res, [key, value]) => {
    res[key] = value;
    return res;
  }, {});
}
function getComponentAttributes({ $attrs, componentData = {} }) {
  const attributes = project(Object.entries($attrs).filter(([key, _]) => isHtmlAttribute(key)));
  return __spreadValues(__spreadValues({}, attributes), componentData);
}
function createSortableOption({ $attrs, callBackBuilder }) {
  const options = project(getValidSortableEntries($attrs));
  Object.entries(callBackBuilder).forEach(([eventType, eventBuilder]) => {
    events[eventType].forEach((event) => {
      options[`on${event}`] = eventBuilder(event);
    });
  });
  const draggable = `[data-draggable]${options.draggable || ""}`;
  return __spreadProps(__spreadValues({}, options), {
    draggable
  });
}
function getValidSortableEntries(value) {
  return Object.entries(value).filter(([key, _]) => !isHtmlAttribute(key)).map(([key, value2]) => [camelize(key), value2]).filter(([key, _]) => !isReadOnly(key));
}
const getHtmlElementFromNode = (node) => {
  const el2 = node.el || Array.isArray(node.children) && node.children[0].el.parentNode;
  if (!el2) {
    console.error("\u4F7F\u7528 transition-group , \u9700\u8981\u5728slot\u4E2Dtemplate\u5185\u81F3\u5C112\u5C42html\u6807\u7B7E");
  }
  return el2 || {};
};
const addContext = (domElement, context) => domElement.__draggable_context = context;
const getContext = (domElement) => domElement.__draggable_context;
class ComponentStructure {
  constructor({
    nodes: { header, default: defaultNodes, footer },
    root: root2,
    realList
  }) {
    this.defaultNodes = defaultNodes;
    this.children = [...header, ...defaultNodes, ...footer];
    this.externalComponent = root2.externalComponent;
    this.rootTransition = root2.transition;
    this.tag = root2.tag;
    this.realList = realList;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(h2, attributes) {
    const { tag, children, _isRootComponent } = this;
    const option2 = !_isRootComponent ? children : { default: () => children };
    return h2(tag, attributes, option2);
  }
  updated() {
    const { defaultNodes, realList } = this;
    defaultNodes.forEach((node, index2) => {
      addContext(getHtmlElementFromNode(node), {
        element: realList[index2],
        index: index2
      });
    });
  }
  getUnderlyingVm(domElement) {
    return getContext(domElement);
  }
  getVmIndexFromDomIndex(domIndex, element) {
    const { defaultNodes } = this;
    const { length } = defaultNodes;
    const domChildren = element.children;
    const domElement = domChildren.item(domIndex);
    if (domElement === null) {
      return length;
    }
    const context = getContext(domElement);
    if (context) {
      return context.index;
    }
    if (length === 0) {
      return 0;
    }
    const firstDomListElement = getHtmlElementFromNode(defaultNodes[0]);
    const indexFirstDomListElement = [...domChildren].findIndex((element2) => element2 === firstDomListElement);
    return domIndex < indexFirstDomListElement ? 0 : length;
  }
}
function getSlot(slots, key) {
  const slotValue = slots[key];
  return slotValue ? slotValue() : [];
}
function computeNodes({ $slots, realList, getKey }) {
  const normalizedList = realList || [];
  const [header, footer] = ["header", "footer"].map((name) => getSlot($slots, name));
  const { item } = $slots;
  if (!item) {
    throw new Error("draggable element must have an item slot");
  }
  const defaultNodes = normalizedList.flatMap((element, index2) => item({ element, index: index2 }).map((node) => {
    node.key = getKey(element);
    node.props = __spreadProps(__spreadValues({}, node.props || {}), { "data-draggable": true });
    return node;
  }));
  if (defaultNodes.length !== normalizedList.length) {
    throw new Error("Item slot must have only one child");
  }
  return {
    header,
    footer,
    default: defaultNodes
  };
}
function getRootInformation(tag) {
  const transition = isTransition(tag);
  const externalComponent = !isHtmlTag(tag) && !transition;
  return {
    transition,
    externalComponent,
    tag: externalComponent ? resolveComponent(tag) : transition ? TransitionGroup : tag
  };
}
function computeComponentStructure({ $slots, tag, realList, getKey }) {
  const nodes = computeNodes({ $slots, realList, getKey });
  const root2 = getRootInformation(tag);
  return new ComponentStructure({ nodes, root: root2, realList });
}
function emit(evtName, evtData) {
  nextTick(() => this.$emit(evtName.toLowerCase(), evtData));
}
function manage(evtName) {
  return (evtData, originalElement) => {
    if (this.realList !== null) {
      return this[`onDrag${evtName}`](evtData, originalElement);
    }
  };
}
function manageAndEmit(evtName) {
  const delegateCallBack = manage.call(this, evtName);
  return (evtData, originalElement) => {
    delegateCallBack.call(this, evtData, originalElement);
    emit.call(this, evtName, evtData);
  };
}
let draggingElement = null;
const props = {
  list: {
    type: Array,
    required: false,
    default: null
  },
  modelValue: {
    type: Array,
    required: false,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: true
  },
  clone: {
    type: Function,
    default: (original) => {
      return original;
    }
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
const emits = [
  "update:modelValue",
  "change",
  ...[...events.manageAndEmit, ...events.emit].map((evt) => evt.toLowerCase())
];
const draggableComponent = defineComponent({
  name: "draggable",
  inheritAttrs: false,
  props,
  emits,
  data() {
    return {
      error: false
    };
  },
  render() {
    try {
      this.error = false;
      const { $slots, $attrs, tag, componentData, realList, getKey } = this;
      const componentStructure = computeComponentStructure({
        $slots,
        tag,
        realList,
        getKey
      });
      this.componentStructure = componentStructure;
      const attributes = getComponentAttributes({ $attrs, componentData });
      return componentStructure.render(h, attributes);
    } catch (err) {
      this.error = true;
      return h("pre", { style: { color: "red" } }, err.stack);
    }
  },
  created() {
    if (this.list !== null && this.modelValue !== null) {
      console$1.error("modelValue and list props are mutually exclusive! Please set one or another.");
    }
  },
  mounted() {
    if (this.error) {
      return;
    }
    const { $attrs, $el, componentStructure } = this;
    componentStructure.updated();
    const sortableOptions = createSortableOption({
      $attrs,
      callBackBuilder: {
        manageAndEmit: (event) => manageAndEmit.call(this, event),
        emit: (event) => emit.bind(this, event),
        manage: (event) => manage.call(this, event)
      }
    });
    const targetDomElement = $el.nodeType === 1 ? $el : $el.parentElement;
    this._sortable = new Sortable(targetDomElement, sortableOptions);
    this.targetDomElement = targetDomElement;
    targetDomElement.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    if (this._sortable !== void 0)
      this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list } = this;
      return list ? list : this.modelValue;
    },
    getKey() {
      const { itemKey } = this;
      if (typeof itemKey === "function") {
        return itemKey;
      }
      return (element) => element[itemKey];
    }
  },
  watch: {
    $attrs: {
      handler(newOptionValue) {
        const { _sortable } = this;
        if (!_sortable)
          return;
        getValidSortableEntries(newOptionValue).forEach(([key, value]) => {
          _sortable.option(key, value);
        });
      },
      deep: true
    }
  },
  methods: {
    getUnderlyingVm(domElement) {
      return this.componentStructure.getUnderlyingVm(domElement) || null;
    },
    getUnderlyingPotencialDraggableComponent(htmElement) {
      return htmElement.__draggable_component__;
    },
    emitChanges(evt) {
      nextTick(() => this.$emit("change", evt));
    },
    alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }
      const newList = [...this.modelValue];
      onList(newList);
      this.$emit("update:modelValue", newList);
    },
    spliceList() {
      const spliceList = (list) => list.splice(...arguments);
      this.alterList(spliceList);
    },
    updatePosition(oldIndex2, newIndex2) {
      const updatePosition = (list) => list.splice(newIndex2, 0, list.splice(oldIndex2, 1)[0]);
      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent({ to, related }) {
      const component = this.getUnderlyingPotencialDraggableComponent(to);
      if (!component) {
        return { component };
      }
      const list = component.realList;
      const context = { list, component };
      if (to !== related && list) {
        const destination = component.getUnderlyingVm(related) || {};
        return __spreadValues(__spreadValues({}, destination), context);
      }
      return context;
    },
    getVmIndexFromDomIndex(domIndex) {
      return this.componentStructure.getVmIndexFromDomIndex(domIndex, this.targetDomElement);
    },
    onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd(evt) {
      const element = evt.item._underlying_vm_;
      if (element === void 0) {
        return;
      }
      removeNode(evt.item);
      const newIndex2 = this.getVmIndexFromDomIndex(evt.newIndex);
      this.spliceList(newIndex2, 0, element);
      const added = { element, newIndex: newIndex2 };
      this.emitChanges({ added });
    },
    onDragRemove(evt) {
      insertNodeAt(this.$el, evt.item, evt.oldIndex);
      if (evt.pullMode === "clone") {
        removeNode(evt.clone);
        return;
      }
      const { index: oldIndex2, element } = this.context;
      this.spliceList(oldIndex2, 1);
      const removed = { element, oldIndex: oldIndex2 };
      this.emitChanges({ removed });
    },
    onDragUpdate(evt) {
      removeNode(evt.item);
      insertNodeAt(evt.from, evt.item, evt.oldIndex);
      const oldIndex2 = this.context.index;
      const newIndex2 = this.getVmIndexFromDomIndex(evt.newIndex);
      this.updatePosition(oldIndex2, newIndex2);
      const moved2 = { element: this.context.element, oldIndex: oldIndex2, newIndex: newIndex2 };
      this.emitChanges({ moved: moved2 });
    },
    computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }
      const domChildren = [...evt.to.children].filter((el2) => el2.style["display"] !== "none");
      const currentDomIndex = domChildren.indexOf(evt.related);
      const currentIndex = relatedContext.component.getVmIndexFromDomIndex(currentDomIndex);
      const draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove(evt, originalEvent) {
      const { move, realList } = this;
      if (!move || !realList) {
        return true;
      }
      const relatedContext = this.getRelatedContextFromMoveEvent(evt);
      const futureIndex = this.computeFutureIndex(relatedContext, evt);
      const draggedContext = __spreadProps(__spreadValues({}, this.context), {
        futureIndex
      });
      const sendEvent = __spreadProps(__spreadValues({}, evt), {
        relatedContext,
        draggedContext
      });
      return move(sendEvent, originalEvent);
    },
    onDragEnd() {
      draggingElement = null;
    }
  }
});
const _hoisted_1$a = { class: "flex h-auto flex-1 flex-col flex-nowrap overflow-y-hidden" };
const _hoisted_2$9 = { class: "tabs group-tabs sticky top-0 z-10 flex-shrink-0 divide-x divide-dividerLight overflow-x-auto bg-primaryLight" };
const _hoisted_3$7 = ["onWheel"];
const _hoisted_4$5 = { class: "flex" };
const _hoisted_5$3 = ["id", "aria-label", "onKeyup", "onClick"];
const _hoisted_6 = {
  key: 0,
  class: "flex cursor-pointer items-center justify-center"
};
const _hoisted_7 = {
  key: 1,
  class: "w-full truncate px-2 text-left"
};
const _hoisted_8 = { class: "truncate" };
const _hoisted_9 = {
  key: 2,
  class: "w-full truncate text-left"
};
const _hoisted_10 = {
  key: 3,
  class: "flex items-center justify-center"
};
const _hoisted_11 = { class: "sticky right-0 z-20 flex flex-shrink-0 items-center justify-center overflow-x-auto" };
const _hoisted_12 = {
  key: 0,
  class: "z-[8] flex h-full items-center justify-center bg-primaryLight px-3"
};
const _hoisted_13 = { class: "contents h-full w-full" };
const TAB_WIDTH = 184;
const MAX_SCROLL_VALUE = 500;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Windows",
  props: {
    styles: { default: "" },
    modelValue: {},
    renderInactiveTabs: { type: Boolean, default: false },
    canAddNewTab: { type: Boolean, default: true },
    newText: { default: null },
    closeText: { default: null }
  },
  emits: ["update:modelValue", "sort", "removeTab", "addTab"],
  setup(__props, { emit: __emit }) {
    var _a2;
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const mdAndLarger = breakpoints.greater("md");
    const { t } = (_a2 = inject(HOPP_UI_OPTIONS)) != null ? _a2 : {};
    const props2 = __props;
    const emit2 = __emit;
    const slots = useSlots();
    const hasActions = computed(() => {
      return !!slots.actions;
    });
    const throwError = (message) => {
      throw new Error(message);
    };
    const tabEntries = ref([]);
    const tabStyles = computed(() => ({
      maxWidth: `${tabEntries.value.length * TAB_WIDTH}px`,
      width: "100%",
      minWidth: "0px"
    }));
    const dragOptions = {
      group: "tabs",
      animation: 250,
      handle: ".tab",
      draggable: ".tab",
      ghostClass: "cursor-move"
    };
    const addTabEntry = (tabID, meta) => {
      tabEntries.value = pipe(
        tabEntries.value,
        fromPredicate(not(exists(([id]) => id === tabID))),
        map(append([tabID, meta])),
        getOrElseW(() => throwError(`Tab with duplicate ID created: '${tabID}'`))
      );
    };
    const updateTabEntry = (tabID, newMeta) => {
      tabEntries.value = pipe(
        tabEntries.value,
        findIndex(([id]) => id === tabID),
        chain(
          (index2) => pipe(
            tabEntries.value,
            updateAt(index2, [tabID, newMeta])
          )
        ),
        getOrElseW(() => throwError(`Failed to update tab entry: ${tabID}`))
      );
    };
    const removeTabEntry = (tabID) => {
      tabEntries.value = pipe(
        tabEntries.value,
        findIndex(([id]) => id === tabID),
        chain((index2) => pipe(tabEntries.value, deleteAt(index2))),
        getOrElseW(() => throwError(`Failed to remove tab entry: ${tabID}`))
      );
    };
    const sortTabs = (e) => {
      emit2("sort", {
        oldIndex: e.oldDraggableIndex,
        newIndex: e.newDraggableIndex
      });
    };
    provide("tabs-system", {
      renderInactive: computed(() => props2.renderInactiveTabs),
      activeTabID: computed(() => props2.modelValue),
      addTabEntry,
      updateTabEntry,
      removeTabEntry
    });
    const selectTab = (id) => {
      emit2("update:modelValue", id);
    };
    const addTab = () => {
      emit2("addTab");
    };
    const scrollContainer = ref();
    const { width: scrollContainerWidth } = useElementSize(scrollContainer);
    const thumbPosition = ref(0);
    const scrollThumb = computed(() => {
      var _a3;
      const clientWidth = (_a3 = scrollContainerWidth.value) != null ? _a3 : 0;
      const scrollWidth = tabEntries.value.length * 184;
      return {
        width: clientWidth / scrollWidth * clientWidth || 300,
        show: clientWidth ? scrollWidth > clientWidth : false
      };
    });
    const scroll = (e) => {
      scrollContainer.value.scrollLeft += e.deltaY;
      scrollContainer.value.scrollLeft += e.deltaX;
      const { scrollWidth, clientWidth, scrollLeft } = scrollContainer.value || {
        scrollWidth: 0,
        clientWidth: 0,
        scrollLeft: 0
      };
      const maxScroll = scrollWidth - clientWidth;
      thumbPosition.value = scrollLeft / maxScroll * MAX_SCROLL_VALUE;
    };
    watch(thumbPosition, (newVal) => {
      const { scrollWidth, clientWidth } = scrollContainer.value;
      const maxScroll = scrollWidth - clientWidth;
      scrollContainer.value.scrollLeft = maxScroll * (newVal / MAX_SCROLL_VALUE);
    });
    watch(
      () => props2.modelValue,
      (tabID) => {
        nextTick(() => {
          const element = document.getElementById(`removable-tab-${tabID}`);
          const changeThumbPosition = (entries, observer2) => {
            entries.forEach((entry) => {
              if (entry.target === element && entry.intersectionRatio >= 1) {
                observer2.disconnect();
                setTimeout(() => {
                  const { scrollWidth, clientWidth, scrollLeft } = scrollContainer.value || {
                    scrollWidth: 0,
                    clientWidth: 0,
                    scrollLeft: 0
                  };
                  const maxScroll = scrollWidth - clientWidth;
                  thumbPosition.value = scrollLeft / maxScroll * MAX_SCROLL_VALUE;
                }, 300);
              }
            });
          };
          let observer = new IntersectionObserver(changeThumbPosition, {
            root: null,
            rootMargin: "0px",
            threshold: 1
          });
          if (element)
            observer.observe(element);
          element == null ? void 0 : element.scrollIntoView({ behavior: "smooth", inline: "center" });
        });
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      var _a3, _b, _c;
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createElementVNode("div", _hoisted_2$9, [
          createElementVNode("div", {
            class: "flex w-0 flex-1 flex-shrink-0 overflow-hidden",
            ref_key: "scrollContainer",
            ref: scrollContainer
          }, [
            createElementVNode("div", {
              class: "flex justify-between divide-x divide-dividerLight",
              onWheel: withModifiers(scroll, ["prevent"])
            }, [
              createElementVNode("div", _hoisted_4$5, [
                createVNode(unref(draggableComponent), mergeProps(dragOptions, {
                  list: tabEntries.value,
                  style: tabStyles.value,
                  "item-key": "window-",
                  class: "flex flex-shrink-0 divide-x divide-dividerLight overflow-x-auto transition",
                  onSort: sortTabs
                }), {
                  item: withCtx(({ element: [tabID, tabMeta] }) => {
                    var _a4, _b2, _c2;
                    return [
                      (openBlock(), createElementBlock("button", {
                        key: `removable-tab-${tabID}`,
                        id: `removable-tab-${tabID}`,
                        class: normalizeClass(["tab group", [{ active: _ctx.modelValue === tabID }]]),
                        "aria-label": tabMeta.label || "",
                        role: "button",
                        onKeyup: withKeys(($event) => selectTab(tabID), ["enter"]),
                        onClick: ($event) => selectTab(tabID)
                      }, [
                        tabMeta.icon ? (openBlock(), createElementBlock("span", _hoisted_6, [
                          (openBlock(), createBlock(resolveDynamicComponent(tabMeta.icon), { class: "svg-icons h-4 w-4" }))
                        ])) : createCommentVNode("", true),
                        !tabMeta.tabhead ? (openBlock(), createElementBlock("div", _hoisted_7, [
                          createElementVNode("span", _hoisted_8, toDisplayString(tabMeta.label), 1)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_9, [
                          (openBlock(), createBlock(resolveDynamicComponent(tabMeta.tabhead)))
                        ])),
                        tabMeta.suffix ? (openBlock(), createElementBlock("div", _hoisted_10, [
                          (openBlock(), createBlock(resolveDynamicComponent(tabMeta.suffix)))
                        ])) : createCommentVNode("", true),
                        tabMeta.isRemovable ? withDirectives((openBlock(), createBlock(unref(_sfc_main$3), {
                          key: 4,
                          icon: unref(IconX),
                          title: (_c2 = (_b2 = _ctx.closeText) != null ? _b2 : (_a4 = unref(t)) == null ? void 0 : _a4("action.close")) != null ? _c2 : "Close",
                          class: normalizeClass([[
                            { active: _ctx.modelValue === tabID },
                            {
                              flex: tabMeta.closeVisibility === "always",
                              "hidden group-hover:flex": tabMeta.closeVisibility === "hover",
                              hidden: tabMeta.closeVisibility === "never"
                            },
                            "close"
                          ], "rounded !p-0.25"]),
                          onClick: withModifiers(($event) => emit2("removeTab", tabID), ["stop"])
                        }, null, 8, ["icon", "title", "class", "onClick"])), [
                          [_directive_tippy, { theme: "tooltip", delay: [500, 20] }]
                        ]) : createCommentVNode("", true)
                      ], 42, _hoisted_5$3))
                    ];
                  }),
                  _: 1
                }, 16, ["list", "style"])
              ]),
              createElementVNode("div", _hoisted_11, [
                _ctx.canAddNewTab ? (openBlock(), createElementBlock("span", _hoisted_12, [
                  withDirectives(createVNode(unref(_sfc_main$3), {
                    title: (_c = (_b = _ctx.newText) != null ? _b : (_a3 = unref(t)) == null ? void 0 : _a3("action.new")) != null ? _c : "New",
                    icon: unref(IconPlus),
                    class: "create-new-tab rounded !p-1 !text-secondaryDark",
                    filled: "",
                    onClick: addTab
                  }, null, 8, ["title", "icon"]), [
                    [_directive_tippy, { theme: "tooltip" }]
                  ])
                ])) : createCommentVNode("", true)
              ])
            ], 40, _hoisted_3$7)
          ], 512),
          hasActions.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(mdAndLarger) ? "w-64" : "w-28")
          }, [
            renderSlot(_ctx.$slots, "actions", {}, void 0, true)
          ], 2)) : createCommentVNode("", true),
          withDirectives(createElementVNode("input", {
            type: "range",
            min: "1",
            max: MAX_SCROLL_VALUE,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => thumbPosition.value = $event),
            class: normalizeClass(["slider absolute bottom-0 left-0 hidden", {
              "!block": scrollThumb.value.show
            }]),
            style: normalizeStyle([
              `--thumb-width: ${scrollThumb.value.width}px`,
              `width: calc(100% - ${hasActions.value ? unref(mdAndLarger) ? "19rem" : "10rem" : "3rem"})`
            ]),
            id: "myRange"
          }, null, 6), [
            [vModelText, thumbPosition.value]
          ])
        ]),
        createElementVNode("div", _hoisted_13, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ]);
    };
  }
});
const Windows_vue_vue_type_style_index_0_scoped_5bac17fb_lang = "";
const Windows = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-5bac17fb"]]);
const y = (s) => {
  for (var r = 0, e = 0; e < s.length; e++) {
    var n = s.charCodeAt(e);
    r = (r << 5) - r + n, r = r & r;
  }
  return Math.abs(r);
}, P$1 = (s, r) => Math.floor(s / Math.pow(10, r) % 10), T = (s, r) => !(P$1(s, r) % 2), o = (s, r, e) => {
  let n = s % r;
  return e && P$1(s, e) % 2 === 0 ? -n : n;
}, x$1 = (s, r, e) => r[s % e], q = (s) => {
  if (!s)
    return "#FFFFFF";
  s.slice(0, 1) === "#" && (s = s.slice(1));
  var r = parseInt(s.substr(0, 2), 16), e = parseInt(s.substr(2, 2), 16), n = parseInt(s.substr(4, 2), 16), l2 = (r * 299 + e * 587 + n * 114) / 1e3;
  return l2 >= 128 ? "#000000" : "#FFFFFF";
}, B$1 = {
  variant: "marble",
  colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"],
  name: "Clara Barton",
  square: false,
  hasTitle: false,
  size: 40
}, M$1 = 4, g = 80;
function b(s, r) {
  const e = y(s), n = r && r.length;
  return Array.from({ length: M$1 }, (t, a) => ({
    color: x$1(e + a, r, n),
    translateX: o(e * (a + 1), g / 2 - (a + 17), 1),
    translateY: o(e * (a + 1), g / 2 - (a + 17), 2),
    rotate: o(e * (a + 1), 360),
    isSquare: T(e, 2)
  }));
}
const w = (s, r) => {
  const e = s.__vccOpts || s;
  for (const [n, l2] of r)
    e[n] = l2;
  return e;
}, L = {
  name: "avatar-bauhaus",
  props: ["name", "colors", "size", "hasTitle", "square"],
  data() {
    return { SIZE: g };
  },
  methods: {
    properties(s, r) {
      return b(s, r);
    },
    getSquareTransform() {
      var s, r, e, n, l2, t;
      return "translate(" + ((r = (s = this.properties(this.name, this.colors)) == null ? void 0 : s[1]) == null ? void 0 : r.translateX) + " " + ((n = (e = this.properties(this.name, this.colors)) == null ? void 0 : e[1]) == null ? void 0 : n.translateY) + ") rotate(" + ((t = (l2 = this.properties(this.name, this.colors)) == null ? void 0 : l2[1]) == null ? void 0 : t.rotate) + " " + g / 2 + " " + g / 2 + ")";
    },
    getCircleTransform() {
      var s, r, e, n;
      return "translate(" + ((r = (s = this.properties(this.name, this.colors)) == null ? void 0 : s[2]) == null ? void 0 : r.translateX) + " " + ((n = (e = this.properties(this.name, this.colors)) == null ? void 0 : e[2]) == null ? void 0 : n.translateY) + ")";
    },
    getLineTransform() {
      var s, r, e, n, l2, t;
      return "translate(" + ((r = (s = this.properties(this.name, this.colors)) == null ? void 0 : s[3]) == null ? void 0 : r.translateX) + " " + ((n = (e = this.properties(this.name, this.colors)) == null ? void 0 : e[3]) == null ? void 0 : n.translateY) + ") rotate(" + ((t = (l2 = this.properties(this.name, this.colors)) == null ? void 0 : l2[3]) == null ? void 0 : t.rotate) + " " + g / 2 + " " + g / 2 + ")";
    }
  }
}, O = ["viewBox", "width", "height"], U = { key: 0 }, N = ["width", "height"], X = ["width", "height", "rx"], Y = { mask: "url(#mask__bauhaus)" }, R = ["width", "height", "fill"], D$1 = ["x", "y", "width", "height", "fill", "transform"], G = ["cx", "cy", "fill", "r", "transform"], H = ["y1", "x2", "y2", "stroke", "transform"];
function V(s, r, e, n, l2, t) {
  var a, u2, m, E, I, Z2, F, k, z, A;
  return openBlock(), createElementBlock("svg", {
    fill: "none",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 " + l2.SIZE + " " + l2.SIZE,
    width: e.size,
    height: e.size
  }, [
    e.hasTitle ? (openBlock(), createElementBlock("title", U, toDisplayString(e.name), 1)) : createCommentVNode("", true),
    createElementVNode("mask", {
      id: "mask__bauhaus",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 0,
      width: l2.SIZE,
      height: l2.SIZE
    }, [
      createElementVNode("rect", {
        fill: "#FFFFFF",
        width: l2.SIZE,
        height: l2.SIZE,
        rx: e.square ? void 0 : l2.SIZE * 2
      }, null, 8, X)
    ], 8, N),
    createElementVNode("g", Y, [
      createElementVNode("rect", {
        width: l2.SIZE,
        height: l2.SIZE,
        fill: (u2 = (a = t.properties(e.name, e.colors)) == null ? void 0 : a[0]) == null ? void 0 : u2.color
      }, null, 8, R),
      createElementVNode("rect", {
        x: (l2.SIZE - 60) / 2,
        y: (l2.SIZE - 20) / 2,
        width: l2.SIZE,
        height: (E = (m = t.properties(e.name, e.colors)) == null ? void 0 : m[1]) != null && E.isSquare ? l2.SIZE : l2.SIZE / 8,
        fill: (Z2 = (I = t.properties(e.name, e.colors)) == null ? void 0 : I[1]) == null ? void 0 : Z2.color,
        transform: t.getSquareTransform()
      }, null, 8, D$1),
      createElementVNode("circle", {
        cx: l2.SIZE / 2,
        cy: l2.SIZE / 2,
        fill: (k = (F = t.properties(e.name, e.colors)) == null ? void 0 : F[2]) == null ? void 0 : k.color,
        r: l2.SIZE / 5,
        transform: t.getCircleTransform()
      }, null, 8, G),
      createElementVNode("line", {
        x1: 0,
        y1: l2.SIZE / 2,
        x2: l2.SIZE,
        y2: l2.SIZE / 2,
        strokeWidth: 2,
        stroke: (A = (z = t.properties(e.name, e.colors)) == null ? void 0 : z[3]) == null ? void 0 : A.color,
        transform: t.getLineTransform()
      }, null, 8, H)
    ])
  ], 8, O);
}
const W = /* @__PURE__ */ w(L, [["render", V]]), f = 36;
function j(s, r) {
  const e = y(s), n = r && r.length, l2 = x$1(e, r, n), t = o(e, 10, 1), a = t < 5 ? t + f / 9 : t, u2 = o(e, 10, 2), m = u2 < 5 ? u2 + f / 9 : u2;
  return {
    wrapperColor: l2,
    faceColor: q(l2),
    backgroundColor: x$1(e + 13, r, n),
    wrapperTranslateX: a,
    wrapperTranslateY: m,
    wrapperRotate: o(e, 360),
    wrapperScale: 1 + o(e, f / 12) / 10,
    isMouthOpen: T(e, 2),
    isCircle: T(e, 1),
    eyeSpread: o(e, 5),
    mouthSpread: o(e, 3),
    faceRotate: o(e, 10, 3),
    faceTranslateX: a > f / 6 ? a / 2 : o(e, 8, 1),
    faceTranslateY: m > f / 6 ? m / 2 : o(e, 7, 2)
  };
}
const J = {
  name: "avatar-beam",
  props: ["name", "colors", "size", "hasTitle", "square"],
  data() {
    return { SIZE: f };
  },
  methods: {
    data(s, r) {
      return j(s, r);
    },
    getRectTransform() {
      return "translate(" + this.data(this.name, this.colors).wrapperTranslateX + " " + this.data(this.name, this.colors).wrapperTranslateY + ") rotate(" + this.data(this.name, this.colors).wrapperRotate + " " + f / 2 + " " + f / 2 + ") scale(" + this.data(this.name, this.colors).wrapperScale + ")";
    },
    getGroupTransform() {
      return "translate(" + this.data(this.name, this.colors).faceTranslateX + " " + this.data(this.name, this.colors).faceTranslateY + ") rotate(" + this.data(this.name, this.colors).faceRotate + " " + f / 2 + " " + f / 2 + ")";
    },
    getOpenMouthData() {
      return "M15 " + (19 + this.data(this.name, this.colors).mouthSpread) + "c2 1 4 1 6 0";
    },
    getClosedMouthData() {
      return "M13," + (19 + this.data(this.name, this.colors).mouthSpread) + " a1,0.75 0 0,0 10,0";
    }
  }
}, K = ["viewBox", "width", "height"], Q = { key: 0 }, p = ["width", "height"], $ = ["width", "height", "rx"], ee$1 = { mask: "url(#mask__beam)" }, te$1 = ["width", "height", "fill"], le$1 = ["width", "height", "transform", "fill", "rx"], ie$1 = ["transform"], re$1 = ["d", "stroke"], se$1 = ["d", "fill"], ne$1 = ["x", "width", "fill"], ae$1 = ["x", "width", "fill"];
function he$1(s, r, e, n, l2, t) {
  return openBlock(), createElementBlock("svg", {
    fill: "none",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 " + l2.SIZE + " " + l2.SIZE,
    width: e.size,
    height: e.size
  }, [
    e.hasTitle ? (openBlock(), createElementBlock("title", Q, toDisplayString(e.name), 1)) : createCommentVNode("", true),
    createElementVNode("mask", {
      id: "mask__beam",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 0,
      width: l2.SIZE,
      height: l2.SIZE
    }, [
      createElementVNode("rect", {
        fill: "#FFFFFF",
        width: l2.SIZE,
        height: l2.SIZE,
        rx: e.square ? void 0 : l2.SIZE * 2
      }, null, 8, $)
    ], 8, p),
    createElementVNode("g", ee$1, [
      createElementVNode("rect", {
        width: l2.SIZE,
        height: l2.SIZE,
        fill: t.data(e.name, e.colors).backgroundColor
      }, null, 8, te$1),
      createElementVNode("rect", {
        x: "0",
        y: "0",
        width: l2.SIZE,
        height: l2.SIZE,
        transform: t.getRectTransform(),
        fill: t.data(e.name, e.colors).wrapperColor,
        rx: t.data(e.name, e.colors).isCircle ? l2.SIZE : l2.SIZE / 6
      }, null, 8, le$1),
      createElementVNode("g", {
        transform: t.getGroupTransform()
      }, [
        t.data(e.name, e.colors).isMouthOpen ? (openBlock(), createElementBlock("path", {
          key: 0,
          fill: "none",
          strokeLinecap: "round",
          d: t.getOpenMouthData(),
          stroke: t.data(e.name, e.colors).faceColor
        }, null, 8, re$1)) : (openBlock(), createElementBlock("path", {
          key: 1,
          d: t.getClosedMouthData(),
          fill: t.data(e.name, e.colors).faceColor
        }, null, 8, se$1)),
        createElementVNode("rect", {
          stroke: "none",
          x: 14 - t.data(e.name, e.colors).eyeSpread,
          y: 14,
          width: 1.5,
          height: 2,
          rx: 1,
          fill: t.data(e.name, e.colors).faceColor
        }, null, 8, ne$1),
        createElementVNode("rect", {
          stroke: "none",
          x: 20 + t.data(e.name, e.colors).eyeSpread,
          y: 14,
          width: 1.5,
          height: 2,
          rx: 1,
          fill: t.data(e.name, e.colors).faceColor
        }, null, 8, ae$1)
      ], 8, ie$1)
    ])
  ], 8, K);
}
const oe$1 = /* @__PURE__ */ w(J, [["render", he$1]]), ce$1 = 3, d$1 = 80;
function _e(s, r) {
  const e = y(s), n = r && r.length;
  return Array.from({ length: ce$1 }, (t, a) => ({
    color: x$1(e + a, r, n),
    translateX: o(e * (a + 1), d$1 / 10, 1),
    translateY: o(e * (a + 1), d$1 / 10, 2),
    scale: 1.2 + o(e * (a + 1), d$1 / 20) / 10,
    rotate: o(e * (a + 1), 360, 1)
  }));
}
const ue$1 = {
  name: "avatar-marble",
  props: ["name", "colors", "size", "hasTitle", "square"],
  data() {
    return { SIZE: d$1 };
  },
  methods: {
    properties(s, r) {
      return _e(s, r);
    },
    getPathOneTransform() {
      return "translate(" + this.properties(this.name, this.colors)[1].translateX + " " + this.properties(this.name, this.colors)[1].translateY + ") rotate(" + this.properties(this.name, this.colors)[1].rotate + " " + d$1 / 2 + " " + d$1 / 2 + ") scale(" + this.properties(this.name, this.colors)[2].scale + ")";
    },
    getPathTwoTransform() {
      return "translate(" + this.properties(this.name, this.colors)[2].translateX + " " + this.properties(this.name, this.colors)[2].translateY + ") rotate(" + this.properties(this.name, this.colors)[2].rotate + " " + d$1 / 2 + " " + d$1 / 2 + ") scale(" + this.properties(this.name, this.colors)[2].scale + ")";
    }
  }
}, fe$1 = ["viewBox", "width", "height"], me$1 = { key: 0 }, de$1 = ["width", "height"], ge$1 = ["width", "height", "rx"], xe$1 = { mask: "url(#mask__marble)" }, we$1 = ["width", "height", "fill"], ve$1 = ["fill", "transform"], Ce$1 = ["fill", "transform"], Se$1 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("filter", {
    id: "prefix__filter0_f",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, [
    /* @__PURE__ */ createElementVNode("feFlood", {
      result: "BackgroundImageFix",
      floodOpacity: 0
    }),
    /* @__PURE__ */ createElementVNode("feBlend", {
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }),
    /* @__PURE__ */ createElementVNode("feGaussianBlur", {
      result: "effect1_foregroundBlur",
      stdDeviation: 7
    })
  ])
], -1);
function ye$1(s, r, e, n, l2, t) {
  return openBlock(), createElementBlock("svg", {
    fill: "none",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 " + l2.SIZE + " " + l2.SIZE,
    width: e.size,
    height: e.size
  }, [
    e.hasTitle ? (openBlock(), createElementBlock("title", me$1, toDisplayString(e.name), 1)) : createCommentVNode("", true),
    createElementVNode("mask", {
      id: "mask__marble",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 0,
      width: l2.SIZE,
      height: l2.SIZE
    }, [
      createElementVNode("rect", {
        fill: "#FFFFFF",
        width: l2.SIZE,
        height: l2.SIZE,
        rx: e.square ? void 0 : l2.SIZE * 2
      }, null, 8, ge$1)
    ], 8, de$1),
    createElementVNode("g", xe$1, [
      createElementVNode("rect", {
        width: l2.SIZE,
        height: l2.SIZE,
        fill: t.properties(e.name, e.colors)[0].color
      }, null, 8, we$1),
      createElementVNode("path", {
        filter: "url(#prefix__filter0_f)",
        d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z",
        fill: t.properties(e.name, e.colors)[1].color,
        transform: t.getPathOneTransform()
      }, null, 8, ve$1),
      createElementVNode("path", {
        filter: "url(#prefix__filter0_f)",
        d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z",
        style: {
          mixBlendMode: "overlay"
        },
        fill: t.properties(e.name, e.colors)[2].color,
        transform: t.getPathTwoTransform()
      }, null, 8, Ce$1)
    ]),
    Se$1
  ], 8, fe$1);
}
const Ee$1 = /* @__PURE__ */ w(ue$1, [["render", ye$1]]), Ie$1 = 64, Ze = 80;
function Te$1(s, r) {
  const e = y(s), n = r && r.length;
  return Array.from({ length: Ie$1 }, (t, a) => x$1(e % a, r, n));
}
const Fe$1 = {
  name: "avatar-pixel",
  props: ["size", "hasTitle", "name", "square", "colors"],
  data() {
    return { SIZE: Ze };
  },
  methods: {
    pixelColors(s, r) {
      return Te$1(s, r);
    }
  }
}, ke$1 = ["viewBox", "width", "height"], ze$1 = { key: 0 }, Ae$1 = ["width", "height"], Pe$1 = ["width", "height", "rx"], qe = { mask: "url(#mask__pixel)" }, Be$1 = ["fill"], Me$1 = ["fill"], be$1 = ["fill"], Le$1 = ["fill"], Oe$1 = ["fill"], Ue$1 = ["fill"], Ne$1 = ["fill"], Xe = ["fill"], Ye$1 = ["fill"], Re = ["fill"], De$1 = ["fill"], Ge = ["fill"], He$1 = ["fill"], Ve = ["fill"], We$1 = ["fill"], je = ["fill"], Je = ["fill"], Ke = ["fill"], Qe = ["fill"], pe$1 = ["fill"], $e$1 = ["fill"], et = ["fill"], tt = ["fill"], lt = ["fill"], it = ["fill"], rt = ["fill"], st = ["fill"], nt = ["fill"], at = ["fill"], ht = ["fill"], ot = ["fill"], ct = ["fill"], _t$1 = ["fill"], ut = ["fill"], ft = ["fill"], mt = ["fill"], dt = ["fill"], gt = ["fill"], xt = ["fill"], wt = ["fill"], vt = ["fill"], Ct = ["fill"], St$1 = ["fill"], yt = ["fill"], Et = ["fill"], It = ["fill"], Zt$1 = ["fill"], Tt = ["fill"], Ft$1 = ["fill"], kt = ["fill"], zt = ["fill"], At = ["fill"], Pt = ["fill"], qt$1 = ["fill"], Bt = ["fill"], Mt$1 = ["fill"], bt = ["fill"], Lt = ["fill"], Ot$1 = ["fill"], Ut$1 = ["fill"], Nt$1 = ["fill"], Xt$1 = ["fill"], Yt = ["fill"], Rt$1 = ["fill"];
function Dt(s, r, e, n, l2, t) {
  return openBlock(), createElementBlock("svg", {
    fill: "none",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 " + l2.SIZE + " " + l2.SIZE,
    width: e.size,
    height: e.size
  }, [
    e.hasTitle ? (openBlock(), createElementBlock("title", ze$1, toDisplayString(e.name), 1)) : createCommentVNode("", true),
    createElementVNode("mask", {
      id: "mask__pixel",
      "mask-type": "alpha",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 0,
      width: l2.SIZE,
      height: l2.SIZE
    }, [
      createElementVNode("rect", {
        fill: "#FFFFFF",
        width: l2.SIZE,
        height: l2.SIZE,
        rx: e.square ? void 0 : l2.SIZE * 2
      }, null, 8, Pe$1)
    ], 8, Ae$1),
    createElementVNode("g", qe, [
      createElementVNode("rect", {
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[0]
      }, null, 8, Be$1),
      createElementVNode("rect", {
        x: 20,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[1]
      }, null, 8, Me$1),
      createElementVNode("rect", {
        x: 40,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[2]
      }, null, 8, be$1),
      createElementVNode("rect", {
        x: 60,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[3]
      }, null, 8, Le$1),
      createElementVNode("rect", {
        x: 10,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[4]
      }, null, 8, Oe$1),
      createElementVNode("rect", {
        x: 30,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[5]
      }, null, 8, Ue$1),
      createElementVNode("rect", {
        x: 50,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[6]
      }, null, 8, Ne$1),
      createElementVNode("rect", {
        x: 70,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[7]
      }, null, 8, Xe),
      createElementVNode("rect", {
        y: 10,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[8]
      }, null, 8, Ye$1),
      createElementVNode("rect", {
        y: 20,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[9]
      }, null, 8, Re),
      createElementVNode("rect", {
        y: 30,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[10]
      }, null, 8, De$1),
      createElementVNode("rect", {
        y: 40,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[11]
      }, null, 8, Ge),
      createElementVNode("rect", {
        y: 50,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[12]
      }, null, 8, He$1),
      createElementVNode("rect", {
        y: 60,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[13]
      }, null, 8, Ve),
      createElementVNode("rect", {
        y: 70,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[14]
      }, null, 8, We$1),
      createElementVNode("rect", {
        x: 20,
        y: 10,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[15]
      }, null, 8, je),
      createElementVNode("rect", {
        x: 20,
        y: 20,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[16]
      }, null, 8, Je),
      createElementVNode("rect", {
        x: 20,
        y: 30,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[17]
      }, null, 8, Ke),
      createElementVNode("rect", {
        x: 20,
        y: 40,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[18]
      }, null, 8, Qe),
      createElementVNode("rect", {
        x: 20,
        y: 50,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[19]
      }, null, 8, pe$1),
      createElementVNode("rect", {
        x: 20,
        y: 60,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[20]
      }, null, 8, $e$1),
      createElementVNode("rect", {
        x: 20,
        y: 70,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[21]
      }, null, 8, et),
      createElementVNode("rect", {
        x: 40,
        y: 10,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[22]
      }, null, 8, tt),
      createElementVNode("rect", {
        x: 40,
        y: 20,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[23]
      }, null, 8, lt),
      createElementVNode("rect", {
        x: 40,
        y: 30,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[24]
      }, null, 8, it),
      createElementVNode("rect", {
        x: 40,
        y: 40,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[25]
      }, null, 8, rt),
      createElementVNode("rect", {
        x: 40,
        y: 50,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[26]
      }, null, 8, st),
      createElementVNode("rect", {
        x: 40,
        y: 60,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[27]
      }, null, 8, nt),
      createElementVNode("rect", {
        x: 40,
        y: 70,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[28]
      }, null, 8, at),
      createElementVNode("rect", {
        x: 60,
        y: 10,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[29]
      }, null, 8, ht),
      createElementVNode("rect", {
        x: 60,
        y: 20,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[30]
      }, null, 8, ot),
      createElementVNode("rect", {
        x: 60,
        y: 30,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[31]
      }, null, 8, ct),
      createElementVNode("rect", {
        x: 60,
        y: 40,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[32]
      }, null, 8, _t$1),
      createElementVNode("rect", {
        x: 60,
        y: 50,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[33]
      }, null, 8, ut),
      createElementVNode("rect", {
        x: 60,
        y: 60,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[34]
      }, null, 8, ft),
      createElementVNode("rect", {
        x: 60,
        y: 70,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[35]
      }, null, 8, mt),
      createElementVNode("rect", {
        x: 10,
        y: 10,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[36]
      }, null, 8, dt),
      createElementVNode("rect", {
        x: 10,
        y: 20,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[37]
      }, null, 8, gt),
      createElementVNode("rect", {
        x: 10,
        y: 30,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[38]
      }, null, 8, xt),
      createElementVNode("rect", {
        x: 10,
        y: 40,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[39]
      }, null, 8, wt),
      createElementVNode("rect", {
        x: 10,
        y: 50,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[40]
      }, null, 8, vt),
      createElementVNode("rect", {
        x: 10,
        y: 60,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[41]
      }, null, 8, Ct),
      createElementVNode("rect", {
        x: 10,
        y: 70,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[42]
      }, null, 8, St$1),
      createElementVNode("rect", {
        x: 30,
        y: 10,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[43]
      }, null, 8, yt),
      createElementVNode("rect", {
        x: 30,
        y: 20,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[44]
      }, null, 8, Et),
      createElementVNode("rect", {
        x: 30,
        y: 30,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[45]
      }, null, 8, It),
      createElementVNode("rect", {
        x: 30,
        y: 40,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[46]
      }, null, 8, Zt$1),
      createElementVNode("rect", {
        x: 30,
        y: 50,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[47]
      }, null, 8, Tt),
      createElementVNode("rect", {
        x: 30,
        y: 60,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[48]
      }, null, 8, Ft$1),
      createElementVNode("rect", {
        x: 30,
        y: 70,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[49]
      }, null, 8, kt),
      createElementVNode("rect", {
        x: 50,
        y: 10,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[50]
      }, null, 8, zt),
      createElementVNode("rect", {
        x: 50,
        y: 20,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[51]
      }, null, 8, At),
      createElementVNode("rect", {
        x: 50,
        y: 30,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[52]
      }, null, 8, Pt),
      createElementVNode("rect", {
        x: 50,
        y: 40,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[53]
      }, null, 8, qt$1),
      createElementVNode("rect", {
        x: 50,
        y: 50,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[54]
      }, null, 8, Bt),
      createElementVNode("rect", {
        x: 50,
        y: 60,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[55]
      }, null, 8, Mt$1),
      createElementVNode("rect", {
        x: 50,
        y: 70,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[56]
      }, null, 8, bt),
      createElementVNode("rect", {
        x: 70,
        y: 10,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[57]
      }, null, 8, Lt),
      createElementVNode("rect", {
        x: 70,
        y: 20,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[58]
      }, null, 8, Ot$1),
      createElementVNode("rect", {
        x: 70,
        y: 30,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[59]
      }, null, 8, Ut$1),
      createElementVNode("rect", {
        x: 70,
        y: 40,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[60]
      }, null, 8, Nt$1),
      createElementVNode("rect", {
        x: 70,
        y: 50,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[61]
      }, null, 8, Xt$1),
      createElementVNode("rect", {
        x: 70,
        y: 60,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[62]
      }, null, 8, Yt),
      createElementVNode("rect", {
        x: 70,
        y: 70,
        width: 10,
        height: 10,
        fill: t.pixelColors(e.name, e.colors)[63]
      }, null, 8, Rt$1)
    ])
  ], 8, ke$1);
}
const Gt$1 = /* @__PURE__ */ w(Fe$1, [["render", Dt]]), Ht$1 = 90, Vt$1 = 5;
function Wt$1(s, r) {
  const e = y(r), n = s && s.length, l2 = Array.from({ length: Vt$1 }, (a, u2) => x$1(e + u2, s, n)), t = [];
  return t[0] = l2[0], t[1] = l2[1], t[2] = l2[1], t[3] = l2[2], t[4] = l2[2], t[5] = l2[3], t[6] = l2[3], t[7] = l2[0], t[8] = l2[4], t;
}
const jt$1 = {
  name: "avatar-ring",
  props: ["size", "hasTitle", "name", "square", "colors"],
  data() {
    return { SIZE: Ht$1 };
  },
  methods: {
    ringColors(s, r) {
      return Wt$1(r, s);
    }
  }
}, Jt$1 = ["viewBox", "width", "height"], Kt$1 = { key: 0 }, Qt$1 = ["width", "height"], pt$1 = ["width", "height", "rx"], $t$1 = { mask: "url(#mask__ring)" }, el = ["fill"], tl = ["fill"], ll = ["fill"], il = ["fill"], rl = ["fill"], sl = ["fill"], nl = ["fill"], al = ["fill"], hl = ["fill"];
function ol(s, r, e, n, l2, t) {
  return openBlock(), createElementBlock("svg", {
    fill: "none",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 " + l2.SIZE + " " + l2.SIZE,
    width: e.size,
    height: e.size
  }, [
    e.hasTitle ? (openBlock(), createElementBlock("title", Kt$1, toDisplayString(e.name), 1)) : createCommentVNode("", true),
    createElementVNode("mask", {
      id: "mask__ring",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 0,
      width: l2.SIZE,
      height: l2.SIZE
    }, [
      createElementVNode("rect", {
        fill: "#FFFFFF",
        width: l2.SIZE,
        height: l2.SIZE,
        rx: e.square ? void 0 : l2.SIZE * 2
      }, null, 8, pt$1)
    ], 8, Qt$1),
    createElementVNode("g", $t$1, [
      createElementVNode("path", {
        d: "M0 0h90v45H0z",
        fill: t.ringColors(e.name, e.colors)[0]
      }, null, 8, el),
      createElementVNode("path", {
        d: "M0 45h90v45H0z",
        fill: t.ringColors(e.name, e.colors)[1]
      }, null, 8, tl),
      createElementVNode("path", {
        d: "M83 45a38 38 0 00-76 0h76z",
        fill: t.ringColors(e.name, e.colors)[2]
      }, null, 8, ll),
      createElementVNode("path", {
        d: "M83 45a38 38 0 01-76 0h76z",
        fill: t.ringColors(e.name, e.colors)[3]
      }, null, 8, il),
      createElementVNode("path", {
        d: "M77 45a32 32 0 10-64 0h64z",
        fill: t.ringColors(e.name, e.colors)[4]
      }, null, 8, rl),
      createElementVNode("path", {
        d: "M77 45a32 32 0 11-64 0h64z",
        fill: t.ringColors(e.name, e.colors)[5]
      }, null, 8, sl),
      createElementVNode("path", {
        d: "M71 45a26 26 0 00-52 0h52z",
        fill: t.ringColors(e.name, e.colors)[6]
      }, null, 8, nl),
      createElementVNode("path", {
        d: "M71 45a26 26 0 01-52 0h52z",
        fill: t.ringColors(e.name, e.colors)[7]
      }, null, 8, al),
      createElementVNode("circle", {
        cx: 45,
        cy: 45,
        r: 23,
        fill: t.ringColors(e.name, e.colors)[8]
      }, null, 8, hl)
    ])
  ], 8, Jt$1);
}
const cl = /* @__PURE__ */ w(jt$1, [["render", ol]]), _l = 4, ul = 80;
function fl(s, r) {
  const e = y(s), n = r && r.length;
  return Array.from({ length: _l }, (t, a) => x$1(e + a, r, n));
}
const ml = {
  name: "avatar-sunset",
  props: ["name", "size", "hasTitle", "square", "colors"],
  data() {
    return { SIZE: ul };
  },
  computed: {
    formattedName() {
      return this.name.replace(/\s/g, "");
    }
  },
  methods: {
    sunsetColors(s, r) {
      return fl(s, r);
    },
    getPaintFill0() {
      return "url(#gradient_paint0_linear_" + this.formattedName + ")";
    },
    getPaintFill1() {
      return "url(#gradient_paint1_linear_" + this.formattedName + ")";
    },
    getPaintId0() {
      return "gradient_paint0_linear_" + this.formattedName;
    },
    getPaintId1() {
      return "gradient_paint1_linear_" + this.formattedName;
    }
  }
}, dl = ["viewBox", "width", "height"], gl = { key: 0 }, xl = ["width", "height"], wl = ["width", "height", "rx"], vl = { mask: "url(#mask__sunset)" }, Cl = ["fill"], Sl = ["fill"], yl = ["id", "x1", "x2", "y2"], El = ["stop-color"], Il = ["stop-color"], Zl = ["id", "x1", "y1", "x2", "y2"], Tl = ["stop-color"], Fl = ["stop-color"];
function kl(s, r, e, n, l2, t) {
  return openBlock(), createElementBlock("svg", {
    fill: "none",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 " + l2.SIZE + " " + l2.SIZE,
    width: e.size,
    height: e.size
  }, [
    e.hasTitle ? (openBlock(), createElementBlock("title", gl, toDisplayString(e.name), 1)) : createCommentVNode("", true),
    createElementVNode("mask", {
      id: "mask__sunset",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 0,
      width: l2.SIZE,
      height: l2.SIZE
    }, [
      createElementVNode("rect", {
        fill: "#FFFFFF",
        width: l2.SIZE,
        height: l2.SIZE,
        rx: e.square ? void 0 : l2.SIZE * 2
      }, null, 8, wl)
    ], 8, xl),
    createElementVNode("g", vl, [
      createElementVNode("path", {
        d: "M0 0h80v40H0z",
        fill: t.getPaintFill0()
      }, null, 8, Cl),
      createElementVNode("path", {
        d: "M0 40h80v40H0z",
        fill: t.getPaintFill1()
      }, null, 8, Sl)
    ]),
    createElementVNode("defs", null, [
      createElementVNode("linearGradient", {
        gradientUnits: "userSpaceOnUse",
        id: t.getPaintId0(),
        x1: l2.SIZE / 2,
        y1: 0,
        x2: l2.SIZE / 2,
        y2: l2.SIZE / 2
      }, [
        createElementVNode("stop", {
          "stop-color": t.sunsetColors(e.name, e.colors)[0]
        }, null, 8, El),
        createElementVNode("stop", {
          offset: 1,
          "stop-color": t.sunsetColors(e.name, e.colors)[1]
        }, null, 8, Il)
      ], 8, yl),
      createElementVNode("linearGradient", {
        gradientUnits: "userSpaceOnUse",
        id: t.getPaintId1(),
        x1: l2.SIZE / 2,
        y1: l2.SIZE / 2,
        x2: l2.SIZE / 2,
        y2: l2.SIZE
      }, [
        createElementVNode("stop", {
          "stop-color": t.sunsetColors(e.name, e.colors)[2]
        }, null, 8, Tl),
        createElementVNode("stop", {
          offset: 1,
          "stop-color": t.sunsetColors(e.name, e.colors)[3]
        }, null, 8, Fl)
      ], 8, Zl)
    ])
  ], 8, dl);
}
const zl = /* @__PURE__ */ w(ml, [["render", kl]]), Al = {
  name: "avatar",
  components: {
    AvatarBauhaus: W,
    AvatarBeam: oe$1,
    AvatarMarble: Ee$1,
    AvatarPixel: Gt$1,
    AvatarRing: cl,
    AvatarSunset: zl
  },
  props: ["variant", "colors", "name", "square", "hasTitle", "size"],
  data() {
    return { defaultAvatarProps: B$1 };
  }
};
function Pl(s, r, e, n, l2, t) {
  const a = resolveComponent("avatar-bauhaus"), u2 = resolveComponent("avatar-beam"), m = resolveComponent("avatar-marble"), E = resolveComponent("avatar-pixel"), I = resolveComponent("avatar-ring"), Z2 = resolveComponent("avatar-sunset");
  return openBlock(), createElementBlock("div", null, [
    e.variant === "bauhaus" ? (openBlock(), createBlock(a, {
      key: 0,
      colors: e.colors || l2.defaultAvatarProps.colors,
      name: e.name || l2.defaultAvatarProps.name,
      square: e.square || l2.defaultAvatarProps.square,
      hasTitle: e.hasTitle || l2.defaultAvatarProps.hasTitle,
      size: e.size || l2.defaultAvatarProps.size
    }, null, 8, ["colors", "name", "square", "hasTitle", "size"])) : createCommentVNode("", true),
    e.variant === "beam" ? (openBlock(), createBlock(u2, {
      key: 1,
      colors: e.colors || l2.defaultAvatarProps.colors,
      name: e.name || l2.defaultAvatarProps.name,
      square: e.square || l2.defaultAvatarProps.square,
      hasTitle: e.hasTitle || l2.defaultAvatarProps.hasTitle,
      size: e.size || l2.defaultAvatarProps.size
    }, null, 8, ["colors", "name", "square", "hasTitle", "size"])) : createCommentVNode("", true),
    e.variant === "marble" ? (openBlock(), createBlock(m, {
      key: 2,
      colors: e.colors || l2.defaultAvatarProps.colors,
      name: e.name || l2.defaultAvatarProps.name,
      square: e.square || l2.defaultAvatarProps.square,
      hasTitle: e.hasTitle || l2.defaultAvatarProps.hasTitle,
      size: e.size || l2.defaultAvatarProps.size
    }, null, 8, ["colors", "name", "square", "hasTitle", "size"])) : createCommentVNode("", true),
    e.variant === "pixel" ? (openBlock(), createBlock(E, {
      key: 3,
      colors: e.colors || l2.defaultAvatarProps.colors,
      name: e.name || l2.defaultAvatarProps.name,
      square: e.square || l2.defaultAvatarProps.square,
      hasTitle: e.hasTitle || l2.defaultAvatarProps.hasTitle,
      size: e.size || l2.defaultAvatarProps.size
    }, null, 8, ["colors", "name", "square", "hasTitle", "size"])) : createCommentVNode("", true),
    e.variant === "ring" ? (openBlock(), createBlock(I, {
      key: 4,
      colors: e.colors || l2.defaultAvatarProps.colors,
      name: e.name || l2.defaultAvatarProps.name,
      square: e.square || l2.defaultAvatarProps.square,
      hasTitle: e.hasTitle || l2.defaultAvatarProps.hasTitle,
      size: e.size || l2.defaultAvatarProps.size
    }, null, 8, ["colors", "name", "square", "hasTitle", "size"])) : createCommentVNode("", true),
    e.variant === "sunset" ? (openBlock(), createBlock(Z2, {
      key: 5,
      colors: e.colors || l2.defaultAvatarProps.colors,
      name: e.name || l2.defaultAvatarProps.name,
      square: e.square || l2.defaultAvatarProps.square,
      hasTitle: e.hasTitle || l2.defaultAvatarProps.hasTitle,
      size: e.size || l2.defaultAvatarProps.size
    }, null, 8, ["colors", "name", "square", "hasTitle", "size"])) : createCommentVNode("", true)
  ]);
}
const Bl = /* @__PURE__ */ w(Al, [["render", Pl]]);
const _hoisted_1$9 = {
  tabindex: "0",
  class: "relative flex items-center justify-center rounded-full cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-primaryDark"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Picture",
  props: {
    name: { default: "" },
    indicator: { type: Boolean, default: false },
    indicatorStyles: { default: "bg-green-500" },
    size: { default: 22 }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createVNode(unref(Bl), {
          size: _ctx.size,
          name: _ctx.name,
          square: false,
          colors: ["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"],
          variant: "beam"
        }, null, 8, ["size", "name"]),
        _ctx.indicator ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-primary", _ctx.indicatorStyles])
        }, null, 2)) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$8 = { class: "flex flex-col items-center justify-center p-4" };
const _hoisted_2$8 = ["src", "alt"];
const _hoisted_3$6 = {
  key: 1,
  class: "mt-2 font-semibold text-center"
};
const _hoisted_4$4 = {
  key: 2,
  class: "max-w-sm mt-2 text-center whitespace-normal text-tiny text-secondaryLight"
};
const _hoisted_5$2 = {
  key: 3,
  class: "mt-4"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Placeholder",
  props: {
    src: {},
    alt: { default: "" },
    heading: {},
    text: { default: "" },
    large: { type: Boolean }
  },
  setup(__props) {
    const slots = useSlots();
    const hasBody = computed(() => {
      return !!slots.body;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        _ctx.src ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          loading: "lazy",
          class: normalizeClass(["inline-flex flex-col object-contain object-center", _ctx.large ? "h-32 w-32" : "h-16 w-16"]),
          alt: _ctx.alt
        }, null, 10, _hoisted_2$8)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "icon"),
        _ctx.heading ? (openBlock(), createElementBlock("span", _hoisted_3$6, toDisplayString(_ctx.heading), 1)) : createCommentVNode("", true),
        _ctx.text ? (openBlock(), createElementBlock("span", _hoisted_4$4, toDisplayString(_ctx.text), 1)) : createCommentVNode("", true),
        hasBody.value ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
          renderSlot(_ctx.$slots, "body")
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$7 = {
  key: 0,
  class: "flex"
};
const _hoisted_2$7 = {
  key: 1,
  class: "flex flex-1 flex-col items-center justify-center p-4"
};
const _hoisted_3$5 = { class: "text-secondaryLight" };
const _hoisted_4$3 = {
  key: 2,
  class: "flex flex-1 flex-col"
};
const CHILD_SLOT_NAME = "default";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TreeBranch",
  props: {
    adapter: {},
    nodeItem: {},
    rootNodesLength: { default: 0 },
    expandAll: { type: Boolean, default: false }
  },
  setup(__props) {
    var _a2;
    const { t } = (_a2 = inject(HOPP_UI_OPTIONS)) != null ? _a2 : {};
    const props2 = __props;
    const isOnlyRootChild = computed(() => props2.rootNodesLength === 1);
    const childrenRendered = ref(isOnlyRootChild.value);
    const showChildren = ref(isOnlyRootChild.value);
    const isNodeOpen = ref(isOnlyRootChild.value);
    const highlightNode = ref(false);
    const childNodes = props2.adapter.getChildren(
      props2.nodeItem.id,
      props2.nodeItem.data.type
    );
    const toggleNodeChildren = () => {
      if (props2.expandAll)
        return;
      if (!childrenRendered.value)
        childrenRendered.value = true;
      showChildren.value = !showChildren.value;
      isNodeOpen.value = !isNodeOpen.value;
    };
    onMounted(() => {
      if (props2.expandAll) {
        childrenRendered.value = true;
        showChildren.value = true;
        isNodeOpen.value = true;
      }
    });
    const highlightNodeChildren = (id) => {
      if (id) {
        highlightNode.value = true;
      } else {
        highlightNode.value = false;
      }
    };
    return (_ctx, _cache) => {
      var _a3;
      return openBlock(), createElementBlock(Fragment, null, [
        renderSlot(_ctx.$slots, "default", {
          node: _ctx.nodeItem,
          toggleChildren: toggleNodeChildren,
          isOpen: isNodeOpen.value,
          highlightChildren: (id) => highlightNodeChildren(id)
        }),
        childrenRendered.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$7, [
          createElementVNode("div", {
            class: "ml-[1.375rem] flex w-0.5 transform cursor-nsResize bg-dividerLight transition hover:scale-x-125 hover:bg-dividerDark",
            onClick: toggleNodeChildren
          }),
          unref(childNodes).status === "loaded" && unref(childNodes).data.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["flex flex-1 flex-col truncate", {
              "bg-divider": highlightNode.value
            }])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(childNodes).data, (childNode) => {
              return openBlock(), createBlock(_sfc_main$7, {
                key: `${childNode.id}-${childNode.data.type}`,
                "node-item": childNode,
                adapter: _ctx.adapter,
                "expand-all": _ctx.expandAll
              }, {
                [CHILD_SLOT_NAME]: withCtx(({
                  node,
                  toggleChildren,
                  isOpen,
                  highlightChildren
                }) => [
                  renderSlot(_ctx.$slots, "default", {
                    node,
                    toggleChildren,
                    isOpen,
                    highlightChildren: (id) => highlightChildren(id)
                  })
                ]),
                emptyNode: withCtx(({ node }) => [
                  renderSlot(_ctx.$slots, "emptyNode", { node })
                ]),
                _: 2
              }, 1032, ["node-item", "adapter", "expand-all"]);
            }), 128))
          ], 2)) : createCommentVNode("", true),
          unref(childNodes).status === "loading" ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
            createVNode(_sfc_main$m, { class: "my-4" }),
            createElementVNode("span", _hoisted_3$5, toDisplayString((_a3 = unref(t)) == null ? void 0 : _a3("state.loading")), 1)
          ])) : createCommentVNode("", true),
          unref(childNodes).status === "loaded" && unref(childNodes).data.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
            renderSlot(_ctx.$slots, "emptyNode", { node: _ctx.nodeItem })
          ])) : createCommentVNode("", true)
        ], 512)), [
          [vShow, showChildren.value]
        ]) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1$6 = { class: "flex flex-1 flex-col" };
const _hoisted_2$6 = {
  key: 0,
  class: "flex flex-col"
};
const _hoisted_3$4 = {
  key: 1,
  class: "flex flex-1 flex-col items-center justify-center p-4"
};
const _hoisted_4$2 = { class: "text-secondaryLight" };
const _hoisted_5$1 = {
  key: 2,
  class: "flex flex-1 flex-col"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Tree",
  props: {
    adapter: {},
    expandAll: { type: Boolean }
  },
  setup(__props) {
    var _a2;
    const { t } = (_a2 = inject(HOPP_UI_OPTIONS)) != null ? _a2 : {};
    const props2 = __props;
    const rootNodes = props2.adapter.getChildren(null);
    return (_ctx, _cache) => {
      var _a3;
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        unref(rootNodes).status === "loaded" && unref(rootNodes).data.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rootNodes).data, (rootNode) => {
            return openBlock(), createElementBlock("div", {
              key: rootNode.id,
              class: "flex flex-1 flex-col"
            }, [
              createVNode(_sfc_main$7, {
                "root-nodes-length": unref(rootNodes).data.length,
                "node-item": rootNode,
                "expand-all": _ctx.expandAll,
                adapter: _ctx.adapter
              }, {
                default: withCtx(({ node, toggleChildren, isOpen, highlightChildren }) => [
                  renderSlot(_ctx.$slots, "content", {
                    node,
                    toggleChildren,
                    isOpen,
                    highlightChildren: (id) => highlightChildren(id)
                  })
                ]),
                emptyNode: withCtx(({ node }) => [
                  renderSlot(_ctx.$slots, "emptyNode", { node })
                ]),
                _: 2
              }, 1032, ["root-nodes-length", "node-item", "expand-all", "adapter"])
            ]);
          }), 128))
        ])) : unref(rootNodes).status === "loading" ? (openBlock(), createElementBlock("div", _hoisted_3$4, [
          createVNode(_sfc_main$m, { class: "my-4" }),
          createElementVNode("span", _hoisted_4$2, toDisplayString((_a3 = unref(t)) == null ? void 0 : _a3("state.loading")), 1)
        ])) : createCommentVNode("", true),
        unref(rootNodes).status === "loaded" && unref(rootNodes).data.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
          renderSlot(_ctx.$slots, "emptyNode", { node: null })
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$5 = { class: "select-wrapper" };
const _hoisted_2$5 = { class: "text-xs down-icon" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SelectWrapper",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createElementVNode("span", _hoisted_2$5, [
          createVNode(unref(IconChevronDown))
        ]),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
const SelectWrapper_vue_vue_type_style_index_0_scoped_59a13278_lang = "";
const SelectWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-59a13278"]]);
const _hoisted_1$4 = { class: "max-w-[16rem] truncate" };
const _hoisted_2$4 = {
  key: 1,
  class: "<sm:hidden"
};
const _hoisted_3$3 = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Primary",
  props: {
    to: { default: "" },
    exact: { type: Boolean, default: true },
    blank: { type: Boolean, default: false },
    label: { default: "" },
    icon: { default: null },
    svg: { default: null },
    color: { default: "" },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    reverse: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    gradient: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    shortcut: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$v), {
        to: _ctx.to,
        blank: _ctx.blank,
        class: normalizeClass(["relative inline-flex items-center justify-center py-2 font-semibold whitespace-nowrap transition focus:outline-none focus-visible:bg-accentDark", [
          _ctx.color ? `text-${_ctx.color}-800 bg-${_ctx.color}-200 hover:(text-${_ctx.color}-900 bg-${_ctx.color}-300) focus-visible:(text-${_ctx.color}-900 bg-${_ctx.color}-300)` : `bg-accent text-accentContrast hover:bg-accentDark focus-visible:bg-accentDark`,
          _ctx.label ? "px-4 py-2" : "p-2",
          _ctx.rounded ? "rounded-full" : "rounded",
          { "cursor-not-allowed opacity-75": _ctx.disabled },
          { "pointer-events-none": _ctx.loading },
          { "px-6 py-4 text-lg": _ctx.large },
          { "shadow-lg hover:shadow-xl": _ctx.shadow },
          {
            "bg-gradient-to-tr from-gradientFrom via-gradientVia to-gradientTo text-white": _ctx.gradient
          },
          {
            "border border-accent hover:border-accentDark focus-visible:border-accentDark": _ctx.outline
          }
        ]]),
        exact: _ctx.exact,
        disabled: _ctx.disabled,
        tabindex: _ctx.loading ? "-1" : "0",
        role: "button"
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(["inline-flex items-center justify-center whitespace-nowrap", [{ "flex-row-reverse": _ctx.reverse }, { "opacity-50": _ctx.loading }]])
          }, [
            _ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
              key: 0,
              class: normalizeClass(["svg-icons", [
                { "!text-2xl": _ctx.large },
                _ctx.label ? _ctx.reverse ? "ml-2" : "mr-2" : ""
              ]])
            }, null, 8, ["class"])) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_1$4, toDisplayString(_ctx.label), 1),
            _ctx.shortcut.length ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.shortcut, (key, index2) => {
                return openBlock(), createElementBlock("kbd", {
                  key: `key-${index2}`,
                  class: "shortcut-key !border-accentLight !bg-accentDark"
                }, toDisplayString(key), 1);
              }), 128))
            ])) : createCommentVNode("", true)
          ], 2),
          _ctx.loading ? (openBlock(), createElementBlock("span", _hoisted_3$3, [
            createVNode(unref(_sfc_main$m))
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["to", "blank", "exact", "class", "disabled", "tabindex"]);
    };
  }
});
const _hoisted_1$3 = { class: "truncate max-w-[16rem]" };
const _hoisted_2$3 = {
  key: 1,
  class: "<sm:hidden"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Secondary",
  props: {
    to: { default: "" },
    exact: { type: Boolean, default: true },
    blank: { type: Boolean, default: false },
    label: { default: "" },
    icon: { default: null },
    svg: { default: null },
    color: { default: "" },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    reverse: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    shortcut: { default: () => [] },
    filled: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$v), {
        to: _ctx.to,
        exact: _ctx.exact,
        blank: _ctx.blank,
        class: normalizeClass(["inline-flex items-center justify-center font-semibold transition whitespace-nowrap focus:outline-none", [
          _ctx.color ? `text-${_ctx.color}-500 hover:text-${_ctx.color}-600 focus-visible:text-${_ctx.color}-600` : "text-secondary hover:text-secondaryDark focus-visible:text-secondaryDark",
          { "pointer-events-none": _ctx.loading },
          _ctx.label ? "rounded px-4 py-2" : "p-2",
          { "rounded-full": _ctx.rounded },
          { "opacity-75 cursor-not-allowed": _ctx.disabled },
          { "flex-row-reverse": _ctx.reverse },
          { "px-6 py-4 text-lg": _ctx.large },
          {
            "border border-divider hover:border-dividerDark focus-visible:border-dividerDark": _ctx.outline
          },
          {
            "bg-primaryLight hover:bg-primaryDark focus-visible:bg-primaryDark": _ctx.filled
          }
        ]]),
        disabled: _ctx.disabled,
        tabindex: _ctx.loading ? "-1" : "0",
        role: "button"
      }, {
        default: withCtx(() => [
          !_ctx.loading ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["inline-flex items-center justify-center whitespace-nowrap", { "flex-row-reverse": _ctx.reverse }])
          }, [
            _ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
              key: 0,
              class: normalizeClass(["svg-icons", [
                { "!text-2xl": _ctx.large },
                _ctx.label ? _ctx.reverse ? "ml-2" : "mr-2" : ""
              ]])
            }, null, 8, ["class"])) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_1$3, toDisplayString(_ctx.label), 1),
            _ctx.shortcut.length ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.shortcut, (key, index2) => {
                return openBlock(), createElementBlock("kbd", {
                  key: `key-${index2}`,
                  class: "shortcut-key !bg-inherit"
                }, toDisplayString(key), 1);
              }), 128))
            ])) : createCommentVNode("", true)
          ], 2)) : (openBlock(), createBlock(unref(_sfc_main$m), { key: 1 }))
        ]),
        _: 1
      }, 8, ["to", "exact", "blank", "class", "disabled", "tabindex"]);
    };
  }
});
const _hoisted_1$2 = {
  key: 0,
  class: "flex items-center justify-between border-b border-dividerLight p-4"
};
const _hoisted_2$2 = { class: "flex flex-1 items-center justify-start" };
const _hoisted_3$2 = { class: "flex items-center justify-center" };
const _hoisted_4$1 = { class: "heading" };
const _hoisted_5 = { class: "flex flex-1 items-center justify-end" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Heading",
  props: {
    title: {},
    showCloseIcon: { type: Boolean },
    closeText: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    var _a2;
    const { t } = (_a2 = inject(HOPP_UI_OPTIONS)) != null ? _a2 : {};
    const emit2 = __emit;
    const close = () => {
      emit2("close");
    };
    return (_ctx, _cache) => {
      var _a3, _b, _c;
      const _directive_tippy = resolveDirective("tippy");
      return _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createElementVNode("div", _hoisted_2$2, [
          renderSlot(_ctx.$slots, "actions")
        ]),
        createElementVNode("div", _hoisted_3$2, [
          createElementVNode("h3", _hoisted_4$1, toDisplayString(_ctx.title), 1)
        ]),
        createElementVNode("div", _hoisted_5, [
          _ctx.showCloseIcon ? withDirectives((openBlock(), createBlock(unref(_sfc_main$3), {
            key: 0,
            title: (_c = (_b = _ctx.closeText) != null ? _b : (_a3 = unref(t)) == null ? void 0 : _a3("action.close")) != null ? _c : "Close",
            icon: unref(IconX),
            onClick: close
          }, null, 8, ["title", "icon"])), [
            [_directive_tippy, { theme: "tooltip", delay: [500, 20] }]
          ]) : createCommentVNode("", true)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$1 = {
  ref: "modal",
  class: "fixed inset-0 z-[1000] overflow-y-auto transition",
  role: "dialog"
};
const _hoisted_2$1 = { class: "flex min-h-screen items-end justify-center text-center sm:!block" };
const _hoisted_3$1 = {
  key: 0,
  class: "sm:h-screen sm:align-middle <sm:hidden",
  "aria-hidden": "true"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    dialog: { type: Boolean, default: false },
    title: { default: "" },
    dismissible: { type: Boolean, default: true },
    placement: { default: "top" },
    fullWidth: { type: Boolean, default: false },
    fullWidthBody: { type: Boolean, default: false },
    styles: { default: "sm:max-w-lg" },
    closeText: { default: null }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    var _a2;
    const { onModalOpen, onModalClose } = (_a2 = inject(HOPP_UI_OPTIONS)) != null ? _a2 : {};
    const emit2 = __emit;
    onBeforeUnmount(() => {
      onModalClose == null ? void 0 : onModalClose();
    });
    const shouldCleanupDomOnUnmount = ref(true);
    const slots = useSlots();
    const hasFooterSlot = computed(() => {
      return !!slots.footer;
    });
    const dialog = ref();
    onMounted(() => {
      var _a3;
      (_a3 = dialog.value) == null ? void 0 : _a3.showModal();
      onModalOpen == null ? void 0 : onModalOpen();
    });
    onBeforeUnmount(() => {
      document.removeEventListener("keydown", onKeyDown);
    });
    const close = () => {
      emit2("close");
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    const onTransitionLeaveStart = () => {
      close();
      shouldCleanupDomOnUnmount.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("dialog", {
        ref_key: "dialog",
        ref: dialog
      }, [
        createVNode(Transition, {
          name: "fade",
          appear: "",
          onLeave: onTransitionLeaveStart
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1$1, [
              createElementVNode("div", _hoisted_2$1, [
                createVNode(Transition, {
                  name: "fade",
                  appear: ""
                }, {
                  default: withCtx(() => [
                    createElementVNode("div", {
                      class: "fixed inset-0 transition-opacity",
                      onTouchstart: _cache[1] || (_cache[1] = ($event) => !dialog.value ? close() : null),
                      onTouchend: _cache[2] || (_cache[2] = ($event) => !dialog.value ? close() : null),
                      onMouseup: _cache[3] || (_cache[3] = ($event) => !dialog.value ? close() : null),
                      onMousedown: _cache[4] || (_cache[4] = ($event) => !dialog.value ? close() : null)
                    }, [
                      createElementVNode("div", {
                        class: "absolute inset-0 bg-primaryLight opacity-80 focus:outline-none",
                        tabindex: "0",
                        onClick: _cache[0] || (_cache[0] = ($event) => !dialog.value ? close() : null)
                      })
                    ], 32)
                  ]),
                  _: 1
                }),
                _ctx.placement === "center" ? (openBlock(), createElementBlock("span", _hoisted_3$1, "\u200B")) : createCommentVNode("", true),
                createVNode(Transition, {
                  name: "bounce",
                  appear: ""
                }, {
                  default: withCtx(() => [
                    createElementVNode("div", {
                      class: normalizeClass(["inline-block w-full transform overflow-hidden border-dividerDark bg-primary text-left align-bottom shadow-lg transition-all sm:rounded-xl sm:border sm:align-middle", [{ "mt-16 md:mb-8": _ctx.placement === "top" }, _ctx.styles]])
                    }, [
                      createVNode(_sfc_main$2, {
                        title: _ctx.title,
                        "show-close-icon": _ctx.dismissible,
                        "close-text": _ctx.closeText,
                        onClose: close
                      }, null, 8, ["title", "show-close-icon", "close-text"]),
                      createElementVNode("div", {
                        class: normalizeClass(["flex max-h-[60vh] flex-col overflow-y-auto", { "p-4": !_ctx.fullWidth && !_ctx.fullWidthBody }])
                      }, [
                        renderSlot(_ctx.$slots, "body", {}, void 0, true)
                      ], 2),
                      hasFooterSlot.value ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass(["flex flex-1 items-center justify-between border-t border-dividerLight bg-primaryContrast", { "p-4": !_ctx.fullWidth }])
                      }, [
                        renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                      ], 2)) : createCommentVNode("", true)
                    ], 2)
                  ]),
                  _: 3
                })
              ])
            ], 512)
          ]),
          _: 3
        })
      ], 512);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_7a986161_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7a986161"]]);
var M = Object.defineProperty;
var u = (t, e, o2) => e in t ? M(t, e, { enumerable: true, configurable: true, writable: true, value: o2 }) : t[e] = o2;
var l = (t, e, o2) => (u(t, typeof e != "symbol" ? e + "" : e, o2), o2);
const d = Symbol("modal-system");
class P {
  constructor(e) {
    l(this, "idTicker", 0);
    l(this, "modalStack", reactive([]));
    l(this, "resolveMap", /* @__PURE__ */ new Map());
    this.options = e;
  }
  closeModal(e, o2) {
    var i;
    const n = this.modalStack.findIndex((s) => s.id === e);
    n >= 0 && (this.modalStack.splice(n, 1), (i = this.resolveMap.get(e)) == null || i[0](o2), this.resolveMap.delete(e));
  }
  closeModalAsRejected(e, o2) {
    var i;
    const n = this.modalStack.findIndex((s) => s.id === e);
    n >= 0 && (this.modalStack.splice(n, 1), (i = this.resolveMap.get(e)) == null || i[1](o2), this.resolveMap.delete(e));
  }
  openModal(e, o2) {
    const n = this.idTicker;
    return this.idTicker++, this.modalStack.push({
      id: n,
      props: o2,
      component: markRaw(e)
    }), new Promise((s, a) => {
      this.resolveMap.set(n, [s, a]);
    });
  }
}
function B() {
  const t = inject(d);
  if (!t)
    throw new Error("No modal system provided");
  return {
    openModal: t.openModal.bind(t)
  };
}
const C$1 = {
  install(t, e) {
    const o2 = new P(e);
    t.provide(d, o2);
  }
}, D = /* @__PURE__ */ defineComponent({
  __name: "DialogHost",
  setup(t) {
    const e = inject(d);
    return (o2, n) => {
      var _a2;
      var i;
      return openBlock(), createBlock(TransitionGroup, normalizeProps(guardReactiveProps((_a2 = (i = unref(e).options) == null ? void 0 : i.transition) != null ? _a2 : {})), {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(e).modalStack, (s) => (openBlock(), createBlock(resolveDynamicComponent(s.component), mergeProps({
            key: s.id
          }, s.props, {
            onModalResolve: (a) => unref(e).closeModal(s.id, a),
            onModalReject: (a) => unref(e).closeModalAsRejected(s.id, a)
          }), null, 16, ["onModalResolve", "onModalReject"]))), 128))
        ]),
        _: 1
      }, 16);
    };
  }
});
var Mt = Object.defineProperty;
var Ht = (r, o2, e) => o2 in r ? Mt(r, o2, { enumerable: true, configurable: true, writable: true, value: e }) : r[o2] = e;
var x = (r, o2, e) => Ht(r, typeof o2 != "symbol" ? o2 + "" : o2, e);
function Ot(r) {
  if (!r || typeof document > "u")
    return;
  let o2 = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
  e.type = "text/css", o2.appendChild(e), e.styleSheet ? e.styleSheet.cssText = r : e.appendChild(document.createTextNode(r));
}
Ot("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;will-change:transform,opacity,height;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast] [data-buttons]{display:flex;gap:8px;margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px;transform:translateZ(0)}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toast][data-theme=dark] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:'';position:absolute;left:0;right:0;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount,0));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{from{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;--mobile-offset:16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 91%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 91%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 91%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 100%, 12%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 12%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
let pt = 0;
class Nt {
  constructor() {
    x(this, "subscribers");
    x(this, "toasts");
    x(this, "subscribe", (o2) => (this.subscribers.push(o2), () => {
      const e = this.subscribers.indexOf(o2);
      this.subscribers.splice(e, 1);
    }));
    x(this, "publish", (o2) => {
      this.subscribers.forEach((e) => e(o2));
    });
    x(this, "addToast", (o2) => {
      this.publish(o2), this.toasts = [...this.toasts, o2];
    });
    x(this, "create", (o2) => {
      var b2;
      const { message: e, ...a } = o2, m = typeof o2.id == "number" || o2.id && ((b2 = o2.id) == null ? void 0 : b2.length) > 0 ? o2.id : pt++, f2 = this.toasts.find((d2) => d2.id === m), g2 = o2.dismissible === void 0 ? true : o2.dismissible;
      return f2 ? this.toasts = this.toasts.map((d2) => d2.id === m ? (this.publish({ ...d2, ...o2, id: m, title: e }), {
        ...d2,
        ...o2,
        id: m,
        dismissible: g2,
        title: e
      }) : d2) : this.addToast({ title: e, ...a, dismissible: g2, id: m }), m;
    });
    x(this, "dismiss", (o2) => (o2 || this.toasts.forEach((e) => {
      this.subscribers.forEach(
        (a) => a({ id: e.id, dismiss: true })
      );
    }), this.subscribers.forEach((e) => e({ id: o2, dismiss: true })), o2));
    x(this, "message", (o2, e) => this.create({ ...e, message: o2, type: "default" }));
    x(this, "error", (o2, e) => this.create({ ...e, type: "error", message: o2 }));
    x(this, "success", (o2, e) => this.create({ ...e, type: "success", message: o2 }));
    x(this, "info", (o2, e) => this.create({ ...e, type: "info", message: o2 }));
    x(this, "warning", (o2, e) => this.create({ ...e, type: "warning", message: o2 }));
    x(this, "loading", (o2, e) => this.create({ ...e, type: "loading", message: o2 }));
    x(this, "promise", (o2, e) => {
      if (!e)
        return;
      let a;
      e.loading !== void 0 && (a = this.create({
        ...e,
        promise: o2,
        type: "loading",
        message: e.loading,
        description: typeof e.description != "function" ? e.description : void 0
      }));
      const m = o2 instanceof Promise ? o2 : o2();
      let f2 = a !== void 0;
      return m.then((g2) => {
        if (g2 && typeof g2.ok == "boolean" && !g2.ok) {
          f2 = false;
          const b2 = typeof e.error == "function" ? e.error(`HTTP error! status: ${response.status}`) : e.error, d2 = typeof e.description == "function" ? e.description(`HTTP error! status: ${response.status}`) : e.description;
          this.create({ id: a, type: "error", message: b2, description: d2 });
        } else if (e.success !== void 0) {
          f2 = false;
          const b2 = typeof e.success == "function" ? e.success(g2) : e.success, d2 = typeof e.description == "function" ? e.description(g2) : e.description;
          this.create({ id: a, type: "success", message: b2, description: d2 });
        }
      }).catch((g2) => {
        if (e.error !== void 0) {
          f2 = false;
          const b2 = typeof e.error == "function" ? e.error(g2) : e.error, d2 = typeof e.description == "function" ? e.description(g2) : e.description;
          this.create({ id: a, type: "error", message: b2, description: d2 });
        }
      }).finally(() => {
        var g2;
        f2 && (this.dismiss(a), a = void 0), (g2 = e.finally) == null || g2.call(e);
      }), a;
    });
    x(this, "custom", (o2, e) => {
      const a = (e == null ? void 0 : e.id) || pt++;
      return this.publish({ component: o2, id: a, ...e }), a;
    });
    this.subscribers = [], this.toasts = [];
  }
}
const C = new Nt(), Ft = (r, o2) => {
  const e = (o2 == null ? void 0 : o2.id) || pt++;
  return C.create({
    message: r,
    id: e,
    type: "default",
    ...o2
  }), e;
}, Rt = Ft, We = Object.assign(Rt, {
  success: C.success,
  info: C.info,
  warning: C.warning,
  error: C.error,
  custom: C.custom,
  message: C.message,
  promise: C.promise,
  dismiss: C.dismiss,
  loading: C.loading
}), Z = (r, o2) => {
  const e = r.__vccOpts || r;
  for (const [a, m] of o2)
    e[a] = m;
  return e;
}, _t = {}, Wt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stoke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ut = /* @__PURE__ */ createElementVNode("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}, null, -1), Vt = /* @__PURE__ */ createElementVNode("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}, null, -1), jt = [
  Ut,
  Vt
];
function Kt(r, o2) {
  return openBlock(), createElementBlock("svg", Wt, jt);
}
const Xt = /* @__PURE__ */ Z(_t, [["render", Kt]]), Gt = () => {
  const r = ref(false);
  return watchEffect(() => {
    const o2 = () => {
      r.value = document.hidden;
    };
    return document.addEventListener("visibilitychange", o2), () => window.removeEventListener("visibilitychange", o2);
  }), {
    isDocumentHidden: r
  };
}, Zt = ["aria-live", "data-styled", "data-mounted", "data-promise", "data-removed", "data-visible", "data-y-position", "data-x-position", "data-index", "data-front", "data-swiping", "data-dismissible", "data-type", "data-invert", "data-swipe-out", "data-expanded"], qt = ["aria-label", "data-disabled"], Jt = {
  key: 0,
  "data-icon": ""
}, Qt = { "data-content": "" }, te = {
  key: 1,
  "data-buttons": ""
}, ee = ["onClick"], ae = 4e3, oe = 14, se = 20, ne = 200, re = /* @__PURE__ */ defineComponent({
  __name: "Toast",
  props: {
    toast: {},
    toasts: {},
    index: {},
    expanded: { type: Boolean },
    invert: { type: Boolean },
    heights: {},
    gap: {},
    position: {},
    visibleToasts: {},
    expandByDefault: { type: Boolean },
    closeButton: { type: Boolean },
    interacting: { type: Boolean },
    duration: {},
    descriptionClass: {},
    style: {},
    cancelButtonStyle: {},
    actionButtonStyle: {},
    unstyled: { type: Boolean },
    loadingIcon: {},
    class: {},
    classes: {},
    icons: {},
    closeButtonAriaLabel: {},
    pauseWhenPageIsHidden: { type: Boolean },
    cn: { type: Function }
  },
  emits: ["update:heights", "removeToast"],
  setup(r, { emit: o2 }) {
    const e = o2, a = r, m = ref(false), f2 = ref(false), g2 = ref(false), b2 = ref(false), d2 = ref(0), O2 = ref(0), D2 = ref(null), E = ref(null), P2 = computed(() => a.index === 0), A = computed(() => a.index + 1 <= a.visibleToasts), T2 = computed(() => a.toast.type), K2 = computed(() => a.toast.dismissible !== false), ct2 = computed(() => {
      var t, l2, v, S, w2, h2, M2;
      return a.cn(
        (t = a.classes) == null ? void 0 : t.toast,
        (v = (l2 = a.toast) == null ? void 0 : l2.classes) == null ? void 0 : v.toast,
        (S = a.classes) == null ? void 0 : S.default,
        (w2 = a.classes) == null ? void 0 : w2[a.toast.type || "default"],
        (M2 = (h2 = a.toast) == null ? void 0 : h2.classes) == null ? void 0 : M2[a.toast.type || "default"]
      );
    }), ut2 = a.toast.style || {}, q2 = computed(
      () => a.heights.findIndex((t) => t.toastId === a.toast.id) || 0
    ), ft2 = computed(() => {
      var _a2;
      return (_a2 = a.toast.closeButton) != null ? _a2 : a.closeButton;
    }), s = computed(
      () => a.toast.duration || a.duration || ae
    ), n = ref(0), c = ref(0), B2 = ref(s.value), $2 = ref(0), y2 = ref(null), L2 = computed(() => a.position.split("-")), J2 = computed(() => L2.value[0]), Q2 = computed(() => L2.value[1]), tt2 = typeof a.toast.title != "string", et2 = typeof a.toast.description != "string", at2 = computed(() => a.heights.reduce((t, l2, v) => v >= q2.value ? t : t + l2.height, 0)), ot2 = Gt(), st2 = computed(() => a.toast.invert || a.invert), U2 = computed(() => T2.value === "loading");
    onMounted(() => {
      if (!m.value)
        return;
      const t = E.value, l2 = t == null ? void 0 : t.style.height;
      t.style.height = "auto";
      const v = t.getBoundingClientRect().height;
      t.style.height = l2, O2.value = v;
      let S;
      a.heights.find(
        (h2) => h2.toastId === a.toast.id
      ) ? S = a.heights.map(
        (h2) => h2.toastId === a.toast.id ? { ...h2, height: v } : h2
      ) : S = [
        {
          toastId: a.toast.id,
          height: v,
          position: a.toast.position
        },
        ...a.heights
      ], e("update:heights", S);
    });
    let V2;
    const z = (t = 0) => (V2 = setTimeout(() => {
      f2.value = true, d2.value = c.value;
      const l2 = a.heights.filter(
        (v) => v.toastId !== a.toast.id
      );
      e("update:heights", l2), setTimeout(() => {
        e("removeToast", a.toast);
      }, ne);
    }, t), V2), Et2 = () => {
      var t, l2;
      U2.value || !K2.value || (z(), (l2 = (t = a.toast).onDismiss) == null || l2.call(t, a.toast));
    }, It2 = (t) => {
      U2.value || !K2.value || (D2.value = /* @__PURE__ */ new Date(), d2.value = c.value, t.target.setPointerCapture(t.pointerId), t.target.tagName !== "BUTTON" && (g2.value = true, y2.value = { x: t.clientX, y: t.clientY }));
    }, Pt2 = (t) => {
      var w2, h2, M2, Y2;
      if (b2.value)
        return;
      y2.value = null;
      const l2 = Number(
        ((w2 = E.value) == null ? void 0 : w2.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0
      ), v = (/* @__PURE__ */ new Date()).getTime() - D2.value.getTime(), S = Math.abs(l2) / v;
      if (Math.abs(l2) >= se || S > 0.11) {
        d2.value = c.value, (M2 = (h2 = a.toast).onDismiss) == null || M2.call(h2, a.toast), z(), b2.value = true;
        return;
      }
      (Y2 = E.value) == null || Y2.style.setProperty("--swipe-amount", "0px"), g2.value = false;
    }, At2 = (t) => {
      var Y2;
      if (!y2.value)
        return;
      const l2 = t.clientY - y2.value.y, v = t.clientX - y2.value.x, w2 = (L2.value[0] === "top" ? Math.min : Math.max)(0, l2), h2 = t.pointerType === "touch" ? 10 : 2;
      Math.abs(w2) > h2 ? (Y2 = E.value) == null || Y2.style.setProperty("--swipe-amount", `${l2}px`) : Math.abs(v) > h2 && (y2.value = null);
    };
    return watchEffect(() => {
      c.value = q2.value * oe + at2.value;
    }), watchEffect((t) => {
      if (a.toast.promise && T2.value === "loading" || a.toast.duration === 1 / 0 || a.toast.type === "loading")
        return;
      let l2;
      const v = () => {
        if ($2.value < n.value) {
          const w2 = (/* @__PURE__ */ new Date()).getTime() - n.value;
          B2.value = B2.value - w2;
        }
        $2.value = (/* @__PURE__ */ new Date()).getTime();
      }, S = () => {
        n.value = (/* @__PURE__ */ new Date()).getTime(), l2 = setTimeout(() => {
          var w2, h2;
          (h2 = (w2 = a.toast).onAutoClose) == null || h2.call(w2, a.toast), z();
        }, B2.value);
      };
      a.expanded || a.interacting || a.pauseWhenPageIsHidden && ot2 ? v() : S(), t(() => {
        clearTimeout(l2);
      });
    }), watchEffect(() => {
      a.toast.delete && z();
    }), onMounted(() => {
      if (E.value) {
        const t = E.value.getBoundingClientRect().height;
        O2.value = t;
        const l2 = [
          { toastId: a.toast.id, height: t, position: a.toast.position },
          ...a.heights
        ];
        e("update:heights", l2);
      }
      m.value = true;
    }), onUnmounted(() => {
      if (E.value) {
        const t = a.heights.filter(
          (l2) => l2.toastId !== a.toast.id
        );
        e("update:heights", t);
      }
      clearTimeout(V2);
    }), (t, l2) => {
      var v, S, w2, h2, M2, Y2, ht2, mt2, vt2, yt2;
      return openBlock(), createElementBlock("li", {
        "aria-live": t.toast.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabindex: "0",
        ref_key: "toastRef",
        ref: E,
        "data-sonner-toast": "",
        class: normalizeClass(ct2.value),
        "data-styled": !(t.toast.component || (v = t.toast) != null && v.unstyled || t.unstyled),
        "data-mounted": m.value,
        "data-promise": !!t.toast.promise,
        "data-removed": f2.value,
        "data-visible": A.value,
        "data-y-position": J2.value,
        "data-x-position": Q2.value,
        "data-index": t.index,
        "data-front": P2.value,
        "data-swiping": g2.value,
        "data-dismissible": K2.value,
        "data-type": T2.value,
        "data-invert": st2.value,
        "data-swipe-out": b2.value,
        "data-expanded": !!(t.expanded || t.expandByDefault && m.value),
        style: normalizeStyle({
          "--index": t.index,
          "--toasts-before": t.index,
          "--z-index": t.toasts.length - t.index,
          "--offset": `${f2.value ? d2.value : c.value}px`,
          "--initial-height": t.expandByDefault ? "auto" : `${O2.value}px`,
          ...t.style,
          ...unref(ut2)
        }),
        onPointerdown: It2,
        onPointerup: Pt2,
        onPointermove: At2
      }, [
        ft2.value && !t.toast.component ? (openBlock(), createElementBlock("button", {
          key: 0,
          "aria-label": t.closeButtonAriaLabel || "Close toast",
          "data-disabled": U2.value,
          "data-close-button": "",
          class: normalizeClass(t.cn((S = t.classes) == null ? void 0 : S.closeButton, (h2 = (w2 = t.toast) == null ? void 0 : w2.classes) == null ? void 0 : h2.closeButton)),
          onClick: Et2
        }, [
          createVNode(Xt)
        ], 10, qt)) : createCommentVNode("", true),
        t.toast.component ? (openBlock(), createBlock(resolveDynamicComponent(t.toast.component), mergeProps({ key: 1 }, t.toast.componentProps, { onCloseToast: z }), null, 16)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          T2.value !== "default" || t.toast.icon || t.toast.promise ? (openBlock(), createElementBlock("div", Jt, [
            (t.toast.promise || T2.value === "loading") && !t.toast.icon ? renderSlot(t.$slots, "loading-icon", { key: 0 }) : createCommentVNode("", true),
            t.toast.icon ? (openBlock(), createBlock(resolveDynamicComponent(t.toast.icon), { key: 1 })) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              T2.value === "success" ? renderSlot(t.$slots, "success-icon", { key: 0 }) : T2.value === "error" ? renderSlot(t.$slots, "error-icon", { key: 1 }) : T2.value === "warning" ? renderSlot(t.$slots, "warning-icon", { key: 2 }) : T2.value === "info" ? renderSlot(t.$slots, "info-icon", { key: 3 }) : createCommentVNode("", true)
            ], 64))
          ])) : createCommentVNode("", true),
          createElementVNode("div", Qt, [
            createElementVNode("div", {
              "data-title": "",
              class: normalizeClass(t.cn((M2 = t.classes) == null ? void 0 : M2.title, (Y2 = t.toast.classes) == null ? void 0 : Y2.title))
            }, [
              tt2 ? (openBlock(), createBlock(resolveDynamicComponent(t.toast.title), normalizeProps(mergeProps({ key: 0 }, t.toast.componentProps)), null, 16)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(t.toast.title), 1)
              ], 64))
            ], 2),
            t.toast.description ? (openBlock(), createElementBlock("div", {
              key: 0,
              "data-description": "",
              class: normalizeClass(
                t.cn(
                  t.descriptionClass,
                  t.toast.descriptionClass,
                  (ht2 = t.classes) == null ? void 0 : ht2.description,
                  (mt2 = t.toast.classes) == null ? void 0 : mt2.description
                )
              )
            }, [
              et2 ? (openBlock(), createBlock(resolveDynamicComponent(t.toast.description), normalizeProps(mergeProps({ key: 0 }, t.toast.componentProps)), null, 16)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(t.toast.description), 1)
              ], 64))
            ], 2)) : createCommentVNode("", true)
          ]),
          t.toast.cancel || t.toast.action ? (openBlock(), createElementBlock("div", te, [
            t.toast.cancel ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: normalizeClass(t.cn((vt2 = t.classes) == null ? void 0 : vt2.cancelButton, (yt2 = t.toast.classes) == null ? void 0 : yt2.cancelButton)),
              "data-button": "",
              "data-cancel": "",
              onClick: l2[0] || (l2[0] = () => {
                var N2;
                z(), (N2 = t.toast.cancel) != null && N2.onClick && t.toast.cancel.onClick();
              })
            }, toDisplayString(t.toast.cancel.label), 3)) : createCommentVNode("", true),
            t.toast.action ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(Array.isArray(t.toast.action) ? t.toast.action : [t.toast.action], (N2, zt2) => {
              var bt2;
              return openBlock(), createElementBlock("button", {
                key: zt2,
                class: normalizeClass(t.cn((bt2 = t.classes) == null ? void 0 : bt2.actionButton, N2 == null ? void 0 : N2.classes)),
                "data-button": "",
                onClick: (wt2) => {
                  N2.onClick(wt2, {
                    dismiss: z
                  }), wt2.defaultPrevented;
                }
              }, toDisplayString(N2.label), 11, ee);
            }), 128)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 64))
      ], 46, Zt);
    };
  }
}), ie = ["data-visible"], le = { class: "sonner-spinner" }, de = /* @__PURE__ */ defineComponent({
  __name: "Loader",
  props: {
    visible: { type: Boolean }
  },
  setup(r) {
    const o2 = Array(12).fill(0);
    return (e, a) => (openBlock(), createElementBlock("div", {
      class: "sonner-loading-wrapper",
      "data-visible": e.visible
    }, [
      createElementVNode("div", le, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(o2), (m) => (openBlock(), createElementBlock("div", {
          key: `spinner-bar-${m}`,
          class: "sonner-loading-bar"
        }))), 128))
      ])
    ], 8, ie));
  }
}), ce = {}, ue = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, fe = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  "clip-rule": "evenodd"
}, null, -1), pe = [
  fe
];
function ge(r, o2) {
  return openBlock(), createElementBlock("svg", ue, pe);
}
const he = /* @__PURE__ */ Z(ce, [["render", ge]]), me = {}, ve = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, ye = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  "clip-rule": "evenodd"
}, null, -1), be = [
  ye
];
function we(r, o2) {
  return openBlock(), createElementBlock("svg", ve, be);
}
const xe = /* @__PURE__ */ Z(me, [["render", we]]), ke = {}, Te = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, Be = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  "clip-rule": "evenodd"
}, null, -1), $e = [
  Be
];
function Se(r, o2) {
  return openBlock(), createElementBlock("svg", Te, $e);
}
const Ce = /* @__PURE__ */ Z(ke, [["render", Se]]), Ee = {}, Ie = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, Pe = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), Ae = [
  Pe
];
function ze(r, o2) {
  return openBlock(), createElementBlock("svg", Ie, Ae);
}
const Me = /* @__PURE__ */ Z(Ee, [["render", ze]]), He = ["aria-label"], Oe = ["dir", "data-theme", "data-rich-colors", "data-y-position", "data-x-position"], De = 3, $t = "32px", Le = 4e3, Ye = 356, St = 14, Ne = typeof window < "u" && typeof document < "u", Fe = /* @__PURE__ */ defineComponent({
  name: "Toaster",
  inheritAttrs: false,
  __name: "Toaster",
  props: {
    invert: { type: Boolean, default: false },
    theme: { default: "light" },
    position: { default: "bottom-right" },
    hotkey: { default: () => ["altKey", "KeyT"] },
    richColors: { type: Boolean, default: false },
    expand: { type: Boolean, default: false },
    duration: { default: Le },
    gap: { default: St },
    visibleToasts: { default: De },
    closeButton: { type: Boolean, default: false },
    toastOptions: { default: () => ({}) },
    class: { default: "" },
    style: { default: () => ({}) },
    offset: { default: $t },
    dir: { default: "auto" },
    icons: {},
    containerAriaLabel: { default: "Notifications" },
    pauseWhenPageIsHidden: { type: Boolean, default: false },
    cn: {}
  },
  setup(r) {
    function o2(...s) {
      return s.filter(Boolean).join(" ");
    }
    function e() {
      if (typeof window > "u" || typeof document > "u")
        return "ltr";
      const s = document.documentElement.getAttribute("dir");
      return s === "auto" || !s ? window.getComputedStyle(document.documentElement).direction : s;
    }
    const a = r, m = useAttrs(), f2 = ref([]), g2 = computed(() => {
      const s = f2.value.filter((n) => n.position).map((n) => n.position);
      return s.length > 0 ? Array.from(new Set([a.position].concat(s))) : [a.position];
    }), b2 = ref([]), d2 = ref(false), O2 = ref(false), D2 = ref(
      a.theme !== "system" ? a.theme : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    ), E = computed(() => a.cn || o2), P2 = ref(null), A = ref(null), T2 = ref(false), K2 = a.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    function ct2(s) {
      f2.value = f2.value.filter(({ id: n }) => n !== s.id);
    }
    const ut2 = (s) => {
      var n, c;
      T2.value && !((c = (n = s.currentTarget) == null ? void 0 : n.contains) != null && c.call(n, s.relatedTarget)) && (T2.value = false, A.value && (A.value.focus({ preventScroll: true }), A.value = null));
    }, q2 = (s) => {
      s.target instanceof HTMLElement && s.target.dataset.dismissible === "false" || T2.value || (T2.value = true, A.value = s.relatedTarget);
    }, ft2 = (s) => {
      s.target && s.target instanceof HTMLElement && s.target.dataset.dismissible === "false" || (O2.value = false);
    };
    return watchEffect((s) => {
      const n = C.subscribe((c) => {
        if (c.dismiss) {
          f2.value = f2.value.map(
            (B2) => B2.id === c.id ? { ...B2, delete: true } : B2
          );
          return;
        }
        nextTick(() => {
          const B2 = f2.value.findIndex(
            ($2) => $2.id === c.id
          );
          B2 !== -1 ? f2.value.splice(B2, 1, c) : f2.value = [c, ...f2.value];
        });
      });
      s(() => {
        n();
      });
    }), watch(
      () => a.theme,
      (s) => {
        if (s !== "system") {
          D2.value = s;
          return;
        }
        s === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? D2.value = "dark" : D2.value = "light"), !(typeof window > "u") && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: n }) => {
          n ? D2.value = "dark" : D2.value = "light";
        });
      }
    ), watch(
      () => P2.value,
      () => {
        if (P2.value)
          return () => {
            A.value && (A.value.focus({ preventScroll: true }), A.value = null, T2.value = false);
          };
      }
    ), watchEffect(() => {
      f2.value.length <= 1 && (d2.value = false);
    }), watchEffect((s) => {
      function n(c) {
        const B2 = a.hotkey.every(
          (L2) => c[L2] || c.code === L2
        ), $2 = Array.isArray(P2.value) ? P2.value[0] : P2.value;
        B2 && (d2.value = true, $2 == null || $2.focus());
        const y2 = document.activeElement === P2.value || ($2 == null ? void 0 : $2.contains(document.activeElement));
        c.code === "Escape" && y2 && (d2.value = false);
      }
      Ne && (document.addEventListener("keydown", n), s(() => {
        document.removeEventListener("keydown", n);
      }));
    }), (s, n) => (openBlock(), createElementBlock("section", {
      "aria-label": `${s.containerAriaLabel} ${unref(K2)}`,
      tabIndex: -1
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(g2.value, (c, B2) => {
        var $2;
        return openBlock(), createElementBlock("ol", mergeProps({
          key: c,
          ref_for: true,
          ref_key: "listRef",
          ref: P2,
          "data-sonner-toaster": "",
          class: s.class,
          dir: s.dir === "auto" ? e() : s.dir,
          tabIndex: -1,
          "data-theme": s.theme,
          "data-rich-colors": s.richColors,
          "data-y-position": c.split("-")[0],
          "data-x-position": c.split("-")[1],
          style: {
            "--front-toast-height": `${($2 = b2.value[0]) == null ? void 0 : $2.height}px`,
            "--offset": typeof s.offset == "number" ? `${s.offset}px` : s.offset || $t,
            "--width": `${Ye}px`,
            "--gap": `${St}px`,
            ...s.style,
            ...unref(m).style
          },
          onBlur: ut2,
          onFocus: q2,
          onMouseenter: n[1] || (n[1] = (y2) => d2.value = true),
          onMousemove: n[2] || (n[2] = (y2) => d2.value = true),
          onMouseleave: n[3] || (n[3] = () => {
            O2.value || (d2.value = false);
          }),
          onPointerdown: ft2,
          onPointerup: n[4] || (n[4] = (y2) => O2.value = false)
        }, s.$attrs), [
          (openBlock(true), createElementBlock(Fragment, null, renderList(f2.value.filter(
            (y2) => !y2.position && B2 === 0 || y2.position === c
          ), (y2, L2) => {
            var _a2, _b, _c;
            var J2, Q2, tt2, et2, at2, ot2, st2, U2, V2;
            return openBlock(), createBlock(re, {
              key: y2.id,
              index: L2,
              toast: y2,
              duration: (_a2 = (J2 = s.toastOptions) == null ? void 0 : J2.duration) != null ? _a2 : s.duration,
              class: normalizeClass((_b = (Q2 = s.toastOptions) == null ? void 0 : Q2.class) != null ? _b : ""),
              descriptionClass: (tt2 = s.toastOptions) == null ? void 0 : tt2.descriptionClass,
              invert: s.invert,
              visibleToasts: s.visibleToasts,
              closeButton: (_c = (et2 = s.toastOptions) == null ? void 0 : et2.closeButton) != null ? _c : s.closeButton,
              interacting: O2.value,
              position: c,
              style: normalizeStyle((at2 = s.toastOptions) == null ? void 0 : at2.style),
              unstyled: (ot2 = s.toastOptions) == null ? void 0 : ot2.unstyled,
              classes: (st2 = s.toastOptions) == null ? void 0 : st2.classes,
              cancelButtonStyle: (U2 = s.toastOptions) == null ? void 0 : U2.cancelButtonStyle,
              actionButtonStyle: (V2 = s.toastOptions) == null ? void 0 : V2.actionButtonStyle,
              toasts: f2.value,
              expandByDefault: s.expand,
              gap: s.gap,
              expanded: d2.value,
              pauseWhenPageIsHidden: s.pauseWhenPageIsHidden,
              cn: E.value,
              heights: b2.value,
              "onUpdate:heights": n[0] || (n[0] = (z) => b2.value = z),
              onRemoveToast: ct2
            }, {
              "loading-icon": withCtx(() => [
                renderSlot(s.$slots, "loading-icon", {}, () => [
                  createVNode(de, {
                    visible: y2.type === "loading"
                  }, null, 8, ["visible"])
                ])
              ]),
              "success-icon": withCtx(() => [
                renderSlot(s.$slots, "success-icon", {}, () => [
                  createVNode(he)
                ])
              ]),
              "error-icon": withCtx(() => [
                renderSlot(s.$slots, "error-icon", {}, () => [
                  createVNode(Me)
                ])
              ]),
              "warning-icon": withCtx(() => [
                renderSlot(s.$slots, "warning-icon", {}, () => [
                  createVNode(Ce)
                ])
              ]),
              "info-icon": withCtx(() => [
                renderSlot(s.$slots, "info-icon", {}, () => [
                  createVNode(xe)
                ])
              ]),
              _: 2
            }, 1032, ["index", "toast", "duration", "class", "descriptionClass", "invert", "visibleToasts", "closeButton", "interacting", "position", "style", "unstyled", "classes", "cancelButtonStyle", "actionButtonStyle", "toasts", "expandByDefault", "gap", "expanded", "pauseWhenPageIsHidden", "cn", "heights"]);
          }), 128))
        ], 16, Oe);
      }), 128))
    ], 8, He));
  }
}), Ue = {
  install(r) {
    r.component("Toaster", Fe);
  }
};
const _hoisted_1 = { class: "l-toast" };
const _hoisted_2 = { class: "l-toast-title" };
const _hoisted_3 = { class: "l-toast-actions" };
const _hoisted_4 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Toast",
  props: {
    message: {
      type: String,
      required: true
    },
    actions: {
      type: [Array]
    }
  },
  emits: ["closeToast"],
  setup(__props, { emit: __emit }) {
    const emit2 = __emit;
    const handleOnClick = (event, item) => {
      item.onClick(event, {
        goAway: (delay) => {
          emit2("closeToast", delay);
        }
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, toDisplayString(__props.message), 1),
        createElementVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.actions, (item) => {
            return openBlock(), createElementBlock("button", {
              key: item.text,
              onClick: ($event) => handleOnClick($event, item),
              class: "action ripple cursor-pointer"
            }, toDisplayString(item.text), 9, _hoisted_4);
          }), 128))
        ])
      ]);
    };
  }
});
const generateLegacyToastWithActions = (message, action, toastId) => {
  const actions = Array.isArray(action) ? action : [action];
  return defineComponent({
    render() {
      return h(_sfc_main, {
        message,
        actions,
        onCloseToast: (delay) => {
          if (delay !== void 0) {
            setTimeout(() => {
              We.dismiss(toastId);
            }, delay);
          } else {
            We.dismiss(toastId);
          }
        }
      });
    }
  });
};
let toastIDTicker = 0;
const addLegacyToast = (type) => (message, option2) => {
  var _a2;
  const isLegacyToast = Array.isArray(option2 == null ? void 0 : option2.action) || Object.prototype.hasOwnProperty.call((_a2 = option2 == null ? void 0 : option2.action) != null ? _a2 : {}, "text");
  toastIDTicker++;
  const toastID = toastIDTicker;
  const raw = isLegacyToast ? markRaw(
    generateLegacyToastWithActions(
      message,
      option2 == null ? void 0 : option2.action,
      toastID
    )
  ) : message;
  const duration = (option2 == null ? void 0 : option2.duration) === 0 ? Infinity : option2 == null ? void 0 : option2.duration;
  We(raw, {
    ...option2,
    duration,
    action: void 0,
    id: toastID,
    classes: {
      toast: "legacy-toast"
    }
  });
};
const legacyToast = {
  success: addLegacyToast(),
  error: addLegacyToast(),
  warning: addLegacyToast(),
  show: addLegacyToast()
};
export {
  D as DialogHost,
  HOPP_UI_OPTIONS,
  _sfc_main$4 as HoppButtonPrimary,
  _sfc_main$3 as HoppButtonSecondary,
  index as HoppModal,
  _sfc_main$u as HoppSmartAnchor,
  AutoComplete as HoppSmartAutoComplete,
  Checkbox as HoppSmartCheckbox,
  _sfc_main$r as HoppSmartConfirmModal,
  _sfc_main$q as HoppSmartExpand,
  _sfc_main$p as HoppSmartFileChip,
  _sfc_main$o as HoppSmartInput,
  _sfc_main$n as HoppSmartIntersection,
  HoppSmartItem,
  _sfc_main$v as HoppSmartLink,
  HoppSmartModal,
  _sfc_main$9 as HoppSmartPicture,
  _sfc_main$8 as HoppSmartPlaceholder,
  ProgressRing as HoppSmartProgressRing,
  _sfc_main$i as HoppSmartRadio,
  _sfc_main$h as HoppSmartRadioGroup,
  SelectWrapper as HoppSmartSelectWrapper,
  _sfc_main$g as HoppSmartSlideOver,
  _sfc_main$m as HoppSmartSpinner,
  _sfc_main$f as HoppSmartTab,
  _sfc_main$d as HoppSmartTable,
  Tabs as HoppSmartTabs,
  Toggle as HoppSmartToggle,
  _sfc_main$6 as HoppSmartTree,
  _sfc_main$7 as HoppSmartTreeBranch,
  _sfc_main$b as HoppSmartWindow,
  Windows as HoppSmartWindows,
  Ue as HoppToastPlugin,
  Fe as Toaster,
  C$1 as VuePromiseModalsPlugin,
  legacyToast,
  plugin,
  We as toast,
  B as useModals
};
//# sourceMappingURL=index.js.map
