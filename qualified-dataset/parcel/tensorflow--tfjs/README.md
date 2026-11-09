# tensorflow/tfjs

Bundler: **parcel**. Pinned commit: [`e5d5e9371ed1fd0a4df6d7cd0b947d2a820cefd7`](https://github.com/tensorflow/tfjs/commit/e5d5e9371ed1fd0a4df6d7cd0b947d2a820cefd7).

**3 selected production libraries; 2,428 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@tensorflow/tfjs-backend-webgl` | 718 |
| `@tensorflow/tfjs-converter` | 324 |
| `@tensorflow/tfjs-core` | 1,386 |

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
node tools/export-inputs.mjs parcel/tensorflow--tfjs .work/inputs/parcel/tensorflow--tfjs
python3 tools/rebuild-pairs.py parcel/tensorflow--tfjs --out .work/pairs/parcel/tensorflow--tfjs
python3 tools/reproduce.py checkout parcel/tensorflow--tfjs --execute
python3 tools/reproduce.py build parcel/tensorflow--tfjs --execute
python3 tools/reproduce.py serve parcel/tensorflow--tfjs --execute
python3 tools/reproduce.py capture parcel/tensorflow--tfjs --out .work/captures/parcel/tensorflow--tfjs --execute
python3 tools/reproduce.py stop parcel/tensorflow--tfjs --execute
```

Build context: `.`; frontend production manifest: `tfjs-automl/demo/img_classification/package.json`; container port: `8080`; observed route: `/tfjs-automl/demo/img_classification/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
