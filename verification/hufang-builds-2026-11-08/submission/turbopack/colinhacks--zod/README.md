# colinhacks/zod

打包器 **Turbopack**。锁定提交 `b500a2ee95134f81d74da7911d7378dd2853d042`。

镜像标签 `recall/colinhacks--zod:b500a2ee95134f81d74da7911d7378dd2853d042-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43106/)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43106:3000')
if (Test-Path 'builds/_runtime/colinhacks--zod.env') { $options += @('--env-file', 'builds/_runtime/colinhacks--zod.env') }
docker run @options 'sha256:1b0d212ddd06c33e7d005b0d65da3bace270fbab0d23bc60d4254273616d4dbc'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'colinhacks--zod'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'colinhacks--zod'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'colinhacks--zod'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/colinhacks--zod/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/colinhacks--zod/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/colinhacks--zod/browser/page.png) · [Source map 目录](source-map/README.md)
