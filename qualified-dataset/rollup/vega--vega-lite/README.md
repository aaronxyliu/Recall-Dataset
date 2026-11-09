# vega/vega-lite

Bundler: **rollup**. Pinned commit: [`e415f441845e198629f2049b46849ddcfdbf6596`](https://github.com/vega/vega-lite/commit/e415f441845e198629f2049b46849ddcfdbf6596).

**3 selected production libraries; 87 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `tslib` | 0 |
| `vega-expression` | 87 |
| `yargs` | 0 |

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
node tools/export-inputs.mjs rollup/vega--vega-lite .work/inputs/rollup/vega--vega-lite
python3 tools/rebuild-pairs.py rollup/vega--vega-lite --out .work/pairs/rollup/vega--vega-lite
python3 tools/reproduce.py checkout rollup/vega--vega-lite --execute
python3 tools/reproduce.py build rollup/vega--vega-lite --execute
python3 tools/reproduce.py serve rollup/vega--vega-lite --execute
python3 tools/reproduce.py capture rollup/vega--vega-lite --out .work/captures/rollup/vega--vega-lite --execute
python3 tools/reproduce.py stop rollup/vega--vega-lite --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/vega-lite/examples/bar.html`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
