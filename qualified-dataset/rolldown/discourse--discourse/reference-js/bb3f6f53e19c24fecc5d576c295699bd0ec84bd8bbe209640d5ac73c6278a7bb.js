import '../../shared-chunks/env-DXxsTFkM.js';
import deprecate$1 from './lib/deprecate.js';
export { registerHandler as registerDeprecationHandler } from './lib/deprecate.js';
export { isTesting, setTesting } from './lib/testing.js';
export { registerHandler as registerWarnHandler } from './lib/warn.js';
export { assert } from './lib/assert.js';
export { default as inspect } from './lib/inspect.js';
export { default as captureRenderTree } from './lib/capture-render-tree.js';

// These are the default production build versions:
const noop = () => {};

// SAFETY: these casts are just straight-up lies, but the point is that they do
// not do anything in production builds.
let info = noop;
let warn = noop;
let debug = noop;
let debugSeal = noop;
let debugFreeze = noop;
let runInDebug = noop;
let setDebugFunction = noop;
let getDebugFunction = noop;
let deprecateFunc = function () {
  return arguments[arguments.length - 1];
};
function deprecate(...args) {
  return (deprecate$1)(...args);
}
let _warnIfUsingStrippedFeatureFlags;

export { _warnIfUsingStrippedFeatureFlags, debug, debugFreeze, debugSeal, deprecate, deprecateFunc, getDebugFunction, info, runInDebug, setDebugFunction, warn };
