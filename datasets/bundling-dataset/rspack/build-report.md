# Rspack 构建与验收

本批次沿用之前的 Docker 生产构建和 Chromium 验收方法。源码检出在工作区的 `builds/`，使用完整提交 SHA。每个镜像记录其标签、镜像 ID 和配方哈希。 [版本清单](deployment-lock.json) · [构建、页面和 source map 状态](results/status.md) · [22 个仓库的 source map 复核](../source-map-audit.md)

两个 `linux/amd64` 生产镜像均已成功导出。已将本地镜像 ID、提交标签和配方哈希与构建记录逐一核对。Chromium 在两个首次设置页均完成渲染检查。

| 项目 | 实际页面 | source map 校验 |
| --- | --- | --- |
| Metabase | `/setup/`，等待 `/api/health` 返回 200 后验证欢迎标题 | 5 个必需脚本中 4 个通过、1 个被拒绝；无效段 957/1 142 591，集中在 ClojureScript 编译产物（映射指向的原始行列超出嵌入的 `sourcesContent`）。 [浏览器记录](results/metabase--metabase/browser/browser.json) |
| ToolJet | `/setup`，使用本地 PostgreSQL、Redis 和 PostgREST | 15 个必需脚本全部通过，2 633 059 段无一越界；另有 2 个 `blob:` worker 由录音库在运行时拼装，按运行时生成排除并记录产地。 [浏览器记录](results/tooljet--tooljet/browser/browser.json) |

ToolJet 的构建记录在本次复核中恢复过一次：03:03Z 的一次配方改动留下 `status=running` 后没有返回，04:31Z 的重试因 `registry-1.docker.io` 不可达而失败。已验证镜像仍在本地（ID `beee58…`，配方标签 `2f250e2a…`），`build.json` 依 `summary.json` 恢复并用 `docker inspect` 核对。当前工作树配方哈希为 `8c40399c…`，与本镜像不对应，重建前需要重新验收。 [差异说明](results/tooljet--tooljet/recipe-drift.md)

| 项目 | 锁定版本 | Rspack 锁定版本 | 构建与验收范围 |
| --- | --- | --- | --- |
| Metabase | `v0.65.3`（`0c644f3`） | `2.0.3` | Open Source 版。使用上游 Clojure 生产流程构建包含 Rspack 前端的 JAR，使用临时 H2 数据库打开首次设置页。 |
| ToolJet | `7f8ac7d` | `2.2.8` | Community Edition。构建插件、Rspack 前端和 NestJS 服务，使用本地 PostgreSQL、Redis 和 PostgREST 验收首次启动页面。 |

Metabase 使用已核实的稳定发布。ToolJet 的 `v3.20.253-lts` 前端脚本使用 Webpack，因此采用数据集已经选中的 Rspack 提交。ToolJet 开启 Rspack 的生产 source map，并在构建时提供根路径 API 地址，以避免启动时修改脚本内容、破坏 map 坐标。外部连接器和企业子模块不在此次验收范围。 [Metabase 发布页](https://github.com/metabase/metabase/releases/tag/v0.65.3) · [ToolJet LTS 前端清单](https://github.com/ToolJet/ToolJet/blob/v3.20.253-lts/frontend/package.json) · [ToolJet 锁定提交的前端清单](https://github.com/ToolJet/ToolJet/blob/7f8ac7d54b0492819d64485eb7621d486b1115c3/frontend/package.json)

在工作区根目录运行以下命令。每个项目依次执行，避免两个生产编译同时占用内存。

```powershell
$scripts = 'bundling-dataset/rolldown-tsup-turbopack-rollup'
$cohort = 'bundling-dataset/rspack'
python "$scripts/run-builds.py" --cohort-dir $cohort checkout
foreach ($repo in 'metabase/metabase', 'ToolJet/ToolJet') {
    python "$scripts/run-builds.py" --cohort-dir $cohort build $repo
    if ($LASTEXITCODE -eq 0) {
        python "$scripts/verify-page.py" --cohort-dir $cohort $repo
    }
}
python "$scripts/run-builds.py" --cohort-dir $cohort report
```
