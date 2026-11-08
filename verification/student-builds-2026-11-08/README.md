# Student build verification — 2026-11-08

Submission reviewed: `junjie` at `c24ed5324b247e98a680b6e58c88adc7a85fd649`. The `hufang` branch at `42cbd7235c2f6c2133eebed394c989cefacba34c` contains catalog/selection files, with no new Docker build results.

Each accepted capture was obtained by opening the production image in host Chrome. Screenshots and page text establish only the observed landing interface. Authentication, passkeys, downloads, training, remote services, and full application workflows were not exercised. The gallery remains excluded and its image panels were empty in the observation.

The collector uses the existing reciprocal body mapping rules and independent hash/span verification. It selects at most ten declared production dependencies in alphabetical order. A zero-pair record is retained for manifests without production dependencies or without qualifying mappings for the selected libraries. This does not establish absence of bundled library functions. JavaScript and source maps are the captured bytes, named by SHA-256. Student maps are preserved under `submitted-ground-truth/`; they are not treated as matched browser captures.

The combined discovery index is [`combined-artifact-index.json`](../../bundling-dataset/combined-artifact-index.json). It retains all 26 previously published repositories, using their saved v2 records where available. The original and active experiment indexes retain their existing cohorts; the combined index is not an experimental score.

| Subject | Independent build | Browser evidence | Pairs |
|---|---|---|---:|
| bun/RockwellShah--filekey | built | [screenshot](bun/RockwellShah--filekey/page.png) | 489 |
| bun/chenglou--chenglou.github.io | built | [screenshot](bun/chenglou--chenglou.github.io/page.png); empty image panels; excluded | 0 |
| bun/json-schema-faker--json-schema-faker | built | [screenshot](bun/json-schema-faker--json-schema-faker/page.png) | 0 |
| bun/micahkepe--jsongrep | built | [screenshot](bun/micahkepe--jsongrep/page.png) | 1208 |
| bun/mikehadlow--gtr-cof | built | [screenshot](bun/mikehadlow--gtr-cof/page.png) | 625 |
| bun/olragon--binpackingjs | built | [screenshot](bun/olragon--binpackingjs/page.png) | 0 |
| bun/tednaleid--grimdawn-devotions | built | [screenshot](bun/tednaleid--grimdawn-devotions/page.png) | 0 |
| parcel/101arrowz--fflate | built | [screenshot](parcel/101arrowz--fflate/page.png) | 0 |
| parcel/download-directory--download-directory.github.io | built | [screenshot](parcel/download-directory--download-directory.github.io/page.png) | 402 |
| parcel/jonasschmedtmann--complete-javascript-course | built | [screenshot](parcel/jonasschmedtmann--complete-javascript-course/page.png) | 0 |
| parcel/missive--emoji-mart | built | [screenshot](parcel/missive--emoji-mart/page.png) | 0 |
| parcel/parcel-bundler--lightningcss | built | [screenshot](parcel/parcel-bundler--lightningcss/page.png) | 0 |
| parcel/parcel-bundler--website | built | [screenshot](parcel/parcel-bundler--website/page.png) | 461 |
| parcel/tensorflow--tfjs-examples | built | [screenshot](parcel/tensorflow--tfjs-examples/page.png) | 0 |

## Recipe corrections

- JSON Schema Faker and Guitar Dashboard: copy Bun output into the actual nginx directory; confirm script/map requests from that build.
- Forkify and TensorFlow examples: use the selected frontends (`18-forkify/final` and `mnist`). Forkify pins Node 16/npm 6 and repairs the locked source-map addon missing N-API global before forced recompilation; Parcel versions are retained.
- Grim Dawn: use the upstream production bundle script and copy required data, artwork, and translations.
- Dependency delivery: use the host proxy for Docker; keep pinned Yarn and package integrity checks when changing registry hosts. Lightning CSS skips Puppeteer browser downloads in its build image.

Reproduction scripts, build attempts, capture configuration, screenshots, and machine-readable outcomes are retained beside this report. The proxy address in `run-builds.py` is environment-specific and may need adjustment. Source checkouts remain ignored under `builds/`.
