import json,pathlib,subprocess,os,time,urllib.request,shutil,hashlib
root=pathlib.Path(__file__).resolve().parents[2];dest=pathlib.Path(__file__).resolve().parent/'forkify';key='parcel/jonasschmedtmann--complete-javascript-course';image='recall-repaired/forkify:76b8b79b2994';name='recall-map-repair-forkify';env={**os.environ,'DOCKER_HOST':'unix:///Users/aaronxyliu/.colima/default/docker.sock'}
run=lambda args,**kw:subprocess.run(args,check=True,env=env,**kw)
source=root/'builds'/key;collector=root/'verification/hufang-builds-2026-11-08/collector';hook=root/'verification/student-builds-2026-11-08/page-hook.mjs'
qpath=root/'qualification/source-functions-3/results'/key/'qualification.json';q=json.loads(qpath.read_text());assert q['status']=='passed'
config={'url':'http://127.0.0.1:18809/','manifest':str(source/'18-forkify/final/package.json'),'preparePage':str(hook)}
(dest/'HOST.md').write_text('Repaired production build, landing route only.\n\n```recall-capture\n'+json.dumps(config,indent=2)+'\n```\n');(dest/'libraries.json').write_text(json.dumps(q['selectedLibraries'])+'\n');shutil.copyfile(qpath,dest/'source-preflight.json')
run(['docker','run','-d','--name',name,'-p','127.0.0.1:18809:80',image],stdout=subprocess.DEVNULL)
try:
 for attempt in range(30):
  try:
   if urllib.request.urlopen(config['url'],timeout=2).status==200:break
  except Exception:time.sleep(1)
 else:raise RuntimeError('Page never became ready')
 image_id=subprocess.check_output(['docker','image','inspect',image,'--format','{{.Id}}'],env=env,text=True).strip()
 with (dest/'capture.log').open('w') as log:
  subprocess.run(['node',str(collector/'collect.mjs'),str(source),str(dest/'libraries.json'),str(dest/'HOST.md'),str(dest/'ground-truth')],env={**env,'RECALL_SCREENSHOT':str(dest/'page.png'),'RECALL_PAGE_EVIDENCE':str(dest/'page.json')},stdout=log,stderr=subprocess.STDOUT,check=True,timeout=300)
 p=dest/'ground-truth/func-mapping.json';g=json.loads(p.read_text());assert g['pairs'] and not g['failures'];assert g['capture']['pageStatus']==200 and not g['capture']['pageErrors'];g.update(repo='jonasschmedtmann/complete-javascript-course',commit=q['commit'],imageID=image_id);g['capture'].update(repo=g['repo'],commit=q['commit'],imageID=image_id)
 for a in g['capture']['assets']:
  a['localPath']='runtime-js/'+a['sha256']+'.js'
  if a.get('map',{}).get('sha256'):a['map']['localPath']='source-maps/'+a['map']['sha256']+'.map'
 g['buildProvenance']={'image':image,'imageID':image_id,'recipeSHA256':hashlib.sha256((root/'bundling-dataset'/key/'Dockerfile').read_bytes()).hexdigest(),'sourcePreflightSHA256':hashlib.sha256(qpath.read_bytes()).hexdigest(),'repair':'Disable Parcel 2.0.0-beta.1 scope hoisting; retain production minification.'};p.write_text(json.dumps(g,indent=2)+'\n')
 target=root/'bundling-dataset'/key/'ground-truth';shutil.copytree(dest/'ground-truth',target,dirs_exist_ok=True)
 shutil.copyfile('/tmp/recall-forkify-map-rebuild.log',dest/'build.log');(dest/'verification.json').write_text(json.dumps({'subject':key,'status':'verified','imageID':image_id,'oneToOnePairs':len(g['pairs']),'recipeSHA256':g['buildProvenance']['recipeSHA256'],'sourcePreflightSHA256':g['buildProvenance']['sourcePreflightSHA256'],'pageErrors':g['capture']['pageErrors'],'failures':g['failures']},indent=2)+'\n');print('Repaired capture',len(g['pairs']))
finally:subprocess.run(['docker','rm','-f',name],env=env,stdout=subprocess.DEVNULL,check=False)
