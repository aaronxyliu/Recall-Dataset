# RockwellShah/filekey

Bundler: **bun**. Pinned commit: [`4f148f6f55e61d8bbeed7a812f31756cdbae12af`](https://github.com/RockwellShah/filekey/commit/4f148f6f55e61d8bbeed7a812f31756cdbae12af).

**6 selected production libraries; 480 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@hpke/core` | 44 |
| `@noble/curves` | 182 |
| `@noble/hashes` | 48 |
| `fflate` | 30 |
| `qrcode-generator` | 108 |
| `@scure/base` | 68 |

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
node tools/export-inputs.mjs bun/RockwellShah--filekey .work/inputs/bun/RockwellShah--filekey
python3 tools/rebuild-pairs.py bun/RockwellShah--filekey --out .work/pairs/bun/RockwellShah--filekey
python3 tools/reproduce.py checkout bun/RockwellShah--filekey --execute
python3 tools/reproduce.py build bun/RockwellShah--filekey --execute
python3 tools/reproduce.py serve bun/RockwellShah--filekey --execute
python3 tools/reproduce.py capture bun/RockwellShah--filekey --out .work/captures/bun/RockwellShah--filekey --execute
python3 tools/reproduce.py stop bun/RockwellShah--filekey --execute
```

Build context: `.`; frontend production manifest: `reference/package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
