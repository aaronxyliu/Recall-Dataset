# shadcn-ui/ui

Independent verification of Hufang submission `feea3f3`, using upstream commit `d549251bab2e57dbf72f7c909d6458c02c43f529`. The original catalog pin is preserved in `subject.json`; `application.json` records the actual reproduced frontend.

Build: **blocked**. Browser: **not verified**.

Use `RECALL_ONLY=turbopack/shadcn-ui--ui python3 verification/hufang-builds-2026-11-08/build.py` from the dataset root. Then run the same command with `capture.py` to launch the required local services and collect the selected route. Set `RECALL_REBUILD=1` or `RECALL_RECAPTURE=1` for a fresh attempt. See `recipe.json`, `launch.json`, and the verification scripts for contexts, environment-variable names, and service requirements. Secrets are generated locally and are not tracked.

[Build/browser evidence](../../../verification/hufang-builds-2026-11-08/turbopack/shadcn-ui--ui/verification.json). This is the build/capture archive; membership in the final restricted dataset is defined by `qualified-dataset/index.json`. Authenticated workflows and external integrations remain outside the observed scope.
