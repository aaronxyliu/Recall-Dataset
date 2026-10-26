# ReCall Dataset

This repository owns dataset metadata, the bundler-organized catalog, local held-out source checkouts, fixture inputs, and dataset preparation scripts. Recovery code lives in `../ReCall`; experiment outputs and the paper live in `../ReCall Exp`.

## Contents

- `datasets/bundling-dataset/`: local copy of the existing bundler-organized metadata (esbuild, Rspack, Rolldown, Turbopack, and Parcel), with pinned subject, evidence, and artifact references.
- `sources/holdout/`: the existing local source checkouts, moved without resetting or discarding changes. Original nested Git histories are retained. These third-party trees and their dependencies are ignored by the parent dataset Git repository.
- `fixtures/jquery/`: the original crafted jQuery application input.
- `scripts/datasets/build-bundling-dataset.py`: dataset-index preparation, with a repository-relative default output.
- `external-catalog.json`: location and policy for the original external catalog.

## External assets and immutable evidence

The dataset catalog was previously a symlink into `framework-sink-dataset`. Its metadata now has a local canonical copy in this repository. Existing links to pinned upstream source trees and artifact stores remain external; this migration does not download or duplicate the original corpus. Historical catalog baseline/output copies remain linked to their existing external stores and are not new experiment results. Thus the catalog is not a standalone copy of every source and build asset. Preserve or restore those stores before replaying a subject.

The migration leaves original evidence metadata unchanged, including historical absolute paths and hashes. The local copied catalog is checked against the original metadata bytes. Experiment-side compatibility links point into this dataset repository. No repository selection, dependency installation, application rebuild, or source-map oracle regeneration is performed here.

The verification and wild-web datasets described by the paper must retain separate collection populations and independent evaluation labels. This folder reorganization does not claim that the planned larger datasets or website case study have been completed.
