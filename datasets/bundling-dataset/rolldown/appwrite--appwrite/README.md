# appwrite/appwrite

打包器 **Rolldown**。锁定提交 `18c60abee1e2cb9d63612478f8e0e7319dfc300b`。

镜像标签 `recall/appwrite--appwrite:18c60abee1e2cb9d63612478f8e0e7319dfc300b-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43100/)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43100:3000')
if (Test-Path 'builds/_runtime/appwrite--appwrite.env') { $options += @('--env-file', 'builds/_runtime/appwrite--appwrite.env') }
docker run @options 'sha256:8b10488eb172a56fad94416c926bca5ba1909c85ac46fb22a06873b2060f2330'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'appwrite--appwrite'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'appwrite--appwrite'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'appwrite--appwrite'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/appwrite--appwrite/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/appwrite--appwrite/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/appwrite--appwrite/browser/page.png) · [Source map 目录](source-map/README.md)
