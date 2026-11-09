"""Check for tracked public/vendor scripts hidden inside module-output URL families."""
import pathlib,json,subprocess,hashlib,urllib.parse,collections
base=pathlib.Path(__file__).resolve().parent;root=base.parents[1];read=lambda p:json.loads(p.read_text());plan={s['subject']:s for s in read(root/'qualification/source-functions-3/plan.json')};rows=[]
for path in sorted((base/'results').glob('*/*/scope.json')):
 scope=read(path);s=plan[scope['subject']];files=subprocess.check_output(['git','-C',s['sourceRepo'],'ls-tree','-r','--name-only',s['commit']],text=True).splitlines();byname=collections.defaultdict(list)
 for file in files:
  if 'public' in pathlib.PurePosixPath(file).parts and file.endswith(('.js','.mjs','.cjs')):byname[pathlib.PurePosixPath(file).name].append(file)
 matches=[]
 for a in scope['assets']:
  name=pathlib.PurePosixPath(urllib.parse.urlparse(a['url'].replace('<local>','http://local')).path).name
  for file in byname[name]:
   raw=subprocess.check_output(['git','-C',s['sourceRepo'],'show',s['commit']+':'+file])
   if hashlib.sha256(raw).hexdigest()==a['sha256']:matches.append({'url':a['url'],'sha256':a['sha256'],'pinnedPublicFile':file,'role':a['role']})
 rows.append({'subject':s['subject'],'publicScriptFilesChecked':sum(len(byname[pathlib.PurePosixPath(urllib.parse.urlparse(a['url'].replace('<local>','http://local')).path).name]) for a in scope['assets']),'matches':matches})
 assert not any(a['role']=='module-build-output' for a in matches),(s['subject'],matches)
(base/'static-copy-audit.json').write_text(json.dumps({'status':'passed','subjects':rows},indent=2)+'\n');print('Public-script copy checks passed for',len(rows),'subjects')
