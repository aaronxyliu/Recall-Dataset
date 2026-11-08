class StrictResolver {
  // Ember's router uses this flag to decide whether to auto-generate
  // `${name}_loading` and `${name}_error` substates for routes defined in
  // `Router.map(...)`. Since we always resolve against an ES module registry,
  // we unconditionally opt in.
  moduleBasedResolver = true;
  #modules = new Map();
  original;
  static create({
    namespace
  }) {
    return new StrictResolver(namespace.modules);
  }
  constructor(modules) {
    this.addModules(modules);
  }
  addModules(modules) {
    for (let [moduleName, module] of Object.entries(modules)) {
      this.#modules.set(this.#normalizeModule(moduleName), module);
    }
  }
  #normalizeModule(moduleName) {
    return moduleName.replace(fileExtension, '').replace(leadingDotSlash, '');
  }
  #plural(word) {
    if (word === 'config') {
      return word;
    }
    return word + 's';
  }
  resolve(fullName) {
    let [type, name] = fullName.split(':');
    name = this.#normalizeName(type, name);
    for (let strategy of [this.#resolveSelf, this.#mainLookup, this.#defaultLookup, this.#nestedColocationLookup]) {
      let result = strategy.call(this, type, name);
      if (result) {
        return this.#extractDefaultExport(result.hit);
      }
    }
    return undefined;
  }
  #extractDefaultExport(module) {
    if (module && module['default']) {
      module = module['default'];
    }
    return module;
  }
  normalize(fullName) {
    let [type, name] = fullName.split(':');
    name = this.#normalizeName(type, name);
    return `${type}:${name}`;
  }
  #normalizeName(type, name) {
    if (type === 'component' || type === 'helper' || type === 'modifier' || type === 'template' && name.indexOf('components/') === 0) {
      return name.replace(/_/g, '-');
    } else {
      return dasherize(name.replace(/\./g, '/'));
    }
  }
  #resolveSelf(type, name) {
    if (type === 'resolver' && name === 'current') {
      return {
        hit: {
          create: () => this
        }
      };
    }
    return undefined;
  }
  #mainLookup(type, name) {
    if (name === 'main') {
      let module = this.#modules.get(type);
      if (module) {
        return {
          hit: module
        };
      }
    }
    return undefined;
  }
  #defaultLookup(type, name) {
    let dir = this.#plural(type);
    let target = `${dir}/${name}`;
    let module = this.#modules.get(target);
    if (module) {
      return {
        hit: module
      };
    }
    return undefined;
  }

  // Supports the nested colocation pattern where `component:my-widget`
  // resolves to `./components/my-widget/index.{js,ts,gjs,gts}`. The index
  // file is typically the component class, and it's commonly paired with a
  // sibling `index.hbs` inside the same folder.
  #nestedColocationLookup(type, name) {
    if (type !== 'component') return undefined;
    let dir = this.#plural(type);
    let target = `${dir}/${name}/index`;
    let module = this.#modules.get(target);
    if (module) {
      return {
        hit: module
      };
    }
    return undefined;
  }
}
const fileExtension = /\.\w{1,4}$/;
const leadingDotSlash = /^\.\//;
const camelCaseBoundary = /([a-z\d])([A-Z])/g;
const spacesAndUnderscores = /[ _]/g;
function dasherize(str) {
  return str.replace(camelCaseBoundary, '$1_$2').toLowerCase().replace(spacesAndUnderscores, '-');
}

export { StrictResolver };
