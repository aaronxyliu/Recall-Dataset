// Archive available original library text separately from the source-only eligibility proof.
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {sha} from './functions.mjs';
const require=createRequire(new URL('../../verification/hufang-builds-2026-11-08/collector/package.json',import.meta.url));
const {SourceMapConsumer}=require('source-map');
const [recordFile,selectionFile,destination]=process.argv.slice(2);
const record=JSON.parse(fs.readFileSync(recordFile)),selection=JSON.parse(fs.readFileSync(selectionFile)),selected=new Set(selection.selected),files=new Map(),diagnostics=[],seen=new Set();
for(const asset of record.capture.assets) {
  const map=asset.map;if(map?.status!=='map-found'||seen.has(map.sha256))continue;seen.add(map.sha256);
  const file=path.resolve(path.dirname(recordFile),map.localPath||'source-maps/'+map.sha256+'.map'),bytes=fs.readFileSync(file);
  if(sha(bytes)!==map.sha256)throw Error('Map hash mismatch');
  let consumer;
  try {const parsed=JSON.parse(bytes.toString().replace(/^\)\]\}'[^\n]*\n/,''));if(parsed.x_recall_identity_map)continue;consumer=new SourceMapConsumer(parsed);}catch(error){diagnostics.push({map:map.sha256,error:String(error)});continue;}
  for(const source of consumer.sources) {
    const normal=source.replaceAll('\\','/'),owner=[...normal.matchAll(/(?:^|\/)(?:node_modules|~)\/((?:@[^/]+\/)?[^/]+)/g)].at(-1),library=selection.sourceOwnership?.[source]?.library||owner?.[1];if(!selected.has(library))continue;
    const code=consumer.sourceContentFor(source,true);if(code==null){diagnostics.push({source,error:'missing source text'});continue;}
    if(selection.sourceOwnership?.[source]&&sha(code)!==selection.sourceOwnership[source].sha256)throw Error('Source ownership hash mismatch');
    const relative=owner?normal.slice(owner.index+owner[0].length).replace(/^\//,''):source,digest=sha(code),identity=sha(JSON.stringify([library,relative,digest])),local='reference-js/'+identity+'.js';
    if(!files.has(identity)){fs.mkdirSync(path.join(destination,'reference-js'),{recursive:true});fs.writeFileSync(path.join(destination,local),code);files.set(identity,{id:'s-'+identity,path:local,library:{name:library,version:'captured-source-snapshot'},relative,sha256:digest});}
  }
}
const keep=new Set([...files.values()].map(file=>file.path));
if(fs.existsSync(path.join(destination,'reference-js')))for(const file of fs.readdirSync(path.join(destination,'reference-js')))if(!keep.has('reference-js/'+file))fs.unlinkSync(path.join(destination,'reference-js',file));
fs.writeFileSync(path.join(destination,'reference-manifest.json'),JSON.stringify({policy:'Available original source texts from captured maps. These snapshots are not an acceptance gate; source eligibility is established separately before building. Package-name attribution does not prove a single installed version.',files:[...files.values()],diagnostics},null,2)+'\n');
