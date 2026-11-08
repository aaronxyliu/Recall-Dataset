# Function ground truth

Current membership is defined by the [production-only, initial-anchor-qualified dataset](../qualified-dataset/README.md). Both active evaluation manifests now point to those records. The following describes the historical collection protocol; its cohort counts and frontend-visible dependency exceptions do not apply to the current dataset. Previous cohort manifests are preserved under `historical-cohorts/before-initial-anchors-3/`.

The canonical dataset is [bundling-dataset/one-to-one-evaluation.json](../bundling-dataset/one-to-one-evaluation.json): **26 repositories and 78,884 one-to-one pairs**. The [exclusion record](exclusions.json) preserves the four excluded subjects and reasons.

Each repository stores `ground-truth/runtime-js/`, `ground-truth/source-maps/`, and `ground-truth/func-mapping.json`. The mapping file contains function-location pairs, capture provenance, library selection and earlier selections, coverage limitations, and the audit summary. The top-level manifest records commits, build image IDs, selection rules, pair counts, and mapping-file hashes.

Libraries were initially sampled from declared dependencies, with documented frontend-visible follow-up selection where needed. For eligible pools larger than ten, additional libraries with accepted counterparts were selected in a fixed pseudorandom order while retaining existing contributors. Twelve repositories reached ten contributors and six exhausted their pools. The saved selection records preserve seeds, candidate counts, manifest fields, and exceptions. This sample is conditional on captured frontend code and available counterparts.

A one-to-one record requires reciprocal unique function partners, at least two distinct original positions, and no observed mapping point crossing to an unknown or top-level counterpart. Both spans must resolve to parsed function definitions. Source maps are evaluation evidence, not ReCall input, and correspondence does not prove semantic equivalence.

## Local working files

The other contents of this directory are ignored intermediate files retained locally for historical cohort scripts: separate captures, selections, relations, audits, progress snapshots, map-build attempts, and duplicate recipes. They are not a second published dataset. A fresh clone uses the canonical files above.

For new single-repository collection, follow the [collector guide](../../ReCall%20Exp/scripts/function-ground-truth/README.md) in the sibling experiment repository. For an existing local historical workspace, `python3 scripts/archive-function-ground-truth.py` synchronizes its canonical records, including provenance. It requires the local working metadata and captured bytes; it is not required to read the published dataset.
