// src/mdx-plugins/remark-include.ts
import { visit } from "unist-util-visit";
import * as path from "node:path";
import * as fs from "node:fs/promises";
import matter from "gray-matter";
function remarkInclude() {
  const TagName = "include";
  async function update(tree, file, processor, compiler) {
    const queue = [];
    visit(tree, ["mdxJsxFlowElement", "paragraph"], (node) => {
      let specifier;
      if (node.type === "paragraph" && node.children.length === 3) {
        const [open, content, closure] = node.children;
        if (open.type === "html" && open.value === `<${TagName}>` && content.type === "text" && closure.type === "html" && closure.value === `</${TagName}>`) {
          specifier = content.value.trim();
        }
      } else if (node.type === "paragraph" && node.children.length === 1) {
        const child = node.children[0];
        if (child.type === "mdxJsxTextElement" && child.name === TagName) {
          const text = child.children.at(0);
          if (text && text.type === "text") {
            specifier = text.value;
          }
        }
      }
      if (node.type === "mdxJsxFlowElement" && node.name === TagName) {
        const child = node.children.at(0);
        if (child && child.type === "text") {
          specifier = child.value;
        }
      }
      if (!specifier) return;
      const targetPath = path.resolve(path.dirname(file), specifier);
      queue.push(
        fs.readFile(targetPath).then(async (content) => {
          const parsed = processor.parse(matter(content).content);
          compiler?.addDependency(targetPath);
          await update(parsed, targetPath, processor, compiler);
          Object.assign(node, parsed);
        })
      );
      return "skip";
    });
    await Promise.all(queue);
  }
  return async (tree, file) => {
    await update(tree, file.path, this, file.data._compiler);
  };
}

export {
  remarkInclude
};
