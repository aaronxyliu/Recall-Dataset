const fs = require('node:fs');
const path = require('node:path');

module.exports = function loadUpstreamMap(code) {
  const match = /\/\/# sourceMappingURL=([^\s/]+)\s*$/.exec(code);
  if (!match) return code;
  const dir = path.dirname(this.resourcePath);
  const map = JSON.parse(fs.readFileSync(path.join(dir, match[1]), 'utf8'));
  const originals = map.sources.map((source) => path.resolve(dir, map.sourceRoot || '', source));
  map.sourcesContent = originals.map((source, index) => map.sourcesContent?.[index] ?? fs.readFileSync(source, 'utf8'));
  map.sources = originals.map((source) => source.replaceAll('\\', '/'));
  map.sourceRoot = '';
  this.callback(null, code, map);
};
