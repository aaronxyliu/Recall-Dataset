import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import os from 'node:os';import path from 'node:path';import {fileURLToPath} from 'node:url';import {execFileSync} from 'node:child_process';import {createHash} from 'node:crypto';import {SourceMapGenerator} from 'source-map';
const sha=x=>createHash('sha256').update(x).digest('hex');
function collect({sources,bundle,mappings,selected}){
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'recall-library-gt-'));
 try{const map=new SourceMapGenerator();for(const [url,code]of Object.entries(sources))map.setSourceContent(url,code);for(const [generated,url,original]of mappings)map.addMapping({generated:{line:1,column:generated},source:url,original:{line:1,column:original}});
 const bytes=map.toString();fs.writeFileSync(path.join(root,sha(bundle)+'.js'),bundle);fs.writeFileSync(path.join(root,sha(bytes)+'.map'),bytes);
 fs.writeFileSync(path.join(root,'selection.json'),JSON.stringify({selected}));fs.writeFileSync(path.join(root,'capture.json'),JSON.stringify({assets:[{url:'bundle.js',sha256:sha(bundle),map:{status:'map-found',sha256:sha(bytes)}}]}));
 for(const script of ['relations.mjs','verify_pairs.mjs'])execFileSync(process.execPath,[fileURLToPath(new URL(script,import.meta.url)),root,root]);
 return JSON.parse(fs.readFileSync(path.join(root,'relations.json')));
 }finally{fs.rmSync(root,{recursive:true,force:true})}
}
test('collects independent library partitions and retains package copies separately',()=>{
 const a='webpack:///node_modules/a/index.js',b='webpack:///node_modules/parent/node_modules/a/index.js',c='webpack:///node_modules/c/index.js';
 const code='function f(){return value}',bundle=code+code+code,urls=[a,b,c];const mappings=[];for(let i=0;i<3;i++)for(const token of ['return','value'])mappings.push([i*code.length+code.indexOf(token),urls[i],code.indexOf(token)]);
 const report=collect({sources:Object.fromEntries(urls.map(u=>[u,code])),bundle,mappings,selected:['a','c']});assert.equal(report.pairs.length,3);assert.equal(report.libraryReports.length,3);assert.equal(new Set(report.pairs.map(p=>p.libraryScope)).size,3);
 for(const r of report.libraryReports){assert.equal(r.pairs.length,1);assert(r.pairs.every(p=>p.library===r.libraryUnit.name&&p.libraryScope===r.libraryUnit.id))}
});
test('external mapped body contributors block acceptance even when that library is not selected',()=>{
 const a='webpack:///node_modules/a/index.js',b='webpack:///node_modules/b/index.js',sa='function a(){return left()}',sb='function b(){return right()}',bundle='function mixed(){return left()+right()}';
 const mappings=[[bundle.indexOf('return'),a,sa.indexOf('return')],[bundle.indexOf('left'),a,sa.indexOf('left')],[bundle.indexOf('right'),b,sb.indexOf('right')]];
 for(const selected of [['a'],['a','b']])assert.equal(collect({sources:{[a]:sa,[b]:sb},bundle,mappings,selected}).pairs.length,0);
});
