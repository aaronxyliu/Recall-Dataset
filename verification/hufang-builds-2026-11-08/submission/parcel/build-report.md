# TensorFlow.js AutoML 图像分类 Demo

按数据集中的站点入口构建 `tensorflow/tfjs` 的 `tfjs-automl/demo/img_classification`。版本为 `tfjs-v4.22.0`，锁定提交为 `e5d5e9371ed1fd0a4df6d7cd0b947d2a820cefd7`。 [版本清单](deployment-lock.json) · [上游 Demo 源码](https://github.com/tensorflow/tfjs/tree/e5d5e9371ed1fd0a4df6d7cd0b947d2a820cefd7/tfjs-automl/demo/img_classification)

构建先用 `tfjs-automl/yarn.lock` 安装依赖，并运行上游 `yarn build`，通过 TypeScript 5.0.4 和 Rollup 3.17.2 生成本地 AutoML 库。随后用 Demo 自己的 `yarn.lock` 安装依赖，运行上游的 Parcel 2.8.3 生产命令。构建使用 Node 16.20.2 和 Yarn Classic 1.22.19。运行阶段使用固定摘要的 Node 24 基础镜像，以非 root 用户提供 `dist` 下的静态文件。 [应用记录](recipes/tensorflow--tfjs/application.json) · [Dockerfile](recipes/tensorflow--tfjs/Dockerfile)

## 验收结果

- **Docker 构建通过。** 平台为 `linux/amd64`，镜像 ID 为 `sha256:d1530362cfd0257eed04f9e1f6492218248d494b88184b362480838d7f173767`。浏览器记录与该镜像的提交和配方指纹一致。 [构建记录](results/tensorflow--tfjs/build.json) · [构建日志](results/tensorflow--tfjs/build.log)
- **页面与推理通过。** Chromium 打开目标路由，载入上游公开的示例图片、模型和权重，并渲染 5 个分类结果。最高分是 `daisy`，概率约为 93.11%。验收记录中没有页面异常或失败请求。 [分类结果](results/tensorflow--tfjs/browser/visible-text.txt) · [截图](results/tensorflow--tfjs/browser/page.png)
- **Source map 通过。** Chromium 在自动分类结束后继续观察 12 秒。该路由加载了 1 个由 Parcel 交付的 JavaScript 文件，其 `.map` 的 156,708 个映射段均通过坐标校验。保存的 JS 和 map 文件的 SHA-256 均与浏览器记录一致。 [浏览器记录](results/tensorflow--tfjs/browser/browser.json)

## 构建调整

Parcel 2.8.3 会把 Demo 清单的 `main: index.js` 当作库输出目标，并要求直接声明它生成的异步代码所用的 `@swc/helpers`。构建在容器内移除这个 `main` 字段，并声明锁文件中已有的 `@swc/helpers` 0.4.14。Demo 与链接的 AutoML 库在 Parcel 阶段共用 Demo 锁定的 TensorFlow.js 4.2.0 运行时依赖。`process`、`buffer` 及其传递依赖来自 AutoML 的锁文件，Parcel 自动安装已关闭。 [构建调整脚本](recipes/tensorflow--tfjs/prepare-parcel.cjs)

浏览器复验定位到 Parcel 作用域提升生成的 WebGL 引用错误。最终构建使用 `--no-scope-hoist` 绕过该问题，保留生产压缩和 source map。所有调整在镜像构建阶段执行，源码 checkout 和两个上游锁文件保留原始内容。 [构建日志](results/tensorflow--tfjs/build.log) · [浏览器日志](results/tensorflow--tfjs/browser.log)

## 复现

在工作区根目录执行以下 PowerShell 命令。验收脚本在本机端口 `43300` 启动临时容器，通过 Chromium 打开页面、等待分类结果、保存 JS 和 map，并在结束时停止临时容器。

```powershell
$scripts = 'bundling-dataset/rolldown-tsup-turbopack-rollup'
$cohort = 'bundling-dataset/parcel'
python "$scripts/run-builds.py" --cohort-dir $cohort checkout tensorflow/tfjs
python "$scripts/run-builds.py" --cohort-dir $cohort build tensorflow/tfjs
python "$scripts/verify-page.py" --cohort-dir $cohort tensorflow/tfjs
python "$scripts/run-builds.py" --cohort-dir $cohort report
```

如需手动打开页面，运行以下命令，再访问本地 Demo 地址。

```powershell
docker run --rm -p 127.0.0.1:43300:8080 recall/tensorflow--tfjs:e5d5e9371ed1fd0a4df6d7cd0b947d2a820cefd7-maps
```

[本地 Demo](http://127.0.0.1:43300/tfjs-automl/demo/img_classification/)
