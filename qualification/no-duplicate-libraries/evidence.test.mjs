import {test} from 'node:test';import assert from 'node:assert/strict';import {copyProof,versionTag} from './evidence.mjs';
const item=(rows)=>({source:'src/example.js',sourceSHA256:'a'.repeat(64),span:[0,100],targets:new Map(rows.map(([target,tokens])=>[target,{target,tokens:new Set(tokens)}]))});
test('shared source file with disjoint functions and split bodies is not a duplicate',()=>{
 assert.equal(copyProof(item([['a#x@0-100',[1,2,3,4]],['b#y@0-100',[5,6,7,8]]])),null);
 assert.equal(copyProof(item([['a#x@0-100',[1,2,3,4,5,6,7,8]],['b#y@0-100',[1,2]]])),null);
});
test('nested wrappers are not copies; disjoint copies in one bundle and across bundles are',()=>{
 assert.equal(copyProof(item([['a#x@0-100',[1,2,3,4]],['a#x@20-40',[1,2,3,4]]])),null);
 assert(copyProof(item([['a#x@0-100',[1,2,3,4]],['a#x@200-300',[1,2,3,4]]])));
 assert(copyProof(item([['a#x@0-100',[1,2,3,4]],['b#y@0-100',[1,2,3,4]]])));
});
test('pnpm peer contexts are not distinct installed versions',()=>{
 assert.equal(versionTag('@scope+my_pkg@1.2.3_react@18'),versionTag('@scope+my_pkg@1.2.3_react@19'));
 assert.notEqual(versionTag('react@18.2.0_peer@x'),versionTag('react@19.2.0_peer@x'));
});
