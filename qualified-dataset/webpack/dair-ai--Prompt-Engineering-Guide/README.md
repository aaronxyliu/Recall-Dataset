# dair-ai/Prompt-Engineering-Guide

Bundler: **webpack**. Pinned commit: [`57673726396dd94acb23bdb1e67f27c78ee85a8e`](https://github.com/dair-ai/Prompt-Engineering-Guide/commit/57673726396dd94acb23bdb1e67f27c78ee85a8e).

**8 selected production libraries; 1,427 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@fortawesome/fontawesome-svg-core` | 0 |
| `@fortawesome/react-fontawesome` | 0 |
| `katex` | 0 |
| `next` | 847 |
| `nextra` | 51 |
| `nextra-theme-docs` | 94 |
| `react` | 19 |
| `react-dom` | 416 |

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
node tools/export-inputs.mjs webpack/dair-ai--Prompt-Engineering-Guide .work/inputs/webpack/dair-ai--Prompt-Engineering-Guide
python3 tools/rebuild-pairs.py webpack/dair-ai--Prompt-Engineering-Guide --out .work/pairs/webpack/dair-ai--Prompt-Engineering-Guide
python3 tools/reproduce.py checkout webpack/dair-ai--Prompt-Engineering-Guide --execute
python3 tools/reproduce.py build webpack/dair-ai--Prompt-Engineering-Guide --execute
python3 tools/reproduce.py serve webpack/dair-ai--Prompt-Engineering-Guide --execute
python3 tools/reproduce.py capture webpack/dair-ai--Prompt-Engineering-Guide --out .work/captures/webpack/dair-ai--Prompt-Engineering-Guide --execute
python3 tools/reproduce.py stop webpack/dair-ai--Prompt-Engineering-Guide --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `3000`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
