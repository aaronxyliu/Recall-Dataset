# CorentinTh/it-tools

Bundler: **vite**. Pinned commit: [`d505845f918e946ec300af7b36efc107e2f66e9e`](https://github.com/CorentinTh/it-tools/commit/d505845f918e946ec300af7b36efc107e2f66e9e).

**10 selected production libraries; 2,681 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `naive-ui` | 630 |
| `fuse.js` | 146 |
| `lodash` | 687 |
| `dompurify` | 45 |
| `vue-router` | 196 |
| `@vueuse/core` | 202 |
| `marked` | 128 |
| `vue-i18n` | 166 |
| `vuedraggable` | 481 |
| `@it-tools/bip39` | 0 |

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
node tools/export-inputs.mjs vite/CorentinTh--it-tools .work/inputs/vite/CorentinTh--it-tools
python3 tools/rebuild-pairs.py vite/CorentinTh--it-tools --out .work/pairs/vite/CorentinTh--it-tools
python3 tools/reproduce.py checkout vite/CorentinTh--it-tools --execute
python3 tools/reproduce.py build vite/CorentinTh--it-tools --execute
python3 tools/reproduce.py serve vite/CorentinTh--it-tools --execute
python3 tools/reproduce.py capture vite/CorentinTh--it-tools --out .work/captures/vite/CorentinTh--it-tools --execute
python3 tools/reproduce.py stop vite/CorentinTh--it-tools --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
