"""Audit the standalone restricted dataset without local source checkouts."""
import collections
import hashlib
import json
import pathlib

base = pathlib.Path(__file__).resolve().parent
root = base.parents[1]
dataset = root / 'qualified-dataset'
read = lambda p: json.loads(p.read_text())
sha = lambda p: hashlib.sha256(p.read_bytes()).hexdigest()
index = read(dataset / 'index.json')
totals = collections.Counter()
for entry in index['subjects']:
    directory = dataset / entry['subject']
    selected = set(entry['selectedLibraries'])
    qualification = read(directory / 'qualification.json')
    for field, file in [('qualificationRunnerSHA256', 'anchors.mjs'), ('selectionSHA256', 'selection.mjs'), ('matcherSHA256', 'runtime/components/pog/index.mjs')]:
        assert qualification['provenance'][field] == sha(base / file)
    assert qualification['provenance']['manifestSHA256'] == sha(directory / 'frontend-package.json')
    assert 5 <= len(selected) <= 10
    assert selected <= set(read(directory / 'frontend-package.json').get('dependencies', {}))
    refs = read(directory / 'reference-manifest.json')['files']
    owners = {ref['id']: ref['library']['name'] for ref in refs}
    for ref in refs:
        assert sha(directory / ref['path']) == ref['sha256']
    anchors = collections.defaultdict(set)
    for match in read(directory / 'initial-anchors.json')['matches']:
        source = match['sourceId']
        library = owners[source.rsplit(':', 2)[0]]
        anchors[library].add(source)
    assert set(anchors) <= selected
    assert {name: len(anchors[name]) for name in selected} == entry['initialAnchors']
    assert all(len(anchors[name]) >= 3 for name in selected)
    record = dataset / entry['records']
    assert sha(record) == entry['recordsSHA256']
    mapping = read(record)
    assert set(mapping['selectedLibraries']) == selected
    assert len(mapping['pairs']) == entry['oneToOnePairs']
    assert all(pair['library'] in selected for pair in mapping['pairs'])
    for asset in mapping['capture']['assets']:
        for obj, folder, ext in [(asset, 'runtime-js', 'js'), (asset.get('map', {}), 'source-maps', 'map')]:
            if obj.get('sha256'):
                assert sha(record.parent / obj.get('localPath', folder + '/' + obj['sha256'] + '.' + ext)) == obj['sha256']
    totals.update(repositories=1, libraries=len(selected), pairs=len(mapping['pairs']))
assert totals['repositories'] == index['repositoryCount']
assert totals['libraries'] == index['libraryInstanceCount']
assert totals['pairs'] == index['oneToOnePairs']
(base / 'audit-result.json').write_text(json.dumps({'status': 'passed', **totals}, indent=2) + '\n')
print(dict(totals))
