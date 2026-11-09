"""Score ReCall's raw-inventory promotions against the final one-to-one oracle."""
import argparse,collections,hashlib,json,pathlib,re
ROOT=pathlib.Path(__file__).resolve().parents[1]
def read(p):return json.loads(p.read_text())
def digest(unit):return hashlib.sha256(unit['code'].encode()).hexdigest()
def score(entry,source,bundle,recovery):
 truth=read(ROOT/'qualified-dataset'/entry['records']);units={u['id']:u for u in source['units']};targets={u['id']:u for u in bundle['units']};source_hashes={key:digest(u) for key,u in units.items()};target_hashes={key:digest(u) for key,u in targets.items()}
 source_keys={f['id']:((f.get('library') or {}).get('name'),source_hashes[f['unit']],tuple(f.get('codeSpan',f['span']))) for f in source['functions']}
 target_keys={f['id']:(f['unit'],tuple(f.get('codeSpan',f['span']))) for f in bundle['functions']}
 expected={}
 for p in truth['pairs']:
  asset,span=p['bundled'].rsplit('@',1);source_asset,source_span=p['source'].rsplit('@',1);source_hash=source_asset.rsplit('#',1)[1];expected[(asset,tuple(map(int,span.split('-'))))]=(p['library'],source_hash,tuple(map(int,source_span.split('-'))))
 # Exported bundle unit IDs must be URL#SHA256; validate their bytes before scoring.
 for unit in targets.values():
  if unit['id'].rsplit('#',1)[-1]!=target_hashes[unit['id']]:raise ValueError('Bundle IDs must come from tools/export-inputs.mjs and match the captured bytes')
 predictions=collections.defaultdict(set)
 for p in recovery['promotions']:
  if p['bundleId'] not in target_keys or p['sourceId'] not in source_keys:raise ValueError('Promotion is outside supplied inventories')
  predictions[target_keys[p['bundleId']]].add(source_keys[p['sourceId']])
 correct=sum(s in predictions.get(t,set()) for t,s in expected.items());oracle_predictions=sum(len(v) for t,v in predictions.items() if t in expected);assessed=sum(t in predictions for t in expected);available_targets=set(target_keys.values());available_sources=set(source_keys.values())
 return {'subject':entry['subject'],'denominator':len(expected),'correctTargets':correct,'acceptedTargetsWithinOracle':assessed,'incorrectAcceptedTargetsWithinOracle':assessed-correct,'unacceptedOracleTargets':len(expected)-assessed,'targetRecoveryRate':correct/len(expected) if expected else None,'predictedPairsWithinOracle':oracle_predictions,'correctPairsWithinOracle':correct,'pairPrecisionWithinOracle':correct/oracle_predictions if oracle_predictions else None,'oracleTargetsAbsentFromInventory':sum(t not in available_targets for t in expected),'oracleSourcesAbsentFromInventory':sum(s not in available_sources for s in expected.values()),'predictedTargetsOutsideOracle':sum(t not in expected for t in predictions),'multipleSourceTargets':sum(len(v)>1 for v in predictions.values()),'policy':'Distinct target any-correct scoring over every released one-to-one pair. Predictions outside this partial oracle are unassessed. Raw reference byte hashes/spans required; transformed sources need an explicit original-ID mapping.'}
if __name__=='__main__':
 p=argparse.ArgumentParser(description=__doc__);p.add_argument('subject');p.add_argument('--run',type=pathlib.Path,required=True);args=p.parse_args();index=read(ROOT/'qualified-dataset/index.json');entry=next((e for e in index['subjects'] if e['subject']==args.subject),None)
 if not entry:p.error('Not a final dataset subject')
 print(json.dumps(score(entry,read(args.run/'source.json'),read(args.run/'bundle.json'),read(args.run/'recovery.json')),indent=2))
