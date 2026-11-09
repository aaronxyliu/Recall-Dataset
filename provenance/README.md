# Reproduction provenance

This directory contains code and receipts required to verify the single final dataset. It contains no alternative dataset index or superseded cohort.

- `release-origin.json` records the canonical index hash and construction-input hashes. Embedded old paths describe provenance locations, not active filesystem dependencies.
- `validation.json` records the cleaned release's offline audit, exact pair reconstruction, and tool tests.
- `source-gate/` preserves the exact source-function gate and its frozen POG runtime. The folder names inside this snapshot preserve relative imports and code hashes from qualification receipts. Only source-feature measurement and witness verification are used by the current audit; the old directory name does not impose an initial-anchor requirement. Original package documentation/scripts are immutable snapshot content; active instructions are in the root guide and `tools/README.md`.
- `collector/` contains the exact JS capture, correspondence, function-inventory and independent span-verification programs. Their hashes are checked against every release record. Its package/lock files retain the original dependency set. Current commands invoke the retained programs directly rather than package-level commands inherited from the original dependency snapshot.
- `map-tools/` retains the helper used by named Docker build contexts. Synthetic identity maps apply only to byte-identical untransformed inputs and do not establish transformed correspondences.
- `page-hook.mjs` supplies the archived selected-route readiness/screenshot check for fresh recapture attempts.

The frozen programs and qualification-hashed files remain byte-identical. Current build/browser evidence is stored with each final subject under `reproduction/evidence/`; it does not define pair counts. The only membership/oracle entry point is `../qualified-dataset/index.json`.
