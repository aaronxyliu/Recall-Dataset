import pathlib,subprocess,json,time,os,shutil,hashlib
root=pathlib.Path(__file__).resolve().parents[2]
base=pathlib.Path(__file__).resolve().parent
subjects=json.loads((base/'subjects.json').read_text())
for s in subjects:
 if os.environ.get('RECALL_ONLY') and s['subject']!=os.environ['RECALL_ONLY']:continue
 key=s['subject']; dest=root/'builds'/key; evidence=base/key; evidence.mkdir(parents=True,exist_ok=True)
 record={'subject':key,'submittedCommit':s['result']['commit'],'started':time.time()}
 try:
  if not (dest/'.git').exists():
   dest.parent.mkdir(parents=True,exist_ok=True)
   subprocess.run(['git','clone','--filter=blob:none','--no-checkout','https://github.com/'+s['metadata']['repo']+'.git',str(dest)],check=True,timeout=300)
   subprocess.run(['git','-C',str(dest),'checkout','--detach',s['result']['commit']],check=True,timeout=300)
  actual=subprocess.check_output(['git','-C',str(dest),'rev-parse','HEAD'],text=True).strip()
  if actual!=s['result']['commit']:raise RuntimeError('Existing checkout commit mismatch: '+actual)
  if (evidence/'build.log').exists():
   prior=evidence/'build.log';shutil.copyfile(prior,evidence/('build-attempt-'+hashlib.sha256(prior.read_bytes()).hexdigest()[:12]+'.log'))
  with (evidence/'build.log').open('w') as log:
   run=subprocess.run(['docker','build','--build-arg','HTTP_PROXY=http://host.docker.internal:7897','--build-arg','HTTPS_PROXY=http://host.docker.internal:7897','--progress=plain','-f',str(root/'bundling-dataset'/key/'Dockerfile'),'-t',s['result']['image'],str(dest)],stdout=log,stderr=subprocess.STDOUT,timeout=600)
  record['buildExitCode']=run.returncode
  record['status']='built' if run.returncode==0 else 'build-failed'
 except Exception as e:record.update(status='blocked',error=str(e))
 record['finished']=time.time();(evidence/'verification.json').write_text(json.dumps(record,indent=2)+'\n')
 print(key,record['status'],flush=True)
