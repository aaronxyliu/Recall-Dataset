# mattermost/focalboard — parcel

Pinned commit: `a84bbb65e32edf972856b329417096ac413518e9`.
Target: `experiments/webext`. Status: **configuration-only-not-built**.
Mechanism: Focalboard Web Clipper browser extension; separate from recorded webpack webapp.
Version evidence: Parcel ^2.0.0 (declared; not execution-verified).

`source/` links to the existing pinned repository; `project/` links directly to the selected build target. Treat both as read-only source references. `evidence/` contains saved configuration and provenance; `subject.json` records the exact target and original build distinction.

Build command (not executed by this organization task):

```sh
parcel build manifest.json --target prod && web-ext build -s dist/prod/
```

Saved bundle/map pairs: 0. Readiness: requires-artifact-collection-or-build.

- This Parcel browser extension was not built or served by the original corpus. The original served Focalboard webapp uses webpack.
- No saved bundle/map pair is linked for this selected target.
