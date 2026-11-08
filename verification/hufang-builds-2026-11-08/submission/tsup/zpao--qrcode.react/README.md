# zpao/qrcode.react

打包器 **tsup**。锁定提交 `f91d2bdcc39def6c5c77178743a44f935a740992`。

镜像标签 `recall/zpao--qrcode.react:f91d2bdcc39def6c5c77178743a44f935a740992-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43102/)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43102:80')
if (Test-Path 'builds/_runtime/zpao--qrcode.react.env') { $options += @('--env-file', 'builds/_runtime/zpao--qrcode.react.env') }
docker run @options 'sha256:c1a764955196abdf64b22b692ae65341ffbebf224347c0fb2121d128657d4f0e'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'zpao--qrcode.react'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'zpao--qrcode.react'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'zpao--qrcode.react'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/zpao--qrcode.react/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/zpao--qrcode.react/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/zpao--qrcode.react/browser/page.png) · [Source map 目录](source-map/README.md)
