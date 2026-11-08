## Reproduction prerequisites

Use Docker with a working daemon, Node.js 24+, host Chrome, Python 3, and the frozen collector dependencies (`npm ci` in `collector/`). On macOS arm64, `python3 prepare-compose.py` installs the checksum-pinned Compose v2.40.3 binary used here; elsewhere set `RECALL_COMPOSE_BIN` to the installed Compose executable. Build contexts and source checkouts are supplied by `build.py`; do not invoke individual Dockerfiles without those contexts. Large builds and service groups share a resource lock and run sequentially. `RECALL_BUILD_TIMEOUT` controls the build timeout.

The local Docker VM later stopped responding to both Docker and fresh SSH requests. Twelve subjects remain technically unverified at this snapshot; this is not evidence that their upstream code fails to build or that their libraries have zero anchors. See `environment-incident.json`. A VM restart is pending explicit approval because it could interrupt unrelated containers.
