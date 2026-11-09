// src/runtime/index.ts
var _runtime = {
  doc(files) {
    return files.map((file) => {
      const { default: body, frontmatter, ...exports } = file.data;
      return {
        body,
        ...exports,
        ...frontmatter,
        _exports: file.data,
        _file: file.info
      };
    });
  },
  meta(files) {
    return files.map((file) => {
      return {
        ...file.data,
        _file: file.info
      };
    });
  },
  docs(docs, metas) {
    const parsedDocs = this.doc(docs);
    const parsedMetas = this.meta(metas);
    return {
      docs: parsedDocs,
      meta: parsedMetas,
      toFumadocsSource() {
        return createMDXSource(parsedDocs, parsedMetas);
      }
    };
  }
};
function createMDXSource(docs, meta = []) {
  return {
    files: (rootDir) => resolveFiles({
      docs,
      meta,
      rootDir
    })
  };
}
function resolveFiles({
  docs,
  meta,
  rootDir = ""
}) {
  const outputs = [];
  for (const entry of docs) {
    if (!entry._file.path.startsWith(rootDir)) continue;
    outputs.push({
      type: "page",
      path: entry._file.path,
      data: entry
    });
  }
  for (const entry of meta) {
    outputs.push({
      type: "meta",
      path: entry._file.path,
      data: entry
    });
  }
  return outputs;
}

export {
  _runtime,
  createMDXSource,
  resolveFiles
};
