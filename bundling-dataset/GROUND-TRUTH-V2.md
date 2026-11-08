# Revised one-to-one evaluation ground truth

The original 26-repository revision used `reciprocal-body-mapped-v2`: **78,884 → 82,836 pairs**, with **3,952 added**, **0 original pairs removed**, and increases in **21 repositories**.

On 2026-11-08, ng-bootstrap, ngx-datatable and bundlejs were removed from the active experiment at the user's request. The active indexes now contain **23 repositories**, with **35,617 original / 39,374 revised pairs**. `experiment-exclusions.json` records the removals and their prior index rows; `cohort-history/` retains pre-exclusion indexes. Per-repository inputs and ground-truth artifacts remain historical records and are excluded from active scheduling and aggregation. The table below records the historical 26-repository revision.

The existing captures, repository commits, and selected libraries are unchanged. Rebuilding uses source maps only; recovery predictions are never used to choose relationships. Every accepted pair passes the script/map/source hash and two function-definition-span checks. These are positional provenance checks, not a proof of semantic equivalence.

`one-to-one-evaluation-v2.json` is the active evaluation oracle. The pre-exclusion original index is retained in `cohort-history/`, and `ground-truth/func-mapping.json` remains frozen for running recovery/checkpoint provenance. Revised records are in each `ground-truth-v2/func-mapping.json`, referencing existing JS/maps without duplication. ReCall continues on the same input functions; an independent scorer writes `evaluation-v2.json` and the live report uses those scores. Original `evaluation.json` files are preserved.

| Repository | Original | Revised | Added | Collector warnings | Missing source texts |
|---|---:|---:|---:|---:|---:|
| jlfwong/speedscope | 499 | 532 | 33 | 0 | 0 |
| mattlewis92/angular-calendar | 37 | 37 | 0 | 2 | 1 |
| ng-bootstrap/ng-bootstrap | 29 | 29 | 0 | 0 | 0 |
| okikio/bundlejs | 43,064 | 43,097 | 33 | 1 | 0 |
| primefaces/primeng | 1,388 | 1,679 | 291 | 0 | 0 |
| primefaces/sakai-ng | 1,362 | 1,651 | 289 | 0 | 0 |
| sissbruecker/linkding | 911 | 911 | 0 | 0 | 0 |
| swimlane/ngx-charts | 904 | 1,114 | 210 | 0 | 0 |
| swimlane/ngx-datatable | 174 | 336 | 162 | 0 | 0 |
| CorentinTh/it-tools | 856 | 1,811 | 955 | 0 | 0 |
| DavidHDev/react-bits | 913 | 913 | 0 | 0 | 0 |
| LibreChat-AI/LibreChat | 2,012 | 2,022 | 10 | 0 | 0 |
| Lissy93/dashy | 4,671 | 4,671 | 0 | 0 | 0 |
| drawdb-io/drawdb | 5,444 | 5,486 | 42 | 0 | 0 |
| excalidraw/excalidraw | 705 | 837 | 132 | 0 | 0 |
| hoppscotch/hoppscotch | 1,340 | 1,350 | 10 | 0 | 0 |
| immich-app/immich | 675 | 760 | 85 | 43 | 0 |
| PanJiaChen/vue-element-admin | 5,330 | 5,527 | 197 | 0 | 0 |
| akveo/ngx-admin | 4,018 | 4,376 | 358 | 35 | 0 |
| bailicangdu/vue2-elm | 257 | 492 | 235 | 0 | 0 |
| bilibili/flv.js | 89 | 92 | 3 | 0 | 0 |
| dair-ai/Prompt-Engineering-Guide | 1,087 | 1,427 | 340 | 0 | 0 |
| dokploy/dokploy | 732 | 784 | 52 | 1 | 0 |
| freeCodeCamp/freeCodeCamp | 482 | 654 | 172 | 0 | 0 |
| supabase/supabase | 1,081 | 1,417 | 336 | 2 | 0 |
| swagger-api/swagger-ui | 824 | 831 | 7 | 0 | 0 |

Warnings are recorded in the revised records. They include unsupported/non-JavaScript source formats (for example Svelte components and JSON), TypeScript parse failures, invalid map coordinates, and an absent source text. The revision does not repair these artifacts or claim exhaustive function coverage. No original accepted pair was lost in this rebuild.

Reproduce from `ReCall Exp`:

```sh
python3 scripts/function-ground-truth/rebuild-cohort.py "../ReCall Dataset/bundling-dataset"
```

The script validates that every revision uses the same collector hashes and original input-record hash before generating the cohort index.
