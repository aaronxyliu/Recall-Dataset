import pathlib,json,subprocess,os,hashlib
base=pathlib.Path(__file__).resolve().parent
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
for item in json.loads((base/'work/plan.json').read_text()):
 if os.environ.get('RECALL_ONLY') and os.environ['RECALL_ONLY']!=item['subject']:continue
 output=pathlib.Path(item['output']);input=json.loads(pathlib.Path(item['input']).read_text())
 if output.exists():
  prior=json.loads(output.read_text()).get('provenance',{});record=json.loads(pathlib.Path(input['record']).read_text());capture=[[a['url'],a['sha256'],a.get('map',{}).get('sha256')] for a in record['capture']['assets']];digest=hashlib.sha256(json.dumps(capture,separators=(',',':'),ensure_ascii=False).encode()).hexdigest()
  logical_digest=hashlib.sha256(json.dumps(input.get('logicalPackages',{}),separators=(',',':')).encode()).hexdigest()
  if prior.get('ownerResolverSHA256')==sha(base.parent.parent/'verification/hufang-builds-2026-11-08/collector/source-owner.mjs') and prior.get('logicalPackagesSHA256')==logical_digest and prior.get('auditorSHA256')==sha(base/'audit-one.mjs') and prior.get('evidenceSHA256')==sha(base/'evidence.mjs') and prior.get('captureSHA256')==digest and prior.get('scopeSHA256')==sha(pathlib.Path(input['moduleScope'])) and prior.get('manifestSHA256')==sha(pathlib.Path(input['manifest'])) and prior.get('sourceOwnershipSHA256')==sha(pathlib.Path(input['sourceOwnership'])) and prior.get('exclusionsSHA256')==hashlib.sha256(json.dumps(input.get('excludeLibraries',[]),separators=(',',':')).encode()).hexdigest():continue
 subprocess.run(['node','--max-old-space-size=6144',str(base/'audit-one.mjs'),item['input'],item['output']],check=True,timeout=1200)
