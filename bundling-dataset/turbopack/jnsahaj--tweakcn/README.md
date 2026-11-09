# jnsahaj/tweakcn

Independent verification of Hufang submission `feea3f3`, using upstream commit `a3b47b37cba97dd637de517aab52c45ec0f83456`. The original catalog pin is preserved in `subject.json`; `application.json` records the actual reproduced frontend.

Build: **built**. Browser: **rendered**.

Use `RECALL_ONLY=turbopack/jnsahaj--tweakcn python3 verification/hufang-builds-2026-11-08/build.py` from the dataset root. Then run the same command with `capture.py` to launch the required local services and collect the selected route. Set `RECALL_REBUILD=1` or `RECALL_RECAPTURE=1` for a fresh attempt. See `recipe.json`, `launch.json`, and the verification scripts for contexts, environment-variable names, and service requirements. Secrets are generated locally and are not tracked.

[Build/browser evidence](../../../verification/hufang-builds-2026-11-08/turbopack/jnsahaj--tweakcn/verification.json). [Captured JS, maps, and function pairs](ground-truth/func-mapping.json). Observed page: `http://127.0.0.1:19218/editor/theme`. This is the build/capture archive; membership in the final restricted dataset is defined by `qualified-dataset/index.json`. Authenticated workflows and external integrations remain outside the observed scope.
