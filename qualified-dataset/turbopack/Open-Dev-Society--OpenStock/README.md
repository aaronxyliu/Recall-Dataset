# Open-Dev-Society/OpenStock

Bundler: **turbopack**. Pinned commit: [`b72306d39fa27dc55252ceecf858165ecf5a3fa3`](https://github.com/Open-Dev-Society/OpenStock/commit/b72306d39fa27dc55252ceecf858165ecf5a3fa3).

**10 selected production libraries; 46 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@radix-ui/react-dialog` | 27 |
| `@radix-ui/react-dropdown-menu` | 0 |
| `@radix-ui/react-popover` | 0 |
| `@radix-ui/react-select` | 0 |
| `@radix-ui/react-slot` | 7 |
| `@vercel/analytics` | 12 |
| `better-auth` | 0 |
| `cmdk` | 0 |
| `country-data-list` | 0 |
| `date-fns` | 0 |

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
node tools/export-inputs.mjs turbopack/Open-Dev-Society--OpenStock .work/inputs/turbopack/Open-Dev-Society--OpenStock
python3 tools/rebuild-pairs.py turbopack/Open-Dev-Society--OpenStock --out .work/pairs/turbopack/Open-Dev-Society--OpenStock
python3 tools/reproduce.py checkout turbopack/Open-Dev-Society--OpenStock --execute
python3 tools/reproduce.py build turbopack/Open-Dev-Society--OpenStock --execute
python3 tools/reproduce.py serve turbopack/Open-Dev-Society--OpenStock --execute
python3 tools/reproduce.py capture turbopack/Open-Dev-Society--OpenStock --out .work/captures/turbopack/Open-Dev-Society--OpenStock --execute
python3 tools/reproduce.py stop turbopack/Open-Dev-Society--OpenStock --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `3000`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
