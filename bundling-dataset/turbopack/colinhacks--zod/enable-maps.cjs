const fs = require('node:fs');
const edits = [
  {
    "file": "packages/docs/next.config.mjs",
    "old": "const config = {",
    "new": "const config = {\n  productionBrowserSourceMaps: true,"
  }
];
edits.push(
  { file: 'packages/docs/app/layout.tsx', old: 'import { Inter } from "next/font/google";', new: 'import localFont from "next/font/local";' },
  { file: 'packages/docs/app/layout.tsx', old: 'const inter = Inter({\n  subsets: ["latin"],\n});', new: 'const inter = localFont({ src: "./Inter-latin.woff2", weight: "100 900", display: "swap" });' },
);
for (const edit of edits) {
  const before = fs.readFileSync(edit.file, 'utf8');
  if (before.split(edit.old).length !== 2) throw new Error('Unexpected configuration anchor in ' + edit.file);
  fs.writeFileSync(edit.file, before.replace(edit.old, edit.new));
  console.log('Enabled production browser maps in ' + edit.file);
}
