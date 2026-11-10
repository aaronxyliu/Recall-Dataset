# Release tools

These tools use only `../qualified-dataset/index.json` for membership. Run them from the repository root.

| Tool | Purpose | Dependencies |
|---|---|---|
| `python3 tools/checksums.py` | Verify the complete release file inventory | Python standard library |
| `node tools/audit.mjs` | Verify source certificates, payloads, policies, selections, and recipe hashes | Frozen POG runtime dependencies |
| `node tools/export-inputs.mjs SUBJECT OUTPUT --references DIRECTORY` | Export captured bundle inputs plus independent per-library source packages | Node standard library |
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

Input exports preserve independent source package paths and hashes; they do not canonicalize files across library instances or read dataset source snapshots. Raw typed/component source may require preparation. The scorer requires original source identity/byte spans; it does not guess a transformed source mapping or treat predictions outside the partial oracle as false positives. Target-level any-correct recovery and oracle-scoped pair precision are separate outputs.

The frozen collector exposes lower-level capture and mapping programs for constructing new releases. A new capture's module-ingress receipt and source ownership must be reviewed before using those programs to label it. The archived final release is never silently replaced.


New collections use `node tools/collect.mjs REPO LIBRARIES.json HOST-README.md OUTPUT`
(the isolated-v1 collector). Run its regression tests with
`node --test provenance/collector/isolated-v1/*.test.mjs`.
Frozen collector entrypoints remain exclusively for reproducing historical pairs.
For new local RQ1 runs, set `RECALL_REFERENCES_ROOT` to independent package directories
organized by subject; use a fresh experiment directory. Old exported inputs cannot
be resumed under the isolated recovery policy.
