import Mixin from '../../../../object/mixin.js';

/**
@module ember
*/


/**
  RegistryProxyMixin is used to provide public access to specific
  registry functionality.

  @class RegistryProxyMixin
  @extends RegistryProxy
  @private
*/

const RegistryProxyMixin = Mixin.create({
  __registry__: null,
  resolveRegistration(fullName) {
    return this.__registry__.resolve(fullName);
  },
  register: registryAlias('register'),
  unregister: registryAlias('unregister'),
  hasRegistration: registryAlias('has'),
  registeredOption: registryAlias('getOption'),
  registerOptions: registryAlias('options'),
  registeredOptions: registryAlias('getOptions'),
  registerOptionsForType: registryAlias('optionsForType'),
  registeredOptionsForType: registryAlias('getOptionsForType')
});
function registryAlias(name) {
  return function (...args) {
    // We need this cast because `Parameters` is deferred so that it is not
    // possible for TS to see it will always produce the right type. However,
    // since `AnyFn` has a rest type, it is allowed. See discussion on [this
    // issue](https://github.com/microsoft/TypeScript/issues/47615).
    return this.__registry__[name](...args);
  };
}

export { RegistryProxyMixin as default };
