# ReCall Dataset

This repository owns dataset metadata, the bundler-organized catalog, local held-out source checkouts, fixture inputs, and dataset preparation scripts. Recovery code lives in `../ReCall`; experiment outputs and the paper live in `../ReCall Exp`.

The [function ground-truth dataset](function-ground-truth/README.md) records the sampled production dependencies, browser capture coverage, and source-to-bundle function pairs for the 26 retained experiment repositories, with 19,914 one-to-one pairs.

For new applications, follow the [agent setup guide](WEB_APPLICATION_SETUP_GUIDE.md) for Docker builds, production source maps, browser verification, and common failure fixes.

## Tracked experiment artifacts

The active experiment contains **26 repositories and 19,914 one-to-one function pairs**. Its durable entry point is [bundling-dataset/one-to-one-evaluation.json](bundling-dataset/one-to-one-evaluation.json). All captured JavaScript, source maps, and pair records in the following layout are tracked by Git.

```text
bundling-dataset/
  one-to-one-evaluation.json
  <bundler>/<owner>--<repo>/
    Dockerfile                       # source-map-enabled application build
    Dockerfile.dockerignore           # build-context rules, when required
    README.md                        # application setup and page URL
    ground-truth/
      runtime-js/<sha256>.js                 # exact captured JavaScript
      source-maps/<sha256>.map              # exact captured source maps
      func-mapping.json             # one-to-one function records
```

Each retained repository has one Dockerfile at `bundling-dataset/<bundler>/<owner>--<repo>/Dockerfile`. It enables or retains source maps and includes any packaging fixes needed to serve them. Use the repository’s documented build context and launch commands. The archive script copies captured artifacts and function mappings while using this outer Dockerfile as the canonical recipe.

Manifest paths resolve relative to `bundling-dataset/`. A function identifier in `func-mapping.json` uses `path#sha256@start-end`. Its offsets are half-open UTF-16 code-unit offsets into the corresponding artifact. Original library source is supplied by the map's `sourcesContent` where available. The pair records store locations and relationships; the archived scripts and maps supply the actual code.

The archive preserves captured bytes under content-hash filenames. A bundled function's hash identifies its file under `runtime-js/`. Source-map filenames identify their content hashes under `source-maps/`; their `sources` and `sourcesContent` identify original files. A script's original map URL may refer to its former HTTP location. Keep the manifest, scripts, maps, and metadata together when transferring the dataset.

The archive occupies approximately 441 MB before Git compression. Source checkouts under `builds/` remain local and ignored. To publish refreshed capture records into this layout, run `python3 scripts/archive-function-ground-truth.py` from this repository. It verifies content hashes and copies new artifacts from the capture scratch directories. The tracked archive can be read independently of those temporary directories.

## Frontend repository builds

Build recipes, setup instructions, and browser evidence are organized by build tool and repository under `bundling-dataset/<bundler>/<owner>--<repository>/`. Local source checkouts live in this repository’s Git-ignored `builds/<bundler>/<owner>--<repository>/` directory.

The table covers the [original 70-repository selection](https://github.com/aaronxyliu/Recall-Dataset/blob/42cbd7235c2f6c2133eebed394c989cefacba34c/selection.json). The page column reports local browser observations. “Untested” means a local Docker build and browser check are pending. The status links lead to repository-specific build and launch instructions. A verified page has a local browser observation; a failed attempt records the stage reached. The excluded gallery is listed for traceability.

**Docker reproduction results.** All 30 selected webpack, Vite, and esbuild frontends built from their pinned commits. Chrome verified 29 local pages: 10 webpack, 9 Vite, and 10 esbuild. The tldraw whiteboard requires Clerk configuration and local services. Each project’s setup instructions link to its verification record; backend-dependent projects include local Compose commands.

Groups follow State of JS 2025 usage among all respondents, highest first. Within each group, repositories are sorted by GitHub stars from the November 2026 selection snapshot. Stars count the whole repository, including for frontends selected from monorepos.

### webpack (87% usage)

| Repository | Stars | Selected frontend | Upstream commit | Local page opens? | Docker build status |
|---|---:|---|---|---|---|
| [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) | 458,611 | Interactive coding curriculum | [`a7292b4f26e37f59ba12d670e53d8806d5c2527f`](https://github.com/freeCodeCamp/freeCodeCamp/commit/a7292b4f26e37f59ba12d670e53d8806d5c2527f) | Yes — local page verified | [Verified](bundling-dataset/webpack/freeCodeCamp--freeCodeCamp/README.md) |
| [supabase/supabase](https://github.com/supabase/supabase) | 114,581 | Supabase platform website | [`aa9d04e4f77447e2b6aaf317b686007aff05aa96`](https://github.com/supabase/supabase/commit/aa9d04e4f77447e2b6aaf317b686007aff05aa96) | Yes — local page verified | [Verified](bundling-dataset/webpack/supabase--supabase/README.md) |
| [PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) | 90,118 | Vue administration dashboard template | [`6858a9ad67483025f6a9432a926beb9327037be3`](https://github.com/PanJiaChen/vue-element-admin/commit/6858a9ad67483025f6a9432a926beb9327037be3) | Yes — local page verified | [Verified](bundling-dataset/webpack/PanJiaChen--vue-element-admin/README.md) |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 79,854 | Prompt engineering guide | [`57673726396dd94acb23bdb1e67f27c78ee85a8e`](https://github.com/dair-ai/Prompt-Engineering-Guide/commit/57673726396dd94acb23bdb1e67f27c78ee85a8e) | Yes — local page verified | [Verified](bundling-dataset/webpack/dair-ai--Prompt-Engineering-Guide/README.md) |
| [mozilla/pdf.js](https://github.com/mozilla/pdf.js) | 54,101 | Browser PDF viewer | [`578fe15c435f7c91eb1fc4f30963b645e56e20ff`](https://github.com/mozilla/pdf.js/commit/578fe15c435f7c91eb1fc4f30963b645e56e20ff) | Yes — local page verified | [Verified](bundling-dataset/webpack/mozilla--pdf.js/README.md) |
| [bailicangdu/vue2-elm](https://github.com/bailicangdu/vue2-elm) | 40,964 | Food delivery application demo | [`b85ff0220366be863868269177a4abf74c7a85ca`](https://github.com/bailicangdu/vue2-elm/commit/b85ff0220366be863868269177a4abf74c7a85ca) | Yes — local page verified | [Verified](bundling-dataset/webpack/bailicangdu--vue2-elm/README.md) |
| [dokploy/dokploy](https://github.com/dokploy/dokploy) | 38,265 | Application deployment dashboard | [`fe9ae2a7db22730ff1ab72939e10806848c7cccd`](https://github.com/dokploy/dokploy/commit/fe9ae2a7db22730ff1ab72939e10806848c7cccd) | Yes — setup form with PostgreSQL | [Verified with Compose](bundling-dataset/webpack/dokploy--dokploy/README.md) |
| [swagger-api/swagger-ui](https://github.com/swagger-api/swagger-ui) | 29,072 | Interactive OpenAPI explorer | [`d3296954a6b813898d298815ac3e68daa1cf7408`](https://github.com/swagger-api/swagger-ui/commit/d3296954a6b813898d298815ac3e68daa1cf7408) | Yes — local page verified | [Verified](bundling-dataset/webpack/swagger-api--swagger-ui/README.md) |
| [akveo/ngx-admin](https://github.com/akveo/ngx-admin) | 25,668 | Angular administration dashboard demo | [`dc6a442704bfef34b776b5eb15faf852d9e2f75c`](https://github.com/akveo/ngx-admin/commit/dc6a442704bfef34b776b5eb15faf852d9e2f75c) | Yes — local page verified | [Verified](bundling-dataset/webpack/akveo--ngx-admin/README.md) |
| [bilibili/flv.js](https://github.com/bilibili/flv.js) | 23,173 | FLV video playback demo | [`42343088f22619cf014a057b3878fe3d320016a6`](https://github.com/bilibili/flv.js/commit/42343088f22619cf014a057b3878fe3d320016a6) | Yes — local page verified | [Verified](bundling-dataset/webpack/bilibili--flv.js/README.md) |

### Vite (84% usage)

| Repository | Stars | Selected frontend | Upstream commit | Local page opens? | Docker build status |
|---|---:|---|---|---|---|
| [excalidraw/excalidraw](https://github.com/excalidraw/excalidraw) | 135,214 | Collaborative whiteboard and diagram editor | [`701b901a0f1ba3d0b390d9cdf63d112e25abac4b`](https://github.com/excalidraw/excalidraw/commit/701b901a0f1ba3d0b390d9cdf63d112e25abac4b) | Yes — local page verified | [Verified](bundling-dataset/vite/excalidraw--excalidraw/README.md) |
| [immich-app/immich](https://github.com/immich-app/immich) | 118,350 | Self-hosted photo and video manager | [`037e5bc0554074bfe91e20b802a6a4ef4a6dd6f9`](https://github.com/immich-app/immich/commit/037e5bc0554074bfe91e20b802a6a4ef4a6dd6f9) | Yes — welcome screen with local API | [Verified with Compose](bundling-dataset/vite/immich-app--immich/README.md) |
| [hoppscotch/hoppscotch](https://github.com/hoppscotch/hoppscotch) | 80,762 | Browser API request client | [`55908a76a1d0555c9bbb5d74244c14173df95b06`](https://github.com/hoppscotch/hoppscotch/commit/55908a76a1d0555c9bbb5d74244c14173df95b06) | Yes — local page verified | [Verified](bundling-dataset/vite/hoppscotch--hoppscotch/README.md) |
| [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) | 51,330 | Animated React component gallery | [`4dc7b5b7772e1217c8fb8d2a7aa074302180e5b4`](https://github.com/DavidHDev/react-bits/commit/4dc7b5b7772e1217c8fb8d2a7aa074302180e5b4) | Yes — local page verified | [Verified](bundling-dataset/vite/DavidHDev--react-bits/README.md) |
| [tldraw/tldraw](https://github.com/tldraw/tldraw) | 51,285 | Collaborative drawing canvas | [`bc3432915441bb53eb7429459b19d67c8f0c69d1`](https://github.com/tldraw/tldraw/commit/bc3432915441bb53eb7429459b19d67c8f0c69d1) | Whiteboard requires Clerk configuration | [Built; runtime configuration required](bundling-dataset/vite/tldraw--tldraw/README.md) |
| [LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) | 46,784 | Conversational AI client | [`f4154b649efa37e1345ccc517a4d8d1ed2178c82`](https://github.com/LibreChat-AI/LibreChat/commit/f4154b649efa37e1345ccc517a4d8d1ed2178c82) | Yes — login form with MongoDB | [Verified with Compose](bundling-dataset/vite/LibreChat-AI--LibreChat/README.md) |
| [CorentinTh/it-tools](https://github.com/CorentinTh/it-tools) | 41,129 | Browser utilities for developers | [`d505845f918e946ec300af7b36efc107e2f66e9e`](https://github.com/CorentinTh/it-tools/commit/d505845f918e946ec300af7b36efc107e2f66e9e) | Yes — local page verified | [Verified](bundling-dataset/vite/CorentinTh--it-tools/README.md) |
| [drawdb-io/drawdb](https://github.com/drawdb-io/drawdb) | 40,259 | Database schema and diagram editor | [`a249c7fb730c2de9b5c2ce6e863f2ea7344ac372`](https://github.com/drawdb-io/drawdb/commit/a249c7fb730c2de9b5c2ce6e863f2ea7344ac372) | Yes — local page verified | [Verified](bundling-dataset/vite/drawdb-io--drawdb/README.md) |
| [actualbudget/actual](https://github.com/actualbudget/actual) | 30,014 | Personal budgeting application | [`92865f32f307ec04e0556a8c2052819d49e8e204`](https://github.com/actualbudget/actual/commit/92865f32f307ec04e0556a8c2052819d49e8e204) | Yes — local page verified | [Verified](bundling-dataset/vite/actualbudget--actual/README.md) |
| [Lissy93/dashy](https://github.com/Lissy93/dashy) | 26,932 | Configurable personal dashboard | [`002c6dd559c8d7ba662aeae9228164f6cf398c75`](https://github.com/Lissy93/dashy/commit/002c6dd559c8d7ba662aeae9228164f6cf398c75) | Yes — local page verified | [Verified](bundling-dataset/vite/Lissy93--dashy/README.md) |

### esbuild (54% usage)

| Repository | Stars | Selected frontend | Upstream commit | Local page opens? | Docker build status |
|---|---:|---|---|---|---|
| [microsoft/vscode](https://github.com/microsoft/vscode) | 194,761 | Browser-based Visual Studio Code editor | [`e13716ce975fc4597cb8c2228471ac4783bf4529`](https://github.com/microsoft/vscode/commit/e13716ce975fc4597cb8c2228471ac4783bf4529) | Yes — local page verified | [Verified](bundling-dataset/esbuild/microsoft--vscode/README.md) |
| [primefaces/primeng](https://github.com/primefaces/primeng) | 12,480 | Angular UI component showcase | [`fe82b291d6fedde177dc12c0af7ef1008dc1b1ff`](https://github.com/primefaces/primeng/commit/fe82b291d6fedde177dc12c0af7ef1008dc1b1ff) | Yes — local page verified | [Verified](bundling-dataset/esbuild/primefaces--primeng/README.md) |
| [sissbruecker/linkding](https://github.com/sissbruecker/linkding) | 11,385 | Bookmark manager | [`27b7303baf41bb28babc610ac8eaa486e1ddfab5`](https://github.com/sissbruecker/linkding/commit/27b7303baf41bb28babc610ac8eaa486e1ddfab5) | Yes — local page verified | [Verified](bundling-dataset/esbuild/sissbruecker--linkding/README.md) |
| [ng-bootstrap/ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) | 8,217 | Angular Bootstrap component demos | [`2a45c97082c66c955ac9c4865cf66d8d4dfd27fc`](https://github.com/ng-bootstrap/ng-bootstrap/commit/2a45c97082c66c955ac9c4865cf66d8d4dfd27fc) | Yes — local page verified | [Verified](bundling-dataset/esbuild/ng-bootstrap--ng-bootstrap/README.md) |
| [jlfwong/speedscope](https://github.com/jlfwong/speedscope) | 6,781 | Interactive performance profile viewer | [`fe804e6281cf847713448c2c3e0faec3e1f62b2d`](https://github.com/jlfwong/speedscope/commit/fe804e6281cf847713448c2c3e0faec3e1f62b2d) | Yes — local page verified | [Verified](bundling-dataset/esbuild/jlfwong--speedscope/README.md) |
| [swimlane/ngx-datatable](https://github.com/swimlane/ngx-datatable) | 4,665 | Interactive data table showcase | [`2d4f8f2b383d875d3e3dec45969f0e42a117fb3f`](https://github.com/swimlane/ngx-datatable/commit/2d4f8f2b383d875d3e3dec45969f0e42a117fb3f) | Yes — local page verified | [Verified](bundling-dataset/esbuild/swimlane--ngx-datatable/README.md) |
| [swimlane/ngx-charts](https://github.com/swimlane/ngx-charts) | 4,358 | Angular chart showcase | [`9625b8efea06a6edd1d6c7184241ded9442cf570`](https://github.com/swimlane/ngx-charts/commit/9625b8efea06a6edd1d6c7184241ded9442cf570) | Yes — local page verified | [Verified](bundling-dataset/esbuild/swimlane--ngx-charts/README.md) |
| [mattlewis92/angular-calendar](https://github.com/mattlewis92/angular-calendar) | 2,811 | Interactive calendar demo | [`9ae06cf4e5bdb5ee538c0ff2e57a4ec4f7facc68`](https://github.com/mattlewis92/angular-calendar/commit/9ae06cf4e5bdb5ee538c0ff2e57a4ec4f7facc68) | Yes — local page verified | [Verified](bundling-dataset/esbuild/mattlewis92--angular-calendar/README.md) |
| [primefaces/sakai-ng](https://github.com/primefaces/sakai-ng) | 951 | Angular dashboard template | [`96d71496d685b5c110efd2875abaa2bf89a56ad2`](https://github.com/primefaces/sakai-ng/commit/96d71496d685b5c110efd2875abaa2bf89a56ad2) | Yes — local page verified | [Verified](bundling-dataset/esbuild/primefaces--sakai-ng/README.md) |
| [okikio/bundlejs](https://github.com/okikio/bundlejs) | 915 | Online JavaScript bundler and package size checker | [`96033c66d7361f79e25bb9b511f4286805fcb9fb`](https://github.com/okikio/bundlejs/commit/96033c66d7361f79e25bb9b511f4286805fcb9fb) | Yes — local page verified | [Verified](bundling-dataset/esbuild/okikio--bundlejs/README.md) |

### Rollup (47% usage)

| Repository | Stars | Selected frontend | Upstream commit | Local page opens? | Docker build status |
|---|---:|---|---|---|---|
| [video-dev/hls.js](https://github.com/video-dev/hls.js) | 17,036 | HLS video player demo | [`15ded1909feda7a414998ba022d3b88e647592f7`](https://github.com/video-dev/hls.js/commit/15ded1909feda7a414998ba022d3b88e647592f7) | Untested | Pending |
| [vega/vega-lite](https://github.com/vega/vega-lite) | 5,545 | Vega-Lite chart examples | [`4a29260c30c2a7352ec681ecca65c0c2ad960dfc`](https://github.com/vega/vega-lite/commit/4a29260c30c2a7352ec681ecca65c0c2ad960dfc) | Untested | Pending |
| [daybrush/scenejs](https://github.com/daybrush/scenejs) | 2,774 | Browser animation showcase | [`da1b4eb7c045d3f7133d2bb63fe29d1080be9639`](https://github.com/daybrush/scenejs/commit/da1b4eb7c045d3f7133d2bb63fe29d1080be9639) | Untested | Pending |
| [abrahamjuliot/creepjs](https://github.com/abrahamjuliot/creepjs) | 2,541 | Browser fingerprint inspection tool | [`10aa6724cd33a1015db1574211890518cd04f0cc`](https://github.com/abrahamjuliot/creepjs/commit/10aa6724cd33a1015db1574211890518cd04f0cc) | Untested | Pending |
| [fiduswriter/simple-datatables](https://github.com/fiduswriter/simple-datatables) | 1,607 | Sortable data table demo | [`ff80161244e78c10f2183e7a238f3a6c0cb14023`](https://github.com/fiduswriter/simple-datatables/commit/ff80161244e78c10f2183e7a238f3a6c0cb14023) | Untested | Pending |
| [omnibrain/svguitar](https://github.com/omnibrain/svguitar) | 826 | SVG guitar chord diagram demo | [`3b465fdc8af57a9ed948e168ada1c87c9aafd574`](https://github.com/omnibrain/svguitar/commit/3b465fdc8af57a9ed948e168ada1c87c9aafd574) | Untested | Pending |

### Turbopack (28% usage)

| Repository | Stars | Selected frontend | Upstream commit | Local page opens? | Docker build status |
|---|---:|---|---|---|---|
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | 127,452 | Component-library project creation interface | [`8a3536678a528cc012b9e62484290e79d0be410f`](https://github.com/shadcn-ui/ui/commit/8a3536678a528cc012b9e62484290e79d0be410f) | Untested | Pending |
| [CalCom/cal.com](https://github.com/CalCom/cal.com) | 49,723 | Appointment scheduling application | [`2eb48eccd8aca8a0c0ffabf28cf92e298b33ecee`](https://github.com/CalCom/cal.com/commit/2eb48eccd8aca8a0c0ffabf28cf92e298b33ecee) | Untested | Pending |
| [colinhacks/zod](https://github.com/colinhacks/zod) | 44,266 | Zod schema-library documentation | [`8651451b82b454847ef9d6d8cc533496853a10d8`](https://github.com/colinhacks/zod/commit/8651451b82b454847ef9d6d8cc533496853a10d8) | Untested | Pending |
| [umami-software/umami](https://github.com/umami-software/umami) | 39,943 | Web analytics dashboard | [`559e3c607c23d2c72d9bd4f6481bda428255323c`](https://github.com/umami-software/umami/commit/559e3c607c23d2c72d9bd4f6481bda428255323c) | Untested | Pending |
| [DayuanJiang/next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io) | 36,715 | AI-assisted diagram editor | [`c9dc5f5cc62e7e5a327a62b39027d80033e1548c`](https://github.com/DayuanJiang/next-ai-draw-io/commit/c9dc5f5cc62e7e5a327a62b39027d80033e1548c) | Untested | Pending |
| [onlook-dev/onlook](https://github.com/onlook-dev/onlook) | 27,122 | Visual interface editor | [`423e2e924366419e418ee049093872d535eea41a`](https://github.com/onlook-dev/onlook/commit/423e2e924366419e418ee049093872d535eea41a) | Untested | Pending |
| [CapSoftware/Cap](https://github.com/CapSoftware/Cap) | 24,447 | Screen recording and sharing service | [`8ce7e711492a6187dda345e8424e903c9e8c25d8`](https://github.com/CapSoftware/Cap/commit/8ce7e711492a6187dda345e8424e903c9e8c25d8) | Untested | Pending |
| [Open-Dev-Society/OpenStock](https://github.com/Open-Dev-Society/OpenStock) | 21,157 | Stock tracking application | [`eac478f71dcff342d196a65c724dc955c221eeee`](https://github.com/Open-Dev-Society/OpenStock/commit/eac478f71dcff342d196a65c724dc955c221eeee) | Untested | Pending |
| [formbricks/formbricks](https://github.com/formbricks/formbricks) | 13,216 | Survey and feedback platform | [`fa0546bda2f53c3e39440dd6cc240c191e1dda10`](https://github.com/formbricks/formbricks/commit/fa0546bda2f53c3e39440dd6cc240c191e1dda10) | Untested | Pending |
| [jnsahaj/tweakcn](https://github.com/jnsahaj/tweakcn) | 10,522 | Interactive UI theme editor | [`a3b47b37cba97dd637de517aab52c45ec0f83456`](https://github.com/jnsahaj/tweakcn/commit/a3b47b37cba97dd637de517aab52c45ec0f83456) | Untested | Pending |

### Parcel (26% usage)

| Repository | Stars | Selected frontend | Upstream commit | Local page opens? | Docker build status |
|---|---:|---|---|---|---|
| [tensorflow/tfjs](https://github.com/tensorflow/tfjs) | 19,154 | Browser image classification demo | [`7f5309fef0a47545e34049903dbdae0f97285f7e`](https://github.com/tensorflow/tfjs/commit/7f5309fef0a47545e34049903dbdae0f97285f7e) | Untested | Pending |
| [jonasschmedtmann/complete-javascript-course](https://github.com/jonasschmedtmann/complete-javascript-course) | 17,273 | Forkify recipe search application | [`76b8b79b2994dd00298b2be105aa6bc721e40a22`](https://github.com/jonasschmedtmann/complete-javascript-course/commit/76b8b79b2994dd00298b2be105aa6bc721e40a22) | Untested | Pending |
| [cobiwave/simplefolio](https://github.com/cobiwave/simplefolio) | 14,223 | Developer portfolio template | [`af03c0cb90d03844de2b5a4cf2045aa0f72c2442`](https://github.com/cobiwave/simplefolio/commit/af03c0cb90d03844de2b5a4cf2045aa0f72c2442) | Yes — portfolio template | [Verified](bundling-dataset/parcel/cobiwave--simplefolio/README.md) |
| [missive/emoji-mart](https://github.com/missive/emoji-mart) | 9,400 | Emoji picker demo | [`16978d04a766eec6455e2e8bb21cd8dc0b3c7436`](https://github.com/missive/emoji-mart/commit/16978d04a766eec6455e2e8bb21cd8dc0b3c7436) | Untested | Pending |
| [parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss) | 7,727 | CSS compiler playground | [`4a1b083d0958987d9241899ea93f80a962a259a9`](https://github.com/parcel-bundler/lightningcss/commit/4a1b083d0958987d9241899ea93f80a962a259a9) | Untested | Pending |
| [tensorflow/tfjs-examples](https://github.com/tensorflow/tfjs-examples) | 6,789 | Browser handwritten-digit recognition demo | [`51430d697acd332f9d89fefe6df2fd90537d9e96`](https://github.com/tensorflow/tfjs-examples/commit/51430d697acd332f9d89fefe6df2fd90537d9e96) | Untested | Pending |
| [0dayCTF/reverse-shell-generator](https://github.com/0dayCTF/reverse-shell-generator) | 4,104 | Reverse shell command generator | [`9fda27f91b1b1f370539dd534bc3bbb1f6b49bf6`](https://github.com/0dayCTF/reverse-shell-generator/commit/9fda27f91b1b1f370539dd534bc3bbb1f6b49bf6) | Untested | Pending |
| [101arrowz/fflate](https://github.com/101arrowz/fflate) | 3,081 | Compression library demo | [`dcb3714a6c25db3a2748641019c5277413d09714`](https://github.com/101arrowz/fflate/commit/dcb3714a6c25db3a2748641019c5277413d09714) | Untested | Pending |
| [download-directory/download-directory.github.io](https://github.com/download-directory/download-directory.github.io) | 1,899 | Downloader for GitHub directories | [`eee887009ab94640d163a66047a7e33778190902`](https://github.com/download-directory/download-directory.github.io/commit/eee887009ab94640d163a66047a7e33778190902) | Untested | Pending |
| [parcel-bundler/website](https://github.com/parcel-bundler/website) | 365 | Parcel project website | [`01c63ed0cb880285db774ec7c96f88da24aeaec7`](https://github.com/parcel-bundler/website/commit/01c63ed0cb880285db774ec7c96f88da24aeaec7) | Untested | Pending |

### Bun (25% usage)

| Repository | Stars | Selected frontend | Upstream commit | Local page opens? | Docker build status |
|---|---:|---|---|---|---|
| [json-schema-faker/json-schema-faker](https://github.com/json-schema-faker/json-schema-faker) | 3,447 | Schema-based test data playground | [`1f407f32e572a3403da7329f9567fa52cf455e24`](https://github.com/json-schema-faker/json-schema-faker/commit/1f407f32e572a3403da7329f9567fa52cf455e24) | Untested | Pending |
| [micahkepe/jsongrep](https://github.com/micahkepe/jsongrep) | 678 | JSON query playground | [`2c913fa21c2a264311ff8b1c44ed5fd4f68363e5`](https://github.com/micahkepe/jsongrep/commit/2c913fa21c2a264311ff8b1c44ed5fd4f68363e5) | Untested | Pending |
| [chenglou/chenglou.github.io](https://github.com/chenglou/chenglou.github.io) | 573 | Personal AI art gallery | [`4f0d972320af1b0a112d9af33616d3bc915a482a`](https://github.com/chenglou/chenglou.github.io/commit/4f0d972320af1b0a112d9af33616d3bc915a482a) | Yes — gallery (prior check) | Excluded after successful build |
| [RockwellShah/filekey](https://github.com/RockwellShah/filekey) | 486 | File encryption and sharing interface | [`4f148f6f55e61d8bbeed7a812f31756cdbae12af`](https://github.com/RockwellShah/filekey/commit/4f148f6f55e61d8bbeed7a812f31756cdbae12af) | Untested | Pending |
| [mikehadlow/gtr-cof](https://github.com/mikehadlow/gtr-cof) | 380 | Interactive guitar theory dashboard | [`7fa1f50f9a849bc251c6cbc9637fc4bbb0cf2b89`](https://github.com/mikehadlow/gtr-cof/commit/7fa1f50f9a849bc251c6cbc9637fc4bbb0cf2b89) | Untested | Pending |
| [olragon/binpackingjs](https://github.com/olragon/binpackingjs) | 192 | Bin packing algorithm playground | [`15c28a39e2b778bad70539b71835d352d08507e7`](https://github.com/olragon/binpackingjs/commit/15c28a39e2b778bad70539b71835d352d08507e7) | Untested | Pending |
| [tednaleid/grimdawn-devotions](https://github.com/tednaleid/grimdawn-devotions) | 6 | Grim Dawn devotion planner | [`bd749c4e1f05c7f6d03a82798b685063e35c956a`](https://github.com/tednaleid/grimdawn-devotions/commit/bd749c4e1f05c7f6d03a82798b685063e35c956a) | Untested | Pending |

### tsup (12% usage)

| Repository | Stars | Selected frontend | Upstream commit | Local page opens? | Docker build status |
|---|---:|---|---|---|---|
| [zpao/qrcode.react](https://github.com/zpao/qrcode.react) | 4,295 | Interactive QR code generator demo | [`bd6bec861c50d36a01c82193c8fcdc8a5e968465`](https://github.com/zpao/qrcode.react/commit/bd6bec861c50d36a01c82193c8fcdc8a5e968465) | Yes — QR output changed on input | [Verified](bundling-dataset/tsup/zpao--qrcode.react/README.md) |
| [peggyjs/peggy](https://github.com/peggyjs/peggy) | 1,187 | Online parser generator | [`643957df9cfd539ccaac18f800c8fd1a80f58e0f`](https://github.com/peggyjs/peggy/commit/643957df9cfd539ccaac18f800c8fd1a80f58e0f) | Untested | Pending |

### Rolldown (10% usage)

| Repository | Stars | Selected frontend | Upstream commit | Local page opens? | Docker build status |
|---|---:|---|---|---|---|
| [appwrite/appwrite](https://github.com/appwrite/appwrite) | 57,871 | Appwrite developer platform website | [`8e0bac6a1736d3e9998f470974ec0bbe0ef0bd74`](https://github.com/appwrite/appwrite/commit/8e0bac6a1736d3e9998f470974ec0bbe0ef0bd74) | Untested | Pending |
| [discourse/discourse](https://github.com/discourse/discourse) | 48,051 | Discussion forum | [`08cd4ee7294dd839858eb7d388ec938fcfe4ba68`](https://github.com/discourse/discourse/commit/08cd4ee7294dd839858eb7d388ec938fcfe4ba68) | Untested | Pending |

### Rspack (7% usage)

| Repository | Stars | Selected frontend | Upstream commit | Local page opens? | Docker build status |
|---|---:|---|---|---|---|
| [grafana/grafana](https://github.com/grafana/grafana) | 77,721 | Monitoring and visualization dashboards | [`68df7b6065f9724a7273e90987615b0aaa25355c`](https://github.com/grafana/grafana/commit/68df7b6065f9724a7273e90987615b0aaa25355c) | Untested | Pending |
| [metabase/metabase](https://github.com/metabase/metabase) | 50,190 | Analytics and reporting application | [`2146c45b12e8fbd4801ad921fcee8ad59f4ab601`](https://github.com/metabase/metabase/commit/2146c45b12e8fbd4801ad921fcee8ad59f4ab601) | Untested | Pending |
| [ToolJet/ToolJet](https://github.com/ToolJet/ToolJet) | 41,201 | Low-code application builder | [`7f8ac7d54b0492819d64485eb7621d486b1115c3`](https://github.com/ToolJet/ToolJet/commit/7f8ac7d54b0492819d64485eb7621d486b1115c3) | Untested | Pending |

## Contents

- `datasets/bundling-dataset/`: local copy of the existing bundler-organized metadata (esbuild, Rspack, Rolldown, Turbopack, and Parcel), with pinned subject, evidence, and artifact references.
- `sources/holdout/`: the existing local source checkouts, moved without resetting or discarding changes. Original nested Git histories are retained. These third-party trees and their dependencies are ignored by the parent dataset Git repository.
- `fixtures/jquery/`: the original crafted jQuery application input.
- `scripts/datasets/build-bundling-dataset.py`: dataset-index preparation, with a repository-relative default output.
- `external-catalog.json`: location and policy for the original external catalog.

## External assets and immutable evidence

The dataset catalog was previously a symlink into `framework-sink-dataset`. Its metadata now has a local canonical copy in this repository. Existing links to pinned upstream source trees and artifact stores remain external; this migration does not download or duplicate the original corpus. Historical catalog baseline/output copies remain linked to their existing external stores and are not new experiment results. Thus the catalog is not a standalone copy of every source and build asset. Preserve or restore those stores before replaying a subject.

The migration leaves original evidence metadata unchanged, including historical absolute paths and hashes. The local copied catalog is checked against the original metadata bytes. Experiment-side compatibility links point into this dataset repository. No repository selection, dependency installation, application rebuild, or source-map oracle regeneration is performed here.

The verification and wild-web datasets described by the paper must retain separate collection populations and independent evaluation labels. This folder reorganization does not claim that the planned larger datasets or website case study have been completed.
