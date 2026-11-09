const fs = require('node:fs');
const { createRequire } = require('node:module');
const requireFromApp = createRequire('/app/apps/v4/package.json');
const { version } = requireFromApp('next/package.json');
if (version !== '16.4.2') throw new Error('Unexpected Next.js version: ' + version);

const build = requireFromApp.resolve('next/dist/build/index.js');
const backup = build + '.recall-original';
if (process.argv[2] === 'restore') {
  fs.renameSync(backup, build);
} else if (process.argv[2] === 'apply') {
  const source = fs.readFileSync(build, 'utf8');
  const staticWorker = /isolatedMemory: true,(\s*enableWorkerThreads: config\.experimental\.workerThreads,)/g;
  if ([...source.matchAll(staticWorker)].length !== 1) throw new Error('Static worker anchor changed');
  fs.writeFileSync(backup, source, { flag: 'wx' });
  const patched = build + '.recall-patched';
  fs.writeFileSync(patched, source.replace(staticWorker, 'isolatedMemory: false,$1'), { flag: 'wx' });
  fs.renameSync(patched, build);
  console.log('Next.js static worker will inherit the build heap limit');
} else {
  throw new Error('Expected apply or restore');
}
