"""Audit every retained/removed/added pair against the frozen pre-rule cohort."""
import subprocess,json,pathlib,collections
base=pathlib.Path(__file__).resolve().parent;root=base.parents[1];revision='b349e2c924c8b000657455d3d8e5c5b8c867d412';read=lambda p:json.loads(p.read_text())
def old(path):return json.loads(subprocess.check_output(['git','-C',str(root),'show',revision+':'+path]))
previous=old('qualified-dataset/index.json');current=read(root/'qualified-dataset/index.json');entries={s['subject']:s for s in current['subjects']};rows=[]
allowed=set(read(root/'qualification/source-functions-3/cohort-policy.json')['includedBundlers'])
identity=lambda p:(p['library'],p['source'],p['bundled'])
for entry in previous['subjects']:
 key=entry['subject'];scope=read(base/'results'/key/'scope.json');roles={a['url']+'#'+a['sha256']:a['role'] for a in scope['assets']};prior={identity(p) for p in old('qualified-dataset/'+entry['records'])['pairs']};new=entries.get(key);after={identity(p) for p in read(root/'qualified-dataset'/new['records'])['pairs']} if new else set();removed=prior-after;added=after-prior
 for p in removed:assert key.split('/')[0] not in allowed or roles[p[2].rsplit('@',1)[0]]!='module-build-output',('Removed module pair',key,p)
 for p in after:assert roles[p[2].rsplit('@',1)[0]]=='module-build-output',('Nonmodule pair retained',key,p)
 rows.append({'subject':key,'beforePairs':len(prior),'afterPairs':len(after),'retainedPairs':len(prior&after),'removedPairs':len(removed),'addedPairs':len(added),'removedByLibrary':dict(collections.Counter(p[0] for p in removed)),'removedByRole':dict(collections.Counter(roles[p[2].rsplit('@',1)[0]] for p in removed))})
assert set(entries)<=set(s['subject'] for s in previous['subjects'])
result={'status':'passed','baselineCommit':revision,'subjects':rows,'removedPairs':sum(s['removedPairs'] for s in rows),'addedPairs':sum(s['addedPairs'] for s in rows),'afterPairs':sum(s['afterPairs'] for s in rows),'checks':['every baseline pair accounted for','removed pairs are non-module ingress or outside final bundler scope','all retained and added pairs have module ingress']};assert result['afterPairs']==current['oneToOnePairs'];(base/'pair-diff-audit.json').write_text(json.dumps(result,indent=2)+'\n');print('Pair-level diff audit passed:',result['removedPairs'],'removed;',result['addedPairs'],'added;',result['afterPairs'],'retained/added total')
