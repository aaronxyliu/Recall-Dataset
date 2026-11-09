# DavidHDev/react-bits

Bundler: **vite**. Pinned commit: [`4dc7b5b7772e1217c8fb8d2a7aa074302180e5b4`](https://github.com/DavidHDev/react-bits/commit/4dc7b5b7772e1217c8fb8d2a7aa074302180e5b4).

**10 selected production libraries; 881 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `lucide-react` | 11 |
| `nuqs` | 101 |
| `react` | 67 |
| `react-dom` | 623 |
| `react-haiku` | 3 |
| `react-icons` | 51 |
| `react-router-dom` | 25 |
| `@chakra-ui/react` | 0 |
| `@emotion/react` | 0 |
| `@gsap/react` | 0 |

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
node tools/export-inputs.mjs vite/DavidHDev--react-bits .work/inputs/vite/DavidHDev--react-bits
python3 tools/rebuild-pairs.py vite/DavidHDev--react-bits --out .work/pairs/vite/DavidHDev--react-bits
python3 tools/reproduce.py checkout vite/DavidHDev--react-bits --execute
python3 tools/reproduce.py build vite/DavidHDev--react-bits --execute
python3 tools/reproduce.py serve vite/DavidHDev--react-bits --execute
python3 tools/reproduce.py capture vite/DavidHDev--react-bits --out .work/captures/vite/DavidHDev--react-bits --execute
python3 tools/reproduce.py stop vite/DavidHDev--react-bits --execute
```

Build context: `.`; frontend production manifest: `package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
