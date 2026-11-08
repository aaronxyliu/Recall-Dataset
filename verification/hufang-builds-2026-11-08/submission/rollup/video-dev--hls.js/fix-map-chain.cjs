const fs = require('node:fs');

function replaceOnce(file, from, to) {
  const code = fs.readFileSync(file, 'utf8');
  if (code.split(from).length !== 2) throw new Error('Unexpected build source: ' + file);
  fs.writeFileSync(file, code.replace(from, to));
}

// Load upstream maps in Rollup so Babel's transform maps point to the actual JS input.
replaceOnce('build-config.js', 'const babelTsWithPresetEnvTargets', String.raw`const svtaDist = /\/node_modules\/@svta\/[^/]+\/dist\/.*\.js$/;
const loadSvtaMaps = {
  name: 'svta-published-source-maps',
  load(id) {
    if (!svtaDist.test(id)) return null;
    const fs = require('node:fs');
    const path = require('node:path');
    const code = fs.readFileSync(id, 'utf8');
    const reference = /\/\/# sourceMappingURL=([^\s/]+)\s*$/.exec(code);
    if (!reference) return null;
    const map = JSON.parse(fs.readFileSync(path.join(path.dirname(id), reference[1]), 'utf8'));
    return { code, map };
  },
};

const babelTsWithPresetEnvTargets`);
replaceOnce('build-config.js', "    babelHelpers: 'bundled',", "    babelHelpers: 'bundled',\n    overrides: [{ test: svtaDist, inputSourceMap: false }],");
replaceOnce('build-config.js', 'const basePlugins = [', 'const basePlugins = [\n  loadSvtaMaps,');

// Use the supported separately-built worker so its browser URL can resolve its map.
replaceOnce('demo/main.js', '  enableWorker: true,', "  enableWorker: true,\n  workerPath: '../dist/hls.worker.js',");
