> Historical and superseded. The active dataset restores the exact module-only cohort from `cc5df6cf50c33092cd4522e850934add762a8ede` (41 repositories, 335 library instances, 69,580 pairs). Duplicate libraries are permitted; standalone vendor/global-script copies remain excluded from correspondence collection. The evidence below describes the superseded exclusion cohort at `ffffcd656df801b4d90898ac559c981c1bbeb595`. Reproduce that audit using its Git revision.

# Full-runtime duplicate-library exclusions — 2026-11-09

Reviewed **41 repositories** from module-only baseline `cc5df6cf`. Current active dataset: **31 repositories, 259 source-eligible library instances, 49,946 one-to-one function pairs**.

Removed 34 selected library instances with duplicate/copy-risk evidence and 70 with incomplete duplication-audit evidence; added 64 qualified replacement library instances. Every retained library has positive audited module evidence. No unobserved library remains selected (0 unscored instances).

| Repository | Removed libraries | Added libraries | Libraries | Function pairs |
|---|---|---|---:|---:|
| bun/micahkepe--jsongrep | `@bytecodealliance/jco`, `react`, `react-dom` | **excluded** | 0 | 0 |
| esbuild/mattlewis92--angular-calendar | `@scarf/scarf`, `calendar-utils`, `positioning`, `tslib` | **excluded** | 0 | 0 |
| esbuild/primefaces--primeng | `@primeuix/styled`, `@primeuix/utils`, `@primeuix/motion` | **excluded** | 0 | 0 |
| esbuild/primefaces--sakai-ng | `@angular/common`, `@angular/compiler`, `@angular/core`, `@angular/forms`, `@angular/platform-browser`, `@angular/router`, `@tailwindcss/postcss`, `primeclt` | `rxjs`, `tslib` | 4 | 1,651 |
| esbuild/sissbruecker--linkding | `@floating-ui/dom`, `@hotwired/turbo`, `esbuild`, `lit` | **excluded** | 0 | 0 |
| esbuild/swimlane--ngx-datatable | `@angular/animations`, `@angular/cdk`, `@angular/common`, `@angular/compiler`, `@angular/core`, `@angular/forms`, `@angular/router` |  | 3 | 447 |
| parcel/jonasschmedtmann--complete-javascript-course | `core-js`, `fractional`, `regenerator-runtime` | **excluded** | 0 | 0 |
| parcel/parcel-bundler--website | `alpinejs`, `focus-visible`, `marked`, `react`, `react-dom`, `react-use` | **excluded** | 0 | 0 |
| rolldown/appwrite--appwrite | `@radix-ui/react-slot` | `@radix-ui/react-accordion` | 10 | 4,511 |
| rolldown/discourse--discourse | `ember-source` | `decorator-transforms` | 10 | 2,166 |
| rollup/daybrush--scenejs | `@daybrush/page`, `@daybrush/utils`, `shape-svg` | **excluded** | 0 | 0 |
| rollup/omnibrain--svguitar | `@svgdotjs/svg.js`, `roughjs`, `svgdom` | **excluded** | 0 | 0 |
| rollup/vega--vega-lite | `tslib`, `vega-expression`, `yargs` | **excluded** | 0 | 0 |
| rspack/metabase--metabase | `@floating-ui/react`, `@mantine/core` | `@mantine/dates`, `@mantine/hooks` | 10 | 773 |
| turbopack/CalCom--cal.com | `next`, `@boxyhq/saml-jackson`, `@daily-co/daily-js` | `@hookform/resolvers`, `@radix-ui/react-dialog`, `@radix-ui/react-radio-group` | 10 | 929 |
| turbopack/CapSoftware--Cap | `@radix-ui/react-slot`, `lucide-react`, `next` | `react`, `react-dom`, `sonner` | 10 | 428 |
| turbopack/DayuanJiang--next-ai-draw-io | `next` | `@ai-sdk/react` | 10 | 185 |
| turbopack/Open-Dev-Society--OpenStock | `@radix-ui/react-dropdown-menu`, `@radix-ui/react-popover`, `@radix-ui/react-select`, `better-auth`, `cmdk`, `country-data-list`, `date-fns` | `lucide-react`, `next`, `react`, `react-dom`, `sonner`, `tailwind-merge` | 9 | 1,651 |
| turbopack/colinhacks--zod | `@radix-ui/react-accordion`, `@vercel/og`, `fumadocs-core`, `fumadocs-mdx`, `fumadocs-ui`, `gray-matter`, `next` | `react-dom` | 4 | 96 |
| turbopack/jnsahaj--tweakcn | `@ai-sdk/google`, `@ai-sdk/react`, `@dnd-kit/core`, `@dnd-kit/modifiers`, `@dnd-kit/sortable`, `@google/generative-ai`, `@hookform/resolvers`, `@lexical/react`, `@neondatabase/serverless` | `culori`, `date-fns`, `next`, `react`, `react-day-picker`, `react-dom`, `react-syntax-highlighter`, `swr`, `vaul` | 10 | 2,207 |
| turbopack/shadcn-ui--ui | `@ai-sdk/anthropic`, `@ai-sdk/openai`, `@base-ui/react`, `@faker-js/faker`, `@hookform/resolvers` | `@internationalized/date`, `@tanstack/ai`, `@tanstack/ai-client`, `@tanstack/ai-react`, `@tanstack/react-form` | 10 | 514 |
| turbopack/umami-software--umami | `@clickhouse/client`, `@dicebear/core`, `@prisma/adapter-pg`, `@prisma/client`, `@svgr/cli`, `bcryptjs`, `chalk` | `chartjs-adapter-date-fns`, `colord`, `date-fns-tz`, `lucide-react`, `next-intl`, `prop-types`, `react` | 10 | 881 |
| vite/CorentinTh--it-tools | `@it-tools/bip39` | `@tabler/icons-vue` | 10 | 2,684 |
| vite/DavidHDev--react-bits | `@chakra-ui/react`, `@emotion/react`, `@gsap/react` |  | 7 | 881 |
| vite/excalidraw--excalidraw | `jotai`, `firebase`, `socket.io-client`, `uqr`, `vite-plugin-html` |  | 4 | 809 |
| vite/hoppscotch--hoppscotch | `buffer`, `util`, `@hoppscotch/ui`, `@tauri-apps/api`, `@hoppscotch/common` | `@tauri-apps/plugin-dialog`, `@tauri-apps/plugin-fs`, `@tauri-apps/plugin-shell`, `dioc` | 9 | 1,388 |
| vite/immich-app--immich | `@immich/ui`, `@formatjs/icu-messageformat-parser`, `intl-messageformat` | `@futo-org/backups-orchestrator-ui`, `media-chrome`, `svelte-i18n` | 10 | 1,337 |
| webpack/PanJiaChen--vue-element-admin | `core-js`, `clipboard`, `codemirror` |  | 7 | 5,082 |
| webpack/akveo--ngx-admin | `chart.js`, `echarts`, `@angular/animations`, `@angular/cdk`, `@angular/common`, `@angular/core` | `@asymmetrik/ngx-leaflet`, `classlist.js`, `ngx-echarts`, `tslib` | 8 | 1,436 |
| webpack/bailicangdu--vue2-elm | `better-scroll`, `fastclick`, `iscroll`, `showdown`, `vue`, `vue-router`, `vuex` | **excluded** | 0 | 0 |
| webpack/dair-ai--Prompt-Engineering-Guide | `@fortawesome/fontawesome-svg-core`, `@fortawesome/react-fontawesome`, `katex` |  | 5 | 1,427 |
| webpack/freeCodeCamp--freeCodeCamp | `@gatsbyjs/reach-router` | `@loadable/component` | 10 | 707 |
| webpack/supabase--supabase | `next`, `motion`, `@bsmnt/scrollytelling`, `@code-hike/mdx`, `@codesandbox/sandpack-react`, `@hcaptcha/react-hcaptcha` | `@heroicons/react`, `@supabase/supabase-js`, `nuqs`, `react`, `react-dom`, `react-use` | 10 | 300 |
| webpack/swagger-api--swagger-ui | `lodash`, `buffer`, `immutable`, `js-yaml` | `classnames`, `prop-types`, `react-copy-to-clipboard`, `react-debounce-input` | 10 | 479 |

The audit inspects **all captured runtime scripts**, including global/vendor files excluded from module scoring. Libraries with multiple copies are removed as a whole from that repository, not repaired by retaining one preferred copy. Single-copy instances in other repositories remain eligible. The recorded checks distinguish separate chunks containing disjoint functions from copies of the same original function, ignore nested compiler wrappers, and do not treat different pnpm peer contexts as different package versions.

Replacements must be declared production dependencies, have positive audited module provenance, and meet the unchanged source-only rule: at least three distinct source functions with at least ten own-body POG features. Every selected library must also have positive audited module evidence. There is no initial-anchor threshold or minimum-pair threshold. Repositories with fewer than three qualifying candidate libraries are excluded; the upper bound remains ten.

At three seconds per pair: 149,838 seconds, excluding overhead/retries.

Evidence: [policy](POLICY.md), [per-library audit receipts](results/), [selection decisions](selection-plan.json), [final standalone audit](../source-functions-3/audit-result.json), [active index](../../qualified-dataset/index.json). Each active repository contains `duplicate-audit.json`, exact JS/maps and source/configuration proofs. The complete captures remain archived even when a library or repository is excluded.
