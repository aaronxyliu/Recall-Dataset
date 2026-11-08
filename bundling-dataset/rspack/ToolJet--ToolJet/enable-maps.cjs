const fs = require('node:fs');

const config = 'frontend/rspack.config.js';
const source = fs.readFileSync(config, 'utf8');
const productionDevtool = /\? 'hidden-source-map'\s*: false,/g;
if ([...source.matchAll(productionDevtool)].length !== 1) {
  throw new Error('ToolJet production source map configuration changed');
}
fs.writeFileSync(config, source.replace(productionDevtool, "? 'hidden-source-map'\n          : 'source-map',"));
