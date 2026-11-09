# ReCall Dataset

A fixed dataset for evaluating recovery of library functions from production JavaScript bundles. This repository contains **one final dataset: 38 repositories, 305 repository/library instances, and 58,268 one-to-one source-to-bundle function pairs**, across seven bundler groups.

The sole membership and artifact index is [`qualified-dataset/index.json`](qualified-dataset/index.json). Recovery implementations and experiment outputs belong outside this repository. This dataset contains ground truth and reproduction inputs, not measured ReCall recovery results.

| Bundler group | Repositories | Library instances | Function pairs |
|---|---:|---:|---:|
| Webpack | 8 | 75 | 19,055 |
| Vite | 8 | 79 | 19,630 |
| esbuild | 6 | 41 | 5,208 |
| Rollup | 3 | 9 | 1,062 |
| Turbopack | 8 | 80 | 8,729 |
| Parcel | 3 | 12 | 2,896 |
| Bun | 2 | 9 | 1,688 |
| **Total** | **38** | **305** | **58,268** |

A library instance is one selected package in one repository; the same package in two repositories counts twice. See the [per-repository tables](qualified-dataset/README.md).

## How the dataset is constructed

1. **Pin the frontend and its source.** Record the upstream repository, exact commit, frontend package manifest, dependency locks, production build recipe, and selected page route. Bundler groups describe the recorded builds, rather than a claim that every JavaScript file uniquely identifies its bundler.
2. **Qualify production dependencies.** Each repository retains **3–10 libraries declared in the selected manifest's `dependencies`**. Development dependencies and peer-only declarations are excluded. Each selected library must supply at least **three distinct source functions with ≥10 own-body POG property-operation features**. Repeated property operations count; this is not a count of distinct properties or graph nodes. Nested bodies are excluded. Syntactically identical distribution copies are deduplicated by the frozen source gate. Selection uses deterministic candidate order and recorded overrides, including DrawDB's exclusion of `@dbml/core`.
3. **Build and check a production page.** Enable or retain source maps through the archived recipe, serve the application, and check the recorded route in Chrome. Source eligibility was applied before new builds and retrospectively to existing captures. Build/browser receipts and relevant recipe patches are retained with each subject.
4. **Capture JavaScript and maps.** Save the exact intercepted JavaScript and available source maps under SHA-256 filenames. The archive includes complete capture evidence for the selected route; it is not a crawl of every application page or possible lazy chunk.
5. **Review module ingress.** Admit dependencies imported into the application's compiled module outputs, including UMD/IIFE output. Exclude standalone vendor scripts, global-script lists, copied standalone vendors, and unreviewed/external assets **before constructing correspondence relations**. Per-subject `module-scope.json` and `module-evidence/` record that review. Complete captured bytes remain available for provenance.
6. **Collect reciprocal correspondences.** Decode each bundle's source map, inventory source and generated functions, and establish reciprocal function relationships using informative mappings. Boundary/structural points do not establish body identity. The `reciprocal-body-mapped-v2` collector requires reciprocal uniqueness and supporting mapped positions; an independent verifier checks captured hashes, original-source hashes, and both parsed function spans. Ambiguous, merged, split, inlined, missing-source, and insufficient-evidence cases are not forced into pairs. See the [correspondence definition](provenance/collector/relations.mjs) and [span verifier](provenance/collector/verify_pairs.mjs).

**Initial anchors are not a dataset acceptance condition.** There is no minimum accepted-pair count per library. The 915 archived source-function witnesses are lower-bound qualification certificates, not the complete source-function inventory. **107 selected library instances have zero accepted pairs**; source eligibility does not guarantee that code appears on the captured page or survives transformation as a one-to-one function.

The feature threshold qualifies libraries, not individual oracle pairs: supported pairs also include small functions below that threshold.

Duplicate libraries are permitted. The one-to-one oracle retains only unambiguous reciprocal pairs after module-ingress filtering; genuine one-to-many correspondence is outside this oracle. These pairs do not enumerate every library function or every function relationship in the bundles.

The executable policies are [selection](policies/selection.json), [bundler scope](policies/bundlers.json), and [module correspondence scope](policies/correspondence.json).

## Repository layout

```text
qualified-dataset/
  index.json                         # the only dataset index
  <bundler>/<owner>--<repo>/
    README.md                        # selected libraries, counts and commands
    frontend-package.json
    qualification.json              # source-eligibility certificate
    eligibility/                     # source witnesses, package origins, licenses
    module-scope.json
    module-evidence/                 # pinned build/configuration evidence
    source-ownership.json
    reference-manifest.json
    reference-js/                    # available original source snapshots
    ground-truth/
      func-mapping.json              # oracle, capture inventory and diagnostics
      runtime-js/<sha256>.js
      source-maps/<sha256>.map
    reproduction/
      build.json                     # effective pin, context, launch settings
      Dockerfile                     # source-map-enabled production recipe
      selection.json                 # exact original collector input
      ...                            # recipe helpers and service configuration
      evidence/                      # build/browser receipts and logs
policies/                            # final selection and correspondence rules
provenance/                          # frozen source gate, collector and build helpers
  release-origin.json                # pre-cleanup hashes and provenance locations
  validation.json                    # final offline verification results
  source-gate/
  collector/
  map-tools/
tools/                               # audit, input export, scoring, reproduction
checksums.sha256                      # portable release file inventory
```

`qualified-dataset/index.json` paths are relative to `qualified-dataset/`. Each reference manifest's paths are relative to its subject directory. Historical construction-machine paths embedded in immutable provenance identify original inputs; use the canonical index and `reproduction/` for current locations. Source checkouts, runtime secrets, rebuilt artifacts, and local experiments stay under ignored `.work/` or `runs/`.

## Install and verify

Clone the final release tree without downloading older Git history:

```sh
git clone --depth 1 --branch main https://github.com/aaronxyliu/Recall-Dataset.git
cd Recall-Dataset
```

Reading the JSON and JavaScript requires no Docker or model endpoint. Python 3 verifies the entire release without third-party packages:

```sh
python3 tools/checksums.py
```

For POG/source-certificate audits, pair reconstruction, and browser capture, use **Node.js 24+** and install the frozen dependencies:

```sh
npm ci --ignore-scripts --prefix provenance/source-gate/initial-anchors-3/runtime
npm ci --ignore-scripts --prefix provenance/collector
node tools/audit.mjs
```

The audit checks final membership, production declarations, POG witnesses and hashes, reference snapshots, captured bytes, module ingress, oracle totals, recipe hashes, frozen code, and exact collection selections. The frozen runtime is used to verify the source gate; it does not select recovery anchors.

## Use with ReCall

Export one subject into a new local directory:

```sh
node tools/export-inputs.mjs webpack/PanJiaChen--vue-element-admin .work/inputs/vue-element-admin
```

The exporter copies **only reviewed module-output JavaScript** and original reference text, preserving captured URL/import layout. It supplies stable target IDs and separates observed service-worker code from page code. Identical reference files within a library/version are canonicalized with aliases. It does **not** export source maps or correspondence labels into the inference inputs.

With a separate checkout of ReCall:

```sh
node ../ReCall/bin/recall.mjs run \
  --source-manifest .work/inputs/vue-element-admin/source.json \
  --bundle-manifest .work/inputs/vue-element-admin/bundle.json \
  --config .work/inputs/vue-element-admin/known-reference-config.json \
  --prepare-only --out runs/vue-element-admin-prepared
```

The supplied configuration treats the exported source snapshots as a **fixed known reference pool** (`libraryGate: false`); it is not a blind package/version-identification experiment. For inference, use a fresh output directory, remove `--prepare-only`, and add your fixed model/validation configuration. Record the ReCall commit or implementation digest and all experiment settings.

**Source preparation matters.** Reference snapshots are available original texts, sometimes TypeScript/JSX or incomplete package trees. They are not guaranteed to be directly parseable by every recovery implementation. For a full-package reference experiment, obtain locked package/workspace sources using the origins recorded under `eligibility/`; do not treat map-derived snapshots as complete package distributions. Inspect preparation diagnostics and preserve original source identities when normalizing syntax. Do not substitute the three qualification witnesses for a library's full reference inventory or silently drop unsupported targets from the denominator.

## Function-pair record format

Each `ground-truth/func-mapping.json` includes `selectedLibraries`, `capture.assets`, `pairs`, mapping diagnostics, and construction provenance. A pair has this shape (illustrative identifiers):

```json
{
  "library": "example-lib",
  "source": "node_modules/example-lib/index.js#<sha256>@10-90",
  "bundled": "<local>/assets/app.js#<sha256>@100-160",
  "evidenceRule": "reciprocal-body"
}
```

Identifiers use `location#sha256@start-end`. The generated hash selects the exact file in `runtime-js/`; the source hash identifies original text in the source map, also indexed by each reference manifest's `sha256`. Reference filenames are snapshot identities and need not equal that content hash. Offsets are **half-open UTF-16 code-unit positions**, as used by JavaScript parsers, not UTF-8 byte offsets. Preserve this distinction when extracting functions with Python or other tools.

## Evaluate recovery

After a ReCall run that retains `source.json`, `bundle.json`, and `recovery.json`:

```sh
python3 tools/score.py webpack/PanJiaChen--vue-element-admin \
  --run runs/vue-element-admin
```

The helper scores distinct bundled targets against **all released one-to-one pairs for that repository**. It reports target recovery, pair precision within the oracle, multiple accepted sources, missing reference/target inventory coverage, and predictions outside the partial oracle. An unmatched prediction outside this oracle is **unassessed**, not automatically incorrect. Raw source-byte hashes and original spans are required; transformed references need an explicit identity mapping before scoring.

Keep source maps and `func-mapping.json` out of anchor building, candidate selection, validation, and propagation. Source maps may label module boundaries **after** graph construction for evaluation, but they must not supply inference edges or matching decisions.

## Reproduce the archived function pairs

No source checkout, Docker daemon, browser, network, or model is needed once the collector dependencies are installed:

```sh
python3 tools/rebuild-pairs.py rollup/omnibrain--svguitar \
  --out .work/rebuilt-svguitar

python3 tools/rebuild-pairs.py --all --out .work/rebuilt-all
```

The script reconstructs relations from the archived bytes and exact selected-library/module-scope inputs, independently verifies source/function spans, and compares every pair identity against the release. Output directories must be fresh. It never overwrites the dataset.

## Rebuild applications and recapture pages

Fresh application builds require Git, network access to upstream repositories and dependency registries, Docker with BuildKit/named-context support, and Docker Compose for service-backed pages. Browser capture additionally requires Chrome; set `CHROME_BIN` if it is not at the collector's default macOS location.

Commands print a plan unless `--execute` is supplied:

```sh
python3 tools/reproduce.py checkout rollup/omnibrain--svguitar --execute
python3 tools/reproduce.py build rollup/omnibrain--svguitar --execute
python3 tools/reproduce.py serve rollup/omnibrain--svguitar --execute
python3 tools/reproduce.py capture rollup/omnibrain--svguitar \
  --out .work/new-svguitar-capture --execute
python3 tools/reproduce.py stop rollup/omnibrain--svguitar --execute
```

Use `--source /path/to/checkout`, `--port`, or `--url` where needed. The build command verifies the pinned commit, production dependencies, source certificates, and recipe inputs. Existing modified tracked checkouts are refused. Launch settings and service requirements are recorded in each subject's `reproduction/build.json`. Generated secrets stay in ignored `.work/runtime/` and are not printed. Run large builds sequentially.

Fresh captures receive an **unreviewed module-scope template**. Asset hashes can change after rebuilding, so the archived module-scope receipt must not be blindly reused. Review ingress and source ownership against the pinned build evidence before creating new labels. A fresh build is a reproduction attempt; exact byte equality across machines and future registry states is not guaranteed. The archived release remains the stable experiment input.

## Scope and limitations

- Captures cover the recorded route and observation window. Unrequested lazy chunks, authenticated workflows, backend behavior, and external integrations are not comprehensively exercised.
- Function pairs establish supported source-map provenance, not model recovery results or general semantic equivalence. The oracle excludes transformations that do not support one-to-one identity.
- Flattened bundles can retain usable function relationships while erasing module containers. A zero recognized-module count is not proof that no inter-module relationships exist.
- Reference snapshots and package-name ownership do not establish a single installed version for every captured copy. Preserve ambiguity and report source-preparation coverage.
- Upstream map and page diagnostics are retained. Invalid or insufficient mappings are not repaired by guessing coordinates.
- This is a curated fixed cohort, not a random or population-representative sample of JavaScript applications.

Third-party source snapshots, witness licenses, and frozen-vendor notices retain their upstream licensing and copyright information.
