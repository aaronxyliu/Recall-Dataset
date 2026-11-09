import {test} from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import {fileURLToPath} from 'node:url'
import {createHash} from 'node:crypto'
import {execFileSync} from 'node:child_process'
import {buildSync} from 'esbuild'
const sha=x=>createHash('sha256').update(x).digest('hex')
test('exclude global copies before one-to-one graph construction, independent of filenames',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'recall-module-scope-'))
 try{
  fs.mkdirSync(path.join(root,'node_modules/example-lib'),{recursive:true})
  fs.writeFileSync(path.join(root,'node_modules/example-lib/index.js'),'export function greet(name){const message="Hello "+name;return message.toUpperCase()}')
  fs.writeFileSync(path.join(root,'entry.js'),'import {greet} from "example-lib"; console.log(greet("world"));')
  buildSync({entryPoints:[path.join(root,'entry.js')],outfile:path.join(root,'out.js'),minify:true,bundle:true,sourcemap:true})
  const code=fs.readFileSync(path.join(root,'out.js')),map=fs.readFileSync(path.join(root,'out.js.map'))
  fs.writeFileSync(path.join(root,sha(code)+'.js'),code);fs.writeFileSync(path.join(root,sha(map)+'.map'),map)
  const assets=['/vendor.js','/application.js'].map(url=>({url,sha256:sha(code),map:{status:'map-found',sha256:sha(map)}}))
  fs.writeFileSync(path.join(root,'capture.json'),JSON.stringify({assets}))
  const run=moduleScope=>{
   fs.writeFileSync(path.join(root,'selection.json'),JSON.stringify({selected:['example-lib'],moduleScope}))
   execFileSync(process.execPath,[fileURLToPath(new URL('./relations.mjs',import.meta.url)),root,root])
   return JSON.parse(fs.readFileSync(path.join(root,'relations.json')))
  }
  assert.equal(run().pairs.length,0,'Two copies should block reciprocal uniqueness before scope filtering')
  const approved={assets:assets.map((a,i)=>({url:a.url,sha256:a.sha256,mapSHA256:a.map.sha256,role:i===0?'module-build-output':'global-script-list'}))}
  const result=run(approved);assert(result.pairs.length>0);assert(result.pairs.every(p=>p.bundled.startsWith('/vendor.js#')))
  execFileSync(process.execPath,[fileURLToPath(new URL('./verify_pairs.mjs',import.meta.url)),root,root])
  assert.equal(run({assets:[]}).pairs.length,0)
  approved.assets[0].mapSHA256='0'.repeat(64);assert.equal(run(approved).pairs.length,0,'Changed map requires fresh review')
 }finally{fs.rmSync(root,{recursive:true,force:true})}
})
