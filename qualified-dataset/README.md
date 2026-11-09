# Qualified ReCall Dataset

**42 repositories, 340 repository/library instances, and 76,283 one-to-one function pairs.**

Every included repository has **3–10 declared production libraries**. Each selected library has at least **three independently checkable source-function witnesses with ≥10 own-body POG property-operation features**. Source eligibility is checked before new builds. Existing archives are re-filtered with the same source-only rule. **No initial-anchor or target-matching threshold is used.**

| Bundler | Repositories | Library instances | Function pairs |
|---|---:|---:|---:|
| bun | 2 | 9 | 1,688 |
| esbuild | 6 | 41 | 5,208 |
| parcel | 3 | 12 | 2,896 |
| rolldown | 2 | 20 | 9,803 |
| rollup | 3 | 9 | 1,062 |
| rspack | 1 | 10 | 1,509 |
| tsup | 1 | 5 | 565 |
| turbopack | 8 | 80 | 8,729 |
| vite | 8 | 79 | 19,630 |
| webpack | 8 | 75 | 25,193 |

The source evidence contains 1,020 function witnesses; these are lower-bound certificates, not a census of every function. 108 selected library instances have zero accepted one-to-one pairs. Correspondence counts are reported separately and do not determine source eligibility.

The [index](index.json) defines active membership. Each subject includes captured runtime JS, source maps, independently span-verified function pairs, the original frontend manifest, and source witnesses under `eligibility/`. `reference-manifest.json` separately lists available original text from captured maps. Source eligibility uses locked package/workspace code; correspondence attribution follows the existing package-name collector and does not prove that every captured copy is one installed version.

See the [policy](../qualification/source-functions-3/POLICY.md), [all-catalog decisions](../qualification/source-functions-3/catalog-decisions.json), and [standalone audit](../qualification/source-functions-3/audit-result.json). Source failures, incomplete source evidence, and technical build/page failures are separate statuses. The broader `bundling-dataset/` is a build/capture archive and may include excluded subjects or older sampling rules.

To reproduce the source gate, install the frozen POG runtime and `qualification/source-functions-3/` dependencies with `npm ci`, prepare pinned source checkouts, then run `prepare-plan.py` and `preflight.mjs`. `verification/hufang-builds-2026-11-08/run-source-pipeline.py` gates remaining builds on those source certificates. Run `organize.py`, `audit.mjs`, and `publish.py` after verified captures. The organized output and audit do not require local source checkouts.
