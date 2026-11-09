import { N as NAMESPACES, a as NAMESPACES_BY_ID, p as processAllNamespaces, f as findNamespace, b as addNamespace, c as findNamespaces, d as processNamespace, r as removeNamespace } from '../../shared-chunks/namespace_search-BfvzEQzN.js';
import { g as get } from '../../shared-chunks/property_get-DuDs6rLg.js';
import { g as getName, s as setName } from '../../shared-chunks/name-Clp4Vsod.js';
import { g as guidFor } from '../../shared-chunks/guid-Cbq2sNV_.js';
import EmberObject from '../object/index.js';

/**
@module @ember/application/namespace
*/


/**
  A Namespace is an object usually used to contain other objects or methods
  such as an application or framework. Create a namespace anytime you want
  to define one of these new containers.

  ## Example Usage

  ```javascript
  import Namespace from '@ember/application/namespace';
  MyFramework = Namespace.create({
    VERSION: '1.0.0'
  });
  ```

  @class Namespace
  @extends EmberObject
  @public
*/
class Namespace extends EmberObject {
  static NAMESPACES = NAMESPACES;
  static NAMESPACES_BY_ID = NAMESPACES_BY_ID;
  static processAll = processAllNamespaces;
  static byName = findNamespace;
  init(properties) {
    super.init(properties);
    addNamespace(this);
  }
  toString() {
    let existing_name = get(this, 'name') || get(this, 'modulePrefix');
    if (existing_name) {
      return existing_name;
    }
    findNamespaces();
    let name = getName(this);
    if (name === undefined) {
      name = guidFor(this);
      setName(this, name);
    }
    return name;
  }
  nameClasses() {
    processNamespace(this);
  }
  destroy() {
    removeNamespace(this);
    return super.destroy();
  }
}

// Declare on the prototype to have a single shared value.
Namespace.prototype.isNamespace = true;

export { Namespace as default };
