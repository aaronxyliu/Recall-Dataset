import pathlib,json,subprocess,hashlib,re
base=pathlib.Path(__file__).resolve().parent;root=base.parents[1];cat=root/'bundling-dataset';hb=root/'verification/hufang-builds-2026-11-08'
read=lambda p:json.loads(p.read_text())
items={s['subject']:dict(s) for s in read(cat/'combined-artifact-index.json')['subjects']};hs={s['subject']:s for s in read(hb/'subjects.json')}
previous={s['subject']:s['selectedLibraries'] for s in read(root/'qualified-dataset/index.json')['subjects']}
for key,s in hs.items():items[key]={'subject':key,'repo':s['application']['repository'],'commit':s['application']['commit']}
overrides=read(base/'selection-overrides.json')
plan=[]
for key,s in sorted(items.items()):
 work=base/'work'/key;work.mkdir(parents=True,exist_ok=True)
 if key in hs:
  app=hs[key]['application'];repo=root/'builds/hufang'/key;relative=app['packageManifest'];record=cat/key/'ground-truth/func-mapping.json';vp=hb/key/'verification.json';verified=vp.exists() and read(vp).get('pageStatus')=='rendered'
 else:
  meta=read(cat/key/'subject.json');repo=root/'builds'/key;relative=meta['packageJson'].split('/'+s['commit']+'/',1)[1];record=cat/s['records'];verified=True
 override=overrides.get(key,{})
 relative=override.get('manifestRelative',relative)
 try:manifest=subprocess.check_output(['git','-C',str(repo),'show',s['commit']+':'+relative],stderr=subprocess.DEVNULL)
 except subprocess.CalledProcessError:plan.append({**s,'status':'unassessed','reason':'pinned frontend manifest unavailable'});continue
 (work/'frontend-package.json').write_bytes(manifest)
 source=(cat/key/'Dockerfile').read_text() if (cat/key/'Dockerfile').exists() else ''
 manager='pnpm' if re.search(r'\b(?:pnpm|nub)\s+(?:install|i)\b',source) else 'bun' if re.search(r'\bbun\s+install\b',source) else 'yarn' if re.search(r'\byarn\s+install\b',source) else 'npm'
 p={**s,'sourceRepo':str(repo),'manifest':str(work/'frontend-package.json'),'manifestRelative':relative,'packageManager':manager,'record':str(record) if record.exists() else None,'pageVerified':verified,'output':str(work),'previousSelected':previous.get(key,[]),'frontendManifestSHA256':hashlib.sha256(manifest).hexdigest()}
 p['selectionOverride']=override
 plan.append(p)
(base/'plan.json').write_text(json.dumps(plan,indent=2)+'\n');print('Prepared',len(plan),'repositories for source-only preflight')
