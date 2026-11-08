// Exact distinct-source count for the canonical function-anchor rule, cached for pool trials.
export function anchorCounter(source,bundle,options,candidates){
 const masks=new Map(candidates.map((name,i)=>[name,1n<<BigInt(i)])),sourceGroups=new Map(),targetGroups=new Map();
 const eligible=f=>f.pogHash&&Number(f[options.featureMetric])>=options.minFeatures;
 for(const f of source.functions.filter(eligible)){
  const name=f.library.name;if(!sourceGroups.has(f.pogHash))sourceGroups.set(f.pogHash,new Map());const groups=sourceGroups.get(f.pogHash);if(!groups.has(name))groups.set(name,[]);groups.get(name).push(f.id);
 }
 for(const f of bundle.functions.filter(eligible)){
  if(!targetGroups.has(f.unit))targetGroups.set(f.unit,new Map());const counts=targetGroups.get(f.unit);counts.set(f.pogHash,(counts.get(f.pogHash)||0)+1);
 }
 const targetUnique=new Set();for(const counts of targetGroups.values())for(const [fingerprint,count] of counts)if(count===1)targetUnique.add(fingerprint);
 const potential=new Map(candidates.map(n=>[n,[]]));
 for(const [fingerprint,groups] of sourceGroups){
  if(!targetUnique.has(fingerprint))continue;let owners=0n;for(const name of groups.keys())owners|=masks.get(name);
  for(const [name,ids] of groups)if(ids.length===1)potential.get(name).push({sourceId:ids[0],owners});
 }
 const maskOf=names=>names.reduce((mask,name)=>mask|masks.get(name),0n);
 const ids=(name,mask)=>potential.get(name).filter(a=>(a.owners&mask)===masks.get(name)).map(a=>a.sourceId);
 const counts=names=>{const mask=maskOf(names);return new Map(names.map(name=>[name,ids(name,mask).length]))};
 const feasible=(names,min=3)=>{const mask=maskOf(names);for(const name of names){let count=0;for(const a of potential.get(name))if((a.owners&mask)===masks.get(name)&&++count>=min)break;if(count<min)return false}return true};
 return {counts,feasible,potentialCounts:new Map(candidates.map(n=>[n,potential.get(n).length]))};
}
export function findFeasibleFive(order,counter){
 const names=order.filter(n=>counter.potentialCounts.get(n)>=3);let nodes=0;
 function visit(pool,start){
  nodes++;if(pool.length===5)return pool;
  for(let i=start;i<=names.length-(5-pool.length);i++){
   const trial=[...pool,names[i]];if(!counter.feasible(trial))continue;const answer=visit(trial,i+1);if(answer)return answer;
  }
  return null;
 }
 return {libraries:visit([],0),searchNodes:nodes,candidates:names.length,complete:true};
}
