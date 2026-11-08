import pathlib,json,subprocess,os,time
base=pathlib.Path(__file__).resolve().parent; root=base.parents[1]; exp=root.parent/'ReCall Exp'
subjects=json.loads((base/'subjects.json').read_text())
for i,s in enumerate(subjects):
 if os.environ.get('RECALL_ONLY') and s['subject']!=os.environ['RECALL_ONLY']:continue
 key=s['subject']; evidence=base/key; recordpath=evidence/'verification.json'
 while not recordpath.exists():time.sleep(3)
 record=json.loads(recordpath.read_text())
 if record['status']!='built':continue
 if (root/'bundling-dataset'/key/'ground-truth/func-mapping.json').exists():continue
 repo=root/'builds'/key
 manifest=repo/pathlib.PurePosixPath(s['metadata']['packageJson'].split('/'+s['metadata']['commit']+'/')[1])
 deps=json.loads(manifest.read_text()).get('dependencies',{})
 libs=sorted(deps)[:10];(evidence/'libraries.json').write_text(json.dumps(libs,indent=2)+'\n')
 port=18800+i;name='recall-student-verify-'+str(i)
 try:
  subprocess.run(['docker','run','-d','--name',name,'-p',f'127.0.0.1:{port}:80',s['result']['image']],check=True,capture_output=True)
  time.sleep(2)
  config={'url':f"http://127.0.0.1:{port}{s.get('captureRoute',s['result'].get('route','/'))}",'manifest':str(manifest),'preparePage':str(base/'page-hook.mjs')}
  (evidence/'HOST.md').write_text('Landing-route verification. Production dependencies selected in alphabetical order, at most ten; this is a new collection population.\n\n```recall-capture\n'+json.dumps(config,indent=2)+'\n```\n')
  env={**os.environ,'RECALL_SCREENSHOT':str(evidence/'page.png'),'RECALL_PAGE_EVIDENCE':str(evidence/'page.json')}
  dest=root/'bundling-dataset'/key/'ground-truth'
  if not libs:
   subprocess.run(['node',str(exp/'scripts/function-ground-truth/capture.mjs'),config['url'],str(evidence/'raw'),str(evidence/'capture.json')],check=True,env={**env,'RECALL_PREPARE_PAGE':config['preparePage']},timeout=240)
   record['captureStatus']='no-production-dependencies';record['pairCount']=0
  else:
   with (evidence/'capture.log').open('w') as log:
    p=subprocess.run(['node',str(exp/'scripts/function-ground-truth/collect.mjs'),str(repo),str(evidence/'libraries.json'),str(evidence/'HOST.md'),str(dest)],env=env,stdout=log,stderr=subprocess.STDOUT,timeout=600)
   record['captureExitCode']=p.returncode
   if p.returncode==0:record['pairCount']=len(json.loads((dest/'func-mapping.json').read_text())['pairs'])
 except Exception as e:record['captureError']=str(e)
 finally:
  subprocess.run(['docker','rm','-f',name],capture_output=True)
  recordpath.write_text(json.dumps(record,indent=2)+'\n')
 print(key,record,flush=True)
