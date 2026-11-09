import { s as setClassicDecorator, i as isElementDescriptor } from '../../shared-chunks/decorator-9ikVwsjY.js';
import { t as track, U as UPDATE_TAG, c as consumeTag } from '../../shared-chunks/cache-CofLhaS4.js';
import { t as tagFor } from '../../shared-chunks/meta-BJtIZDir.js';

let wrapGetterSetter = function (target, key, desc) {
  let {
    get: originalGet
  } = desc;
  if (originalGet !== undefined) {
    desc.get = function () {
      let propertyTag = tagFor(this, key);
      let ret;
      let tag = track(() => {
        ret = originalGet.call(this);
      });
      UPDATE_TAG(propertyTag, tag);
      consumeTag(tag);
      return ret;
    };
  }
  return desc;
};

/**
  `@dependentKeyCompat` is decorator that can be used on _native getters_ that
  use tracked properties. It exposes the getter to Ember's classic computed
  property and observer systems, so they can watch it for changes. It can be
  used in both native and classic classes.

  Native Example:

  ```js
  import { tracked } from '@glimmer/tracking';
  import { dependentKeyCompat } from '@ember/object/compat';
  import { computed, set } from '@ember/object';

  class Person {
    @tracked firstName;
    @tracked lastName;

    @dependentKeyCompat
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  class Profile {
    constructor(person) {
      set(this, 'person', person);
    }

    @computed('person.fullName')
    get helloMessage() {
      return `Hello, ${this.person.fullName}!`;
    }
  }
  ```

  In general, only properties which you _expect_ to be watched by older,
  untracked clases should be marked as dependency compatible. The decorator is
  meant as an interop layer for parts of Ember's older classic APIs, and should
  not be applied to every possible getter/setter in classes. The number of
  dependency compatible getters should be _minimized_ wherever possible. New
  application code should not need to use `@dependentKeyCompat`, since it is
  only for interoperation with older code.

  @public
  @method dependentKeyCompat
  @for @ember/object/compat
  @static
  @param {PropertyDescriptor|undefined} desc A property descriptor containing
                                             the getter and setter (when used in
                                             classic classes)
  @return {PropertyDecorator} property decorator instance
 */

function dependentKeyCompat(...args) {
  if (isElementDescriptor(args)) {
    let [target, key, desc] = args;
    return wrapGetterSetter(target, key, desc);
  } else {
    const desc = args[0];
    let decorator = function (target, key, _desc, _meta, isClassicDecorator) {
      return wrapGetterSetter(target, key, desc);
    };
    setClassicDecorator(decorator);
    return decorator;
  }
}
setClassicDecorator(dependentKeyCompat);

export { dependentKeyCompat };
