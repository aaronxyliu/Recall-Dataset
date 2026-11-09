"""Match stripped original paths to exact locked-package bytes, including map originals."""
import pathlib,json,hashlib,tarfile,re,posixpath
base=pathlib.Path(__file__).resolve().parent;root=base.parents[1];cache=root/'qualification/source-functions-3/work/package-cache';read=lambda p:json.loads(p.read_text());sha=lambda b:hashlib.sha256(b).hexdigest();plans=read(base/'work/plan.json');versions={s['subject']:s['libraries'] for s in read(base/'work/versions.json')};allwanted=set();inputs=[]
for item in plans:
 p=read(pathlib.Path(item['input']));g=read(pathlib.Path(p['record']));wanted={}
 def visit(m):
  for s,c in zip((m.get('sources') or []),(m.get('sourcesContent') or [])):
   owners=re.findall(r'(?:^|/)(?:node_modules|~)/((?:@[^/]+/)?[^/]+)',s)
   if c is not None and (not owners or owners[-1]=='.pnpm') and not s.endswith(('.json','.css','.scss')):wanted[s]=sha(c.encode())
  for section in m.get('sections',[]):visit(section['map'])
 for a in g['capture']['assets']:
  if a.get('map',{}).get('sha256'):
   f=pathlib.Path(p['record']).parent/a['map'].get('localPath','source-maps/'+a['map']['sha256']+'.map');visit(read(f))
 allwanted.update(wanted.values());inputs.append((item,p,wanted))
indices={}
for item,p,wanted in inputs:
 for lib in versions[item['subject']]:
  ident=sha(json.dumps([lib['packageName'],lib['version']],separators=(',',':')).encode())
  if ident in indices:continue
  folder=cache/ident;origin=folder/'package-origin.json';archives=list(folder.glob('*.tgz'))
  if not origin.exists() or len(archives)!=1:indices[ident]={};continue
  meta=read(origin);archive=archives[0];assert meta['name']==lib['packageName'] and meta['version']==lib['version'];assert sha(archive.read_bytes())==meta['tarballSHA256'];index={}
  def accept(data,member,source=None):
   digest=sha(data)
   if digest in allwanted:index.setdefault(digest,{'packageName':lib['packageName'],'version':lib['version'],'tarballSHA256':meta['tarballSHA256'],'member':member,**({'embeddedSource':source} if source else {})})
  with tarfile.open(archive) as tar:
   for member in tar:
    if not member.isfile():continue
    if member.name.endswith(('.js','.mjs','.cjs','.jsx','.ts','.tsx')):accept(tar.extractfile(member).read(),member.name)
    elif member.name.endswith('.map'):
     try:obj=json.load(tar.extractfile(member))
     except (ValueError,UnicodeDecodeError):continue
     def source_map(m):
      for source,text in zip((m.get('sources') or []),(m.get('sourcesContent') or [])):
       if text is None:continue
       # Accept own package source roots. Never relabel embedded dependencies.
       relative=posixpath.normpath(posixpath.join(posixpath.dirname(member.name),(m.get('sourceRoot') or ''),source));short=lib['packageName'].split('/')[-1]
       within=relative.startswith('package/') and '/node_modules/' not in relative and not re.match(r'^(?:https?|webpack):',source)
       own_external=bool(re.search(r'(?:^|/)packages/'+re.escape(short)+r'/',source) or re.search(r'(?:^|/)'+re.escape(short)+r'/(?:src|lib)/',source))
       if within or own_external:accept(text.encode(),member.name,source)
      for section in m.get('sections',[]):source_map(section['map'])
     source_map(obj)
  indices[ident]=index
for item,p,wanted in inputs:
 matches={}
 for lib in versions[item['subject']]:
  ident=sha(json.dumps([lib['packageName'],lib['version']],separators=(',',':')).encode());index=indices.get(ident,{})
  for source,digest in wanted.items():
   if digest in index:matches.setdefault(source,[]).append({'library':lib['library'],'sha256':digest,'relative':index[digest].get('embeddedSource',index[digest]['member']).removeprefix('package/'),'proof':{'kind':'locked-package-exact-content',**index[digest]}})
 owners=read(pathlib.Path(p['sourceOwnership'])) if p.get('sourceOwnership') and pathlib.Path(p['sourceOwnership']).exists() else {}
 for source,choices in matches.items():
  if len({c['library'] for c in choices})==1:owners[source]=choices[0]
 out=pathlib.Path(item['input']).parent/'ownership.json';out.write_text(json.dumps(owners,indent=2)+'\n');p['sourceOwnership']=str(out);p['logicalPackages']={lib['library']:lib['packageName'] for lib in versions[item['subject']]};pathlib.Path(item['input']).write_text(json.dumps(p,indent=2)+'\n');print(item['subject'],len(owners),flush=True)
