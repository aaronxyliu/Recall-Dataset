import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {enumerate,measure} from '../initial-anchors-3/runtime/src/analysis/measure.mjs';

export const sha = value => crypto.createHash('sha256').update(value).digest('hex');
export function normalizedFunction(node, name) {
  const clean = value => {
    if (typeof value === 'bigint') return {bigint:String(value)};
    if (!value || typeof value !== 'object') return value;
    if (Array.isArray(value)) return value.map(clean);
    return Object.fromEntries(Object.keys(value).sort().filter(key => !['loc','range','start','end','raw','comments','tokens'].includes(key)).map(key => [key,clean(value[key])]));
  };
  return sha(JSON.stringify({name:name || '<anonymous>',node:clean(node)}));
}
export function inspectFiles(files, policy, directory) {
  fs.mkdirSync(path.join(directory,'source-js'),{recursive:true});
  const witnesses=[], identities=new Set(), diagnostics=[];
  let parsedFiles=0, parsedFunctions=0;
  for (const file of files) {
    const code=fs.readFileSync(file.path,'utf8');
    if (!/function|=>/.test(code)) continue;
    let parsed;
    try {parsed=enumerate(code); parsedFiles++;} catch(error) {diagnostics.push({file:file.relative,error:String(error)});continue;}
    for (const fn of parsed.functions) {
      parsedFunctions++;
      const features=measure(fn.node);
      if (!features.pogHash || features.extractionStatus!=='ok' || features[policy.featureMetric]<policy.minFeatures) continue;
      const identity=normalizedFunction(fn.node,fn.name);
      if (identities.has(identity)) continue;
      identities.add(identity);
      const sourceHash=sha(code), local='source-js/'+sourceHash+'.js';
      if (!fs.existsSync(path.join(directory,local))) fs.writeFileSync(path.join(directory,local),code);
      witnesses.push({file:file.relative,source:local,sourceSHA256:sourceHash,span:fn.node.range,name:fn.name,normalizedASTSHA256:identity,codeSHA256:sha(code.slice(...fn.node.range)),features});
      if (witnesses.length>=policy.minFunctionsPerLibrary) return {qualified:true,eligibleFunctionLowerBound:witnesses.length,completeScan:false,parsedFiles,parsedFunctions,diagnostics,witnesses};
    }
  }
  return {qualified:false,eligibleFunctionLowerBound:witnesses.length,completeScan:true,parsedFiles,parsedFunctions,diagnostics,witnesses};
}
export function implementationFiles(root) {
  const files=[];
  function walk(directory) {
    for (const item of fs.readdirSync(directory,{withFileTypes:true})) {
      if (item.isSymbolicLink()) continue;
      const full=path.join(directory,item.name), relative=path.relative(root,full).replaceAll('\\','/');
      if (item.isDirectory()) {
        if (!/^(?:node_modules|\.git|tests?|__tests__|fixtures?|__fixtures__|examples?|demos?|benchmarks?|coverage|docs?)$/i.test(item.name)) walk(full);
      } else if (/\.(?:[cm]?js|jsx|tsx?)$/i.test(item.name) && !/\.d\.(?:[cm]?ts|tsx)$|(?:^|[.-])(?:test|spec)\.[cm]?[jt]sx?$/i.test(item.name)) files.push({path:full,relative});
    }
  }
  walk(root);
  const score=file=>/\.min\./.test(file.relative)?4:/^(?:src|source)\//.test(file.relative)?0:/^(?:lib|es|esm)\//.test(file.relative)?1:2;
  return files.sort((a,b)=>score(a)-score(b)||a.relative.localeCompare(b.relative));
}
