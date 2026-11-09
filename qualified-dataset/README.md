# Qualified ReCall Dataset

**38 repositories, 305 repository/library instances, and 58,268 one-to-one function pairs.**

Every included repository has **3–10 declared production libraries**. Each selected library has at least **three independently checkable source-function witnesses with ≥10 own-body POG property-operation features**. Source eligibility is checked before new builds. Existing archives are re-filtered with the same source-only rule. **No initial-anchor or target-matching threshold is used.**

Only function pairs from reviewed **module dependencies** are counted. Standalone vendor/global-script copies are excluded before the correspondence graph is built; UMD/IIFE module output remains eligible. See the [module policy](../qualification/module-dependencies/POLICY.md) and per-repository `module-scope.json` / `module-evidence/`. Captured JS/maps are retained in full for provenance, while map-reference snapshots follow module-only scope.

| Bundler | Repositories | Library instances | Function pairs |
|---|---:|---:|---:|
| webpack | 8 | 75 | 19,055 |
| vite | 8 | 79 | 19,630 |
| esbuild | 6 | 41 | 5,208 |
| rollup | 3 | 9 | 1,062 |
| turbopack | 8 | 80 | 8,729 |
| parcel | 3 | 12 | 2,896 |
| bun | 2 | 9 | 1,688 |

The source evidence contains 915 function witnesses; these are lower-bound certificates, not a census of every function. 107 selected library instances have zero accepted one-to-one pairs. Correspondence counts are reported separately and do not determine source eligibility.

The [index](index.json) defines active membership. Each subject includes captured runtime JS, source maps, independently span-verified function pairs, the original frontend manifest, and source witnesses under `eligibility/`. `reference-manifest.json` separately lists available original text from captured maps. Source eligibility uses locked package/workspace code; correspondence attribution follows the existing package-name collector and does not prove that every captured copy is one installed version.

See the [policy](../qualification/source-functions-3/POLICY.md), [all-catalog decisions](../qualification/source-functions-3/catalog-decisions.json), and [standalone audit](../qualification/source-functions-3/audit-result.json). Source failures, incomplete source evidence, and technical build/page failures are separate statuses. The broader `bundling-dataset/` is a build/capture archive and may include excluded subjects or older sampling rules.

To reproduce the source gate, install the frozen POG runtime and `qualification/source-functions-3/` dependencies with `npm ci`, prepare pinned source checkouts, then run `prepare-plan.py` and `preflight.mjs`. `verification/hufang-builds-2026-11-08/run-source-pipeline.py` gates remaining builds on those source certificates. Run `organize.py`, `audit.mjs`, and `publish.py` after verified captures. The organized output and audit do not require local source checkouts.

## Final repository tables

Duplicate libraries are permitted. Only reviewed module-imported code contributes function pairs; standalone vendor/global-script copies remain excluded.

### webpack

| Repository | Libraries | Function pairs |
|---|---:|---:|
| [akveo/ngx-admin](webpack/akveo--ngx-admin/README.md) | 10 | 5,838 |
| [bailicangdu/vue2-elm](webpack/bailicangdu--vue2-elm/README.md) | 7 | 492 |
| [dair-ai/Prompt-Engineering-Guide](webpack/dair-ai--Prompt-Engineering-Guide/README.md) | 8 | 1,427 |
| [dokploy/dokploy](webpack/dokploy--dokploy/README.md) | 10 | 780 |
| [freeCodeCamp/freeCodeCamp](webpack/freeCodeCamp--freeCodeCamp/README.md) | 10 | 852 |
| [PanJiaChen/vue-element-admin](webpack/PanJiaChen--vue-element-admin/README.md) | 10 | 5,578 |
| [supabase/supabase](webpack/supabase--supabase/README.md) | 10 | 1,358 |
| [swagger-api/swagger-ui](webpack/swagger-api--swagger-ui/README.md) | 10 | 2,730 |
| **Subtotal: 8 repositories** | **75** | **19,055** |

### vite

| Repository | Libraries | Function pairs |
|---|---:|---:|
| [CorentinTh/it-tools](vite/CorentinTh--it-tools/README.md) | 10 | 2,681 |
| [DavidHDev/react-bits](vite/DavidHDev--react-bits/README.md) | 10 | 881 |
| [drawdb-io/drawdb](vite/drawdb-io--drawdb/README.md) | 10 | 6,206 |
| [excalidraw/excalidraw](vite/excalidraw--excalidraw/README.md) | 9 | 809 |
| [hoppscotch/hoppscotch](vite/hoppscotch--hoppscotch/README.md) | 10 | 3,244 |
| [immich-app/immich](vite/immich-app--immich/README.md) | 10 | 1,558 |
| [LibreChat-AI/LibreChat](vite/LibreChat-AI--LibreChat/README.md) | 10 | 2,188 |
| [Lissy93/dashy](vite/Lissy93--dashy/README.md) | 10 | 2,063 |
| **Subtotal: 8 repositories** | **79** | **19,630** |

### esbuild

| Repository | Libraries | Function pairs |
|---|---:|---:|
| [mattlewis92/angular-calendar](esbuild/mattlewis92--angular-calendar/README.md) | 4 | 37 |
| [primefaces/primeng](esbuild/primefaces--primeng/README.md) | 3 | 251 |
| [primefaces/sakai-ng](esbuild/primefaces--sakai-ng/README.md) | 10 | 1,309 |
| [sissbruecker/linkding](esbuild/sissbruecker--linkding/README.md) | 4 | 911 |
| [swimlane/ngx-charts](esbuild/swimlane--ngx-charts/README.md) | 10 | 2,364 |
| [swimlane/ngx-datatable](esbuild/swimlane--ngx-datatable/README.md) | 10 | 336 |
| **Subtotal: 6 repositories** | **41** | **5,208** |

### rollup

| Repository | Libraries | Function pairs |
|---|---:|---:|
| [daybrush/scenejs](rollup/daybrush--scenejs/README.md) | 3 | 124 |
| [omnibrain/svguitar](rollup/omnibrain--svguitar/README.md) | 3 | 851 |
| [vega/vega-lite](rollup/vega--vega-lite/README.md) | 3 | 87 |
| **Subtotal: 3 repositories** | **9** | **1,062** |

### turbopack

| Repository | Libraries | Function pairs |
|---|---:|---:|
| [CalCom/cal.com](turbopack/CalCom--cal.com/README.md) | 10 | 1,620 |
| [CapSoftware/Cap](turbopack/CapSoftware--Cap/README.md) | 10 | 1,375 |
| [colinhacks/zod](turbopack/colinhacks--zod/README.md) | 10 | 1,970 |
| [DayuanJiang/next-ai-draw-io](turbopack/DayuanJiang--next-ai-draw-io/README.md) | 10 | 1,193 |
| [jnsahaj/tweakcn](turbopack/jnsahaj--tweakcn/README.md) | 10 | 78 |
| [Open-Dev-Society/OpenStock](turbopack/Open-Dev-Society--OpenStock/README.md) | 10 | 46 |
| [shadcn-ui/ui](turbopack/shadcn-ui--ui/README.md) | 10 | 1,651 |
| [umami-software/umami](turbopack/umami-software--umami/README.md) | 10 | 796 |
| **Subtotal: 8 repositories** | **80** | **8,729** |

### parcel

| Repository | Libraries | Function pairs |
|---|---:|---:|
| [jonasschmedtmann/complete-javascript-course](parcel/jonasschmedtmann--complete-javascript-course/README.md) | 3 | 16 |
| [parcel-bundler/website](parcel/parcel-bundler--website/README.md) | 6 | 452 |
| [tensorflow/tfjs](parcel/tensorflow--tfjs/README.md) | 3 | 2,428 |
| **Subtotal: 3 repositories** | **12** | **2,896** |

### bun

| Repository | Libraries | Function pairs |
|---|---:|---:|
| [micahkepe/jsongrep](bun/micahkepe--jsongrep/README.md) | 3 | 1,208 |
| [RockwellShah/filekey](bun/RockwellShah--filekey/README.md) | 6 | 480 |
| **Subtotal: 2 repositories** | **9** | **1,688** |
