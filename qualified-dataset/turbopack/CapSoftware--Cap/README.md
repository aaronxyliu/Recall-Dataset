# CapSoftware/Cap

Bundler: **turbopack**. Pinned commit: [`bb16822e00a5b12f5fd715d6dc6683d5ba3a90ca`](https://github.com/CapSoftware/Cap/commit/bb16822e00a5b12f5fd715d6dc6683d5ba3a90ca).

**10 selected production libraries; 1,375 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@fortawesome/react-fontawesome` | 30 |
| `@radix-ui/react-slot` | 8 |
| `@radix-ui/react-tooltip` | 48 |
| `@sentry/nextjs` | 9 |
| `@tanstack/react-query` | 3 |
| `framer-motion` | 89 |
| `js-cookie` | 9 |
| `lucide-react` | 0 |
| `next` | 1,060 |
| `next-auth` | 119 |

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
node tools/export-inputs.mjs turbopack/CapSoftware--Cap .work/inputs/turbopack/CapSoftware--Cap
python3 tools/rebuild-pairs.py turbopack/CapSoftware--Cap --out .work/pairs/turbopack/CapSoftware--Cap
python3 tools/reproduce.py checkout turbopack/CapSoftware--Cap --execute
python3 tools/reproduce.py build turbopack/CapSoftware--Cap --execute
python3 tools/reproduce.py serve turbopack/CapSoftware--Cap --execute
python3 tools/reproduce.py capture turbopack/CapSoftware--Cap --out .work/captures/turbopack/CapSoftware--Cap --execute
python3 tools/reproduce.py stop turbopack/CapSoftware--Cap --execute
```

Build context: `.`; frontend production manifest: `apps/web/package.json`; container port: `3000`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
