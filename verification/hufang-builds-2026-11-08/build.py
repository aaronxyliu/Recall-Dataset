import pathlib,json,subprocess,os,time,hashlib,shutil,concurrent.futures,fcntl
base=pathlib.Path(__file__).resolve().parent;root=base.parents[1]
subjects=json.loads((base/'subjects.json').read_text())
def run(s):
 key=s['subject'];e=base/key;e.mkdir(parents=True,exist_ok=True);p=e/'verification.json';recipe=base/'submission'/s['submissionPath'];repo=root/'builds/hufang'/key;app=s['application'];tag='recall-hufang/'+key.split('/')[1].lower()+':'+app['commit'][:12]
 if os.environ.get('RECALL_ONLY') and key!=os.environ['RECALL_ONLY']:return
 if p.exists() and json.loads(p.read_text()).get('buildStatus')=='built' and not os.environ.get('RECALL_REBUILD'):return
 result={'subject':key,'submissionCommit':'feea3f3f247aecd097cb01f7a7de282b02f9b446','upstreamCommit':app['commit'],'image':tag,'started':time.time()}
 try:
  with (e/'checkout.log').open('a') as log:
   if not (repo/'.git').exists():
    repo.parent.mkdir(parents=True,exist_ok=True);subprocess.run(['git','-c','http.version=HTTP/1.1','clone','--filter=blob:none','--no-checkout','https://github.com/'+app['repository']+'.git',str(repo)],check=True,stdout=log,stderr=subprocess.STDOUT,timeout=600)
   current=subprocess.run(['git','-C',str(repo),'rev-parse','HEAD'],capture_output=True,text=True).stdout.strip()
   if current!=app['commit'] or not (repo/app['packageManifest']).exists():subprocess.run(['git','-c','http.version=HTTP/1.1','-C',str(repo),'checkout','--detach',app['commit']],check=True,stdout=log,stderr=subprocess.STDOUT,timeout=600)
  target=root/'bundling-dataset'/key;target.mkdir(parents=True,exist_ok=True)
  imported=(target/'application.json').exists() and json.loads((target/'application.json').read_text()).get('commit')==app['commit']
  for f in ([] if imported else recipe.iterdir()):
   if f.is_file() and f.name not in ['README.md','subject.json']:shutil.copyfile(f,target/f.name)
   elif f.is_dir() and f.name not in ['source-map']:shutil.copytree(f,target/f.name,dirs_exist_ok=True)
  config=s['recipe'];context=repo/config.get('context','.')
  args=['docker','build','--progress=plain','--build-arg','HTTP_PROXY=http://host.docker.internal:7897','--build-arg','HTTPS_PROXY=http://host.docker.internal:7897','--build-arg','NO_PROXY=localhost,127.0.0.1,::1','--build-arg','no_proxy=localhost,127.0.0.1,::1','--build-arg','RECALL_COMMIT='+app['commit'],'--build-context','recipe='+str(target),'--build-context','sourcegit='+str(repo/'.git'),'--build-context','maptools='+str(base/'map-tools'),'-f',str(target/'Dockerfile'),'-t',tag]
  if config.get('platform'):args+=['--platform',config['platform']]
  for k,v in config.get('buildArgs',{}).items():args+=['--build-arg',k+'='+str(v)]
  args+=[str(context)]
  result['buildCommand']=args;result['recipeSHA256']=hashlib.sha256((target/'Dockerfile').read_bytes()).hexdigest()
  logpath=e/'build.log'
  if logpath.exists():shutil.copyfile(logpath,e/('build-attempt-'+hashlib.sha256(logpath.read_bytes()).hexdigest()[:12]+'.log'))
  with (base/'docker-resource.lock').open('w') as guard:
   fcntl.flock(guard,fcntl.LOCK_EX)
   with logpath.open('w') as log:proc=subprocess.run(args,stdout=log,stderr=subprocess.STDOUT,timeout=int(os.environ.get('RECALL_BUILD_TIMEOUT','3600')))
  result['buildExitCode']=proc.returncode;result['buildStatus']='built' if proc.returncode==0 else 'build-failed'
  if proc.returncode==0:result['imageID']=subprocess.check_output(['docker','image','inspect',tag,'--format','{{.Id}}'],text=True).strip()
 except Exception as err:result.update(buildStatus='blocked',error=str(err))
 result['finished']=time.time();p.write_text(json.dumps(result,indent=2)+'\n');print(key,result['buildStatus'],flush=True)
 if result['buildStatus']=='built':time.sleep(6)
# Run one build at a time: this VM has 14 GiB and no swap; larger builds exhausted it in parallel.
with concurrent.futures.ThreadPoolExecutor(max_workers=1) as pool:list(pool.map(run,subjects))
