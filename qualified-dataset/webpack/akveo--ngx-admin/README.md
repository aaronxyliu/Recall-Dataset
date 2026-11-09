# akveo/ngx-admin

Bundler: **webpack**. Pinned commit: [`dc6a442704bfef34b776b5eb15faf852d9e2f75c`](https://github.com/akveo/ngx-admin/commit/dc6a442704bfef34b776b5eb15faf852d9e2f75c).

**10 selected production libraries; 5,838 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `web-animations-js` | 67 |
| `core-js` | 164 |
| `leaflet` | 858 |
| `chart.js` | 708 |
| `echarts` | 3,817 |
| `zone.js` | 224 |
| `@angular/animations` | 0 |
| `@angular/cdk` | 0 |
| `@angular/common` | 0 |
| `@angular/core` | 0 |

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
node tools/export-inputs.mjs webpack/akveo--ngx-admin .work/inputs/webpack/akveo--ngx-admin
python3 tools/rebuild-pairs.py webpack/akveo--ngx-admin --out .work/pairs/webpack/akveo--ngx-admin
python3 tools/reproduce.py checkout webpack/akveo--ngx-admin --execute
python3 tools/reproduce.py build webpack/akveo--ngx-admin --execute
python3 tools/reproduce.py serve webpack/akveo--ngx-admin --execute
python3 tools/reproduce.py capture webpack/akveo--ngx-admin --out .work/captures/webpack/akveo--ngx-admin --execute
python3 tools/reproduce.py stop webpack/akveo--ngx-admin --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
