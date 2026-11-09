import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {resolvePackage} from './locks.mjs';
import {inspectFiles,implementationFiles,sha} from './functions.mjs';

const base=path.dirname(fileURLToPath(import.meta.url));
const read=file=>JSON.parse(fs.readFileSync(file,'utf8'));
const policy=read(path.join(base,'policy.json'));
const plan=read(path.join(base,'plan.json'));
const cache=path.join(base,'work/package-cache');fs.mkdirSync(cache,{recursive:true});
const lock=path.join(base,'work/preflight.lock');
while(true) {
  try {const descriptor=fs.openSync(lock,'wx');fs.writeFileSync(descriptor,String(process.pid));fs.closeSync(descriptor);break;}
  catch(error) {
    if(error.code!=='EEXIST')throw error;
    let alive=true;try{process.kill(Number(fs.readFileSync(lock,'utf8')),0);}catch{alive=false;}
    if(!alive){try{fs.unlinkSync(lock);}catch{}continue;}
    await new Promise(resolve=>setTimeout(resolve,500));
  }
}
process.on('exit',()=>{try{if(fs.readFileSync(lock,'utf8')===String(process.pid))fs.unlinkSync(lock);}catch{}});
const codeHashes=Object.fromEntries(['preflight.mjs','locks.mjs','functions.mjs','policy.json','selection-overrides.json'].map(name=>[name,sha(fs.readFileSync(path.join(base,name)))]));
const codeDigest=sha(JSON.stringify(codeHashes));
const runtime=path.join(base,'../initial-anchors-3/runtime');
for(const [file,digest] of Object.entries(read(path.join(runtime,'hashes.json'))))if(sha(fs.readFileSync(path.join(runtime,file)))!==digest)throw Error('Frozen POG runtime changed: '+file);
function publish(subject) {
  const destination=path.join(base,'results',subject.subject);fs.mkdirSync(destination,{recursive:true});
  for(const file of ['qualification.json','frontend-package.json'])fs.copyFileSync(path.join(subject.output,file),path.join(destination,file));
  for(const folder of ['libraries','lockfiles'])if(fs.existsSync(path.join(subject.output,folder)))fs.cpSync(path.join(subject.output,folder),path.join(destination,folder),{recursive:true});
}
function extractTar(archive,directory,strip=true) {
  fs.mkdirSync(directory,{recursive:true});
  const script=`import pathlib,tarfile,sys\nroot=pathlib.Path(sys.argv[2]);strip=sys.argv[3]=='1'\nwith tarfile.open(sys.argv[1]) as archive:\n for member in archive:\n  parts=pathlib.PurePosixPath(member.name).parts\n  if strip:parts=parts[1:]\n  if not parts or '..' in parts or not member.isfile():continue\n  name=parts[-1]\n  if not (name.endswith(('.js','.mjs','.cjs','.jsx','.ts','.tsx')) or name=='package.json' or name.lower().startswith(('license','copying','notice'))):continue\n  dest=root.joinpath(*parts);dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(archive.extractfile(member).read())\n`;
  execFileSync('python3',['-c',script,archive,directory,strip?'1':'0'],{timeout:180000,maxBuffer:1024*1024});
}
function workspaceDirectory(subject,name) {
  if(!subject.workspacePackages) {
    subject.workspacePackages={};
    const files=execFileSync('git',['-C',subject.sourceRepo,'ls-tree','-r','--name-only',subject.commit],{encoding:'utf8',maxBuffer:32*1024*1024}).split('\n').filter(file=>file.endsWith('/package.json'));
    for(const file of files)try {const p=JSON.parse(fs.readFileSync(path.join(subject.sourceRepo,file),'utf8'));if(p.name)subject.workspacePackages[p.name]=path.dirname(file);}catch{}
  }
  return subject.workspacePackages[name];
}
function packageSource(subject,name,specifier) {
  if(String(specifier).startsWith('workspace:'))workspaceDirectory(subject,name);
  let resolved=resolvePackage(subject,name,specifier);
  const alias=String(specifier).match(/^npm:((?:@[^/]+\/)?[^@]+)@/);
  if(alias&&resolved.version)resolved.packageName=alias[1];
  let identity,archive,origin;
  if(resolved.local) {
    const local=path.resolve(subject.sourceRepo,resolved.local), relative=path.relative(subject.sourceRepo,local).replaceAll('\\','/');
    if(relative.startsWith('../'))throw Error('Local dependency escapes pinned repository');
    identity=sha(JSON.stringify([subject.commit,relative]));
    const directory=path.join(cache,identity,'package');
    if(!fs.existsSync(path.join(directory,'package.json'))) {
      fs.mkdirSync(path.dirname(directory),{recursive:true});archive=path.join(cache,identity,'source.tar');
      if(/\.(?:tgz|tar\.gz)$/.test(relative)) {
        fs.writeFileSync(archive,execFileSync('git',['-C',subject.sourceRepo,'show',subject.commit+':'+relative],{maxBuffer:256*1024*1024}));extractTar(archive,directory,true);
      } else {
        fs.writeFileSync(archive,execFileSync('git',['-C',subject.sourceRepo,'archive',subject.commit,relative],{maxBuffer:256*1024*1024}));
        const temp=path.join(cache,identity,'checkout');extractTar(archive,temp,false);fs.renameSync(path.join(temp,relative),directory);
      }
    }
    const metadata=read(path.join(directory,'package.json'));
    return {directory,identity,origin:{kind:'pinned-repository-source',commit:subject.commit,path:relative,packageName:metadata.name,version:metadata.version||null,lockfile:resolved.lockfile}};
  }
  identity=sha(JSON.stringify([resolved.packageName,resolved.version]));
  const folder=path.join(cache,identity),directory=path.join(folder,'package'),receipt=path.join(folder,'package-origin.json');
  fs.mkdirSync(folder,{recursive:true});
  if(!fs.existsSync(receipt)||!fs.existsSync(path.join(directory,'package.json'))) {
    const output=execFileSync('npm',['pack',resolved.packageName+'@'+resolved.version,'--json','--ignore-scripts','--pack-destination',folder],{encoding:'utf8',timeout:240000,maxBuffer:64*1024*1024,env:{...process.env,npm_config_fetch_retries:'3',npm_config_fetch_timeout:'60000'}});
    const pack=JSON.parse(output)[0];archive=path.join(folder,path.basename(pack.filename));const bytes=fs.readFileSync(archive);
    if(resolved.integrity) {
      const [algorithm,digest]=resolved.integrity.split('-',2);
      if(crypto.createHash(algorithm).update(bytes).digest('base64')!==digest)throw Error('Package tarball does not match pinned lockfile integrity');
    }
    extractTar(archive,directory,true);
    fs.writeFileSync(receipt,JSON.stringify({kind:'npm-package',name:pack.name,version:pack.version,integrity:pack.integrity,shasum:pack.shasum,tarballSHA256:sha(bytes),bytes:bytes.length},null,2)+'\n');
  }
  origin={...read(receipt),lockfile:resolved.lockfile};
  if(origin.name!==resolved.packageName||origin.version!==resolved.version)throw Error('Package identity mismatch');
  return {directory,identity,origin};
}
function capturedSource(subject,name) {
  const dataset=path.resolve(base,'../..'),directory=path.join(dataset,'qualified-dataset',subject.subject),manifest=path.join(directory,'reference-manifest.json');
  if(!subject.pageVerified||!fs.existsSync(manifest))throw Error('No independently verified source snapshot fallback');
  const entry=read(path.join(dataset,'qualified-dataset/index.json')).subjects.find(row=>row.subject===subject.subject);
  if(!entry||entry.commit!==subject.commit)throw Error('Source snapshot commit mismatch');
  const refs=read(manifest).files.filter(file=>file.library.name===name);
  if(!refs.length)throw Error('No source snapshot for '+name);
  const files=refs.map(file=>{const input=path.join(directory,file.path);if(sha(fs.readFileSync(input))!==file.sha256)throw Error('Source snapshot hash mismatch');return {path:input,relative:file.relative||file.path};});
  return {directory,files,identity:sha(JSON.stringify([subject.subject,subject.commit,name,refs.map(file=>file.sha256)])),origin:{kind:'independently-captured-source-snapshot',library:name,version:'captured-source-snapshot',commit:subject.commit,referenceManifestSHA256:sha(fs.readFileSync(manifest)),archiveRecord:subject.record?path.relative(dataset,subject.record):null}};
}
for(const subject of plan) {
  if(process.env.RECALL_ONLY&&subject.subject!==process.env.RECALL_ONLY)continue;
  if(!subject.manifest)continue;
  const override=subject.selectionOverride||{}, excluded=new Set(override.excludeLibraries||[]);
  const manifest=read(subject.manifest),candidates=Object.keys(manifest.dependencies||{}).filter(name=>!excluded.has(name)).sort();
  const output=subject.output;fs.mkdirSync(output,{recursive:true});
  const resultFile=path.join(output,'qualification.json');
  if(fs.existsSync(resultFile)) {const prior=read(resultFile);if(prior.finished&&prior.status!=='insufficient-evidence'&&prior.provenance?.codeDigest===codeDigest&&prior.provenance?.frontendManifestSHA256===sha(fs.readFileSync(subject.manifest))&&prior.commit===subject.commit&&!process.env.RECALL_RECHECK){publish(subject);continue;}}
  const result={schema:'recall.source-function-eligibility/v1',subject:subject.subject,repo:subject.repo,commit:subject.commit,policy,selectionOverride:override,candidates,libraries:[],selectedLibraries:[],status:'not-qualified',provenance:{codeDigest,codeHashes,frontendManifestSHA256:sha(fs.readFileSync(subject.manifest)),manifestRelative:subject.manifestRelative,runtimeSnapshotSHA256:sha(fs.readFileSync(path.join(base,'../initial-anchors-3/runtime/hashes.json')))},started:new Date().toISOString()};
  const write=()=>fs.writeFileSync(resultFile,JSON.stringify(result,null,2)+'\n');
  if(candidates.length<policy.minLibrariesPerRepository) {result.reason='fewer-than-three-declared-production-dependencies';result.finished=new Date().toISOString();write();publish(subject);console.log(subject.subject,result.status,candidates.length,'declared candidates');continue;}
  const order=[...new Set([...(override.preferredLibraries||[]).filter(name=>candidates.includes(name)),...subject.previousSelected.filter(name=>candidates.includes(name)),...candidates])];
  for(const name of order) {
    if(result.selectedLibraries.length>=policy.maxLibrariesPerRepository)break;
    console.log('Checking',subject.subject,name);
    try {
      let source;
      try{source=packageSource(subject,name,manifest.dependencies[name]);}catch(error){try{source=capturedSource(subject,name);source.origin.packageResolutionError=String(error);}catch(fallback){throw Error(String(error)+'; '+String(fallback));}}
      let analysisDir=path.join(cache,source.identity,'analysis-'+codeDigest.slice(0,16));
      const analysisFile=path.join(analysisDir,'functions.json');let analysis;
      if(fs.existsSync(analysisFile))analysis=read(analysisFile);
      else {analysis=inspectFiles(source.files||implementationFiles(source.directory),policy,analysisDir);fs.writeFileSync(analysisFile,JSON.stringify(analysis,null,2)+'\n');}
      if(!analysis.qualified)try{
        const snapshot=capturedSource(subject,name),fallbackDir=path.join(cache,snapshot.identity,'analysis-'+codeDigest.slice(0,16));
        const fallbackFile=path.join(fallbackDir,'functions.json');const fallback=fs.existsSync(fallbackFile)?read(fallbackFile):inspectFiles(snapshot.files,policy,fallbackDir);
        fs.writeFileSync(fallbackFile,JSON.stringify(fallback,null,2)+'\n');if(fallback.qualified){source=snapshot;analysis=fallback;analysisDir=fallbackDir;}
      }catch{}
      const proof=path.join(output,'libraries',sha(name).slice(0,20));fs.mkdirSync(proof,{recursive:true});
      for(const witness of analysis.witnesses) {const target=path.join(proof,witness.source);fs.mkdirSync(path.dirname(target),{recursive:true});if(!fs.existsSync(target))fs.copyFileSync(path.join(analysisDir,witness.source),target);}
      const library={library:name,declaredVersion:manifest.dependencies[name],origin:source.origin,...analysis,proofDirectory:path.relative(output,proof)};
      if(!source.files)fs.copyFileSync(path.join(source.directory,'package.json'),path.join(proof,'package.json'));
      fs.writeFileSync(path.join(proof,'source-origin.json'),JSON.stringify(source.origin,null,2)+'\n');
      library.licenses=[];
      for(const file of fs.readdirSync(source.directory))if(/^(?:license|copying|notice)(?:\.|$)/i.test(file)&&fs.statSync(path.join(source.directory,file)).isFile()) {
        const target=path.join(proof,'licenses',file);fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(path.join(source.directory,file),target);library.licenses.push({path:'licenses/'+file,sha256:sha(fs.readFileSync(target))});
      }
      if(source.origin.lockfile){
        const bytes=fs.readFileSync(path.join(subject.sourceRepo,source.origin.lockfile));library.lockfileSHA256=sha(bytes);library.lockfileSnapshot='lockfiles/'+sha(bytes)+'-'+path.basename(source.origin.lockfile);fs.mkdirSync(path.join(output,'lockfiles'),{recursive:true});fs.writeFileSync(path.join(output,library.lockfileSnapshot),bytes);
      }
      fs.writeFileSync(path.join(proof,'functions.json'),JSON.stringify(library,null,2)+'\n');result.libraries.push(library);
      if(analysis.qualified)result.selectedLibraries.push(name);
      console.log('Source functions',name,analysis.eligibleFunctionLowerBound,analysis.qualified?'qualified':'insufficient verified functions');
    } catch(error) {result.libraries.push({library:name,declaredVersion:manifest.dependencies[name],qualified:null,status:'unassessed',error:String(error)});console.log('Unassessed',name,String(error).slice(0,180));}
    write();
  }
  result.status=result.selectedLibraries.length>=policy.minLibrariesPerRepository?'passed':result.libraries.some(row=>row.qualified===null)?'insufficient-evidence':'not-qualified';
  result.reason=result.status==='passed'?null:'fewer-than-three-verified-source-eligible-production-libraries';result.finished=new Date().toISOString();write();publish(subject);
  console.log('PREFLIGHT',subject.subject,result.status,result.selectedLibraries.length);
}
