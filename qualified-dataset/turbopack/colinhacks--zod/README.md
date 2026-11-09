# colinhacks/zod

Bundler: **turbopack**. Pinned commit: [`b500a2ee95134f81d74da7911d7378dd2853d042`](https://github.com/colinhacks/zod/commit/b500a2ee95134f81d74da7911d7378dd2853d042).

**10 selected production libraries; 1,970 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@inkeep/cxkit-react` | 83 |
| `@radix-ui/react-accordion` | 0 |
| `@vercel/analytics` | 13 |
| `@vercel/og` | 0 |
| `fumadocs-core` | 15 |
| `fumadocs-mdx` | 0 |
| `fumadocs-ui` | 42 |
| `gray-matter` | 0 |
| `next` | 1,817 |
| `react` | 0 |

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
node tools/export-inputs.mjs turbopack/colinhacks--zod .work/inputs/turbopack/colinhacks--zod
python3 tools/rebuild-pairs.py turbopack/colinhacks--zod --out .work/pairs/turbopack/colinhacks--zod
python3 tools/reproduce.py checkout turbopack/colinhacks--zod --execute
python3 tools/reproduce.py build turbopack/colinhacks--zod --execute
python3 tools/reproduce.py serve turbopack/colinhacks--zod --execute
python3 tools/reproduce.py capture turbopack/colinhacks--zod --out .work/captures/turbopack/colinhacks--zod --execute
python3 tools/reproduce.py stop turbopack/colinhacks--zod --execute
```

Build context: `.`; frontend production manifest: `packages/docs/package.json`; container port: `3000`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
