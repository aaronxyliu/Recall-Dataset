> Historical review of the 41-repository cohort. The final active scope keeps Webpack through Bun: **38 repositories, 305 library instances, 58,268 pairs**. See the [canonical index](../../qualified-dataset/index.json). Counts below describe the review snapshot.

# Module-dependency scope review — 2026-11-09

Reviewed **42 repositories**. Active result: **41 repositories, 335 library instances, 69,580 pairs**. Removed 6,703 former pairs from standalone/global ingress. Other reviewed repositories retain their pair counts.

| Subject | Before | After | Result |
|---|---:|---:|---|
| tsup/peggyjs--peggy | 565 | 0 | excluded |
| webpack/akveo--ngx-admin | 11,976 | 5,838 | included |

ngx-admin removes 3,090 ECharts, 2,412 TinyMCE, 576 Chart.js and 60 Pace pairs from the global scripts bundle. Module-imported ECharts/Chart.js, Leaflet and polyfills remain. Its global-only TinyMCE/Pace library selections are replaced with source-eligible Angular common/core module dependencies.

Peggy's docs previously obtained 551 jQuery and 14 FileSaver pairs from copied standalone vendors. Its docs production candidates cannot supply three module libraries, so the subject is excluded under the new rule; original source-eligibility and runtime archives remain historical evidence.

The source-only 3–10 libraries / three functions / ten POG-feature rule is unchanged. No initial-anchor or minimum-correspondence threshold was added. Module-ingress filtering runs before the correspondence graph; independent span verification and the standalone dataset audit enforce it again. Output UMD/IIFE/ESM format alone does not determine eligibility.

At three seconds per pair, sequential processing is 208,740 seconds, excluding overhead and retries.

See [policy](POLICY.md), [per-subject receipts](results/), [active index](../../qualified-dataset/index.json), and [final audit](../source-functions-3/audit-result.json). Each active subject includes its exact scope receipt and build/configuration evidence. Full intercepted JS/maps remain byte-identical; selected-library reference snapshots include only module-ingress originals.
