# PanJiaChen/vue-element-admin

Bundler: **webpack**. Pinned commit: [`6858a9ad67483025f6a9432a926beb9327037be3`](https://github.com/PanJiaChen/vue-element-admin/commit/6858a9ad67483025f6a9432a926beb9327037be3).

**10 selected production libraries; 5,578 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `vue-router` | 216 |
| `fuse.js` | 54 |
| `axios` | 94 |
| `path-to-regexp` | 12 |
| `element-ui` | 4,126 |
| `vue` | 465 |
| `core-js` | 496 |
| `vuex` | 115 |
| `clipboard` | 0 |
| `codemirror` | 0 |

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
node tools/export-inputs.mjs webpack/PanJiaChen--vue-element-admin .work/inputs/webpack/PanJiaChen--vue-element-admin
python3 tools/rebuild-pairs.py webpack/PanJiaChen--vue-element-admin --out .work/pairs/webpack/PanJiaChen--vue-element-admin
python3 tools/reproduce.py checkout webpack/PanJiaChen--vue-element-admin --execute
python3 tools/reproduce.py build webpack/PanJiaChen--vue-element-admin --execute
python3 tools/reproduce.py serve webpack/PanJiaChen--vue-element-admin --execute
python3 tools/reproduce.py capture webpack/PanJiaChen--vue-element-admin --out .work/captures/webpack/PanJiaChen--vue-element-admin --execute
python3 tools/reproduce.py stop webpack/PanJiaChen--vue-element-admin --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
