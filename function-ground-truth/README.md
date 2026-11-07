# Function ground truth for ReCall

The active dataset contains **26 repositories and 19,914 one-to-one pairs**, comprising nine webpack, eight Vite and nine esbuild subjects. The sampling unit is the selected frontend at its pinned commit. A page capture covers scripts observed on its documented entry route during a bounded Chromium session. Other routes, user interactions and later lazy loads may expose additional scripts.

[Progress across the 26 active subjects](progress.json) records the current capture, sampled-library coverage, pair count, and transformation denominators for each repository. A per-subject `pair-audit.json` records the independent check of source and artifact hashes, function spans and the syntax-identity flag.

VS Code, Actual Budget, PDF.js and tldraw are excluded from the active dataset by user decision. The [exclusion record](exclusions.json) records their reasons. Their earlier metadata is archived under `excluded/`.

## Accepted one-to-one evaluation set

The [evaluation manifest](one-to-one-evaluation.json) lists all 26 active repositories, their sampling rules, and the current audited pair counts. A null count indicates an unavailable page, unavailable maps, or an empty eligible sample. A measured zero means no qualifying pair was observed in the analyzed capture. The [initial snapshot](initial-one-to-one-evaluation.json) preserves the first 3,018 pairs from five repositories, including 199 syntax-identical pairs.

The [source-map rebuild results](map-rebuild-results.md) report the nine repaired builds and their audited pairs.

## Records per subject

* `selection.json` records the manifest path, commit, manifest SHA-256, eligible names and version constraints, exclusions, and selected names. We sample at most ten names from the frontend manifest’s direct `dependencies`, excluding type-only and local path/workspace specifications. We rank names by SHA-256 of the seed, commit and package name separated by NUL bytes, before consulting the maps. The original manifest-only draw yielded 233 selections across 30 subjects. A dependency declaration can refer to build tooling or server code. The original sample is retained for traceability; frontend-visible follow-up sampling is recorded separately below.
* `status.json` and `capture.json` record the image ID, route, HTTP status, observed script URLs, byte hashes, observation channels, map availability and errors. The collector opens the page in Chromium, listens for JavaScript responses and parsed scripts, and retrieves referenced, inline or adjacent source maps. A map can be available yet unusable for a particular source. A subject-specific `Dockerfile`, where present, is a map-enabled variant of the catalog recipe. `map-build.json` records an attempted variant. Captured scripts and maps are archived under each repository’s `bundling-dataset/<group>/<slug>/ground-truth/` directory. See the dataset root README for the tracked layout.
* `relations.json` names each sampled package and counts its distinct mapped source paths. Zero means the analyzer found no mapped source for that name within its observation. Each pair contains a library name, a source path and content hash with half-open UTF-16 function offsets, a captured asset URL and hash with the corresponding offsets, and the number of distinct mapped original positions. Source coordinates may identify a library’s published distribution JS. ReCall should receive test inputs independently of the oracle. Reserve these correspondence records for scoring.

## Frontend-visible follow-up sampling

For captures with maps but no qualifying pairs in the original sample, we repeat library selection using the captured frontend. The candidate pool is the intersection of declared external production dependencies and package names with decoded original positions in a captured map. The extractor recognizes webpack's legacy `~/package` notation and indexed source maps. If that intersection is empty, we consider declared development dependencies with the same positive evidence of shipment in the production frontend. This fallback is marked in each record. For example, speedscope declares its browser runtime libraries in `devDependencies` and declares its CLI dependency `open` in `dependencies`.

We rank the whole eligible pool by SHA-256 of the fixed follow-up seed, the pinned commit and the package name, then select up to ten without consulting pair counts. The old sample remains in `selection-before-frontend.json`. The active `selection.json` records the pool, chosen libraries, manifest field, capture image and artifact hashes. These follow-up subjects estimate correspondence conditional on frontend visibility. Their sampling rule differs from the original manifest-only sample. A visible library can still yield zero one-to-one pairs.

## Function measurements

Each decoded source-map point is assigned to the innermost enclosing parsed function at each end. A saved pair requires reciprocal single partners in the analyzed assets, at least two distinct original positions, and all observed mapping points within the paired functions. Each pair separately records whether its whole-function syntax trees match after discarding formatting and location metadata. Renamed or rewritten functions can qualify when their observed mapping preserves this one-to-one relationship. Repeated source paths across chunks and unparsed scripts can limit conclusions. Verify pairs against the named artifact bytes before treating them as a final benchmark.

| Field | Numerator | Denominator |
|---|---|---|
| observedSplit | Sampled source functions linked to multiple bundled functions | Sampled source functions with at least one bundled-function link |
| observedCombine | Bundled functions linked to multiple sampled source functions | Bundled functions with at least one sampled-source-function link |
| removePercent | Requires independently established removal | Requires an inventory of original functions entering the production build |
| createPercent | Requires independent evidence attributing a new function to a sampled library | Requires an inventory of library-owned bundled functions, including unmapped ones |

The first two percentages describe observed map relationships. Inlining and duplication can produce those patterns. They have different denominators and can overlap. Removal and creation are reported as null when the evidence cannot establish the numerator or denominator. An original function could occur in an unloaded chunk or contribute to top-level code. An unmapped bundled function could belong to the bundler runtime. Treating those cases as removed or created would bias the benchmark.

## Reproduction

Use the sibling ReCall Exp checkout with its locked Node dependencies, Chrome, and Docker. Run the following from ReCall Exp. Compose-backed subjects also need the environment described in the build catalog. Set COMPOSE_BIN to the standalone Compose executable if necessary.

```sh
python3 scripts/function-ground-truth/sample_libraries.py
python3 scripts/function-ground-truth/run_capture.py --scratch /tmp/recall-gt-raw
python3 scripts/function-ground-truth/build_maps.py --scratch /tmp/recall-gt-maps
key=vite/hoppscotch--hoppscotch
node --max-old-space-size=6144 scripts/function-ground-truth/relations.mjs "../ReCall Dataset/function-ground-truth/$key" "/tmp/recall-gt-raw/$key"
```

The final command illustrates a baseline capture. Use the map-variant scratch directory when analyzing a variant. Keep the exact map-enabled image and its retained artifact hashes for repeat analysis. The metadata files contain no function bodies.

The durable artifact archive and its manifest are under [bundling-dataset](../bundling-dataset/one-to-one-evaluation.json). After refreshing analysis, run `scripts/archive-function-ground-truth.py` from the dataset root to synchronize the archive.
