# swagger-api/swagger-ui

Bundler: **webpack**. Pinned commit: [`d3296954a6b813898d298815ac3e68daa1cf7408`](https://github.com/swagger-api/swagger-ui/commit/d3296954a6b813898d298815ac3e68daa1cf7408).

**10 selected production libraries; 2,730 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `remarkable` | 199 |
| `lodash` | 442 |
| `dompurify` | 113 |
| `xml` | 24 |
| `zenscroll` | 30 |
| `@tanstack/react-virtual` | 14 |
| `buffer` | 266 |
| `immutable` | 1,310 |
| `js-yaml` | 318 |
| `randexp` | 14 |

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
node tools/export-inputs.mjs webpack/swagger-api--swagger-ui .work/inputs/webpack/swagger-api--swagger-ui
python3 tools/rebuild-pairs.py webpack/swagger-api--swagger-ui --out .work/pairs/webpack/swagger-api--swagger-ui
python3 tools/reproduce.py checkout webpack/swagger-api--swagger-ui --execute
python3 tools/reproduce.py build webpack/swagger-api--swagger-ui --execute
python3 tools/reproduce.py serve webpack/swagger-api--swagger-ui --execute
python3 tools/reproduce.py capture webpack/swagger-api--swagger-ui --out .work/captures/webpack/swagger-api--swagger-ui --execute
python3 tools/reproduce.py stop webpack/swagger-api--swagger-ui --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
