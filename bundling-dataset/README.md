# Local frontend Docker builds

The 69 remaining candidates were drawn from the 70 repositories in the [pinned selection record](https://github.com/aaronxyliu/Recall-Dataset/blob/42cbd7235c2f6c2133eebed394c989cefacba34c/selection.json). The exclusion and its reason are recorded in exclusions.json. Each directory is named by build-tool category and repository slug. Its subject.json records the selected commit, frontend manifest, production scripts, tool, engine, and upstream public URL.

Build attempts run sequentially using source archives at the recorded commit. The build log records the package installation and production build. A successful local launch requires a Chrome navigation to the loopback container port, a successful document response, rendered body text, at least one successful same-origin script request, and no uncaught JavaScript exception during the observation window. This smoke test covers the landing route only. Authentication, external services, and interactions require separate testing.

Read each result.json for the observed outcome. A directory containing only subject.json is pending. A Dockerfile by itself is a candidate recipe. A successful case additionally has a README with reproduction commands and browser.log with page evidence. An unsuccessful attempt identifies the stage reached and retains its log for diagnosis.
