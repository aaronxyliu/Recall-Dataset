"""Source-only qualification, then build and real-browser verification, one repo at a time."""
import json
import os
import pathlib
import subprocess
from sources import ensure

base = pathlib.Path(__file__).resolve().parent
root = base.parents[1]
source = root / 'qualification/source-functions-3'
subjects = json.loads((base / 'subjects.json').read_text())
def priority(subject):
    evidence = base / subject['subject'] / 'verification.json'
    built = evidence.exists() and json.loads(evidence.read_text()).get('buildStatus') == 'built'
    return subject['subject'] == 'rspack/metabase--metabase', built
subjects.sort(key=priority)
for subject in subjects:
    key = subject['subject']
    if os.environ.get('RECALL_ONLY') and key != os.environ['RECALL_ONLY']:
        continue
    env = {**os.environ, 'RECALL_ONLY': key, 'RECALL_BUILD_TIMEOUT': os.environ.get('RECALL_BUILD_TIMEOUT', '7200')}
    work = source / 'work' / key
    work.mkdir(parents=True, exist_ok=True)
    ensure(subject)
    subprocess.run(['python3',str(source/'prepare-plan.py')],check=True,stdout=subprocess.DEVNULL)
    with (work / 'preflight.log').open('a') as log:
        process = subprocess.run(['node', '--max-old-space-size=4096', str(source / 'preflight.mjs')], env=env, stdout=log, stderr=subprocess.STDOUT, timeout=1800)
    receipt = source / 'results' / key / 'qualification.json'
    if process.returncode or not receipt.exists():
        print(key, 'preflight-error', flush=True)
        continue
    result = json.loads(receipt.read_text())
    print(key, 'source preflight', result['status'], len(result['selectedLibraries']), flush=True)
    if result['status'] != 'passed':
        continue
    subprocess.run(['python3', str(base / 'build.py')], env=env, check=True)
    evidence = base / key / 'verification.json'
    if not evidence.exists():
        continue
    verification = json.loads(evidence.read_text())
    if verification.get('buildStatus') != 'built' or verification.get('pageStatus') == 'rendered':
        continue
    if (root / 'bundling-dataset' / key / 'ground-truth/func-mapping.json').exists():
        env['RECALL_RECAPTURE'] = '1'
    subprocess.run(['python3', str(base / 'capture.py')], env=env, check=True)
print('Source-gated Hufang queue complete', flush=True)
