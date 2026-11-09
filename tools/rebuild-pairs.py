"""Rebuild and independently verify final pairs from the archived JS/maps, offline."""
import argparse,hashlib,json,pathlib,subprocess
ROOT=pathlib.Path(__file__).resolve().parents[1]
def read(p):return json.loads(p.read_text())
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def rebuild(entry,out):
 directory=ROOT/'qualified-dataset'/entry['subject'];record=read(ROOT/'qualified-dataset'/entry['records']);out.mkdir(parents=True,exist_ok=False);raw=out/'raw';raw.mkdir()
 selection=directory/'reproduction/selection.json';assert sha(selection)==record['provenance']['sourceOwnershipSHA256']
 (out/'selection.json').write_bytes(selection.read_bytes());(out/'capture.json').write_text(json.dumps(record['capture'],indent=2)+'\n')
 for asset in record['capture']['assets']:
  for item,ext in [(asset,'js'),(asset.get('map',{}),'map')]:
   if not item.get('sha256'):continue
   original=directory/'ground-truth'/item['localPath'];assert sha(original)==item['sha256'];link=raw/(item['sha256']+'.'+ext)
   if not link.exists():link.symlink_to(original)
 collector=ROOT/'provenance/collector'
 with (out/'verification.log').open('w') as log:
  for script in ['relations.mjs','verify_pairs.mjs']:subprocess.run(['node','--max-old-space-size=6144',str(collector/script),str(out),str(raw)],check=True,stdout=log,stderr=subprocess.STDOUT)
 actual=read(out/'relations.json');identity=lambda p:(p['library'],p['source'],p['bundled']);expected=sorted(map(identity,record['pairs']));observed=sorted(map(identity,actual['pairs']));assert observed==expected,'Rebuilt pair identities differ from release'
 result={'subject':entry['subject'],'status':'passed','pairs':len(observed),'checks':['captured bytes','frozen module-only correspondence collector','independent source/function span checks','exact released pair identities']};(out/'result.json').write_text(json.dumps(result,indent=2)+'\n');print(entry['subject'],len(observed),'passed',flush=True);return result
if __name__=='__main__':
 p=argparse.ArgumentParser(description=__doc__);p.add_argument('subject',nargs='?');p.add_argument('--all',action='store_true');p.add_argument('--out',type=pathlib.Path,required=True);args=p.parse_args();index=read(ROOT/'qualified-dataset/index.json');entries=[e for e in index['subjects'] if args.all or e['subject']==args.subject]
 if not entries:p.error('Choose a final subject or --all')
 results=[rebuild(e,args.out.resolve()/e['subject'] if args.all else args.out.resolve()) for e in entries]
 if args.all:(args.out.resolve()/'summary.json').write_text(json.dumps({'status':'passed','repositories':len(results),'pairs':sum(r['pairs'] for r in results),'results':results},indent=2)+'\n')
