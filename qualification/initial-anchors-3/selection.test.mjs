import {test} from 'node:test';import assert from 'node:assert/strict';
import {extractFeatures,identifyAnchors} from './runtime/components/pog/index.mjs';
import {inventoryDigest} from './runtime/src/shared/artifacts.mjs';
import {anchorCounter,findFeasibleFive} from './selection.mjs';
test('trial counts equal canonical anchors with chunk copies and cross-library ambiguity; find five compatible libraries',()=>{
 const names=['A','B','C','D','E','F'];
 const files=names.map(name=>({id:name,path:name+'.js',library:{name,version:'fixture'},code:Array.from({length:3},(_,i)=>{const prefix=name==='B'&&i===0?'A0':name+i;return 'export function '+name+i+'(value){return '+Array.from({length:12},(_,j)=>'value.'+prefix+'p'+j).join('+')+'}'}).join('\n')}));
 const code=files.map(f=>f.id==='B'?f.code.split('\n').slice(1).join('\n'):f.code).join('\n');const source=extractFeatures({files}),bundle=extractFeatures({files:[{id:'chunk1',path:'chunk1.js',code},{id:'chunk2',path:'chunk2.js',code}]});const options={minFeatures:10,featureMetric:'propertyOperations',minAnchors:3,uniqueBundle:true};const counter=anchorCounter(source,bundle,options,names);
 for(const pool of [['A'],['A','B'],['A','C','D','E','F'],names]){
  const wanted=new Set(pool),filtered={...source,units:source.units.filter(u=>wanted.has(u.library.name)),functions:source.functions.filter(f=>wanted.has(f.library.name))};filtered.inputDigest=inventoryDigest(filtered);const sf=new Map(filtered.functions.map(f=>[f.id,f])),anchors=identifyAnchors(filtered,bundle,options),counts=counter.counts(pool);
  for(const name of pool)assert.equal(counts.get(name),new Set(anchors.matches.filter(m=>sf.get(m.sourceId).library.name===name).map(m=>m.sourceId)).size);
 }
 assert.equal(counter.counts(['A']).get('A'),3);assert.equal(counter.counts(['A','B']).get('A'),2);assert.equal(counter.counts(['A','B']).get('B'),2);
 const result=findFeasibleFive(names,counter);assert.equal(result.libraries.length,5);assert(counter.feasible(result.libraries));assert(!(result.libraries.includes('A')&&result.libraries.includes('B')));
 assert.equal(findFeasibleFive(['A','B','C','D','E'],counter).libraries,null);
});
