import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {inspectFiles,implementationFiles} from './functions.mjs';

test('source-only gate accepts three functions sharing a POG fingerprint, deduplicates copies, and enforces ten features',()=>{
  const directory=fs.mkdtempSync(path.join(os.tmpdir(),'recall-source-gate-'));
  const policy={minFunctionsPerLibrary:3,minFeatures:10,featureMetric:'propertyOperations'};
  const fn=(name,count)=>`function ${name}(x){return ${Array.from({length:count},(_,i)=>`x.p${i}`).join('+')}}`;
  try {
    const first=path.join(directory,'distinct');fs.mkdirSync(first);
    fs.writeFileSync(path.join(first,'library.js'),['a','b','c'].map(name=>fn(name,10)).join('\n'));
    const accepted=inspectFiles(implementationFiles(first),policy,path.join(directory,'proof-1'));
    assert.equal(accepted.qualified,true);assert.equal(accepted.witnesses.length,3);
    assert.equal(new Set(accepted.witnesses.map(row=>row.features.pogHash)).size,1,'fingerprint uniqueness must not be an acceptance condition');
    assert(accepted.witnesses.every(row=>row.features.propertyOperations===10));
    const copies=path.join(directory,'copies');fs.mkdirSync(copies);
    for(let i=0;i<3;i++)fs.writeFileSync(path.join(copies,`copy-${i}.js`),fn('same',10));
    const duplicated=inspectFiles(implementationFiles(copies),policy,path.join(directory,'proof-2'));
    assert.equal(duplicated.qualified,false);assert.equal(duplicated.eligibleFunctionLowerBound,1);
    const small=path.join(directory,'small');fs.mkdirSync(small);
    fs.writeFileSync(path.join(small,'library.js'),['a','b','c'].map(name=>fn(name,9)).join('\n'));
    const rejected=inspectFiles(implementationFiles(small),policy,path.join(directory,'proof-3'));
    assert.equal(rejected.qualified,false);assert.equal(rejected.eligibleFunctionLowerBound,0);
  } finally {fs.rmSync(directory,{recursive:true,force:true});}
});
