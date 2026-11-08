# jnsahaj/tweakcn

打包器 **Turbopack**。锁定提交 `a3b47b37cba97dd637de517aab52c45ec0f83456`。

镜像标签 `recall/jnsahaj--tweakcn:a3b47b37cba97dd637de517aab52c45ec0f83456-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43113/editor/theme)。

首次打开前先运行下方的浏览器复验命令，由脚本生成本机环境文件。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43113:3000')
if (Test-Path 'builds/_runtime/jnsahaj--tweakcn.env') { $options += @('--env-file', 'builds/_runtime/jnsahaj--tweakcn.env') }
docker run @options 'sha256:4cf6feb6ad5dcdfdd535224fa739cd2da05f8969139dc1d32fc12674a43cc4bb'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'jnsahaj--tweakcn'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'jnsahaj--tweakcn'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'jnsahaj--tweakcn'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/jnsahaj--tweakcn/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/jnsahaj--tweakcn/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/jnsahaj--tweakcn/browser/page.png) · [Source map 目录](source-map/README.md)
