# jnsahaj/tweakcn

Bundler: **turbopack**. Pinned commit: [`a3b47b37cba97dd637de517aab52c45ec0f83456`](https://github.com/jnsahaj/tweakcn/commit/a3b47b37cba97dd637de517aab52c45ec0f83456).

**10 selected production libraries; 78 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@ai-sdk/google` | 0 |
| `@ai-sdk/react` | 0 |
| `@base-ui-components/react` | 78 |
| `@dnd-kit/core` | 0 |
| `@dnd-kit/modifiers` | 0 |
| `@dnd-kit/sortable` | 0 |
| `@google/generative-ai` | 0 |
| `@hookform/resolvers` | 0 |
| `@lexical/react` | 0 |
| `@neondatabase/serverless` | 0 |

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
node tools/export-inputs.mjs turbopack/jnsahaj--tweakcn .work/inputs/turbopack/jnsahaj--tweakcn
python3 tools/rebuild-pairs.py turbopack/jnsahaj--tweakcn --out .work/pairs/turbopack/jnsahaj--tweakcn
python3 tools/reproduce.py checkout turbopack/jnsahaj--tweakcn --execute
python3 tools/reproduce.py build turbopack/jnsahaj--tweakcn --execute
python3 tools/reproduce.py serve turbopack/jnsahaj--tweakcn --execute
python3 tools/reproduce.py capture turbopack/jnsahaj--tweakcn --out .work/captures/turbopack/jnsahaj--tweakcn --execute
python3 tools/reproduce.py stop turbopack/jnsahaj--tweakcn --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `3000`; observed route: `/editor/theme`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
