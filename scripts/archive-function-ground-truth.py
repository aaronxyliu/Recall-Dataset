"""Copy verified capture artifacts and pair metadata into the tracked build catalog."""
import hashlib
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'function-ground-truth'
DEST = ROOT / 'bundling-dataset'
SCRATCH = (Path('/tmp/recall-gt-maps'), Path('/tmp/recall-gt-raw'))


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def write(path, data):
    path.write_text(json.dumps(data, indent=2) + '\n')


def archive():
    manifest = json.loads((SOURCE / 'one-to-one-evaluation.json').read_text())
    for subject in manifest['subjects']:
        key = subject['subject']
        source = SOURCE / key
        dest = DEST / key / 'ground-truth'
        dest.mkdir(parents=True, exist_ok=True)
        capture = json.loads((source / 'capture.json').read_text())
        assert capture['imageID'] == subject['imageID']
        assert sha(source / 'relations.json') == subject['recordsSHA256']
        for asset in capture['assets']:
            for extension, digest, record in [('js', asset['sha256'], asset),
                                             ('map', asset['map'].get('sha256'), asset['map'])]:
                if not digest:
                    continue
                relative = Path('runtime-js' if extension == 'js' else 'source-maps') / (digest + '.' + extension)
                target = dest / relative
                if not target.exists():
                    original = next((base / key / target.name for base in SCRATCH
                                     if (base / key / target.name).is_file()), None)
                    if original is None:
                        raise FileNotFoundError(f'Missing capture artifact for {key}: {target.name}')
                    assert sha(original) == digest
                    target.parent.mkdir(parents=True, exist_ok=True)
                    shutil.copyfile(original, target)
                assert sha(target) == digest
                record['localPath'] = relative.as_posix()
        relations = json.loads((source / 'relations.json').read_text())
        for pair in relations['pairs']:
            pair.pop('syntaxIdentical', None)
        write(dest / 'func-mapping.json', relations)
        for name in ('relation.json', 'relations.json', 'capture.json', 'selection.json',
                     'pair-audit.json', 'status.json'):
            (dest / name).unlink(missing_ok=True)
        if not (DEST / key / 'Dockerfile').is_file():
            raise FileNotFoundError(f'Missing application Dockerfile for {key}')
        subject['records'] = f'{key}/ground-truth/func-mapping.json'
        subject['recordsSHA256'] = sha(dest / 'func-mapping.json')
        subject.pop('capture', None)
        subject.pop('syntaxIdenticalPairs', None)
    manifest.pop('syntaxIdenticalPairs', None)
    write(DEST / 'one-to-one-evaluation.json', manifest)
    print(f"Archived {len(manifest['subjects'])} repositories and {manifest['oneToOnePairs']} pairs")


if __name__ == '__main__':
    archive()
