import pathlib,json,hashlib,shutil
base=pathlib.Path(__file__).resolve().parent;root=base.parents[1];catalog=root/'bundling-dataset'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
subjects=json.loads((base/'subjects.json').read_text());summary=[]
for s in subjects:
 key=s['subject'];e=base/key;p=e/'verification.json'
 if not p.exists():continue
 r=json.loads(p.read_text()); dest=catalog/key/'ground-truth'
 if (e/'capture.json').exists() and not (dest/'func-mapping.json').exists():
  capture=json.loads((e/'capture.json').read_text());dest.mkdir(exist_ok=True)
  for a in capture['assets']:
   for digest,ext,folder in [(a['sha256'],'js','runtime-js'),(a.get('map',{}).get('sha256'),'map','source-maps')]:
    if not digest:continue
    src=e/'raw'/(digest+'.'+ext);assert sha(src)==digest
    target=dest/folder/src.name;target.parent.mkdir(exist_ok=True);shutil.copyfile(src,target)
  result={'pairDefinition':'No production-library candidates: the selected frontend manifest declares no dependencies.','provenance':{'commit':s['result']['commit'],'manifest':s['metadata']['packageJson']},'selectedLibraries':[],'capture':capture,'pairs':[],'zeroPairReason':'No declared production dependencies; no library-function recovery claim.'}
  (dest/'func-mapping.json').write_text(json.dumps(result,indent=2)+'\n')
 if (e/'page.json').exists() and (dest/'func-mapping.json').exists() and r['status']=='built':r['pageEvidence']=json.loads((e/'page.json').read_text())
 if (dest/'func-mapping.json').exists():
  j=json.loads((dest/'func-mapping.json').read_text());r['pairCount']=len(j['pairs']);r['scriptCount']=len(list((dest/'runtime-js').glob('*.js')));r['mapCount']=len(list((dest/'source-maps').glob('*.map')))
 r['submittedStatus']=s['result'];summary.append(r)
(base/'summary.json').write_text(json.dumps(summary,indent=2)+'\n')
# A combined discovery index preserves the previous experiment indexes and their populations.
old=json.loads((base/'previous-published-index.json').read_text()); entries=list(old['subjects'])
for e in entries:
 revised=catalog/e['subject']/'ground-truth-v2/func-mapping.json'
 if revised.exists():
  e.update(records=str(revised.relative_to(catalog)), recordsSHA256=sha(revised), oneToOnePairs=len(json.loads(revised.read_text())['pairs']))
known={x['subject'] for x in entries}
for s in subjects:
 key=s['subject'];p=catalog/key/'ground-truth/func-mapping.json'
 if not p.exists() or key in known:continue
 j=json.loads(p.read_text());entries.append({'subject':key,'repo':s['metadata']['repo'],'commit':s['result']['commit'],'records':str(p.relative_to(catalog)),'recordsSHA256':sha(p),'oneToOnePairs':len(j['pairs']),'selectedLibraries':j['selectedLibraries'],'collection':'student-build-verification-2026-11-08','status':'pairs-observed' if j['pairs'] else 'zero-pairs','excludedFromEvaluation':key=='bun/chenglou--chenglou.github.io'})
combined={'description':'Combined artifact discovery index. Historical experiment populations and scores remain defined by their original indexes. New captures cover the landing route only.','repositoryCount':len(entries),'oneToOnePairs':sum(x['oneToOnePairs'] for x in entries),'subjects':entries}
for e in entries:
 p=catalog/e['records'];assert p.exists() and sha(p)==e['recordsSHA256'],e['subject']
(catalog/'combined-artifact-index.json').write_text(json.dumps(combined,indent=2)+'\n')
print(len(summary),'verification records;',len(entries),'combined repositories;',combined['oneToOnePairs'],'pairs')
