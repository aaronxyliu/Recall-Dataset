const fs = require('node:fs');
const config = 'tsup.config.js';
const before = fs.readFileSync(config, 'utf8');
if (before.split('bundle: true,').length !== 4) throw new Error('Unexpected tsup configuration');
fs.writeFileSync(config, before.replaceAll('bundle: true,', 'bundle: true,\n    sourcemap: true,'));
// The production script prepends complete header lines after tsup emits its maps.
const headerFile = 'tools/header.js';
fs.appendFileSync(headerFile, `
for (const file of process.argv.slice(2)) {
  const mapFile = file + ".map";
  if (!fs.existsSync(mapFile)) throw new Error("Missing map for " + file);
  const map = JSON.parse(fs.readFileSync(mapFile, "utf8"));
  map.mappings = ";".repeat(header.split("\\n").length - 1) + map.mappings;
  fs.writeFileSync(mapFile, JSON.stringify(map));
}
`);
