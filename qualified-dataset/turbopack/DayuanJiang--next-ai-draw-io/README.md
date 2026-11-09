# DayuanJiang/next-ai-draw-io

Bundler: **turbopack**. Pinned commit: [`e3d4d11d5916daf8d68a9f087b36c8ca9a79200e`](https://github.com/DayuanJiang/next-ai-draw-io/commit/e3d4d11d5916daf8d68a9f087b36c8ca9a79200e).

**10 selected production libraries; 1,193 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@next/third-parties` | 10 |
| `@radix-ui/react-scroll-area` | 0 |
| `@radix-ui/react-select` | 106 |
| `@radix-ui/react-slot` | 12 |
| `@radix-ui/react-tooltip` | 0 |
| `ai` | 0 |
| `cmdk` | 0 |
| `next` | 1,008 |
| `pako` | 57 |
| `prism-react-renderer` | 0 |

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
node tools/export-inputs.mjs turbopack/DayuanJiang--next-ai-draw-io .work/inputs/turbopack/DayuanJiang--next-ai-draw-io
python3 tools/rebuild-pairs.py turbopack/DayuanJiang--next-ai-draw-io --out .work/pairs/turbopack/DayuanJiang--next-ai-draw-io
python3 tools/reproduce.py checkout turbopack/DayuanJiang--next-ai-draw-io --execute
python3 tools/reproduce.py build turbopack/DayuanJiang--next-ai-draw-io --execute
python3 tools/reproduce.py serve turbopack/DayuanJiang--next-ai-draw-io --execute
python3 tools/reproduce.py capture turbopack/DayuanJiang--next-ai-draw-io --out .work/captures/turbopack/DayuanJiang--next-ai-draw-io --execute
python3 tools/reproduce.py stop turbopack/DayuanJiang--next-ai-draw-io --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `3000`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
