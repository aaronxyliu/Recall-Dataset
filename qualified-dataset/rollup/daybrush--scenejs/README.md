# daybrush/scenejs

Bundler: **rollup**. Pinned commit: [`8db057b6be85de03c5e997b53a82cb1407d6f659`](https://github.com/daybrush/scenejs/commit/8db057b6be85de03c5e997b53a82cb1407d6f659).

**3 selected production libraries; 124 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@daybrush/page` | 28 |
| `@daybrush/utils` | 76 |
| `shape-svg` | 20 |

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
node tools/export-inputs.mjs rollup/daybrush--scenejs .work/inputs/rollup/daybrush--scenejs
python3 tools/rebuild-pairs.py rollup/daybrush--scenejs --out .work/pairs/rollup/daybrush--scenejs
python3 tools/reproduce.py checkout rollup/daybrush--scenejs --execute
python3 tools/reproduce.py build rollup/daybrush--scenejs --execute
python3 tools/reproduce.py serve rollup/daybrush--scenejs --execute
python3 tools/reproduce.py capture rollup/daybrush--scenejs --out .work/captures/rollup/daybrush--scenejs --execute
python3 tools/reproduce.py stop rollup/daybrush--scenejs --execute
```

Build context: `.`; frontend production manifest: `packages/demo/package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
