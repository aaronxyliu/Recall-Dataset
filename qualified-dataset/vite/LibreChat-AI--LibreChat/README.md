# LibreChat-AI/LibreChat

Bundler: **vite**. Pinned commit: [`f4154b649efa37e1345ccc517a4d8d1ed2178c82`](https://github.com/LibreChat-AI/LibreChat/commit/f4154b649efa37e1345ccc517a4d8d1ed2178c82).

**10 selected production libraries; 2,188 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@mcp-ui/client` | 162 |
| `react` | 55 |
| `@ariakit/react-components` | 852 |
| `swr` | 81 |
| `react-dom` | 487 |
| `framer-motion` | 233 |
| `jotai` | 110 |
| `@marsidev/react-turnstile` | 37 |
| `@modelcontextprotocol/ext-apps` | 96 |
| `@radix-ui/react-toast` | 75 |

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
node tools/export-inputs.mjs vite/LibreChat-AI--LibreChat .work/inputs/vite/LibreChat-AI--LibreChat
python3 tools/rebuild-pairs.py vite/LibreChat-AI--LibreChat --out .work/pairs/vite/LibreChat-AI--LibreChat
python3 tools/reproduce.py checkout vite/LibreChat-AI--LibreChat --execute
python3 tools/reproduce.py build vite/LibreChat-AI--LibreChat --execute
python3 tools/reproduce.py serve vite/LibreChat-AI--LibreChat --execute
python3 tools/reproduce.py capture vite/LibreChat-AI--LibreChat --out .work/captures/vite/LibreChat-AI--LibreChat --execute
python3 tools/reproduce.py stop vite/LibreChat-AI--LibreChat --execute
```

Build context: `.`; frontend production manifest: `client/package.json`; container port: `3080`; observed route: `/login`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
