"""Organize pinned existing subjects by the bundler used by a specific build target."""
from pathlib import Path
import os,json,re,hashlib,datetime,shutil,csv,sys
ROOT=Path(__file__).resolve().parents[3]/'ReCall Exp';UPSTREAM=Path('/Users/aaronxyliu/GitHub/framework-sink-dataset/datasets');FALLBACK=Path('/Users/aaronxyliu/GitHub/framework-study/corpus/rq1-60-sources')
OUT=Path(sys.argv[1]) if len(sys.argv)>1 else Path(__file__).resolve().parents[2]/'datasets/bundling-dataset'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();read=lambda p:json.loads(p.read_text());write=lambda p,x:p.write_text(json.dumps(x,indent=2,ensure_ascii=False)+'\n')
if OUT.exists() and not (OUT/'selection.json').exists():raise RuntimeError('Refusing to populate an unrelated existing directory')
OUT.mkdir(parents=True,exist_ok=True)
cohorts={c:{'selection':read(UPSTREAM/c/'selection.json'),'plan':read(UPSTREAM/c/'plan.json')} for c in ['primary-60','alternative-52']}
allrows=[];lookup={}
for cohort,meta in cohorts.items():
 plans={p['repo']:p for p in meta['plan']}
 for subject in meta['selection']['subjects']:
  slug=subject['slug'];source=UPSTREAM/cohort/'sources'/slug
  if not source.exists():source=FALLBACK/slug
  project=source/plans[subject['repo']].get('relative','.')
  deps={};scripts={};builders={}
  for f in dict.fromkeys([source/'package.json',project/'package.json']):
   if f.exists():
    try:d=read(f)
    except:continue
    deps.update({**d.get('dependencies',{}),**d.get('devDependencies',{})});scripts[str(f.relative_to(source))]=d.get('scripts',{})
  if (project/'angular.json').exists():
   try:a=read(project/'angular.json');builders={k:v.get('architect',v.get('targets',{})).get('build',{}).get('builder') for k,v in a.get('projects',{}).items()}
   except:pass
  row={'cohort':cohort,'repo':subject['repo'],'slug':slug,'commit':subject['commit'],'recordedOutcome':subject.get('outcome'),'sourceRoot':str(source),'sourceAvailable':source.exists(),'recordedProject':plans[subject['repo']].get('relative','.'),'recordedBuildCommand':plans[subject['repo']].get('buildCommand'),'relevantDeclaredDependencies':{k:v for k,v in deps.items() if k in ['esbuild','vite','rolldown','rolldown-vite','@rspack/core','@rspack/cli','@rsbuild/core','next','parcel','parcel-bundler']},'angularBuildTargets':builders,'scripts':scripts}
  allrows.append(row);lookup[(cohort,slug)]=(subject,plans[subject['repo']],source,row)
# Representative diversity: three targets for each sufficiently populated group, all available Rspack targets,
# and the discovered Parcel subproject with its unbuilt status preserved.
choices=[
 ('esbuild','primary-60','realworld-apps--angular-realworld-example-app','.', ['angular.json'], 'Angular application builder','recorded-build-verified'),
 ('esbuild','primary-60','Ismaestro--angular-example-app','.', ['angular.json'], 'Angular application builder','recorded-build-verified'),
 ('esbuild','primary-60','swimlane--ngx-charts','.', ['angular.json'], 'Angular demo application builder; not ng-packagr library build','recorded-build-verified'),
 ('rspack','primary-60','zxwk1998--vue-admin-better','.', ['rspack.js','rspack.config.js'], 'Direct Rspack production build','recorded-build-verified'),
 ('rolldown','primary-60','agalwood--Motrix','.', ['vite.renderer.web.config.ts'], 'Vite 8 browser renderer build','recorded-build-verified'),
 ('rolldown','alternative-52','cypress-io--cypress-realworld-app','.', ['vite.config.ts'], 'Vite 8 production build','recorded-build-verified'),
 ('rolldown','alternative-52','Hiram-Wong--ZyPlayer','.', ['electron.vite.config.ts'], 'Electron renderer via vite npm alias to rolldown-vite','recorded-build-verified'),
 ('turbopack','primary-60','justjavac--wechat-miniapp-radar','.', ['next.config.ts','next.config.js','next.config.mjs'], 'Next.js production Turbopack build','recorded-build-verified'),
 ('turbopack','primary-60','DayuanJiang--next-ai-draw-io','.', ['next.config.ts','next.config.js','next.config.mjs'], 'Next.js production Turbopack build; not Electron esbuild target','recorded-build-verified'),
 ('turbopack','primary-60','rahuldkjain--github-profile-readme-generator','.', ['next.config.ts','next.config.js','next.config.mjs'], 'Next.js production build --turbo','recorded-build-verified'),
 ('parcel','alternative-52','mattermost--focalboard','experiments/webext', ['manifest.json','.parcelrc','tsconfig.json'], 'Focalboard Web Clipper browser extension; separate from recorded webpack webapp','configuration-only-not-built')]
subjects=[];copied_files=[]
for bundler,cohort,slug,relative,config_names,mechanism,status in choices:
 old,plan,source,audit=lookup[(cohort,slug)];project=source/relative
 assert source.exists() and project.exists(),(slug,'missing source')
 stamp=source/'.rq1-provenance.json';assert stamp.exists() and read(stamp)['commit']==old['commit'],(slug,'provenance mismatch')
 dest=OUT/bundler/slug;ev=dest/'evidence';ev.mkdir(parents=True,exist_ok=True)
 for link,target in [(dest/'source',source),(dest/'project',project)]:
  if link.is_symlink():assert link.resolve()==target.resolve()
  elif link.exists():raise RuntimeError('Refusing to overwrite '+str(link))
  else:link.symlink_to(target,target_is_directory=True)
 evidence=[]
 snapshot=[(project/'package.json','package.json'),(stamp,'source-provenance.json')]
 for name in config_names:
  p=project/name
  if p.exists():snapshot.append((p,name.replace('/','__')))
 for name in ['README.md','README.MD','README.zh-CN.md']:
  p=project/name
  if p.exists():snapshot.append((p,'upstream-'+name));break
 for name in ['README.md','BUILD.md']:
  p=source/name
  if p.exists() and p!=project/name:snapshot.append((p,'repository-'+name))
 for p,name in snapshot:
  q=ev/name;shutil.copyfile(p,q);evidence.append({'path':str(q.relative_to(OUT)),'originalPath':str(p),'sha256':sha(q)});copied_files.append(q)
 pkg=read(project/'package.json');all_deps={**pkg.get('dependencies',{}),**pkg.get('devDependencies',{})}
 log=UPSTREAM/cohort/'results/build-logs'/f'{slug}.log';log_lines=log.read_text(errors='replace').splitlines() if log.exists() else []
 filters={'esbuild':r'Application bundle generation complete|Initial chunk files','rspack':r'Rspack [\d.]+ compiled successfully','rolldown':r'vite v[\d.]+.*building|rolldown-runtime|rolldown:vite-resolve','turbopack':r'Next.js [\d.]+ \(Turbopack\)','parcel':r'IMPOSSIBLE-CURRENT-PROFILE-NOT-RECORDED'}
 clean=[re.sub(r'\x1b\[[0-9;]*m','',ln) for ln in log_lines];excerpts=[{'line':i+1,'text':ln[:1000]} for i,ln in enumerate(clean) if re.search(filters[bundler],ln)];excerpts=excerpts[-12:]
 if status=='recorded-build-verified':assert old.get('outcome')=='served' and excerpts,(slug,'no matching successful build evidence')
 log_info={'path':str(log),'sha256':sha(log),'excerpts':excerpts,'appliesToSelectedTarget':status=='recorded-build-verified'} if log.exists() else None
 write(ev/'build-log-evidence.json',log_info)
 if bundler=='esbuild':
  targets=read(project/'angular.json')['projects'];selected_targets=[k for k,v in targets.items() if v.get('architect',v.get('targets',{})).get('build',{}).get('builder')=='@angular/build:application'];assert selected_targets
  version='@angular/build '+all_deps.get('@angular/build','unknown')+'; esbuild binary version not separately attested'
 elif bundler=='rspack':version=re.findall(r'Rspack ([\d.]+) compiled successfully','\n'.join(clean))[-1]
 elif bundler=='rolldown':
  vite_versions=re.findall(r'vite v([\d.]+).*building','\n'.join(clean));version=('rolldown-vite ' if 'rolldown-vite' in all_deps.get('vite','') else 'Vite ')+vite_versions[-1]+'; Rolldown backend'
 else:version=('Next.js '+re.findall(r'Next.js ([\d.]+) \(Turbopack\)','\n'.join(clean))[-1]) if bundler=='turbopack' else 'Parcel '+all_deps['parcel']+' (declared; not execution-verified)'
 mf=UPSTREAM/cohort/'artifacts'/f'{slug}.map-enabled.manifest.json';artifact_dir=UPSTREAM/cohort/'artifacts'/slug;artifact_links=[];bundles=[]
 if status=='recorded-build-verified' and mf.exists():
  saved=dest/'map-enabled.manifest.json';shutil.copyfile(mf,saved);artifact_links.append({'kind':'map-enabled-manifest','path':str(mf),'sha256':sha(mf)})
  for f in read(mf)['files']:
   js=UPSTREAM/cohort/'artifacts'/f['js'];mp=UPSTREAM/cohort/'artifacts'/f['map'];assert sha(js)==f['jsSha256'] and sha(mp)==f['mapSha256'];bundles.append({'js':str(js),'map':str(mp),'jsSha256':f['jsSha256'],'mapSha256':f['mapSha256'],'profile':'map-enabled'})
  mpdir=UPSTREAM/cohort/'artifacts/map-enabled'/slug
  if mpdir.exists():artifact_links.append({'kind':'map-enabled-artifact-directory','path':str(mpdir)})
 if status=='recorded-build-verified' and artifact_dir.exists():
  artifact_links.append({'kind':'saved-artifact-directory','path':str(artifact_dir)})
  for js in artifact_dir.rglob('*.js'):
   mp=Path(str(js)+'.map')
   if mp.exists():bundles.append({'js':str(js),'map':str(mp),'jsSha256':sha(js),'mapSha256':sha(mp),'profile':'existing-saved-artifact; see original metadata'})
 for n,a in enumerate(artifact_links):
  if 'directory' in a['kind']:
   link=dest/('artifacts-'+str(n))
   if not link.exists() and not link.is_symlink():link.symlink_to(Path(a['path']),target_is_directory=True)
 build_command=plan.get('buildCommand') if status=='recorded-build-verified' else pkg['scripts']['build']
 item={'id':slug+('::webext' if bundler=='parcel' else ''),'repo':old['repo'],'slug':slug,'commit':old['commit'],'cohort':cohort,'bundler':bundler,'bundlingMechanism':mechanism,'versionEvidence':version,'status':status,'targetKind':'browser-extension' if bundler=='parcel' else 'browser-application-or-renderer','sourceRoot':str(source),'projectRelative':relative,'projectPath':str(project),'directory':str(dest.relative_to(OUT)),'buildCommand':build_command,'recordedOriginalApplicationProject':plan.get('relative','.'),'recordedOriginalApplicationBuildCommand':plan.get('buildCommand'),'recordedOriginalApplicationOutcome':old.get('outcome'),'evidence':evidence,'buildLog':log_info,'savedArtifacts':artifact_links,'bundleMapPairs':len(bundles),'simulationReadiness':'saved-bundle-map-pairs-available; target/oracle audit still required' if bundles else 'requires-artifact-collection-or-build','limitations':(['This Parcel browser extension was not built or served by the original corpus. The original served Focalboard webapp uses webpack.'] if bundler=='parcel' else [])+(['Saved artifacts are links; source-map usability is not established by this organization task.'] if bundles else ['No saved bundle/map pair is linked for this selected target.'])}
 write(dest/'subject.json',item);write(dest/'artifacts.json',bundles);subjects.append(item)
 note=[f"# {old['repo']} — {bundler}",'',f"Pinned commit: `{old['commit']}`.",f"Target: `{relative}`. Status: **{status}**.",f"Mechanism: {mechanism}.",f"Version evidence: {version}.",'','`source/` links to the existing pinned repository; `project/` links directly to the selected build target. Treat both as read-only source references. `evidence/` contains saved configuration and provenance; `subject.json` records the exact target and original build distinction.','','Build command (not executed by this organization task):','','```sh',build_command,'```','',f"Saved bundle/map pairs: {len(bundles)}. Readiness: {item['simulationReadiness']}.",'']
 for lim in item['limitations']:note.append('- '+lim)
 (dest/'README.md').write_text('\n'.join(note)+'\n')
# Record why plausible dependency-only matches were not classified as esbuild applications.
negative=[{'repo':'ToolJet/ToolJet','declaredTool':'esbuild','decision':'not selected as esbuild','reason':'The recorded frontend build invokes webpack --mode=production --devtool=source-map.'},{'repo':'twentyhq/twenty','declaredTool':'esbuild','decision':'not selected as esbuild','reason':'The recorded frontend build invokes Vite 8/Rolldown; esbuild is not the main browser bundler.'},{'repo':'DayuanJiang/next-ai-draw-io','declaredTool':'esbuild','decision':'classified as Turbopack browser target','reason':'esbuild is used by a separate Electron compilation script; the recorded web build banner is Next.js with Turbopack.'},{'repo':'mattermost/focalboard','decision':'Parcel subproject only; configuration-only','reason':'experiments/webext/package.json declares Parcel and a parcel build command; the original recorded webapp is a different webpack target.'}]
counts={g:sum(s['bundler']==g for s in subjects) for g in ['esbuild','rspack','rolldown','turbopack','parcel']}
manifest={'schemaVersion':1,'id':'bundling-dataset','title':'bundling dataset','createdAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sourceDatasetRoot':str(UPSTREAM),'selectionPolicy':'Representative existing pinned targets: three per well-populated category, one Rspack target, and one Parcel extension subproject. Classification follows the selected production build and recorded log evidence, not mere dependency presence. No new repositories fetched and no builds/models executed.','sourceLinkPolicy':'Group directories contain source/project symlinks to existing pinned source trees, not new clones or immutable source archives. Snapshot hashes pin inspected metadata/configuration; existing source provenance supplies the recorded commit.','counts':{'subjects':len(subjects),'buildVerified':sum(s['status']=='recorded-build-verified' for s in subjects),'configurationOnly':sum(s['status']!='recorded-build-verified' for s in subjects),'byBundler':counts},'subjects':subjects}
write(OUT/'selection.json',manifest);write(OUT/'audit.json',{'cohortSlotsAudited':len(allrows),'uniqueRepositories':len({r['repo'] for r in allrows}),'subjects':allrows,'classificationNotes':negative,'officialBuildSystemReferences':['https://angular.dev/tools/cli/build-system-migration','https://vite.dev/blog/announcing-vite8']})
with (OUT/'subjects.csv').open('w') as f:
 fields=['bundler','repo','commit','cohort','projectRelative','status','versionEvidence','bundleMapPairs','simulationReadiness'];w=csv.DictWriter(f,fieldnames=fields);w.writeheader();w.writerows({k:s[k] for k in fields} for s in subjects)
for group in counts:
 ss=[s for s in subjects if s['bundler']==group];(OUT/group/'README.md').write_text('\n'.join([f'# {group}','','| Repository | Target | Status |','|---|---|---|']+[f"| [{s['repo']}]({s['slug']}/README.md) | `{s['projectRelative']}` | {s['status']} |" for s in ss])+ '\n')
text=['# bundling dataset','','A bundler-organized subset of the existing pinned framework corpus. It contains **11 repository targets: 10 recorded-build-verified browser applications/renderers and one configuration-only Parcel browser extension**. No new builds, downloads, or model experiments were performed.','','## Layout','','```text','bundling-dataset/','  esbuild/','  rspack/','  rolldown/','  turbopack/','  parcel/','  selection.json','  subjects.csv','  audit.json','  verification.json','```','','Each repository folder contains `subject.json`, `README.md`, saved evidence, and links to its original source/project. Existing checkouts and datasets are not moved or modified. Source links are read-only references, not immutable copies.','','## Selected targets','','| Bundler | Repository | Build target | Status | Saved JS/map pairs |','|---|---|---|---|---:|']
for s in subjects:text.append(f"| {s['bundler']} | [{s['repo']}]({s['directory']}/README.md) | `{s['projectRelative']}` | {s['status']} | {s['bundleMapPairs']} |")
text+=['','## Classification and evidence','','The source audit covers 112 cohort slots (108 distinct repositories) in primary-60 and alternative-52. Representative selection preserves pinned commits and target-specific build commands. Three examples are selected for each sufficiently populated category; Rspack has one selected target. Full candidate metadata is retained in `audit.json`.','','- **esbuild:** Angular application-builder browser outputs. These targets use `@angular/build:application`; their recorded logs report successful application generation. Angular documents this production build system as esbuild-based; its Vite development server is a different role. See https://angular.dev/tools/cli/build-system-migration. Exact executed esbuild patch versions are not independently attested.','- **Rspack:** `zxwk1998/vue-admin-better` calls `@rspack/core`; its log records Rspack 2.2.6 successfully compiling.','- **Rolldown:** Motrix and the Cypress app record Vite 8 production builds. ZyPlayer aliases `vite` to `rolldown-vite` and emits a Rolldown renderer runtime. Vite 8 uses Rolldown (https://vite.dev/blog/announcing-vite8).','- **Turbopack:** all three selected Next.js build logs explicitly identify Turbopack, including a Next.js 15 --turbo example and two Next.js 16 examples.','- **Parcel:** Focalboard’s `experiments/webext` has an explicit Parcel dependency and `parcel build manifest.json --target prod` command. It is a browser extension, not the main Focalboard webapp. This target was not built by the original corpus, so it is configuration-only and is not claimed ready for simulation.','','Dependency presence alone is insufficient: ToolJet declares esbuild but its recorded frontend uses webpack; Twenty declares esbuild but its recorded frontend uses Vite 8/Rolldown. They are not mislabeled as esbuild application builds.','','## Readiness and provenance','','`recorded-build-verified` means a successful build/serve outcome recorded in the source corpus plus target-specific mechanism evidence. It is historical evidence; this task did not rerun builds or verify current services. A saved `.js`/`.map` pair is an availability check, not a validated function oracle. Some alternative-cohort subjects require collecting or rebuilding their artifacts before a simulation. Primary map-enabled artifacts remain distinct from other saved artifacts in each `artifacts.json`.','','Each evidence snapshot has a SHA-256 hash and original path. Log excerpts include original line numbers and a hash of the full source log. `verification.json` checks source provenance, grouping, symlinks, evidence hashes, and saved artifact hashes. Parcel remains explicitly unbuilt.','','## Rebuild this index','','The generator is maintained in the ReCall Dataset repository:','','```sh','python3 "/Users/aaronxyliu/GitHub/ReCall Research/ReCall Dataset/scripts/datasets/build-bundling-dataset.py" /path/to/new/bundling-dataset','```','','It reuses existing source trees and artifacts and never installs dependencies or runs application builds.','']
(OUT/'README.md').write_text('\n'.join(text)+'\n')
# Verify all linked source paths, exact source stamps, grouping and snapshots.
for s in subjects:
 dest=OUT/s['directory'];assert dest.parent.name==s['bundler'] and (dest/'source').resolve()==Path(s['sourceRoot']).resolve() and (dest/'project').resolve()==Path(s['projectPath']).resolve()
 for e in s['evidence']:assert sha(OUT/e['path'])==e['sha256']
 assert read(Path(s['sourceRoot'])/'.rq1-provenance.json')['commit']==s['commit']
 assert s['status']=='configuration-only-not-built' or s['buildLog']['excerpts']
 for f in read(dest/'artifacts.json'):assert sha(Path(f['js']))==f['jsSha256'] and sha(Path(f['map']))==f['mapSha256']
files=[p for p in OUT.rglob('*') if p.is_file() and not p.is_symlink() and p.name!='verification.json']
write(OUT/'verification.json',{'createdAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed','subjects':len(subjects),'groups':counts,'buildVerified':10,'configurationOnly':1,'modelCalls':0,'newBuilds':0,'generatorSha256':sha(Path(__file__)),'fileSha256':{str(p.relative_to(OUT)):sha(p) for p in files}})
print(json.dumps({'directory':str(OUT),'counts':manifest['counts'],'verification':'passed'},indent=2))
