"use strict";
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
    // src/constants.ts
    var constants_exports = {};
    __export(constants_exports, {
        SharedWorkerSupported: function() {
            return SharedWorkerSupported;
        }
    });
    module1.exports = __toCommonJS(constants_exports);
    var SharedWorkerSupported = "SharedWorker" in globalThis;
    if (__exports != exports1) module1.exports = exports1;
    return module1.exports;
});
//# sourceMappingURL=constants.umd.js.map