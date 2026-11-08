const fs = require('node:fs');
const edits = [
  {
    "file": "rollup.config.js",
    "old": "sourcemap: false",
    "new": "sourcemap: true"
  }
];
for(const e of edits){const s=fs.readFileSync(e.file,'utf8');if(s.split(e.old).length!==2)throw Error('config anchor');fs.writeFileSync(e.file,s.replace(e.old,e.new));}
