// Input preparation is complete before matching. Matching receives code inventories only.
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';import {createRequire} from 'node:module';
import {extractFeatures,identifyAnchors} from './runtime/components/pog/index.mjs';
import {anchorCounter,findFeasibleFive} from './selection.mjs';
import {inventoryDigest} from './runtime/src/shared/artifacts.mjs';
const here=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(here,'../..');
const require=createRequire(path.resolve(root,'verification/hufang-builds-2026-11-08/collector/package.json'));const {SourceMapConsumer}=require('source-map');
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const [recordFile,manifestFile,outputDir]=process.argv.slice(2);if(!outputDir)throw Error('Usage: anchors.mjs RECORD MANIFEST OUTPUT');fs.mkdirSync(outputDir,{recursive:true});
const gt=read(recordFile),base=path.dirname(recordFile),manifest=read(manifestFile),candidates=Object.keys(manifest.dependencies||{}).sort();
const selectedBefore=gt.selectedLibraries||gt.selection?.selected||[];const options={minFeatures:10,featureMetric:'propertyOperations',minAnchors:3,uniqueBundle:true};
const result={schema:'recall.dataset-anchor-qualification/v1',policy:{candidateField:'dependencies',minInitialAnchors:3,minLibraries:5,maxLibraries:10,counting:'distinct source functions before propagation; repeated target copies count once',options},provenance:{groundTruthSHA256:sha(fs.readFileSync(recordFile)),manifestSHA256:sha(fs.readFileSync(manifestFile)),qualificationRunnerSHA256:sha(fs.readFileSync(fileURLToPath(import.meta.url))),selectionSHA256:sha(fs.readFileSync(path.join(here,'selection.mjs'))),matcherSHA256:sha(fs.readFileSync(path.join(here,'runtime/components/pog/index.mjs'))),referenceMode:'all available source-reference snapshots, not full installed package distributions'},candidates,excludedPreviouslySelected:selectedBefore.filter(n=>!candidates.includes(n)),libraries:[],selectedLibraries:[],status:'excluded'};
const finish=()=>{fs.writeFileSync(path.join(outputDir,'qualification.json'),JSON.stringify(result,null,2)+'\n');console.log(result.status,result.selectedLibraries.length,result.reason||'')};
if(candidates.length<5){result.reason='fewer-than-five-declared-production-dependencies';result.libraries=candidates.map(library=>({library,initialAnchors:null,status:'not-computed: repository cannot reach five candidates'}));finish();process.exit(0)}
const refs=new Map(),aliases=new Map(),bundles=new Map(),wanted=new Set(candidates),referenceFailures=[];
for(const asset of gt.capture.assets){
 const file=path.resolve(base,asset.localPath||'runtime-js/'+asset.sha256+'.js'),code=fs.readFileSync(file,'utf8');if(sha(code)!==asset.sha256)throw Error('Script hash mismatch');
 const identity=asset.url+'#'+asset.sha256;bundles.set(identity,{id:'b-'+sha(identity),path:file,code,environment:asset.channels?.some(c=>/worker/.test(c))?'worker':'main'});
 if(asset.map?.status!=='map-found')continue;
 const mf=path.resolve(base,asset.map.localPath||'source-maps/'+asset.map.sha256+'.map'),bytes=fs.readFileSync(mf);if(sha(bytes)!==asset.map.sha256)throw Error('Map hash mismatch');
 let consumer;try{const parsed=JSON.parse(bytes.toString().replace(/^\)\]\}'[^\n]*\n/,''));if(parsed.x_recall_identity_map)continue;consumer=new SourceMapConsumer(parsed)}catch(e){referenceFailures.push({asset:identity,error:String(e)});continue}
 for(const source of consumer.sources){
  const normalized=source.replaceAll('\\','/'),owner=[...normalized.matchAll(/(?:^|\/)(?:node_modules|~)\/((?:@[^/]+\/)?[^/]+)/g)].at(-1),library=owner?.[1];if(!wanted.has(library))continue;
  const text=consumer.sourceContentFor(source,true);if(text==null){referenceFailures.push({source,error:'missing source text'});continue}
  const relative=normalized.slice(owner.index+owner[0].length).replace(/^\//,'')||path.basename(source),key=JSON.stringify([library,relative,sha(text)]),id='s-'+sha(key);
  if(!refs.has(key)){const target=path.join(outputDir,'reference-js',sha(key)+'.js');fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,text);refs.set(key,{id,path:target,code:text,library:{name:library,version:'captured-source-snapshot'},relative,sha256:sha(text)})}
  aliases.set(source+'#'+sha(text),id);
 }
}
result.referenceFailures=referenceFailures;result.referenceFiles=refs.size;result.bundleUnits=bundles.size;
const sourceFiles=[...refs.values()];const referencedLibraries=new Set(sourceFiles.map(s=>s.library.name));
if(referencedLibraries.size<5){result.reason='fewer-than-five-production-libraries-have-supplied-reference-text';result.libraries=candidates.map(library=>({library,initialAnchors:referencedLibraries.has(library)?null:0,sourceFiles:sourceFiles.filter(s=>s.library.name===library).length,status:referencedLibraries.has(library)?'not-computed: repository cannot reach five supplied libraries':'no supplied source-reference text'}));finish();process.exit(0)}
console.log('extract source',sourceFiles.length,'bundle',bundles.size);
const source=extractFeatures({files:sourceFiles}),bundle=extractFeatures({files:[...bundles.values()]});const sf=new Map(source.functions.map(f=>[f.id,f]));
const subset=names=>{const chosen=new Set(names),filtered={...source,units:source.units.filter(u=>chosen.has(u.library?.name)),functions:source.functions.filter(f=>chosen.has(f.library?.name))};filtered.inputDigest=inventoryDigest(filtered);return filtered};
const inspect=names=>{const filtered=subset(names),anchors=identifyAnchors(filtered,bundle,options),sets=new Map(names.map(n=>[n,new Set()]));for(const m of anchors.matches)sets.get(sf.get(m.sourceId).library.name).add(m.sourceId);return {filtered,anchors,sets}};
const counter=anchorCounter(source,bundle,options,candidates);
const existing=[...new Set(selectedBefore.filter(n=>wanted.has(n)&&referencedLibraries.has(n)))].slice(0,10);
const initial=existing.length?inspect(existing):null;let retained=existing.filter(n=>initial.sets.get(n).size>=3);
if(initial)for(const [name,count] of counter.counts(existing))if(count!==initial.sets.get(name).size)throw Error('Trial counter disagrees with canonical matcher');
const attempts=new Map(existing.map(n=>[n,{library:n,initialAnchors:initial.sets.get(n).size,trialLibraries:existing,qualified:initial.sets.get(n).size>=3,status:initial.sets.get(n).size>=3?'retained-existing':'retry-after-removing-unqualified'}]));
const order=[...existing.filter(n=>!retained.includes(n)),...candidates.filter(n=>!existing.includes(n))];result.candidateOrder=[...retained,...order];result.selectionAttempts=[];
function tryCandidate(name,phase){
 if(!referencedLibraries.has(name)){attempts.set(name,{library:name,initialAnchors:0,qualified:false,status:'no supplied source-reference text'});return}
 const names=[...retained,name],counts=counter.counts(names),count=counts.get(name),conflicts=retained.filter(n=>counts.get(n)<3),accepted=count>=3&&!conflicts.length;
 const attempt={library:name,initialAnchors:count,trialLibraries:names,qualified:accepted,status:accepted?'accepted-replacement':count<3?'fewer-than-three-initial-anchors':'would-undercut-retained-library-anchors',conflicts,phase};attempts.set(name,attempt);result.selectionAttempts.push(attempt);if(accepted)retained.push(name);
}
for(const name of order){if(retained.length>=10)break;tryCandidate(name,'replacement')}
if(retained.length<5){
 const searchOrder=[...candidates].sort((a,b)=>counter.potentialCounts.get(b)-counter.potentialCounts.get(a)||a.localeCompare(b));const search=findFeasibleFive(searchOrder,counter);result.compatibilitySearch=search;
 if(search.libraries){
  retained=[...search.libraries];const counts=counter.counts(retained);for(const name of retained)attempts.set(name,{library:name,initialAnchors:counts.get(name),trialLibraries:[...retained],qualified:true,status:'accepted-by-five-library-fallback'});
  for(const name of [...new Set([...existing,...candidates])]){if(retained.length>=10)break;if(!retained.includes(name))tryCandidate(name,'fallback-fill')}
 }
}
result.libraries=candidates.map(library=>({...attempts.get(library)||{library,initialAnchors:null,qualified:null,status:'not needed: ten qualifying libraries already selected'},referenceFunctions:source.functions.filter(f=>f.library.name===library).length,sourceFiles:sourceFiles.filter(s=>s.library.name===library).length}));
result.selectedLibraries=retained;result.sourceDiagnostics=source.diagnostics;result.bundleDiagnostics=bundle.diagnostics;result.sourceDigest=source.inputDigest;result.bundleDigest=bundle.inputDigest;
result.selectionPolicy='Keep qualifying existing production libraries; scan remaining production candidates in deterministic order. Accept a candidate only when it has three distinct initial anchors and every retained library keeps three. Stop at ten, or exhaust all candidates. If that scan cannot retain five, an exact monotone-pruned search tests whether any five-library subset is compatible, then fills toward ten from a found subset.';
if(retained.length<5){result.reason='no-compatible-five-library-subset-meets-three-initial-anchors';result.selectedLibraries=[];finish();process.exit(0)}
const chosen=new Set(retained),final=inspect(retained),filtered=final.filtered,finalAnchors=final.anchors,finalSets=final.sets;
for(const name of chosen){if(finalSets.get(name).size!==counter.counts(retained).get(name))throw Error('Final counter disagrees with canonical matcher');if(finalSets.get(name).size<3)throw Error('Final selected pool lost required anchors');result.libraries.find(l=>l.library===name).finalInitialAnchors=finalSets.get(name).size}
result.finalSourceDigest=filtered.inputDigest;result.status='included';result.reason=null;
fs.writeFileSync(path.join(outputDir,'initial-anchors.json'),JSON.stringify({...finalAnchors,counting:result.policy.counting,libraries:[...finalSets].map(([library,ids])=>({library,count:ids.size,sourceIds:[...ids]}))},null,2)+'\n');
fs.writeFileSync(path.join(outputDir,'reference-manifest.json'),JSON.stringify({files:sourceFiles.filter(s=>chosen.has(s.library.name)).map(({code,...s})=>({...s,path:path.relative(outputDir,s.path)}))},null,2)+'\n');finish();
