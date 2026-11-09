# drawdb-io/drawdb

Bundler: **vite**. Pinned commit: [`a249c7fb730c2de9b5c2ce6e863f2ea7344ac372`](https://github.com/drawdb-io/drawdb/commit/a249c7fb730c2de9b5c2ce6e863f2ea7344ac372).

**10 selected production libraries; 6,206 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `jsonschema` | 106 |
| `oracle-sql-parser` | 1,532 |
| `lexical` | 524 |
| `react-tweet` | 71 |
| `framer-motion` | 819 |
| `react-dom` | 487 |
| `@douyinfe/semi-ui` | 1,825 |
| `@dagrejs/dagre` | 508 |
| `@dnd-kit/core` | 272 |
| `@dnd-kit/sortable` | 62 |

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
node tools/export-inputs.mjs vite/drawdb-io--drawdb .work/inputs/vite/drawdb-io--drawdb
python3 tools/rebuild-pairs.py vite/drawdb-io--drawdb --out .work/pairs/vite/drawdb-io--drawdb
python3 tools/reproduce.py checkout vite/drawdb-io--drawdb --execute
python3 tools/reproduce.py build vite/drawdb-io--drawdb --execute
python3 tools/reproduce.py serve vite/drawdb-io--drawdb --execute
python3 tools/reproduce.py capture vite/drawdb-io--drawdb --out .work/captures/vite/drawdb-io--drawdb --execute
python3 tools/reproduce.py stop vite/drawdb-io--drawdb --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/editor`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
