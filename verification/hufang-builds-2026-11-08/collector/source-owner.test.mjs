import {test} from 'node:test';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';import {sourceOwnerResolver} from './source-owner.mjs';
const code='export function greet(name){return name.toUpperCase()}',digest=createHash('sha256').update(code).digest('hex');
test('exact locked bytes resolve normalized stripped paths and pnpm source aliases',()=>{
 const resolve=sourceOwnerResolver({sourceOwnership:{'./old/path.ts':{library:'example-lib',sha256:digest}}});assert.equal(resolve('webpack:///normalized/path.ts',code).library,'example-lib');assert.equal(resolve('../../node_modules/.pnpm/example-lib@1.0/packages/example-lib/src/a.ts',code).library,'example-lib');
});
test('content coincidence cannot override a different named npm package',()=>{
 const resolve=sourceOwnerResolver({sourceOwnership:{'source.ts':{library:'example-lib',sha256:digest}}});assert.equal(resolve('../../node_modules/other-lib/index.js',code).library,'other-lib');assert.throws(()=>resolve('source.ts','different bytes'),/hash mismatch/);
});
test('shared-source ambiguity is retained when the selected owner map is narrowed',()=>{
 const resolve=sourceOwnerResolver({sourceOwnership:{'source.ts':{library:'example-lib',sha256:digest}},sourceOwnershipAmbiguousHashes:[digest]});assert.equal(resolve('unknown.ts',code).library,undefined);assert.equal(resolve('source.ts',code).library,'example-lib');
});
