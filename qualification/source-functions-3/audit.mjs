import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {enumerate,measure} from '../initial-anchors-3/runtime/src/analysis/measure.mjs';
import {normalizedFunction,sha} from './functions.mjs';
const base=path.dirname(fileURLToPath(import.meta.url)),dataset=path.resolve(base,'../../qualified-dataset');
const read=file=>JSON.parse(fs.readFileSync(file,'utf8')),index=read(path.join(dataset,'index.json')),policy=read(path.join(base,'policy.json'));
const exclusions=read(path.join(base,'excluded-subjects.json'));assert(index.subjects.every(entry=>!Object.hasOwn(exclusions,entry.subject)));
assert.deepEqual(index.policy,policy);assert.equal(policy.requireInitialAnchors,false);
const modulePolicy=read(path.join(base,'../module-dependencies/policy.json'));assert.deepEqual(index.correspondencePolicy,modulePolicy);
const duplicatePolicy=read(path.join(base,'../no-duplicate-libraries/policy.json'));assert.deepEqual(index.libraryMultiplicityPolicy,duplicatePolicy);
const featureCache=new Map();let libraries=0,witnesses=0,pairs=0,zeroPairLibraries=0;
for(const entry of index.subjects) {
  const directory=path.join(dataset,entry.subject),qualification=read(path.join(directory,'qualification.json')),selected=new Set(entry.selectedLibraries),manifest=read(path.join(directory,'frontend-package.json'));
  assert(selected.size>=policy.minLibrariesPerRepository&&selected.size<=policy.maxLibrariesPerRepository);assert.equal(selected.size,entry.libraryCount);
  assert.deepEqual(qualification.policy,policy);assert.deepEqual(qualification.selectedLibraries,entry.selectedLibraries);
  assert.equal(sha(fs.readFileSync(path.join(directory,'frontend-package.json'))),qualification.provenance.frontendManifestSHA256);
  for(const [file,digest] of Object.entries(qualification.provenance.codeHashes))assert.equal(sha(fs.readFileSync(path.join(base,file))),digest);
  for(const library of qualification.libraries) {
    assert(selected.has(library.library));assert(Object.hasOwn(manifest.dependencies||{},library.library));assert(library.qualified);
    const identities=new Set();
    const grouped=new Map();
    for(const witness of library.witnesses){const list=grouped.get(witness.source)||[];list.push(witness);grouped.set(witness.source,list);}
    for(const [source,proofs] of grouped) {
      const bytes=fs.readFileSync(path.join(directory,library.proofDirectory,source)),code=bytes.toString();assert(proofs.every(witness=>sha(bytes)===witness.sourceSHA256));
      const missing=proofs.filter(witness=>!featureCache.has(witness.sourceSHA256+':'+witness.span.join(':')));
      if(missing.length) {
        const functions=new Map(enumerate(code).functions.map(fn=>[fn.node.range.join(':'),fn]));
        for(const witness of missing) {
          const fn=functions.get(witness.span.join(':'));assert(fn,'Witness is not a parsed source function');
          featureCache.set(witness.sourceSHA256+':'+witness.span.join(':'),{features:measure(fn.node),identity:normalizedFunction(fn.node,fn.name),codeSHA256:sha(code.slice(...fn.node.range))});
        }
      }
      for(const witness of proofs) {
        const actual=featureCache.get(witness.sourceSHA256+':'+witness.span.join(':'));
        assert.equal(actual.features.extractionStatus,'ok');assert(actual.features[policy.featureMetric]>=policy.minFeatures);
        assert.equal(actual.features[policy.featureMetric],witness.features[policy.featureMetric]);assert.equal(actual.features.pogHash,witness.features.pogHash);
        assert.equal(actual.identity,witness.normalizedASTSHA256);assert.equal(actual.codeSHA256,witness.codeSHA256);identities.add(actual.identity);witnesses++;
      }
    }
    assert(identities.size>=policy.minFunctionsPerLibrary);assert.equal(library.witnesses.length,entry.sourceFunctionWitnesses[library.library]);libraries++;
  }
  assert.equal(qualification.libraries.length,selected.size);
  const recordFile=path.join(dataset,entry.records),record=read(recordFile);assert.equal(sha(fs.readFileSync(recordFile)),entry.recordsSHA256);assert.deepEqual(record.selectedLibraries,entry.selectedLibraries);assert.deepEqual(record.qualificationPolicy,policy);
  assert.deepEqual(record.correspondencePolicy,modulePolicy);
  const scope=read(path.join(directory,'module-scope.json'));assert.equal(scope.subject,entry.subject);assert.equal(scope.commit,entry.commit);assert.equal(sha(fs.readFileSync(path.join(directory,'module-scope.json'))),record.provenance.moduleScopeSHA256);
  for(const evidence of scope.evidence)assert.equal(sha(fs.readFileSync(path.join(directory,evidence.path))),evidence.sha256);
  const allowed=new Set(scope.assets.filter(a=>a.role===modulePolicy.allowedAssetRole).map(a=>a.url+'#'+a.sha256));
  for(const asset of scope.assets){const actual=record.capture.assets.find(a=>a.url===asset.url&&a.sha256===asset.sha256);assert(actual);assert.equal(actual.map?.sha256??null,asset.mapSHA256??null);}
  assert.equal(scope.assets.length,record.capture.assets.length);
  assert.deepEqual(record.libraryMultiplicityPolicy,duplicatePolicy);
  const duplicate=read(path.join(directory,'duplicate-audit.json'));assert.equal(sha(fs.readFileSync(path.join(directory,'duplicate-audit.json'))),record.provenance.duplicateAuditSHA256);
  assert.deepEqual(duplicate.policy,duplicatePolicy);assert.equal(duplicate.subject,entry.subject);assert.equal(duplicate.commit,entry.commit);
  assert.equal(duplicate.provenance.auditorSHA256,sha(fs.readFileSync(path.join(base,'../no-duplicate-libraries/audit-one.mjs'))));assert.equal(duplicate.provenance.evidenceSHA256,sha(fs.readFileSync(path.join(base,'../no-duplicate-libraries/evidence.mjs'))));assert.equal(duplicate.provenance.ownerResolverSHA256,sha(fs.readFileSync(path.join(base,'../../verification/hufang-builds-2026-11-08/collector/source-owner.mjs'))));
  assert.equal(duplicate.provenance.captureSHA256,sha(JSON.stringify(record.capture.assets.map(a=>[a.url,a.sha256,a.map?.sha256]))));assert.equal(duplicate.provenance.manifestSHA256,sha(fs.readFileSync(path.join(directory,'frontend-package.json'))));
  assert.equal(duplicate.candidates.length,selected.size);assert.deepEqual(duplicate.unscoredLibraries,entry.unscoredLibraries);assert.deepEqual(entry.evaluationLibraries,entry.selectedLibraries.filter(name=>!entry.unscoredLibraries.includes(name)));assert.deepEqual(record.evaluationLibraries,entry.evaluationLibraries);
  if(duplicatePolicy.requirePositiveModuleEvidenceForEverySelectedLibrary){assert.equal(entry.unscoredLibraries.length,0);assert.deepEqual(entry.evaluationLibraries,entry.selectedLibraries);}
  for(const row of duplicate.candidates){if(duplicatePolicy.requirePositiveModuleEvidenceForEverySelectedLibrary){assert.equal(row.status,'unique-observed');assert(row.moduleMappedBodyPoints>0);}assert(selected.has(row.library));assert.equal(row.reasons.length,0);assert(row.status==='unique-observed'||row.status==='not-observed'&&entry.unscoredLibraries.includes(row.library));if(entry.unscoredLibraries.includes(row.library))assert.equal(entry.libraryPairs[row.library],0);}
  const counts=Object.fromEntries([...selected].map(name=>[name,0]));
  for(const pair of record.pairs){assert(allowed.has(pair.bundled.slice(0,pair.bundled.lastIndexOf('@'))),'Pair lacks module-ingress evidence');assert(selected.has(pair.library));counts[pair.library]++;}
  assert.deepEqual(counts,entry.libraryPairs);assert.equal(record.pairs.length,entry.oneToOnePairs);pairs+=record.pairs.length;zeroPairLibraries+=Object.values(counts).filter(value=>value===0).length;
  for(const asset of record.capture.assets)for(const [object,folder,extension] of [[asset,'runtime-js','js'],[asset.map||{},'source-maps','map']])if(object.sha256)assert.equal(sha(fs.readFileSync(path.join(path.dirname(recordFile),object.localPath||folder+'/'+object.sha256+'.'+extension))),object.sha256);
  const ownership=read(path.join(directory,'source-ownership.json')),refs=read(path.join(directory,'reference-manifest.json')).files;
  for(const [source,proof] of Object.entries(ownership)){assert(selected.has(proof.library));const qualified=qualification.libraries.find(row=>row.library===proof.library);assert.equal(qualified.origin.name||qualified.origin.packageName||proof.library,proof.proof.name||proof.proof.packageName);assert(refs.some(file=>file.library.name===proof.library&&file.sha256===proof.sha256));}
  const moduleSourceHashes=new Set();
  for(const asset of record.capture.assets)if(allowed.has(asset.url+'#'+asset.sha256)&&asset.map?.sha256){
    const map=read(path.join(path.dirname(recordFile),asset.map.localPath||'source-maps/'+asset.map.sha256+'.map'));
    const visit=map=>{for(const text of map.sourcesContent||[])if(text!=null)moduleSourceHashes.add(sha(text));for(const section of map.sections||[])visit(section.map);};visit(map);
  }
  for(const file of read(path.join(directory,'reference-manifest.json')).files){assert(moduleSourceHashes.has(file.sha256),'Reference source lacks module ingress');assert(selected.has(file.library.name));assert.equal(sha(fs.readFileSync(path.join(directory,file.path))),file.sha256);}
}
assert.equal(index.repositoryCount,index.subjects.length);assert.equal(index.libraryInstanceCount,libraries);assert.equal(index.sourceFunctionWitnessCount,witnesses);assert.equal(index.oneToOnePairs,pairs);assert.equal(index.zeroPairLibraryInstances,zeroPairLibraries);
const result={status:'passed',repositoryCount:index.subjects.length,libraryInstanceCount:libraries,sourceFunctionWitnessCount:witnesses,oneToOnePairs:pairs,zeroPairLibraryInstances:zeroPairLibraries,initialAnchorChecksPerformed:0,moduleDependencyScopeVerified:true,duplicateLibraryPolicyVerified:true,positiveModuleEvidenceForEverySelectedLibrary:duplicatePolicy.requirePositiveModuleEvidenceForEverySelectedLibrary===true};
fs.writeFileSync(path.join(base,'audit-result.json'),JSON.stringify(result,null,2)+'\n');console.log(result);
