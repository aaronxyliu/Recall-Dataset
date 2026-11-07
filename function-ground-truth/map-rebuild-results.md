# Source-map rebuild results

All nine map-missing pages were rebuilt individually. Each page returned HTTP 200 with nonempty rendered body text and newly captured maps.

| Repository | Maps captured | Audited pairs |
|---|---:|---:|
| [mattlewis92/angular-calendar](esbuild/mattlewis92--angular-calendar/relations.json) | 15 | 37 |
| [ng-bootstrap/ng-bootstrap](esbuild/ng-bootstrap--ng-bootstrap/relations.json) | 2 | 29 |
| [primefaces/primeng](esbuild/primefaces--primeng/relations.json) | 66 | 1388 |
| [primefaces/sakai-ng](esbuild/primefaces--sakai-ng/relations.json) | 7 | 1103 |
| [swimlane/ngx-charts](esbuild/swimlane--ngx-charts/relations.json) | 2 | 498 |
| [swimlane/ngx-datatable](esbuild/swimlane--ngx-datatable/relations.json) | 4 | 23 |
| [akveo/ngx-admin](webpack/akveo--ngx-admin/relations.json) | 5 | 104 |
| [dair-ai/Prompt-Engineering-Guide](webpack/dair-ai--Prompt-Engineering-Guide/relations.json) | 20 | 1080 |
| [PanJiaChen/vue-element-admin](webpack/PanJiaChen--vue-element-admin/relations.json) | 4 | 290 |

The seven Angular recipes now use a syntactically checked JSON-edit step on the selected application target, enabling scripts and vendor maps. The Prompt Engineering Guide enables productionBrowserSourceMaps and allocates an 8 GiB Node heap. Vue Element Admin enables productionSourceMap and uses HTTPS Git dependency transport.

For Vue Element Admin, the Dockerfile probes the existing local GitHub proxy at host.docker.internal:7897. Set GITHUB_GIT_PROXY with docker build --build-arg to use a different proxy, or set it to an empty string on hosts with direct GitHub access.

Each subject retains its Dockerfile, capture manifest, image ID, relation records and independent pair audit. Run scripts/function-ground-truth/build_maps.py from ReCall Exp with --subject and --scratch to reproduce a single build and capture.

## Frontend-visible follow-up results

| Repository | Sampled libraries | Audited pairs |
|---|---:|---:|
| jlfwong/speedscope | 7 | 499 |
| microsoft/vscode | 2 | 0 |
| primefaces/primeng | 4 | 1388 |
| bailicangdu/vue2-elm | 3 | 257 |
| dokploy/dokploy | 10 | 584 |
| swagger-api/swagger-ui | 10 | 824 |

Swagger UI was rebuilt with maps enabled in its bundle and standalone webpack configurations. Its build-specific Docker ignore file includes the upstream source and styles, and the build verifies that fresh maps include original source contents. VS Code retains zero qualifying one-to-one pairs after sampling its two visible declared production libraries. All 248 linked source functions in that sample have multiple bundled partners in this capture.
