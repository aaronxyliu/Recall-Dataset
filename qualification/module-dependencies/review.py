"""Freeze reviewed build-ingress receipts for the current captured cohort.
Unknown output families fail closed. All decisions bind exact script/map hashes.
"""
import pathlib,json,hashlib,re,subprocess,collections
base=pathlib.Path(__file__).resolve().parent;root=base.parents[1];read=lambda p:json.loads(p.read_text());sha=lambda b:hashlib.sha256(b).hexdigest()
baseline='b349e2c924c8b000657455d3d8e5c5b8c867d412'
def baseline_json(file):return json.loads(subprocess.check_output(['git','-C',str(root),'show',baseline+':'+file]))
index=baseline_json('qualified-dataset/index.json');plan={s['subject']:s for s in read(root/'qualification/source-functions-3/plan.json')}
configs={
'bun/RockwellShah--filekey':[], 'bun/micahkepe--jsongrep':[],
'esbuild/mattlewis92--angular-calendar':['angular.json'], 'esbuild/primefaces--primeng':['apps/showcase/angular.json'], 'esbuild/primefaces--sakai-ng':['angular.json'], 'esbuild/sissbruecker--linkding':[], 'esbuild/swimlane--ngx-charts':['angular.json'], 'esbuild/swimlane--ngx-datatable':['angular.json'],
'parcel/jonasschmedtmann--complete-javascript-course':[], 'parcel/parcel-bundler--website':[], 'parcel/tensorflow--tfjs':['tfjs-automl/rollup.config.mjs'],
'rolldown/appwrite--appwrite':['apps/console/vite.config.ts'], 'rolldown/discourse--discourse':['frontend/discourse/rolldown.config.mjs'],
'rollup/daybrush--scenejs':['packages/demo/rollup.config.js','packages/scenejs/rollup.config.js'], 'rollup/omnibrain--svguitar':['rollup.config.ts'], 'rollup/vega--vega-lite':['site/rollup.config.js'],
'rspack/metabase--metabase':['rspack.config.js'], 'tsup/peggyjs--peggy':['docs/_includes/base-layout.html','docs/online.html','docs/js/online.js','tsup.config.js'],
'vite/CorentinTh--it-tools':['vite.config.ts'], 'vite/DavidHDev--react-bits':['vite.config.js'], 'vite/LibreChat-AI--LibreChat':['client/vite.config.ts'], 'vite/Lissy93--dashy':['vite.config.mjs'], 'vite/drawdb-io--drawdb':['vite.config.js'], 'vite/excalidraw--excalidraw':['excalidraw-app/vite.config.mts'], 'vite/hoppscotch--hoppscotch':['packages/hoppscotch-selfhost-web/vite.config.ts'], 'vite/immich-app--immich':['web/vite.config.ts'],
'webpack/PanJiaChen--vue-element-admin':['vue.config.js'], 'webpack/akveo--ngx-admin':['angular.json','src/polyfills.ts','src/app/app.module.ts'], 'webpack/bailicangdu--vue2-elm':['build/webpack.prod.conf.js'], 'webpack/dair-ai--Prompt-Engineering-Guide':['next.config.js'], 'webpack/dokploy--dokploy':['apps/dokploy/next.config.mjs'], 'webpack/freeCodeCamp--freeCodeCamp':['client/gatsby-config.ts'], 'webpack/supabase--supabase':['apps/www/next.config.mjs'], 'webpack/swagger-api--swagger-ui':['webpack/_config-builder.js']}
patterns={
'bun/RockwellShah--filekey':r'^<local>/dist/app\.js$', 'bun/micahkepe--jsongrep':r'^<local>/index-[^/]+\.js$',
'esbuild/sissbruecker--linkding':r'^<local>/static/bundle\.js(?:\?.*)?$',
'parcel/jonasschmedtmann--complete-javascript-course':r'^<local>/controller\.[^/]+\.js$', 'parcel/parcel-bundler--website':r'^<local>/[^/]+\.[a-f0-9]+\.js$', 'parcel/tensorflow--tfjs':r'^<local>/tfjs-automl/demo/img_classification/[^/]+\.js$',
'rolldown/appwrite--appwrite':r'^<local>/assets/[^/]+\.js$', 'rolldown/discourse--discourse':r'^<local>/assets/js/.*\.digested\.js$',
'rollup/daybrush--scenejs':r'^<local>/(?:release/latest/dist/scene\.min\.js|dist/index\.js)$', 'rollup/omnibrain--svguitar':r'^<local>/js/svguitar\.umd\.js$', 'rollup/vega--vega-lite':r'^<local>/vega-lite/static/bundle\.js$',
'rspack/metabase--metabase':r'^<local>/app/dist/[^/]+\.js$', 'tsup/peggyjs--peggy':r'^<local>/vendor/peggy/peggy\.min\.js$',
'vite/immich-app--immich':r'^<local>/_app/immutable/.*\.js$',
'webpack/PanJiaChen--vue-element-admin':r'^<local>/static/js/[^/]+\.js$', 'webpack/bailicangdu--vue2-elm':r'^<local>/elm/static/js/[^/]+\.js$', 'webpack/freeCodeCamp--freeCodeCamp':r'^<local>/[^/]+\.js$', 'webpack/swagger-api--swagger-ui':r'^<local>/swagger-ui-(?:bundle|standalone-preset)\.js$'}
summary=[]
for item in index['subjects']:
 key=item['subject'];s=plan[key];g=baseline_json('qualified-dataset/'+item['records']);directory=base/'results'/key;directory.mkdir(parents=True,exist_ok=True);evidence=[];angular_globals=set()
 def save(data,name,kind):
  local='evidence/'+name;path=directory/local;path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(data);evidence.append({'path':local,'sha256':sha(data),'kind':kind,'upstreamPath':name})
 for name in [s['manifestRelative'],*configs.get(key,[])]:
  data=subprocess.check_output(['git','-C',s['sourceRepo'],'show',s['commit']+':'+name]);save(data,name,'pinned-source')
  if name.endswith('angular.json'):
   def walk(obj):
    if isinstance(obj,dict):
     for name,value in obj.items():
      if name=='scripts' and isinstance(value,list):
       for entry in value:angular_globals.add(entry.get('bundleName','scripts') if isinstance(entry,dict) else 'scripts')
      walk(value)
    elif isinstance(obj,list):
     for value in obj:walk(value)
   walk(json.loads(data))
 recipe=root/'bundling-dataset'/key/'Dockerfile';save(recipe.read_bytes(),'dataset-recipe.Dockerfile','verified-build-recipe')
 if key.startswith('turbopack/') or key in ['webpack/dair-ai--Prompt-Engineering-Guide','webpack/dokploy--dokploy','webpack/supabase--supabase']:
  if key not in configs:
   parent=pathlib.PurePosixPath(s['manifestRelative']).parent
   for filename in ['next.config.ts','next.config.mjs','next.config.js']:
    name=str(parent/filename)
    try:data=subprocess.check_output(['git','-C',s['sourceRepo'],'show',s['commit']+':'+name],stderr=subprocess.DEVNULL)
    except subprocess.CalledProcessError:continue
    save(data,name,'pinned-source');break
  pattern=r'^<local>/_next/static/.*\.js$'
 elif key.startswith('esbuild/') and key!='esbuild/sissbruecker--linkding' or key=='webpack/akveo--ngx-admin':pattern=r'^<local>/(?:[^/]+/)*(?:main|polyfills|runtime|chunk|\d+)[-.][^/]+\.js$'
 elif key.startswith('vite/') and key!='vite/immich-app--immich':pattern=r'^<local>/(?:assets/.*\.js|sw\.js|workbox-[^/]+\.js)$'
 else:pattern=patterns[key]
 assets=[]
 for a in g['capture']['assets']:
  url=a['url'];role='module-build-output' if re.match(pattern,url) else 'not-reviewed-as-module-output';reason='Produced by the documented repository module build; dependency function ownership remains source-map based.' if role=='module-build-output' else 'Outside the reviewed module build output; no module-ingress claim.'
  if angular_globals and any(re.search(r'/'+re.escape(name)+r'[-.][^/]+\.js$',url) for name in angular_globals):role='global-script-list';reason='Angular build configuration scripts[] explicitly concatenates standalone global inputs.'
  if key=='tsup/peggyjs--peggy' and re.match(r'^<local>/(?:vendor/(?!peggy/)|js/online\.js)',url):role='standalone-vendor-script';reason='Docs HTML loads copied vendor globals and a non-module online.js consumer; no dependency import edge from the docs entry.'
  if url.startswith(('http:','https:')):role='external-script';reason='External script is not a pinned repository module output.'
  assets.append({'url':url,'sha256':a['sha256'],'mapSHA256':a.get('map',{}).get('sha256'),'role':role,'reason':reason})
 receipt={'schema':'recall.module-ingress-scope/v1','subject':key,'repo':item['repo'],'commit':item['commit'],'policy':'module-dependencies-only','outputFormatIndependent':True,'moduleOutputPattern':pattern,'angularGlobalBundleNames':sorted(angular_globals),'evidence':evidence,'assets':assets}
 (directory/'scope.json').write_text(json.dumps(receipt,indent=2)+'\n');allowed={a['url']+'#'+a['sha256'] for a in assets if a['role']=='module-build-output'};removed=collections.Counter(p['library'] for p in g['pairs'] if p['bundled'].rsplit('@',1)[0] not in allowed)
 row={'subject':key,'beforePairs':item['oneToOnePairs'],'removedExistingPairs':sum(removed.values()),'removedByLibrary':dict(removed),'moduleAssets':len(allowed),'scope':'results/'+key+'/scope.json'};summary.append(row)
 if removed:print(key,dict(removed),flush=True)
(base/'review-summary.json').write_text(json.dumps(summary,indent=2)+'\n');print('Reviewed',len(summary),'subjects; removed candidate pairs',sum(s['removedExistingPairs'] for s in summary))
