const fs = require('node:fs');
const { createRequire } = require('node:module');
const path = require('node:path');

const fromAutoML = createRequire(path.resolve('../../package.json'));
for (const dependency of ['@tensorflow/tfjs-core', '@tensorflow/tfjs-converter']) {
  if (require.resolve(dependency) !== fromAutoML.resolve(dependency)) {
    throw new Error('The demo and AutoML must use the same runtime package: ' + dependency);
  }
}

// Parcel emits async helpers into the app and its resolver requires a direct declaration.
if (require('@swc/helpers/package.json').version !== '0.4.14') {
  throw new Error('Unexpected @swc/helpers version from the demo lockfile');
}
const manifest = JSON.parse(fs.readFileSync('package.json', 'utf8'));
manifest.dependencies['@swc/helpers'] = '^0.4.12';
for (const [shim, version] of Object.entries({ process: '0.11.10', buffer: '5.7.1' })) {
  if (require(`${shim}/package.json`).version !== version) {
    throw new Error('Unexpected browser shim version from the AutoML lockfile: ' + shim);
  }
  manifest.dependencies[shim] = version;
}
// This private demo builds an HTML entry. A package main field activates Parcel's library target.
if (manifest.main !== 'index.js') throw new Error('Unexpected Parcel demo entry metadata');
delete manifest.main;
fs.writeFileSync('package.json', JSON.stringify(manifest, null, 2) + '\n');
