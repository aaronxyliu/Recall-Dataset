import collections
import hashlib
import json
import pathlib
import shutil
import subprocess
import sys
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parent.parent/'module-dependencies'))
from scope import load as load_module_scope
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parent.parent/'no-duplicate-libraries'))
from check import load as load_duplicate_audit
from ownership import build as build_ownership

base=pathlib.Path(__file__).resolve().parent;root=base.parents[1];dataset=root/'qualified-dataset';collector=root/'verification/hufang-builds-2026-11-08/collector'
read=lambda p:json.loads(p.read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
module_policy=read(base.parent/'module-dependencies/policy.json')
duplicate_policy=read(base.parent/'no-duplicate-libraries/policy.json')
policy=read(base/'policy.json');entries=[];decisions=[];excluded=read(base/'excluded-subjects.json')
previous={row['subject']:row for row in read(dataset/'index.json')['subjects']} if (dataset/'index.json').exists() else {}
for subject in read(base/'plan.json'):
 key=subject['subject'];receipt=base/'results'/key/'qualification.json'
 if key in excluded:decisions.append({'subject':key,'status':'excluded','reason':excluded[key]['reason'],'exclusionType':excluded[key].get('exclusionType','user-request')});continue
 if not receipt.exists():decisions.append({'subject':key,'status':'unassessed','reason':'source preflight incomplete'});continue
 q=read(receipt);decision={'subject':key,'sourceEligibility':q['status'],'selectedLibraries':q['selectedLibraries'],'candidateCount':len(q['candidates']),'qualification':str(receipt.relative_to(root))}
 if q['status']!='passed':decision.update(status='excluded' if q['status']=='not-qualified' else 'unassessed',reason=('fewer than three source-eligible libraries remain after duplicate-safe candidate filtering' if q.get('selectionOverride',{}).get('duplicateAudit') else q.get('reason')));decisions.append(decision);continue
 if not subject.get('record') or not subject.get('pageVerified'):decision.update(status='unassessed',reason='source rule passed; intended production page/capture not independently verified');decisions.append(decision);continue
 record=pathlib.Path(subject['record']);gt=read(record)
 try:module_scope,module_directory=load_module_scope(key,subject['commit'],gt['capture'])
 except (ValueError,AssertionError) as error:decision.update(status='unassessed',reason=str(error));decisions.append(decision);continue
 selected=q['selectedLibraries'];manifest=read(receipt.parent/'frontend-package.json')
 assert policy['minLibrariesPerRepository']<=len(selected)<=policy['maxLibrariesPerRepository'];assert set(selected)<=set(manifest.get('dependencies',{}));assert q['provenance']['frontendManifestSHA256']==sha(receipt.parent/'frontend-package.json')
 try:duplicate_audit,duplicate_owners,unscored,owner_universe=load_duplicate_audit(key,subject['commit'],gt['capture'],receipt.parent/'frontend-package.json',selected)
 except (ValueError,AssertionError,KeyError) as error:decision.update(status='unassessed',reason='Duplicate audit: '+str(error));decisions.append(decision);continue
 for name in selected:
  library=next(row for row in q['libraries'] if row['library']==name);assert library['qualified'] and len(library['witnesses'])>=policy['minFunctionsPerLibrary']
 dest=dataset/key;ground=dest/'ground-truth';ground.mkdir(parents=True,exist_ok=True);work=base/'work'/key/'pair-rebuild';raw=work/'raw';raw.mkdir(parents=True,exist_ok=True)
 for asset in gt['capture']['assets']:
  for obj,folder,ext in [(asset,'runtime-js','js'),(asset.get('map',{}),'source-maps','map')]:
   digest=obj.get('sha256')
   if not digest:continue
   original=(record.parent/obj.get('localPath',folder+'/'+digest+'.'+ext)).resolve();assert sha(original)==digest;link=raw/(digest+'.'+ext)
   if not link.exists():link.symlink_to(original)
 if (dest/'module-evidence').exists():shutil.rmtree(dest/'module-evidence')
 shutil.copytree(module_directory/'evidence',dest/'module-evidence')
 for evidence in module_scope['evidence']:evidence['path']=evidence['path'].replace('evidence/','module-evidence/',1)
 (dest/'module-scope.json').write_text(json.dumps(module_scope,indent=2)+'\n')
 assert duplicate_audit['provenance']['scopeSHA256']==sha(dest/'module-scope.json')
 source_ownership={**build_ownership(q,{**gt,'_path':str(record)}),**duplicate_owners}
 hashes={}
 for proof in owner_universe.values():hashes.setdefault(proof['sha256'],set()).add(proof['library'])
 ambiguous_hashes=sorted(digest for digest,names in hashes.items() if len(names)>1)
 certificate={**duplicate_audit,'policy':duplicate_policy,'candidates':[row for row in duplicate_audit['candidates'] if row['library'] in selected],'unscoredLibraries':unscored,'sourceOwnershipAmbiguousHashes':ambiguous_hashes,'authoritativeAuditSHA256':sha(base.parent/'no-duplicate-libraries/results'/key/'audit.json')}
 (dest/'duplicate-audit.json').write_text(json.dumps(certificate,indent=2)+'\n')
 (dest/'source-ownership.json').write_text(json.dumps(source_ownership,indent=2)+'\n')
 selection={'repo':subject['repo'],'commit':subject['commit'],'selected':[name for name in selected if name not in unscored],'sourceEligibleSelected':selected,'unscoredLibraries':unscored,'sourceOwnership':source_ownership,'sourceOwnershipAmbiguousHashes':ambiguous_hashes,'moduleScope':module_scope};(work/'selection.json').write_text(json.dumps(selection,indent=2)+'\n');(work/'capture.json').write_text(json.dumps(gt['capture'],indent=2)+'\n')
 signature=hashlib.sha256(json.dumps({'record':sha(record),'selected':selected,'collector':sha(collector/'relations.mjs'),'verifier':sha(collector/'verify_pairs.mjs'),'policy':sha(base/'policy.json'),'sourceOwnership':source_ownership,'moduleScope':sha(dest/'module-scope.json'),'modulePolicy':module_policy,'duplicateAudit':sha(dest/'duplicate-audit.json'),'duplicatePolicy':duplicate_policy},sort_keys=True).encode()).hexdigest();complete=ground/'func-mapping.json'
 prior=read(dest/'qualification.json').get('organizationSignature') if (dest/'qualification.json').exists() else None
 if not complete.exists() or prior!=signature:
  cached=read(complete) if complete.exists() and previous.get(key,{}).get('recordsSHA256')==sha(complete) else None
  provenance=(cached or {}).get('provenance',{})
  reuse=bool(cached and cached.get('selectedLibraries')==selected and provenance.get('archiveRecordSHA256')==sha(record) and provenance.get('collectorSHA256')==sha(collector/'relations.mjs') and provenance.get('spanVerifierSHA256')==sha(collector/'verify_pairs.mjs') and provenance.get('sourceOwnershipSHA256')==sha(base/'work'/key/'pair-rebuild/selection.json') and cached.get('correspondencePolicy')==module_policy and provenance.get('moduleScopeSHA256')==sha(dest/'module-scope.json'))
  if reuse:relations=cached
  else:
   with (work/'verify.log').open('w') as log:
    for script in ['relations.mjs','verify_pairs.mjs']:subprocess.run(['node','--max-old-space-size=6144',str(collector/script),str(work),str(raw)],check=True,stdout=log,stderr=subprocess.STDOUT,timeout=1200)
   relations=read(work/'relations.json')
  relations.pop('qualification',None);capture=json.loads(json.dumps(gt['capture']));keep=set()
  for asset in capture['assets']:
   for obj,folder,ext in [(asset,'runtime-js','js'),(asset.get('map',{}),'source-maps','map')]:
    digest=obj.get('sha256')
    if not digest:continue
    local=folder+'/'+digest+'.'+ext;target=ground/local;target.parent.mkdir(exist_ok=True)
    if not target.exists():shutil.copyfile(raw/(digest+'.'+ext),target)
    assert sha(target)==digest;obj['localPath']=local;keep.add(local)
  for folder in ['runtime-js','source-maps']:
   if (ground/folder).exists():
    for old in (ground/folder).iterdir():
     if str(old.relative_to(ground)) not in keep:old.unlink()
  relations['coverage']={**relations.get('coverage',{}),**{name:0 for name in unscored}}
  relations.update(capture=capture,selectedLibraries=selected,unscoredLibraries=unscored,qualificationPolicy=policy,correspondencePolicy=module_policy,libraryMultiplicityPolicy=duplicate_policy,provenance={'upstreamCommit':subject['commit'],'archiveRecord':str(record.relative_to(root)),'archiveRecordSHA256':sha(record),'collectorSHA256':sha(collector/'relations.mjs'),'spanVerifierSHA256':sha(collector/'verify_pairs.mjs'),'sourceOwnershipSHA256':sha(work/'selection.json'),'moduleScopeSHA256':sha(dest/'module-scope.json'),'duplicateAuditSHA256':sha(dest/'duplicate-audit.json')});complete.write_text(json.dumps(relations,indent=2)+'\n')
 evaluation_libraries=[name for name in selected if name not in unscored]
 final_record=read(complete)
 if final_record.get('evaluationLibraries')!=evaluation_libraries:
  final_record['evaluationLibraries']=evaluation_libraries;complete.write_text(json.dumps(final_record,indent=2)+'\n')
 if (dest/'eligibility').exists():shutil.rmtree(dest/'eligibility')
 active=json.loads(json.dumps(q));active['libraries']=[row for row in active['libraries'] if row['library'] in selected];active['candidateDecisionRecord']=str(pathlib.Path('../../..')/receipt.relative_to(root));active['sourceEligibilityRecordSHA256']=sha(receipt);active['organizationSignature']=signature
 for library in active['libraries']:
  original=receipt.parent/library['proofDirectory'];target=dest/'eligibility'/library['proofDirectory'];target.mkdir(parents=True,exist_ok=True)
  for witness in library['witnesses']:
   p=target/witness['source'];p.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(original/witness['source'],p);assert sha(p)==witness['sourceSHA256']
  for file in ['package.json','source-origin.json']:
   if (original/file).exists():shutil.copyfile(original/file,target/file)
  for license in library.get('licenses',[]):
   p=target/license['path'];p.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(original/license['path'],p);assert sha(p)==license['sha256']
  library['proofDirectory']=str(target.relative_to(dest))
 (dest/'qualification.json').write_text(json.dumps(active,indent=2)+'\n');shutil.copyfile(receipt.parent/'frontend-package.json',dest/'frontend-package.json')
 if (dest/'initial-anchors.json').exists():(dest/'initial-anchors.json').unlink()
 subprocess.run(['node',str(base/'references.mjs'),str(record),str(work/'selection.json'),str(dest)],check=True,timeout=600)
 pairs=read(complete)['pairs'];assert all(pair['library'] in selected for pair in pairs);counts={name:sum(pair['library']==name for pair in pairs) for name in selected}
 entry={'subject':key,'repo':subject['repo'],'commit':subject['commit'],'records':str(complete.relative_to(dataset)),'recordsSHA256':sha(complete),'selectedLibraries':selected,'libraryCount':len(selected),'sourceFunctionWitnesses':{row['library']:len(row['witnesses']) for row in active['libraries']},'libraryPairs':counts,'oneToOnePairs':len(pairs),'imageID':gt.get('imageID',gt.get('capture',{}).get('imageID')),'qualification':str((dest/'qualification.json').relative_to(dataset)),'moduleScope':str((dest/'module-scope.json').relative_to(dataset)),'duplicateAudit':str((dest/'duplicate-audit.json').relative_to(dataset)),'unscoredLibraries':unscored,'evaluationLibraries':evaluation_libraries};entries.append(entry);decision.update(status='included',reason=None);decisions.append(decision)
 (dest/'README.md').write_text('# '+subject['repo']+'\n\nPinned commit `'+subject['commit']+'`. '+str(len(selected))+' declared production libraries each have at least three verified source functions with at least ten own-body POG property-operation features. No initial-anchor or matching-count criterion is used. See `qualification.json`, `eligibility/`, and `frontend-package.json` for standalone source witnesses.\n\n`ground-truth/func-mapping.json` contains '+str(len(pairs))+' independently span-verified one-to-one pairs for the selected libraries. Pair counts may be zero for a selected library; they are not an acceptance condition. Only dependencies imported into reviewed module build outputs contribute pairs; global script lists, copied standalone vendors and unreviewed/external assets are excluded before building the correspondence graph. Output format is independent of module ingress. See `module-scope.json` and `module-evidence/`. Selected scored libraries also pass the full-runtime duplicate audit, including global copies outside module scoring scope. See `duplicate-audit.json`; every selected library must have positive audited module evidence; previously unobserved dependencies are removed. All captured JS and maps are preserved byte-for-byte. `reference-manifest.json` lists available original source text from those maps separately from the source-only eligibility proof. The existing collector attributes pairs by package name and does not establish one installed version for every captured copy.\n')
 print('organized',key,len(selected),len(pairs),flush=True)
included={entry['subject'] for entry in entries}
for file in dataset.glob('*/*/qualification.json'):
 if str(file.parent.relative_to(dataset)) not in included:shutil.rmtree(file.parent)
index={'schema':'recall.qualified-dataset/v2','policy':policy,'correspondencePolicy':module_policy,'libraryMultiplicityPolicy':duplicate_policy,'repositoryCount':len(entries),'libraryInstanceCount':sum(row['libraryCount'] for row in entries),'sourceFunctionWitnessCount':sum(sum(row['sourceFunctionWitnesses'].values()) for row in entries),'oneToOnePairs':sum(row['oneToOnePairs'] for row in entries),'zeroPairLibraryInstances':sum(sum(n==0 for n in row['libraryPairs'].values()) for row in entries),'subjects':entries};(dataset/'index.json').write_text(json.dumps(index,indent=2)+'\n');(base/'decisions.json').write_text(json.dumps(decisions,indent=2)+'\n');print('TOTAL',index['repositoryCount'],index['libraryInstanceCount'],index['oneToOnePairs'])
