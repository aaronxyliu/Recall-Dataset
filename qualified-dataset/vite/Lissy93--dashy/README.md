# Lissy93/dashy

Bundler: **vite**. Pinned commit: [`002c6dd559c8d7ba662aeae9228164f6cf398c75`](https://github.com/Lissy93/dashy/commit/002c6dd559c8d7ba662aeae9228164f6cf398c75).

**10 selected production libraries; 2,063 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `vuex` | 127 |
| `crypto-js` | 133 |
| `sortablejs` | 170 |
| `dompurify` | 118 |
| `rsup-progress` | 23 |
| `js-yaml` | 248 |
| `vue-i18n` | 233 |
| `vue-select` | 124 |
| `ajv` | 679 |
| `vue-router` | 208 |

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
node tools/export-inputs.mjs vite/Lissy93--dashy .work/inputs/vite/Lissy93--dashy
python3 tools/rebuild-pairs.py vite/Lissy93--dashy --out .work/pairs/vite/Lissy93--dashy
python3 tools/reproduce.py checkout vite/Lissy93--dashy --execute
python3 tools/reproduce.py build vite/Lissy93--dashy --execute
python3 tools/reproduce.py serve vite/Lissy93--dashy --execute
python3 tools/reproduce.py capture vite/Lissy93--dashy --out .work/captures/vite/Lissy93--dashy --execute
python3 tools/reproduce.py stop vite/Lissy93--dashy --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `8080`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
