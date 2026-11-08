# vega/vega-lite

打包器 **Rollup**。锁定提交 `e415f441845e198629f2049b46849ddcfdbf6596`。

镜像标签 `recall/vega--vega-lite:e415f441845e198629f2049b46849ddcfdbf6596-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43115/vega-lite/examples/bar.html)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43115:80')
if (Test-Path 'builds/_runtime/vega--vega-lite.env') { $options += @('--env-file', 'builds/_runtime/vega--vega-lite.env') }
docker run @options 'sha256:c2d34377b956c1769e02e758ca14fa805bbf01295dcc9004f230131f31d9a9ff'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'vega--vega-lite'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'vega--vega-lite'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'vega--vega-lite'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/vega--vega-lite/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/vega--vega-lite/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/vega--vega-lite/browser/page.png) · [Source map 目录](source-map/README.md)
