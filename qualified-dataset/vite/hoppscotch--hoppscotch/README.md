# hoppscotch/hoppscotch

Bundler: **vite**. Pinned commit: [`55908a76a1d0555c9bbb5d74244c14173df95b06`](https://github.com/hoppscotch/hoppscotch/commit/55908a76a1d0555c9bbb5d74244c14173df95b06).

**10 selected production libraries; 3,244 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `buffer` | 266 |
| `workbox-window` | 56 |
| `@vueuse/core` | 217 |
| `util` | 288 |
| `axios` | 351 |
| `@hoppscotch/ui` | 1,195 |
| `@tauri-apps/api` | 240 |
| `rxjs` | 208 |
| `zod` | 423 |
| `@hoppscotch/common` | 0 |

Every selected library has at least three distinct source-function witnesses with at least ten own-body POG property operations. No initial-anchor or accepted-pair threshold determines membership. Duplicate libraries are permitted; global/vendor script copies are outside the correspondence graph.

## Files

- `ground-truth/func-mapping.json`: oracle pairs, complete capture inventory, diagnostics and provenance.
- `ground-truth/runtime-js/` and `source-maps/`: exact hash-addressed captured bytes.
- `module-scope.json` and `module-evidence/`: reviewed module ingress and pinned evidence.
- `reference-manifest.json` and `reference-js/`: available original source snapshots; not a complete installed-package/version inventory.
- `qualification.json`, `frontend-package.json`, and `eligibility/`: source-only eligibility certificates and licenses.
- `reproduction/`: pinned recipe, configuration, exact collection selection and build/browser evidence.

## Use and reproduce

Run these commands from the dataset repository root. `checkout`, `build`, `serve`, and `capture` print a plan unless `--execute` is supplied.

```sh
node tools/export-inputs.mjs vite/hoppscotch--hoppscotch .work/inputs/vite/hoppscotch--hoppscotch
python3 tools/rebuild-pairs.py vite/hoppscotch--hoppscotch --out .work/pairs/vite/hoppscotch--hoppscotch
python3 tools/reproduce.py checkout vite/hoppscotch--hoppscotch --execute
python3 tools/reproduce.py build vite/hoppscotch--hoppscotch --execute
python3 tools/reproduce.py serve vite/hoppscotch--hoppscotch --execute
python3 tools/reproduce.py capture vite/hoppscotch--hoppscotch --out .work/captures/vite/hoppscotch--hoppscotch --execute
python3 tools/reproduce.py stop vite/hoppscotch--hoppscotch --execute
```

Build context: `.`; frontend production manifest: `packages/hoppscotch-selfhost-web/package.json`; container port: `3000`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
