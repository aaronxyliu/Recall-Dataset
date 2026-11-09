import {sourceOwnerResolver} from '../../verification/hufang-builds-2026-11-08/collector/source-owner.mjs';
import {copyProof,versionTag} from './evidence.mjs';
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {createRequire} from 'node:module';
const require=createRequire(new URL('../../verification/hufang-builds-2026-11-08/collector/package.json',import.meta.url));const {SourceMapConsumer}=require('source-map');const {parse}=require('@babel/parser');
const {functionInventory}=await import('../../verification/hufang-builds-2026-11-08/collector/function-inventory.mjs');
const [input,output]=process.argv.slice(2),plan=JSON.parse(fs.readFileSync(input)),record=JSON.parse(fs.readFileSync(plan.record)),scope=JSON.parse(fs.readFileSync(plan.moduleScope)),manifest=JSON.parse(fs.readFileSync(plan.manifest));
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');const auditorSHA256=sha(fs.readFileSync(new URL(import.meta.url)));const evidenceSHA256=sha(fs.readFileSync(new URL('./evidence.mjs',import.meta.url)));const ownerResolverSHA256=sha(fs.readFileSync(new URL('../../verification/hufang-builds-2026-11-08/collector/source-owner.mjs',import.meta.url)));const candidates=new Set(Object.keys(manifest.dependencies||{}).filter(n=>!(plan.excludeLibraries||[]).includes(n)));const roles=new Map(scope.assets.map(a=>[a.url+'#'+a.sha256,a.role]));const ownership=plan.sourceOwnership&&fs.existsSync(plan.sourceOwnership)?JSON.parse(fs.readFileSync(plan.sourceOwnership)):{};
const resolveOwner=sourceOwnerResolver({sourceOwnership:ownership,logicalPackages:plan.logicalPackages});
const libraries=new Map([...candidates].map(name=>[name,{library:name,status:'not-observed',moduleFunctions:new Set(),moduleMappedBodyPoints:0,allFunctions:new Set(),sources:new Map(),reasons:[],parseFailures:[],maps:new Set()}]));
function ownerOf(source,code){
 const matches=[...source.replaceAll('\\','/').matchAll(/(?:^|\/)(?:node_modules|~)\/((?:@[^/]+\/)?[^/]+)/g)];const last=matches.at(-1);let owner=last?.[1],relative=last?source.slice(last.index+last[0].length).replace(/^\//,''):source;const result=[];
 const resolved=resolveOwner(source,code);owner=resolved.library;relative=resolved.relative;
 if(owner)result.push({owner,logical:plan.logicalPackages?.[owner]||owner,relative,install:source.slice(0,last?last.index+last[0].length:0)});
 const embedded=relative.match(/^dist\/compiled\/((?:@[^/]+\/)?[^/]+)\/(.+)$/);
 if(owner==='next'&&embedded){result[0].logical=embedded[1];result[0].relative=embedded[2];if(candidates.has(embedded[1]))result.push({owner:embedded[1],logical:embedded[1],relative:embedded[2],install:'vendored:next/'+embedded[1]});}
 return result.filter(x=>candidates.has(x.owner));
}
function generatedLookup(code){
 let ast;for(const plugins of [['jsx','decorators-legacy'],['jsx','typescript','decorators-legacy']]){try{ast=parse(code,{sourceType:'unambiguous',allowReturnOutsideFunction:true,plugins});break}catch{}}if(!ast)throw Error('Generated script parse failed');
 const funcs=[],lines=[0];for(let i=0;i<code.length;i++)if(code[i]==='\n')lines.push(i+1);
 const skip=new Set(['loc','extra','tokens','comments','leadingComments','innerComments','trailingComments']);
 function visit(n,parent){if(!n||typeof n!=='object')return;if(n.body&&/^(?:FunctionDeclaration|FunctionExpression|ArrowFunctionExpression|ObjectMethod|ClassMethod|ClassPrivateMethod)$/.test(n.type)){parent={start:n.start,end:n.end,bodyStart:n.body.start+(n.body.type==='BlockStatement'?1:0),bodyEnd:n.body.end-(n.body.type==='BlockStatement'?1:0),parent};funcs.push(parent);}for(const [k,v]of Object.entries(n))if(!skip.has(k)&&v&&typeof v==='object'){if(Array.isArray(v))for(const c of v)visit(c,parent);else visit(v,parent);}}
 visit(ast.program,null);funcs.sort((a,b)=>a.start-b.start||b.end-a.end);ast=null;
 return (line,col)=>{if(line<1||line>lines.length||col<0||lines[line-1]+col>(lines[line]??code.length+1)-1)throw Error('Generated map coordinate outside script');const offset=lines[line-1]+col;let lo=0,hi=funcs.length;while(lo<hi){const m=(lo+hi)>>1;if(funcs[m].start<=offset)lo=m+1;else hi=m;}let f=funcs[lo-1];while(f&&offset>=f.end)f=f.parent;return f&&offset>=f.bodyStart&&offset<f.bodyEnd?f:null;};
}
const sourceCache=new Map(),evidence=new Map(),failures=[];let mappedPoints=0;
for(const a of record.capture.assets){
 if(a.map?.status!=='map-found')continue;const mapFile=path.resolve(path.dirname(plan.record),a.map.localPath||'source-maps/'+a.map.sha256+'.map');const mapBytes=fs.readFileSync(mapFile);if(sha(mapBytes)!==a.map.sha256)throw Error('Map SHA mismatch');let consumer;
 try{consumer=new SourceMapConsumer(JSON.parse(mapBytes.toString().replace(/^\)\]\}'[^\n]*\n/,'')));}catch(e){failures.push({asset:a.url,error:String(e)});continue;}
 const sources=new Map(),affected=new Set();
 for(const source of consumer.sources){const code=consumer.sourceContentFor(source,true);if(code==null)continue;if(/\.(?:json|css|scss|html)(?:[?#].*)?$/.test(source))continue;const owners=ownerOf(source,code);if(!owners.length)continue;const digest=sha(code);let inv;try{if(!sourceCache.has(digest))sourceCache.set(digest,functionInventory(code,digest));inv=sourceCache.get(digest);}catch(e){for(const o of owners)libraries.get(o.owner).parseFailures.push({asset:a.url,source,error:'Source parse failed'});continue;}
 sources.set(source,{code,digest,owners,inv});for(const o of owners){affected.add(o.owner);const lib=libraries.get(o.owner);lib.maps.add(a.map.sha256);const sk=source+'#'+digest;if(!lib.sources.has(sk))lib.sources.set(sk,{source,sha256:digest,relative:o.relative,logical:o.logical,install:o.install,bytes:Buffer.byteLength(code),assets:new Map(),functions:new Set()});}}
 if(!sources.size)continue;const scriptFile=path.resolve(path.dirname(plan.record),a.localPath||'runtime-js/'+a.sha256+'.js'),bytes=fs.readFileSync(scriptFile);if(sha(bytes)!==a.sha256)throw Error('Script SHA mismatch');let lookup;try{lookup=generatedLookup(bytes.toString());}catch(e){for(const name of affected)libraries.get(name).parseFailures.push({asset:a.url,error:String(e)});continue;}
 const assetErrors=new Map();
 consumer.eachMapping(m=>{if(!m.source||m.originalLine==null||!sources.has(m.source))return;const s=sources.get(m.source);let sp,g;
  try{sp=s.inv.point(m.originalLine,m.originalColumn);if(sp.kind!=='body'||!sp.fn)return;for(const o of s.owners)if(roles.get(a.url+'#'+a.sha256)==='module-build-output')libraries.get(o.owner).moduleMappedBodyPoints++;g=lookup(m.generatedLine,m.generatedColumn);}catch(e){for(const o of s.owners){const errs=assetErrors.get(o.owner)||new Set();errs.add(String(e));assetErrors.set(o.owner,errs);}return;}if(!g)return;mappedPoints++;
  const role=roles.get(a.url+'#'+a.sha256)||'unreviewed',target=a.url+'#'+a.sha256+'@'+g.start+'-'+g.end,identity=s.digest+'@'+sp.fn.start+'-'+sp.fn.end;
  for(const o of s.owners){const lib=libraries.get(o.owner);lib.allFunctions.add(identity);if(role==='module-build-output')lib.moduleFunctions.add(identity);const row=lib.sources.get(m.source+'#'+s.digest);row.functions.add(identity);row.assets.set(a.url+'#'+a.sha256,role);
   const key=o.logical+'\0'+identity;if(!evidence.has(key))evidence.set(key,{libraries:new Set(),logical:o.logical,source:m.source,sourceSHA256:s.digest,span:[sp.fn.start,sp.fn.end],targets:new Map()});const rec=evidence.get(key);rec.libraries.add(o.owner);if(!rec.targets.has(target))rec.targets.set(target,{target,role,tokens:new Set()});rec.targets.get(target).tokens.add(sp.tokenStart);
  }
 });
 for(const [name,errors]of assetErrors)for(const error of errors)libraries.get(name).parseFailures.push({asset:a.url,error});
}
for(const item of evidence.values())if(item.targets.size>1){const proof=copyProof(item);if(proof)for(const name of item.libraries){const lib=libraries.get(name);if(lib.reasons.filter(p=>p.type===proof.type).length<8)lib.reasons.push(proof);}}
for(const lib of libraries.values()){
 const rows=[...lib.sources.values()].filter(s=>s.functions.size),moduleRows=rows.filter(s=>[...s.assets.values()].includes('module-build-output'));
 const globalBundles=rows.filter(s=>[...s.assets.values()].some(r=>['global-script-list','standalone-vendor-script','external-script'].includes(r))&&s.functions.size>=20&&(s.relative.includes('/dist/')||/^dist\//.test(s.relative)||/\.min\.js$/.test(s.relative)));
 if(globalBundles.length&&moduleRows.some(s=>/^(?:lib|src)\//.test(s.relative))){lib.reasons.push({type:'standalone-distribution-and-module-copy',globalSources:globalBundles.map(s=>({source:s.source,sha256:s.sha256,mappedFunctions:s.functions.size,assets:[...s.assets.keys()]})),moduleSourceExamples:moduleRows.filter(s=>/^(?:lib|src)\//.test(s.relative)).slice(0,4).map(s=>({source:s.source,sha256:s.sha256,assets:[...s.assets.keys()]}))});}
 const versions=new Map();for(const s of rows){const pnpm=s.install.match(/\/\.pnpm\/([^/]+)\/node_modules\//);if(pnpm){const k=s.logical;const set=versions.get(k)||new Set();set.add(versionTag(pnpm[1]));versions.set(k,set);}}
 for(const [logical,v]of versions)if(v.size>1)lib.reasons.push({type:'multiple-installed-package-versions',logical,installations:[...v]});
 lib.status=lib.reasons.length?'duplicated':lib.parseFailures.length?'unassessed':lib.moduleMappedBodyPoints?'unique-observed':'not-observed';
 lib.moduleFunctionCount=lib.moduleFunctions.size;lib.observedFunctionCount=lib.allFunctions.size;lib.sourceFileCount=rows.length;lib.moduleFunctions=undefined;lib.allFunctions=undefined;lib.maps=[...lib.maps];lib.sources=rows.map(s=>({...s,assets:[...s.assets].map(([asset,role])=>({asset,role})),functions:undefined,mappedFunctions:s.functions.size}));
}
const report={provenance:{auditorSHA256,evidenceSHA256,ownerResolverSHA256,captureSHA256:sha(JSON.stringify(record.capture.assets.map(a=>[a.url,a.sha256,a.map?.sha256]))),recordSHA256:sha(fs.readFileSync(plan.record)),scopeSHA256:sha(fs.readFileSync(plan.moduleScope)),manifestSHA256:sha(fs.readFileSync(plan.manifest)),sourceOwnershipSHA256:plan.sourceOwnership&&fs.existsSync(plan.sourceOwnership)?sha(fs.readFileSync(plan.sourceOwnership)):null,exclusionsSHA256:sha(JSON.stringify(plan.excludeLibraries||[])),logicalPackagesSHA256:sha(JSON.stringify(plan.logicalPackages||{}))},schema:'recall.duplicate-library-audit/v1',subject:plan.subject,commit:plan.commit,scope:'all-captured-runtime-assets-including-excluded-global-copies',candidates:[...libraries.values()],mappedOwnBodyPoints:mappedPoints,failures,method:'overlapping original own-body tokens mapped into distinct generated functions; full global distribution plus imported module sources; explicit installed package versions'};
fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n');console.log(plan.subject,JSON.stringify(Object.fromEntries([...libraries].filter(([,v])=>v.status==='duplicated').map(([k,v])=>[k,v.reasons.map(r=>r.type)]))));
