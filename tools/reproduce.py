"""Pinned source checkout, Docker build/serve, and browser recapture for one final subject."""
import argparse,hashlib,json,os,pathlib,secrets,subprocess,sys,time,urllib.request
ROOT=pathlib.Path(__file__).resolve().parents[1]
def read(p):return json.loads(p.read_text())
def command(args,execute,**kw):
 print(json.dumps([str(x) for x in args]),flush=True)
 if execute:return subprocess.run([str(x) for x in args],check=True,**kw)
def metadata(subject):
 index=read(ROOT/'qualified-dataset/index.json');entry=next((e for e in index['subjects'] if e['subject']==subject),None)
 if not entry:raise ValueError('Not a final dataset subject: '+subject)
 folder=ROOT/'qualified-dataset'/subject;return entry,folder,read(folder/'reproduction/build.json')
def build_command(config,recipe,source):
 args=['docker','build','--progress=plain','--build-arg','RECALL_COMMIT='+config['commit'],'--build-context','recipe='+str(recipe),'--build-context','sourcegit='+str(source/'.git'),'--build-context','maptools='+str(ROOT/'provenance/map-tools'),'-f',str(recipe/'Dockerfile'),'-t',config['image']]
 if config.get('platform'):args+=['--platform',config['platform']]
 if config.get('target'):args+=['--target',config['target']]
 for key,value in config.get('buildArgs',{}).items():args+=['--build-arg',key+'='+str(value)]
 return args+[str(source/config['context'])]
def pinned(config,source):
 actual=subprocess.check_output(['git','-C',str(source),'rev-parse','HEAD'],text=True).strip()
 if actual!=config['commit']:raise ValueError('Checkout is not at the final pinned commit')
 if subprocess.check_output(['git','-C',str(source),'status','--porcelain','--untracked-files=no'],text=True).strip():raise ValueError('Tracked source files are modified; use a fresh checkout')
 package=read(source/config['frontendManifest']);archived=read(ROOT/'qualified-dataset'/config['subject']/'frontend-package.json')
 if package.get('dependencies',{})!=archived.get('dependencies',{}):raise ValueError('Pinned production dependencies differ from the release frontend manifest')
 return actual

def environment(config,source,recipe,runtime,port):
 launch=config['launch'];file=runtime/'runtime.env';values={}
 if file.exists():values=dict(line.split('=',1) for line in file.read_text().splitlines() if '=' in line)
 values.update({k:str(v) for k,v in launch.get('environment',{}).items()})
 for key in launch.get('generateEnvironment',[]):values.setdefault(key,secrets.token_hex(24))
 for key,n in launch.get('generateHexEnvironment',{}).items():values.setdefault(key,secrets.token_hex(n))
 for key,n in launch.get('generateEnvironmentBytes',{}).items():values.setdefault(key,secrets.token_urlsafe(n))
 values.update(RECALL_IMAGE=config['image'],RECALL_CONTAINER='recall-final-'+hashlib.sha256(config['subject'].encode()).hexdigest()[:12],RECALL_ENV_FILE=str(file),RECALL_PORT=str(port),RECALL_RECIPE_DIR=str(recipe),RECALL_SOURCE_DIR=str(source))
 for key,value in launch.get('environmentTemplates',{}).items():values[key]=value.format(**values,port=str(port))
 file.write_text(''.join(k+'='+str(v)+'\n' for k,v in values.items()));file.chmod(0o600)
 return values,file

def main():
 p=argparse.ArgumentParser(description=__doc__);p.add_argument('action',choices=['checkout','build','serve','stop','capture']);p.add_argument('subject');p.add_argument('--source',type=pathlib.Path);p.add_argument('--port',type=int,default=8080);p.add_argument('--url');p.add_argument('--out',type=pathlib.Path);p.add_argument('--execute',action='store_true',help='Perform external actions; otherwise print the plan');args=p.parse_args()
 entry,folder,config=metadata(args.subject);recipe=folder/'reproduction';source=(args.source or ROOT/'.work/checkouts'/args.subject).resolve();runtime=ROOT/'.work/runtime'/args.subject;project='recall-final-'+hashlib.sha256(args.subject.encode()).hexdigest()[:12]
 if args.action=='checkout':
  if args.execute and source.exists():pinned(config,source);print('Existing pinned checkout verified');return
  if args.execute:source.parent.mkdir(parents=True,exist_ok=True)
  for cmd in [['git','init',str(source)],['git','-C',str(source),'remote','add','origin','https://github.com/'+config['repo']+'.git'],['git','-C',str(source),'fetch','--depth=1','origin',config['commit']],['git','-C',str(source),'checkout','--detach','FETCH_HEAD']]:command(cmd,args.execute)
 elif args.action=='build':
  if args.execute:
   pinned(config,source);subprocess.run(['node',str(ROOT/'tools/audit.mjs')],check=True)
  command(build_command(config,recipe,source),args.execute)
 elif args.action=='serve':
  launch=config['launch']
  if not args.execute:
   print(json.dumps({'image':config['image'],'port':args.port,'route':launch.get('route','/'),'compose':launch.get('composeFile'),'source':str(source),'recipe':str(recipe),'environment':'Generated under .work/runtime; no secrets are printed'}));return
  runtime.mkdir(parents=True,exist_ok=True);values,envfile=environment(config,source,recipe,runtime,args.port)
  if launch.get('composeFile'):
   cfg=json.loads(subprocess.check_output(['docker','compose','--env-file',str(envfile),'-f',str(recipe/launch['composeFile']),'config','--format','json'],text=True,env={**os.environ,**values}))
   candidates=[k for k,v in cfg['services'].items() if v.get('image')==config['image'] and v.get('ports')]
   if not candidates:candidates=[k for k,v in cfg['services'].items() if any(int(port.get('target',0))==launch['containerPort'] for port in v.get('ports',[]) if isinstance(port,dict))]
   if len(candidates)!=1:raise ValueError('Cannot uniquely identify the frontend Compose service')
   frontend=candidates[0];cfg.pop('name',None)
   for name,value in cfg['services'].items():value['ports']=[];value['container_name']=project+'-'+name
   cfg['services'][frontend].update(image=config['image'],ports=[{'target':launch['containerPort'],'published':str(args.port),'host_ip':'127.0.0.1','protocol':'tcp'}]);cfg['services'][frontend].pop('build',None)
   for section in ['networks','volumes']:
    for name,value in cfg.get(section,{}).items():
     if not value.get('external'):value['name']=project+'-'+name
   (runtime/'compose.json').write_text(json.dumps(cfg,indent=2)+'\n');command(['docker','compose','-p',project,'-f',str(runtime/'compose.json'),'up','-d','--wait','--wait-timeout',str(launch.get('composeWaitSeconds',480))],True)
  else:command(['docker','run','-d','--name',project,'--env-file',str(envfile),'-p',f"127.0.0.1:{args.port}:{launch['containerPort']}",config['image']],True)
  print('http://127.0.0.1:'+str(args.port)+launch.get('route','/'))
 elif args.action=='stop':
  if (runtime/'compose.json').exists():command(['docker','compose','-p',project,'-f',str(runtime/'compose.json'),'down'],args.execute)
  else:command(['docker','rm','-f',project],args.execute)
 else:
  if not args.out:p.error('capture requires --out')
  out=args.out.resolve();url=args.url or 'http://127.0.0.1:'+str(args.port)+config['launch'].get('route','/');cmd=['node',str(ROOT/'provenance/collector/capture.mjs'),url,str(out/'raw'),str(out/'capture.json')]
  if not args.execute:command(cmd,False);return
  if out.exists():raise ValueError('Capture output already exists')
  out.mkdir(parents=True);deadline=time.monotonic()+config['launch'].get('readinessTimeoutSeconds',120);opener=urllib.request.build_opener(urllib.request.ProxyHandler({}));ready=False
  while time.monotonic()<deadline:
   try:
    with opener.open(url,timeout=4) as response:ready=response.status<400
    if ready:break
   except Exception:time.sleep(1)
  if not ready:raise RuntimeError('Page did not become ready before the capture timeout')
  env={**os.environ,'RECALL_PREPARE_PAGE':str(ROOT/'provenance/page-hook.mjs'),'RECALL_EXPECTATIONS':json.dumps(config['launch']),'RECALL_SCREENSHOT':str(out/'page.png'),'RECALL_PAGE_EVIDENCE':str(out/'page.json')};command(cmd,True,env=env)
  capture=read(out/'capture.json');template={'subject':args.subject,'commit':entry['commit'],'evidence':[],'assets':[{'url':a['url'],'sha256':a['sha256'],'mapSHA256':a.get('map',{}).get('sha256'),'role':'unreviewed'} for a in capture['assets']]};(out/'module-scope.template.json').write_text(json.dumps(template,indent=2)+'\n');print('Fresh assets require module-ingress review before constructing new correspondence labels. The release was not modified.')
if __name__=='__main__':main()
