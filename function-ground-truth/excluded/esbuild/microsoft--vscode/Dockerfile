FROM recall-web/microsoft--vscode:e13716ce975f
# Restore maps omitted by the upstream packaging filter only when their sibling
# compiler output is byte-identical to the packaged script. Serve maps locally.
RUN node <<'NODE'
const fs = require('node:fs')
const path = require('node:path')
let restored = 0
function walk(root, dest) {
  for (const entry of fs.readdirSync(root,{withFileTypes:true})) {
    const from=path.join(root,entry.name), to=path.join(dest,entry.name)
    if (entry.isDirectory()) { walk(from,to); continue }
    if (!entry.name.endsWith('.js.map')) continue
    const js=to.slice(0,-4)
    if (!fs.existsSync(js) || !fs.readFileSync(js).equals(fs.readFileSync(from.slice(0,-4)))) continue
    fs.copyFileSync(from,to)
    const code=fs.readFileSync(js,'utf8').replace(/^[ \t]*\/\/[#@] sourceMappingURL=[^\r\n]*$/gm,'')
    fs.writeFileSync(js,code+'\n//# sourceMappingURL='+entry.name+'\n')
    restored++
  }
}
walk('/app/out-vscode-web-min','/vscode-web/out')
walk('/app/.build/web/extensions','/vscode-web/extensions')
if (!restored) throw Error('No matching emitted scripts')
console.log('Restored maps:',restored)
NODE
