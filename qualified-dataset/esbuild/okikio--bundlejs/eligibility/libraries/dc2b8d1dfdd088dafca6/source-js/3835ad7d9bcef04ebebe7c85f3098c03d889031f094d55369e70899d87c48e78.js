"use strict";
function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self1, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self1);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
(function(g, f) {
    if ((typeof exports === "undefined" ? "undefined" : _type_of(exports)) == "object" && (typeof module === "undefined" ? "undefined" : _type_of(module)) < "u") {
        module.exports = f();
    } else if ("function" == typeof define && define.amd) {
        define("sharedworker", f);
    } else {
        g["sharedworker"] = f();
    }
})((typeof globalThis === "undefined" ? "undefined" : _type_of(globalThis)) < "u" ? globalThis : (typeof self === "undefined" ? "undefined" : _type_of(self)) < "u" ? self : void 0, function() {
    var exports1 = {};
    var __exports = exports1;
    var module1 = {
        exports: exports1
    };
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __defNormalProp = function(obj, key, value) {
        return key in obj ? __defProp(obj, key, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        }) : obj[key] = value;
    };
    var __export = function(target, all) {
        for(var name in all)__defProp(target, name, {
            get: all[name],
            enumerable: true
        });
    };
    var __copyProps = function(to, from, except, desc) {
        if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var key = _step.value;
                    if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                        get: function() {
                            return from[key];
                        },
                        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                    });
                };
                for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
        return to;
    };
    var __toCommonJS = function(mod) {
        return __copyProps(__defProp({}, "__esModule", {
            value: true
        }), mod);
    };
    var __publicField = function(obj, key, value) {
        return __defNormalProp(obj, (typeof key === "undefined" ? "undefined" : _type_of(key)) !== "symbol" ? key + "" : key, value);
    };
    // src/index.ts
    var src_exports = {};
    __export(src_exports, {
        SharedWorkerPolyfill: function() {
            return SharedWorkerPolyfill;
        },
        SharedWorkerPonyfill: function() {
            return SharedWorkerPonyfill;
        },
        SharedWorkerSupported: function() {
            return SharedWorkerSupported;
        },
        default: function() {
            return polyfill_default;
        }
    });
    module1.exports = __toCommonJS(src_exports);
    // src/constants.ts
    var SharedWorkerSupported = "SharedWorker" in globalThis;
    // src/ponyfill.ts
    var SharedWorkerPonyfill = /*#__PURE__*/ function() {
        "use strict";
        function SharedWorkerPonyfill(worker) {
            _class_call_check(this, SharedWorkerPonyfill);
            /**
     * The actual worker that is used, depending on browser support it can be either a `SharedWorker` or a normal `Worker`.
     */ __publicField(this, "ActualWorker");
            this.ActualWorker = worker;
        }
        _create_class(SharedWorkerPonyfill, [
            {
                key: "onmessage",
                get: /**
   * An EventListener called when MessageEvent of type message is fired on the port—that is, when the port receives a message.
   */ function get() {
                    if (SharedWorkerSupported) {
                        var _this_ActualWorker;
                        return (_this_ActualWorker = this.ActualWorker) === null || _this_ActualWorker === void 0 ? void 0 : _this_ActualWorker.port.onmessage;
                    } else {
                        return this.ActualWorker.onmessage;
                    }
                },
                set: function set(value) {
                    if (SharedWorkerSupported) {
                        this.ActualWorker.port.onmessage = value;
                    } else {
                        this.ActualWorker.onmessage = value;
                    }
                }
            },
            {
                key: "onmessageerror",
                get: /**
   * An EventListener called when a MessageEvent of type MessageError is fired—that is, when it receives a message that cannot be deserialized.
   */ function get() {
                    if (SharedWorkerSupported) {
                        var _this_ActualWorker;
                        return (_this_ActualWorker = this.ActualWorker) === null || _this_ActualWorker === void 0 ? void 0 : _this_ActualWorker.port.onmessageerror;
                    } else {
                        return this.ActualWorker.onmessageerror;
                    }
                },
                set: function set(value) {
                    if (SharedWorkerSupported) {
                        this.ActualWorker.port.onmessageerror = value;
                    } else {
                        this.ActualWorker.onmessageerror = value;
                    }
                }
            },
            {
                /**
   * Starts the sending of messages queued on the port (only needed when using EventTarget.addEventListener; it is implied when using MessagePort.onmessage.)
   */ key: "start",
                value: function start() {
                    if (SharedWorkerSupported) {
                        var _this_ActualWorker;
                        return (_this_ActualWorker = this.ActualWorker) === null || _this_ActualWorker === void 0 ? void 0 : _this_ActualWorker.port.start();
                    }
                }
            },
            {
                /**
   * Clones message and transmits it to worker's global environment. transfer can be passed as a list of objects that are to be transferred rather than cloned.
   */ key: "postMessage",
                value: function postMessage(message, transfer) {
                    if (SharedWorkerSupported) {
                        var _this_ActualWorker;
                        return (_this_ActualWorker = this.ActualWorker) === null || _this_ActualWorker === void 0 ? void 0 : _this_ActualWorker.port.postMessage(message, transfer);
                    } else {
                        return this.ActualWorker.postMessage(message, transfer);
                    }
                }
            },
            {
                /**
   * Immediately terminates the worker. This does not let worker finish its operations; it is halted at once. ServiceWorker instances do not support this method.
   */ key: "terminate",
                value: function terminate() {
                    if (SharedWorkerSupported) {
                        var _this_ActualWorker;
                        return (_this_ActualWorker = this.ActualWorker) === null || _this_ActualWorker === void 0 ? void 0 : _this_ActualWorker.port.close();
                    } else {
                        return this.ActualWorker.terminate();
                    }
                }
            },
            {
                /**
   * Disconnects the port, so it is no longer active.
   */ key: "close",
                value: function close() {
                    return this.terminate();
                }
            },
            {
                key: "port",
                get: /**
   * Returns a MessagePort object used to communicate with and control the shared worker.
   */ function get() {
                    return SharedWorkerSupported ? this.ActualWorker.port : this.ActualWorker;
                }
            },
            {
                key: "onerror",
                get: /**
   * Is an EventListener that is called whenever an ErrorEvent of type error event occurs.
   */ function get() {
                    return this.ActualWorker.onerror;
                },
                set: function set(value) {
                    this.ActualWorker.onerror = value;
                }
            },
            {
                key: "addEventListener",
                value: function addEventListener(type, listener, options) {
                    if (SharedWorkerSupported && type !== "error") {
                        var _this_ActualWorker;
                        return (_this_ActualWorker = this.ActualWorker) === null || _this_ActualWorker === void 0 ? void 0 : _this_ActualWorker.port.addEventListener(type, listener, options);
                    } else {
                        return this.ActualWorker.addEventListener(type, listener, options);
                    }
                }
            },
            {
                key: "removeEventListener",
                value: function removeEventListener(type, listener, options) {
                    if (SharedWorkerSupported && type !== "error") {
                        var _this_ActualWorker;
                        return (_this_ActualWorker = this.ActualWorker) === null || _this_ActualWorker === void 0 ? void 0 : _this_ActualWorker.port.removeEventListener(type, listener, options);
                    } else {
                        return this.ActualWorker.removeEventListener(type, listener, options);
                    }
                }
            },
            {
                /**
   * Dispatches an event to this EventTarget.
   */ key: "dispatchEvent",
                value: function dispatchEvent(event) {
                    return this.ActualWorker.dispatchEvent(event);
                }
            }
        ]);
        return SharedWorkerPonyfill;
    }();
    // src/polyfill.ts
    var SharedWorkerPolyfill = /*#__PURE__*/ function(SharedWorkerPonyfill) {
        "use strict";
        _inherits(SharedWorkerPolyfill, SharedWorkerPonyfill);
        function SharedWorkerPolyfill(url, opts) {
            _class_call_check(this, SharedWorkerPolyfill);
            var worker;
            if (SharedWorkerSupported) {
                worker = new SharedWorker(url, opts);
            } else {
                worker = new Worker(url, opts);
            }
            return _call_super(this, SharedWorkerPolyfill, [
                worker
            ]);
        }
        return SharedWorkerPolyfill;
    }(SharedWorkerPonyfill);
    var polyfill_default = SharedWorkerPolyfill;
    if (__exports != exports1) module1.exports = exports1;
    return module1.exports;
});
//# sourceMappingURL=index.umd.js.map