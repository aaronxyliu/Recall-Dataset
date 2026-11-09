# Qualified ReCall Dataset

**31 repositories, 259 repository/library instances, and 49,946 one-to-one function pairs.**

Every included repository has **3–10 declared production libraries**. Each selected library has at least **three independently checkable source-function witnesses with ≥10 own-body POG property-operation features**. Source eligibility is checked before new builds. Existing archives are re-filtered with the same source-only rule. **No initial-anchor or target-matching threshold is used.**

Only function pairs from reviewed **module dependencies** are counted. Standalone vendor/global-script copies are excluded before the correspondence graph is built; UMD/IIFE module output remains eligible. See the [module policy](../qualification/module-dependencies/POLICY.md) and per-repository `module-scope.json` / `module-evidence/`. Captured JS/maps are retained in full for provenance, while map-reference snapshots follow module-only scope.

Scored libraries also pass the [full-runtime duplication policy](../qualification/no-duplicate-libraries/POLICY.md), including copies in non-scored global scripts. Duplicated and unauditable libraries are replaced or removed. Every selected library must have positive audited module evidence; unobserved dependencies are excluded, including previously unscored instances. Use each subject’s `evaluationLibraries` and `reference-manifest.json` as recovery inputs; `eligibility/` contains qualification witnesses rather than extra evaluation cases.

| Bundler | Repositories | Library instances | Function pairs |
|---|---:|---:|---:|
| bun | 1 | 6 | 480 |
| esbuild | 3 | 17 | 4,462 |
| parcel | 1 | 3 | 2,428 |
| rolldown | 2 | 20 | 6,677 |
| rollup | 0 | 0 | 0 |
| rspack | 1 | 10 | 773 |
| tsup | 0 | 0 | 0 |
| turbopack | 8 | 73 | 6,891 |
| vite | 8 | 70 | 17,556 |
| webpack | 7 | 60 | 10,679 |

The source evidence contains 777 function witnesses; these are lower-bound certificates, not a census of every function. 29 selected library instances have zero accepted one-to-one pairs. Correspondence counts are reported separately and do not determine source eligibility.

The [index](index.json) defines active membership. Each subject includes captured runtime JS, source maps, independently span-verified function pairs, the original frontend manifest, and source witnesses under `eligibility/`. `reference-manifest.json` separately lists available original text from captured maps. Source eligibility uses locked package/workspace code; correspondence attribution follows the existing package-name collector and does not prove that every captured copy is one installed version.

See the [policy](../qualification/source-functions-3/POLICY.md), [all-catalog decisions](../qualification/source-functions-3/catalog-decisions.json), and [standalone audit](../qualification/source-functions-3/audit-result.json). Source failures, incomplete source evidence, and technical build/page failures are separate statuses. The broader `bundling-dataset/` is a build/capture archive and may include excluded subjects or older sampling rules.

To reproduce the source gate, install the frozen POG runtime and `qualification/source-functions-3/` dependencies with `npm ci`, prepare pinned source checkouts, then run `prepare-plan.py` and `preflight.mjs`. `verification/hufang-builds-2026-11-08/run-source-pipeline.py` gates remaining builds on those source certificates. Run `organize.py`, `audit.mjs`, and `publish.py` after verified captures. The organized output and audit do not require local source checkouts.
