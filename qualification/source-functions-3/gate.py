"""Validate the source-only receipt before a subject Docker build may start."""
import hashlib
import json
import pathlib

base = pathlib.Path(__file__).resolve().parent
sha = lambda path: hashlib.sha256(path.read_bytes()).hexdigest()

def check(subject, repository, manifest_relative, commit):
    exclusions = json.loads((base / 'excluded-subjects.json').read_text())
    if subject in exclusions:
        return {'passed': False, 'status': 'excluded-by-'+exclusions[subject].get('exclusionType','user'), 'reason': exclusions[subject]['reason']}
    receipt = base / 'results' / subject / 'qualification.json'
    if not receipt.exists():
        return {'passed': False, 'status': 'required', 'reason': 'source-function preflight has not completed'}
    result = json.loads(receipt.read_text())
    if result['status'] != 'passed':
        return {'passed': False, 'status': result['status'], 'reason': result.get('reason'), 'receipt': str(receipt)}
    try:
        policy = json.loads((base / 'policy.json').read_text())
        assert result['schema'] == 'recall.source-function-eligibility/v1'
        assert result['policy'] == policy and not policy['requireInitialAnchors']
        assert result['commit'] == commit
        assert result['provenance']['frontendManifestSHA256'] == sha(repository / manifest_relative)
        for name, digest in result['provenance']['codeHashes'].items():
            assert sha(base / name) == digest, name
        assert result['provenance']['runtimeSnapshotSHA256'] == sha(base / '../initial-anchors-3/runtime/hashes.json')
        selected = result['selectedLibraries']
        assert policy['minLibrariesPerRepository'] <= len(set(selected)) == len(selected) <= policy['maxLibrariesPerRepository']
        manifest = json.loads((repository / manifest_relative).read_text())
        assert set(selected) <= set(manifest.get('dependencies', {}))
        for name in selected:
            library = next(row for row in result['libraries'] if row['library'] == name)
            assert library['qualified'] and len(library['witnesses']) >= policy['minFunctionsPerLibrary']
            assert len({row['normalizedASTSHA256'] for row in library['witnesses']}) >= policy['minFunctionsPerLibrary']
            if library['origin'].get('lockfile'):
                assert sha(repository / library['origin']['lockfile']) == library['lockfileSHA256']
            for witness in library['witnesses']:
                assert witness['features']['extractionStatus'] == 'ok'
                assert witness['features'][policy['featureMetric']] >= policy['minFeatures']
                assert sha(receipt.parent / library['proofDirectory'] / witness['source']) == witness['sourceSHA256']
    except (AssertionError, KeyError, StopIteration, OSError) as error:
        return {'passed': False, 'status': 'stale-or-invalid', 'reason': str(error), 'receipt': str(receipt)}
    return {'passed': True, 'status': 'passed', 'receipt': str(receipt), 'receiptSHA256': sha(receipt), 'selectedLibraries': selected}
