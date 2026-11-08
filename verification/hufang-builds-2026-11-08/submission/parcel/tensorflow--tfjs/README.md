# tensorflow/tfjs

打包器 **Parcel**。锁定提交 `e5d5e9371ed1fd0a4df6d7cd0b947d2a820cefd7`。

镜像标签 `recall/tensorflow--tfjs:e5d5e9371ed1fd0a4df6d7cd0b947d2a820cefd7-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43300/tfjs-automl/demo/img_classification/)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43300:8080')
if (Test-Path 'builds/_runtime/tensorflow--tfjs.env') { $options += @('--env-file', 'builds/_runtime/tensorflow--tfjs.env') }
docker run @options 'sha256:d1530362cfd0257eed04f9e1f6492218248d494b88184b362480838d7f173767'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/parcel" checkout 'tensorflow--tfjs'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/parcel" build 'tensorflow--tfjs'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/parcel" 'tensorflow--tfjs'
```

[构建记录](../results/tensorflow--tfjs/build.json) · [浏览器验收](../results/tensorflow--tfjs/browser/browser.json) · [页面截图](../results/tensorflow--tfjs/browser/page.png) · [Source map 目录](source-map/README.md)
