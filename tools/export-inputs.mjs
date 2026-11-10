// Export captured bundle bytes plus independently supplied source packages. Never export map-derived dataset references.
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';import {createHash} from 'node:crypto';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),read=p=>JSON.parse(fs.readFileSync(p,'utf8')),sha=b=>createHash('sha256').update(b).digest('hex');
const [subject,destination,flag,referencesDirectory]=process.argv.slice(2);if(!destination||flag!=='--references'||!referencesDirectory)throw Error('Usage: node tools/export-inputs.mjs SUBJECT OUTPUT --references INDEPENDENT_PACKAGE_DIRECTORY. Dataset reference snapshots are not permitted for new recovery runs.');
const index=read(path.join(root,'qualified-dataset/index.json')),entry=index.subjects.find(e=>e.subject===subject);if(!entry)throw Error('Not a final dataset subject');
const directory=path.join(root,'qualified-dataset',subject),record=read(path.join(root,'qualified-dataset',entry.records)),scope=read(path.join(directory,'module-scope.json')),approved=new Set(scope.assets.filter(a=>a.role==='module-build-output').map(a=>JSON.stringify([a.url,a.sha256]))),output=path.resolve(destination);
if(fs.existsSync(output))throw Error('Output already exists; choose a fresh directory');
const bundleRoot=path.join(output,'bundle'),sourceRoot=path.join(output,'reference');fs.mkdirSync(bundleRoot,{recursive:true});fs.mkdirSync(sourceRoot);
function safe(name){return name.replaceAll('\\','/').split('/').filter(p=>p&&p!=='.'&&p!=='..').join('/');}
function place(requested,bytes){let target=requested;if(fs.existsSync(target)&&sha(fs.readFileSync(target))!==sha(bytes))target=requested+'.capture-'+sha(bytes)+'.js';fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,bytes);return target;}
const files=record.capture.assets.filter(a=>approved.has(JSON.stringify([a.url,a.sha256]))).map(a=>{
 const bytes=fs.readFileSync(path.join(directory,'ground-truth',a.localPath));if(sha(bytes)!==a.sha256)throw Error('Captured JS hash mismatch');
 const u=new URL(a.url.startsWith('<local>')?'https://local.capture'+a.url.slice(7):a.url,'https://anonymous.capture'),desired=path.join(bundleRoot,safe(u.host),safe(u.pathname+u.search+u.hash)||a.sha256+'.js'),p=place(desired,bytes);
 const parsed=(a.channels||[]).filter(c=>c.startsWith('parsed:'));const worker=parsed.includes('parsed:service_worker')&&!parsed.includes('parsed:page'),other=parsed.length&&!parsed.includes('parsed:page')&&!worker;const environment=worker?'service-worker:'+u.host:other?'isolated-target:'+sha(a.url).slice(0,16):'main';
 return {id:a.url+'#'+a.sha256,path:p,environment,runtimeGroup:'captured:'+environment,...(p!==desired?{aliasPaths:[desired]}:{})};
});
const references=[],packageRoots=[],independentRoot=fs.realpathSync(referencesDirectory);
function packages(dir){
 const descriptor=path.join(dir,'package.json');
 if(fs.existsSync(descriptor)){
  const pkg=read(descriptor);if(!pkg.name||!pkg.version)throw Error('Independent reference package needs name/version: '+dir);
  const library={name:pkg.name,version:pkg.version},packageRoot=path.join(sourceRoot,sha(path.relative(independentRoot,dir)).slice(0,20));packageRoots.push(packageRoot);
  const packageInfo=Object.fromEntries(['name','version','main','module','exports','imports'].filter(k=>Object.hasOwn(pkg,k)).map(k=>[k,pkg[k]]));
  fs.mkdirSync(packageRoot,{recursive:true});fs.writeFileSync(path.join(packageRoot,'package.json'),JSON.stringify(packageInfo,null,2));
  function sources(folder){for(const entry of fs.readdirSync(folder,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))){
   if(entry.name.startsWith('.')||entry.name==='node_modules')continue;
   const file=path.join(folder,entry.name);
   if(entry.isDirectory()){const nested=path.join(file,'package.json');if(fs.existsSync(nested)&&read(nested).name)continue;sources(file)}
   else if(entry.isFile()&&/\.(?:js|mjs|cjs|ts|mts|cts|tsx|jsx)$/i.test(entry.name)&&!/\.d\.(?:ts|mts|cts)$/i.test(entry.name)){
    const relative=path.relative(dir,file),bytes=fs.readFileSync(file),target=place(path.join(packageRoot,relative),bytes);
    references.push({id:'reference:'+sha(JSON.stringify([path.relative(independentRoot,dir),library,relative,sha(bytes)])),path:target,library,packageRoot,packageInfo});
   }
  }}sources(dir);return;
 }
 for(const e of fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name)))if(e.isDirectory()&&!e.name.startsWith('.')&&e.name!=='node_modules')packages(path.join(dir,e.name));
}
packages(independentRoot);if(!references.length)throw Error('No independent source implementations found');
for(const [name,value] of [['bundle.json',{roots:[bundleRoot],files}],['source.json',{roots:packageRoots,files:references,referenceOrigin:'independent-package-directory'}],['known-reference-config.json',{bundler:{hint:subject.split('/')[0]},recovery:{libraryGate:false}}]])fs.writeFileSync(path.join(output,name),JSON.stringify(value,null,2)+'\n');
const summary={subject,capturedInputs:files.length,referenceFiles:references.length,referenceOrigin:'independent-package-directory',referenceDirectory:independentRoot,output,policy:'Reviewed module outputs with the full bundle graph; independent source packages isolated by package root/name/version. No source-map metadata, extracted source snapshots, or oracle labels exported.'};fs.writeFileSync(path.join(output,'export-summary.json'),JSON.stringify(summary,null,2)+'\n');console.log(JSON.stringify(summary));
