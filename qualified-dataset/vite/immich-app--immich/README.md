# immich-app/immich

Bundler: **vite**. Pinned commit: [`037e5bc0554074bfe91e20b802a6a4ef4a6dd6f9`](https://github.com/immich-app/immich/commit/037e5bc0554074bfe91e20b802a6a4ef4a6dd6f9).

**10 selected production libraries; 1,558 one-to-one function pairs.**

| Library | Function pairs |
|---|---:|
| `@immich/ui` | 151 |
| `@formatjs/icu-messageformat-parser` | 127 |
| `tailwind-merge` | 113 |
| `tabbable` | 34 |
| `tailwind-variants` | 193 |
| `justified-layout` | 19 |
| `intl-messageformat` | 69 |
| `lodash-es` | 176 |
| `luxon` | 580 |
| `socket.io-client` | 96 |

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
node tools/export-inputs.mjs vite/immich-app--immich .work/inputs/vite/immich-app--immich
python3 tools/rebuild-pairs.py vite/immich-app--immich --out .work/pairs/vite/immich-app--immich
python3 tools/reproduce.py checkout vite/immich-app--immich --execute
python3 tools/reproduce.py build vite/immich-app--immich --execute
python3 tools/reproduce.py serve vite/immich-app--immich --execute
python3 tools/reproduce.py capture vite/immich-app--immich --out .work/captures/vite/immich-app--immich --execute
python3 tools/reproduce.py stop vite/immich-app--immich --execute
```

Build context: `.`; frontend production manifest: `web/package.json`; container port: `80`; observed route: `/`.

The archive is verified offline. Fresh builds require upstream sources, registries and Docker; recaptured assets need a fresh module-ingress review before relabeling. Existing raw captures are never overwritten. See the [dataset guide](../../../README.md) for requirements, scoring scope, and limitations.
