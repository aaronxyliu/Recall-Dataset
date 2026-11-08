import pathlib,json,subprocess,hashlib
base=pathlib.Path(__file__).resolve().parent;root=base.parents[1];cat=root/'bundling-dataset';archive=json.loads((cat/'combined-artifact-index.json').read_text());items={x['subject']:dict(x) for x in archive['subjects']}
hbase=root/'verification/hufang-builds-2026-11-08';hs=json.loads((hbase/'subjects.json').read_text())
for s in hs:
 p=cat/s['subject']/'ground-truth/func-mapping.json';v=hbase/s['subject']/'verification.json'
 if not p.exists() or not v.exists():continue
 outcome=json.loads(v.read_text())
 if outcome.get('pageStatus')!='rendered':continue
 j=json.loads(p.read_text());items[s['subject']]={'subject':s['subject'],'repo':s['application']['repository'],'commit':s['application']['commit'],'records':str(p.relative_to(cat)),'recordsSHA256':hashlib.sha256(p.read_bytes()).hexdigest(),'selectedLibraries':j.get('selectedLibraries',[]),'oneToOnePairs':len(j['pairs'])}
by={s['subject']:s for s in hs};plan=[]
for key,s in sorted(items.items()):
 out=base/'work'/key;out.mkdir(parents=True,exist_ok=True);manifest=None
 if key in by:
  verification=hbase/key/'verification.json'
  if not verification.exists() or json.loads(verification.read_text()).get('pageStatus')!='rendered':
   plan.append({**s,'status':'unassessed','reason':'intended-page-not-verified'});continue
  a=by[key]['application'];repo=root/'builds/hufang'/key;relative=a['packageManifest']
 else:
  meta=json.loads((cat/key/'subject.json').read_text());relative=meta['packageJson'].split('/'+s['commit']+'/',1)[1];repo=root/'builds'/key
 try:
  manifest=subprocess.check_output(['git','-C',str(repo),'show',s['commit']+':'+relative],stderr=subprocess.DEVNULL)
 except subprocess.CalledProcessError:pass
 if manifest is None:plan.append({**s,'status':'unassessed','reason':'pinned-frontend-manifest-unavailable'});continue
 p=out/'frontend-package.json';p.write_bytes(manifest);plan.append({**s,'manifest':str(p),'record':str(cat/s['records']),'output':str(out),'productionDependencyCount':len(json.loads(manifest).get('dependencies',{}))})
(base/'plan.json').write_text(json.dumps(plan,indent=2)+'\n');print('Prepared',len(plan),'captured repositories;',sum(x.get('productionDependencyCount',0)>=5 for x in plan),'have at least five production candidates')
