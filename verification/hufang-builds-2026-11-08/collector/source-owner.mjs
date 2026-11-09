import {createHash} from 'node:crypto'
const sha=text=>createHash('sha256').update(text).digest('hex')
export function packagePath(source){
 const normal=source.replaceAll('\\','/'),match=[...normal.matchAll(/(?:^|\/)(?:node_modules|~)\/((?:@[^/]+\/)?[^/]+)/g)].at(-1)
 return {library:match?.[1],relative:match?normal.slice(match.index+match[0].length).replace(/^\//,''):source}
}
export function sourceOwnerResolver(selection){
 const owners=selection.sourceOwnership||{},byHash=new Map(),ambiguous=new Set(selection.sourceOwnershipAmbiguousHashes||[])
 for(const proof of Object.values(owners)){const rows=byHash.get(proof.sha256)||[];rows.push(proof);byHash.set(proof.sha256,rows)}
 return (source,code)=>{
  const named=packagePath(source);let proof=owners[source]
  if(!proof&&code!=null&&(!named.library||named.library==='.pnpm')){
   const digest=sha(code),rows=byHash.get(digest)||[]
   if(!ambiguous.has(digest)&&new Set(rows.map(row=>row.library)).size===1)proof=rows[0]
  }
  if(!proof)return named
  if(code==null||sha(code)!==proof.sha256)throw Error('Source ownership hash mismatch')
  // Exact content can recover stripped paths, but cannot override a different
  // named npm package merely because it happens to contain the same helper.
  if(named.library&&named.library!=='.pnpm'&&named.library!==proof.library&&selection.logicalPackages?.[proof.library]!==named.library)throw Error('Source ownership contradicts named package')
  return {library:proof.library,relative:proof.relative||named.relative,proof}
 }
}
