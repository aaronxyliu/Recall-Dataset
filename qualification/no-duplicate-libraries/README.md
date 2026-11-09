# Full-runtime duplicate-library exclusions — 2026-11-09

Reviewed **41 repositories** from module-only baseline `cc5df6cf`. Current active dataset: **39 repositories, 315 source-eligible library instances, 49,604 one-to-one function pairs**.

Removed 34 selected library instances with duplicate/copy-risk evidence and 15 with incomplete duplication-audit evidence; added 33 qualified replacement library instances. 75 pre-existing source-eligible libraries with no observed code remain explicitly unscored, contribute zero pairs and are never used as replacement candidates.

| Repository | Removed libraries | Added libraries | Libraries | Function pairs |
|---|---|---|---:|---:|
| esbuild/primefaces--primeng | `@primeuix/styled`, `@primeuix/utils`, `@primeuix/motion` | **excluded** | 0 | 0 |
| esbuild/primefaces--sakai-ng | `@angular/common`, `@angular/core`, `@angular/forms`, `@angular/platform-browser`, `@angular/router` | `rxjs`, `tslib` | 7 | 1,651 |
| esbuild/swimlane--ngx-datatable | `@angular/common`, `@angular/core`, `@angular/router` |  | 7 | 447 |
| parcel/parcel-bundler--website | `alpinejs` |  | 5 | 9 |
| rolldown/appwrite--appwrite | `@radix-ui/react-slot` | `@radix-ui/react-accordion` | 10 | 4,511 |
| rolldown/discourse--discourse | `ember-source` | `decorator-transforms` | 10 | 2,166 |
| rollup/daybrush--scenejs | `@daybrush/page`, `@daybrush/utils`, `shape-svg` | **excluded** | 0 | 0 |
| rspack/metabase--metabase | `@floating-ui/react`, `@mantine/core` | `@mantine/dates`, `@mantine/hooks` | 10 | 773 |
| turbopack/CalCom--cal.com | `next` | `@hookform/resolvers` | 10 | 912 |
| turbopack/CapSoftware--Cap | `@radix-ui/react-slot`, `lucide-react`, `next` | `react`, `react-dom`, `sonner` | 10 | 428 |
| turbopack/DayuanJiang--next-ai-draw-io | `next` | `@ai-sdk/react` | 10 | 185 |
| turbopack/colinhacks--zod | `@radix-ui/react-accordion`, `fumadocs-core`, `fumadocs-ui`, `next` | `react-dom` | 7 | 96 |
| turbopack/jnsahaj--tweakcn | `@ai-sdk/react` | `culori` | 10 | 222 |
| turbopack/shadcn-ui--ui | `@base-ui/react`, `@hookform/resolvers` | `@internationalized/date`, `@tanstack/ai` | 10 | 309 |
| vite/excalidraw--excalidraw | `jotai` |  | 8 | 809 |
| vite/hoppscotch--hoppscotch | `buffer`, `util`, `@hoppscotch/ui`, `@tauri-apps/api` | `@tauri-apps/plugin-dialog`, `@tauri-apps/plugin-fs`, `@tauri-apps/plugin-shell`, `dioc` | 10 | 1,388 |
| vite/immich-app--immich | `@immich/ui`, `@formatjs/icu-messageformat-parser`, `intl-messageformat` | `@futo-org/backups-orchestrator-ui`, `media-chrome`, `svelte-i18n` | 10 | 1,337 |
| webpack/PanJiaChen--vue-element-admin | `core-js` |  | 9 | 5,082 |
| webpack/akveo--ngx-admin | `chart.js`, `echarts`, `@angular/animations`, `@angular/common`, `@angular/core` | `@asymmetrik/ngx-leaflet`, `classlist.js`, `ngx-echarts`, `tslib` | 9 | 1,436 |
| webpack/bailicangdu--vue2-elm | `vuex` |  | 6 | 485 |
| webpack/freeCodeCamp--freeCodeCamp | `@gatsbyjs/reach-router` | `@loadable/component` | 10 | 707 |
| webpack/supabase--supabase | `next`, `motion` | `@heroicons/react`, `@supabase/supabase-js` | 10 | 254 |
| webpack/swagger-api--swagger-ui | `lodash`, `buffer`, `immutable`, `js-yaml` | `classnames`, `prop-types`, `react-copy-to-clipboard`, `react-debounce-input` | 10 | 479 |

The audit inspects **all captured runtime scripts**, including global/vendor files excluded from module scoring. Libraries with multiple copies are removed as a whole from that repository, not repaired by retaining one preferred copy. Single-copy instances in other repositories remain eligible. The recorded checks distinguish separate chunks containing disjoint functions from copies of the same original function, ignore nested compiler wrappers, and do not treat different pnpm peer contexts as different package versions.

Replacements must be declared production dependencies, have positive audited module provenance, and meet the unchanged source-only rule: at least three distinct source functions with at least ten own-body POG features. There is no initial-anchor threshold or minimum-pair threshold. Repositories with fewer than three qualifying candidate libraries are excluded; the upper bound remains ten.

At three seconds per pair: 148,812 seconds, excluding overhead/retries.

Evidence: [policy](POLICY.md), [per-library audit receipts](results/), [selection decisions](selection-plan.json), [final standalone audit](../source-functions-3/audit-result.json), [active index](../../qualified-dataset/index.json). Each active repository contains `duplicate-audit.json`, exact JS/maps and source/configuration proofs. The complete captures remain archived even when a library or repository is excluded.
