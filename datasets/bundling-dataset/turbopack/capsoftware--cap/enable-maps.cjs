const fs = require('node:fs');
const edits = [
  {
    "file": "apps/web/next.config.mjs",
    "old": "const nextConfig = {",
    "new": "const nextConfig = {\n  productionBrowserSourceMaps: true,"
  },
  {
    "file": "apps/web/next.config.mjs",
    "old": "sourcemaps: { disable: !process.env.SENTRY_AUTH_TOKEN }",
    "new": "sourcemaps: { disable: !process.env.SENTRY_AUTH_TOKEN, deleteSourcemapsAfterUpload: false }"
  }
];
for (const edit of edits) {
  const before = fs.readFileSync(edit.file, 'utf8');
  if (before.split(edit.old).length !== 2) throw new Error('Unexpected configuration anchor in ' + edit.file);
  fs.writeFileSync(edit.file, before.replace(edit.old, edit.new));
  console.log('Enabled production browser maps in ' + edit.file);
}
