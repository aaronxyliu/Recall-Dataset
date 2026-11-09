const fs = require('node:fs');
const path = require('node:path');
for (const file of ['packages/demo/rollup.config.js', 'packages/scenejs/rollup.config.js']) {
  fs.appendFileSync(file, "\nfor (const config of module.exports) {\n  for (const output of (Array.isArray(config.output) ? config.output : [config.output])) {\n    output.sourcemap = true;\n  }\n}\n");
}
const tsconfig = 'packages/demo/tsconfig.json';
const text = fs.readFileSync(tsconfig, 'utf8');
if (text.split('"sourceMap": true,').length !== 2) throw new Error('Unexpected demo tsconfig');
fs.writeFileSync(tsconfig, text.replace('"sourceMap": true,', '"sourceMap": true, "inlineSources": true,'));

// The locked 0.2.0 worker returns only result.code, discarding Terser's map.
const builderDirectory = path.dirname(require.resolve('@daybrush/builder', { paths: [process.cwd()] }));
const minifier = require.resolve('@rollup/plugin-terser', { paths: [builderDirectory] });
const before = fs.readFileSync(minifier, 'utf8');
const anchor = 'code: result.code || worker_threads.workerData.code,';
if (before.split(anchor).length !== 2) throw new Error('Unexpected locked Terser plugin');
fs.writeFileSync(minifier, before.replace(anchor,
  'code: { code: result.code || worker_threads.workerData.code, map: result.map || null },'));
