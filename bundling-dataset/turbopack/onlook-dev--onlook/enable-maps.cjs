const fs = require('node:fs');
const edits = [
  {
    "file": "apps/web/client/next.config.ts",
    "old": "const nextConfig: NextConfig = {",
    "new": "const nextConfig: NextConfig = {\n  productionBrowserSourceMaps: true,"
  }
];
for (const edit of edits) {
  const before = fs.readFileSync(edit.file, 'utf8');
  if (before.split(edit.old).length !== 2) throw new Error('Unexpected configuration anchor in ' + edit.file);
  fs.writeFileSync(edit.file, before.replace(edit.old, edit.new));
  console.log('Enabled production browser maps in ' + edit.file);
}
