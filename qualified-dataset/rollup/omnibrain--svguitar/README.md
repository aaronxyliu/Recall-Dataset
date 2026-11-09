# omnibrain/svguitar

Bundler: **rollup**. Pinned commit: [`3b465fdc8af57a9ed948e168ada1c87c9aafd574`](https://github.com/omnibrain/svguitar/commit/3b465fdc8af57a9ed948e168ada1c87c9aafd574).

**3 selected production libraries; 851 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@svgdotjs/svg.js` | 710 |
| `roughjs` | 141 |
| `svgdom` | 0 |

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
node tools/export-inputs.mjs rollup/omnibrain--svguitar .work/inputs/rollup/omnibrain--svguitar
python3 tools/rebuild-pairs.py rollup/omnibrain--svguitar --out .work/pairs/rollup/omnibrain--svguitar
python3 tools/reproduce.py checkout rollup/omnibrain--svguitar --execute
python3 tools/reproduce.py build rollup/omnibrain--svguitar --execute
python3 tools/reproduce.py serve rollup/omnibrain--svguitar --execute
python3 tools/reproduce.py capture rollup/omnibrain--svguitar --out .work/captures/rollup/omnibrain--svguitar --execute
python3 tools/reproduce.py stop rollup/omnibrain--svguitar --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
