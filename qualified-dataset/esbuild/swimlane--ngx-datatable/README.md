# swimlane/ngx-datatable

Bundler: **esbuild**. Pinned commit: [`2d4f8f2b383d875d3e3dec45969f0e42a117fb3f`](https://github.com/swimlane/ngx-datatable/commit/2d4f8f2b383d875d3e3dec45969f0e42a117fb3f).

**10 selected production libraries; 336 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@angular/animations` | 0 |
| `@angular/cdk` | 0 |
| `@angular/common` | 0 |
| `@angular/compiler` | 0 |
| `@angular/core` | 0 |
| `@angular/forms` | 0 |
| `@angular/platform-browser` | 0 |
| `@angular/router` | 0 |
| `rxjs` | 307 |
| `tslib` | 29 |

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
node tools/export-inputs.mjs esbuild/swimlane--ngx-datatable .work/inputs/esbuild/swimlane--ngx-datatable
python3 tools/rebuild-pairs.py esbuild/swimlane--ngx-datatable --out .work/pairs/esbuild/swimlane--ngx-datatable
python3 tools/reproduce.py checkout esbuild/swimlane--ngx-datatable --execute
python3 tools/reproduce.py build esbuild/swimlane--ngx-datatable --execute
python3 tools/reproduce.py serve esbuild/swimlane--ngx-datatable --execute
python3 tools/reproduce.py capture esbuild/swimlane--ngx-datatable --out .work/captures/esbuild/swimlane--ngx-datatable --execute
python3 tools/reproduce.py stop esbuild/swimlane--ngx-datatable --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/ngx-datatable/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
