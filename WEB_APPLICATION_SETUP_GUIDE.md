# Agent instructions: reproduce a web application with source maps

## Goal and success criteria

Build a pinned revision of a web application in Docker, open its intended page in a real browser, and verify source maps for the JavaScript delivered to that browser.

Complete the steps below in order. Report success only when:

1. The production build succeeds.
2. The intended interface renders with its required services.
3. The JavaScript required by the task has matching, usable source maps.
4. Saved commands and configuration allow another agent to repeat the result.

Record partial results and unresolved requirements explicitly.

## 1. Identify the actual application

**Inspect** the README, application package scripts, lockfile, runtime-version files, and existing Docker or deployment configuration. In a monorepo, follow the chosen frontend’s command through workspace dependencies.

**Record** the commit, application directory, runtime and package-manager versions, production command, bundler configuration, output directory, server command, port, and page route. List required APIs, databases, generated files, environment variables, and external credentials.

**Proceed when** you can explain which command produces the intended page and what that page needs at runtime. Ask for a missing decision only when it prevents selecting the intended application or obtaining a required credential.

## 2. Reproduce the documented production build

**Do** start from upstream instructions or its Dockerfile. Match tool versions, honor the lockfile, and build workspace prerequisites in order. If no lockfile exists, save the resolved dependencies for reproducibility.

Inspect the Docker build context and ignore files. Confirm required source files enter the build and expected output files exist before copying them into the runtime image.

**Verify** the build completes and produces the documented artifacts. For a failure, inspect the first causal error, make a targeted correction, and retry. Validate configuration-edit scripts before repeating dependency installation.

## 3. Enable and deliver source maps

**Do** enable maps in the configuration used by the production command. Inspect framework wrappers and production overrides. Preserve production optimization settings and document additional changes.

| Build system | Common setting to inspect |
|---|---|
| Vite | `build.sourcemap` or `vite build --sourcemap` |
| webpack | `devtool: 'source-map'` |
| Vue CLI | `productionSourceMap` |
| Next.js | `productionBrowserSourceMaps` |
| Angular | Application target’s `sourceMap`, including scripts and vendor code |
| esbuild | The build invocation’s `sourcemap` option |

Check support in the pinned version before editing. Follow emitted JS and maps through copying, filtering, rewriting, and HTTP serving. Verify map references resolve and exact original sources are available, embedded in `sourcesContent` or retained separately.

**Verify** each accepted script/map pair comes from the same build. An adjacent filename alone is insufficient evidence. Check for stale maps and post-build code changes.

## 4. Launch and check the page

**Do** start the production server and required services. Wait for readiness, then open the recorded route in a real browser. Confirm the expected interface renders. Inspect console exceptions, failed asset requests, and required API calls. Test a representative interaction when the task requires it.

**Record** the final URL, visible interface, browser evidence, errors, and tested scope. Distinguish a rendered login form from a tested authenticated application.

**If blocked** by unavailable credentials or services, record the dependency and the stage reached. HTTP 200 alone cannot establish that the application works.

## 5. Capture JavaScript and validate maps

**Do** capture JavaScript responses. Include debugger-observed scripts and workers when needed for inline, evaluated, or worker code. Record each artifact’s URL, content hash, observation channel, and build identity. Runtime wrappers can change bytes and coordinates relative to HTTP responses.

**Verify** every map used in analysis:

- The response parses as source-map data.
- Generated coordinates resolve within the corresponding captured script.
- Original coordinates resolve within the exact original sources.
- Indexed sections and offsets are handled correctly.
- Runtime wrapping or post-processing has been accounted for.

Record rejected or unresolved maps and their reasons. Define capture scope by routes, interactions, and observation duration. Unvisited routes and later lazy imports may contain additional code. Absence from a capture cannot establish removal by the build.

## 6. Diagnose before retrying

| Symptom | Inspect first | Next action |
|---|---|---|
| Missing build input | Checkout, prerequisites, Docker context and ignore rules | Restore the required input or correct its path |
| Installation stalls | Exact dependency and connectivity inside Docker | Diagnose the specific registry or Git request |
| Memory failure | Heap limit, container memory, concurrency | Adjust the limiting resource within available capacity |
| Blank page | Browser exceptions, asset paths, API/configuration failures | Repair the first failing runtime dependency |
| Map URL returns HTML | Server fallback and file existence | Correct map deployment or routing |
| Map coordinates exceed bounds | Build identity, rewrites, wrappers, indexed offsets | Resolve alignment before accepting the map |

Preserve working layers and caches. Monitor quiet processes through their logs. Avoid repeated identical retries. Record proxy, registry, memory, and build changes, and preserve dependency integrity checks. Keep credentials outside tracked files. Clean up resources created for the task.

## 7. Save a reviewable result

Save the pinned revision and dependency versions, Docker/launch recipes, required configuration names, page URL, browser evidence, script/map identities, validation results, and unresolved limitations.

In the final report, state separately whether the build succeeded, the intended page worked, and the required source maps passed validation. Include reproduction instructions and the exact scope verified.
