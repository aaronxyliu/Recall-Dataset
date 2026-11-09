# Release tools

These tools use only `../qualified-dataset/index.json` for membership. Run them from the repository root.

| Tool | Purpose | Dependencies |
|---|---|---|
| `python3 tools/checksums.py` | Verify the complete release file inventory | Python standard library |
| `node tools/audit.mjs` | Verify source certificates, payloads, policies, selections, and recipe hashes | Frozen POG runtime dependencies |
| `node tools/export-inputs.mjs SUBJECT OUTPUT` | Export byte-identical module-only inference inputs with URL/import layout and reference aliases | Node standard library |
| `python3 tools/score.py SUBJECT --run RUN` | Score raw-inventory ReCall promotions against the partial one-to-one oracle | Python standard library |
| `python3 tools/rebuild-pairs.py SUBJECT --out OUTPUT` | Reconstruct and span-verify exact release pair identities offline | Frozen collector dependencies |
| `python3 tools/rebuild-pairs.py --all --out OUTPUT` | Reconstruct every final subject sequentially | Frozen collector dependencies |
| `python3 tools/reproduce.py ACTION SUBJECT` | Plan pinned checkout, Docker build/serve/stop, or Chrome recapture | See root guide; external actions require `--execute` |

Install frozen dependencies as described in the [root guide](../README.md). The retained frozen `package.json` scripts belong to their original package snapshots; use the commands above and these explicit tests:

```sh
python3 -m unittest discover -s tools -p 'test_*.py' -v
node --test provenance/collector/*.test.mjs provenance/source-gate/source-functions-3/functions.test.mjs
```

The browser integration test needs Chrome and a local listening socket. No model endpoint or Docker build is used by the offline tests. `checksums.py --write` is a maintainer command for intentional release edits; regenerate checksums after changing tracked release files.

Input exports canonicalize identical reference-file copies within each library/version and preserve source hashes. Raw typed/component source may require preparation. The scorer requires original source identity/byte spans; it does not guess a transformed source mapping or treat predictions outside the partial oracle as false positives. Target-level any-correct recovery and oracle-scoped pair precision are separate outputs.

The frozen collector exposes lower-level capture and mapping programs for constructing new releases. A new capture's module-ingress receipt and source ownership must be reviewed before using those programs to label it. The archived final release is never silently replaced.
