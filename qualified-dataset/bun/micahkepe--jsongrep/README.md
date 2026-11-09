# micahkepe/jsongrep

Bundler: **bun**. Pinned commit: [`2c913fa21c2a264311ff8b1c44ed5fd4f68363e5`](https://github.com/micahkepe/jsongrep/commit/2c913fa21c2a264311ff8b1c44ed5fd4f68363e5).

**3 selected production libraries; 1,208 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@bytecodealliance/jco` | 0 |
| `react` | 128 |
| `react-dom` | 1,080 |

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
node tools/export-inputs.mjs bun/micahkepe--jsongrep .work/inputs/bun/micahkepe--jsongrep
python3 tools/rebuild-pairs.py bun/micahkepe--jsongrep --out .work/pairs/bun/micahkepe--jsongrep
python3 tools/reproduce.py checkout bun/micahkepe--jsongrep --execute
python3 tools/reproduce.py build bun/micahkepe--jsongrep --execute
python3 tools/reproduce.py serve bun/micahkepe--jsongrep --execute
python3 tools/reproduce.py capture bun/micahkepe--jsongrep --out .work/captures/bun/micahkepe--jsongrep --execute
python3 tools/reproduce.py stop bun/micahkepe--jsongrep --execute
```

Build context: `.`; frontend production manifest: `playground/package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
