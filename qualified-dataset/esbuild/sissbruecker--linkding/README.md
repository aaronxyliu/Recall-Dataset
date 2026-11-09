# sissbruecker/linkding

Bundler: **esbuild**. Pinned commit: [`27b7303baf41bb28babc610ac8eaa486e1ddfab5`](https://github.com/sissbruecker/linkding/commit/27b7303baf41bb28babc610ac8eaa486e1ddfab5).

**4 selected production libraries; 911 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@floating-ui/dom` | 42 |
| `@hotwired/turbo` | 869 |
| `esbuild` | 0 |
| `lit` | 0 |

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
node tools/export-inputs.mjs esbuild/sissbruecker--linkding .work/inputs/esbuild/sissbruecker--linkding
python3 tools/rebuild-pairs.py esbuild/sissbruecker--linkding --out .work/pairs/esbuild/sissbruecker--linkding
python3 tools/reproduce.py checkout esbuild/sissbruecker--linkding --execute
python3 tools/reproduce.py build esbuild/sissbruecker--linkding --execute
python3 tools/reproduce.py serve esbuild/sissbruecker--linkding --execute
python3 tools/reproduce.py capture esbuild/sissbruecker--linkding --out .work/captures/esbuild/sissbruecker--linkding --execute
python3 tools/reproduce.py stop esbuild/sissbruecker--linkding --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `9090`; observed route: `/login/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
