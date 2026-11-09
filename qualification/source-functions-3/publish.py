import collections
import json
import pathlib
import subprocess

base=pathlib.Path(__file__).resolve().parent;root=base.parents[1];dataset=root/'qualified-dataset';cat=root/'bundling-dataset'
read=lambda p:json.loads(p.read_text());index=read(dataset/'index.json');policy=index['policy']
cohort=read(base/'cohort-policy.json');order=cohort['includedBundlers'];assert index['cohortPolicy']==cohort;assert all(e['subject'].split('/')[0] in order for e in index['subjects'])
history=root/'historical-cohorts/initial-anchor-policy-2309c58';history.mkdir(parents=True,exist_ok=True)
for path,name in [('qualified-dataset/index.json','index.json'),('qualification/initial-anchors-3/POLICY.md','POLICY.md')]:
 if not (history/name).exists():(history/name).write_bytes(subprocess.check_output(['git','-C',str(root),'show','2309c58:'+path]))
(history/'README.md').write_text('# Historical initial-anchor cohort\n\nThis is the superseded 18-repository membership snapshot from commit `2309c58ade8bdbb07d01bfb09985ca2762e3488e`. Its artifact paths resolve within that Git revision, not the current checkout. Browse the [immutable artifact tree](https://github.com/aaronxyliu/Recall-Dataset/tree/2309c58ade8bdbb07d01bfb09985ca2762e3488e/qualified-dataset). The active source-only policy does not require initial anchors.\n')
for name in ['one-to-one-evaluation.json','one-to-one-evaluation-v2.json']:
 active={**index,'pairDefinition':'reciprocal-body-mapped-v2','canonicalIndex':'../qualified-dataset/index.json','subjects':[{**entry,'records':'../qualified-dataset/'+entry['records'],'qualification':'../qualified-dataset/'+entry['qualification'],'moduleScope':'../qualified-dataset/'+entry['moduleScope']} for entry in index['subjects']]};(cat/name).write_text(json.dumps(active,indent=2)+'\n')
decisions={row['subject']:row for row in read(base/'decisions.json')};groups=collections.defaultdict(lambda:[0,0,0])
for file in sorted(cat.glob('*/*/subject.json')):
 key=str(file.parent.relative_to(cat))
 if key.split('/')[0] not in order:
  decisions[key]={'subject':key,'status':'excluded','reason':'Outside final bundler scope: only Webpack through Bun are retained.','exclusionType':'bundler-scope'};continue
 if key not in decisions:decisions[key]={'subject':key,'status':'unassessed','reason':'pinned source/capture context unavailable for this catalog subject'}
(base/'catalog-decisions.json').write_text(json.dumps(list(decisions.values()),indent=2)+'\n')
for entry in index['subjects']:
 totals=groups[entry['subject'].split('/')[0]];totals[0]+=1;totals[1]+=entry['libraryCount'];totals[2]+=entry['oneToOnePairs']
lines=['# Qualified ReCall Dataset','',f"**{index['repositoryCount']} repositories, {index['libraryInstanceCount']} repository/library instances, and {index['oneToOnePairs']:,} one-to-one function pairs.**",'',
'Every included repository has **3–10 declared production libraries**. Each selected library has at least **three independently checkable source-function witnesses with ≥10 own-body POG property-operation features**. Source eligibility is checked before new builds. Existing archives are re-filtered with the same source-only rule. **No initial-anchor or target-matching threshold is used.**','',
'Only function pairs from reviewed **module dependencies** are counted. Standalone vendor/global-script copies are excluded before the correspondence graph is built; UMD/IIFE module output remains eligible. See the [module policy](../qualification/module-dependencies/POLICY.md) and per-repository `module-scope.json` / `module-evidence/`. Captured JS/maps are retained in full for provenance, while map-reference snapshots follow module-only scope.','',
'| Bundler | Repositories | Library instances | Function pairs |','|---|---:|---:|---:|']
for group in order:
 counts=groups[group];lines.append('| '+group+' | '+' | '.join(f'{n:,}' for n in counts)+' |')
lines+=['',f"The source evidence contains {index['sourceFunctionWitnessCount']:,} function witnesses; these are lower-bound certificates, not a census of every function. {index['zeroPairLibraryInstances']} selected library instances have zero accepted one-to-one pairs. Correspondence counts are reported separately and do not determine source eligibility.",'',
'The [index](index.json) defines active membership. Each subject includes captured runtime JS, source maps, independently span-verified function pairs, the original frontend manifest, and source witnesses under `eligibility/`. `reference-manifest.json` separately lists available original text from captured maps. Source eligibility uses locked package/workspace code; correspondence attribution follows the existing package-name collector and does not prove that every captured copy is one installed version.','',
'See the [policy](../qualification/source-functions-3/POLICY.md), [all-catalog decisions](../qualification/source-functions-3/catalog-decisions.json), and [standalone audit](../qualification/source-functions-3/audit-result.json). Source failures, incomplete source evidence, and technical build/page failures are separate statuses. The broader `bundling-dataset/` is a build/capture archive and may include excluded subjects or older sampling rules.','',
'To reproduce the source gate, install the frozen POG runtime and `qualification/source-functions-3/` dependencies with `npm ci`, prepare pinned source checkouts, then run `prepare-plan.py` and `preflight.mjs`. `verification/hufang-builds-2026-11-08/run-source-pipeline.py` gates remaining builds on those source certificates. Run `organize.py`, `audit.mjs`, and `publish.py` after verified captures. The organized output and audit do not require local source checkouts.','']
lines+=['## Final repository tables','', 'Duplicate libraries are permitted. Only reviewed module-imported code contributes function pairs; standalone vendor/global-script copies remain excluded.','']
for group in order:
 rows=sorted((e for e in index['subjects'] if e['subject'].split('/')[0]==group),key=lambda e:e['repo'].lower())
 lines+=['### '+group,'','| Repository | Libraries | Function pairs |','|---|---:|---:|']
 for e in rows:lines.append('| ['+e['repo']+']('+e['subject']+'/README.md) | '+str(e['libraryCount'])+' | '+f"{e['oneToOnePairs']:,}"+' |')
 lines+=['| **Subtotal: '+str(len(rows))+' repositories** | **'+str(groups[group][1])+'** | **'+f"{groups[group][2]:,}"+'** |','']
(dataset/'README.md').write_text('\n'.join(lines))
readme=root/'README.md';text=readme.read_text();marker='## Historical build and capture catalog'
historical=text.split(marker,1)[1] if marker in text else text.split('\n',1)[1]
prefix=f"# ReCall Dataset\n\nThe active [organized dataset](qualified-dataset/README.md) contains **{index['repositoryCount']} repositories, {index['libraryInstanceCount']} library instances, and {index['oneToOnePairs']:,} one-to-one function pairs**.\n\nEach repository has **3–10 production libraries**, each with **at least three source functions containing ≥10 POG features**, using the existing own-body property-operation counter. **Initial anchors are not required.** The [source-only policy](qualification/source-functions-3/POLICY.md) is enforced before new Docker builds and applied retrospectively to existing archives.\n\nUse [qualified-dataset/index.json](qualified-dataset/index.json) for membership and artifact paths, [catalog decisions](qualification/source-functions-3/catalog-decisions.json) for exclusions and unassessed cases, and the [build/browser report](verification/hufang-builds-2026-11-08/README.md) for independent Hufang verification. Selected libraries with zero accepted function pairs remain explicit; pair counts are not a source-eligibility gate.\n\nEarlier cohorts are preserved in Git history and [historical-cohorts/](historical-cohorts/). Both active evaluation manifests point to the source-qualified v2 records, with the [module-dependency-only correspondence rule](qualification/module-dependencies/POLICY.md). The following historical catalog does not define current membership.\n\n"
summary=['## Final dataset by bundler','', 'The final scope is **Webpack, Vite, esbuild, Rollup, Turbopack, Parcel, and Bun**, in the established popularity order. Duplicate libraries are permitted. Standalone vendor/global-script copies remain excluded from function-pair collection. tsup, Rolldown, and Rspack are outside the final dataset; their historical build/capture evidence remains archived. See the [cohort policy](qualification/source-functions-3/cohort-policy.json).','', '| Bundler | Repositories | Library instances | Function pairs |','|---|---:|---:|---:|']
for group in order:summary.append('| '+group+' | '+' | '.join(f'{n:,}' for n in groups[group])+' |')
summary+=['| **Total** | **'+str(index['repositoryCount'])+'** | **'+str(index['libraryInstanceCount'])+'** | **'+f"{index['oneToOnePairs']:,}"+'** |','', 'See the [per-group repository tables](qualified-dataset/README.md#final-repository-tables) for each repository’s library and function-pair counts.','', 'The former 41-repository cohort is preserved in [historical-cohorts/module-only-41b48d7/](historical-cohorts/module-only-41b48d7/).','']
readme.write_text(prefix+'\n'.join(summary)+'\n'+marker+historical)
old=root/'qualification/initial-anchors-3/POLICY.md';oldtext=old.read_text()
notice='> Historical policy, superseded on 2026-11-09. The active [source-only policy](../source-functions-3/POLICY.md) requires 3–10 libraries and no initial-anchor threshold.\n\n'
if not oldtext.startswith('> Historical policy'):old.write_text(notice+oldtext)
f=root/'function-ground-truth/README.md';ft=f.read_text();ft=ft.replace('production-only, initial-anchor-qualified dataset','production-only, source-function-qualified dataset');f.write_text(ft)
print('Published source-only entry points:',index['repositoryCount'],index['libraryInstanceCount'],index['oneToOnePairs'])
