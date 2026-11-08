# metabase/metabase

打包器 **Rspack**。锁定提交 `0c644f3bc99d5dece16391d53135a0a7618f95bc`。

镜像标签 `recall/metabase--metabase:0c644f3bc99d5dece16391d53135a0a7618f95bc-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43220/setup/)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43220:3000', '--env', 'MB_DB_TYPE=h2', '--env', 'MB_ANON_TRACKING_ENABLED=false')
if (Test-Path 'builds/_runtime/metabase--metabase.env') { $options += @('--env-file', 'builds/_runtime/metabase--metabase.env') }
docker run @options 'sha256:06c6e803a0676a742838d7086319d05de9c96157b06e8cf04c1cea582c0c6f38'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rspack" checkout 'metabase--metabase'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rspack" build 'metabase--metabase'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rspack" 'metabase--metabase'
```

[构建记录](../results/metabase--metabase/build.json) · [浏览器验收](../results/metabase--metabase/browser/browser.json) · [页面截图](../results/metabase--metabase/browser/page.png) · [Source map 目录](source-map/README.md)
