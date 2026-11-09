# freeCodeCamp/freeCodeCamp

Bundler: **webpack**. Pinned commit: [`a7292b4f26e37f59ba12d670e53d8806d5c2527f`](https://github.com/freeCodeCamp/freeCodeCamp/commit/a7292b4f26e37f59ba12d670e53d8806d5c2527f).

**10 selected production libraries; 852 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `react-responsive` | 62 |
| `date-fns-tz` | 24 |
| `validator` | 20 |
| `react-dom` | 426 |
| `react` | 24 |
| `store` | 45 |
| `@fortawesome/fontawesome-svg-core` | 68 |
| `@fortawesome/react-fontawesome` | 10 |
| `@gatsbyjs/reach-router` | 149 |
| `@paypal/react-paypal-js` | 24 |

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
node tools/export-inputs.mjs webpack/freeCodeCamp--freeCodeCamp .work/inputs/webpack/freeCodeCamp--freeCodeCamp
python3 tools/rebuild-pairs.py webpack/freeCodeCamp--freeCodeCamp --out .work/pairs/webpack/freeCodeCamp--freeCodeCamp
python3 tools/reproduce.py checkout webpack/freeCodeCamp--freeCodeCamp --execute
python3 tools/reproduce.py build webpack/freeCodeCamp--freeCodeCamp --execute
python3 tools/reproduce.py serve webpack/freeCodeCamp--freeCodeCamp --execute
python3 tools/reproduce.py capture webpack/freeCodeCamp--freeCodeCamp --out .work/captures/webpack/freeCodeCamp--freeCodeCamp --execute
python3 tools/reproduce.py stop webpack/freeCodeCamp--freeCodeCamp --execute
```

Build context: `.`; frontend production manifest: `client/package.json`; container port: `80`; observed route: `/learn/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
