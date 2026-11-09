import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import JSON5 from 'json5';
import yarn from '@yarnpkg/lockfile';
import semver from 'semver';

const cache=new Map();
function yaml(text){return YAML.parseAllDocuments(text).reduce((result,document)=>{if(document.errors.length)throw document.errors[0];const value=document.toJSON();if(!value||typeof value!=='object')return result;return {...result,...value,importers:{...result.importers,...value.importers},packages:{...result.packages,...value.packages},snapshots:{...result.snapshots,...value.snapshots}};},{});}
const read=file=>{if(!cache.has(file)) {const text=fs.readFileSync(file,'utf8');cache.set(file,file.endsWith('.yaml')?yaml(text):file.endsWith('yarn.lock')?(text.includes('__metadata:')?YAML.parse(text):yarn.parse(text).object):file.endsWith('bun.lock')?JSON5.parse(text):JSON.parse(text));}return cache.get(file);};
function unpack(name,raw) {
  if(typeof raw!=='string') return null;
  raw=raw.replace(/^npm:/,'');
  const local=raw.match(/^(?:link|workspace|file):(.+)$/);
  if(local) return {local:local[1]};
  let packageName=name, version=raw.split('(')[0].split('_')[0];
  const named=version.match(/^((?:@[^/]+\/)?[^@]+)@(.+)$/);
  if(named) {packageName=named[1];version=named[2];}
  return semver.valid(version)?{packageName,version}:null;
}
export function resolvePackage(subject,name,specifier) {
  const root=subject.sourceRepo, manifest=subject.manifestRelative, directory=path.dirname(path.join(root,manifest));
  const local=String(specifier).match(/^(?:file:)?(\.\.?\/.*)$/);
  if(local) return {local:path.resolve(directory,local[1]),kind:'local',lockfile:null};
  const priorities=subject.packageManager==='pnpm'?['pnpm-lock.yaml','package-lock.json','yarn.lock','bun.lock']:subject.packageManager==='bun'?['bun.lock','package-lock.json','pnpm-lock.yaml','yarn.lock']:subject.packageManager==='yarn'?['yarn.lock','package-lock.json','pnpm-lock.yaml','bun.lock']:['package-lock.json','npm-shrinkwrap.json','pnpm-lock.yaml','yarn.lock','bun.lock'];
  const directories=[];let current=directory;
  while(current.startsWith(root)){directories.push(current);if(current===root)break;current=path.dirname(current);}
  for(const filename of priorities) for(const parent of directories) {
    const file=path.join(parent,filename);if(!fs.existsSync(file))continue;
    const data=read(file);let resolved=null, integrity=null;
    if(filename==='package-lock.json'||filename==='npm-shrinkwrap.json') {
      const importer=path.relative(parent,directory).replaceAll('\\','/');
      const record=data.packages?.[(importer?importer+'/':'')+'node_modules/'+name]||data.packages?.['node_modules/'+name]||data.dependencies?.[name];
      if(record?.link&&record.resolved) resolved={local:path.resolve(parent,record.resolved)};
      else {resolved=unpack(name,record?.version);integrity=record?.integrity;}
    } else if(filename==='pnpm-lock.yaml') {
      const importer=path.relative(parent,directory).replaceAll('\\','/')||'.';
      const record=data.importers?.[importer]?.dependencies?.[name]||data.dependencies?.[name];
      resolved=unpack(name,typeof record==='string'?record:record?.version);
      if(resolved?.version)integrity=(data.packages?.[`${resolved.packageName}@${resolved.version}`]||data.packages?.[`/${resolved.packageName}@${resolved.version}`]||data.packages?.[`/${resolved.packageName}/${resolved.version}`])?.resolution?.integrity;
      if(resolved?.local)resolved.local=path.resolve(directory,resolved.local);
    } else if(filename==='yarn.lock') {
      const selectors=[`${name}@${specifier}`,`${name}@npm:${specifier}`];
      const entry=Object.entries(data).find(([key])=>key.split(/,\s*/).some(selector=>selectors.includes(selector)));
      if(entry) {resolved=unpack(name,entry[1].version);integrity=entry[1].integrity;}
    } else if(filename==='bun.lock') {
      const raw=data.packages?.[name];
      if(Array.isArray(raw)) {resolved=unpack(name,raw[0]);integrity=raw.find(value=>typeof value==='string'&&/^sha(?:1|256|512)-/.test(value));}
    }
    if(resolved) return {...resolved,integrity,lockfile:path.relative(root,file).replaceAll('\\','/'),kind:resolved.local?'local':'registry'};
  }
  if(String(specifier).startsWith('workspace:')) {
    const found=subject.workspacePackages?.[name];
    if(found)return {local:path.join(root,found),kind:'workspace',lockfile:null};
  }
  const exact=unpack(name,specifier);
  if(exact?.version)return {...exact,kind:'registry',lockfile:null,versionSource:'exact manifest version'};
  throw Error('Exact source-package version unresolved in the pinned lockfiles: '+name+' '+specifier);
}
