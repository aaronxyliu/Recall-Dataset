const{_INTERNAL_SOURCE_KEY:i}=window.moduleBroker.lookup("discourse/lib/api",!1,["_INTERNAL_SOURCE_KEY"]),{withPluginApi:n}=window.moduleBroker.lookup("discourse/lib/plugin-api",!1,["withPluginApi"]),o=Object.freeze({type:"plugin",name:"discourse-narrative-bot"})
var e={name:"narrative-bot-admin-plugin-configuration-nav",initialize(e){const r=e.lookup("service:current-user")
r?.admin&&function(...e){const r="string"==typeof e[0]?2:1
e[r]={...e[r],[i]:o},n(...e)}(i=>{i.setAdminPluginIcon("discourse-narrative-bot","robot")})}}
const r={"discourse/initializers/narrative-bot-admin-plugin-configuration-nav":Object.freeze({__proto__:null,default:e})}
export{r as compatModules,r as default}

//# sourceMappingURL=../../map/plugins/discourse-narrative-bot_main.C0hAQL-2adyxzuw.digested.js.map
