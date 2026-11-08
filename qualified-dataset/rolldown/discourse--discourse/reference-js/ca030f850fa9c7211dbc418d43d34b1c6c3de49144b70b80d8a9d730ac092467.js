import { getOrSetGlobal, peekTransient, setTransient } from './types/-private.js';
import { macroCondition, getGlobalConfig } from '@embroider/macros';
import './types/request.js';
import { g as getPromiseResult, s as setPromiseResult } from "./future-CPfkKOvf.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const ARRAY_SIGNAL = getOrSetGlobal('#[]', Symbol('#[]'));
const OBJECT_SIGNAL = getOrSetGlobal('#{}', Symbol('#{}'));

/**
 * Requirements:
 *
 * Signal:
 *
 * - signal: a way of creating a reference that we can dirty when we desire to notify
 *         - @signal: a way of creating an accessor on an object that subscribes to a signal on access
 *                    and notifies the signal on set, or of upgrading a descriptor to be such an accessor
 *         - defineSignal: a way of creating a signal on an object
 *         - notifySignal: a way of notifying the underlying signal that it has been dirtied
 *         - peekSignal: a way of inspecting the signal without notifying it
 *
 *  - gate: a memoized getter function that re-runs when on access if its signal is dirty
 *          conceptually, a gate is a tightly coupled signal and memo
 *         - @gate: a way of creating a gate on an object or upgrading a descriptor with a getter
 *                  to be a gate
 *         - defineGate: a way of creating a gate on an object
 *         - notifySignal: a way of notifying the signal for a gate that it has been dirtied
 *
 * - memo:
 *        - @memo: a way of creating a memoized getter on an object or upgrading a descriptor with a getter
 *                 to be a memo
 *        - defineMemo: a way of creating a memo on an object
 *
 * - signalStore: storage bucket for signals associated to an object
 *        - withSignalStore: a way of pre-creating a signal store on an object
 *
 *
 * @internal
 */

/**
 * An Opaque type that represents a framework specific or TC39 signal.
 *
 * It may be an array of signals or a single signal.
 *
 * @private
 */

/**
 * The hooks which MUST be configured in order to use reactive arrays,
 * resources and documents with framework specfic signals or TC39 signals.
 *
 * Support for multiple frameworks simultaneously can be done via
 * this abstraction by returning multiple signals from the `createSignal`
 * method, and consuming the correct one via the correct framework via
 * the `consumeSignal` and `notifySignal` methods.
 *
 * Unlike many signals implementations, WarpDrive does not wrap values as
 * signals directly, but instead uses signals to alert the reactive layer
 * to changes in the underlying cache. E.g. a signal is associated to a value,
 * but does not serve as the cache for that value directly. We refer to this as
 * a "gate", the pattern has also been called "side-signals".
 *
 * A no-op implementation is allowed, though it may lead to performance issues
 * in locations that use createMemo as no memoization would be done. This is
 * typically desirable only when integrating with a framework that does its own
 * memoization and does not integrate with any signals-like primitive. For these
 * scenarios you may also be interested in integrating with the {@link NotificationManager}
 * more directly.
 *
 * @public
 */

/**
 * Contains information a {@link SignalHooks} implementation may want
 * to use, such as the specialized key used for the signal
 * representing an array's contents / length.
 *
 * ```ts
 * interface HooksOptions {
 *   wellknown: {
 *     Array: symbol | string;
 *   }
 * }
 * ```
 *
 * @public
 */

/**
 * Configures the signals implementation to use. Supports multiple
 * implementations simultaneously.
 *
 * See {@link HooksOptions} for the options passed to the provided function
 * when called.
 *
 * See {@link SignalHooks} for the implementation the callback function should
 * return.
 *
 * @public
 * @param buildConfig - a function that takes options and returns a configuration object
 */
function setupSignals(buildConfig) {
  // We want to assert this but can't because too many package manager
  // and bundler bugs exist that cause this to be called multiple times
  // for what should be a single call.
  // assert(`Cannot override configured signal hooks`, peekTransient('signalHooks') === null);
  const hooks = buildConfig({
    wellknown: {
      Array: ARRAY_SIGNAL
    }
  });
  setTransient('signalHooks', hooks);
}

/**
 * Internal method for consuming the configured `createSignal` hook
 *
 * @private
 */
function createSignal(obj, key) {
  const signalHooks = peekTransient('signalHooks');
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Signal hooks not configured`);
    }
  })(signalHooks) : {};
  return signalHooks.createSignal(obj, key);
}

/**
 * Internal method for consuming the configured `consumeSignal` hook
 *
 * @private
 */
function consumeSignal(signal) {
  const signalHooks = peekTransient('signalHooks');
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Signal hooks not configured`);
    }
  })(signalHooks) : {};
  return signalHooks.consumeSignal(signal);
}

/**
 * Internal method for consuming the configured `notifySignal` hook
 *
 * @private
 */
function notifySignal(signal) {
  const signalHooks = peekTransient('signalHooks');
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Signal hooks not configured`);
    }
  })(signalHooks) : {};
  return signalHooks.notifySignal(signal);
}
function createMemo(object, key, fn) {
  const signalHooks = peekTransient('signalHooks');
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Signal hooks not configured`);
    }
  })(signalHooks) : {};
  return signalHooks.createMemo(object, key, fn);
}
function willSyncFlushWatchers() {
  const signalHooks = peekTransient('signalHooks');
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Signal hooks not configured`);
    }
  })(signalHooks) : {};
  return signalHooks.willSyncFlushWatchers();
}
function waitFor(promise) {
  const signalHooks = peekTransient('signalHooks');
  if (signalHooks?.waitFor) {
    return signalHooks.waitFor(promise);
  }
  return promise;
}
const INITIALIZER_PROTO = {
  isInitializer: true
};
function makeInitializer(fn) {
  // we use a prototype to ensure that the initializer is not enumerable
  // and does not interfere with the signal's value.
  return Object.assign(Object.create(INITIALIZER_PROTO), {
    value: fn
  });
}
function isInitializer(obj) {
  return typeof obj === 'object' && obj !== null && Object.getPrototypeOf(obj) === INITIALIZER_PROTO;
}

/**
 * A WarpDriveSignal is a wrapper around a framework specific or TC39 signal
 * that enables us to store and manage the signal in a universal way.
 *
 * WarpDrive uses signals to manage three separate concepts:
 *
 * - as a `storage` for a value local to the object that we want to be reactive
 *   (see `@local` schema field for an example)
 * - as a `gate` for a memoized getter that we want to act as a reactive property
 *   but whose value is computed/pulled from a non-reactive source elsewhere
 *   and whose latest value is stored in the signal
 *   (see `field` schema field for an example)
 * - as a `gate` with a manually managed value updated on pull when `isStale` is true
 *
 *
 * It offers
 *
 * - a non-reactive way to access/update the current value
 * - a non-reactive way to mark the signal as dirtied
 * - a non-reactive way to store content for why the signal was dirtied
 * - access to the underlying Signal(s) in-use
 *
 * For debugging:
 * - the "key" or "name" of the signal
 * - the "object identity" or "context" to which the signal is attached
 *
 * @private
 */

/**
 * We attach signals to their context object via
 * a Map attached to the object via this symbol.
 *
 * This allows us to store multiple signals
 * on the same object with smaller memory
 * overhead and no WeakMap lookups.
 *
 * Performance sensitive objects should
 * pre-warm their shape by assigning this
 * during initialization.
 *
 * ```ts
 * initializeSignalStore(obj);
 * ```
 *
 * @private
 */
const Signals = getOrSetGlobal('Signals', Symbol('Signals'));

/**
 * A util that will create a signal store on the object
 * if it does not already exist and returns the associated
 * signal store.
 *
 * @private
 */
function withSignalStore(obj) {
  if (!obj[Signals]) {
    initializeSignalStore(obj);
  }
  return obj[Signals];
}

/**
 * A util that will create a signal store on the object
 * if it does not already exist.
 *
 * Useful for pre-warming the shape of an object to ensure
 * a key-transition to add it is not required later.
 *
 * @private
 */
function initializeSignalStore(obj) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Signal store already exists on object`);
    }
  })(!obj[Signals]) : {};
  obj[Signals] = new Map();
}
function createInternalSignal(signals, obj, key, initialValue) {
  const warpDriveSignal = {
    key,
    context: obj,
    signal: createSignal(obj, key),
    value: isInitializer(initialValue) ? initialValue.value.call(obj) : initialValue,
    isStale: false
  };
  signals.set(key, warpDriveSignal);
  return warpDriveSignal;
}
function getOrCreateInternalSignal(signals, obj, key, initialValue) {
  let signal = peekInternalSignal(signals, key);
  if (!signal) {
    signal = createInternalSignal(signals, obj, key, initialValue);
  }
  return signal;
}
function createInternalMemo(signals, object, key, fn) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`Expected no signal/memo to exist for key "${String(key)}"`);
    }
  })(!peekInternalSignal(signals, key)) : {};
  if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
    return withFrame(signals, object, key, fn);
  } else {
    const memo = createMemo(object, key, fn);
    signals.set(key, memo);
    return memo;
  }
}
function peekInternalSignal(signals, key) {
  return signals?.get(key);
}
function consumeInternalSignal(signal) {
  TrackingFrame?.signals.add(signal);
  consumeSignal(signal.signal);
}
function notifyInternalSignal(signal) {
  if (signal) {
    signal.isStale = true;
    notifySignal(signal.signal);
  }
}
let TrackingFrame = null;

/**
 * This is currently just for signals debugging, but it could be used in production
 * if we wanted to eliminate the need for frameworks to implement createMemo / to
 * allow us to add our own Watcher.
 *
 * @internal
 */
function withFrame(signals, object, key, fn) {
  const frameSignals = new Set();
  const frameFn = () => {
    if (frameSignals.size) {
      frameSignals.clear();
    }
    TrackingFrame = {
      object,
      key,
      signals: frameSignals,
      parent: TrackingFrame
    };
    try {
      return fn();
    } finally {
      TrackingFrame = TrackingFrame.parent;
    }
  };
  const memo = createMemo(object, key, frameFn);
  // @ts-expect-error
  memo.signals = frameSignals;
  signals.set(key, memo);
  return memo;
}
function isMemo(obj) {
  // @ts-expect-error
  return typeof obj === 'function' && obj.signals instanceof Set;
}
if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
  // @ts-expect-error adding to global API
  globalThis.debugWarpDriveSignals = (obj, key) => {
    const signals = obj[Signals];
    if (!signals) {
      log('The object has no associated signals');
      return false;
    }
    if (key) {
      const signal = signals.get(key);
      if (!signal) {
        log(`No signal found for key "${String(key)}"`);
        return false;
      }
      log(signal);
      if (isMemo(signal)) {
        colorizeLines(printMemo(signal, key));
        return true;
      } else {
        colorizeLines(printSignal(signal, key));
        return true;
      }
    }
    const lines = [];
    for (const [k, signal] of signals) {
      if (isMemo(signal)) continue;
      printSignal(signal, k, lines);
    }
    for (const [k, signal] of signals) {
      if (isMemo(signal)) {
        printMemo(signal, k, lines);
      }
    }
    log(signals);
    colorizeLines(lines);
    return true;
  };
}
const LightColors = {
  red: 'color: red;',
  green: 'color: green;',
  reset: 'color: inherit;'
};
const DarkColors = {
  red: 'color: red;',
  green: 'color: lightgreen;',
  reset: 'color: inherit;'
};
function isLightMode() {
  if (window?.matchMedia?.('(prefers-color-scheme: light)').matches) {
    return true;
  }
  return false;
}
const RED = {};
const GREEN = {};
const RESET = {};
const EOL = {};
function colorizeLines(lines) {
  const Colors = isLightMode() ? LightColors : DarkColors;
  const colors = [];
  let line = '';
  for (const str of lines) {
    if (str === RED) {
      colors.push(Colors.red);
      line += '%c';
    } else if (str === GREEN) {
      colors.push(Colors.green);
      line += '%c';
    } else if (str === RESET) {
      colors.push(Colors.reset);
      line += '%c';
    } else if (str === EOL) {
      line += '\n';
    } else {
      line += str;
    }
  }
  log(line, ...colors);
}
function log(...args) {
  // eslint-disable-next-line no-console
  console.log(...args);
}
function isDirty(signal) {
  return signal.isStale;
}
function isDirtyMemo(memo) {
  // iterate simple signals first to get fastest answer
  for (const signal of memo.signals) {
    if (isMemo(signal)) continue;
    if (isDirty(signal)) {
      return true;
    }
  }
  for (const signal of memo.signals) {
    if (isMemo(signal)) {
      return isDirtyMemo(signal);
    }
  }
  return false;
}
function printSignal(signal, key, lines = [], depth = 0) {
  const _dirty = isDirty(signal);
  lines.push(`${''.padStart(depth * 2, ' ')}${_dirty ? '❌' : '✅'} `, _dirty ? RED : GREEN, `${String(key)}`, RESET, EOL);
  return lines;
}
function printMemo(memo, key, lines = [], depth = 0) {
  const _dirty = isDirtyMemo(memo);
  lines.push(`${''.padStart(depth * 2, ' ')}${_dirty ? '❌' : '✅'} `, _dirty ? RED : GREEN, `<memo> ${String(key)}`, RESET, `: (consumes ${memo.signals.size} signals)`, EOL);
  for (const signal of memo.signals) {
    if (isMemo(signal)) continue;
    printSignal(signal, signal.key, lines, depth + 1);
  }
  for (const signal of memo.signals) {
    if (isMemo(signal)) {
      printMemo(signal, signal.key, lines, depth + 1);
    }
  }
  return lines;
}
function entangleSignal(signals, obj, key, initialValue) {
  let internalSignal = peekInternalSignal(signals, key);
  if (!internalSignal) {
    internalSignal = createInternalSignal(signals, obj, key, initialValue);
  }
  consumeInternalSignal(internalSignal);
  return internalSignal;
}
function entangleInitiallyStaleSignal(signals, obj, key, initialValue) {
  let internalSignal = peekInternalSignal(signals, key);
  if (!internalSignal) {
    internalSignal = createInternalSignal(signals, obj, key, initialValue);
    internalSignal.isStale = true; // mark it as stale
  }
  consumeInternalSignal(internalSignal);
  return internalSignal;
}
function createSignalDescriptor(key, intialValue) {
  return {
    enumerable: true,
    configurable: false,
    get() {
      const signals = withSignalStore(this);
      const internalSignal = entangleSignal(signals, this, key, intialValue);
      internalSignal.isStale = false; // reset stale state
      return internalSignal.value;
    },
    set(value) {
      const signals = withSignalStore(this);
      const internalSignal = getOrCreateInternalSignal(signals, this, key, intialValue);
      if (internalSignal.value !== value) {
        internalSignal.value = value;
        notifyInternalSignal(internalSignal);
      }
    }
  };
}

/**
 * define an enumerable signal property.
 *
 * Akin to Object.defineProperty.
 *
 * The signal will be lazily created when accessed and scoped to the
 * instance of the object.
 *
 * @private
 */
function defineSignal(obj, key, v) {
  Object.defineProperty(obj, key, createSignalDescriptor(key, v));
}

/**
 * Define a non-enumerable signal property.
 *
 * @private
 */
function defineNonEnumerableSignal(obj, key, v) {
  const desc = createSignalDescriptor(key, v);
  desc.enumerable = false;
  Object.defineProperty(obj, key, desc);
}
/**
 * Decorator version of creating a signal.
 */
function signal(target, key, descriptor) {
  // Error on `@signal()`, `@signal(...args)``
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error('You attempted to use @signal(), which is not necessary nor supported. Remove the parentheses and you will be good to go!');
    }
  })(target !== undefined) : {};
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`You attempted to use @signal on with ${arguments.length > 1 ? 'arguments' : 'an argument'} ( @signal(${Array.from(arguments).map(d => `'${d}'`).join(', ')}) ), which is not supported. Dependencies are automatically tracked, so you can just use ${'`@signal`'}`);
    }
  })(typeof target === 'object' && typeof key === 'string' && typeof descriptor === 'object' && arguments.length === 3) : {};
  return createSignalDescriptor(key, descriptor.initializer ? makeInitializer(descriptor.initializer) : null);
}

/**
 * Decorator version of creating a memoized getter
 */
function memoized(target, key, descriptor) {
  // Error on `@memoized()`, `@memoized(...args)`, and `@memoized propName = value;`
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error('You attempted to use @memoized(), which is not necessary nor supported. Remove the parentheses and you will be good to go!');
    }
  })(target !== undefined) : {};
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`You attempted to use @memoized on with ${arguments.length > 1 ? 'arguments' : 'an argument'} ( @memoized(${Array.from(arguments).map(d => `'${d}'`).join(', ')}), which is not supported. Dependencies are automatically tracked, so you can just use ${'`@memoized`'}`);
    }
  })(typeof target === 'object' && typeof key === 'string' && typeof descriptor === 'object' && arguments.length === 3) : {};
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`The @memoized decorator must be applied to getters. '${key}' is not a getter.`);
    }
  })(typeof descriptor.get === 'function') : {};

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const getter = descriptor.get;
  descriptor.get = function () {
    const signals = withSignalStore(this);
    let memoSignal = signals.get(key);
    if (!memoSignal) {
      memoSignal = createInternalMemo(signals, this, key, getter.bind(this));
    }
    return memoSignal();
  };
  return descriptor;
}

/**
 * Decorator version of creating a gate.
 *
 * @private
 */
function gate(_target, key, desc) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const getter = desc.get;
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const setter = desc.set;
  const isLocal = desc.isLocal;
  desc.get = function () {
    const signals = withSignalStore(this);
    let internalSignal = peekInternalSignal(signals, key);
    if (!internalSignal) {
      internalSignal = createInternalSignal(signals, this, key, getter.call(this));
    } else if (internalSignal.isStale) {
      internalSignal.isStale = false;
      internalSignal.value = getter.call(this);
    }
    consumeInternalSignal(internalSignal);
    return internalSignal.value;
  };
  if (setter) {
    desc.set = function (v) {
      const signals = withSignalStore(this);
      let internalSignal = peekInternalSignal(signals, key);
      if (!internalSignal) {
        // we can't use `v` as initialValue here because setters don't
        // return the value and the final value may be different
        // than what the setter was called with.
        internalSignal = createInternalSignal(signals, this, key, undefined);
        internalSignal.isStale = true;
      }
      setter.call(this, v);
      // when a gate is set, we do not notify the signal
      // as its update is controlled externally.
      // unless it specifically sets itself to be locally managed
      if (isLocal) {
        internalSignal.isStale = true;
        notifyInternalSignal(internalSignal);
      }
    };
  }
  return desc;
}
function defineGate(obj, key, desc) {
  const options = Object.assign({
    enumerable: true,
    configurable: false
  }, gate(obj, key, desc));
  Object.defineProperty(obj, key, options);
}
const RequestCache = new WeakMap();
function isAbortError(error) {
  return error instanceof DOMException && error.name === 'AbortError';
}
function upgradeLoadingState(state) {
  return state;
}
async function watchStream(stream, loadingState) {
  const state = upgradeLoadingState(loadingState);
  const reader = stream.getReader();
  let bytesLoaded = 0;
  let shouldForward = state._stream !== null && state._stream.readable.locked;
  let isForwarding = shouldForward;
  let writer = state._stream?.writable.getWriter();
  const buffer = [];
  state._isPending = false;
  state._isStarted = true;
  state._startTime = performance.now();
  while (true) {
    const {
      value,
      done
    } = await reader.read();
    if (done) {
      break;
    }
    bytesLoaded += value.byteLength;
    state._bytesLoaded = bytesLoaded;
    state._lastPacketTime = performance.now();
    shouldForward = shouldForward || state._stream !== null && state._stream.readable.locked;
    if (shouldForward) {
      if (!isForwarding) {
        isForwarding = true;
        writer = state._stream.writable.getWriter();
        for (const item of buffer) {
          await writer.ready;
          await writer.write(item);
        }
        buffer.length = 0;
      }
      await writer.ready;
      await writer.write(value);
    } else {
      buffer.push(value);
    }
  }

  // if we are still forwarding, we need to close the writer
  if (isForwarding) {
    await writer.ready;
    await writer.close();
  } else if (state._stream) {
    // if we are not forwarding, we need to cancel the stream
    await state._stream.readable.cancel('The Stream Has Already Ended');
    state._stream = null;
  }
  const endTime = performance.now();
  state._endTime = endTime;
  state._isComplete = true;
  state._isStarted = false;
}

/**
 * Lazily consumes the stream of a request, providing a number of
 * reactive properties that can be used to build UIs that respond
 * to the progress of a request.
 *
 * @hideconstructor
 */
class RequestLoadingState {
  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */
  _stream = null;
  /** @internal */
  _future;
  /** @internal */
  _triggered = false;
  /** @internal */
  _trigger() {
    if (this._triggered) {
      return;
    }
    this._triggered = true;
    const future = this._future;
    const promise = future.getStream();
    if (promise.sizeHint) {
      this._sizeHint = promise.sizeHint;
    }
    this.promise = promise.then(stream => {
      if (!stream) {
        this._isPending = false;
        this._isComplete = true;
        return;
      }
      return watchStream(stream, this);
    }, error => {
      this._isPending = false;
      this._isStarted = false;
      if (isAbortError(error)) {
        this._isCancelled = true;
        this._isComplete = true;
      }
      this._isErrored = true;
      this._error = error;
    });
  }
  promise = null;
  get isPending() {
    this._trigger();
    return this._isPending;
  }
  get sizeHint() {
    this._trigger();
    return this._sizeHint;
  }
  get stream() {
    this._trigger();
    if (!this._stream) {
      if (this._isComplete || this._isCancelled || this._isErrored) {
        return null;
      }
      this._stream = new TransformStream();
    }
    return this._stream.readable;
  }
  get isStarted() {
    this._trigger();
    return this._isStarted;
  }
  get bytesLoaded() {
    this._trigger();
    return this._bytesLoaded;
  }
  get startTime() {
    this._trigger();
    return this._startTime;
  }
  get endTime() {
    this._trigger();
    return this._endTime;
  }
  get lastPacketTime() {
    this._trigger();
    return this._lastPacketTime;
  }
  get isComplete() {
    this._trigger();
    return this._isComplete;
  }
  get isCancelled() {
    this._trigger();
    return this._isCancelled;
  }
  get isErrored() {
    this._trigger();
    return this._isErrored;
  }
  get error() {
    this._trigger();
    return this._error;
  }
  get elapsedTime() {
    return (this.endTime || this.lastPacketTime) - this.startTime;
  }
  get completedRatio() {
    return this.sizeHint ? this.bytesLoaded / this.sizeHint : 0;
  }
  get remainingRatio() {
    return 1 - this.completedRatio;
  }
  get duration() {
    return this.endTime - this.startTime;
  }
  get speed() {
    // bytes per second
    return this.bytesLoaded / (this.elapsedTime / 1000);
  }
  constructor(future) {
    this._future = future;
  }
  abort = () => {
    this._future.abort();
  };
}
defineNonEnumerableSignal(RequestLoadingState.prototype, '_isPending', true);
defineNonEnumerableSignal(RequestLoadingState.prototype, '_isStarted', false);
defineNonEnumerableSignal(RequestLoadingState.prototype, '_isComplete', false);
defineNonEnumerableSignal(RequestLoadingState.prototype, '_isCancelled', false);
defineNonEnumerableSignal(RequestLoadingState.prototype, '_isErrored', false);
defineNonEnumerableSignal(RequestLoadingState.prototype, '_error', null);
defineNonEnumerableSignal(RequestLoadingState.prototype, '_sizeHint', 0);
defineNonEnumerableSignal(RequestLoadingState.prototype, '_bytesLoaded', 0);
defineNonEnumerableSignal(RequestLoadingState.prototype, '_startTime', 0);
defineNonEnumerableSignal(RequestLoadingState.prototype, '_endTime', 0);
defineNonEnumerableSignal(RequestLoadingState.prototype, '_lastPacketTime', 0);

/**
 * The state of a request in the "pending"
 * state. This is the default initial state.
 *
 * Extends the {@link PendingPromise} interface.
 *
 */

/**
 * The state of a request in the "fulfilled" state.
 * This is the state of a request that has resolved
 * successfully.
 *
 * Extends the {@link ResolvedPromise} interface.
 *
 */

/**
 * The state of a request in the "rejected" state.
 * This is the state of a request that has rejected
 * with an error.
 *
 * Extends the {@link RejectedPromise} interface.
 *
 */

/**
 * The state of a request in the "cancelled" state.
 * This is the state of a promise that has been
 * cancelled.
 *
 */

/**
 * RequestState extends the concept of {@link PromiseState} to provide a reactive
 * wrapper for a request {@link Future} which allows you write declarative code
 * around a Future's control flow.
 *
 * It is useful in both Template and JavaScript contexts, allowing you
 * to quickly derive behaviors and data from pending, error and success
 * states.
 *
 * The key difference between a {@link Promise} and a Future is that Futures provide
 * access to a {@link ReadableStream | stream} of their content, the {@link RequestKey} of the request (if any)
 * as well as the ability to attempt to {@link Future.abort | abort} the request.
 *
 * ```ts
 * interface Future<T> extends Promise<T>> {
 *   getStream(): Promise<ReadableStream>;
 *   abort(): void;
 *   lid: RequestKey | null;
 * }
 * ```
 *
 * These additional APIs allow us to craft even richer state experiences.
 *
 * To get the state of a request, use {@link getRequestState}.
 *
 * See also:
 * - {@link PendingRequest}
 * - {@link ResolvedRequest}
 * - {@link RejectedRequest}
 * - {@link CancelledRequest}
 *
 */

const RequestStateProto = {};
function performRefresh(requester, request, isReload) {
  const req = Object.assign({}, request);
  const cacheOptions = Object.assign({}, req.cacheOptions);
  if (isReload) {
    // force direct to network
    cacheOptions.reload = true;
  } else if (isReload === false) {
    // delete reload to ensure we use backgroundReload / policy
    delete cacheOptions.reload;
    cacheOptions.backgroundReload = true;
  } else {
    // delete props to ensure we use the policy
    delete cacheOptions.backgroundReload;
    delete cacheOptions.reload;
  }
  req.cacheOptions = cacheOptions;
  return requester.request(req);
}

// TODO introduce a new mechanism for defining multiple properties
// that share a common signal
defineSignal(RequestStateProto, 'reason', null);
defineSignal(RequestStateProto, 'value', null);
defineSignal(RequestStateProto, 'result', null);
defineSignal(RequestStateProto, 'error', null);
defineSignal(RequestStateProto, 'status', 'pending');
defineSignal(RequestStateProto, 'isPending', true);
defineSignal(RequestStateProto, 'isLoading', true);
defineSignal(RequestStateProto, 'isSuccess', false);
defineSignal(RequestStateProto, 'isError', false);
defineSignal(RequestStateProto, 'request', null);
defineSignal(RequestStateProto, 'response', null);
Object.defineProperty(RequestStateProto, 'isCancelled', {
  get() {
    return this.isError && isAbortError(this.reason);
  }
});
Object.defineProperty(RequestStateProto, 'loadingState', {
  get() {
    if (!this._loadingState) {
      this._loadingState = new RequestLoadingState(this._request);
    }
    return this._loadingState;
  }
});
function createRequestState(future) {
  const state = getPromiseResult(future);
  const promiseState = Object.create(RequestStateProto);
  promiseState._request = future;
  // @ts-expect-error - we still attach it for PendingState
  promiseState.reload = () => {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Cannot reload a request that is still pending. Await or abort the original request first.`);
      }
    })(!promiseState.isPending) : {};
    return performRefresh(future.requester, promiseState.request, true);
  };

  // @ts-expect-error - we still attach it for PendingState
  promiseState.refresh = (usePolicy = false) => {
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Cannot refresh a request that is still pending. Await or abort the original request first.`);
      }
    })(!promiseState.isPending) : {};
    return performRefresh(future.requester, promiseState.request, usePolicy === true ? null : false);
  };
  if (state) {
    if (state.isError) {
      promiseState.error = state.result;
      promiseState.reason = state.result;
      promiseState.status = 'rejected';
      promiseState.isError = true;
      promiseState.isPending = false;
      promiseState.isLoading = false;
      promiseState.request = state.result.request;
      promiseState.response = state.result.response;
    } else {
      promiseState.result = state.result.content;
      promiseState.value = state.result.content;
      promiseState.status = 'fulfilled';
      promiseState.isSuccess = true;
      promiseState.isPending = false;
      promiseState.isLoading = false;
      promiseState.request = state.result.request;
      promiseState.response = state.result.response;
    }
  } else {
    void future.then(result => {
      setPromiseResult(future, {
        isError: false,
        result
      });
      promiseState.result = result.content;
      promiseState.value = result.content;
      promiseState.status = 'fulfilled';
      promiseState.isSuccess = true;
      promiseState.isPending = false;
      promiseState.isLoading = false;
      promiseState.request = result.request;
      promiseState.response = result.response;
    }, error => {
      setPromiseResult(future, {
        isError: true,
        result: error
      });
      promiseState.error = error;
      promiseState.reason = error;
      promiseState.status = 'rejected';
      promiseState.isError = true;
      promiseState.isPending = false;
      promiseState.isLoading = false;
      promiseState.request = error.request;
      promiseState.response = error.response;
    });
  }
  return promiseState;
}

/**
 * `getRequestState` can be used in both JavaScript and Template contexts.
 *
 * ```ts
 * import { getRequestState } from '@warp-drive/ember';
 *
 * const state = getRequestState(future);
 * ```
 *
 * For instance, we could write a getter on a component that updates whenever
 * the request state advances or the future changes, by combining the function
 * with the use of `@cached`
 *
 * ```ts
 * class Component {
 *   @cached
 *   get title() {
 *     const state = getRequestState(this.args.request);
 *     if (state.isPending) {
 *       return 'loading...';
 *     }
 *     if (state.isError) { return null; }
 *     return state.result.title;
 *   }
 * }
 * ```
 *
 * Or in a template as a helper:
 *
 * ```gjs
 * import { getRequestState } from '@warp-drive/ember';
 *
 * <template>
 *   {{#let (getRequestState @request) as |state|}}
 *     {{#if state.isPending}}
 *       <Spinner />
 *     {{else if state.isError}}
 *       <ErrorForm @error={{state.error}} />
 *     {{else}}
 *       <h1>{{state.result.title}}</h1>
 *     {{/if}}
 *   {{/let}}
 * </template>
 * ```
 *
 * If looking to use in a template, consider also the `<Request />` component
 * which offers a number of additional capabilities for requests *beyond* what
 * `RequestState` provides.
 *
 */
function getRequestState(future) {
  let state = RequestCache.get(future);
  if (!state) {
    state = createRequestState(future);
    RequestCache.set(future, state);
  }
  return state;
}
function decorateMethodV2(prototype, prop, decorators) {
  const origDesc = Object.getOwnPropertyDescriptor(prototype, prop);
  let desc = {
    ...origDesc
  };
  for (let decorator of decorators) {
    desc = decorator(prototype, prop, desc) || desc;
  }
  if (desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(prototype) : void 0;
    desc.initializer = void 0;
  }
  Object.defineProperty(prototype, prop, desc);
}
const DEFAULT_DEADLINE = 30_000;
const DISPOSE = Symbol.dispose || Symbol.for('dispose');
function isNeverString(val) {
  return val;
}

/**
 * Utilities to assist in recovering from the error.
 */

/** @deprecated use {@link RecoveryFeatures} */

/**
 * Utilities for keeping the request fresh
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars

// eslint-disable-next-line @typescript-eslint/no-unused-vars

/**
 * A reactive class
 *
 * @hideconstructor
 */
class RequestSubscription {
  /**
   * Whether the browser reports that the network is online.
   */

  /**
   * Whether the browser reports that the tab is hidden.
   */

  /**
   * Whether the component is currently refreshing the request.
   */

  /**
   * The most recent blocking request that was made, typically
   * the result of a reload.
   *
   * This will never be the original request passed as an arg to
   * the component.
   *
   * @internal
   */

  /**
   * The most recent request that was made, typically due to either a
   * reload or a refresh.
   *
   * This will never be the original request passed as an arg to
   * the component.
   *
   * @internal
   */

  /**
   * The time at which the network was reported as offline.
   *
   * @internal
   */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /**
   * The event listener for network status changes,
   * cached to use the reference for removal.
   *
   * @internal
   */

  /**
   * The event listener for visibility status changes,
   * cached to use the reference for removal.
   *
   * @internal
   */

  /**
   * The last request passed as an arg to the component,
   * cached for comparison.
   *
   * @internal
   */

  /**
   * The last query passed as an arg to the component,
   * cached for comparison.
   *
   * @internal
   */

  /** @internal */

  /** @internal */

  /** @internal */

  /**
   * The Store this subscription subscribes to or the RequestManager
   * which issues this request.
   */

  /**
   * The Store or RequestManager that the last subscription is attached to.
   *
   * This differs from 'store' because a <Request /> may be passed a
   * request originating from a different store than the <Request />
   * component would use if it were to issue the request itself.
   *
   * @internal
   */
  _requester;
  constructor(store, args) {
    this._args = args;
    this.store = store;
    this._subscribedTo = null;
    this._subscription = null;
    this._intervalStart = null;
    this._invalidated = false;
    this._nextInterval = null;
    this._requester = null;
    this.isDestroyed = false;
    this[DISPOSE] = _DISPOSE;
    this._installListeners();
    void this._beginPolling();
  }

  /**
   * @internal
   */
  async _beginPolling() {
    // await the initial request
    try {
      if (!this.isIdle) {
        await this.request;
      }
    } catch {
      // ignore errors here, we just want to wait for the request to finish
    } finally {
      if (!this.isDestroyed) {
        void this._scheduleInterval();
      }
    }
  }
  get isIdle() {
    const {
      request,
      query
    } = this._args;
    return Boolean(!request && !query);
  }
  static {
    decorateMethodV2(this.prototype, "isIdle", [memoized]);
  }
  get autorefreshTypes() {
    const {
      autorefresh
    } = this._args;
    let types;
    if (autorefresh === true) {
      types = ['online', 'invalid'];
    } else if (typeof autorefresh === 'string') {
      types = autorefresh.split(',');
    } else {
      types = [];
    }
    return new Set(types);
  }

  // we only run this function on component creation
  // and when an update is triggered, so it does not
  // react to changes in the autorefreshThreshold
  // or autorefresh args.
  //
  // if we need to react to those changes, we can
  // use a modifier or internal component or some
  // such to trigger a re-run of this function.
  /** @internal */
  static {
    decorateMethodV2(this.prototype, "autorefreshTypes", [memoized]);
  }
  async _scheduleInterval() {
    const {
      autorefreshThreshold
    } = this._args;
    const hasValidThreshold = typeof autorefreshThreshold === 'number' && autorefreshThreshold > 0;
    if (
    // dont schedule in SSR
    typeof window === 'undefined' ||
    // dont schedule without a threshold
    !hasValidThreshold ||
    // dont schedule if we weren't told to
    !this.autorefreshTypes.has('interval') ||
    // dont schedule if we're already scheduled
    this._intervalStart !== null) {
      return;
    }

    // if we have a current request, wait for it to finish
    // before scheduling the next one
    if (this._latestRequest) {
      try {
        await this._latestRequest;
      } catch {
        // ignore errors here, we just want to wait for the request to finish
      }
      if (this.isDestroyed) {
        return;
      }
    }

    // setup the next interval
    this._intervalStart = Date.now();
    this._nextInterval = setTimeout(() => {
      this._maybeUpdate();
    }, autorefreshThreshold);
  }

  /** @internal */
  _clearInterval() {
    if (this._nextInterval) {
      clearTimeout(this._nextInterval);
      this._intervalStart = null;
    }
  }
  /**
   * @internal
   */
  _updateSubscriptions() {
    if (this.isIdle) {
      return;
    }
    const requestId = this._request.lid;

    // if we're already subscribed to this request, we don't need to do anything
    if (this._subscribedTo === requestId) {
      return;
    }

    // if we're subscribed to a different request, we need to unsubscribe
    this._removeSubscriptions();

    // if we have a request, we need to subscribe to it
    const store = this._getRequester();
    this._requester = store;
    if (requestId && isStore(store)) {
      this._subscribedTo = requestId;
      this._subscription = store.notifications.subscribe(requestId, (_id, op) => {
        // ignore subscription events that occur while our own component's request
        // is occurring
        if (this._isUpdating) {
          return;
        }
        switch (op) {
          case 'invalidated':
            {
              // if we're subscribed to invalidations, we need to update
              if (this.autorefreshTypes.has('invalid')) {
                this._invalidated = true;
                this._maybeUpdate();
              }
              break;
            }
          case 'state':
            {
              const latest = store.requestManager._deduped.get(requestId);
              const priority = latest?.priority;
              const state = this.reqState;
              if (!priority) {
                // if there is no priority, we have completed whatever request
                // was occurring and so we are no longer refreshing (if we were)
                this.isRefreshing = false;
              } else if (priority.blocking && !state.isLoading) {
                // if we are blocking, there is an active request for this identity
                // that MUST be fulfilled from network (not cache).
                // Thus this is not "refreshing" because we should clear out and
                // block on this request.
                //
                // we receive state notifications when either a request initiates
                // or completes.
                //
                // In the completes case: we may receive the state notification
                // slightly before the request is finalized because the NotificationManager
                // may sync flush it (and thus deliver it before the microtask completes)
                //
                // In the initiates case: we aren't supposed to receive one unless there
                // is no other request in flight for this identity.
                //
                // However, there is a race condition here where the completed
                // notification can trigger an update that generates a new request
                // thus giving us an initiated notification before the older request
                // finalizes.
                //
                // When this occurs, if the triggered update happens to have caused
                // a new request to be made for the same identity AND that request
                // is the one passed into this component as the @request arg, then
                // getRequestState will return the state of the new request.
                // We can detect this by checking if the request state is "loading"
                // as outside of this case we would have a completed request.
                //
                // That is the reason for the `&& !state.isLoading` check above.

                // TODO should we just treat this as refreshing?
                this.isRefreshing = false;
                this._maybeUpdate('policy', true);
              } else {
                this.isRefreshing = true;
              }
            }
        }
      });
    }
  }

  /**
   * @internal
   */
  _removeSubscriptions() {
    const store = this._requester;
    if (this._subscription && store && isStore(store)) {
      store.notifications.unsubscribe(this._subscription);
      this._subscribedTo = null;
      this._subscription = null;
      this._requester = null;
    }
  }

  /**
   * Install the event listeners for network and visibility changes.
   * This is only done in browser environments with a global `window`.
   *
   * @internal
   */
  _installListeners() {
    if (typeof window === 'undefined') {
      return;
    }
    this.isOnline = window.navigator.onLine;
    this._unavailableStart = this.isOnline ? null : Date.now();
    this.isHidden = document.visibilityState === 'hidden';
    this._onlineChanged = event => {
      this.isOnline = event.type === 'online';
      if (event.type === 'offline' && this._unavailableStart === null) {
        this._unavailableStart = Date.now();
      }
      this._maybeUpdate();
    };
    this._backgroundChanged = () => {
      const isHidden = document.visibilityState === 'hidden';
      this.isHidden = isHidden;
      if (isHidden && this._unavailableStart === null) {
        this._unavailableStart = Date.now();
      }
      this._maybeUpdate();
    };
    window.addEventListener('online', this._onlineChanged, {
      passive: true,
      capture: true
    });
    window.addEventListener('offline', this._onlineChanged, {
      passive: true,
      capture: true
    });
    document.addEventListener('visibilitychange', this._backgroundChanged, {
      passive: true,
      capture: true
    });
  }

  /**
   * If the network is online and the tab is visible, either reload or refresh the request
   * based on the component's configuration and the requested update mode.
   *
   * Valid modes are:
   *
   * - `'reload'`: Force a reload of the request.
   * - `'refresh'`: Refresh the request in the background.
   * - `'policy'`: Make the request, letting the store's configured CachePolicy decide whether to reload, refresh, or do nothing.
   * - `undefined`: Make the request using the component's autorefreshBehavior setting if the autorefreshThreshold has passed.
   *
   * @internal
   */
  _maybeUpdate(mode, silent) {
    if (this.isIdle) {
      return;
    }
    const {
      reqState
    } = this;
    if (reqState.isPending) {
      return;
    }
    const canAttempt = Boolean(this.isOnline && !this.isHidden && (mode || this.autorefreshTypes.size));
    if (!canAttempt) {
      if (!silent && mode && mode !== '_invalidated') {
        throw new Error(`Reload not available: the network is not online or the tab is hidden`);
      }
      return;
    }
    const {
      autorefreshTypes
    } = this;
    let shouldAttempt = this._invalidated || Boolean(mode);
    if (!shouldAttempt && autorefreshTypes.has('online')) {
      const {
        _unavailableStart
      } = this;
      const {
        autorefreshThreshold
      } = this._args;
      const deadline = typeof autorefreshThreshold === 'number' ? autorefreshThreshold : DEFAULT_DEADLINE;
      shouldAttempt = Boolean(_unavailableStart && Date.now() - _unavailableStart > deadline);
    }
    if (!shouldAttempt && autorefreshTypes.has('interval')) {
      const {
        _intervalStart
      } = this;
      const {
        autorefreshThreshold
      } = this._args;
      if (_intervalStart && typeof autorefreshThreshold === 'number' && autorefreshThreshold > 0) {
        shouldAttempt = Boolean(Date.now() - _intervalStart >= autorefreshThreshold);
      }
    }
    this._unavailableStart = null;
    this._invalidated = false;
    if (shouldAttempt) {
      this._clearInterval();
      this._isUpdating = true;
      const realMode = mode === '_invalidated' ? null : mode;
      const val = realMode ?? this._args.autorefreshBehavior ?? 'policy';

      // if the future was generated by an older store version, it may not have
      // a requester set. In this case we append it to ensure that reload and
      // refresh will work appropriately.
      const requester = this._getRequester();
      if (!reqState._request.requester) {
        reqState._request.requester = requester;
      }
      switch (val) {
        case 'reload':
          this._latestRequest = reqState.reload();
          break;
        case 'refresh':
          this._latestRequest = reqState.refresh();
          break;
        case 'policy':
          this._latestRequest = reqState.refresh(true);
          break;
        default:
          macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
            {
              throw new Error(`Invalid ${mode ? 'update mode' : '@autorefreshBehavior'} for <Request />: ${isNeverString(val)}`);
            }
          })() : {};
      }
      if (val !== 'refresh') {
        this._localRequest = this._latestRequest;
      }
      void this._scheduleInterval();
      void this._latestRequest.finally(() => {
        this._isUpdating = false;
      });
    }
  }

  /**
   * @internal
   */
  _getRequester() {
    // Note: we check for the requester's presence
    // as well as the request's presence because we may
    // be subscribed to a request issued by a store from an older
    // version of the library that didn't yet set requester.
    if (this._args.request?.requester) {
      return this._args.request.requester;
    }
    return this.store;
  }

  /**
   * Retry the request, reloading it from the server.
   */
  retry = async () => {
    this._maybeUpdate('reload');
    await this._localRequest;
  };

  /**
   * Refresh the request, updating it in the background.
   */
  refresh = async () => {
    this._maybeUpdate('refresh');
    await this._latestRequest;
  };

  /**
   * features to yield to the error slot of a component
   */
  get errorFeatures() {
    return {
      isHidden: this.isHidden,
      isOnline: this.isOnline,
      retry: this.retry
    };
  }

  /**
   * features to yield to the content slot of a component
   */
  static {
    decorateMethodV2(this.prototype, "errorFeatures", [memoized]);
  }
  get contentFeatures() {
    const feat = {
      isHidden: this.isHidden,
      isOnline: this.isOnline,
      reload: this.retry,
      refresh: this.refresh,
      isRefreshing: this.isRefreshing,
      latestRequest: this._latestRequest
    };
    if (feat.isRefreshing) {
      feat.abort = () => {
        this._latestRequest?.abort();
      };
    }
    return feat;
  }

  /**
   * @internal
   */
  static {
    decorateMethodV2(this.prototype, "contentFeatures", [memoized]);
  }
  get _request() {
    const {
      request,
      query
    } = this._args;
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`Cannot use both @request and @query args with the <Request> component`);
      }
    })(!request || !query) : {};
    const {
      _localRequest,
      _originalRequest,
      _originalQuery
    } = this;
    const isOriginalRequest = request === _originalRequest && query === _originalQuery;
    if (_localRequest && isOriginalRequest) {
      return _localRequest;
    }

    // update state checks for the next time
    this._originalQuery = query;
    this._originalRequest = request;
    if (request) {
      return request;
    }
    macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
      if (!test) {
        throw new Error(`You must provide either @request or an @query arg with the <Request> component`);
      }
    })(query) : {};
    return this.store.request(query);
  }
  static {
    decorateMethodV2(this.prototype, "_request", [memoized]);
  }
  get request() {
    if (macroCondition(getGlobalConfig().WarpDrive.env.DEBUG)) {
      try {
        const request = this._request;
        this._updateSubscriptions();
        return request;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        throw new Error(`Unable to initialize the request`, {
          cause: e
        });
      }
    } else {
      const request = this._request;
      this._updateSubscriptions();
      return request;
    }
  }
  static {
    decorateMethodV2(this.prototype, "request", [memoized]);
  }
  get reqState() {
    return getRequestState(this.request);
  }
  get result() {
    return this.reqState.result;
  }
}
defineSignal(RequestSubscription.prototype, 'isOnline', true);
defineSignal(RequestSubscription.prototype, 'isHidden', false);
defineSignal(RequestSubscription.prototype, 'isRefreshing', false);
defineSignal(RequestSubscription.prototype, '_localRequest', undefined);
defineSignal(RequestSubscription.prototype, '_latestRequest', undefined);
function isStore(store) {
  return 'requestManager' in store;
}
function createRequestSubscription(store, args) {
  return new RequestSubscription(store, args);
}
function upgradeSubscription(sub) {
  return sub;
}
function _DISPOSE() {
  const self = upgradeSubscription(this);
  self.isDestroyed = true;
  self._removeSubscriptions();
  if (typeof window === 'undefined') {
    return;
  }
  self._clearInterval();
  window.removeEventListener('online', self._onlineChanged, {
    passive: true,
    capture: true
  });
  window.removeEventListener('offline', self._onlineChanged, {
    passive: true,
    capture: true
  });
  document.removeEventListener('visibilitychange', self._backgroundChanged, {
    passive: true,
    capture: true
  });
}
const PromiseCache = new WeakMap();

/**
 * The state of a promise in the "pending"
 * state. This is the default initial state.
 *
 */

/**
 * The state of a promise in the "fulfilled" state.
 * This is the state of a promise that has resolved
 * successfully.
 *
 */

/**
 * The state of a promise in the "rejected" state.
 * This is the state of a promise that has rejected
 * with an error.
 *
 */

/**
 * The state of a promise. This is the type that is returned
 * from `getPromiseState`.
 *
 * See also:
 * - {@link PendingPromise}
 * - {@link ResolvedPromise}
 * - {@link RejectedPromise}
 *
 */

const PromiseStateProto = {};

// TODO introduce a new mechanism for defining multiple properties
// that share a common signal
defineSignal(PromiseStateProto, 'reason', null);
defineSignal(PromiseStateProto, 'value', null);
defineSignal(PromiseStateProto, 'result', null);
defineSignal(PromiseStateProto, 'error', null);
defineSignal(PromiseStateProto, 'status', 'pending');
defineSignal(PromiseStateProto, 'isPending', true);
defineSignal(PromiseStateProto, 'isLoading', true);
defineSignal(PromiseStateProto, 'isSuccess', false);
defineSignal(PromiseStateProto, 'isError', false);
function createPromiseState(promise) {
  const state = getPromiseResult(promise);
  const promiseState = Object.create(PromiseStateProto);
  if (state) {
    if (state.isError) {
      promiseState.error = state.result;
      promiseState.reason = state.result;
      promiseState.status = 'rejected';
      promiseState.isError = true;
      promiseState.isPending = false;
      promiseState.isLoading = false;
    } else {
      promiseState.result = state.result;
      promiseState.value = state.result;
      promiseState.status = 'fulfilled';
      promiseState.isSuccess = true;
      promiseState.isPending = false;
      promiseState.isLoading = false;
    }
  } else {
    void promise.then(result => {
      setPromiseResult(promise, {
        isError: false,
        result
      });
      promiseState.result = result;
      promiseState.value = result;
      promiseState.status = 'fulfilled';
      promiseState.isSuccess = true;
      promiseState.isPending = false;
      promiseState.isLoading = false;
    }, error => {
      setPromiseResult(promise, {
        isError: true,
        result: error
      });
      promiseState.error = error;
      promiseState.reason = error;
      promiseState.status = 'rejected';
      promiseState.isError = true;
      promiseState.isPending = false;
      promiseState.isLoading = false;
    });
  }
  return promiseState;
}
const LegacyPromiseProxy = Symbol.for('LegacyPromiseProxy');
function isLegacyAwaitable(promise) {
  return LegacyPromiseProxy in promise && 'promise' in promise && promise[LegacyPromiseProxy] === true;
}
function getPromise(promise) {
  return isLegacyAwaitable(promise) ? promise.promise : promise;
}

/**
 * Returns a reactive state-machine for the provided promise or awaitable.
 *
 * Repeat calls to `getPromiseState` with the same promise will return the same state object
 * making is safe and easy to use in templates and JavaScript code to produce reactive
 * behaviors around promises.
 *
 * `getPromiseState` can be used in both JavaScript and Template contexts.
 *
 * ```ts
 * import { getPromiseState } from '@warp-drive/ember';
 *
 * const state = getPromiseState(promise);
 * ```
 *
 * For instance, we could write a getter on a component that updates whenever
 * the promise state advances or the promise changes, by combining the function
 * with the use of `@cached`
 *
 * ```ts
 * class Component {
 *   @cached
 *   get title() {
 *     const state = getPromiseState(this.args.request);
 *     if (state.isPending) {
 *       return 'loading...';
 *     }
 *     if (state.isError) { return null; }
 *     return state.result.title;
 *   }
 * }
 * ```
 *
 * Or in a template as a helper:
 *
 * ```gjs
 * import { getPromiseState } from '@warp-drive/ember';
 *
 * <template>
 *   {{#let (getPromiseState @request) as |state|}}
 *     {{#if state.isPending}} <Spinner />
 *     {{else if state.isError}} <ErrorForm @error={{state.error}} />
 *     {{else}}
 *       <h1>{{state.result.title}}</h1>
 *     {{/if}}
 *   {{/let}}
 * </template>
 * ```
 *
 * If looking to use in a template, consider also the `<Await />` component.
 *
 * See also {@link PromiseState}
 */
function getPromiseState(promise) {
  macroCondition(getGlobalConfig().WarpDrive.env.DEBUG) ? (test => {
    if (!test) {
      throw new Error(`getPromiseState expects to be called with a promise: called with ${String(promise)}`);
    }
  })(promise) : {};
  const _promise = getPromise(promise);
  let state = PromiseCache.get(_promise);
  if (!state) {
    state = createPromiseState(_promise);
    PromiseCache.set(_promise, state);
  }
  return state;
}
export { ARRAY_SIGNAL as A, DISPOSE as D, OBJECT_SIGNAL as O, Signals as S, defineGate as a, defineSignal as b, withSignalStore as c, defineNonEnumerableSignal as d, entangleSignal as e, createRequestSubscription as f, gate as g, getRequestState as h, getPromiseState as i, willSyncFlushWatchers as j, getOrCreateInternalSignal as k, consumeInternalSignal as l, memoized as m, notifyInternalSignal as n, createInternalSignal as o, peekInternalSignal as p, createSignalDescriptor as q, entangleInitiallyStaleSignal as r, signal as s, createInternalMemo as t, setupSignals as u, waitFor as w };