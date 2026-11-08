"""Refresh active entry points; retain prior cohort manifests verbatim."""
import collections
import json
import pathlib
import shutil

base = pathlib.Path(__file__).resolve().parent
root = base.parents[1]
cat = root / 'bundling-dataset'
dataset = root / 'qualified-dataset'
index = json.loads((dataset / 'index.json').read_text())
history = root / 'historical-cohorts/before-initial-anchors-3'
history.mkdir(parents=True, exist_ok=True)
for name in ['one-to-one-evaluation.json', 'one-to-one-evaluation-v2.json']:
    if not (history / name).exists():
        shutil.copyfile(cat / name, history / name)
    active = {**index, 'pairDefinition': 'reciprocal-body-mapped-v2', 'canonicalIndex': '../qualified-dataset/index.json', 'subjects': [{**entry, 'records': '../qualified-dataset/' + entry['records'], 'qualification': '../qualified-dataset/' + entry['qualification']} for entry in index['subjects']]}
    (cat / name).write_text(json.dumps(active, indent=2) + '\n')
decisions = {d['subject']: d for d in json.loads((base / 'decisions.json').read_text())}
hbase = root / 'verification/hufang-builds-2026-11-08'
for path in sorted(cat.glob('*/*/subject.json')):
    key = str(path.parent.relative_to(cat))
    if key in decisions:
        continue
    evidence = hbase / key / 'verification.json'
    verification = json.loads(evidence.read_text()) if evidence.exists() else {}
    decisions[key] = {'subject': key, 'status': 'unassessed', 'reason': 'no verified captured inputs for anchor qualification', 'buildStatus': verification.get('buildStatus', 'not verified'), 'pageStatus': verification.get('pageStatus', 'not verified')}
(base / 'catalog-decisions.json').write_text(json.dumps(list(decisions.values()), indent=2) + '\n')
groups = collections.defaultdict(lambda: [0, 0, 0])
for entry in index['subjects']:
    counts = groups[entry['subject'].split('/')[0]]
    counts[0] += 1
    counts[1] += entry['libraryCount']
    counts[2] += entry['oneToOnePairs']
lines = ['# Qualified ReCall Dataset', '', f"{index['repositoryCount']} repositories, {index['libraryInstanceCount']} repository/library instances, and {index['oneToOnePairs']:,} one-to-one function pairs.", '', 'Only original frontend production `dependencies` are candidates. Every included repository has 5–10 selected libraries, each with at least three distinct initial POG source-function anchors before propagation or model calls. Repeated target copies count once. See the [policy](../qualification/initial-anchors-3/POLICY.md) for exact matching, selection, and supplied-reference coverage.', '', '| Bundler | Repositories | Library instances | Function pairs |', '|---|---:|---:|---:|']
for group, counts in sorted(groups.items()):
    lines.append('| ' + group + ' | ' + ' | '.join(f'{n:,}' for n in counts) + ' |')
lines += ['', 'The [index](index.json) is the canonical membership list. Each subject directory contains exact captured runtime JS, source maps, independently span-verified one-to-one pairs, original frontend manifest, explicit source-reference snapshots, and final initial-anchor evidence. Pair counts reflect the newly selected library scope; they are not recovery scores and are not directly comparable with older cohorts.', '', 'The [70-subject decisions](../qualification/initial-anchors-3/catalog-decisions.json) distinguish qualification exclusions from repositories without verified inputs. Unassessed repositories are not claimed to have zero anchors. The full build/capture archive remains under `bundling-dataset/`; archive membership does not imply membership here.', '', 'Reproduction: install frozen dependencies in `qualification/initial-anchors-3/runtime/` and `verification/hufang-builds-2026-11-08/collector/`, then run `prepare-plan.py`, `run.py`, `organize.py`, `audit.py`, and `publish.py` in that order. Source checkouts are needed to regenerate the pinned frontend snapshots; the organized output and audit are standalone. See the build verification report for build/capture reproduction.', '']
(dataset / 'README.md').write_text('\n'.join(lines))
readme = root / 'README.md'
text = readme.read_text()
marker = '## Historical build and capture catalog'
if marker not in text:
    text = '# ReCall Dataset\n\n' + marker + '\n\n' + text.split('\n', 1)[1]
prefix = f"# ReCall Dataset\n\nThe active [qualified dataset](qualified-dataset/README.md) contains **{index['repositoryCount']} repositories, {index['libraryInstanceCount']} library instances, and {index['oneToOnePairs']:,} one-to-one function pairs**. It uses production dependencies only, with 5–10 qualifying libraries per repository and at least three distinct initial function anchors per library.\n\nUse [qualified-dataset/index.json](qualified-dataset/index.json) for membership and artifact paths, the [policy](qualification/initial-anchors-3/POLICY.md) for selection details, and [catalog decisions](qualification/initial-anchors-3/catalog-decisions.json) for exclusions and unassessed cases. Hufang's independent [build/browser verification](verification/hufang-builds-2026-11-08/README.md) records successful captures and unresolved attempts.\n\nOlder cohort manifests are preserved in [historical-cohorts/](historical-cohorts/before-initial-anchors-3/). The catalog and historical descriptions below do not define current dataset membership. Both `bundling-dataset/one-to-one-evaluation*.json` entry points now refer to the qualified v2 records.\n\n"
text = prefix + marker + text.split(marker, 1)[1]
text = text.replace('The active experiment contains **26 repositories and 78,884 one-to-one function pairs**.', 'The historical experiment described in this section contained **26 repositories and 78,884 one-to-one function pairs**.')
text = text.replace('Its durable entry point is [bundling-dataset/one-to-one-evaluation.json](bundling-dataset/one-to-one-evaluation.json).', 'The current entry point is [qualified-dataset/index.json](qualified-dataset/index.json); prior manifest snapshots are retained under `historical-cohorts/`.')
readme.write_text(text)
print('Published entry points for', index['repositoryCount'], 'repositories')
