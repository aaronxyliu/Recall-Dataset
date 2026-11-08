import EmberObject from '../object/index.js';
import '../-internals/runtime/lib/ext/rsvp.js';
import { Registry, privatize } from '../-internals/container/index.js';
import { g as guidFor } from '../../shared-chunks/guid-Cbq2sNV_.js';
import { ENGINE_PARENT, setEngineParent, getEngineParent } from './lib/engine-parent.js';
import ContainerProxyMixin from '../-internals/runtime/lib/mixins/container_proxy.js';
import RegistryProxyMixin from '../-internals/runtime/lib/mixins/registry_proxy.js';
import { R as RSVP } from '../../shared-chunks/rsvp-aLN_pQtn.js';

/**
@module @ember/engine
*/


/**
  The `EngineInstance` encapsulates all of the stateful aspects of a
  running `Engine`.

  @public
  @class EngineInstance
  @extends EmberObject
  @uses RegistryProxyMixin
  @uses ContainerProxyMixin
*/

// Note on types: since `EngineInstance` uses `RegistryProxyMixin` and
// `ContainerProxyMixin`, which respectively implement the same `RegistryMixin`
// and `ContainerMixin` types used to define `InternalOwner`, this is the same
// type as `InternalOwner` from TS's POV. The point of the explicit `extends`
// clauses for `InternalOwner` and `Owner` is to keep us honest: if this stops
// type checking, we have broken part of our public API contract. Medium-term,
// the goal here is to `EngineInstance` simple be `Owner`.

class EngineInstance extends EmberObject.extend(RegistryProxyMixin, ContainerProxyMixin) {
  /**
   @private
   @method setupRegistry
   @param {Registry} registry
   @param {BootOptions} options
   */
  // This is effectively an "abstract" method: it defines the contract a
  // subclass (e.g. `ApplicationInstance`) must follow to implement this
  // behavior, but an `EngineInstance` has no behavior of its own here.
  static setupRegistry(_registry, _options) {}

  /**
    The base `Engine` for which this is an instance.
     @property {Engine} engine
    @private
  */

  [ENGINE_PARENT];
  _booted = false;
  init(properties) {
    super.init(properties);

    // Ensure the guid gets setup for this instance
    guidFor(this);
    this.base ??= this.application;

    // Create a per-instance registry that will use the application's registry
    // as a fallback for resolving registrations.
    let registry = this.__registry__ = new Registry({
      fallback: this.base.__registry__
    });

    // Create a per-instance container from the instance's registry
    this.__container__ = registry.container({
      owner: this
    });
    this._booted = false;
  }
  _bootPromise = null;

  /**
    Initialize the `EngineInstance` and return a promise that resolves
    with the instance itself when the boot process is complete.
     The primary task here is to run any registered instance initializers.
     See the documentation on `BootOptions` for the options it takes.
     @public
    @method boot
    @param options {Object}
    @return {Promise<EngineInstance,Error>}
  */
  boot(options) {
    if (this._bootPromise) {
      return this._bootPromise;
    }
    this._bootPromise = new RSVP.Promise(resolve => {
      resolve(this._bootSync(options));
    });
    return this._bootPromise;
  }

  /**
    Unfortunately, a lot of existing code assumes booting an instance is
    synchronous – specifically, a lot of tests assume the last call to
    `app.advanceReadiness()` or `app.reset()` will result in a new instance
    being fully-booted when the current runloop completes.
     We would like new code (like the `visit` API) to stop making this
    assumption, so we created the asynchronous version above that returns a
    promise. But until we have migrated all the code, we would have to expose
    this method for use *internally* in places where we need to boot an instance
    synchronously.
     @private
  */
  _bootSync(options) {
    if (this._booted) {
      return this;
    }
    this.cloneParentDependencies();
    this.setupRegistry(options);
    this.base.runInstanceInitializers(this);
    this._booted = true;
    return this;
  }
  setupRegistry(options = this.__container__.lookup('-environment:main')) {
    this.constructor.setupRegistry(this.__registry__, options);
  }

  /**
   Unregister a factory.
    Overrides `RegistryProxy#unregister` in order to clear any cached instances
   of the unregistered factory.
    @public
   @method unregister
   @param {String} fullName
   */
  unregister(fullName) {
    this.__container__.reset(fullName);

    // We overwrote this method from RegistryProxyMixin.
    this.__registry__.unregister(fullName);
  }

  /**
    Build a new `EngineInstance` that's a child of this instance.
     Engines must be registered by name with their parent engine
    (or application).
     @private
    @method buildChildEngineInstance
    @param name {String} the registered name of the engine.
    @param options {Object} options provided to the engine instance.
    @return {EngineInstance,Error}
  */
  buildChildEngineInstance(name, options = {}) {
    let ChildEngine = this.lookup(`engine:${name}`);
    if (!ChildEngine) {
      throw new Error(`You attempted to mount the engine '${name}', but it is not registered with its parent.`);
    }
    let engineInstance = ChildEngine.buildInstance(options);
    setEngineParent(engineInstance, this);
    return engineInstance;
  }

  /**
    Clone dependencies shared between an engine instance and its parent.
     @private
    @method cloneParentDependencies
  */
  cloneParentDependencies() {
    const parent = getEngineParent(this);
    let registrations = ['route:basic', 'service:-routing'];
    registrations.forEach(key => {
      let registration = parent.resolveRegistration(key);
      this.register(key, registration);
    });
    let env = parent.lookup('-environment:main');
    this.register('-environment:main', env, {
      instantiate: false
    });

    // The type annotation forces TS to (a) validate that these match and (b)
    // *notice* that they match, e.g. below on the `singletons.push()`.
    let singletons = ['router:main', privatize`-bucket-cache:main`, '-view-registry:main', `renderer:-dom`, 'service:-document'];
    if (env['isInteractive']) {
      singletons.push('event_dispatcher:main');
    }
    singletons.forEach(key => {
      // SAFETY: We already expect this to be a singleton
      let singleton = parent.lookup(key);
      this.register(key, singleton, {
        instantiate: false
      });
    });
  }
}

export { EngineInstance as default };
