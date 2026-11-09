"""Write or verify the portable final-release file inventory (no Git or dependencies needed)."""
import argparse,hashlib,pathlib,os
ROOT=pathlib.Path(__file__).resolve().parents[1]
def digest(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def files():
 for name in ['README.md','.gitignore','.gitattributes']:
  p=ROOT/name
  if p.is_file():yield p
 for folder in ['qualified-dataset','policies','provenance','tools']:
  for base,dirs,names in os.walk(ROOT/folder,followlinks=False):
   dirs[:]=[d for d in dirs if d not in ['node_modules','__pycache__'] and not (pathlib.Path(base)/d).is_symlink()]
   for name in names:
    p=pathlib.Path(base)/name
    if p.is_file() and not p.is_symlink() and p.name not in ['.DS_Store','Thumbs.db','.env','.env.local','.env.runtime'] and p.suffix not in ['.pyc','.pyo']:yield p
if __name__=='__main__':
 p=argparse.ArgumentParser(description=__doc__);p.add_argument('--write',action='store_true');args=p.parse_args();manifest=ROOT/'checksums.sha256'
 if args.write:manifest.write_text(''.join(digest(f)+'  '+str(f.relative_to(ROOT))+'\n' for f in sorted(files())));print('Wrote final-release checksums')
 else:
  entries=[line.split('  ',1) for line in manifest.read_text().splitlines()];expected=set()
  for sha,name in entries:
   file=ROOT/name;assert file.is_file() and not file.is_symlink(),name;assert digest(file)==sha,name;expected.add(file)
  assert expected==set(files()),'Release inventory has missing or unexpected files';print('Verified',len(entries),'release files')
