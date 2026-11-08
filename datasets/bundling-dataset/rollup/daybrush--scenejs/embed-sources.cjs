const fs = require('node:fs');
const path = require('node:path');

for (const directory of ['demo/dist', 'packages/scenejs/dist']) {
  for (const filename of fs.readdirSync(directory).filter((name) => name.endsWith('.map'))) {
    const file = path.join(directory, filename);
    const map = JSON.parse(fs.readFileSync(file, 'utf8'));
    map.sourcesContent ??= map.sources.map(() => null);
    for (let index = 0; index < map.sources.length; index++) {
      if (map.sourcesContent[index] !== null) continue;
      const source = path.resolve(path.dirname(file), map.sourceRoot || '', map.sources[index]);
      if (!source.startsWith('/app/')) throw new Error('Unexpected source path: ' + source);
      map.sourcesContent[index] = fs.readFileSync(source, 'utf8');
    }
    fs.writeFileSync(file, JSON.stringify(map));
  }
}
