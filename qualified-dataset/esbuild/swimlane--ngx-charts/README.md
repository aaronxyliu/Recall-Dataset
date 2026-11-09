# swimlane/ngx-charts

Bundler: **esbuild**. Pinned commit: [`9625b8efea06a6edd1d6c7184241ded9442cf570`](https://github.com/swimlane/ngx-charts/commit/9625b8efea06a6edd1d6c7184241ded9442cf570).

**10 selected production libraries; 2,364 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `d3-format` | 35 |
| `d3-interpolate` | 50 |
| `d3-transition` | 109 |
| `d3-scale` | 77 |
| `d3-hierarchy` | 65 |
| `zone.js` | 250 |
| `d3-selection` | 150 |
| `codemirror` | 1,517 |
| `d3-brush` | 61 |
| `d3-sankey` | 50 |

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
node tools/export-inputs.mjs esbuild/swimlane--ngx-charts .work/inputs/esbuild/swimlane--ngx-charts
python3 tools/rebuild-pairs.py esbuild/swimlane--ngx-charts --out .work/pairs/esbuild/swimlane--ngx-charts
python3 tools/reproduce.py checkout esbuild/swimlane--ngx-charts --execute
python3 tools/reproduce.py build esbuild/swimlane--ngx-charts --execute
python3 tools/reproduce.py serve esbuild/swimlane--ngx-charts --execute
python3 tools/reproduce.py capture esbuild/swimlane--ngx-charts --out .work/captures/esbuild/swimlane--ngx-charts --execute
python3 tools/reproduce.py stop esbuild/swimlane--ngx-charts --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/ngx-charts/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
