# Hufang build verification — 2026-11-08

Submission: `feea3f3f247aecd097cb01f7a7de282b02f9b446`. Each result below is an independent attempt against the recorded upstream commit, not acceptance of the student report.

| Subject | Build | Browser | One-to-one pairs |
|---|---|---|---:|
| parcel/tensorflow--tfjs | built | rendered | 0 |
| rolldown/appwrite--appwrite | built | rendered | 3511 |
| rolldown/discourse--discourse | built | rendered | 253 |
| rollup/abrahamjuliot--creepjs | built | rendered | 0 |
| rollup/daybrush--scenejs | built | rendered | 124 |
| rollup/fiduswriter--simple-datatables | built | rendered | 185 |
| rollup/omnibrain--svguitar | built | rendered | 851 |
| rollup/vega--vega-lite | built | rendered | 224 |
| rollup/video-dev--hls.js | built | rendered | 0 |
| rspack/metabase--metabase | built | rendered | 0 |
| rspack/ToolJet--ToolJet | build-failed | not verified | — |
| tsup/peggyjs--peggy | built | rendered | 0 |
| tsup/zpao--qrcode.react | built | rendered | 0 |
| turbopack/DayuanJiang--next-ai-draw-io | built | rendered | 0 |
| turbopack/CalCom--cal.com | built | rendered | 0 |
| turbopack/CapSoftware--Cap | built | rendered | 0 |
| turbopack/colinhacks--zod | built | rendered | 1970 |
| turbopack/formbricks--formbricks | built | not verified | — |
| turbopack/jnsahaj--tweakcn | built | rendered | 78 |
| turbopack/onlook-dev--onlook | build-failed | not verified | 0 |
| turbopack/Open-Dev-Society--OpenStock | built | rendered | 46 |
| turbopack/shadcn-ui--ui | built | rendered | 1651 |
| turbopack/umami-software--umami | built | rendered | 796 |

Build and capture receipts retain image IDs, recipe hashes, logs, screenshots, requested routes, and mapping diagnostics. The submission directory preserves student recipes and maps; “validated” in a submitted filename is a student label. New correspondence records are independently checked by the existing hash/span verifier.

Repaired environment issues include loopback proxy bypass during prerendering, Windows CRLF checksums on LF source, the omitted identity-map helper (only for byte-identical untransformed scripts and explicitly labelled synthetic), a test-only ChromeDriver download, and Chrome proxy access for Appwrite’s actual cloud API. Appwrite’s sitemap uses its supported index-only fallback, scoped to the build-only sitemap command. ToolJet requires amd64 because its IBM database driver rejects Linux arm64.

Docker ran out of VM memory during parallel large builds. The daemon remained healthy inside the VM; its abandoned host socket was re-established without restarting the VM. The user subsequently authorized a Colima restart on 2026-11-09 when the VM stopped responding. Subsequent large builds run sequentially. Earlier failed attempts remain as evidence and are not treated as successful builds.

The current collector additionally records initial page exceptions and failed requests; its patch and hashes are retained with this verification. Synthetic identity maps do not establish transformed library correspondences.

The active production-only, source-function-qualified dataset is a separate deliverable under `qualified-dataset/`; archive population and final dataset membership must not be conflated.

## Reproduction prerequisites

Use Docker with a working daemon, Node.js 24+, host Chrome, Python 3, and the frozen collector dependencies (`npm ci` in `collector/`). On macOS arm64, `python3 prepare-compose.py` installs the checksum-pinned Compose v2.40.3 binary used here; elsewhere set `RECALL_COMPOSE_BIN` to the installed Compose executable. Build contexts and source checkouts are supplied by `build.py`; do not invoke individual Dockerfiles without those contexts. Large builds and service groups share a resource lock and run sequentially. `RECALL_BUILD_TIMEOUT` controls the build timeout.

The local Docker VM stopped responding to Docker and fresh SSH requests on November 8. The user authorized a restart, completed on November 9; Docker 29.5.2 and SSH responded after recovery. Builds and service captures run sequentially under a shared resource lock. A temporary 4 GiB swap file is used during this batch and removed afterward. See `environment-incident.json`. Connectivity failures are distinguished from source compilation failures and do not establish zero initial anchors.
