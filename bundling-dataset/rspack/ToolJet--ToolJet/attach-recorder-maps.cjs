const { createHash } = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const workers = [
  {
    packageName: 'media-encoder-host',
    version: '8.1.0',
    workerSha256: 'b4464a9cd17322a8233d755aca9a83d300b29556c6374ac978e3a077fe602392',
  },
  {
    packageName: 'extendable-media-recorder-wav-encoder',
    version: '7.0.135',
    workerSha256: 'f23046eacf94ac2c45997569e8fa1d9587ceef0cd7cf6ab3c82fd7d064b500d9',
  },
];

for (const { packageName, version, workerSha256 } of workers) {
  const file = path.join('frontend/node_modules', packageName, 'build/es2019/worker/worker.js');
  const code = fs.readFileSync(file, 'utf8');
  const worker = /(\bexport const worker = `)((?:\\[\s\S]|[^`\\])*)(`;)/;
  const match = worker.exec(code);
  if (!match) throw new Error('Unexpected worker wrapper in ' + file);
  const body = match[2].replace(/\\(\\|\$\{)/g, '$1');
  if (createHash('sha256').update(body).digest('hex') !== workerSha256) {
    throw new Error('Published worker differs from the build used to generate its map: ' + packageName);
  }
  // The libraries create blob: URLs from these strings. An inline map works in that URL context.
  const map = fs.readFileSync(path.join(__dirname, `${packageName}-${version}.worker.js.map`));
  const directive = '\\n//# sourceMappingURL=data:application/json;base64,' + map.toString('base64') + '\\n';
  fs.writeFileSync(file, code.replace(worker, (_all, open, value, close) => open + value + directive + close));
}
