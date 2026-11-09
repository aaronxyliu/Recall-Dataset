import {fileURLToPath} from 'node:url'
import {test} from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {createHash} from 'node:crypto'
import {execFileSync} from 'node:child_process'
import {buildSync} from 'esbuild'
const sha=x=>createHash('sha256').update(x).digest('hex')
test('stripped source paths require exact source ownership bytes',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'recall-owner-'))
 try{
  const source='export function greet(name) { const label = "Hello " + name; return label.toUpperCase(); }'
  fs.writeFileSync(path.join(dir,'vendor.js'),source)
  fs.writeFileSync(path.join(dir,'entry.js'),'import {greet} from "./vendor.js"; console.log(greet("world"));')
  const out=path.join(dir,'bundle.js');buildSync({entryPoints:[path.join(dir,'entry.js')],bundle:true,minify:true,sourcemap:true,outfile:out})
  const code=fs.readFileSync(out),map=fs.readFileSync(out+'.map'),sourceMap=JSON.parse(map),key=sourceMap.sources.find(s=>s.endsWith('vendor.js'))
  fs.writeFileSync(path.join(dir,sha(code)+'.js'),code);fs.writeFileSync(path.join(dir,sha(map)+'.map'),map)
  fs.writeFileSync(path.join(dir,'capture.json'),JSON.stringify({assets:[{url:'bundle.js',sha256:sha(code),map:{status:'map-found',sha256:sha(map)}}]}))
  const run=owners=>{
   fs.writeFileSync(path.join(dir,'selection.json'),JSON.stringify({selected:['fixture-lib'],sourceOwnership:owners}))
   execFileSync(process.execPath,[fileURLToPath(new URL('./relations.mjs',import.meta.url)),dir,dir])
   return JSON.parse(fs.readFileSync(path.join(dir,'relations.json')))
  }
  assert.equal(run({}).pairs.length,0)
  assert(run({[key]:{library:'fixture-lib',sha256:sha(source)}}).pairs.length>0)
  const bad=run({[key]:{library:'fixture-lib',sha256:'0'.repeat(64)}})
  assert.equal(bad.pairs.length,0);assert(bad.failures.some(f=>f.reason.includes('ownership hash mismatch')))
 }finally{fs.rmSync(dir,{recursive:true,force:true})}
})
