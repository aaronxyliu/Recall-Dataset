# umami-software/umami

打包器 **Turbopack**。锁定提交 `559e3c607c23d2c72d9bd4f6481bda428255323c`。

镜像标签 `recall/umami-software--umami:559e3c607c23d2c72d9bd4f6481bda428255323c-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43107/login)。

应用需要 Compose 服务。若本机还没有验收生成的环境文件，先运行下方的浏览器复验命令。环境文件保存在 `builds/_runtime/`。

```powershell
$compose = @('--project-name', 'recall-maps-umami-software--umami', '--env-file', 'builds/_runtime/umami-software--umami.compose.env', '--file', 'bundling-dataset/rolldown-tsup-turbopack-rollup/recipes/umami-software--umami/compose.yaml')
docker compose @compose up --detach --wait --wait-timeout 180
```

结束后运行 `docker compose @compose down`。再次执行自动复验前，先停止手动启动的服务。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

当前配方指纹与已验收镜像的记录不同。下方重建命令使用当前配方，重建后的镜像需重新验收。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'umami-software--umami'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'umami-software--umami'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'umami-software--umami'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/umami-software--umami/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/umami-software--umami/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/umami-software--umami/browser/page.png) · [Source map 目录](source-map/README.md)
