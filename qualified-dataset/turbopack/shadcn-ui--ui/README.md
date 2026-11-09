# shadcn-ui/ui

Bundler: **turbopack**. Pinned commit: [`d549251bab2e57dbf72f7c909d6458c02c43f529`](https://github.com/shadcn-ui/ui/commit/d549251bab2e57dbf72f7c909d6458c02c43f529).

**10 selected production libraries; 1,651 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@ai-sdk/anthropic` | 0 |
| `@ai-sdk/openai` | 0 |
| `@ai-sdk/react` | 0 |
| `@base-ui/react` | 1,424 |
| `@dnd-kit/core` | 132 |
| `@dnd-kit/modifiers` | 1 |
| `@dnd-kit/sortable` | 9 |
| `@faker-js/faker` | 0 |
| `@formisch/react` | 85 |
| `@hookform/resolvers` | 0 |

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
node tools/export-inputs.mjs turbopack/shadcn-ui--ui .work/inputs/turbopack/shadcn-ui--ui
python3 tools/rebuild-pairs.py turbopack/shadcn-ui--ui --out .work/pairs/turbopack/shadcn-ui--ui
python3 tools/reproduce.py checkout turbopack/shadcn-ui--ui --execute
python3 tools/reproduce.py build turbopack/shadcn-ui--ui --execute
python3 tools/reproduce.py serve turbopack/shadcn-ui--ui --execute
python3 tools/reproduce.py capture turbopack/shadcn-ui--ui --out .work/captures/turbopack/shadcn-ui--ui --execute
python3 tools/reproduce.py stop turbopack/shadcn-ui--ui --execute
```

Build context: `.`; frontend production manifest: `apps/v4/package.json`; container port: `4000`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
