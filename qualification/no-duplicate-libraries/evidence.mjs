export function versionTag(tag){const m=/^((?:@[^@]+|[^@]+)@)(\d[^_(]*)(?:[_\(].*)?$/.exec(tag);return m?m[1]+m[2]:tag;}
export function copyProof(item){
 const targets=[...item.targets.values()];
 for(let i=0;i<targets.length;i++)for(let j=i+1;j<targets.length;j++){
  const left=targets[i],right=targets[j],l=/^(.*)@(\d+)-(\d+)$/.exec(left.target),r=/^(.*)@(\d+)-(\d+)$/.exec(right.target);
  // Nested generated wrappers can legitimately share provenance with their
  // enclosing function; they are not independent runtime copies.
  if(l[1]===r[1]&&Number(l[2])<Number(r[3])&&Number(r[2])<Number(l[3]))continue;
  const overlap=[...left.tokens].filter(x=>right.tokens.has(x)),ratio=overlap.length/Math.max(left.tokens.size,right.tokens.size);
  // Demand overlap on BOTH bodies, not a tiny helper matching a small subset.
  if(overlap.length>=2&&ratio>=0.8)return {type:'same-original-function-copied',source:item.source,sourceSHA256:item.sourceSHA256,sourceSpan:item.span,sharedOwnBodyTokens:overlap.slice(0,12),overlapRatio:ratio,targets:[left.target,right.target]};
 }
 return null;
}
