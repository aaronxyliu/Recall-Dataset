# Source selection and zero-pair repairs — 2026-11-09

DrawDB excludes `@dbml/core` and selects `@dnd-kit/sortable` instead (62 verified pairs). Its total changes from 44,570 to 6,206 pairs. The excluded library remains in the complete captured bundle, but contributes no selected evaluation pairs or selected-library reference snapshots.

| Repository | Before | After | Cause and repair |
|---|---:|---:|---|
| primefaces/primeng | 0 | 251 | The showcase manifest declared CSS build tools. Corrected the scope to the built PrimeNG library production manifest; peer-only Angular and root dev dependencies remain excluded. |
| jonasschmedtmann/complete-javascript-course | 0 | 16 | Parcel 2.0.0-beta.1 scope-hoisting produced out-of-bounds generated map coordinates. Rebuilt with --no-scope-hoist, retaining production minification, and recaptured the page; no page or map-processing errors. |
| tensorflow/tfjs | 0 | 2,428 | Source-map originals use sibling source-tree paths without node_modules package names. Attributed exact source bytes using the locked TensorFlow package tarballs and their embedded original source maps. |
| metabase/metabase | 0 | 1,509 | The first ten alphabetically selected CodeMirror libraries were absent from the landing page capture. Prefer source-eligible declared production libraries present in the captured maps. |
| peggyjs/peggy | 0 | 565 | Vendor maps use jquery.js and ../src/FileSaver.js, losing package directory names. Exact locked-package content hashes establish jQuery and file-saver ownership. |
| CapSoftware/Cap | 0 | 1,375 | The old sample mostly selected server-side AI/AWS packages, absent from the login page. Replaced the sample with eligible declared production libraries observed in the page maps. |
| DavidHDev/react-bits | 0 | 881 | The old sample selected libraries for unloaded component demos and build tooling. Prefer eligible declared production dependencies present on the captured page. |

Current active dataset: **43 repositories, 350 library instances, 119,327 pairs; zero repositories with zero pairs**. Shadcn UI and Umami have also finished independent build/page verification since the earlier 41-repository table. Technical failures outside active membership remain explicitly unassessed in catalog-decisions.json.

No initial-anchor or minimum-pair acceptance gate was introduced. Existing source-function eligibility is unchanged. Selected libraries may still have zero pairs; these remain explicit.

Cap retains four upstream source-map coordinate errors. Those four assets contribute zero accepted pairs; the reported 1,375 pairs come from other valid captured assets. The raw maps and diagnostics remain available rather than shifting or guessing coordinates.

Evidence: [active index](../../../qualified-dataset/index.json), [source-only audit](../audit-result.json), [selection overrides](../selection-overrides.json), [course rebuild/browser evidence](../../../verification/source-map-repairs-2026-11-09/forkify/verification.json). Each active repository includes exact captured JS/maps, span-verified pairs, standalone source-function witnesses and source ownership receipts. `bundling-dataset/` remains the broader capture archive, including earlier samples and excluded subjects; it does not define active evaluation membership.
