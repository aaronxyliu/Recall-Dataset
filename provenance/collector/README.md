# Frozen collector runtime

This is the exact collection/mapping/span-verification code used for this batch, with initial browser exceptions and failed-request recording and optional `RECALL_BROWSER_PROXY`. Run `npm ci` here to install the frozen runtime dependencies. Node.js 24+ and host Chrome are required. `node --test collect.test.mjs` runs the browser integration test. Synthetic identity maps are labelled separately by the build helper and do not establish transformed library correspondences.
