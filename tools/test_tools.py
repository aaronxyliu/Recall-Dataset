import contextlib,hashlib,importlib.util,io,json,pathlib,subprocess,tempfile,unittest
from unittest import mock
ROOT=pathlib.Path(__file__).resolve().parents[1]
def load(name):
 spec=importlib.util.spec_from_file_location(name,ROOT/'tools'/(name+'.py'));module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module);return module
def independent_refs(tmp):
 refs=pathlib.Path(tmp)/'packages';refs.mkdir();(refs/'package.json').write_text(json.dumps({'name':'independent-fixture','version':'1.0.0'}));(refs/'index.ts').write_text('export function target(x:number){return x+1}');(refs/'poison.map').write_text('{invalid map never read}');return refs
class ReleaseTools(unittest.TestCase):
 def test_export_preserves_captured_import_layout_and_excludes_oracle(self):
  with tempfile.TemporaryDirectory() as tmp:
   out=pathlib.Path(tmp)/'inputs';subprocess.run(['node',str(ROOT/'tools/export-inputs.mjs'),'vite/DavidHDev--react-bits',str(out),'--references',str(independent_refs(tmp))],check=True,stdout=subprocess.DEVNULL)
   manifest=json.loads((out/'bundle.json').read_text());files=manifest['files'];self.assertTrue(any(pathlib.Path(f['path']).name.startswith('preload-helper-') for f in files));self.assertTrue(all('#' in f['id'] for f in files));self.assertFalse(any(p.suffix=='.map' or p.name=='func-mapping.json' for p in out.rglob('*')))
   for f in files:self.assertEqual(hashlib.sha256(pathlib.Path(f['path']).read_bytes()).hexdigest(),f['id'].rsplit('#',1)[1])
   self.assertEqual(json.loads((out/'source.json').read_text())['referenceOrigin'],'independent-package-directory');source=json.loads((out/'source.json').read_text())['files'];self.assertTrue(all(f['library']['name']=='independent-fixture' for f in source));keys=[(f['library']['name'],hashlib.sha256(pathlib.Path(f['path']).read_bytes()).hexdigest()) for f in source];self.assertEqual(len(keys),len(set(keys)))
 def test_export_isolates_service_worker_from_page_registry(self):
  with tempfile.TemporaryDirectory() as tmp:
   out=pathlib.Path(tmp)/'inputs';subprocess.run(['node',str(ROOT/'tools/export-inputs.mjs'),'vite/CorentinTh--it-tools',str(out),'--references',str(independent_refs(tmp))],check=True,stdout=subprocess.DEVNULL);files=json.loads((out/'bundle.json').read_text())['files'];workers=[f for f in files if f['environment'].startswith('service-worker:')];self.assertTrue(workers);self.assertTrue(any(f['environment']=='main' for f in files))
 def test_export_rejects_implicit_historical_references(self):
  with tempfile.TemporaryDirectory() as tmp:
   out=pathlib.Path(tmp)/'inputs';result=subprocess.run(['node',str(ROOT/'tools/export-inputs.mjs'),'vite/DavidHDev--react-bits',str(out)],capture_output=True,text=True);self.assertNotEqual(result.returncode,0);self.assertIn('Dataset reference snapshots are not permitted',result.stderr);self.assertFalse(out.exists())
 def test_all_build_recipes_have_their_named_context_inputs(self):
  import shlex
  reproduce=load('reproduce');index=json.loads((ROOT/'qualified-dataset/index.json').read_text())
  for entry in index['subjects']:
   _,folder,c=reproduce.metadata(entry['subject']);recipe=folder/'reproduction';self.assertEqual(c['commit'],entry['commit']);self.assertEqual(c['image'],c['image'].lower());cmd=reproduce.build_command(c,recipe,ROOT/'.work/checkouts'/entry['subject']);self.assertIn('RECALL_COMMIT='+entry['commit'],cmd)
   for line in (recipe/'Dockerfile').read_text().splitlines():
    if line.strip().startswith('COPY --from=recipe '):
     args=shlex.split(line)[2:]
     for name in args[:-1]:self.assertTrue(list(recipe.glob(name.lstrip('/'))),(entry['subject'],name))
  _,_,immich=reproduce.metadata('vite/immich-app--immich');self.assertEqual(immich['launch']['containerPort'],80)
 def test_dry_run_does_not_invoke_subprocess(self):
  reproduce=load('reproduce')
  with mock.patch.object(reproduce.subprocess,'run') as run,contextlib.redirect_stdout(io.StringIO()):reproduce.command(['docker','build','source'],False)
  run.assert_not_called()
 def test_score_retains_full_denominator_deduplicates_and_reports_wrong_alternatives(self):
  score=load('score');source_code='function original(x){return x.a}';source_hash=hashlib.sha256(source_code.encode()).hexdigest();bundle_code='function a(x){return x.a}function b(x){return x.a}';bundle_hash=hashlib.sha256(bundle_code.encode()).hexdigest();bundle_id='<local>/app.js#'+bundle_hash;span=(0,len(source_code));truth={'pairs':[{'library':'lib','source':'first.js#'+source_hash+'@0-'+str(span[1]),'bundled':bundle_id+'@0-25'},{'library':'lib','source':'copy.js#'+source_hash+'@0-'+str(span[1]),'bundled':bundle_id+'@25-50'}]}
  source={'units':[{'id':'s','code':source_code},{'id':'w','code':source_code+'//other'}],'functions':[{'id':'source','unit':'s','library':{'name':'lib'},'span':list(span)},{'id':'wrong','unit':'w','library':{'name':'lib'},'span':list(span)}]};bundle={'units':[{'id':bundle_id,'code':bundle_code}],'functions':[{'id':'a','unit':bundle_id,'span':[0,25]},{'id':'b','unit':bundle_id,'span':[25,50]}]};recovery={'promotions':[{'sourceId':'source','bundleId':'a'},{'sourceId':'source','bundleId':'a'},{'sourceId':'source','bundleId':'b'},{'sourceId':'wrong','bundleId':'b'}]}
  with mock.patch.object(score,'read',return_value=truth):result=score.score({'subject':'fixture','records':'unused'},source,bundle,recovery)
  self.assertEqual(result['denominator'],2);self.assertEqual(result['correctTargets'],2);self.assertEqual(result['predictedPairsWithinOracle'],3);self.assertEqual(result['pairPrecisionWithinOracle'],2/3);self.assertEqual(result['multipleSourceTargets'],1)
 def test_score_rejects_unpinned_target_bytes(self):
  score=load('score');truth={'pairs':[]};source={'units':[],'functions':[]};bundle={'units':[{'id':'bad-hash','code':'changed'}],'functions':[]}
  with mock.patch.object(score,'read',return_value=truth),self.assertRaises(ValueError):score.score({'subject':'fixture','records':'unused'},source,bundle,{'promotions':[]})
if __name__=='__main__':unittest.main()
