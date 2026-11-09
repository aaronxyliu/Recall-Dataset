# parcel-bundler/website

Bundler: **parcel**. Pinned commit: [`01c63ed0cb880285db774ec7c96f88da24aeaec7`](https://github.com/parcel-bundler/website/commit/01c63ed0cb880285db774ec7c96f88da24aeaec7).

**6 selected production libraries; 452 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `alpinejs` | 443 |
| `focus-visible` | 9 |
| `marked` | 0 |
| `react` | 0 |
| `react-dom` | 0 |
| `react-use` | 0 |

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
node tools/export-inputs.mjs parcel/parcel-bundler--website .work/inputs/parcel/parcel-bundler--website
python3 tools/rebuild-pairs.py parcel/parcel-bundler--website --out .work/pairs/parcel/parcel-bundler--website
python3 tools/reproduce.py checkout parcel/parcel-bundler--website --execute
python3 tools/reproduce.py build parcel/parcel-bundler--website --execute
python3 tools/reproduce.py serve parcel/parcel-bundler--website --execute
python3 tools/reproduce.py capture parcel/parcel-bundler--website --out .work/captures/parcel/parcel-bundler--website --execute
python3 tools/reproduce.py stop parcel/parcel-bundler--website --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
