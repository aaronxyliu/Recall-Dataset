const fs = require('node:fs');
const edits = [
  {
    "file": "apps/v4/next.config.mjs",
    "old": "const nextConfig = {",
    "new": "const nextConfig = {\n  productionBrowserSourceMaps: true,\n  staticPageGenerationTimeout: 180,"
  },
  {
    "file": "apps/v4/next.config.mjs",
    "old": "  experimental: {",
    "new": "  experimental: {\n    cpus: 1,\n    turbopackPluginRuntimeStrategy: 'workerThreads',\n    staticGenerationMaxConcurrency: 2,"
  }
];
for (const edit of edits) {
  const before = fs.readFileSync(edit.file, 'utf8');
  if (before.split(edit.old).length !== 2) throw new Error('Unexpected configuration anchor in ' + edit.file);
  fs.writeFileSync(edit.file, before.replace(edit.old, edit.new));
  console.log('Applied production build configuration to ' + edit.file);
}
