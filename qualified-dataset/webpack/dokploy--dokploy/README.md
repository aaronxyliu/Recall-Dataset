# dokploy/dokploy

Bundler: **webpack**. Pinned commit: [`fe9ae2a7db22730ff1ab72939e10806848c7cccd`](https://github.com/dokploy/dokploy/commit/fe9ae2a7db22730ff1ab72939e10806848c7cccd).

**10 selected production libraries; 780 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `better-auth` | 58 |
| `react-dom` | 568 |
| `next` | 104 |
| `react` | 50 |
| `@tanstack/react-query` | 0 |
| `@trpc/client` | 0 |
| `@trpc/react-query` | 0 |
| `cmdk` | 0 |
| `posthog-js` | 0 |
| `react-hook-form` | 0 |

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
node tools/export-inputs.mjs webpack/dokploy--dokploy .work/inputs/webpack/dokploy--dokploy
python3 tools/rebuild-pairs.py webpack/dokploy--dokploy --out .work/pairs/webpack/dokploy--dokploy
python3 tools/reproduce.py checkout webpack/dokploy--dokploy --execute
python3 tools/reproduce.py build webpack/dokploy--dokploy --execute
python3 tools/reproduce.py serve webpack/dokploy--dokploy --execute
python3 tools/reproduce.py capture webpack/dokploy--dokploy --out .work/captures/webpack/dokploy--dokploy --execute
python3 tools/reproduce.py stop webpack/dokploy--dokploy --execute
```

Build context: `.`; frontend production manifest: `apps/dokploy/package.json`; container port: `3000`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
