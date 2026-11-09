# primefaces/primeng

Bundler: **esbuild**. Pinned commit: [`fe82b291d6fedde177dc12c0af7ef1008dc1b1ff`](https://github.com/primefaces/primeng/commit/fe82b291d6fedde177dc12c0af7ef1008dc1b1ff).

**3 selected production libraries; 251 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@primeuix/styled` | 98 |
| `@primeuix/utils` | 127 |
| `@primeuix/motion` | 26 |

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
node tools/export-inputs.mjs esbuild/primefaces--primeng .work/inputs/esbuild/primefaces--primeng
python3 tools/rebuild-pairs.py esbuild/primefaces--primeng --out .work/pairs/esbuild/primefaces--primeng
python3 tools/reproduce.py checkout esbuild/primefaces--primeng --execute
python3 tools/reproduce.py build esbuild/primefaces--primeng --execute
python3 tools/reproduce.py serve esbuild/primefaces--primeng --execute
python3 tools/reproduce.py capture esbuild/primefaces--primeng --out .work/captures/esbuild/primefaces--primeng --execute
python3 tools/reproduce.py stop esbuild/primefaces--primeng --execute
```

Build context: `.`; frontend production manifest: `packages/primeng/package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
