# excalidraw/excalidraw

Bundler: **vite**. Pinned commit: [`701b901a0f1ba3d0b390d9cdf63d112e25abac4b`](https://github.com/excalidraw/excalidraw/commit/701b901a0f1ba3d0b390d9cdf63d112e25abac4b).

**9 selected production libraries; 809 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `react-dom` | 614 |
| `@sentry/browser` | 102 |
| `i18next-browser-languagedetector` | 28 |
| `react` | 65 |
| `jotai` | 0 |
| `firebase` | 0 |
| `socket.io-client` | 0 |
| `uqr` | 0 |
| `vite-plugin-html` | 0 |

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
node tools/export-inputs.mjs vite/excalidraw--excalidraw .work/inputs/vite/excalidraw--excalidraw
python3 tools/rebuild-pairs.py vite/excalidraw--excalidraw --out .work/pairs/vite/excalidraw--excalidraw
python3 tools/reproduce.py checkout vite/excalidraw--excalidraw --execute
python3 tools/reproduce.py build vite/excalidraw--excalidraw --execute
python3 tools/reproduce.py serve vite/excalidraw--excalidraw --execute
python3 tools/reproduce.py capture vite/excalidraw--excalidraw --out .work/captures/vite/excalidraw--excalidraw --execute
python3 tools/reproduce.py stop vite/excalidraw--excalidraw --execute
```

Build context: `.`; frontend production manifest: `excalidraw-app/package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
