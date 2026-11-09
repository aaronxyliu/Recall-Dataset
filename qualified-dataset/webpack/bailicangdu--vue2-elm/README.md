# bailicangdu/vue2-elm

Bundler: **webpack**. Pinned commit: [`b85ff0220366be863868269177a4abf74c7a85ca`](https://github.com/bailicangdu/vue2-elm/commit/b85ff0220366be863868269177a4abf74c7a85ca).

**7 selected production libraries; 492 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `better-scroll` | 0 |
| `fastclick` | 0 |
| `iscroll` | 0 |
| `showdown` | 0 |
| `vue` | 420 |
| `vue-router` | 65 |
| `vuex` | 7 |

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
node tools/export-inputs.mjs webpack/bailicangdu--vue2-elm .work/inputs/webpack/bailicangdu--vue2-elm
python3 tools/rebuild-pairs.py webpack/bailicangdu--vue2-elm --out .work/pairs/webpack/bailicangdu--vue2-elm
python3 tools/reproduce.py checkout webpack/bailicangdu--vue2-elm --execute
python3 tools/reproduce.py build webpack/bailicangdu--vue2-elm --execute
python3 tools/reproduce.py serve webpack/bailicangdu--vue2-elm --execute
python3 tools/reproduce.py capture webpack/bailicangdu--vue2-elm --out .work/captures/webpack/bailicangdu--vue2-elm --execute
python3 tools/reproduce.py stop webpack/bailicangdu--vue2-elm --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/elm/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
