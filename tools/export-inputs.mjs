// Export byte-identical inference inputs, preserving URL/import layout. No maps or oracle labels.
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';import {createHash} from 'node:crypto';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),read=p=>JSON.parse(fs.readFileSync(p,'utf8')),sha=b=>createHash('sha256').update(b).digest('hex');
const [subject,destination]=process.argv.slice(2);if(!destination)throw Error('Usage: node tools/export-inputs.mjs SUBJECT OUTPUT');
const index=read(path.join(root,'qualified-dataset/index.json')),entry=index.subjects.find(e=>e.subject===subject);if(!entry)throw Error('Not a final dataset subject');
const directory=path.join(root,'qualified-dataset',subject),record=read(path.join(root,'qualified-dataset',entry.records)),scope=read(path.join(directory,'module-scope.json')),approved=new Set(scope.assets.filter(a=>a.role==='module-build-output').map(a=>JSON.stringify([a.url,a.sha256,a.mapSHA256]))),output=path.resolve(destination);
if(fs.existsSync(output))throw Error('Output already exists; choose a fresh directory');
const bundleRoot=path.join(output,'bundle'),sourceRoot=path.join(output,'reference');fs.mkdirSync(bundleRoot,{recursive:true});fs.mkdirSync(sourceRoot);
function safe(name){return name.replaceAll('\\','/').split('/').filter(p=>p&&p!=='.'&&p!=='..').join('/');}
function place(requested,bytes){let target=requested;if(fs.existsSync(target)&&sha(fs.readFileSync(target))!==sha(bytes))target=requested+'.capture-'+sha(bytes)+'.js';fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,bytes);return target;}
const files=record.capture.assets.filter(a=>approved.has(JSON.stringify([a.url,a.sha256,a.map?.sha256]))).map(a=>{
 const bytes=fs.readFileSync(path.join(directory,'ground-truth',a.localPath));if(sha(bytes)!==a.sha256)throw Error('Captured JS hash mismatch');
 const u=new URL(a.url.startsWith('<local>')?'https://local.capture'+a.url.slice(7):a.url,'https://anonymous.capture'),desired=path.join(bundleRoot,safe(u.host),safe(u.pathname+u.search+u.hash)||a.sha256+'.js'),p=place(desired,bytes);
 const parsed=(a.channels||[]).filter(c=>c.startsWith('parsed:'));const worker=parsed.includes('parsed:service_worker')&&!parsed.includes('parsed:page'),other=parsed.length&&!parsed.includes('parsed:page')&&!worker;const environment=worker?'service-worker:'+u.host:other?'isolated-target:'+sha(a.url).slice(0,16):'main';
 return {id:a.url+'#'+a.sha256,path:p,environment,runtimeGroup:'captured:'+environment,...(p!==desired?{aliasPaths:[desired]}:{})};
});
const references=[],identities=new Map();let identicalReferenceCopies=0;
for(const f of read(path.join(directory,'reference-manifest.json')).files){
 const bytes=fs.readFileSync(path.join(directory,f.path));if(sha(bytes)!==f.sha256)throw Error('Reference hash mismatch');
 const key=JSON.stringify([f.library.name,f.library.version,f.sha256]),packageRoot=path.join(sourceRoot,safe(f.library.name)),desired=path.join(packageRoot,safe(f.relative)||f.sha256+'.js'),p=place(desired,bytes);
 if(identities.has(key)){const prior=identities.get(key);prior.aliasPaths=[...new Set([...(prior.aliasPaths||[]),desired,p].filter(p=>p!==prior.path))];identicalReferenceCopies++;continue;}
 const unit={id:'reference:'+sha(key),path:p,library:f.library,packageRoot,...(p!==desired?{aliasPaths:[desired]}:{})};identities.set(key,unit);references.push(unit);
}
for(const [name,value] of [['bundle.json',{roots:[bundleRoot],files}],['source.json',{roots:[sourceRoot],files:references}],['known-reference-config.json',{bundler:{hint:subject.split('/')[0]},recovery:{libraryGate:false}}]])fs.writeFileSync(path.join(output,name),JSON.stringify(value,null,2)+'\n');
const summary={subject,capturedInputs:files.length,referenceFiles:references.length,identicalReferenceCopies,output,policy:'Only reviewed module outputs. Raw reference text may contain TypeScript/JSX; retain preparation diagnostics and original-ID mappings. Identical reference files within a library/version are canonicalized with aliases. No source maps or oracle labels exported.'};fs.writeFileSync(path.join(output,'export-summary.json'),JSON.stringify(summary,null,2)+'\n');console.log(JSON.stringify(summary));
