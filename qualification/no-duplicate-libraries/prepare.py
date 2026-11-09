"""Reconstruct the frozen full-runtime audit inputs from published artifacts."""
import pathlib,json,subprocess
base=pathlib.Path(__file__).resolve().parent;root=base.parents[1];read=lambda p:json.loads(p.read_text());revision='cc5df6cf50c33092cd4522e850934add762a8ede'
old=lambda p:json.loads(subprocess.check_output(['git','-C',str(root),'show',revision+':'+p]));index=old('qualified-dataset/index.json');out=[]
def ids(g):return [(a['url'],a['sha256'],a.get('map',{}).get('sha256')) for a in g['capture']['assets']]
for s in index['subjects']:
 key=s['subject'];directory=base/'work'/key;directory.mkdir(parents=True,exist_ok=True);metadata=read(base/'results'/key/'input-metadata.json');record=root/'bundling-dataset'/key/'ground-truth/func-mapping.json';assert ids(read(record))==ids(old('qualified-dataset/'+s['records'])),'Frozen capture changed: '+key
 scope=read(root/'qualification/module-dependencies/results'/key/'scope.json')
 for e in scope['evidence']:e['path']=e['path'].replace('evidence/','module-evidence/',1)
 scope_file=directory/'module-scope.json';scope_file.write_text(json.dumps(scope,indent=2)+'\n')
 item={'subject':key,'commit':s['commit'],'record':str(record),'moduleScope':str(scope_file),'manifest':str(root/'qualification/source-functions-3/results'/key/'frontend-package.json'),'sourceOwnership':str(base/'results'/key/'source-ownership.json'),'excludeLibraries':metadata['excludeLibraries'],'logicalPackages':metadata['logicalPackages']};path=directory/'input.json';path.write_text(json.dumps(item,indent=2)+'\n');out.append({'subject':key,'input':str(path),'output':str(base/'results'/key/'audit.json')})
(base/'work/plan.json').write_text(json.dumps(out,indent=2)+'\n');print('Prepared',len(out),'full-runtime audits from immutable baseline',revision[:8])
