import fs from 'node:fs';import path from 'node:path';import {resolvePackage} from '../source-functions-3/locks.mjs';
const plans=JSON.parse(fs.readFileSync(new URL('../source-functions-3/plan.json',import.meta.url))),items=JSON.parse(fs.readFileSync(new URL('./work/plan.json',import.meta.url)));const out=[];
for(const item of items){const p=plans.find(p=>p.subject===item.subject),m=JSON.parse(fs.readFileSync(p.manifest)),libs=[];for(const [name,spec]of Object.entries(m.dependencies||{}))try{const r=resolvePackage(p,name,spec);if(r.version)libs.push({library:name,...r});}catch{}out.push({subject:item.subject,libraries:libs});}
fs.writeFileSync(new URL('./work/versions.json',import.meta.url),JSON.stringify(out,null,2)+'\n');
