# bundling dataset

A bundler-organized subset of the existing pinned framework corpus. It contains **11 repository targets: 10 recorded-build-verified browser applications/renderers and one configuration-only Parcel browser extension**. No new builds, downloads, or model experiments were performed.

## Layout

```text
bundling-dataset/
  esbuild/
  rspack/
  rolldown/
  turbopack/
  parcel/
  selection.json
  subjects.csv
  audit.json
  verification.json
```

Each repository folder contains `subject.json`, `README.md`, saved evidence, and links to its original source/project. Existing checkouts and datasets are not moved or modified. Source links are read-only references, not immutable copies.

## Selected targets

| Bundler | Repository | Build target | Status | Saved JS/map pairs |
|---|---|---|---|---:|
| esbuild | [realworld-apps/angular-realworld-example-app](esbuild/realworld-apps--angular-realworld-example-app/README.md) | `.` | recorded-build-verified | 22 |
| esbuild | [Ismaestro/angular-example-app](esbuild/Ismaestro--angular-example-app/README.md) | `.` | recorded-build-verified | 52 |
| esbuild | [swimlane/ngx-charts](esbuild/swimlane--ngx-charts/README.md) | `.` | recorded-build-verified | 2 |
| rspack | [zxwk1998/vue-admin-better](rspack/zxwk1998--vue-admin-better/README.md) | `.` | recorded-build-verified | 93 |
| rolldown | [agalwood/Motrix](rolldown/agalwood--Motrix/README.md) | `.` | recorded-build-verified | 4 |
| rolldown | [cypress-io/cypress-realworld-app](rolldown/cypress-io--cypress-realworld-app/README.md) | `.` | recorded-build-verified | 0 |
| rolldown | [Hiram-Wong/ZyPlayer](rolldown/Hiram-Wong--ZyPlayer/README.md) | `.` | recorded-build-verified | 0 |
| turbopack | [justjavac/wechat-miniapp-radar](turbopack/justjavac--wechat-miniapp-radar/README.md) | `.` | recorded-build-verified | 1 |
| turbopack | [DayuanJiang/next-ai-draw-io](turbopack/DayuanJiang--next-ai-draw-io/README.md) | `.` | recorded-build-verified | 19 |
| turbopack | [rahuldkjain/github-profile-readme-generator](turbopack/rahuldkjain--github-profile-readme-generator/README.md) | `.` | recorded-build-verified | 22 |
| parcel | [mattermost/focalboard](parcel/mattermost--focalboard/README.md) | `experiments/webext` | configuration-only-not-built | 0 |

## Classification and evidence

The source audit covers 112 cohort slots (108 distinct repositories) in primary-60 and alternative-52. Representative selection preserves pinned commits and target-specific build commands. Three examples are selected for each sufficiently populated category; Rspack has one selected target. Full candidate metadata is retained in `audit.json`.

- **esbuild:** Angular application-builder browser outputs. These targets use `@angular/build:application`; their recorded logs report successful application generation. Angular documents this production build system as esbuild-based; its Vite development server is a different role. See https://angular.dev/tools/cli/build-system-migration. Exact executed esbuild patch versions are not independently attested.
- **Rspack:** `zxwk1998/vue-admin-better` calls `@rspack/core`; its log records Rspack 2.2.6 successfully compiling.
- **Rolldown:** Motrix and the Cypress app record Vite 8 production builds. ZyPlayer aliases `vite` to `rolldown-vite` and emits a Rolldown renderer runtime. Vite 8 uses Rolldown (https://vite.dev/blog/announcing-vite8).
- **Turbopack:** all three selected Next.js build logs explicitly identify Turbopack, including a Next.js 15 --turbo example and two Next.js 16 examples.
- **Parcel:** Focalboard’s `experiments/webext` has an explicit Parcel dependency and `parcel build manifest.json --target prod` command. It is a browser extension, not the main Focalboard webapp. This target was not built by the original corpus, so it is configuration-only and is not claimed ready for simulation.

Dependency presence alone is insufficient: ToolJet declares esbuild but its recorded frontend uses webpack; Twenty declares esbuild but its recorded frontend uses Vite 8/Rolldown. They are not mislabeled as esbuild application builds.

## Readiness and provenance

`recorded-build-verified` means a successful build/serve outcome recorded in the source corpus plus target-specific mechanism evidence. It is historical evidence; this task did not rerun builds or verify current services. A saved `.js`/`.map` pair is an availability check, not a validated function oracle. Some alternative-cohort subjects require collecting or rebuilding their artifacts before a simulation. Primary map-enabled artifacts remain distinct from other saved artifacts in each `artifacts.json`.

Each evidence snapshot has a SHA-256 hash and original path. Log excerpts include original line numbers and a hash of the full source log. `verification.json` checks source provenance, grouping, symlinks, evidence hashes, and saved artifact hashes. Parcel remains explicitly unbuilt.

## Rebuild this index

The generator is maintained in the FAPI Study workspace:

```sh
python3 "/Users/aaronxyliu/GitHub/FAPI Study/scripts/datasets/build-bundling-dataset.py" /path/to/new/bundling-dataset
```

It reuses existing source trees and artifacts and never installs dependencies or runs application builds.

