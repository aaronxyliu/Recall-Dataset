const{_INTERNAL_SOURCE_KEY:e}=window.moduleBroker.lookup("discourse/lib/api",!1,["_INTERNAL_SOURCE_KEY"]),{withPluginApi:t}=window.moduleBroker.lookup("discourse/lib/plugin-api",!1,["withPluginApi"]),{i18n:o}=window.moduleBroker.lookup("discourse-i18n",!1,["i18n"]),i=Object.freeze({type:"plugin",name:"discourse-details"})
const n={nodeSpec:{details:{attrs:{open:{default:!0}},content:"summary block+",group:"block",selectable:!0,defining:!0,isolating:!0,parseDOM:[{tag:"details"}],toDOM:e=>["details",{open:e.attrs.open||void 0},0]},summary:{content:"inline*",parseDOM:[{tag:"summary"}],toDOM:()=>["summary",0]}},parse:{bbcode_open:(e,t)=>"details"===t.tag?(e.openNode(e.schema.nodes.details),!0):"summary"===t.tag?(e.openNode(e.schema.nodes.summary),!0):void 0,bbcode_close(e,t){if("details"===t.tag||"summary"===t.tag)return e.closeNode(),!0}},serializeNode:{details(e,t){e.renderContent(t),e.write("[/details]\n\n")},summary(e,t){let o=!1
0===t.content.childCount?e.write("[details"):(o=!0,e.write('[details="'),t.content.forEach(t=>t.text&&e.text(t.text.replace(/"/g,"“"),e.inAutolink)))
let i="]\n"
o&&(i=`"${i}`),e.write(i)}},plugins:{props:{handleClickOn(e,t,o,i){if(t>i+1||"summary"!==o.type.name)return!1
const n=e.state.doc.nodeAt(i-1)
return e.dispatch(e.state.tr.setNodeMarkup(i-1,null,{open:!n.attrs.open})),!0}}}}
var s=Object.freeze({__proto__:null,default:n})
function a(e){e.addComposerToolbarPopupMenuOption({action:function(e){e.applySurround(`\n[details="${o("composer.details_title")}"]\n`,"\n[/details]\n","details_text",{multiline:!1})},icon:"angle-right",label:"details.title",name:"details",shortcut:"Shift+D"}),e.registerRichEditorExtension(n)}var l={name:"apply-details",initialize(){(function(...o){const n="string"==typeof o[0]?2:1
o[n]={...o[n],[e]:i},t(...o)})(a)}},r=Object.freeze({__proto__:null,default:l})
const d={tag:"details",before(e,t){const o=t.attrs,i=e.push("bbcode_open","details",1)
e.push("bbcode_open","summary",1),""===o.open&&(i.attrs=[["open",""]]),e.push("text","",0).content=o._default||"",e.push("bbcode_close","summary",-1)},after(e){e.push("bbcode_close","details",-1)}}
const u={"initializers/apply-details":r,"lib/discourse-markdown/details":Object.freeze({__proto__:null,setup:function(e){e.allowList(["summary","summary[title]","details","details[open]","details.elided"]),e.registerPlugin(e=>{e.block.bbcode.ruler.push("details",d)})}}),"lib/rich-editor-extension":s}
export{u as compatModules,u as default}

//# sourceMappingURL=../../map/plugins/discourse-details_main.hWoK3j-il5pj3p3.digested.js.map
