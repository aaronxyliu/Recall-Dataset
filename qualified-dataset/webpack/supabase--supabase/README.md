# supabase/supabase

Bundler: **webpack**. Pinned commit: [`aa9d04e4f77447e2b6aaf317b686007aff05aa96`](https://github.com/supabase/supabase/commit/aa9d04e4f77447e2b6aaf317b686007aff05aa96).

**10 selected production libraries; 1,358 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `recharts` | 207 |
| `mdast-util-from-markdown` | 6 |
| `next` | 660 |
| `motion` | 464 |
| `@sentry/nextjs` | 0 |
| `typed.js` | 21 |
| `@bsmnt/scrollytelling` | 0 |
| `@code-hike/mdx` | 0 |
| `@codesandbox/sandpack-react` | 0 |
| `@hcaptcha/react-hcaptcha` | 0 |

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
node tools/export-inputs.mjs webpack/supabase--supabase .work/inputs/webpack/supabase--supabase
python3 tools/rebuild-pairs.py webpack/supabase--supabase --out .work/pairs/webpack/supabase--supabase
python3 tools/reproduce.py checkout webpack/supabase--supabase --execute
python3 tools/reproduce.py build webpack/supabase--supabase --execute
python3 tools/reproduce.py serve webpack/supabase--supabase --execute
python3 tools/reproduce.py capture webpack/supabase--supabase --out .work/captures/webpack/supabase--supabase --execute
python3 tools/reproduce.py stop webpack/supabase--supabase --execute
```

Build context: `.`; frontend production manifest: `apps/www/package.json`; container port: `3000`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
