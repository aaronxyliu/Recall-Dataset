# jonasschmedtmann/complete-javascript-course

Bundler: **parcel**. Pinned commit: [`76b8b79b2994dd00298b2be105aa6bc721e40a22`](https://github.com/jonasschmedtmann/complete-javascript-course/commit/76b8b79b2994dd00298b2be105aa6bc721e40a22).

**3 selected production libraries; 16 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `core-js` | 16 |
| `fractional` | 0 |
| `regenerator-runtime` | 0 |

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
node tools/export-inputs.mjs parcel/jonasschmedtmann--complete-javascript-course .work/inputs/parcel/jonasschmedtmann--complete-javascript-course
python3 tools/rebuild-pairs.py parcel/jonasschmedtmann--complete-javascript-course --out .work/pairs/parcel/jonasschmedtmann--complete-javascript-course
python3 tools/reproduce.py checkout parcel/jonasschmedtmann--complete-javascript-course --execute
python3 tools/reproduce.py build parcel/jonasschmedtmann--complete-javascript-course --execute
python3 tools/reproduce.py serve parcel/jonasschmedtmann--complete-javascript-course --execute
python3 tools/reproduce.py capture parcel/jonasschmedtmann--complete-javascript-course --out .work/captures/parcel/jonasschmedtmann--complete-javascript-course --execute
python3 tools/reproduce.py stop parcel/jonasschmedtmann--complete-javascript-course --execute
```

Build context: `.`; frontend production manifest: `18-forkify/final/package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
