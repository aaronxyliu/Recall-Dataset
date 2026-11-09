import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {enumerate,measure} from '../provenance/source-gate/initial-anchors-3/runtime/src/analysis/measure.mjs';
import {normalizedFunction,sha} from '../provenance/source-gate/source-functions-3/functions.mjs';
const base=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(base,'..'),dataset=path.join(root,'qualified-dataset'),frozen=path.join(root,'provenance/source-gate/source-functions-3');
const read=file=>JSON.parse(fs.readFileSync(file,'utf8')),index=read(path.join(dataset,'index.json')),policy=read(path.join(root,'policies/selection.json'));
const origin=read(path.join(root,'provenance/release-origin.json'));assert.equal(sha(fs.readFileSync(path.join(dataset,'index.json'))),origin.canonicalIndexSHA256);
const runtime=path.join(root,'provenance/source-gate/initial-anchors-3/runtime');for(const [file,digest] of Object.entries(read(path.join(runtime,'hashes.json'))))assert.equal(sha(fs.readFileSync(path.join(runtime,file))),digest);
assert.deepEqual(index.policy,policy);assert.equal(policy.requireInitialAnchors,false);
const modulePolicy=read(path.join(root,'policies/correspondence.json'));assert.deepEqual(index.correspondencePolicy,modulePolicy);
const cohortPolicy=read(path.join(root,'policies/bundlers.json'));assert.deepEqual(index.cohortPolicy,cohortPolicy);assert(index.subjects.every(e=>cohortPolicy.includedBundlers.includes(e.subject.split('/')[0])));
assert.deepEqual(fs.readdirSync(dataset,{withFileTypes:true}).filter(e=>e.isDirectory()).map(e=>e.name).sort(),[...cohortPolicy.includedBundlers].sort());
const physicalSubjects=cohortPolicy.includedBundlers.flatMap(g=>fs.readdirSync(path.join(dataset,g),{withFileTypes:true}).filter(e=>e.isDirectory()).map(e=>g+'/'+e.name));assert.deepEqual(physicalSubjects.sort(),index.subjects.map(e=>e.subject).sort());
const featureCache=new Map();let libraries=0,witnesses=0,pairs=0,zeroPairLibraries=0;
for(const entry of index.subjects) {
  const directory=path.join(dataset,entry.subject),qualification=read(path.join(directory,'qualification.json')),selected=new Set(entry.selectedLibraries),manifest=read(path.join(directory,'frontend-package.json'));
  assert(selected.size>=policy.minLibrariesPerRepository&&selected.size<=policy.maxLibrariesPerRepository);assert.equal(selected.size,entry.libraryCount);
  assert.deepEqual(qualification.policy,policy);assert.deepEqual(qualification.selectedLibraries,entry.selectedLibraries);
  assert.equal(sha(fs.readFileSync(path.join(directory,'frontend-package.json'))),qualification.provenance.frontendManifestSHA256);
  for(const [file,digest] of Object.entries(qualification.provenance.codeHashes))assert.equal(sha(fs.readFileSync(path.join(frozen,file))),digest);
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
  const recordFile=path.join(dataset,entry.records),record=read(recordFile);
  assert.equal(sha(fs.readFileSync(path.join(root,'provenance/collector/relations.mjs'))),record.provenance.collectorSHA256);
  assert.equal(sha(fs.readFileSync(path.join(root,'provenance/collector/verify_pairs.mjs'))),record.provenance.spanVerifierSHA256);
  assert.equal(sha(fs.readFileSync(path.join(directory,'reproduction/selection.json'))),record.provenance.sourceOwnershipSHA256);
  const build=read(path.join(directory,'reproduction/build.json'));assert.equal(build.commit,entry.commit);assert.equal(build.repo,entry.repo);assert.equal(sha(fs.readFileSync(path.join(directory,'reproduction/Dockerfile'))),build.dockerfileSHA256);
assert.equal(sha(fs.readFileSync(recordFile)),entry.recordsSHA256);assert.deepEqual(record.selectedLibraries,entry.selectedLibraries);assert.deepEqual(record.qualificationPolicy,policy);
  assert.deepEqual(record.correspondencePolicy,modulePolicy);
  const scope=read(path.join(directory,'module-scope.json'));assert.equal(scope.subject,entry.subject);assert.equal(scope.commit,entry.commit);assert.equal(sha(fs.readFileSync(path.join(directory,'module-scope.json'))),record.provenance.moduleScopeSHA256);
  for(const evidence of scope.evidence)assert.equal(sha(fs.readFileSync(path.join(directory,evidence.path))),evidence.sha256);
  const allowed=new Set(scope.assets.filter(a=>a.role===modulePolicy.allowedAssetRole).map(a=>a.url+'#'+a.sha256));
  for(const asset of scope.assets){const actual=record.capture.assets.find(a=>a.url===asset.url&&a.sha256===asset.sha256);assert(actual);assert.equal(actual.map?.sha256??null,asset.mapSHA256??null);}
  assert.equal(scope.assets.length,record.capture.assets.length);
  const counts=Object.fromEntries([...selected].map(name=>[name,0]));
  for(const pair of record.pairs){assert(allowed.has(pair.bundled.slice(0,pair.bundled.lastIndexOf('@'))),'Pair lacks module-ingress evidence');assert(selected.has(pair.library));counts[pair.library]++;}
  assert.deepEqual(counts,entry.libraryPairs);assert.equal(record.pairs.length,entry.oneToOnePairs);pairs+=record.pairs.length;zeroPairLibraries+=Object.values(counts).filter(value=>value===0).length;
  for(const asset of record.capture.assets)for(const [object,folder,extension] of [[asset,'runtime-js','js'],[asset.map||{},'source-maps','map']])if(object.sha256)assert.equal(sha(fs.readFileSync(path.join(path.dirname(recordFile),object.localPath||folder+'/'+object.sha256+'.'+extension))),object.sha256);
  const ownership=read(path.join(directory,'source-ownership.json')),refs=read(path.join(directory,'reference-manifest.json')).files;
  for(const [source,proof] of Object.entries(ownership)){assert(selected.has(proof.library));assert.equal(proof.library,proof.proof.name);assert(refs.some(file=>file.library.name===proof.library&&file.sha256===proof.sha256));}
  const moduleSourceHashes=new Set();
  for(const asset of record.capture.assets)if(allowed.has(asset.url+'#'+asset.sha256)&&asset.map?.sha256){
    const map=read(path.join(path.dirname(recordFile),asset.map.localPath||'source-maps/'+asset.map.sha256+'.map'));
    const visit=map=>{for(const text of map.sourcesContent||[])if(text!=null)moduleSourceHashes.add(sha(text));for(const section of map.sections||[])visit(section.map);};visit(map);
  }
  for(const file of read(path.join(directory,'reference-manifest.json')).files){assert(moduleSourceHashes.has(file.sha256),'Reference source lacks module ingress');assert(selected.has(file.library.name));assert.equal(sha(fs.readFileSync(path.join(directory,file.path))),file.sha256);}
}
assert.equal(index.repositoryCount,index.subjects.length);assert.equal(index.libraryInstanceCount,libraries);assert.equal(index.sourceFunctionWitnessCount,witnesses);assert.equal(index.oneToOnePairs,pairs);assert.equal(index.zeroPairLibraryInstances,zeroPairLibraries);
const result={status:'passed',repositoryCount:index.subjects.length,libraryInstanceCount:libraries,sourceFunctionWitnessCount:witnesses,oneToOnePairs:pairs,zeroPairLibraryInstances:zeroPairLibraries,initialAnchorChecksPerformed:0,moduleDependencyScopeVerified:true,finalBundlerScopeVerified:true,reproductionRecipeIntegrityVerified:true,collectionSelectionsVerified:true};
if(process.env.RECALL_AUDIT_OUTPUT)fs.writeFileSync(process.env.RECALL_AUDIT_OUTPUT,JSON.stringify(result,null,2)+'\n');console.log(result);
