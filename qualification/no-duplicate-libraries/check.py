import pathlib,json,hashlib
base=pathlib.Path(__file__).resolve().parent;sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();read=lambda p:json.loads(p.read_text())
def validate_selected_evidence(policy, rows, selected, unscored):
 if not policy['retainExistingUnobservedZeroPairLibraries'] and unscored:
  raise ValueError('Unobserved library slots are forbidden by the current policy')
 for name in selected:
  row=rows[name]
  allowed=row['status']=='unique-observed' or policy['retainExistingUnobservedZeroPairLibraries'] and name in unscored and row['status']=='not-observed'
  if not allowed:raise ValueError('Selected library lacks a passing duplicate/module audit: '+name)
  if policy.get('requirePositiveModuleEvidenceForEverySelectedLibrary') and row['moduleMappedBodyPoints']<=0:
   raise ValueError('Selected library lacks positive module evidence: '+name)

def load(subject,commit,capture,manifest,selected):
 p=base/'results'/subject/'audit.json'
 if not p.exists():raise ValueError('Full-runtime duplicate-library audit is required')
 report=read(p);assert report['subject']==subject and report['commit']==commit
 assert report['provenance']['ownerResolverSHA256']==sha(base.parents[1]/'verification/hufang-builds-2026-11-08/collector/source-owner.mjs')
 assert report['provenance']['auditorSHA256']==sha(base/'audit-one.mjs') and report['provenance']['evidenceSHA256']==sha(base/'evidence.mjs')
 ids=[[a['url'],a['sha256'],a.get('map',{}).get('sha256')] for a in capture['assets']];assert hashlib.sha256(json.dumps(ids,separators=(',',':'),ensure_ascii=False).encode()).hexdigest()==report['provenance']['captureSHA256']
 assert report['provenance']['manifestSHA256']==sha(manifest)
 assert sha(p)==next(s for s in read(base/'selection-plan.json')['subjects'] if s['subject']==subject)['auditSHA256']
 plan=read(base/'selection-plan.json');policy=read(base/'policy.json');assert plan['policy']==policy;row=next(s for s in plan['subjects'] if s['subject']==subject);unscored=set(row['unscoredRetainedLibraries']);rows={s['library']:s for s in report['candidates']}
 validate_selected_evidence(policy,rows,selected,unscored)
 owners=read(p.parent/'source-ownership.json');assert sha(p.parent/'source-ownership.json')==report['provenance']['sourceOwnershipSHA256']
 return report,{name:proof for name,proof in owners.items() if proof['library'] in selected},sorted(unscored&set(selected)),owners
