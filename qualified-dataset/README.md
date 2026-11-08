# Qualified ReCall Dataset

18 repositories, 156 repository/library instances, and 135,988 one-to-one function pairs.

Only original frontend production `dependencies` are candidates. Every included repository has 5–10 selected libraries, each with at least three distinct initial POG source-function anchors before propagation or model calls. Repeated target copies count once. See the [policy](../qualification/initial-anchors-3/POLICY.md) for exact matching, selection, and supplied-reference coverage.

| Bundler | Repositories | Library instances | Function pairs |
|---|---:|---:|---:|
| bun | 1 | 5 | 412 |
| esbuild | 2 | 16 | 45,386 |
| rolldown | 2 | 20 | 9,803 |
| vite | 7 | 63 | 57,113 |
| webpack | 6 | 52 | 23,274 |

The [index](index.json) is the canonical membership list. Each subject directory contains exact captured runtime JS, source maps, independently span-verified one-to-one pairs, original frontend manifest, explicit source-reference snapshots, and final initial-anchor evidence. Pair counts reflect the newly selected library scope; they are not recovery scores and are not directly comparable with older cohorts.

The [70-subject decisions](../qualification/initial-anchors-3/catalog-decisions.json) distinguish qualification exclusions from repositories without verified inputs. Unassessed repositories are not claimed to have zero anchors. The full build/capture archive remains under `bundling-dataset/`; archive membership does not imply membership here.

Reproduction: install frozen dependencies in `qualification/initial-anchors-3/runtime/` and `verification/hufang-builds-2026-11-08/collector/`, then run `prepare-plan.py`, `run.py`, `organize.py`, `audit.py`, and `publish.py` in that order. Source checkouts are needed to regenerate the pinned frontend snapshots; the organized output and audit are standalone. See the build verification report for build/capture reproduction.
