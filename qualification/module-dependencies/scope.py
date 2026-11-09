"""Verify a reviewed scope receipt against exact captured assets and pinned evidence."""
import hashlib,json,pathlib
base=pathlib.Path(__file__).resolve().parent
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def load(subject,commit,capture):
 path=base/'results'/subject/'scope.json'
 if not path.exists():raise ValueError('Module-ingress review missing')
 receipt=json.loads(path.read_text());assert receipt['subject']==subject and receipt['commit']==commit
 key=lambda a:(a['url'],a['sha256'],a.get('mapSHA256',a.get('map',{}).get('sha256')))
 assert {key(a) for a in receipt['assets']}=={key(a) for a in capture['assets']},'Module review is stale: captured script/map set changed'
 for evidence in receipt['evidence']:assert sha(path.parent/evidence['path'])==evidence['sha256']
 return receipt,path.parent
