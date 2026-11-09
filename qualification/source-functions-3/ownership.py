"""Resolve stripped source-map package paths using exact package-file content hashes.
Only bytes from locked npm tarballs are accepted; no filename-only ownership guesses.
"""
import hashlib,json,pathlib,tarfile,re
base=pathlib.Path(__file__).resolve().parent
sha=lambda data:hashlib.sha256(data).hexdigest()
def build(receipt,record):
 result={}
 if receipt['subject'] not in {'parcel/tensorflow--tfjs','tsup/peggyjs--peggy'}:return result
 maps=[]
 for asset in record['capture']['assets']:
  info=asset.get('map',{})
  if not info.get('sha256'):continue
  path=pathlib.Path(record['_path']).parent/info.get('localPath','source-maps/'+info['sha256']+'.map')
  raw=path.read_bytes();assert sha(raw)==info['sha256'];data=json.loads(raw)
  def visit(m):
   if m.get('x_recall_identity_map'):return
   for section in m.get('sections',[]):visit(section['map'])
   for source,text in zip(m.get('sources',[]),m.get('sourcesContent',[])):
    if text is not None and not re.search(r'(?:^|/)(?:node_modules|~)/',source):maps.append((source,sha(text.encode())))
  visit(data)
 wanted={h for _,h in maps};matches={}
 for lib in receipt['libraries']:
  if lib['library'] not in receipt['selectedLibraries']:continue
  origin=lib.get('origin',{})
  if origin.get('kind')!='npm-package':continue
  identity=sha(json.dumps([origin['name'],origin['version']],separators=(',',':')).encode());folder=base/'work/package-cache'/identity
  archives=list(folder.glob('*.tgz'))
  if len(archives)!=1:continue
  archive=archives[0];assert sha(archive.read_bytes())==origin['tarballSHA256']
  def accept(data,member,embedded=None):
   digest=sha(data)
   if digest in wanted:matches.setdefault(digest,[]).append({'library':lib['library'],'sha256':digest,'proof':{'kind':'locked-npm-tarball-content','name':origin['name'],'version':origin['version'],'tarballSHA256':origin['tarballSHA256'],'member':member,**({'embeddedSource':embedded} if embedded else {})}})
  with tarfile.open(archive) as tar:
   for member in tar:
    if not member.isfile():continue
    if member.name.endswith(('.js','.mjs','.cjs','.ts','.tsx','.jsx')):accept(tar.extractfile(member).read(),member.name)
    elif member.name.endswith('.map'):
     try:m=json.load(tar.extractfile(member))
     except (ValueError,UnicodeDecodeError):continue
     for source,text in zip(m.get('sources',[]),m.get('sourcesContent',[])):
      # TensorFlow packages publish sibling-looking original TS paths. Only
      # their own package-root prefix establishes ownership, never vendored code.
      package_root=origin['name'].split('/')[-1]
      if text is not None and re.search(r'(?:^|/)'+re.escape(package_root)+r'/src/',source):accept(text.encode(),member.name,source)
 for source,digest in maps:
  candidates=matches.get(digest,[])
  if len({x['library'] for x in candidates})==1:result[source]=candidates[0]
 return result
