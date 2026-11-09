import pathlib,json,subprocess,hashlib,os
base=pathlib.Path(__file__).resolve().parent;plan=json.loads((base/'plan.json').read_text())
for s in plan:
 if not s.get('manifest'):continue
 output=pathlib.Path(s['output']);record=pathlib.Path(s['record']);q=output/'qualification.json';manifest=pathlib.Path(s['manifest'])
 if q.exists():
  prior=json.loads(q.read_text()).get('provenance',{})
  if prior.get('matcherSHA256')==hashlib.sha256((base/'runtime/components/pog/index.mjs').read_bytes()).hexdigest() and prior.get('selectionSHA256')==hashlib.sha256((base/'selection.mjs').read_bytes()).hexdigest() and prior.get('qualificationRunnerSHA256')==hashlib.sha256((base/'anchors.mjs').read_bytes()).hexdigest() and prior.get('groundTruthSHA256')==hashlib.sha256(record.read_bytes()).hexdigest() and prior.get('manifestSHA256')==hashlib.sha256(manifest.read_bytes()).hexdigest():continue
 with (output/'qualification.log').open('w') as log:
  p=subprocess.run(['node','--max-old-space-size=4096',str(base/'anchors.mjs'),str(record),str(manifest),str(output)],stdout=log,stderr=subprocess.STDOUT,timeout=1200)
 if p.returncode:
  print(s['subject'],'qualification-error',p.returncode,flush=True)
 else:
  result=json.loads(q.read_text());print(s['subject'],result['status'],len(result['selectedLibraries']),result.get('reason'),flush=True)
