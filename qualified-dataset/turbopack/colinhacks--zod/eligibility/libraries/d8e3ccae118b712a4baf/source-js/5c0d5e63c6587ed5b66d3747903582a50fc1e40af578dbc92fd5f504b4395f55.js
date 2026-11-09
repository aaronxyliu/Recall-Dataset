// src/utils/mdx-options.ts
import * as plugins from "fumadocs-core/mdx-plugins";

// src/mdx-plugins/remark-exports.ts
import { valueToEstree } from "estree-util-value-to-estree";
function remarkMdxExport({ values }) {
  return (tree, vfile) => {
    for (const name of values) {
      if (!(name in vfile.data)) return;
      tree.children.unshift(getMdastExport(name, vfile.data[name]));
    }
  };
}
function getMdastExport(name, value) {
  return {
    type: "mdxjsEsm",
    value: "",
    data: {
      estree: {
        type: "Program",
        sourceType: "module",
        body: [
          {
            type: "ExportNamedDeclaration",
            specifiers: [],
            source: null,
            declaration: {
              type: "VariableDeclaration",
              kind: "let",
              declarations: [
                {
                  type: "VariableDeclarator",
                  id: {
                    type: "Identifier",
                    name
                  },
                  init: valueToEstree(value)
                }
              ]
            }
          }
        ]
      }
    }
  };
}

// src/utils/mdx-options.ts
function pluginOption(def, options = []) {
  const list = def(Array.isArray(options) ? options : []).filter(
    Boolean
  );
  if (typeof options === "function") {
    return options(list);
  }
  return list;
}
function getDefaultMDXOptions({
  valueToExport = [],
  rehypeCodeOptions,
  remarkImageOptions,
  remarkHeadingOptions,
  remarkStructureOptions,
  remarkCodeTabOptions,
  ...mdxOptions
}) {
  const mdxExports = [
    "structuredData",
    "frontmatter",
    "lastModified",
    ...valueToExport
  ];
  const remarkPlugins = pluginOption(
    (v) => [
      plugins.remarkGfm,
      [
        plugins.remarkHeading,
        {
          generateToc: false,
          ...remarkHeadingOptions
        }
      ],
      remarkImageOptions !== false && [plugins.remarkImage, remarkImageOptions],
      // Fumadocs 14 compatibility
      "remarkCodeTab" in plugins && remarkCodeTabOptions !== false && plugins.remarkCodeTab,
      ...v,
      remarkStructureOptions !== false && [
        plugins.remarkStructure,
        remarkStructureOptions
      ],
      [remarkMdxExport, { values: mdxExports }]
    ],
    mdxOptions.remarkPlugins
  );
  const rehypePlugins = pluginOption(
    (v) => [
      rehypeCodeOptions !== false && [plugins.rehypeCode, rehypeCodeOptions],
      ...v,
      [plugins.rehypeToc]
    ],
    mdxOptions.rehypePlugins
  );
  return {
    ...mdxOptions,
    remarkPlugins,
    rehypePlugins
  };
}

export {
  getDefaultMDXOptions
};
