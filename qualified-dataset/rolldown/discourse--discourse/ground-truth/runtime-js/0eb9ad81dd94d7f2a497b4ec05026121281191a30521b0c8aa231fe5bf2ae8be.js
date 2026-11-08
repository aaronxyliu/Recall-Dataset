const{_INTERNAL_SOURCE_KEY:i}=window.moduleBroker.lookup("discourse/lib/api",!1,["_INTERNAL_SOURCE_KEY"]),{withPluginApi:e}=window.moduleBroker.lookup("discourse/lib/plugin-api",!1,["withPluginApi"]),{AUTO_GROUPS:o}=window.moduleBroker.lookup("discourse/lib/constants",!1,["AUTO_GROUPS"]),{i18n:s}=window.moduleBroker.lookup("discourse-i18n",!1,["i18n"]),r=Object.freeze({type:"plugin",name:"boards"})
function n(...o){const s="string"==typeof o[0]?2:1
return o[s]={...o[s],[i]:r},e(...o)}function a(i,e){const s=e.groupSettingArray("boards_manage_board_allowed_groups"),r=[]
return s.forEach(e=>{const o=i.groupsById[e]
o&&r.push({type:"group",id:o.id,permission:"manage",display_name:o.full_name})}),s.includes(o.logged_in_users.id)||r.push({type:"group",id:o.logged_in_users.id,permission:"view",display_name:i.groupFullName(o.logged_in_users.id)}),r}function d(i){i.find(i=>"view"===i.id).description=s("boards.manage.board_access_permission_viewer_description")
return i.find(i=>"edit"===i.id).description=s("boards.manage.board_access_permission_editor_description"),i.push({id:"manage",level:3,name:s("boards.manage.board_access_permission_manager"),description:s("boards.manage.board_access_permission_manager_description")}),i}var p=Object.freeze({__proto__:null,boardPermissionOptions:d,buildDefaultBoardAcl:a})
export{p as M,d as a,a as b,n as w}

//# sourceMappingURL=../../map/plugins/boards_chunk.UELpcUsl-fy3n3ewr.digested.js.map
