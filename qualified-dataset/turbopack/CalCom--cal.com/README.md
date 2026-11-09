# CalCom/cal.com

Bundler: **turbopack**. Pinned commit: [`1c193cca8682b33b9866c792186033f7ef886682`](https://github.com/CalCom/cal.com/commit/1c193cca8682b33b9866c792186033f7ef886682).

**10 selected production libraries; 1,620 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@formkit/auto-animate` | 35 |
| `@radix-ui/react-tooltip` | 37 |
| `botid` | 0 |
| `i18next` | 243 |
| `next` | 721 |
| `next-auth` | 119 |
| `react-i18next` | 51 |
| `zod` | 414 |
| `@boxyhq/saml-jackson` | 0 |
| `@daily-co/daily-js` | 0 |

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
node tools/export-inputs.mjs turbopack/CalCom--cal.com .work/inputs/turbopack/CalCom--cal.com
python3 tools/rebuild-pairs.py turbopack/CalCom--cal.com --out .work/pairs/turbopack/CalCom--cal.com
python3 tools/reproduce.py checkout turbopack/CalCom--cal.com --execute
python3 tools/reproduce.py build turbopack/CalCom--cal.com --execute
python3 tools/reproduce.py serve turbopack/CalCom--cal.com --execute
python3 tools/reproduce.py capture turbopack/CalCom--cal.com --out .work/captures/turbopack/CalCom--cal.com --execute
python3 tools/reproduce.py stop turbopack/CalCom--cal.com --execute
```

Build context: `.`; frontend production manifest: `apps/web/package.json`; container port: `3000`; observed route: `/auth/setup?step=1`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
