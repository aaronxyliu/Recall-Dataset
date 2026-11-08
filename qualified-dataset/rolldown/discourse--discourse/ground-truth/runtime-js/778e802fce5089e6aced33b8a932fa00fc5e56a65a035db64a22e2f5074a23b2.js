const{_INTERNAL_SOURCE_KEY:e,apiInitializer:t}=window.moduleBroker.lookup("discourse/lib/api",!1,["_INTERNAL_SOURCE_KEY","apiInitializer"]),{withPluginApi:o}=window.moduleBroker.lookup("discourse/lib/plugin-api",!1,["withPluginApi"]),{default:s}=window.moduleBroker.lookup("@glimmer/component",!1,["default"]),{cached:n,tracked:r}=window.moduleBroker.lookup("@glimmer/tracking",!1,["cached","tracked"]),{trustHTML:i}=window.moduleBroker.lookup("@ember/template",!1,["trustHTML"]),{bind:a}=window.moduleBroker.lookup("discourse/lib/decorators",!1,["bind"]),{default:l}=window.moduleBroker.lookup("discourse/ui-kit/helpers/d-icon",!1,["default"]),{i18n:d}=window.moduleBroker.lookup("discourse-i18n",!1,["i18n"]),{setComponentTemplate:u}=window.moduleBroker.lookup("@ember/component",!1,["setComponentTemplate"]),{createTemplateFactory:c}=window.moduleBroker.lookup("@ember/template-factory",!1,["createTemplateFactory"]),{registerModuleForModifyClass:p}=window.moduleBroker.lookup("discourse/lib/deferred-class-modifications",!1,["registerModuleForModifyClass"]),{default:w}=window.moduleBroker.lookup("@ember/component/template-only",!1,["default"]),{action:f}=window.moduleBroker.lookup("@ember/object",!1,["action"]),{default:m,service:h}=window.moduleBroker.lookup("@ember/service",!1,["default","service"]),{ajax:g}=window.moduleBroker.lookup("discourse/lib/ajax",!1,["ajax"]),{popupAjaxError:k}=window.moduleBroker.lookup("discourse/lib/ajax-error",!1,["popupAjaxError"]),{default:_}=window.moduleBroker.lookup("discourse/ui-kit/d-button",!1,["default"]),{next:y}=window.moduleBroker.lookup("@ember/runloop",!1,["next"]),{default:b}=window.moduleBroker.lookup("discourse/lib/later",!1,["default"]),{fn:v}=window.moduleBroker.lookup("@ember/helper",!1,["fn"]),{default:x}=window.moduleBroker.lookup("discourse/ui-kit/d-modal",!1,["default"]),{default:S}=window.moduleBroker.lookup("discourse/models/category",!1,["default"]),{REPLY:M,CREATE_TOPIC:C}=window.moduleBroker.lookup("discourse/models/composer",!1,["REPLY","CREATE_TOPIC"]),{waitForPromise:O}=window.moduleBroker.lookup("@ember/test-waiters",!1,["waitForPromise"])
var T=Object.freeze({__proto__:null,default:function(){this.route("workflows-form",{path:"/workflows/form/:uuid",bundleName:"workflows-form"}),this.route("workflows-form-test",{path:"/workflows/form-test/:token",bundleName:"workflows-form"})}})
const P=Object.freeze({type:"plugin",name:"discourse-workflows"})
function $(...t){const s="string"==typeof t[0]?2:1
return t[s]={...t[s],[e]:P},o(...t)}const j="discourse-workflows"
var N={name:"discourse-workflows-admin-plugin-configuration-nav",initialize(e){const t=e.lookup("service:current-user")
t?.admin&&$(e=>{e.addAdminPluginConfigurationNav(j,[{label:"discourse_workflows.title",route:"adminPlugins.show.discourse-workflows.index",currentWhen:"adminPlugins.show.discourse-workflows.index adminPlugins.show.discourse-workflows.new adminPlugins.show.discourse-workflows.show.index adminPlugins.show.discourse-workflows.show.node adminPlugins.show.discourse-workflows.show.executions.index adminPlugins.show.discourse-workflows.show.executions.show adminPlugins.show.discourse-workflows.show.settings"},{label:"discourse_workflows.variables.title",route:"adminPlugins.show.discourse-workflows-variables"},{label:"discourse_workflows.credentials.title",route:"adminPlugins.show.discourse-workflows-credentials"},{label:"discourse_workflows.data_tables.title",route:"adminPlugins.show.discourse-workflows-data-tables"},{label:"discourse_workflows.executions.title",route:"adminPlugins.show.discourse-workflows-executions"},{label:"discourse_workflows.templates.title",route:"adminPlugins.show.discourse-workflows-templates"}]),e.setAdminPluginIcon(j,"code-branch")})}},z=Object.freeze({__proto__:null,default:N})
const B=Object.freeze({type:"plugin",name:"discourse-workflows"})
function I(e){if("string"!=typeof e)return e
try{return JSON.parse(e)}catch{return null}}function E(e,t,o){return e[t]??e[o]}function A(e,t){const o=function(e,t){const o=new Set(e.map(e=>e.id)),s=new Map(e.map(e=>[e.id,[]]))
for(const e of t)o.has(e.from)&&o.has(e.to)&&s.get(e.from).push(e.to)
let n=0
const r=[],i=new Map,a=new Map,l=[],d=new Set,u=e=>{i.set(e,n),a.set(e,n),n++,l.push(e),d.add(e)
for(const t of s.get(e))i.has(t)?d.has(t)&&a.set(e,Math.min(a.get(e),i.get(t))):(u(t),a.set(e,Math.min(a.get(e),a.get(t))))
if(a.get(e)!==i.get(e))return
const t=[]
let o
do{o=l.pop(),d.delete(o),t.push(o)}while(o!==e)
r.push(t)}
for(const t of e)i.has(t.id)||u(t.id)
return r}(e,t),s=new Map
o.forEach((e,t)=>{e.forEach(e=>s.set(e,t))})
const n=new Map(o.map((e,t)=>[t,new Set])),r=new Map(o.map((e,t)=>[t,new Set]))
for(const e of t){const t=s.get(e.from),o=s.get(e.to)
void 0!==t&&void 0!==o&&t!==o&&(r.get(t).add(o),n.get(o).add(t))}const i=new Map,a=o.map((e,t)=>t).filter(e=>0===n.get(e).size)
for(;a.length;){const e=a.shift(),t=i.get(e)??0
for(const o of r.get(e))i.set(o,Math.max(i.get(o)??0,t+1)),n.get(o).delete(e),0===n.get(o).size&&a.push(o)}return{columns:new Map(e.map(e=>[e.id,i.get(s.get(e.id))??0])),hasCycle:o.some(e=>e.length>1)||t.some(e=>e.from===e.to)}}function L(e){if(!e||"undefined"==typeof DOMParser)return null
const t=(new DOMParser).parseFromString(e,"text/html").querySelector("pre code")
if(!t)return null
try{const e=JSON.parse(t.textContent)
if("discourse_admin_assistant_workflow_preview_v1"!==e?.kind)return null
const o=e.configuration
if(!o||"string"!=typeof o.name||!Array.isArray(o.operations))return null
const s={name:o.name,configuration:o,shortened:!0===e.shortened}
if(o.operations.length>200)return{...s,unavailable:!0}
const n=function(e){const t=[],o=new Map
let s=0,n=[]
const r=e=>o.get(String(e))
for(const i of e){const e=I(i)
if(!e||"object"!=typeof e)return null
switch(e.op){case"create_ai_agent":case"update_node_parameters":break
case"add_node":{const n=e.node
if(!n||"object"!=typeof n||!n.name||!n.type)return null
const r="node-"+s++,i={id:r,name:String(n.name),type:String(n.type)}
t.push(i),o.set(String(e.client_id??r),i),n.id&&o.set(String(n.id),i)
break}case"rename_node":{const t=r(E(e,"node_id","client_id"))
if(!t||!e.name)return null
t.name=String(e.name)
break}case"remove_node":{const s=r(E(e,"node_id","client_id"))
if(!s)return null
t.splice(t.indexOf(s),1)
for(const[e,t]of o)t===s&&o.delete(e)
n=n.filter(e=>e.from!==s.id&&e.to!==s.id)
break}case"add_connection":{const t=r(E(e,"from","from_node_id")),o=r(E(e,"to","to_node_id"))
if(!t||!o)return null
n.push({from:t.id,to:o.id,connectionType:String(e.connection_type??"main"),outputIndex:Number(e.output_index??0),inputIndex:Number(e.input_index??0)})
break}case"remove_connection":{const t=r(E(e,"from","from_node_id")),o=r(E(e,"to","to_node_id"))
if(!t||!o)return null
n=n.filter(s=>s.from!==t.id||s.to!==o.id||void 0!==e.output_index&&s.outputIndex!==Number(e.output_index)||void 0!==e.input_index&&s.inputIndex!==Number(e.input_index))
break}default:return null}}return t.length?{nodes:t,connections:n}:null}(o.operations)
return n?n.nodes.length>24||n.connections.length>48?{...s,nodeCount:n.nodes.length,unavailable:!0}:{...s,...n}:{...s,unavailable:!0}}catch{return null}}function V(e){return e.startsWith("trigger:")?"bolt":e.includes("condition")||e.includes("branch")?"code-branch":"gear"}function W(e){return e.connectionType&&"main"!==e.connectionType?e.connectionType:e.branchNumber?d("discourse_workflows.admin_assistant.preview.branch",{number:e.branchNumber}):null}class F extends s{get preview(){const e=this.args.message?.blocks?.some(e=>"confirmation"===e.type)
return e?L(this.args.message?.cooked):null}static{dt7948.n(this.prototype,"preview",[n])}get layout(){return this.preview?.nodes?function(e){const t=176,o=96,{columns:s,hasCycle:n}=A(e.nodes,e.connections),r=new Map
for(const t of e.nodes){const e=s.get(t.id),o=r.get(e)??[]
o.push(t),r.set(e,o)}const i=e.nodes.map(e=>{const t=s.get(e.id),o=r.get(t).indexOf(e)
return{...e,x:20+208*t,y:20+124*o}}),a=new Map(i.map(e=>[e.id,e])),l=Math.max(...s.values()),d=Math.max(...[...r.values()].map(e=>e.length)),u=40+(l+1)*t+32*l,c=40+d*o+28*(d-1)
return{connections:e.connections.map((o,s)=>{const n=new Set(e.connections.filter(e=>e.from===o.from).map(e=>e.outputIndex)).size>1?o.outputIndex+1:null,r=a.get(o.from),i=a.get(o.to),l=r.x+t,d=r.y+48,u=i.x,c=i.y+48
let p,w=(l+u)/2,f=(d+c)/2-8
if(u>l){const e=Math.max(28,(u-l)/2)
p=`M ${l} ${d} C ${l+e} ${d}, ${u-e} ${c}, ${u} ${c}`}else{const e=22+s%4*8,t=Math.max(d,c)+48+e
w=(l+u)/2,f=t-6,p=`M ${l} ${d} C ${l+e} ${d}, ${l+e} ${t}, ${l} ${t} L ${u-e} ${t} C ${u-2*e} ${t}, ${u-2*e} ${c}, ${u} ${c}`}return{...o,branchNumber:n,labelX:w,labelY:f,path:p}}),hasCycle:n,height:c,nodes:i,nodeHeight:o,nodeWidth:t,width:u}}(this.preview):null}static{dt7948.n(this.prototype,"layout",[n])}get hasFailedScripts(){const e=this.preview?.configuration?.script_validations
return Array.isArray(e)&&e.some(e=>!1===e?.valid)}get exactConfiguration(){return JSON.stringify(this.preview.configuration,null,2)}get markerId(){return`assistant-workflow-preview-arrow-${this.args.message?.id??"draft"}`}get markerUrl(){return`url(#${this.markerId})`}get viewportStyle(){return i(`width: ${this.layout.width}px; height: ${this.layout.height}px;`)}nodeConnections(e){return this.layout.connections.filter(t=>t.from===e.id).map(e=>{const t=this.preview.nodes.find(t=>t.id===e.to)
return t?W(e)?`${W(e)}: ${t.name}`:t.name:null}).filter(Boolean).join(", ")}static{dt7948.n(this.prototype,"nodeConnections",[a])}nodeStyle(e){return i(`left: ${e.x}px; top: ${e.y}px; width: ${this.layout.nodeWidth}px; height: ${this.layout.nodeHeight}px;`)}static{dt7948.n(this.prototype,"nodeStyle",[a])}static{u(c({id:null,block:'[[[41,[30,0,["preview"]],[[[1,"  "],[10,"section"],[15,"aria-label",[28,[32,0],["discourse_workflows.admin_assistant.preview.label"],null]],[14,0,"assistant-workflow-preview"],[12],[1,"\\n    "],[10,"header"],[14,0,"assistant-workflow-preview__header"],[12],[1,"\\n      "],[10,1],[14,0,"assistant-workflow-preview__heading"],[12],[1,"\\n        "],[1,[28,[32,1],["code-branch"],null]],[1,"\\n        "],[10,1],[12],[1,[30,0,["preview","name"]]],[13],[1,"\\n      "],[13],[1,"\\n      "],[10,1],[14,0,"assistant-workflow-preview__badge"],[12],[1,"\\n        "],[1,[28,[32,0],["discourse_workflows.admin_assistant.preview.read_only"],null]],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n\\n"],[41,[30,0,["hasFailedScripts"]],[[[1,"      "],[10,2],[14,0,"assistant-workflow-preview__warning"],[14,"role","status"],[12],[1,"\\n        "],[1,[28,[32,0],["discourse_workflows.admin_assistant.preview.script_validation_warning"],null]],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["preview","shortened"]],[[[1,"      "],[10,2],[14,0,"assistant-workflow-preview__notice"],[12],[1,"\\n        "],[1,[28,[32,0],["discourse_workflows.admin_assistant.preview.shortened"],null]],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["layout"]],[[[1,"      "],[10,0],[14,0,"assistant-workflow-preview__scroller"],[14,"tabindex","0"],[12],[1,"\\n        "],[10,0],[14,0,"assistant-workflow-preview__viewport"],[15,5,[30,0,["viewportStyle"]]],[12],[1,"\\n          "],[10,"svg"],[14,"aria-hidden","true"],[14,0,"assistant-workflow-preview__connections"],[15,"height",[30,0,["layout","height"]]],[15,"viewBox",[29,["0 0 ",[30,0,["layout","width"]]," ",[30,0,["layout","height"]]]]],[15,"width",[30,0,["layout","width"]]],[12],[1,"\\n            "],[10,"defs"],[12],[1,"\\n              "],[10,"marker"],[15,1,[30,0,["markerId"]]],[14,"markerHeight","7"],[14,"markerWidth","7"],[14,"orient","auto"],[14,"refX","6"],[14,"refY","3.5"],[12],[1,"\\n                "],[10,"path"],[14,"d","M 0 0 L 7 3.5 L 0 7 z"],[12],[13],[1,"\\n              "],[13],[1,"\\n            "],[13],[1,"\\n"],[42,[28,[31,2],[[28,[31,2],[[30,0,["layout","connections"]]],null]],null],null,[[[1,"              "],[10,"path"],[14,0,"assistant-workflow-preview__connection"],[15,"d",[30,1,["path"]]],[15,"marker-end",[30,0,["markerUrl"]]],[12],[13],[1,"\\n"],[41,[28,[32,2],[[30,1]],null],[[[1,"                "],[10,"text"],[14,0,"assistant-workflow-preview__connection-label"],[15,"data-connection-type",[30,1,["connectionType"]]],[15,"data-output-index",[30,1,["outputIndex"]]],[15,"x",[30,1,["labelX"]]],[15,"y",[30,1,["labelY"]]],[12],[1,[28,[32,2],[[30,1]],null]],[13],[1,"\\n"]],[]],null]],[1]],null],[1,"          "],[13],[1,"\\n\\n"],[42,[28,[31,2],[[28,[31,2],[[30,0,["layout","nodes"]]],null]],null],null,[[[1,"            "],[10,"article"],[14,0,"assistant-workflow-preview__node"],[15,"data-node-type",[30,2,["type"]]],[15,5,[28,[30,0,["nodeStyle"]],[[30,2]],null]],[12],[1,"\\n              "],[10,1],[14,0,"assistant-workflow-preview__node-icon"],[12],[1,"\\n                "],[1,[28,[32,1],[[28,[32,3],[[30,2,["type"]]],null]],null]],[1,"\\n              "],[13],[1,"\\n              "],[10,1],[14,0,"assistant-workflow-preview__node-copy"],[12],[1,"\\n                "],[10,"strong"],[15,"title",[30,2,["name"]]],[12],[1,[30,2,["name"]]],[13],[1,"\\n                "],[10,"small"],[12],[1,[30,2,["type"]]],[13],[1,"\\n"],[41,[28,[30,0,["nodeConnections"]],[[30,2]],null],[[[1,"                  "],[10,1],[14,0,"sr-only"],[12],[1,"\\n                    "],[1,[28,[32,0],["discourse_workflows.admin_assistant.preview.connects_to"],[["nodes"],[[28,[30,0,["nodeConnections"]],[[30,2]],null]]]]],[1,"\\n                  "],[13],[1,"\\n"]],[]],null],[1,"              "],[13],[1,"\\n            "],[13],[1,"\\n"]],[2]],null],[1,"        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],[[[1,"      "],[10,2],[14,0,"assistant-workflow-preview__fallback"],[12],[1,"\\n        "],[1,[28,[32,0],["discourse_workflows.admin_assistant.preview.unavailable"],null]],[1,"\\n      "],[13],[1,"\\n"]],[]]],[1,"    "],[10,"details"],[14,0,"assistant-workflow-preview__details"],[12],[1,"\\n      "],[10,"summary"],[14,0,"assistant-workflow-preview__footer"],[12],[1,"\\n"],[41,[30,0,["layout"]],[[[1,"          "],[10,1],[14,0,"assistant-workflow-preview__counts"],[12],[1,"\\n            "],[1,[28,[32,0],["discourse_workflows.admin_assistant.preview.node_count"],[["count"],[[30,0,["preview","nodes","length"]]]]]],[1,"\\n            ·\\n            "],[1,[28,[32,0],["discourse_workflows.admin_assistant.preview.connection_count"],[["count"],[[30,0,["preview","connections","length"]]]]]],[1,"\\n"],[41,[30,0,["layout","hasCycle"]],[[[1,"              "],[10,1],[12],[1,"\\n                "],[1,[28,[32,1],["arrow-rotate-right"],null]],[1,"\\n                "],[1,[28,[32,0],["discourse_workflows.admin_assistant.preview.cycle"],null]],[1,"\\n              "],[13],[1,"\\n"]],[]],null],[1,"          "],[13],[1,"\\n"]],[]],null],[1,"        "],[10,1],[14,0,"assistant-workflow-preview__details-label"],[12],[1,"\\n          "],[1,[28,[32,1],["caret-right"],null]],[1,"\\n"],[41,[30,0,["preview","shortened"]],[[[1,"            "],[1,[28,[32,0],["discourse_workflows.admin_assistant.preview.shortened_configuration"],null]],[1,"\\n"]],[]],[[[1,"            "],[1,[28,[32,0],["discourse_workflows.admin_assistant.preview.exact_configuration"],null]],[1,"\\n"]],[]]],[1,"        "],[13],[1,"\\n      "],[13],[1,"\\n      "],[10,"pre"],[12],[10,"code"],[12],[1,[30,0,["exactConfiguration"]]],[13],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],["connection","node"],["if","each","-track-array"]]',moduleName:"(unknown template module)",scope:()=>({i18n:d,dIcon:l,connectionLabel:W,nodeIcon:V}),isStrictMode:!0}),this)}}function D(e,t,o){if(!t.renderGlimmer||!o?.blocks?.some(e=>"confirmation"===e.type)||!L(e.innerHTML))return
const s=e.querySelector("pre code.lang-admin-assistant-workflow"),n=(new DOMParser).parseFromString(o.cooked??"","text/html").querySelector("pre code.lang-admin-assistant-workflow")
if(!s||!n||s.textContent!==n.textContent)return
const r=e.ownerDocument.createElement("div")
s.closest("pre").replaceWith(r),t.renderGlimmer(r,u(c({id:null,block:'[[[8,[32,0],null,[["@message"],[[32,1]]],null]],[],[]]',moduleName:"(unknown template module)",scope:()=>({AdminAssistantWorkflowPreview:F,message:o}),isStrictMode:!0}),w()))}p("admin-assistant/workflow-preview",F)
var R=function(...o){const s="string"==typeof o[0]?2:1
return o[s]={...o[s],[e]:B},t(...o)}(e=>{e.decorateChatMessage?.(D)}),H=Object.freeze({__proto__:null,decorateWorkflowPreview:D,default:R})
const U={read:"read",like:"like",copy_link:"copyLink",flag:"flag",edit:"edit",bookmark:"bookmark",delete:"delete",admin:"admin",reply:"reply"}
function q(e){const t=`post-action-menu__workflow-post-button workflow-post-button-${e.workflow_id}`
class o extends s{static{dt7948.g(this.prototype,"dialog",[h])}#e=void dt7948.i(this,"dialog")
static{dt7948.g(this.prototype,"triggering",[r],function(){return!1})}#t=void dt7948.i(this,"triggering")
trigger(){if(!e.confirmation)return this.triggerWorkflow()
this.dialog.yesNoConfirm({message:e.confirmation_message||d("discourse_workflows.post_button.confirmation_default_message"),didConfirm:()=>this.triggerWorkflow()})}static{dt7948.n(this.prototype,"trigger",[f])}async triggerWorkflow(){this.triggering=!0
try{await g("/discourse-workflows/trigger-post-button",{type:"POST",data:{workflow_id:e.workflow_id,trigger_node_id:e.trigger_node_id,post_id:this.args.post.id}})}catch(e){k(e)}finally{this.triggering=!1}}static{u(c({id:null,block:'[[[8,[32,0],[[16,0,[32,1]],[17,1]],[["@action","@disabled","@icon","@translatedLabel","@translatedTitle"],[[30,0,["trigger"]],[30,0,["triggering"]],[52,[32,2,["icon"]],[32,2,["icon"]],"bolt"],[52,[30,2],[32,2,["label"]]],[32,2,["label"]]]],null]],["&attrs","@showLabel"],["if"]]',moduleName:"(unknown template module)",scope:()=>({DButton:_,className:t,workflow:e}),isStrictMode:!0}),this)}}return"more_menu"===e.position&&(o.hidden=!0),o}var K={name:"discourse-workflows-post-button",initialize(e){const t=e.lookup("service:site").post_button_workflows||[]
if(!t.length)return
const o=(e.lookup("service:site-settings").post_menu||"").split("|").filter(Boolean),s=t.map(e=>({key:`workflow-post-button-${e.workflow_id}-${e.trigger_node_id}`,workflow:e,component:q(e)}))
$(e=>{e.registerValueTransformer("post-menu-buttons",({value:e,context:t})=>{s.forEach(({key:s,workflow:n,component:r})=>{null!=n.post_number&&n.post_number!==t.post.post_number||e.add(s,r,function(e,t,o){const s=e.position
if("first"===s)return{before:t.firstButtonKey}
if("more_menu"===s)return{before:t.lastHiddenButtonKey,after:t.secondLastHiddenButtonKey}
const n=s?.match(/^(before|after)_(.+)$/)
if(n){const e=U[n[2]]
if(!e)return{[n[1]]:n[2]}
const s=o.indexOf(e)
if(-1===s)return{[n[1]]:e}
if("before"===n[1]){const t=o[s-1]
return t?{before:e,after:t}:{before:e}}return{after:e,before:o[s+1]||t.buttonKeys.SHOW_MORE}}}(n,t,o))})})})}},Y=Object.freeze({__proto__:null,default:K}),J={name:"discourse-workflows-topic-admin-button",initialize(e){const t=e.lookup("service:site").topic_admin_button_workflows||[]
t.length&&$(e=>{t.forEach(t=>{e.addTopicAdminMenuButton(e=>({icon:t.icon,translatedLabel:t.label,className:`workflow-topic-admin-btn-${t.workflow_id}`,section:{id:"discourse-workflows",label:"discourse_workflows.title"},action:()=>{g("/discourse-workflows/trigger-topic-admin-button",{type:"POST",data:{trigger_node_id:t.trigger_node_id,topic_id:e.id}}).catch(k)}}))})})}},X=Object.freeze({__proto__:null,default:J}),G={initialize(){$(e=>{e.registerValueTransformer("route-to-url",({value:e})=>e?.includes("/workflows/webhooks/")||e?.includes("/workflows/waiting/")?(window.location.href=e,""):e)})}},Q=Object.freeze({__proto__:null,default:G})
const Z="workflowsSessionId"
var ee=Object.freeze({__proto__:null,SESSION_ID_FIELD:Z,default:class extends m{#o=new WeakMap
idFor(e){let t=this.#o.get(e)
return t&&e.get(Z)===t||(t=crypto.randomUUID(),this.#o.set(e,t),e.set(Z,t)),t}}}),te={name:"discourse-workflows-composer-message",initialize(e){const t=e.lookup("service:current-user"),o=t?.discourse_workflows_composer_message_last_id
if(null==o)return
const s=e.lookup("service:composer"),n=e.lookup("service:app-events"),r=e.lookup("service:workflows-composer-session")
$(e=>e.serializeToDraft(Z)),n.on("composer:open",({model:e})=>{e&&r.idFor(e)}),e.lookup("service:message-bus").subscribe(`/discourse-workflows/composer-message/${t.id}`,e=>{const t=s.model
"show_composer_message"===e?.type&&t?.viewOpenOrFullscreen&&t.draftKey===e.draft_key&&r.idFor(t)===e.session_id&&n.trigger("composer-messages:create",{extraClass:"workflows-composer-message",templateName:"education",title:e.title,body:e.body})},o)}},oe=Object.freeze({__proto__:null,default:te}),se={name:"discourse-workflows-composer-paused",initialize(e){const t=e.lookup("service:site")
if(!t.composer_paused_workflows?.length)return
const o=e.lookup("service:workflows-composer-paused")
e.lookup("service:app-events").on("composer:typing-paused",o,o.typingPaused)}},ne=Object.freeze({__proto__:null,default:se})
const re={primary:"btn-primary",danger:"btn-danger",default:"btn-default"}
class ie extends s{static{dt7948.g(this.prototype,"submitting",[r],function(){return!1})}#s=void dt7948.i(this,"submitting")
get buttons(){return(this.args.model.buttons||[]).map(e=>({...e,styleClass:re[e.style]||re.default}))}async respond(e){if(!this.submitting){this.submitting=!0
try{await g("/discourse-workflows/modal-responses",{type:"POST",data:{action_id:e.action_id,modal_id:this.args.model.modal_id}})}catch(e){return k(e),void(this.submitting=!1)}this.isDestroying||this.args.closeModal()}}static{dt7948.n(this.prototype,"respond",[f])}propagateDismissal(){this.args.model.modal_id&&!this.submitting&&g("/discourse-workflows/modal-dismissals",{type:"POST",data:{modal_id:this.args.model.modal_id}}).catch(()=>{})}static{dt7948.n(this.prototype,"propagateDismissal",[f])}static{u(c({id:null,block:'[[[8,[32,0],[[24,0,"workflows-user-modal"]],[["@beforeClose","@closeModal","@title"],[[30,0,["propagateDismissal"]],[30,1],[30,2,["title"]]]],[["body","footer"],[[[[1,"\\n"],[41,[30,2,["body"]],[[[1,"      "],[10,2],[14,0,"workflows-user-modal__body"],[12],[1,[30,2,["body"]]],[13],[1,"\\n"]],[]],null],[1,"  "]],[]],[[[1,"\\n"],[42,[28,[31,2],[[28,[31,2],[[30,0,["buttons"]]],null]],null],null,[[[1,"      "],[8,[32,1],[[16,0,[30,3,["styleClass"]]]],[["@action","@disabled","@translatedLabel"],[[28,[32,2],[[30,0,["respond"]],[30,3]],null],[30,0,["submitting"]],[30,3,["label"]]]],null],[1,"\\n"]],[3]],null],[1,"  "]],[]]]]]],["@closeModal","@model","button"],["if","each","-track-array"]]',moduleName:"(unknown template module)",scope:()=>({DModal:x,DButton:_,fn:v}),isStrictMode:!0}),this)}}p("workflows-user-modal",ie)
var ae={name:"discourse-workflows-user-modal",initialize(e){const t=e.lookup("service:current-user")
if(!t)return
const o=t.discourse_workflows_user_modal_last_id
if(null==o)return
const s=e.lookup("service:message-bus"),n=e.lookup("service:modal"),r=`/discourse-workflows/user-modal/${t.id}`
let i=null
const a=e=>{const t=n.activeModal
return t?.component===ie&&t.opts?.model?.modal_id===e&&(n.close(),!0)}
s.subscribe(r,e=>{"show_modal"===e?.type?(i=e,y(()=>{i===e&&(i=null,n.show(ie,{model:e}))})):"close_modal"===e?.type&&e.modal_id&&(i?.modal_id===e.modal_id?i=null:a(e.modal_id)||b(()=>a(e.modal_id),1500))},o)}},le=Object.freeze({__proto__:null,default:ae}),de={before:"freeze-valid-transformers",initialize(){$(e=>{e.addValueTransformerName("workflow-node-defaults"),e.addValueTransformerName("workflow-node-icons"),e.addValueTransformerName("workflow-field-control")})}},ue=Object.freeze({__proto__:null,default:de})
class ce{#n=!1
#r=0
#i=Promise.resolve()
#a=new Map
#l
#d=null
constructor({timeoutMs:e=1e3}={}){this.#l=e}match(e,t){const o=this.#i.then(()=>this.#u(e,t.filter(e=>!this.#c(e))))
return this.#i=o.catch(()=>{}),O(o)}destroy(){this.#n=!0,this.#p()}#c(e){return(this.#a.get(e)??0)>=2}async#u(e,t){if(!t.length||this.#n)return new Set
const{matched:o,slowIndex:s}=await this.#w(e,t)
if(null===s)return o
const n=t[s]
this.#a.set(n,(this.#a.get(n)??0)+1),this.#p()
const r=await this.#u(e,t.slice(s+1))
return new Set([...o,...r])}#p(){this.#d?.terminate(),this.#d=null}#w(e,t){try{this.#d??=function(){const e=URL.createObjectURL(new Blob(['\nconst regexps = new Map();\n\nonmessage = ({ data: { id, text, sources } }) => {\n  sources.forEach((source, index) => {\n    if (!regexps.has(source)) {\n      try {\n        regexps.set(source, new RegExp(source, "iu"));\n      } catch {\n        regexps.set(source, null);\n      }\n    }\n\n    postMessage({ id, index, matched: !!regexps.get(source)?.test(text) });\n  });\n};\n'],{type:"text/javascript"}))
try{return new Worker(e)}finally{URL.revokeObjectURL(e)}}()}catch{return Promise.resolve({matched:new Set,slowIndex:null})}const o=this.#d,s=++this.#r,n=new Set
let r,i=0
return new Promise(a=>{const l=e=>{clearTimeout(r),o.removeEventListener("message",u),o.removeEventListener("error",c),a({matched:n,slowIndex:e})},d=()=>{clearTimeout(r),r=setTimeout(()=>l(i),this.#l)},u=({data:e})=>{e.id===s&&(e.matched&&n.add(t[e.index]),i=e.index+1,i===t.length?l(null):d())},c=()=>{this.#p(),l(null)}
o.addEventListener("message",u),o.addEventListener("error",c),d(),o.postMessage({id:s,text:e,sources:t})})}}const pe=/\[quote(?:=[^\]]{0,300})?\]|\[\/quote\]/gi,we=/^[ \t]*>.*$/gm,fe="\x3c!--",me={[C]:"create_topic",[M]:"reply"}
function he({title:e,reply:t}){return[e,function(e){const t=[],o=[]
let s=0
for(const n of e.matchAll(pe)){const r=n[0]
t.push(e.slice(s,n.index)),s=n.index+r.length,r.startsWith("[/")?o.length?t.length=o.pop():t.push(r):(o.push(t.length),t.push(r))}return t.push(e.slice(s)),t.join("")}(function(e){const t=[]
let o,s=0
for(;-1!==(o=e.indexOf(fe,s));){const n=e.indexOf("--\x3e",o+4)
if(-1===n)break
t.push(e.slice(s,o)),s=n+3}return t.push(e.slice(s)),t.join("")}(t||"")).replace(we,"")].filter(Boolean).join("\n")}function ge(e){const t=me[e?.action]
if(t&&e.viewOpenOrFullscreen&&!e.privateMessage&&!e.loading)return t}class ke extends m{static{dt7948.g(this.prototype,"site",[h])}#f=void dt7948.i(this,"site")
static{dt7948.g(this.prototype,"siteSettings",[h])}#m=void dt7948.i(this,"siteSettings")
static{dt7948.g(this.prototype,"workflowsComposerSession",[h])}#h=void dt7948.i(this,"workflowsComposerSession")
#g=!1
#k=new ce
#_=null
#y=0
#b=new WeakMap
#v=this.site.composer_paused_workflows||[]
willDestroy(){super.willDestroy(...arguments),this.#k.destroy()}async typingPaused(e){if(this.#_=e,!this.#g){this.#g=!0
try{for(;this.#_;){const e=this.#_
this.#_=null,await this.#x(e)}}finally{this.#g=!1}}}async#x(e){const t=ge(e)
if(!t||Date.now()<this.#y)return
const o={title:e.title?.slice(0,this.siteSettings.max_topic_title_length),reply:e.reply?.slice(0,this.siteSettings.max_post_length)},s=he(o),n=e.topic?.category_id??e.categoryId,r=this.workflowsComposerSession.idFor(e),i=this.#v.filter(e=>e.composer_actions.includes(t)&&function(e,t){if(!e.category_ids.length)return!0
let o=S.findById(t)
if(!o)return!!t
if(!e.include_subcategories)return e.category_ids.includes(o.id)
for(;o;){if(e.category_ids.includes(o.id))return!0
o=o.parentCategory}return!1}(e,n)).map(t=>({trigger:t,state:this.#S(e,t)})),a=new Set(i.flatMap(({trigger:e,state:t})=>e.patterns.filter(e=>!t.matched.has(e)))),l=await this.#k.match(s,[...a])
if(ge(e)!==t||this.workflowsComposerSession.idFor(e)!==r)return
const d=Date.now(),u=[],c=[]
for(const{trigger:e,state:t}of i){if(!e.patterns.length){c.push(t)
continue}const o=e.patterns.filter(e=>l.has(e)&&!t.matched.has(e))
o.length&&u.push({state:t,sources:o})}const p=c.some(e=>s!==e.text&&d-e.firedAt>=15e3)
if(u.length||p)try{await this.#M(e,o,t),u.forEach(({state:e,sources:t})=>t.forEach(t=>e.matched.add(t))),c.forEach(e=>{e.text=s,e.firedAt=d})}catch(e){this.#y=Date.now()+function(e){const t=e?.jqXHR?.responseJSON?.extras?.wait_seconds
return t?1e3*t:15e3}(e)}}#S(e,t){const o=this.workflowsComposerSession.idFor(e)
let s=this.#b.get(e)
s?.id!==o&&(s={id:o,states:new Map},this.#b.set(e,s))
const n=`${t.workflow_id}:${t.trigger_node_id}`
return s.states.has(n)||s.states.set(n,{matched:new Set,text:null,firedAt:-1/0}),s.states.get(n)}#M(e,t,o){return g("/discourse-workflows/trigger-composer-paused",{type:"POST",data:{draft_key:e.draftKey,session_id:this.workflowsComposerSession.idFor(e),composer_action:o,title:t.title,raw:t.reply,category_id:e.categoryId,topic_id:e.topic?.id,reply_to_post_number:e.post?.post_number}})}}var _e=Object.freeze({__proto__:null,default:ke,ownText:he})
function ye(e){return Array.isArray(e)?e.map(ye):e&&"object"==typeof e?Object.keys(e).sort().reduce((t,o)=>(t[o]=ye(e[o]),t),{}):e}function be(e){return Object.fromEntries(Object.entries(e).filter(([,e])=>void 0!==e))}function ve(e,t,o){return be({id:e?.clientId||e?.id,name:e?.name,type:e?.type||t,typeVersion:e?.typeVersion||o})}class xe extends m{static{dt7948.g(this.prototype,"nodeTypes",[r],function(){return null})}#C=void dt7948.i(this,"nodeTypes")
static{dt7948.g(this.prototype,"credentialTypes",[r],function(){return null})}#O=void dt7948.i(this,"credentialTypes")
static{dt7948.g(this.prototype,"expressionContext",[r],function(){return{}})}#T=void dt7948.i(this,"expressionContext")
static{dt7948.g(this.prototype,"workflowVars",[r],function(){return null})}#P=void dt7948.i(this,"workflowVars")
nodeTypeMap=new Map
_nodeParameterOptionsCache=new Map
async load(){if(this.nodeTypes)return this.nodeTypes
try{const e=await g("/admin/plugins/discourse-workflows/node-types.json")
return this.nodeTypes=e.node_types||[],this.credentialTypes=e.credential_types||[],this.expressionContext=e.expression_context||{},this.nodeTypeMap=new Map(this.nodeTypes.flatMap(e=>[[e.name,e],[e.identifier,e]])),this.nodeTypes}catch(e){return k(e),[]}}findNodeType(e){return this.nodeTypeMap.get(e)||null}async loadNodeParameterOptions(e,t,o=null,s={}){const n=this.buildNodeParameterOptionsPayload({identifier:e,methodName:t,typeVersion:o,...s}),r=(i={identifier:e,typeVersion:o||"latest",methodName:t,payload:n},JSON.stringify(ye(i)))
var i
if(this._nodeParameterOptionsCache.has(r))return this._nodeParameterOptionsCache.get(r)
try{const e=await g("/admin/plugins/discourse-workflows/dynamic-node-parameters/options.json",{type:"POST",contentType:"application/json",data:JSON.stringify(n)})||[]
return this._nodeParameterOptionsCache.set(r,e),e}catch(e){return k(e),[]}}buildNodeParameterOptionsPayload({identifier:e,methodName:t,typeVersion:o=null,path:s=null,currentNodeParameters:n=null,credentials:r=null,node:i=null,filter:a=null,workflowId:l,inputContext:d,executionContext:u}={}){const c=o||i?.typeVersion
return be({path:s,nodeTypeAndVersion:be({name:e,version:c}),currentNodeParameters:n||{},methodName:t,credentials:r||{},filter:a,node:ve(i,e,c),workflowId:l,inputContext:d,executionContext:u})}async loadWorkflowVars(){if(this.workflowVars)return this.workflowVars
try{const e=await g("/admin/plugins/discourse-workflows/variables.json")
this.workflowVars=e.variables||[]}catch{this.workflowVars=[]}return this.workflowVars}invalidateWorkflowVars(){this.workflowVars=null}clear(){this.nodeTypes=null,this.credentialTypes=null,this.expressionContext={},this.nodeTypeMap=new Map,this._nodeParameterOptionsCache=new Map,this.invalidateWorkflowVars()}}const Se={"discourse/discourse-workflows-public-route-map":T,"discourse/initializers/admin-plugin-configuration-nav":z,"discourse/initializers/assistant-workflow-preview":H,"discourse/initializers/post-button-workflows":Y,"discourse/initializers/topic-admin-button-workflows":X,"discourse/initializers/workflow-webhook-links":Q,"discourse/initializers/workflows-composer-message":oe,"discourse/initializers/workflows-composer-paused":ne,"discourse/initializers/workflows-user-modal":le,"discourse/pre-initializers/workflow-transformers":ue,"discourse/services/workflows-composer-paused":_e,"discourse/services/workflows-composer-session":ee,"discourse/services/workflows-node-types":Object.freeze({__proto__:null,default:xe})},Me={},Ce=[{names:["workflows-form","workflows-form-test"],load:()=>import("./discourse-workflows_chunk.FvHM9bct-1yijthkz.digested.js")}]
export{Se as compatModules,Me as default,Ce as routes}

//# sourceMappingURL=../../map/plugins/discourse-workflows_main.D-j3Ya-1yijthkz.digested.js.map
