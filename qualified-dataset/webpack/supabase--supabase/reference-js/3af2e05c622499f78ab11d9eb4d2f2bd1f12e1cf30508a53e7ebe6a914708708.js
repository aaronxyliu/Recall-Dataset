/**
 * This module imports the configured client instrumentation modules.
 *
 * The `private-next-instrumentation-client` module is automatically aliased to
 * either the user's instrumentation module or a generated module array.
 */ "use strict";;globalThis["_sentryRewritesTunnelPath"] = undefined;globalThis["SENTRY_RELEASE"] = undefined;globalThis["_sentryBasePath"] = undefined;globalThis["_sentryNextJsVersion"] = "16.4.3";globalThis["_sentryRewriteFramesAssetPrefixPath"] = "";globalThis["_sentryAssetPrefix"] = undefined;globalThis["_sentryExperimentalThirdPartyOriginStackFrames"] = undefined;globalThis["_sentryRouteManifest"] = "{\"dynamicRoutes\":[{\"path\":\"/blog/:slug\",\"regex\":\"^/blog/([^/]+)$\",\"paramNames\":[\"slug\"],\"hasOptionalPrefix\":false},{\"path\":\"/blog/authors/:author\",\"regex\":\"^/blog/authors/([^/]+)$\",\"paramNames\":[\"author\"],\"hasOptionalPrefix\":false},{\"path\":\"/blog/categories/:category\",\"regex\":\"^/blog/categories/([^/]+)$\",\"paramNames\":[\"category\"],\"hasOptionalPrefix\":false},{\"path\":\"/blog/tags/:tag\",\"regex\":\"^/blog/tags/([^/]+)$\",\"paramNames\":[\"tag\"],\"hasOptionalPrefix\":false},{\"path\":\"/contribute/t/:id\",\"regex\":\"^/contribute/t/([^/]+)$\",\"paramNames\":[\"id\"],\"hasOptionalPrefix\":false},{\"path\":\"/contribute/u/:id\",\"regex\":\"^/contribute/u/([^/]+)$\",\"paramNames\":[\"id\"],\"hasOptionalPrefix\":false},{\"path\":\"/go/:slug*\",\"regex\":\"^/go/(.+)$\",\"paramNames\":[\"slug\"],\"hasOptionalPrefix\":false},{\"path\":\"/go/:slug\",\"regex\":\"^/go/([^/]+)$\",\"paramNames\":[\"slug\"],\"hasOptionalPrefix\":false},{\"path\":\"/partners/:slug\",\"regex\":\"^/partners/([^/]+)$\",\"paramNames\":[\"slug\"],\"hasOptionalPrefix\":false},{\"path\":\"/partners/catalog/:slug\",\"regex\":\"^/partners/catalog/([^/]+)$\",\"paramNames\":[\"slug\"],\"hasOptionalPrefix\":false}],\"staticRoutes\":[{\"path\":\"/\"},{\"path\":\"/auth\"},{\"path\":\"/compute\"},{\"path\":\"/database\"},{\"path\":\"/edge-functions\"},{\"path\":\"/realtime\"},{\"path\":\"/storage\"},{\"path\":\"/aws-marketplace\"},{\"path\":\"/blog\"},{\"path\":\"/contribute\"},{\"path\":\"/contribute/about\"},{\"path\":\"/events\"},{\"path\":\"/partners\"},{\"path\":\"/partners/catalog\"},{\"path\":\"/pricing\"},{\"path\":\"/state-of-startups\"},{\"path\":\"/wrapped\"}],\"isrRoutes\":[\"/blog/:slug\",\"/blog/tags/:tag\",\"/go/:slug*\",\"/go/:slug\",\"/partners/catalog/:slug\"]}";
if (process.env.NODE_ENV === 'development') {
    const measureName = 'Client Instrumentation Hook';
    const startTime = performance.now();
    // eslint-disable-next-line @next/internal/typechecked-require -- Not a module.
    const instrumentationClient = require('private-next-instrumentation-client');
    module.exports = Array.isArray(instrumentationClient) ? instrumentationClient : [
        instrumentationClient
    ];
    const endTime = performance.now();
    const duration = endTime - startTime;
    // Using 16ms threshold as it represents one frame (1000ms/60fps)
    // This helps identify if the instrumentation hook initialization
    // could potentially cause frame drops during development.
    const THRESHOLD = 16;
    if (duration > THRESHOLD) {
        console.log(`[${measureName}] Slow execution detected: ${duration.toFixed(0)}ms (Note: Code download overhead is not included in this measurement)`);
    }
} else {
    // eslint-disable-next-line @next/internal/typechecked-require -- Not a module.
    const instrumentationClient = require('private-next-instrumentation-client');
    module.exports = Array.isArray(instrumentationClient) ? instrumentationClient : [
        instrumentationClient
    ];
}

//# sourceMappingURL=require-instrumentation-client.js.map