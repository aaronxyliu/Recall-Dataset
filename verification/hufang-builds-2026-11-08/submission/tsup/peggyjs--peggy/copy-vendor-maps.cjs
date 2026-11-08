const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');

function copyMap(packageDir, file, mapName) {
  const published = path.join('docs/node_modules', packageDir, 'dist');
  const served = path.join('docs/_site/vendor', file);
  const bytes = fs.readFileSync(served);
  if (!bytes.equals(fs.readFileSync(path.join(published, file)))) {
    throw new Error('Vendor script does not match installed distribution: ' + file);
  }
  const map = JSON.parse(fs.readFileSync(path.join(published, mapName), 'utf8'));
  if (file === 'jquery.min.js') {
    if (map.sources.length !== 1 || map.sources[0] !== 'jquery.js') throw new Error('Unexpected jQuery map');
    map.sourcesContent = [fs.readFileSync(path.join(published, 'jquery.js'), 'utf8')];
  }
  const reference = /\/\/[#@]\s*sourceMappingURL=([^\s]+)/.exec(bytes.toString('utf8'));
  if (reference && reference[1] !== mapName) throw new Error('Unexpected map reference: ' + file);
  fs.writeFileSync(path.join(path.dirname(served), mapName), JSON.stringify(map) + '\n', { flag: 'wx' });
  if (!reference) fs.appendFileSync(served, '\n//# sourceMappingURL=' + mapName + '\n');
}

copyMap('file-saver', 'FileSaver.min.js', 'FileSaver.min.js.map');
copyMap('jquery', 'jquery.min.js', 'jquery.min.map');

// Rebuilt from the npm release's gitHead with its frozen lockfile and Webpack source-map output.
const inspect = 'docs/_site/vendor/inspect.js';
const inspectSha256 = createHash('sha256').update(fs.readFileSync(inspect)).digest('hex');
if (inspectSha256 !== 'd9b6efee41cc9336cfcfdc86c7c0b0d554fb3cb4b1514e123d3ba4d5003eb01a') {
  throw new Error('inspect.js differs from the build used to generate its map');
}
fs.copyFileSync('/tmp/inspect-3.3.4.js.map', inspect + '.map', fs.constants.COPYFILE_EXCL);
fs.copyFileSync('/tmp/inspect-3.3.4.LICENSE', inspect + '.LICENSE', fs.constants.COPYFILE_EXCL);
fs.appendFileSync(inspect, '\n//# sourceMappingURL=inspect.js.map\n');
