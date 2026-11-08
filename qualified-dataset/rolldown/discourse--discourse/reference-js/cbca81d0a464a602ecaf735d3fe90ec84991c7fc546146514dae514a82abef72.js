import VERSION from '../ember/version.js';
import './property_get-DuDs6rLg.js';

/**
 @module ember
*/
/**
  Helper class that allows you to register your library with Ember.

  Singleton created at `Ember.libraries`.

  @class Libraries
  @constructor
  @private
*/
class Libraries {
  _registry;
  _coreLibIndex;
  constructor() {
    this._registry = [];
    this._coreLibIndex = 0;
  }
  _getLibraryByName(name) {
    let libs = this._registry;
    for (let lib of libs) {
      if (lib.name === name) {
        return lib;
      }
    }
    return undefined;
  }
  register(name, version, isCoreLibrary) {
    let index = this._registry.length;
    if (!this._getLibraryByName(name)) {
      if (isCoreLibrary) {
        index = this._coreLibIndex++;
      }
      this._registry.splice(index, 0, {
        name,
        version
      });
    }
  }
  registerCoreLibrary(name, version) {
    this.register(name, version, true);
  }
  deRegister(name) {
    let lib = this._getLibraryByName(name);
    let index;
    if (lib) {
      index = this._registry.indexOf(lib);
      this._registry.splice(index, 1);
    }
  }
}
const LIBRARIES = new Libraries();
LIBRARIES.registerCoreLibrary('Ember', VERSION);

export { Libraries as L, LIBRARIES as a };
