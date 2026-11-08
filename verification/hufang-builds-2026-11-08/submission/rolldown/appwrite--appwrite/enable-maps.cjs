const fs=require('node:fs');
const edits=[
  {
    "file": "vite.config.ts",
    "old": "sourcemap: isSitesBuild\n        ? false\n        : process.env.SENTRY_AUTH_TOKEN\n          ? 'hidden'\n          : false",
    "new": "sourcemap: true"
  }
];
for(const e of edits){const s=fs.readFileSync(e.file,'utf8');if(s.split(e.old).length!==2)throw Error('config anchor');fs.writeFileSync(e.file,s.replace(e.old,e.new));}
