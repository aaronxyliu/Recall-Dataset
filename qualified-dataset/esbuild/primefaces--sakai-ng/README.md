# primefaces/sakai-ng

Bundler: **esbuild**. Pinned commit: [`96d71496d685b5c110efd2875abaa2bf89a56ad2`](https://github.com/primefaces/sakai-ng/commit/96d71496d685b5c110efd2875abaa2bf89a56ad2).

**10 selected production libraries; 1,309 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@angular/common` | 0 |
| `@angular/compiler` | 0 |
| `@angular/core` | 0 |
| `@angular/forms` | 0 |
| `@angular/platform-browser` | 0 |
| `@angular/router` | 0 |
| `@primeuix/themes` | 8 |
| `@tailwindcss/postcss` | 0 |
| `chart.js` | 1,301 |
| `primeclt` | 0 |

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
node tools/export-inputs.mjs esbuild/primefaces--sakai-ng .work/inputs/esbuild/primefaces--sakai-ng
python3 tools/rebuild-pairs.py esbuild/primefaces--sakai-ng --out .work/pairs/esbuild/primefaces--sakai-ng
python3 tools/reproduce.py checkout esbuild/primefaces--sakai-ng --execute
python3 tools/reproduce.py build esbuild/primefaces--sakai-ng --execute
python3 tools/reproduce.py serve esbuild/primefaces--sakai-ng --execute
python3 tools/reproduce.py capture esbuild/primefaces--sakai-ng --out .work/captures/esbuild/primefaces--sakai-ng --execute
python3 tools/reproduce.py stop esbuild/primefaces--sakai-ng --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
