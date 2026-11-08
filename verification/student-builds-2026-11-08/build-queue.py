import pathlib,json,os,subprocess,concurrent.futures
base=pathlib.Path(__file__).resolve().parent
subjects=json.loads((base/'subjects.json').read_text())
def run(s):
 p=base/s['subject']/'verification.json'
 if p.exists() and json.loads(p.read_text()).get('status')=='built':return
 subprocess.run(['python3',str(base/'run-builds.py')],env={**os.environ,'RECALL_ONLY':s['subject']})
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:list(pool.map(run,subjects))
