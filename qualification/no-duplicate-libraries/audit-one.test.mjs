import {test} from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import {createRequire} from 'node:module';import {fileURLToPath} from 'node:url';import {createHash} from 'node:crypto';import {execFileSync} from 'node:child_process';
const require=createRequire(new URL('../../verification/hufang-builds-2026-11-08/collector/package.json',import.meta.url));const {buildSync}=require('esbuild');const sha=x=>createHash('sha256').update(x).digest('hex');
test('map audit distinguishes genuine copies from distinct functions split into chunks',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'recall-duplicate-fixture-'));
 try{
  const put=(n,s)=>{fs.mkdirSync(path.dirname(path.join(root,n)),{recursive:true});fs.writeFileSync(path.join(root,n),typeof s==='string'?s:JSON.stringify(s));};
  put('package.json',{dependencies:{'example-lib':'1.0.0'}});put('owners.json',{});
  put('node_modules/example-lib/index.js','export function first(name){const label="Hello "+name; return label.toUpperCase()} export function second(name){const word="Goodbye "+name; return word.toLowerCase()}');
  const run=duplicate=>{
   const assets=[];for(const [i,name]of [[1,'first'],[2,duplicate?'first':'second']]){
    put('entry'+i+'.js',`import {${name}} from "example-lib"; console.log(${name}("world${i}"));`);buildSync({entryPoints:[path.join(root,'entry'+i+'.js')],bundle:true,minify:true,sourcemap:true,outfile:path.join(root,'bundle'+i+'.js')});const code=fs.readFileSync(path.join(root,'bundle'+i+'.js')),map=fs.readFileSync(path.join(root,'bundle'+i+'.js.map'));put(sha(code)+'.js',code.toString());put(sha(map)+'.map',map.toString());assets.push({url:'/bundle'+i+'.js',sha256:sha(code),localPath:sha(code)+'.js',map:{status:'map-found',sha256:sha(map),localPath:sha(map)+'.map'}});
   }
   put('record.json',{capture:{assets}});put('scope.json',{assets:assets.map(a=>({url:a.url,sha256:a.sha256,role:'module-build-output'}))});put('input.json',{subject:'fixture/example',commit:'fixture',record:path.join(root,'record.json'),moduleScope:path.join(root,'scope.json'),manifest:path.join(root,'package.json'),sourceOwnership:path.join(root,'owners.json'),excludeLibraries:[]});execFileSync(process.execPath,[fileURLToPath(new URL('./audit-one.mjs',import.meta.url)),path.join(root,'input.json'),path.join(root,'report.json')]);return JSON.parse(fs.readFileSync(path.join(root,'report.json'))).candidates[0];
  };
  assert.equal(run(false).status,'unique-observed');const duplicated=run(true);assert.equal(duplicated.status,'duplicated');assert(duplicated.reasons.some(r=>r.type==='same-original-function-copied'));
 }finally{fs.rmSync(root,{recursive:true,force:true})}
});
