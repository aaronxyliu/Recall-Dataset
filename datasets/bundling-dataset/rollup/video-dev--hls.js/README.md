# video-dev/hls.js

打包器 **Rollup**。锁定提交 `142fcab1fd0de99beafb0e1b07102ec674a9ddf9`。

镜像标签 `recall/video-dev--hls.js:142fcab1fd0de99beafb0e1b07102ec674a9ddf9-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `partial-or-failed`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43114/demo/)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43114:80')
if (Test-Path 'builds/_runtime/video-dev--hls.js.env') { $options += @('--env-file', 'builds/_runtime/video-dev--hls.js.env') }
docker run @options 'sha256:efd8a35a046e370f6bfaae1f8d613e8ac1a1746a5ca24fa5b179f6fbea4618e9'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'video-dev--hls.js'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'video-dev--hls.js'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'video-dev--hls.js'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/video-dev--hls.js/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/video-dev--hls.js/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/video-dev--hls.js/browser/page.png) · [Source map 目录](source-map/README.md)
