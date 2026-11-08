const{cancel:e}=window.moduleBroker.lookup("@ember/runloop",!1,["cancel"]),{ajax:t}=window.moduleBroker.lookup("discourse/lib/ajax",!1,["ajax"]),{popupAjaxError:n}=window.moduleBroker.lookup("discourse/lib/ajax-error",!1,["popupAjaxError"]),{default:i}=window.moduleBroker.lookup("discourse/lib/debounce",!1,["default"]),{registerOptimisticPostUpdate:s}=window.moduleBroker.lookup("discourse/lib/optimistic-post-updates",!1,["registerOptimisticPostUpdate"]),{_INTERNAL_SOURCE_KEY:o}=window.moduleBroker.lookup("discourse/lib/api",!1,["_INTERNAL_SOURCE_KEY"]),{withPluginApi:r}=window.moduleBroker.lookup("discourse/lib/plugin-api",!1,["withPluginApi"]),{i18n:a}=window.moduleBroker.lookup("discourse-i18n",!1,["i18n"]),c=Object.freeze({type:"plugin",name:"checklist"})
const l={nodeSpec:{check:{attrs:{checked:{default:!1}},inline:!0,group:"inline",draggable:!0,selectable:!1,toDOM:e=>["span",{class:e.attrs.checked?"chcklst-box checked fa fa-square-check-o":"chcklst-box fa fa-square-o"}],parseDOM:[{tag:"span.chcklst-box",getAttrs:e=>({checked:h(e.className)})}]}},inputRules:[{match:/(^|\s)\[(x? ?)]$/,handler:(e,t,n,i)=>{const s=e.schema.nodes.check.create({checked:"x"===t[2]}),o=e.schema.text(" ")
return e.tr.replaceWith(n+t[1].length,i,[s,o])}}],parse:{check_open:{node:"check",getAttrs:e=>({checked:h(e.attrGet("class"))})},check_close:{noCloseToken:!0,ignore:!0}},serializeNode:{check:(e,t)=>{e.write(t.attrs.checked?"[x]":"[ ]")}},plugins({pmState:{Plugin:e},pmView:{Decoration:t,DecorationSet:n},schema:i,utils:{changedDescendants:s}}){const o=i.nodes.check,r=i.nodes.list_item,a=i.nodes.bullet_list,c=e=>e?.isTextblock&&e.firstChild?.type===o,l=e=>{for(let t=e.depth;t>0;t--)if(e.node(t).type===r)return e.node(t-1)?.type===a?{bulletListDepth:t-1,listItemDepth:t}:null
return null},d=(e,t)=>null!==l(e.resolve(t)),h=(e,t)=>{if(!t.some(e=>e.docChanged))return null
const{selection:n}=e,{$from:s}=n
if(!n.empty)return null
const r=s.parent
if(!r.isTextblock||0!==r.content.size)return null
const a=l(s)
if(!a)return null
const d=s.node(a.bulletListDepth),h=s.index(a.bulletListDepth)
if(0===h)return null
const p=d.child(h-1).firstChild
if(!c(p))return null
if(p.content.size>2){const t=o.create({checked:!1})
return e.insert(s.pos,[t,i.text(" ")]),e.setSelection(n.constructor.near(e.doc.resolve(s.pos+2))),e}return((e,t)=>{const{bulletListDepth:n,listItemDepth:s}=t,{selection:o}=e,{$from:r}=o,a=r.node(n),c=r.index(n),l=a.child(c-1),d=r.before(n)
e.delete(r.before(s),r.after(s))
let h=1
for(let e=0;e<c-1;e++)h+=a.child(e).nodeSize
const p=e.mapping.map(d+h)
e.delete(p,p+l.nodeSize)
const u=e.mapping.map(d),f=e.doc.nodeAt(u)
if(f&&f.childCount>0){const t=u+f.nodeSize
e.insert(t,i.nodes.paragraph.create()),e.setSelection(o.constructor.near(e.doc.resolve(t+1)))}else e.replaceWith(u,u+(f?.nodeSize||0),i.nodes.paragraph.create()),e.setSelection(o.constructor.near(e.doc.resolve(u+1)))
return e})(e,a)}
return[new e({props:{handleClickOn:(e,t,n,i)=>"check"===n.type.name&&(e.dispatch(e.state.tr.setNodeMarkup(i,null,{checked:!n.attrs.checked})),!0),handleKeyDown(e,t){if("Backspace"!==t.key&&"ArrowLeft"!==t.key)return!1
const{state:n,dispatch:i}=e,{selection:s}=n,{$from:o}=s
if(!s.empty||2!==o.parentOffset||!c(o.parent)||!d(n.doc,o.pos))return!1
if("Backspace"===t.key){const e=l(o),t=o.start()
let s=n.tr.delete(t,t+2)
if(e){const t=s.mapping.map(o.before(e.listItemDepth)),n=s.doc.resolve(t)
n.nodeBefore?.type===r&&(s=s.join(t,2))}return i(s),!0}const a=o.before()
return a>0&&(i(n.tr.setSelection(s.constructor.near(n.doc.resolve(a),-1))),!0)}},appendTransaction(e,t,n){if(e.some(e=>1===e.steps.length&&0===e.steps[0].from&&e.steps[0].to===t.doc.content.size))return null
const o=n.tr
return((e,t,n)=>{const o=[]
s(t.doc,n.doc,(e,t)=>{if(!c(e)||!d(n.doc,t))return
const i=e.childCount>1?e.child(1):null
i?.isText&&" "===i.text?.[0]||o.push(t+1+e.firstChild.nodeSize)})
for(let t=o.length-1;t>=0;t--)e.insert(o[t],i.text(" "))})(o,t,n),h(o,e)??(e=>{const{doc:t,selection:n}=e,{$from:i}=n
if(!n.empty)return null
const s=i.parent
if(!c(s)||!d(t,i.pos))return null
const o=s.firstChild.nodeSize,r=s.childCount>1?s.child(1):null,a=r?.isText&&" "===r.text?.[0]?o+1:o
return i.parentOffset<a?(e.setSelection(n.constructor.near(t.resolve(i.start()+a))),e):null})(o)??(o.docChanged?o:null)}}),new e({props:{decorations(e){const i=[]
return e.doc.descendants((e,n,s)=>{e.type===r&&s?.type===a&&c(e.firstChild)&&i.push(t.node(n,n+e.nodeSize,{class:"has-checkbox"}))}),n.create(e.doc,i)}}})]},commands:({schema:e,pmSchemaList:t})=>{const n=e.nodes.check,i=e.nodes.bullet_list,s=e.nodes.ordered_list,o=e.nodes.list_item,r=e=>{const t=e.firstChild
return t?.isTextblock&&t.firstChild?.type===n},a=e=>{const{$from:t,$to:n}=e.selection
for(let e=t.depth;e>0;e--)if(t.node(e).type===o){const o=t.node(e-1)
if(o?.type===i||o?.type===s)return{listDepth:e-1,listItemDepth:e,listType:o.type,list:o,listStart:t.before(e-1),$from:t,$to:n}}return null},c=(e,t)=>{const{list:n,listStart:i,$from:s,$to:o}=e,r=s.pos===o.pos
n.forEach((e,n)=>{const a=i+1+n,c=a+e.nodeSize;(r?s.pos>=a&&s.pos<=c:!(c<=s.pos||a>=o.pos))&&t(e,a)})},l=e=>{if(!e||e.listType!==i)return!1
let t=!1
return c(e,e=>{r(e)&&(t=!0)}),t},d=(e,t)=>{const n=[]
c(t,(e,t)=>{if(r(e)){const i=e.firstChild,s=i.firstChild.nodeSize,o=i.childCount>1?i.child(1):null,r=o?.isText&&" "===o.text?.[0]
n.push({from:t+2,to:t+2+s+(r?1:0)})}})
let i=e.tr
for(let e=n.length-1;e>=0;e--)i=i.delete(n[e].from,n[e].to)
return i},h=(t,i)=>{const s=[]
c(i,(e,t)=>{!r(e)&&e.firstChild?.isTextblock&&s.push(t+2)})
let o=t.tr,a=0
for(const t of s){const i=n.create({checked:!1}),s=e.text(" ")
o=o.insert(t+a,[i,s]),a+=i.nodeSize+s.nodeSize}return o}
return{toggleBulletList:()=>(e,t)=>{const n=a(e)
return!!l(n)&&(t&&t(d(e,n)),!0)},toggleOrderedList:()=>(e,n,i)=>{const r=a(e)
if(!l(r))return!1
if(!n)return!0
const c=t?.liftListItem,h=t?.wrapInList
return!(!c||!h)&&(n(d(e,r)),i&&(c(o)(i.state,n),h(s)(i.state,n)),!0)},toggleChecklist:()=>(e,n,r)=>{const c=a(e),p=t?.wrapInList,u=t?.liftListItem
if(l(c))return n&&u?(n(d(e,c)),r&&u(o)(r.state,n),!0):!!u
if(c?.listType===i)return n&&n(h(e,c)),!0
if(c?.listType===s){if(!n||!u||!p)return!(!u||!p)
if(u(o)(e,n),r){p(i)(r.state,n)
const e=a(r.state)
e&&n(h(r.state,e))}return!0}if(!p)return!1
if(!n)return p(i)(e,void 0)
if(p(i)(e,n),r){const e=a(r.state)
e&&n(h(r.state,e))}return!0}}},state:({schema:e,utils:{inNode:t}},n)=>{const{$from:i}=n.selection
let s=!1
for(let t=i.depth;t>0;t--){const n=i.node(t)
if(n.type===e.nodes.list_item){if(i.node(t-1)?.type===e.nodes.bullet_list){const t=n.firstChild
s=t?.isTextblock&&t.firstChild?.type===e.nodes.check}break}}return{inCheckList:s,inBulletList:!s&&t(n,e.nodes.bullet_list)}}},d=/\bchecked\b/
function h(e){return d.test(e)}var p=Object.freeze({__proto__:null,default:l})
function u(e,t){return Date.parse(e)===Date.parse(t)}function f(e,t){return Date.parse(e)<Date.parse(t)}function g(e,t){e.classList.toggle("checked",t),e.classList.toggle("fa-square-o",!t),e.classList.toggle("fa-square-check-o",t),e.setAttribute("aria-checked",t.toString())}function k(e){const t=[]
let n=e.nextSibling
for(;n&&(n.nodeType!==Node.ELEMENT_NODE||!n.classList.contains("chcklst-box")&&!n.querySelector(".chcklst-box"));)t.push(n.textContent),n=n.nextSibling
return t.join("").replaceAll("​","").trim().slice(0,200)||a("checklist.item")}function m(e){return 3===e.nodeType&&e.nodeValue.match(/^\s*$/)}function b(e){e.forEach(e=>{let t=e.parentElement
"P"===t.nodeName&&t.parentElement.firstElementChild===t&&(t=t.parentElement),"LI"!==t.nodeName||"UL"!==t.parentElement.nodeName||function(e){let t=e.previousSibling
for(;t;){if(!m(t))return!0
t=t.previousSibling}return!1}(e)||(t.classList.add("has-checkbox"),e.classList.add("list-item-checkbox"),e.nextSibling||e.insertAdjacentHTML("afterend","&#8203;"))})}function w(e,t){const n=e.classList.contains("checked"),i=e.classList.contains("permanent")
e.classList.toggle("is-interactive",t&&!i),e.setAttribute("role","checkbox"),e.setAttribute("aria-checked",n.toString()),e.setAttribute("aria-label",k(e)),e.removeAttribute("aria-disabled"),e.removeAttribute("aria-readonly"),e.removeAttribute("tabindex"),i?e.setAttribute("aria-disabled","true"):t?e.setAttribute("tabindex","0"):e.setAttribute("aria-readonly","true")}function v(e,t,n){return e.dataset.chkSrc??`legacy:${t}:${n}`}function x(e,t,n){return{checkboxCount:e.dataset.chkSrc?void 0:n,checkboxSource:e.dataset.chkSrc,renderedIndex:t}}const y=new Map,_=Symbol("uncertain-checklist-baseline")
function M(e){if("string"!=typeof e)return
const t=(new DOMParser).parseFromString(e,"text/html")
return t.querySelectorAll(".chcklst-box:not(.permanent)").forEach(e=>{C(e)||e.classList.remove("checked","fa-square-o","fa-square-check-o")}),t.body.innerHTML}function S(e,t){const n=t.filter(e=>!e.classList.contains("permanent")),i=n.map(e=>e.dataset.chkSrc).filter(Boolean),s=n.some(e=>!e.dataset.chkSrc),o=e=>function(e,t,n){if("string"!=typeof e)return
if(n)return e.replace(/\[(?: |x)?\]/g,"[ ]")
const i=new Map
t.forEach(e=>{const[t,n]=e.split(":").map(Number)
i.has(t)||i.set(t,new Set),i.get(t).add(n)})
const s=e.split(/\r\n?|\n/)
let o=!0
return i.forEach((e,t)=>{if(void 0===s[t])return void(o=!1)
let n=-1
s[t]=s[t].replace(/\[[ xX]?\]/g,t=>(n+=1,e.has(n)?"[ ]":t)),[...e].some(e=>e>n)&&(o=!1)}),o?s.join("\n"):void 0}(e,i,s),r=o(e.raw),a=n.map(e=>e.dataset.chkSrc??"legacy").join("\0"),c=void 0===r?`${e.updated_at??"unknown"}\0${n.map(e=>`${e.dataset.chkSrc??"legacy"}:${k(e)}`).join("\0")}`:`${r}\0${a}`
return{baselineUpdatedAt:e.updated_at,coverage:a,cookedFingerprint:void 0===r?M(e.cooked):void 0,fingerprint:r,fingerprintFor:o,generation:c,invalid:!1}}function E(e,t){e.box?.classList.toggle("is-pending",t),t?e.box?.setAttribute("aria-busy","true"):e.box?.removeAttribute("aria-busy")}function A(e,t){const{control:n,token:i}=e
n.state?.token===i&&(n.state=void 0,n.box&&g(n.box,t),E(n,!1))}function L(e,t){const n=S(t,e),i=new AbortController,s=[]
return e.forEach((o,r)=>{if(o.classList.contains("permanent"))return
const a={box:o,key:v(o,r,e.length),rendering:n,state:void 0,target:x(o,r,e.length)}
s.push(a)
const c=e=>{if("keydown"===e.type&&" "!==e.key&&"Enter"!==e.key)return
if(e.preventDefault(),e.repeat||n.invalid)return
const i=!a.box.classList.contains("checked"),s=Symbol(),o=a.state?.confirmed??!i
a.state={confirmed:o,token:s},g(a.box,i),E(a,!0),function(e){const t=e.postModel.id
if(null==t)return void A({control:e.control,token:e.token},e.confirmed)
let n=y.get(t)
n||(n=new B(e.postModel),y.set(t,n)),n.enqueue(e)}({checked:i,confirmed:o,control:a,key:a.key,postModel:t,rendering:n,target:a.target,token:s})}
o.addEventListener("click",c,{signal:i.signal}),o.addEventListener("keydown",c,{signal:i.signal}),y.get(t.id)?.adopt(a)}),()=>{i.abort(),s.forEach(e=>{E(e,!1),e.box=void 0,e.state=void 0})}}class B{#e
#t
#n=new Map
#i=new Set
#s=new Map
#o
#r=0
#a
#c=!1
constructor(e){this.#o=e,this.#e=e[_]?void 0:e.raw,this.#t=e.updated_at}adopt(e){this.#l(e.rendering)
const t=this.#n.get(`${e.rendering.generation}\0${e.key}`)
if(!t)return
const n=Symbol()
e.state={confirmed:t.confirmed,token:n},g(e.box,t.checked),E(e,!0),t.presentations=t.presentations.filter(t=>t.control.box&&t.control!==e),t.presentations.push({control:e,token:n})}enqueue(e){this.#d(e.postModel),this.#l(e.rendering)
const t=`${e.rendering.generation}\0${e.key}`,n=this.#n.get(t),s=(n?.presentations??[]).filter(t=>t.control.box&&t.control!==e.control)
s.push({control:e.control,token:e.token})
const o=n?.confirmed??e.confirmed
if((!this.#c||this.#i.size>0&&!this.#i.has(t))&&e.checked===o)return this.#n.delete(t),s.forEach(e=>A(e,o)),void this.#h()
this.#n.set(t,{checked:e.checked,confirmed:o,fingerprint:n?.fingerprint??e.rendering.fingerprint,presentations:s,rendering:n?.rendering??e.rendering,revision:this.#r+=1,target:e.target}),this.#c||(this.#a=i(this,this.#p,150))}#u(e,t){this.#e=e,this.#t=t}#f(e){e.forEach(([e,t])=>{const n=this.#n.get(e)
n&&(n.checked===t.checked&&n.fingerprint===t.fingerprint?(this.#n.delete(e),n.presentations.forEach(e=>A(e,t.checked))):(n.confirmed=t.checked,n.presentations.forEach(e=>function(e,t){const{control:n,token:i}=e
n.state?.token===i&&(n.state.confirmed=t)}(e,t.checked))))})}#g(e){return e.filter(([e,t])=>this.#n.get(e)?.checked===t.checked)}#k(){const e=this.#n.values().next().value
return[...this.#n].filter(([,t])=>t.rendering.generation===e.rendering.generation).slice(0,50)}#m(e){e.forEach(([e,t])=>{const n=this.#n.get(e)
n?.revision===t.revision&&(this.#n.delete(e),n.presentations.forEach(e=>A(e,n.confirmed)))})}#b(e,t=!1){const n=[...this.#n].filter(([,t])=>t.rendering.generation===e)
t&&n.forEach(([,e])=>{e.rendering.invalid=!0,e.presentations.forEach(e=>{e.control.rendering.invalid=!0,e.control.box&&w(e.control.box,!1)})}),this.#m(n)}#w(e,t){return null!=this.#o.raw&&(f(t,this.#o.updated_at)||u(t,this.#o.updated_at)&&e!==this.#o.raw)?{raw:this.#o.raw,updatedAt:this.#o.updated_at}:{raw:e,updatedAt:t}}async#v(e){if(null!=this.#e&&e.every(([,e])=>void 0!==e.fingerprint))return!0
const i=e[0][1].rendering
try{const n=await t(`/posts/${this.#o.id}`,{timeout:3e4,ignoreUnsent:!1}),s=this.#o[_]?{raw:n.raw,updatedAt:n.updated_at}:this.#w(n.raw,n.updated_at),o=i.fingerprintFor(s.raw)
if(!e.every(([,e])=>u(e.rendering.baselineUpdatedAt,s.updatedAt)||void 0!==e.fingerprint&&e.rendering.fingerprintFor(s.raw)===e.fingerprint||void 0!==e.rendering.cookedFingerprint&&e.rendering.cookedFingerprint===M(n.cooked))||void 0===o)return this.#b(i.generation,!0),this.#x(!0),!1
const r=i.generation,a={fingerprint:o,generation:`${o}\0${i.coverage}`}
this.#s.set(r,a)
for(const[t,n]of[...this.#n]){if(n.rendering.generation!==r&&!t.startsWith(`${r}\0`))continue
this.#l(n.rendering),n.fingerprint=o,n.presentations.forEach(({control:e})=>this.#l(e.rendering))
const i=`${a.generation}${t.slice(r.length)}`,s=this.#n.get(i)
let c=n
if(s&&s!==n){const e=s.revision>n.revision?s:n
c={...e,presentations:[...s.presentations,...n.presentations].filter(({control:e,token:t})=>e.box&&e.state?.token===t)}}this.#n.delete(t),this.#n.set(i,c),e.forEach(e=>{e[0]===t&&(e[0]=i,e[1].fingerprint=o,s&&s!==n&&(e[1]=c))})}return this.#u(s.raw,s.updatedAt),delete this.#o[_],null==this.#o.raw&&(this.#o.raw=s.raw),!0}catch(e){return this.#o[_]=!0,this.#b(i.generation),n(e),!1}}#d(e){(null==this.#o.raw||f(this.#o.updated_at,e.updated_at)||Number.isFinite(e.version)&&Number.isFinite(this.#o.version)&&e.version>this.#o.version)&&(this.#o=e)}#x(e=!1){const t=this.#o.topic?.postStream?.refreshPost(this.#o.id)
t&&t.catch(e?n:()=>{})}#l(e){const t=this.#s.get(e.generation)
t&&Object.assign(e,t)}#h(){this.#c||this.#n.size>0||(this.#a&&(e(this.#a),this.#a=void 0),y.get(this.#o.id)===this&&y.delete(this.#o.id))}async#p(){if(this.#a=void 0,!this.#c){this.#c=!0
try{for(;this.#n.size>0;){let e=this.#k(),i=0
for(;(e=this.#g(e)).length>0&&await this.#v(e)&&(e=this.#g(e),0!==e.length);){null!=this.#o.raw&&f(this.#t,this.#o.updated_at)&&this.#u(this.#o.raw,this.#o.updated_at)
const o=e[0][1].rendering,r=e[0][1].fingerprint,a=o.fingerprintFor(this.#e),c=o.fingerprintFor(this.#o.raw)
if(void 0===r||void 0===a||r!==a||null!=this.#o.raw&&r!==c){this.#b(o.generation,!0),this.#x(!0)
break}const l=crypto.randomUUID(),{startExpiration:d,unregister:h}=s(l),p={post_id:this.#o.id,toggles:e.map(([,e])=>{const t={checkbox_index:e.target.renderedIndex,checkbox_source:e.target.checkboxSource,checked:e.checked}
return e.target.checkboxSource||(t.checkbox_count=e.target.checkboxCount),t}),expected_raw:this.#e,expected_updated_at:this.#t,mutation_id:l}
try{this.#i=new Set(e.map(([e])=>e))
const n=await t("/checklist/toggle",{type:"PUT",timeout:3e4,ignoreUnsent:!1,contentType:"application/json",data:JSON.stringify(p)}),s=Number.isFinite(n.version)&&Number.isFinite(this.#o.version)&&n.version<this.#o.version||f(n.updated_at,this.#o.updated_at)
if(n.revised?d():h(),s){if(n.raw===this.#o.raw){this.#f(e),this.#u(this.#o.raw,this.#o.updated_at)
break}const t=this.#w(n.raw,n.updated_at),s=i<2&&o.fingerprintFor(t.raw)===r
if(this.#u(t.raw,t.updatedAt),s){i+=1
continue}this.#m(e),this.#x()
break}if(o.fingerprintFor(this.#o.raw)!==r){this.#u(this.#o.raw,this.#o.updated_at),this.#b(o.generation,!0),this.#x()
break}this.#o.last_editor_id=n.last_editor_id,this.#o.updated_at=n.updated_at,this.#o.version=n.version,this.#o.raw=n.raw,this.#u(n.raw,n.updated_at),this.#f(e),this.#o.cooked=n.cooked
break}catch(t){h()
const s=t.jqXHR?.responseJSON,a=s?.raw&&s?.updated_at?this.#w(s.raw,s.updated_at):void 0
if(409===t.jqXHR?.status&&s?.retryable&&a&&i<2&&o.fingerprintFor(a.raw)===r){this.#u(a.raw,a.updatedAt),i+=1
continue}409===t.jqXHR?.status&&a&&o.fingerprintFor(a.raw)!==r?this.#b(o.generation,!0):this.#m(e),a?this.#u(a.raw,a.updatedAt):t.jqXHR&&0!==t.jqXHR.status?null!=this.#o.raw&&this.#u(this.#o.raw,this.#o.updated_at):(this.#e=void 0,this.#o[_]=!0),this.#x(),n(t)
break}finally{this.#i.clear()}}}}catch(e){this.#m([...this.#n]),n(e)}finally{this.#c=!1,this.#h()}}}}function C(e){return Boolean(e.closest("aside.quote[data-username], aside.quote[data-post], aside.quote[data-topic]"))}function T(e,t){const n=[...e.getElementsByClassName("chcklst-box")]
b(n)
const i=t?.getModel(),s=!0===i?.can_edit,o=n.filter(e=>!C(e)),r=new Set(o)
if(n.forEach(e=>w(e,s&&r.has(e))),s&&o.length>0)return L(o,i)}var $={name:"checklist",initialize(){(function(...e){const t="string"==typeof e[0]?2:1
e[t]={...e[t],[o]:c},r(...e)})(e=>function(e){e.container.lookup("service:site-settings").checklist_enabled&&(e.decorateCookedElement(T,{onlyStream:!0}),e.registerRichEditorExtension(l),e.addComposerToolbarPopupMenuOption({menu:"list",name:"list-checklist",icon:"list-check",label:"checklist.composer.checklist",showActiveIcon:!0,active:({state:e})=>e?.inCheckList,action:e=>{e.commands?.toggleChecklist?e.commands.toggleChecklist():e.applyList("- [ ] ","list_item")}}))}(e))}}
const D=/\bchcklst-box\b|\bdata-chk-src\b/i
function z(e,t){const n=e.src.slice(e.pos,e.pos+3),i=n.startsWith("[]")?"[]":n.match(/^\[[ xX]\]$/)?.[0]
if(!i)return!1
const s=e.pos
if(e.pos+=i.length,!t){const t=e.push("checklist_candidate","",0)
t.content=i,t.meta={checklistSourceOffset:s}}return!0}function F(e){switch(e){case"[x]":return"checked fa fa-square-check-o"
case"[X]":return"checked permanent fa fa-square-check"
default:return"fa fa-square-o"}}function j(e,t,n){const i=new Map
let s=t,o=0
for(const t of e.matchAll(/\[[ xX]?\]/g)){for(let n=o;n<t.index;n+=1)10===e.charCodeAt(n)&&(s+=1)
o=t.index+t[0].length
const r=n.get(s)??0
n.set(s,r+1),i.set(t.index,{line:s,nth:r,marker:t[0]})}return i}function q(e){if(function(e){const t=e=>{"html_inline"!==e.type&&"html_block"!==e.type||!D.test(e.content)||(e.type="text",e.tag="",e.nesting=0)}
for(const n of e.tokens)t(n),n.children?.forEach(t)}(e),!e.src.includes("["))return
const t=e.src.split("\n"),n=new Map,i=new Map
let s
const o=e=>{if(!e)return
let i=n.get(e.line)
return i||(i=[...(t[e.line]??"").matchAll(/\[[ xX]?\]/g)].map(e=>e[0]),n.set(e.line,i)),i[e.nth]===e.marker?e:void 0}
for(const t of e.tokens){if("tr_open"===t.type){s=t.map?.[0]
continue}if("tr_close"===t.type){s=void 0
continue}if("inline"!==t.type)continue
const n=t.map?.[0]??s,r=void 0===n?new Map:j(t.content,n,i),a=[]
let c=0
for(let i=0;i<t.children.length;i+=1){const s=t.children[i]
if("checklist_candidate"!==s.type){c+=s.nesting
continue}if(0!==c){const t=new e.Token("text","",0)
t.content=s.content,a.push({index:i,newTokens:[t]})
continue}const l=new e.Token("check_open","span",1)
if(l.attrs=[["class",`chcklst-box ${F(s.content)}`]],void 0!==n&&"[X]"!==s.content){const e=o(r.get(s.meta.checklistSourceOffset))
e&&l.attrs.push(["data-chk-src",`${e.line}:${e.nth}`])}a.push({index:i,newTokens:[l,new e.Token("check_close","span",-1)]})}for(let n=a.length-1;n>=0;n-=1)t.children=e.md.utils.arrayReplaceAt(t.children,a[n].index,a[n].newTokens)}}const N={"discourse/initializers/checklist":Object.freeze({__proto__:null,activeChecklistOperationCountForTesting:function(){return y.size},checklistSyntax:T,default:$}),"lib/discourse-markdown/checklist":Object.freeze({__proto__:null,setup:function(e){e.registerOptions((e,t)=>{e.features.checklist=!!t.checklist_enabled}),e.allowList(["span.chcklst-stroked","span.chcklst-box fa fa-square-o","span.chcklst-box checked fa fa-square-check-o","span.chcklst-box checked permanent fa fa-square-check","span[data-chk-src]"]),e.registerPlugin(e=>{e.inline.ruler.push("checklist_candidate",z),e.core.ruler.before("text_join","checklist",q)})}}),"lib/rich-editor-extension":p}
export{N as compatModules,N as default}

//# sourceMappingURL=../../map/plugins/checklist_main.Baa4Ik-mqwr7550.digested.js.map
