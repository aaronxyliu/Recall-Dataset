# mattlewis92/angular-calendar

Bundler: **esbuild**. Pinned commit: [`9ae06cf4e5bdb5ee538c0ff2e57a4ec4f7facc68`](https://github.com/mattlewis92/angular-calendar/commit/9ae06cf4e5bdb5ee538c0ff2e57a4ec4f7facc68).

**4 selected production libraries; 37 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@scarf/scarf` | 0 |
| `calendar-utils` | 0 |
| `positioning` | 0 |
| `tslib` | 37 |

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
node tools/export-inputs.mjs esbuild/mattlewis92--angular-calendar .work/inputs/esbuild/mattlewis92--angular-calendar
python3 tools/rebuild-pairs.py esbuild/mattlewis92--angular-calendar --out .work/pairs/esbuild/mattlewis92--angular-calendar
python3 tools/reproduce.py checkout esbuild/mattlewis92--angular-calendar --execute
python3 tools/reproduce.py build esbuild/mattlewis92--angular-calendar --execute
python3 tools/reproduce.py serve esbuild/mattlewis92--angular-calendar --execute
python3 tools/reproduce.py capture esbuild/mattlewis92--angular-calendar --out .work/captures/esbuild/mattlewis92--angular-calendar --execute
python3 tools/reproduce.py stop esbuild/mattlewis92--angular-calendar --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/angular-calendar/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
