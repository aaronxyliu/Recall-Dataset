import pathlib,json,subprocess,os,time,secrets,hashlib,shutil,urllib.request,fcntl
base=pathlib.Path(__file__).resolve().parent;root=base.parents[1];exp=root.parent/'ReCall Exp';subjects=json.loads((base/'subjects.json').read_text())
def run(s,i):
 key=s['subject'];e=base/key;p=e/'verification.json';record=json.loads(p.read_text());a=s['application'];launch=s['launch'];recipe=base/'submission'/s['submissionPath'];repo=root/'builds/hufang'/key;dest=root/'bundling-dataset'/key/'ground-truth'
 guard=(e/'.capture.lock').open('w')
 try:fcntl.flock(guard,fcntl.LOCK_EX|fcntl.LOCK_NB)
 except BlockingIOError:return
 for stale in ['captureError','captureExitCode','pageStatus','pairCount']:record.pop(stale,None)
 if dest.exists():
  if not os.environ.get('RECALL_RECAPTURE'):return
  prior=e/'previous-captures'/str(int(time.time()));prior.parent.mkdir(exist_ok=True);dest.rename(prior)
 resource_guard=(base/'docker-resource.lock').open('w');fcntl.flock(resource_guard,fcntl.LOCK_EX)
 port=19200+i;name='recall-hufang-'+str(i);runtime=e/'.runtime';runtime.mkdir(exist_ok=True);envpath=runtime/'runtime.env';compose=None;readiness_timeout=min(launch.get('readinessTimeoutSeconds',120),600);compose_wait=min(launch.get('composeWaitSeconds',readiness_timeout),1200)
 values=dict(launch.get('environment',{}));values.update({k:secrets.token_hex(24) for k in launch.get('generateEnvironment',[])})
 for k,n in launch.get('generateHexEnvironment',{}).items():values[k]=secrets.token_hex(n)
 for k,n in launch.get('generateEnvironmentBytes',{}).items():values[k]=secrets.token_urlsafe(n)
 values.update(RECALL_IMAGE=record['image'],RECALL_CONTAINER=name,RECALL_ENV_FILE=str(envpath),RECALL_PORT=str(port),RECALL_RECIPE_DIR=str(root/'bundling-dataset'/key),RECALL_SOURCE_DIR=str(repo),port=str(port))
 if key.startswith('rolldown/discourse'):values.update(POSTGRES_PASSWORD=secrets.token_hex(24),DISCOURSE_DB_HOST='db',DISCOURSE_DB_NAME='discourse',DISCOURSE_DB_USERNAME='discourse',DISCOURSE_REDIS_HOST='redis',DISCOURSE_HOSTNAME='127.0.0.1',DISCOURSE_FORCE_HTTPS='false',DISCOURSE_SECRET_KEY_BASE=secrets.token_hex(64))
 for k,v in launch.get('generateHexEnvironment',{}).items():values.setdefault(k,secrets.token_hex(v))
 for k,v in launch.get('environmentTemplates',{}).items():values[k]=v.format(**values)
 if key.startswith('rolldown/discourse'):values['DISCOURSE_DB_PASSWORD']=values['POSTGRES_PASSWORD']
 envpath.write_text(''.join(k+'='+str(v)+'\n' for k,v in values.items() if k!='port'))
 url=f"http://127.0.0.1:{port}{launch.get('route',a.get('pageRoute','/'))}"
 try:
  with (e/'runtime.log').open('w') as log:
   if launch.get('composeFile'):
    original=root/'bundling-dataset'/key/launch['composeFile'];cmd=[os.environ.get('RECALL_COMPOSE_BIN','/tmp/recall-hufang-docker-compose'),'--env-file',str(envpath),'-f',str(original),'config','--format','json'];cfg=json.loads(subprocess.check_output(cmd,stderr=log,text=True,timeout=30));service=next(k for k,v in cfg['services'].items() if v.get('container_name')==name or k=='app' or (v.get('image')==record['image'] and v.get('ports')));cfg.pop('name',None)
    for section in ['networks','volumes']:
     for resource,spec in cfg.get(section,{}).items():
      if not spec.get('external'):spec['name']=name+'-'+resource
    for k,v in cfg['services'].items():v['container_name']=name+'-'+k;v['ports']=[]
    for k,v in cfg['services'].items():
     if k!=service and v.get('build'):v['build'].setdefault('args',{}).update(HTTP_PROXY='http://host.docker.internal:7897',HTTPS_PROXY='http://host.docker.internal:7897',NO_PROXY='localhost,127.0.0.1,::1')
    cfg['services'][service].update(image=record['image'],ports=[{'target':launch.get('containerPort',3000),'published':str(port),'host_ip':'127.0.0.1','protocol':'tcp'}]);cfg['services'][service].pop('build',None)
    cf=runtime/'compose.json';cf.write_text(json.dumps(cfg,indent=2));compose=[os.environ.get('RECALL_COMPOSE_BIN','/tmp/recall-hufang-docker-compose'),'-p',name,'-f',str(cf)];subprocess.run(compose+['up','-d','--wait','--wait-timeout',str(compose_wait)],stdout=log,stderr=subprocess.STDOUT,check=True,timeout=compose_wait+900)
    record['serviceImageIDs']={k:subprocess.check_output(['docker','inspect',name+'-'+k,'--format','{{.Image}}'],text=True).strip() for k in cfg['services']}
   else:subprocess.run(['docker','run','-d','--name',name,'--env-file',str(envpath),'-p',f"127.0.0.1:{port}:{launch.get('containerPort',a.get('containerPort',3000))}",record['image']],stdout=log,stderr=subprocess.STDOUT,check=True,timeout=60)
  deadline=time.time()+readiness_timeout
  while time.time()<deadline:
   try:
    with urllib.request.urlopen(url,timeout=4) as response:
     if response.status<400:break
   except Exception:time.sleep(2)
  manifest=repo/a['packageManifest'];deps=json.loads(manifest.read_text()).get('dependencies',{});libs=record.get('sourcePreflight',{}).get('selectedLibraries') or sorted(deps)[:10];assert set(libs)<=set(deps);(e/'libraries.json').write_text(json.dumps(libs,indent=2)+'\n')
  config={'url':url,'manifest':str(manifest),'preparePage':str(base/'page-hook.mjs')};(e/'HOST.md').write_text('Production image from the recorded pinned commit. Source checkouts are ignored; reproduce with build.py. Capture covers the selected route only. The production-library sample is listed in libraries.json; new builds use the source-function preflight selection. Earlier archive captures may have an alphabetic sample. Current dataset membership and selection are defined separately by the source-only policy.\n\n```recall-capture\n'+json.dumps(config,indent=2)+'\n```\n')
  env={**os.environ,**({'RECALL_BROWSER_PROXY':launch['browserProxy']} if launch.get('browserProxy') else {}),'RECALL_EXPECTATIONS':json.dumps(launch),'RECALL_SCREENSHOT':str(e/'page.png'),'RECALL_PAGE_EVIDENCE':str(e/'page.json')}
  with (e/'capture.log').open('w') as log:
   if libs:cmd=['node',str(base/'collector/collect.mjs'),str(repo),str(e/'libraries.json'),str(e/'HOST.md'),str(dest)]
   else:cmd=['node',str(base/'collector/capture.mjs'),url,str(e/'raw'),str(e/'capture.json')];env['RECALL_PREPARE_PAGE']=config['preparePage']
   process=subprocess.run(cmd,env=env,stdout=log,stderr=subprocess.STDOUT,timeout=600);record['captureExitCode']=process.returncode
  if not libs and process.returncode==0:
   capture=json.loads((e/'capture.json').read_text());dest.mkdir(parents=True,exist_ok=True)
   for asset in capture['assets']:
    for obj,folder,ext in [(asset,'runtime-js','js'),(asset.get('map',{}),'source-maps','map')]:
     h=obj.get('sha256')
     if h:
      src=e/'raw'/(h+'.'+ext);assert hashlib.sha256(src.read_bytes()).hexdigest()==h;target=dest/folder/src.name;target.parent.mkdir(exist_ok=True);shutil.copyfile(src,target)
   result={'pairDefinition':'No declared production-library candidates.','provenance':{'commit':a['commit']},'selectedLibraries':[],'capture':capture,'pairs':[],'zeroPairReason':'Selected frontend manifest has no production dependencies. No library recovery claim.'};(dest/'func-mapping.json').write_text(json.dumps(result,indent=2)+'\n')
  if (dest/'func-mapping.json').exists():record['pairCount']=len(json.loads((dest/'func-mapping.json').read_text())['pairs'])
  if (e/'page.json').exists():
   page=json.loads((e/'page.json').read_text());record['pageStatus']='rendered' if page['selectorFound'] and page['textFound'] else 'partial';record['pageEvidence']=str((e/'page.json').relative_to(root))
 except Exception as err:record['captureError']=str(err)
 finally:
  with (e/'runtime.log').open('a') as log:
   if compose:subprocess.run(compose+['logs','--tail','80'],stdout=log,stderr=subprocess.STDOUT,timeout=30);subprocess.run(compose+['down','--volumes'],stdout=log,stderr=subprocess.STDOUT,timeout=60)
   else:subprocess.run(['docker','logs','--tail','80',name],stdout=log,stderr=subprocess.STDOUT);subprocess.run(['docker','rm','-f',name],stdout=log,stderr=subprocess.STDOUT)
  p.write_text(json.dumps(record,indent=2)+'\n');print(key,record.get('pageStatus',record.get('captureError','capture-failed')),record.get('pairCount'),flush=True)
seen=set()
while True:
 for i,s in enumerate(subjects):
  if os.environ.get('RECALL_ONLY') and s['subject']!=os.environ['RECALL_ONLY']:continue
  key=s['subject'];p=base/key/'verification.json'
  if not p.exists():continue
  try:record=json.loads(p.read_text())
  except json.JSONDecodeError:continue
  token=(key,record.get('finished'))
  if token in seen:continue
  if record.get('buildStatus')=='built':run(s,i)
  seen.add(token)
 if not os.environ.get('RECALL_WATCH') and len(seen)>=(1 if os.environ.get('RECALL_ONLY') else len(subjects)):break
 if os.environ.get('RECALL_WATCH') and (base/'BUILD_QUEUE_COMPLETE').exists():break
 time.sleep(5)
