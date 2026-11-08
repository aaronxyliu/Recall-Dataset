# DayuanJiang/next-ai-draw-io

打包器 **Turbopack**。锁定提交 `e3d4d11d5916daf8d68a9f087b36c8ca9a79200e`。

镜像标签 `recall/dayuanjiang--next-ai-draw-io:e3d4d11d5916daf8d68a9f087b36c8ca9a79200e-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43108/)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43108:3000')
if (Test-Path 'builds/_runtime/dayuanjiang--next-ai-draw-io.env') { $options += @('--env-file', 'builds/_runtime/dayuanjiang--next-ai-draw-io.env') }
docker run @options 'sha256:ed415f17fc7d85042beb81f54f58ff216f87e0d087104987653f8ee7475ae982'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'dayuanjiang--next-ai-draw-io'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'dayuanjiang--next-ai-draw-io'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'dayuanjiang--next-ai-draw-io'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/dayuanjiang--next-ai-draw-io/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/dayuanjiang--next-ai-draw-io/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/dayuanjiang--next-ai-draw-io/browser/page.png) · [Source map 目录](source-map/README.md)
