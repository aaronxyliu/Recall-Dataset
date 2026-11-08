# omnibrain/svguitar

打包器 **Rollup**。锁定提交 `3b465fdc8af57a9ed948e168ada1c87c9aafd574`。

镜像标签 `recall/omnibrain--svguitar:3b465fdc8af57a9ed948e168ada1c87c9aafd574-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43119/)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43119:80')
if (Test-Path 'builds/_runtime/omnibrain--svguitar.env') { $options += @('--env-file', 'builds/_runtime/omnibrain--svguitar.env') }
docker run @options 'sha256:b18aeac121ddc097b663c14f62088b2160354b5dc42d8d495707c0197d9e99b6'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'omnibrain--svguitar'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'omnibrain--svguitar'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'omnibrain--svguitar'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/omnibrain--svguitar/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/omnibrain--svguitar/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/omnibrain--svguitar/browser/page.png) · [Source map 目录](source-map/README.md)
