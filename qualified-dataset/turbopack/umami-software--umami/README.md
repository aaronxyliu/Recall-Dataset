# umami-software/umami

Bundler: **turbopack**. Pinned commit: [`559e3c607c23d2c72d9bd4f6481bda428255323c`](https://github.com/umami-software/umami/commit/559e3c607c23d2c72d9bd4f6481bda428255323c).

**10 selected production libraries; 796 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@clickhouse/client` | 0 |
| `@dicebear/core` | 0 |
| `@prisma/adapter-pg` | 0 |
| `@prisma/client` | 0 |
| `@svgr/cli` | 0 |
| `@tanstack/react-query` | 15 |
| `@umami/react-zen` | 179 |
| `bcryptjs` | 0 |
| `chalk` | 0 |
| `chart.js` | 602 |

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
node tools/export-inputs.mjs turbopack/umami-software--umami .work/inputs/turbopack/umami-software--umami
python3 tools/rebuild-pairs.py turbopack/umami-software--umami --out .work/pairs/turbopack/umami-software--umami
python3 tools/reproduce.py checkout turbopack/umami-software--umami --execute
python3 tools/reproduce.py build turbopack/umami-software--umami --execute
python3 tools/reproduce.py serve turbopack/umami-software--umami --execute
python3 tools/reproduce.py capture turbopack/umami-software--umami --out .work/captures/turbopack/umami-software--umami --execute
python3 tools/reproduce.py stop turbopack/umami-software--umami --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `3000`; observed route: `/login`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
