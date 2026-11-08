import pathlib,json,subprocess,hashlib,shutil,os
base=pathlib.Path(__file__).resolve().parent;root=base.parents[1];dataset=root/'qualified-dataset';exp=root.parent/'ReCall Exp';collector=root/'verification/hufang-builds-2026-11-08/collector';dataset.mkdir(exist_ok=True)
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
plan=json.loads((base/'plan.json').read_text());entries=[];decisions=[]
for subject in plan:
 if not subject.get('manifest') or not subject.get('record'):
  decisions.append({'subject':subject['subject'],'status':'unassessed','reason':subject.get('reason','verified inputs unavailable')});continue
 key=subject['subject'];work=pathlib.Path(subject.get('output',base/'work'/key));qp=work/'qualification.json'
 if not qp.exists():decisions.append({'subject':key,'status':'unassessed','reason':subject.get('reason','qualification did not complete')});continue
 q=json.loads(qp.read_text())
 if q['provenance']['groundTruthSHA256']!=sha(pathlib.Path(subject['record'])) or q['provenance']['manifestSHA256']!=sha(pathlib.Path(subject['manifest'])):
  decisions.append({'subject':key,'status':'unassessed','reason':'qualification input changed; recomputation required'});continue
 decision={'subject':key,'status':q['status'],'reason':q.get('reason'),'productionDependencyCount':len(q['candidates']),'qualifiedCandidateCount':sum(bool(x.get('qualified')) for x in q['libraries']) if any('qualified' in x for x in q['libraries']) else None,'selectedLibraries':q['selectedLibraries'],'libraries':q['libraries']};decisions.append(decision)
 if q['status']!='included':continue
 source=pathlib.Path(subject['record']);gt=json.loads(source.read_text());original=source.parent;selected=q['selectedLibraries'];assert 5<=len(selected)<=10
 manifest=json.loads(pathlib.Path(subject['manifest']).read_text());assert set(selected)<=set(manifest.get('dependencies',{}));assert all(next(x for x in q['libraries'] if x['library']==name)['finalInitialAnchors']>=3 for name in selected)
 dest=dataset/key;dest.mkdir(parents=True,exist_ok=True);ground=dest/'ground-truth';ground.mkdir(exist_ok=True);pairwork=work/'pair-rebuild';raw=pairwork/'raw';raw.mkdir(parents=True,exist_ok=True)
 for asset in gt['capture']['assets']:
  for obj,folder,ext in [(asset,'runtime-js','js'),(asset.get('map',{}),'source-maps','map')]:
   digest=obj.get('sha256')
   if not digest:continue
   p=(original/obj.get('localPath',folder+'/'+digest+'.'+ext)).resolve();assert sha(p)==digest
   link=raw/(digest+'.'+ext)
   if not link.exists():link.symlink_to(p)
 (pairwork/'selection.json').write_text(json.dumps({'repo':subject['repo'],'commit':subject['commit'],'selected':selected},indent=2)+'\n');capture=json.loads(json.dumps(gt['capture']));(pairwork/'capture.json').write_text(json.dumps(capture,indent=2)+'\n')
 complete=ground/'func-mapping.json';signature=hashlib.sha256(json.dumps({'record':sha(source),'selected':selected,'collector':sha(collector/'relations.mjs')},sort_keys=True).encode()).hexdigest();receipt=dest/'qualification.json'
 prior=json.loads(receipt.read_text()).get('organizationSignature') if receipt.exists() else None
 if not complete.exists() or prior!=signature:
  with (work/'pair-rebuild.log').open('w') as log:
   for script in ['relations.mjs','verify_pairs.mjs']:subprocess.run(['node','--max-old-space-size=6144',str(collector/script),str(pairwork),str(raw)],check=True,stdout=log,stderr=subprocess.STDOUT,timeout=1200)
  relations=json.loads((pairwork/'relations.json').read_text());assert all(p['library'] in selected for p in relations['pairs'])
  for asset in capture['assets']:
   for obj,folder,ext in [(asset,'runtime-js','js'),(asset.get('map',{}),'source-maps','map')]:
    h=obj.get('sha256')
    if not h:continue
    p=raw/(h+'.'+ext);target=ground/folder/p.name;target.parent.mkdir(exist_ok=True)
    if not target.exists():shutil.copyfile(p,target)
    assert sha(target)==h;obj['localPath']=folder+'/'+p.name
  relations['capture']=capture;relations['selectedLibraries']=selected;relations['qualification']={'policy':'initial-anchors-3','minInitialAnchors':3,'productionDependenciesOnly':True,'minLibraries':5,'maxLibraries':10};relations['provenance']={'upstreamCommit':subject['commit'],'archiveRecord':str(source.relative_to(root)),'archiveRecordSHA256':sha(source),'collectorSHA256':sha(collector/'relations.mjs'),'spanVerifierSHA256':sha(collector/'verify_pairs.mjs')};complete.write_text(json.dumps(relations,indent=2)+'\n')
 q['organizationSignature']=signature;(dest/'qualification.json').write_text(json.dumps(q,indent=2)+'\n');shutil.copyfile(work/'initial-anchors.json',dest/'initial-anchors.json');shutil.copyfile(work/'frontend-package.json',dest/'frontend-package.json')
 refs=json.loads((work/'reference-manifest.json').read_text())
 for ref in refs['files']:
  p=work/ref['path'];target=dest/ref['path'];target.parent.mkdir(parents=True,exist_ok=True)
  if not target.exists():shutil.copyfile(p,target)
  assert sha(target)==ref['sha256']
 (dest/'reference-manifest.json').write_text(json.dumps(refs,indent=2)+'\n')
 pairs=json.loads(complete.read_text())['pairs'];libpairs={name:sum(p['library']==name for p in pairs) for name in selected};entries.append({'subject':key,'repo':subject['repo'],'commit':subject['commit'],'records':str(complete.relative_to(dataset)),'recordsSHA256':sha(complete),'selectedLibraries':selected,'libraryCount':len(selected),'initialAnchors':{n:next(x for x in q['libraries'] if x['library']==n)['finalInitialAnchors'] for n in selected},'libraryPairs':libpairs,'oneToOnePairs':len(pairs),'imageID':gt.get('imageID',gt.get('capture',{}).get('imageID')),'qualification':str((dest/'qualification.json').relative_to(dataset))})
 (dest/'README.md').write_text('# '+subject['repo']+'\n\nPinned commit `'+subject['commit']+'`. '+str(len(selected))+' production libraries satisfy the minimum of three distinct initial POG source-function anchors. See `qualification.json`, `initial-anchors.json`, and `frontend-package.json` for eligibility evidence. `ground-truth/func-mapping.json` contains '+str(len(pairs))+' independently span-verified one-to-one pairs.\n\nThe captured scripts and maps are retained byte-for-byte. Reference snapshots are explicit JavaScript inputs; map positions and pair labels do not enter anchor matching. The saved build/browser evidence remains in the build archive under `bundling-dataset/'+key+'`.\n')
 print('organized',key,len(selected),len(pairs),flush=True)
included={entry['subject'] for entry in entries}
for receipt in dataset.glob('*/*/qualification.json'):
 if str(receipt.parent.relative_to(dataset)) not in included:shutil.rmtree(receipt.parent)
index={'schema':'recall.qualified-dataset/v1','policy':{'productionDependenciesOnly':True,'minInitialAnchors':3,'minLibrariesPerRepository':5,'maxLibrariesPerRepository':10,'counting':'distinct initial source-function anchors; duplicates across target chunks count once'},'repositoryCount':len(entries),'libraryInstanceCount':sum(e['libraryCount'] for e in entries),'oneToOnePairs':sum(e['oneToOnePairs'] for e in entries),'subjects':entries};(dataset/'index.json').write_text(json.dumps(index,indent=2)+'\n');(base/'decisions.json').write_text(json.dumps(decisions,indent=2)+'\n');print('TOTAL',index['repositoryCount'],index['libraryInstanceCount'],index['oneToOnePairs'])
