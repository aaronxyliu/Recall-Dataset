(function(E,m){typeof exports=="object"&&typeof module<"u"?m(exports,require("react/jsx-runtime"),require("react")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react"],m):(E=typeof globalThis<"u"?globalThis:E||self,m(E.McpUiClient={},E.jsxRuntime,E.React))})(this,function(E,m,_){"use strict";var gt=Object.defineProperty;var Ce=E=>{throw TypeError(E)};var Rt=(E,m,_)=>m in E?gt(E,m,{enumerable:!0,configurable:!0,writable:!0,value:_}):E[m]=_;var z=(E,m,_)=>Rt(E,typeof m!="symbol"?m+"":m,_),ie=(E,m,_)=>m.has(E)||Ce("Cannot "+_);var y=(E,m,_)=>(ie(E,m,"read from private field"),_?_.call(E):m.get(E)),A=(E,m,_)=>m.has(E)?Ce("Cannot add the same private member more than once"):m instanceof WeakSet?m.add(E):m.set(E,_),Z=(E,m,_,q)=>(ie(E,m,"write to private field"),q?q.call(E,_):m.set(E,_),_),R=(E,m,_)=>(ie(E,m,"access private method"),_);var U,C,x,W,K,De,k,j,w,J,I,D,P,N,se,Le,ae,ze;function q(n){let e;try{e=new URL(n)}catch(t){return console.error("Error parsing URL:",t),!1}return e.protocol==="http:"||e.protocol==="https:"}function Ue(n,e){if(n.mimeType!=="text/html"&&n.mimeType!=="text/uri-list")return{error:"Resource must be of type text/html (for HTML content) or text/uri-list (for URL content)."};if(n.mimeType==="text/uri-list"){let t="";if(typeof n.text=="string"&&n.text.trim()!=="")t=n.text;else if(typeof n.blob=="string")try{t=new TextDecoder().decode(Uint8Array.from(atob(n.blob),o=>o.charCodeAt(0)))}catch(o){return console.error("Error decoding base64 blob for URL content:",o),{error:"Error decoding URL from blob."}}else return{error:"URL resource expects a non-empty text or blob field containing the URL."};if(t.trim()==="")return{error:"URL content is empty."};const r=t.split(`
`).map(o=>o.trim()).filter(o=>o&&!o.startsWith("#")&&q(o));if(r.length===0)return{error:"No valid URLs found in uri-list content."};r.length>1&&console.warn(`Multiple URLs found in uri-list content. Using the first URL: "${r[0]}". Other URLs ignored:`,r.slice(1));const s=r[0];if(e&&e.trim()!=="")try{const o=new URL(e);if(typeof window<"u"&&o.host===window.location.host)console.error("For security, the proxy origin must not be the same as the host origin. Using original URL instead.");else return o.searchParams.set("url",s),{iframeSrc:o.toString(),iframeRenderMode:"src"}}catch(o){console.error(`Invalid proxy URL provided: "${e}". Falling back to direct URL.`,o instanceof Error?o.message:String(o))}return{iframeSrc:s,iframeRenderMode:"src"}}else if(n.mimeType==="text/html"){if(typeof n.text=="string")return{htmlString:n.text,iframeRenderMode:"srcDoc"};if(typeof n.blob=="string")try{return{htmlString:new TextDecoder().decode(Uint8Array.from(atob(n.blob),r=>r.charCodeAt(0))),iframeRenderMode:"srcDoc"}}catch(t){return console.error("Error decoding base64 blob for HTML content:",t),{error:"Error decoding HTML content from blob."}}else return{error:"HTML resource requires text or blob content."}}else return{error:"Unsupported mimeType. Expected text/html or text/uri-list."}}function xe(n){if(typeof n.text=="string"&&n.text.trim()!=="")return{code:n.text};if(typeof n.blob=="string")try{return{code:new TextDecoder().decode(Uint8Array.from(atob(n.blob),t=>t.charCodeAt(0)))}}catch(e){return console.error("Error decoding base64 blob for remote DOM content:",e),{error:"Error decoding remote DOM content from blob."}}return{error:"Remote DOM resource requires non-empty text or blob content."}}const O={UI_MESSAGE_RECEIVED:"ui-message-received",UI_MESSAGE_RESPONSE:"ui-message-response",UI_SIZE_CHANGE:"ui-size-change",UI_LIFECYCLE_IFRAME_READY:"ui-lifecycle-iframe-ready",UI_LIFECYCLE_IFRAME_RENDER_DATA:"ui-lifecycle-iframe-render-data"},ke={WAIT_FOR_RENDER_DATA:"waitForRenderData"},X=({resource:n,onUIAction:e,style:t,proxy:r,iframeRenderData:s,autoResizeIframe:o,sandboxPermissions:a,iframeProps:d})=>{const l=_.useRef(null);_.useImperativeHandle(d==null?void 0:d.ref,()=>l.current);const{error:h,iframeSrc:i,iframeRenderMode:p,htmlString:u}=_.useMemo(()=>Ue(n,r),[n,r]),c=_.useMemo(()=>{if(i&&s){const v=new URL(i);return v.searchParams.set(ke.WAIT_FOR_RENDER_DATA,"true"),v.toString()}return i},[i,s]),f=_.useCallback(v=>{var T;if(s){const g=v.currentTarget.contentWindow,M=c?new URL(c).origin:"*";Y(O.UI_LIFECYCLE_IFRAME_RENDER_DATA,g,M,void 0,{renderData:s})}(T=d==null?void 0:d.onLoad)==null||T.call(d,v)},[s,c,d==null?void 0:d.onLoad]);if(_.useEffect(()=>{async function v(T){const{source:g,origin:M,data:S}=T;if(l.current&&g===l.current.contentWindow){if((S==null?void 0:S.type)===O.UI_LIFECYCLE_IFRAME_READY&&s){Y(O.UI_LIFECYCLE_IFRAME_RENDER_DATA,g,M,void 0,{renderData:s});return}if((S==null?void 0:S.type)===O.UI_SIZE_CHANGE){const{width:F,height:L}=S.payload;if(o&&l.current){const yt=(typeof o=="boolean"||o.height)&&L,Tt=(typeof o=="boolean"||o.width)&&F;yt&&(l.current.style.height=`${L}px`),Tt&&(l.current.style.width=`${F}px`)}return}const H=S;if(!H)return;if(e){const F=H.messageId;Y(O.UI_MESSAGE_RECEIVED,g,M,F);try{const L=await e(H);Y(O.UI_MESSAGE_RESPONSE,g,M,F,{response:L})}catch(L){console.error("Error handling UI action result in HTMLResourceRenderer:",L),Y(O.UI_MESSAGE_RESPONSE,g,M,F,{error:L})}}}}return window.addEventListener("message",v),()=>window.removeEventListener("message",v)},[e]),h)return m.jsx("p",{className:"text-red-500",children:h});const b=_.useMemo(()=>p==="srcDoc"?le(a??"","allow-scripts"):le(a??"","allow-scripts allow-same-origin"),[a,p]);return p==="srcDoc"?u==null?h?null:m.jsx("p",{className:"text-orange-500",children:"No HTML content to display."}):m.jsx("iframe",{srcDoc:u,sandbox:b,style:{width:"100%",height:"100%",...t},title:"MCP HTML Resource (Embedded Content)",...d,ref:l,onLoad:f}):p==="src"?c==null?h?null:m.jsx("p",{className:"text-orange-500",children:"No URL provided for HTML resource."}):m.jsx("iframe",{src:c,sandbox:b,style:{width:"100%",height:"100%",...t},title:"MCP HTML Resource (URL)",...d,ref:l,onLoad:f}):m.jsx("p",{className:"text-gray-500",children:"Initializing HTML resource display..."})};X.displayName="HTMLResourceRenderer";function Y(n,e,t,r,s){const o=t&&t!=="null"?t:"*";e==null||e.postMessage({type:n,messageId:r??void 0,payload:s},o)}function le(n,e){return[...new Set([...n.split(" "),...e.split(" ")])].filter(Boolean).map(t=>t.trim()).join(" ")}const ce=1,de=3,ue=8,je=9,Fe=0,Ye=1,Ge=2,Ve=3,G=1,Q=2,ee=3,V="~";function pe({call:n,insertChild:e,removeChild:t,updateText:r,updateProperty:s}){const o={[Fe]:e,[Ye]:t,[Ge]:r,[Ve]:s};return{call:n,mutate(a){for(const[d,...l]of a)o[d](...l)}}}class We{constructor({retain:e,release:t,methods:r}={}){z(this,"root",{id:V,type:je,children:[],version:0,properties:{},attributes:{},eventListeners:{}});z(this,"attached",new Map([[V,this.root]]));z(this,"subscribers",new Map);z(this,"parents",new Map);z(this,"implementations",new Map);const{attached:s,parents:o,subscribers:a}=this;this.connection=pe({call:(i,p,...u)=>{const c=this.implementations.get(i),f=c==null?void 0:c[p];if(typeof f!="function")throw new Error(`Node ${i} does not implement the ${p}() method`);return f(...u)},insertChild:(i,p,u)=>{const c=s.get(i),{children:f}=c,b=l(p,c);u===f.length?f.push(b):f.splice(u,0,b),c.version+=1,this.parents.set(p.id,c.id),d(c)},removeChild:(i,p)=>{const u=s.get(i),{children:c}=u,[f]=c.splice(p,1);f&&(u.version+=1,d(u),h(f))},updateProperty:(i,p,u,c=G)=>{const f=s.get(i);e==null||e(u);let b;switch(c){case G:b=f.properties;break;case Q:b=f.attributes;break;case ee:b=f.eventListeners;break}const v=b[p];b[p]=u,f.version+=1;let T;if(p==="slot"){const g=this.parents.get(i);T=g==null?g:s.get(g),T&&(T.version+=1)}d(f),T&&d(T),t==null||t(v)},updateText:(i,p)=>{const u=s.get(i);u.data=p,u.version+=1,d(u)}}),r&&this.implement(this.root,r);function d(i){const p=a.get(i.id);if(p)for(const u of p)u(i)}function l(i,p){let u;switch(i.type){case de:case ue:{const{id:c,type:f,data:b}=i;u={id:c,type:f,data:b,version:0};break}case ce:{const{id:c,type:f,element:b,children:v,properties:T,attributes:g,eventListeners:M}=i;e==null||e(T),e==null||e(M);const S=[];u={id:c,type:f,element:b,version:0,children:S,properties:{...T},attributes:{...g},eventListeners:{...M}};for(const H of v)S.push(l(H,u));break}default:throw new Error(`Unknown node type: ${JSON.stringify(i)}`)}return s.set(u.id,u),o.set(u.id,p.id),u}function h(i){if(s.delete(i.id),o.delete(i.id),t&&("properties"in i&&t(i.properties),"eventListeners"in i&&t(i.eventListeners)),"children"in i)for(const p of i.children)h(p)}}get({id:e}){return this.attached.get(e)}implement({id:e},t){t==null?this.implementations.delete(e):this.implementations.set(e,t)}subscribe({id:e},t,{signal:r}={}){let s=this.subscribers.get(e);s==null&&(s=new Set,this.subscribers.set(e,s)),s.add(t),r==null||r.addEventListener("abort",()=>{s.delete(t),s.size===0&&this.subscribers.delete(e)})}}const me=new WeakMap,B=new WeakMap,fe=new WeakMap;class He{constructor({root:e,retain:t,release:r,call:s,cache:o}={}){z(this,"attached",new Map);this.root=e??document.createDocumentFragment();const{attached:a}=this,d=new Map;this.connection=pe({call:(i,p,...u)=>{const c=i===V&&this.root.nodeType!==11?this.root:a.get(i);return s?s(c,p,...u):c[p](...u)},insertChild:(i,p,u)=>{const c=i===V?this.root:a.get(i),f=d.get(i);f&&clearTimeout(f),c.insertBefore(l(p),c.childNodes[u]||null)},removeChild:(i,p)=>{const c=(i===V?this.root:a.get(i)).childNodes[p];if(c.remove(),o!=null&&o.maxAge){const f=d.get(i);f&&clearTimeout(f);const b=setTimeout(()=>{h(c)},o.maxAge);d.set(i,b)}else h(c)},updateProperty:(i,p,u,c=G)=>{const f=a.get(i);t==null||t(u);const b=B.get(f),v=b[p];b[p]=u,$(f,p,u,c),r==null||r(v)},updateText:(i,p)=>{const u=a.get(i);u.data=p}});function l(i){const p=a.get(i.id);if(p)return p;let u;switch(i.type){case ce:{if(u=document.createElement(i.element),i.properties){B.set(u,i.properties);for(const c of Object.keys(i.properties)){const f=i.properties[c];t==null||t(f),$(u,c,f,G)}}else B.set(u,{});if(i.attributes)for(const c of Object.keys(i.attributes)){const f=i.attributes[c];t==null||t(f),$(u,c,f,Q)}if(fe.set(u,{}),i.eventListeners)for(const c of Object.keys(i.eventListeners)){const f=i.eventListeners[c];t==null||t(f),$(u,c,f,ee)}for(const c of i.children)u.appendChild(l(c));break}case de:{u=document.createTextNode(i.data);break}case ue:{u=document.createComment(i.data);break}default:throw new Error(`Unknown node type: ${JSON.stringify(i)}`)}return me.set(u,i.id),a.set(i.id,u),u}function h(i){const p=me.get(i);p&&a.delete(p);const u=B.get(i);if(u&&r&&r(u),i instanceof Element)for(const c of i.childNodes)h(c)}}connect(e){const t=this.root;this.root=e,t.childNodes.forEach(r=>{e.appendChild(r)})}disconnect(){if(this.root.nodeType===11)return this.root;const e=this.root,t=new DocumentFragment;return this.root=t,e.childNodes.forEach(r=>{t.appendChild(r)}),t}}function $(n,e,t,r){switch(r){case G:{n[e]=t;break}case Q:{t==null?n.removeAttribute(e):n.setAttribute(e,t);break}case ee:{const s=fe.get(n),o=s==null?void 0:s[e];if(o&&n.removeEventListener(e,o),t!=null){const a=d=>{var h;if(d.target!==n)return;const l=t(d.detail);(h=d.resolve)==null||h.call(d,l)};s&&(s[e]=a),n.addEventListener(e,a)}break}}}function te(n,e){const[t,r]=_.useState(()=>{const o=e.get(n);return{id:n.id,version:o==null?void 0:o.version,value:o,receiver:e}});let s=t.value;if(t.receiver!==e||t.id!==n.id){const o=e.get(n);s=o,r({receiver:e,id:n.id,version:o==null?void 0:o.version,value:s})}return _.useDebugValue(s),_.useEffect(()=>{const o=new AbortController,a=()=>{o.signal.aborted||r(d=>{const{id:l,version:h,receiver:i}=d,{id:p}=n;if(i!==e||l!==p)return d;const u=e.get(n),c=u==null?void 0:u.version;return h===c?d:{receiver:e,value:u,id:p,version:c}})};return e.subscribe(n,a,{signal:o.signal}),a(),()=>{o.abort()}},[e,n.id]),s}function qe({remote:n,receiver:e}){const t=te(n,e);return t?m.jsx(m.Fragment,{children:t.data}):null}function re(n,{receiver:e,components:t}){switch(n.type){case 1:{const r=t.get(n.element);if(r==null)throw new Error(`No component found for remote element: ${n.element}`);return m.jsx(r,{element:n,receiver:e,components:t},n.id)}case 3:return m.jsx(qe,{remote:n,receiver:e},n.id);case 8:return null;default:throw new Error(`Unknown remote node type: ${String(n)}`)}}function Be(n,e){if(!n)return;const{children:t,properties:r,attributes:s,eventListeners:o}=n,a=[],d={...r,...s,children:a};if(e.eventProps)for(const[l,h]of Object.entries(e.eventProps)){const i=h==null?void 0:h.event;if(i==null)continue;const p=o[i];p&&(d[l]=he(p))}else for(const[l,h]of Object.entries(o))d[`on${l[0].toUpperCase()}${l.slice(1)}`]=he(h);for(const l of t)if(l.type===1&&typeof l.attributes.slot=="string"){const h=l.attributes.slot,i=re(l,e);d[h]=d[h]?m.jsxs(m.Fragment,{children:[d[h],i]}):i}else a.push(re(l,e));return d}function he(n){return function(...t){if(t.length===1&&t[0]instanceof Event){const r=t[0];return r.target!==r.currentTarget?void 0:"detail"in r?n(r.detail):n()}return n(...t)}}const $e=Symbol.for("remote-dom.element"),Ke=Symbol.for("remote-dom.element.attached");function Ze(n,{name:e,eventProps:t}={}){const r=_.memo(function({element:o,receiver:a,components:d}){const l=_.useRef(),h=te(o,a),i=h??o,p=i.id,u=Be(i,{receiver:a,components:d,eventProps:t});if(u[$e]=i,u[Ke]=h!=null,l.current==null){const c={id:p,receiver:a};c.instanceRef=Je(c),l.current=c}return l.current.id=p,l.current.receiver=a,_.useEffect(()=>{var f;const c={id:p};return a.implement(c,(f=l.current)==null?void 0:f.instanceRef.current),()=>{a.implement(c,null)}},[p,a]),m.jsx(n,{ref:l.current.instanceRef,...u})});return r.displayName=e??`RemoteComponentRenderer(${n.displayName??n.name??"Component"})`,r}function Je(n){let e=null;return{get current(){return e},set current(t){e=t,n.receiver.implement(n,t)}}}function Xe(n){const{receiver:e}=n,{children:t}=te(e.root,e);return m.jsx(m.Fragment,{children:t.map(r=>re(r,n))})}const Qe=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body>
  <div id="root"></div>
  <script>
"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

  // ../../../node_modules/.pnpm/@remote-dom+core@1.8.1_@preact+signals-core@1.10.0/node_modules/@remote-dom/core/build/esm/elements/RemoteEvent.mjs
  var RemoteEvent = class extends CustomEvent {
    /**
     * The last value received from a \`respondWith()\` call.
     */
    /**
     * Provides the \`response\` value to be sent as the return value for
     * the remote property function that triggered this event.
     */
    respondWith(response) {
      this.response = response;
    }
  };

  // ../../../node_modules/.pnpm/@remote-dom+core@1.8.1_@preact+signals-core@1.10.0/node_modules/@remote-dom/core/build/esm/constants.mjs
  var MUTATION_TYPE_INSERT_CHILD = 0;
  var MUTATION_TYPE_REMOVE_CHILD = 1;
  var MUTATION_TYPE_UPDATE_TEXT = 2;
  var MUTATION_TYPE_UPDATE_PROPERTY = 3;
  var UPDATE_PROPERTY_TYPE_PROPERTY = 1;
  var UPDATE_PROPERTY_TYPE_ATTRIBUTE = 2;
  var UPDATE_PROPERTY_TYPE_EVENT_LISTENER = 3;
  var ROOT_ID = "~";

  // ../../../node_modules/.pnpm/@remote-dom+core@1.8.1_@preact+signals-core@1.10.0/node_modules/@remote-dom/core/build/esm/elements/internals.mjs
  var REMOTE_CONNECTIONS = /* @__PURE__ */ new WeakMap();
  var REMOTE_IDS = /* @__PURE__ */ new WeakMap();
  var id = 0;
  function remoteId(node) {
    let remoteID = REMOTE_IDS.get(node);
    if (remoteID == null) {
      remoteID = String(id++);
      REMOTE_IDS.set(node, remoteID);
    }
    return remoteID;
  }
  var REMOTE_PROPERTIES = /* @__PURE__ */ new WeakMap();
  function remoteProperties(node) {
    return REMOTE_PROPERTIES.get(node);
  }
  var REMOTE_ATTRIBUTES = /* @__PURE__ */ new WeakMap();
  function remoteAttributes(node) {
    let attributes = REMOTE_ATTRIBUTES.get(node);
    if (attributes != null) return attributes;
    if (!(node instanceof Element) || node.tagName.includes("-")) return void 0;
    attributes = {};
    for (const {
      name,
      value
    } of node.attributes) {
      attributes[name] = value;
    }
    return attributes;
  }
  var REMOTE_EVENT_LISTENERS = /* @__PURE__ */ new WeakMap();
  function remoteEventListeners(node) {
    return REMOTE_EVENT_LISTENERS.get(node);
  }
  function updateRemoteElementProperty(node, property, value) {
    let properties = REMOTE_PROPERTIES.get(node);
    if (properties == null) {
      properties = {};
      REMOTE_PROPERTIES.set(node, properties);
    }
    if (properties[property] === value) return;
    properties[property] = value;
    const connection = REMOTE_CONNECTIONS.get(node);
    if (connection == null) return;
    connection.mutate([[MUTATION_TYPE_UPDATE_PROPERTY, remoteId(node), property, value, UPDATE_PROPERTY_TYPE_PROPERTY]]);
  }
  function updateRemoteElementAttribute(node, attribute, value) {
    let attributes = REMOTE_ATTRIBUTES.get(node);
    if (attributes == null) {
      attributes = {};
      REMOTE_ATTRIBUTES.set(node, attributes);
    }
    if (attributes[attribute] === value) return;
    if (value == null) {
      delete attributes[attribute];
    } else {
      attributes[attribute] = String(value);
    }
    const connection = REMOTE_CONNECTIONS.get(node);
    if (connection == null) return;
    connection.mutate([[MUTATION_TYPE_UPDATE_PROPERTY, remoteId(node), attribute, value, UPDATE_PROPERTY_TYPE_ATTRIBUTE]]);
  }
  function updateRemoteElementEventListener(node, event, listener) {
    let eventListeners = REMOTE_EVENT_LISTENERS.get(node);
    if (eventListeners == null) {
      eventListeners = {};
      REMOTE_EVENT_LISTENERS.set(node, eventListeners);
    }
    if (eventListeners[event] === listener) return;
    if (listener == null) {
      delete eventListeners[event];
    } else {
      eventListeners[event] = listener;
    }
    const connection = REMOTE_CONNECTIONS.get(node);
    if (connection == null) return;
    connection.mutate([[MUTATION_TYPE_UPDATE_PROPERTY, remoteId(node), event, listener, UPDATE_PROPERTY_TYPE_EVENT_LISTENER]]);
  }
  function connectRemoteNode(node, connection) {
    const existingConnection = REMOTE_CONNECTIONS.get(node);
    if (existingConnection === connection) return;
    REMOTE_CONNECTIONS.set(node, connection);
    if (node.childNodes) {
      for (let i = 0; i < node.childNodes.length; i++) {
        connectRemoteNode(node.childNodes[i], connection);
      }
    }
  }
  function disconnectRemoteNode(node) {
    const existingConnection = REMOTE_CONNECTIONS.get(node);
    if (existingConnection == null) return;
    REMOTE_CONNECTIONS.delete(node);
    if (node.childNodes) {
      for (let i = 0; i < node.childNodes.length; i++) {
        disconnectRemoteNode(node.childNodes[i]);
      }
    }
  }
  function serializeRemoteNode(node) {
    const {
      nodeType
    } = node;
    switch (nodeType) {
      // Element
      case 1: {
        return {
          id: remoteId(node),
          type: nodeType,
          element: node.localName,
          properties: cloneMaybeObject(remoteProperties(node)),
          attributes: cloneMaybeObject(remoteAttributes(node)),
          eventListeners: cloneMaybeObject(remoteEventListeners(node)),
          children: Array.from(node.childNodes).map(serializeRemoteNode)
        };
      }
      // TextNode
      case 3:
      // Comment
      // eslint-disable-next-line no-fallthrough
      case 8: {
        return {
          id: remoteId(node),
          type: nodeType,
          data: node.data
        };
      }
      default: {
        throw new Error(\`Cannot serialize node of type \${node.nodeType} (\${typeof node.nodeType})\`);
      }
    }
  }
  function cloneMaybeObject(maybeObject) {
    return maybeObject ? {
      ...maybeObject
    } : void 0;
  }
  function callRemoteElementMethod(node, method, ...args) {
    const id2 = REMOTE_IDS.get(node);
    const connection = REMOTE_CONNECTIONS.get(node);
    if (id2 == null || connection == null) {
      throw new Error(\`Cannot call method \${method} on an unconnected node\`);
    }
    return connection.call(id2, method, ...args);
  }

  // ../../../node_modules/.pnpm/@remote-dom+core@1.8.1_@preact+signals-core@1.10.0/node_modules/@remote-dom/core/build/esm/elements/RemoteElement.mjs
  var EMPTY_DEFINITION = Object.freeze({});
  var RemoteElement = class extends HTMLElement {
    static get observedAttributes() {
      return this.finalize().__observedAttributes;
    }
    /**
     * The resolved property definitions for this remote element.
     */
    static get remotePropertyDefinitions() {
      return this.finalize().__remotePropertyDefinitions;
    }
    /**
     * The resolved attribute definitions for this remote element.
     */
    static get remoteAttributeDefinitions() {
      return this.finalize().__remoteAttributeDefinitions;
    }
    /**
     * The resolved event listener definitions for this remote element.
     */
    static get remoteEventDefinitions() {
      return this.finalize().__remoteEventDefinitions;
    }
    /**
     * The resolved slot definitions for this remote element.
     */
    static get remoteSlotDefinitions() {
      return this.finalize().__remoteSlotDefinitions;
    }
    /**
     * Creates a new definition for a property that will be synchronized between
     * this remote element and its host representation.
     */
    static createProperty(name, definition) {
      saveRemoteProperty(name, definition, this.observedAttributes, this.remotePropertyDefinitions, this.__attributeToPropertyMap, this.__eventToPropertyMap);
    }
    /**
     * Consumes all the static members defined on the class and converts them
     * into the internal representation used to handle properties, attributes,
     * and event listeners.
     */
    static finalize() {
      if (this.hasOwnProperty("__finalized")) {
        return this;
      }
      this.__finalized = true;
      const {
        slottable,
        remoteSlots,
        remoteProperties: remoteProperties2,
        remoteAttributes: remoteAttributes2,
        remoteEvents,
        remoteMethods
      } = this;
      const SuperConstructor = Object.getPrototypeOf(this);
      const observedAttributes = /* @__PURE__ */ new Set();
      if (slottable) observedAttributes.add("slot");
      const attributeToPropertyMap = /* @__PURE__ */ new Map();
      const eventToPropertyMap = /* @__PURE__ */ new Map();
      const remoteSlotDefinitions = /* @__PURE__ */ new Map();
      const remotePropertyDefinitions = /* @__PURE__ */ new Map();
      const remoteAttributeDefinitions = /* @__PURE__ */ new Map();
      const remoteEventDefinitions = /* @__PURE__ */ new Map();
      if (typeof SuperConstructor.finalize === "function") {
        SuperConstructor.finalize();
        SuperConstructor.observedAttributes.forEach((attribute) => {
          observedAttributes.add(attribute);
        });
        SuperConstructor.remotePropertyDefinitions.forEach((definition, property) => {
          remotePropertyDefinitions.set(property, definition);
        });
        SuperConstructor.remoteAttributeDefinitions.forEach((definition, event) => {
          remoteAttributeDefinitions.set(event, definition);
        });
        SuperConstructor.remoteEventDefinitions.forEach((definition, event) => {
          remoteEventDefinitions.set(event, definition);
        });
        SuperConstructor.remoteSlotDefinitions.forEach((definition, slot) => {
          remoteSlotDefinitions.set(slot, definition);
        });
      }
      if (remoteSlots != null) {
        const slotNames = Array.isArray(remoteSlots) ? remoteSlots : Object.keys(remoteSlots);
        slotNames.forEach((slotName) => {
          remoteSlotDefinitions.set(slotName, EMPTY_DEFINITION);
        });
      }
      if (remoteProperties2 != null) {
        if (Array.isArray(remoteProperties2)) {
          remoteProperties2.forEach((propertyName) => {
            saveRemoteProperty(propertyName, void 0, observedAttributes, remotePropertyDefinitions, attributeToPropertyMap, eventToPropertyMap);
          });
        } else {
          Object.keys(remoteProperties2).forEach((propertyName) => {
            saveRemoteProperty(propertyName, remoteProperties2[propertyName], observedAttributes, remotePropertyDefinitions, attributeToPropertyMap, eventToPropertyMap);
          });
        }
      }
      if (remoteAttributes2 != null) {
        remoteAttributes2.forEach((attribute) => {
          remoteAttributeDefinitions.set(attribute, EMPTY_DEFINITION);
          observedAttributes.add(attribute);
        });
      }
      if (remoteEvents != null) {
        if (Array.isArray(remoteEvents)) {
          remoteEvents.forEach((event) => {
            remoteEventDefinitions.set(event, EMPTY_DEFINITION);
          });
        } else {
          Object.keys(remoteEvents).forEach((event) => {
            remoteEventDefinitions.set(event, remoteEvents[event]);
          });
        }
      }
      if (remoteMethods != null) {
        if (Array.isArray(remoteMethods)) {
          for (const method of remoteMethods) {
            this.prototype[method] = function(...args) {
              return this.callRemoteMethod(method, ...args);
            };
          }
        } else {
          Object.assign(this, remoteMethods);
        }
      }
      Object.defineProperties(this, {
        __observedAttributes: {
          value: [...observedAttributes],
          enumerable: false
        },
        __remoteSlotDefinitions: {
          value: remoteSlotDefinitions,
          enumerable: false
        },
        __remotePropertyDefinitions: {
          value: remotePropertyDefinitions,
          enumerable: false
        },
        __remoteAttributeDefinitions: {
          value: remoteAttributeDefinitions,
          enumerable: false
        },
        __remoteEventDefinitions: {
          value: remoteEventDefinitions,
          enumerable: false
        },
        __attributeToPropertyMap: {
          value: attributeToPropertyMap,
          enumerable: false
        },
        __eventToPropertyMap: {
          value: eventToPropertyMap,
          enumerable: false
        }
      });
      return this;
    }
    // Just need to use these types so TS doesn’t lose track of them.
    /** @internal */
    /** @internal */
    /** @internal */
    /** @internal */
    constructor() {
      super();
      this.constructor.finalize();
      const propertyDescriptors = {};
      const initialPropertiesToSet = {};
      const prototype = Object.getPrototypeOf(this);
      const ThisClass = this.constructor;
      for (const [property, description] of ThisClass.remotePropertyDefinitions.entries()) {
        const aliasedName = description.name;
        if (prototype.hasOwnProperty(property)) {
          continue;
        }
        if (property === aliasedName) {
          initialPropertiesToSet[property] = description.default;
        }
        const propertyDescriptor = {
          configurable: true,
          enumerable: property === aliasedName,
          get: () => {
            return remoteProperties(this)?.[aliasedName];
          },
          set: (value) => {
            updateRemoteElementProperty(this, aliasedName, value);
          }
        };
        propertyDescriptors[property] = propertyDescriptor;
      }
      for (const [event, definition] of ThisClass.remoteEventDefinitions.entries()) {
        const propertyFromDefinition = definition.property ?? true;
        if (!propertyFromDefinition) continue;
        const property = propertyFromDefinition === true ? \`on\${event}\` : propertyFromDefinition;
        propertyDescriptors[property] = {
          configurable: true,
          enumerable: true,
          get: () => {
            return getRemoteEvents(this).properties.get(property) ?? null;
          },
          set: (value) => {
            const remoteEvents = getRemoteEvents(this);
            const currentListener = remoteEvents.properties.get(property);
            if (typeof value === "function") {
              let handler = function(...args) {
                return value.call(this, ...args);
              };
              remoteEvents.properties.set(property, handler);
              this.addEventListener(event, handler);
            } else {
              remoteEvents.properties.delete(property);
            }
            if (currentListener) {
              this.removeEventListener(event, currentListener);
            }
          }
        };
      }
      Object.defineProperties(this, propertyDescriptors);
      Object.assign(this, initialPropertiesToSet);
    }
    attributeChangedCallback(attribute, _oldValue, newValue) {
      if (attribute === "slot" && this.constructor.slottable) {
        updateRemoteElementAttribute(this, attribute, newValue ? String(newValue) : void 0);
        return;
      }
      const {
        remotePropertyDefinitions,
        remoteAttributeDefinitions,
        __attributeToPropertyMap: attributeToPropertyMap
      } = this.constructor;
      if (remoteAttributeDefinitions.has(attribute)) {
        updateRemoteElementAttribute(this, attribute, newValue);
        return;
      }
      const property = attributeToPropertyMap.get(attribute);
      const propertyDefinition = property == null ? property : remotePropertyDefinitions.get(property);
      if (propertyDefinition == null) return;
      this[property] = convertAttributeValueToProperty(newValue, propertyDefinition.type);
    }
    connectedCallback() {
      for (const [event, descriptor] of this.constructor.remoteEventDefinitions.entries()) {
        if (descriptor.bubbles) {
          this.addEventListener(event, noopBubblesEventListener);
        }
      }
    }
    disconnectedCallback() {
      for (const [event, descriptor] of this.constructor.remoteEventDefinitions.entries()) {
        if (descriptor.bubbles) {
          this.removeEventListener(event, noopBubblesEventListener);
        }
      }
    }
    addEventListener(type, listener, options) {
      const {
        remoteEventDefinitions,
        __eventToPropertyMap: eventToPropertyMap
      } = this.constructor;
      const listenerDefinition = remoteEventDefinitions.get(type);
      const property = eventToPropertyMap.get(type);
      if (listenerDefinition == null && property == null) {
        return super.addEventListener(type, listener, options);
      }
      const remoteEvents = getRemoteEvents(this);
      const remoteEvent = getRemoteEventRecord.call(this, type, {
        property,
        definition: listenerDefinition
      });
      const normalizedListener = typeof options === "object" && options?.once ? (...args) => {
        const result = typeof listener === "object" ? listener.handleEvent(...args) : listener.call(this, ...args);
        removeRemoteListener.call(this, type, listener, listenerRecord);
        return result;
      } : listener;
      const listenerRecord = [normalizedListener, remoteEvent];
      remoteEvent.listeners.add(listener);
      remoteEvents.listeners.set(listener, listenerRecord);
      super.addEventListener(type, normalizedListener, options);
      if (typeof options === "object" && options.signal) {
        options.signal.addEventListener("abort", () => {
          removeRemoteListener.call(this, type, listener, listenerRecord);
        }, {
          once: true
        });
      }
      if (listenerDefinition) {
        updateRemoteElementEventListener(this, type, remoteEvent.dispatch);
      } else {
        updateRemoteElementProperty(this, property, remoteEvent.dispatch);
      }
    }
    removeEventListener(type, listener, options) {
      const listenerRecord = REMOTE_EVENTS.get(this)?.listeners.get(listener);
      const normalizedListener = listenerRecord ? listenerRecord[0] : listener;
      super.removeEventListener(type, normalizedListener, options);
      if (listenerRecord == null) return;
      removeRemoteListener.call(this, type, listener, listenerRecord);
    }
    /**
     * Updates a single remote property on an element node. If the element is
     * connected to a remote root, this function will also make a \`mutate()\` call
     * to communicate the change to the host.
     */
    updateRemoteProperty(name, value) {
      updateRemoteElementProperty(this, name, value);
    }
    /**
     * Updates a single remote attribute on an element node. If the element is
     * connected to a remote root, this function will also make a \`mutate()\` call
     * to communicate the change to the host.
     */
    updateRemoteAttribute(name, value) {
      updateRemoteElementAttribute(this, name, value);
    }
    /**
     * Performs a method through \`RemoteConnection.call()\`, using the remote ID and
     * connection for the provided node.
     */
    callRemoteMethod(method, ...args) {
      return callRemoteElementMethod(this, method, ...args);
    }
  };
  __publicField(RemoteElement, "slottable", true);
  __publicField(RemoteElement, "__finalized", true);
  __publicField(RemoteElement, "__observedAttributes", []);
  __publicField(RemoteElement, "__attributeToPropertyMap", /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
  __publicField(RemoteElement, "__eventToPropertyMap", /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
  __publicField(RemoteElement, "__remotePropertyDefinitions", /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
  __publicField(RemoteElement, "__remoteAttributeDefinitions", /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
  __publicField(RemoteElement, "__remoteEventDefinitions", /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
  __publicField(RemoteElement, "__remoteSlotDefinitions", /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
  var REMOTE_EVENTS = /* @__PURE__ */ new WeakMap();
  function getRemoteEvents(element) {
    let events = REMOTE_EVENTS.get(element);
    if (events) return events;
    events = {
      events: /* @__PURE__ */ new Map(),
      properties: /* @__PURE__ */ new Map(),
      listeners: /* @__PURE__ */ new WeakMap()
    };
    REMOTE_EVENTS.set(element, events);
    return events;
  }
  function getRemoteEventRecord(type, {
    property,
    definition
  }) {
    const remoteEvents = getRemoteEvents(this);
    let remoteEvent = remoteEvents.events.get(type);
    if (remoteEvent == null) {
      remoteEvent = {
        name: type,
        property,
        definition,
        listeners: /* @__PURE__ */ new Set(),
        dispatch: (arg) => {
          const event = definition?.dispatchEvent?.call(this, arg) ?? new RemoteEvent(type, {
            detail: arg,
            bubbles: definition?.bubbles
          });
          this.dispatchEvent(event);
          return event.response;
        }
      };
      remoteEvents.events.set(type, remoteEvent);
    }
    return remoteEvent;
  }
  function removeRemoteListener(type, listener, listenerRecord) {
    const remoteEvents = getRemoteEvents(this);
    const remoteEvent = listenerRecord[1];
    remoteEvent.listeners.delete(listener);
    remoteEvents.listeners.delete(listener);
    if (remoteEvent.listeners.size > 0) return;
    remoteEvents.events.delete(type);
    if (remoteEvent.property) {
      if (remoteProperties(this)?.[remoteEvent.property] === remoteEvent.dispatch) {
        updateRemoteElementProperty(this, remoteEvent.property, void 0);
      }
    } else {
      if (remoteEventListeners(this)?.[type] === remoteEvent.dispatch) {
        updateRemoteElementEventListener(this, type, void 0);
      }
    }
  }
  function saveRemoteProperty(name, description, observedAttributes, remotePropertyDefinitions, attributeToPropertyMap, eventToPropertyMap) {
    if (remotePropertyDefinitions.has(name)) {
      return remotePropertyDefinitions.get(name);
    }
    const looksLikeEventCallback = name[0] === "o" && name[1] === "n";
    const resolvedDescription = description ?? {};
    let {
      alias
    } = resolvedDescription;
    const {
      type = looksLikeEventCallback ? Function : String,
      attribute = type !== Function,
      event = looksLikeEventCallback,
      default: defaultValue = type === Boolean ? false : void 0
    } = resolvedDescription;
    if (alias == null) {
      const lowercaseProperty = name.toLowerCase();
      if (lowercaseProperty !== name) {
        alias = [lowercaseProperty];
      }
      if (looksLikeEventCallback) {
        alias ?? (alias = []);
        alias.unshift(\`_\${name}\`);
      }
    }
    let attributeName;
    if (attribute === true) {
      attributeName = camelToKebabCase(name);
    } else if (typeof attribute === "string") {
      attributeName = attribute;
    }
    if (attributeName) {
      if (Array.isArray(observedAttributes)) {
        observedAttributes.push(attributeName);
      } else {
        observedAttributes.add(attributeName);
      }
      attributeToPropertyMap.set(attributeName, name);
    }
    let eventName;
    if (event === true) {
      eventName = camelToKebabCase(looksLikeEventCallback ? name.slice(2) : name);
    } else if (typeof event === "string") {
      eventName = event;
    }
    if (eventName) {
      eventToPropertyMap.set(eventName, name);
    }
    const definition = {
      name,
      type,
      alias,
      event: eventName,
      attribute: attributeName,
      default: defaultValue
    };
    remotePropertyDefinitions.set(name, definition);
    if (alias) {
      for (const propertyAlias of alias) {
        remotePropertyDefinitions.set(propertyAlias, definition);
      }
    }
    return definition;
  }
  function convertAttributeValueToProperty(value, type) {
    if (value == null) return void 0;
    switch (type) {
      case Boolean:
        return value != null && value !== "false";
      case Object:
      case Array:
        try {
          return JSON.parse(value);
        } catch {
          return void 0;
        }
      case String:
        return String(value);
      case Number:
        return Number.parseFloat(value);
      case Function:
        return void 0;
      default: {
        return type.parse?.(value);
      }
    }
  }
  function camelToKebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function noopBubblesEventListener() {
  }

  // ../../../node_modules/.pnpm/@remote-dom+core@1.8.1_@preact+signals-core@1.10.0/node_modules/@remote-dom/core/build/esm/elements/RemoteMutationObserver.mjs
  var RemoteMutationObserver = class extends MutationObserver {
    constructor(connection) {
      super((records) => {
        const addedNodes = [];
        const remoteRecords = [];
        for (const record of records) {
          const targetId = remoteId(record.target);
          if (record.type === "childList") {
            const position = record.previousSibling ? indexOf(record.previousSibling, record.target.childNodes) + 1 : 0;
            record.removedNodes.forEach((node) => {
              disconnectRemoteNode(node);
              remoteRecords.push([MUTATION_TYPE_REMOVE_CHILD, targetId, position]);
            });
            record.addedNodes.forEach((node, index) => {
              if (addedNodes.some((addedNode) => {
                return addedNode === node || addedNode.contains(node);
              })) {
                return;
              }
              addedNodes.push(node);
              connectRemoteNode(node, connection);
              remoteRecords.push([MUTATION_TYPE_INSERT_CHILD, targetId, serializeRemoteNode(node), position + index]);
            });
          } else if (record.type === "characterData") {
            remoteRecords.push([MUTATION_TYPE_UPDATE_TEXT, targetId, record.target.textContent ?? ""]);
          } else if (record.type === "attributes" && record.attributeName != null && record.target instanceof Element && !record.target.tagName.includes("-")) {
            remoteRecords.push([MUTATION_TYPE_UPDATE_PROPERTY, targetId, record.attributeName, record.target.getAttribute(record.attributeName)]);
          }
        }
        connection.mutate(remoteRecords);
      });
      this.connection = connection;
    }
    /**
     * Starts watching changes to the element, and communicates changes to the
     * host environment. By default, this method will also communicate any initial
     * children of the element to the host environment.
     */
    observe(target, options) {
      REMOTE_IDS.set(target, ROOT_ID);
      if (options?.initial !== false && target.childNodes.length > 0) {
        const records = [];
        for (let i = 0; i < target.childNodes.length; i++) {
          const node = target.childNodes[i];
          connectRemoteNode(node, this.connection);
          records.push([MUTATION_TYPE_INSERT_CHILD, ROOT_ID, serializeRemoteNode(node), i]);
        }
        this.connection.mutate(records);
      }
      super.observe(target, {
        subtree: true,
        childList: true,
        attributes: true,
        characterData: true,
        ...options
      });
    }
  };
  function indexOf(node, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === node) return i;
    }
    return -1;
  }

  // ../../../node_modules/.pnpm/@quilted+threads@3.1.3_@preact+signals-core@1.10.0/node_modules/@quilted/threads/build/esm/constants.mjs
  var MESSAGE_CALL = 1;
  var MESSAGE_CALL_RESULT = 2;
  var MESSAGE_FUNCTION_CALL = 3;
  var MESSAGE_FUNCTION_RESULT = 4;
  var MESSAGE_FUNCTION_RELEASE = 5;
  var SERIALIZE_METHOD = Symbol.for("quilt.threads.serialize");
  var TRANSFERABLE = Symbol.for("quilt.threads.transferable");

  // ../../../node_modules/.pnpm/@quilted+events@2.1.3/node_modules/@quilted/events/build/esm/abort/NestedAbortController.mjs
  var NestedAbortController = class extends AbortController {
    constructor(...parents) {
      super();
      const abortedSignal = parents.find((signal) => signal.aborted);
      if (abortedSignal) {
        this.abort(abortedSignal.reason);
      } else {
        const abort = (event) => this.abort(event.target.reason);
        const options = {
          signal: this.signal
        };
        for (const signal of parents) {
          signal.addEventListener("abort", abort, options);
        }
      }
    }
  };

  // ../../../node_modules/.pnpm/@quilted+threads@3.1.3_@preact+signals-core@1.10.0/node_modules/@quilted/threads/build/esm/errors.mjs
  var ThreadClosedError = class extends Error {
    constructor() {
      super("You attempted to call a function on a closed thread.");
    }
  };

  // ../../../node_modules/.pnpm/@quilted+threads@3.1.3_@preact+signals-core@1.10.0/node_modules/@quilted/threads/build/esm/nanoid.mjs
  var a = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  function nanoid(e = 21) {
    let t = "", r = crypto.getRandomValues(new Uint8Array(e));
    for (let n = 0; n < e; n++) t += a[63 & r[n]];
    return t;
  }

  // ../../../node_modules/.pnpm/@quilted+threads@3.1.3_@preact+signals-core@1.10.0/node_modules/@quilted/threads/build/esm/functions/ThreadFunctionsAutomatic.mjs
  var _functionsToId, _idsToFunction, _idsToProxy, _finalization, _ThreadFunctionsAutomatic_instances, finalizationRegistry_fn;
  var ThreadFunctionsAutomatic = class {
    constructor() {
      __privateAdd(this, _ThreadFunctionsAutomatic_instances);
      __privateAdd(this, _functionsToId, /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
      __privateAdd(this, _idsToFunction, /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
      __privateAdd(this, _idsToProxy, /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
      __privateAdd(this, _finalization, /* @__PURE__ */ (() => /* @__PURE__ */ new WeakMap())());
    }
    get(id2) {
      return __privateGet(this, _idsToFunction).get(id2);
    }
    release(id2) {
      const func = __privateGet(this, _idsToFunction).get(id2);
      if (func) {
        __privateGet(this, _idsToFunction).delete(id2);
        __privateGet(this, _functionsToId).delete(func);
      }
      return Boolean(func);
    }
    serialize(func) {
      let id2 = __privateGet(this, _functionsToId).get(func);
      if (id2 == null) {
        id2 = nanoid();
        __privateGet(this, _functionsToId).set(func, id2);
        __privateGet(this, _idsToFunction).set(id2, func);
      }
      return id2;
    }
    deserialize(id2, thread) {
      let proxy = __privateGet(this, _idsToProxy).get(id2)?.deref();
      if (proxy) return proxy;
      proxy = (...args) => {
        if (!__privateGet(this, _idsToProxy).has(id2)) {
          throw new Error("You attempted to call a function that was already revoked.");
        }
        return thread.call((callID, args2, transferable) => {
          thread.messages.send([MESSAGE_FUNCTION_CALL, callID, id2, args2], transferable);
        }, args);
      };
      __privateMethod(this, _ThreadFunctionsAutomatic_instances, finalizationRegistry_fn).call(this, thread)?.register(proxy, id2);
      __privateGet(this, _idsToProxy).set(id2, new WeakRef(proxy));
      return proxy;
    }
  };
  _functionsToId = new WeakMap();
  _idsToFunction = new WeakMap();
  _idsToProxy = new WeakMap();
  _finalization = new WeakMap();
  _ThreadFunctionsAutomatic_instances = new WeakSet();
  finalizationRegistry_fn = function(thread) {
    let finalization = __privateGet(this, _finalization).get(thread);
    if (typeof FinalizationRegistry === "undefined") {
      return void 0;
    }
    if (!finalization) {
      finalization = new FinalizationRegistry((id2) => {
        thread.messages.send([MESSAGE_FUNCTION_RELEASE, id2]);
      });
      __privateGet(this, _finalization).set(thread, finalization);
    }
    return finalization;
  };

  // ../../../node_modules/.pnpm/@quilted+threads@3.1.3_@preact+signals-core@1.10.0/node_modules/@quilted/threads/build/esm/serialization/shared.mjs
  function isIterator(value) {
    return value != null && (Symbol.asyncIterator in value || Symbol.iterator in value) && typeof value.next === "function";
  }
  function isBasicObject(value) {
    if (value == null || typeof value !== "object") return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype == null || prototype === Object.prototype;
  }

  // ../../../node_modules/.pnpm/@quilted+threads@3.1.3_@preact+signals-core@1.10.0/node_modules/@quilted/threads/build/esm/serialization/ThreadSerializationStructuredClone.mjs
  var FUNCTION = "_@f";
  var ASYNC_ITERATOR = "_@i";
  var _customSerializer, _customDeserializer, _ThreadSerializationStructuredClone_instances, serializeInternal_fn, deserializeInternal_fn;
  var ThreadSerializationStructuredClone = class {
    constructor(options) {
      __privateAdd(this, _ThreadSerializationStructuredClone_instances);
      __privateAdd(this, _customSerializer);
      __privateAdd(this, _customDeserializer);
      __privateSet(this, _customSerializer, options?.serialize);
      __privateSet(this, _customDeserializer, options?.deserialize);
    }
    /**
     * Serializes a value into a structured cloning-compatible format that can be transferred between threads.
     */
    serialize(value, thread, transferable) {
      return __privateMethod(this, _ThreadSerializationStructuredClone_instances, serializeInternal_fn).call(this, value, thread, transferable);
    }
    /**
     * Deserializes a structured cloning-compatible value from another thread.
     */
    deserialize(value, thread) {
      return __privateMethod(this, _ThreadSerializationStructuredClone_instances, deserializeInternal_fn).call(this, value, thread);
    }
  };
  _customSerializer = new WeakMap();
  _customDeserializer = new WeakMap();
  _ThreadSerializationStructuredClone_instances = new WeakSet();
  serializeInternal_fn = function(value, thread, transferable, seen = /* @__PURE__ */ new Map(), isApplyingDefault = false) {
    if (value == null) return value;
    if (seen.has(value)) return seen.get(value);
    seen.set(value, void 0);
    if (typeof value === "object") {
      if (__privateGet(this, _customSerializer) && !isApplyingDefault) {
        const customValue = __privateGet(this, _customSerializer).call(this, value, (value2) => __privateMethod(this, _ThreadSerializationStructuredClone_instances, serializeInternal_fn).call(this, value2, thread, transferable, seen, true), thread, transferable);
        if (customValue !== void 0) {
          seen.set(value, customValue);
          return customValue;
        }
      }
      if (value[TRANSFERABLE]) {
        transferable?.push(value);
        seen.set(value, value);
        return value;
      }
      const serializeValue = (value2) => {
        return __privateMethod(this, _ThreadSerializationStructuredClone_instances, serializeInternal_fn).call(this, value2, thread, transferable, seen);
      };
      if (typeof value[SERIALIZE_METHOD] === "function") {
        const result = value[SERIALIZE_METHOD]({
          serialize: serializeValue
        });
        seen.set(value, result);
        return result;
      }
      if (Array.isArray(value)) {
        const result = value.map((item) => serializeValue(item));
        seen.set(value, result);
        return result;
      }
      if (value instanceof Map) {
        const entries = [...value.entries()].map(([key, value2]) => {
          return [serializeValue(key), serializeValue(value2)];
        });
        const result = new Map(entries);
        seen.set(value, result);
        return result;
      }
      if (value instanceof Set) {
        const entries = [...value].map((entry) => serializeValue(entry));
        const result = new Set(entries);
        seen.set(value, result);
        return result;
      }
      const valueIsIterator = isIterator(value);
      if (isBasicObject(value) || valueIsIterator) {
        const result = {};
        for (const key of Object.keys(value)) {
          result[key] = serializeValue(value[key]);
        }
        if (valueIsIterator) {
          result.next ?? (result.next = serializeValue(value.next.bind(value)));
          result.return ?? (result.return = serializeValue(value.return.bind(value)));
          result.throw ?? (result.throw = serializeValue(value.throw.bind(value)));
          result[ASYNC_ITERATOR] = true;
        }
        seen.set(value, result);
        return result;
      }
    }
    if (typeof value === "function") {
      const serialized = thread.functions.serialize(value, thread, transferable);
      const result = {
        [FUNCTION]: serialized
      };
      seen.set(value, result);
      return result;
    }
    seen.set(value, value);
    return value;
  };
  deserializeInternal_fn = function(value, thread, isApplyingDefault = false) {
    if (value == null) return value;
    if (typeof value === "object") {
      if (__privateGet(this, _customDeserializer) && !isApplyingDefault) {
        const customValue = __privateGet(this, _customDeserializer).call(this, value, (value2) => __privateMethod(this, _ThreadSerializationStructuredClone_instances, deserializeInternal_fn).call(this, value2, thread, true), thread);
        if (customValue !== void 0) {
          return customValue;
        }
      }
      if (value == null) {
        return value;
      }
      if (Array.isArray(value)) {
        return value.map((value2) => __privateMethod(this, _ThreadSerializationStructuredClone_instances, deserializeInternal_fn).call(this, value2, thread));
      }
      if (value instanceof Map) {
        return new Map([...value].map(([key, value2]) => [__privateMethod(this, _ThreadSerializationStructuredClone_instances, deserializeInternal_fn).call(this, key, thread), __privateMethod(this, _ThreadSerializationStructuredClone_instances, deserializeInternal_fn).call(this, value2, thread)]));
      }
      if (value instanceof Set) {
        return new Set([...value].map((entry) => __privateMethod(this, _ThreadSerializationStructuredClone_instances, deserializeInternal_fn).call(this, entry, thread)));
      }
      if (FUNCTION in value) {
        const func = thread.functions.deserialize(value[FUNCTION], thread);
        return func;
      }
      if (!isBasicObject(value)) {
        return value;
      }
      const result = {};
      for (const key of Object.keys(value)) {
        if (key === ASYNC_ITERATOR) {
          result[Symbol.asyncIterator] = () => result;
        } else {
          result[key] = __privateMethod(this, _ThreadSerializationStructuredClone_instances, deserializeInternal_fn).call(this, value[key], thread);
        }
      }
      return result;
    }
    return value;
  };

  // ../../../node_modules/.pnpm/@quilted+threads@3.1.3_@preact+signals-core@1.10.0/node_modules/@quilted/threads/build/esm/Thread.mjs
  var _abort, _idsToResolver, _Thread_instances, callLocal_fn, handlerForCall_fn, resolveCall_fn, waitForResult_fn;
  var Thread = class {
    constructor(messages, {
      imports,
      exports,
      functions = new ThreadFunctionsAutomatic(),
      serialization = new ThreadSerializationStructuredClone(),
      signal
    } = {}) {
      __privateAdd(this, _Thread_instances);
      __privateAdd(this, _abort);
      __privateAdd(this, _idsToResolver, /* @__PURE__ */ (() => /* @__PURE__ */ new Map())());
      this.messages = messages;
      __privateSet(this, _abort, signal ? new NestedAbortController(signal) : new AbortController());
      this.exports = exports ?? {};
      this.imports = createThreadImports(__privateMethod(this, _Thread_instances, handlerForCall_fn).bind(this), imports);
      this.functions = functions;
      this.serialization = serialization;
      this.functions.start?.(this);
      this.serialization.start?.(this);
      this.signal.addEventListener("abort", () => {
        for (const id2 of __privateGet(this, _idsToResolver).keys()) {
          __privateMethod(this, _Thread_instances, resolveCall_fn).call(this, id2, void 0, new ThreadClosedError());
        }
        __privateGet(this, _idsToResolver).clear();
      }, {
        once: true
      });
      messages.listen(async (rawData) => {
        const isThreadMessageData = Array.isArray(rawData) && typeof rawData[0] === "number";
        if (!isThreadMessageData) {
          return;
        }
        const data = rawData;
        switch (data[0]) {
          case MESSAGE_CALL: {
            const [, id2, property, args] = data;
            const func = this.exports[property] ?? (() => {
              throw new Error(\`No '\${property}' method is exported from this thread\`);
            });
            await __privateMethod(this, _Thread_instances, callLocal_fn).call(this, func, args, (value, error, transferable) => {
              this.messages.send([MESSAGE_CALL_RESULT, id2, value, error], transferable);
            });
            break;
          }
          case MESSAGE_FUNCTION_CALL: {
            const [, callID, funcID, args] = data;
            const func = this.functions.get(funcID, this) ?? missingThreadFunction;
            await __privateMethod(this, _Thread_instances, callLocal_fn).call(this, func, args, (value, error, transferable) => {
              this.messages.send([MESSAGE_FUNCTION_RESULT, callID, value, error], transferable);
            });
            break;
          }
          case MESSAGE_CALL_RESULT:
          case MESSAGE_FUNCTION_RESULT: {
            __privateMethod(this, _Thread_instances, resolveCall_fn).call(this, ...data.slice(1));
            break;
          }
          case MESSAGE_FUNCTION_RELEASE: {
            const id2 = data[1];
            this.functions.release(id2, this);
            break;
          }
        }
      }, {
        signal: this.signal
      });
    }
    /**
     * An object that exposes the methods that can be called on the paired thread.
     * This object will automatically encode and decode arguments and return values
     * as necessary.
     */
    /**
     * An object that exposes the methods that can be called on this thread by the
     * paired thread. To set these methods, pass the \`exports\` option when creating
     * a new \`Thread\`.
     */
    /**
     * An object that provides the message-passing interface that allows communication
     * to flow between environments.
     */
    /**
     * An object that manages how functions are proxied between threads.
     */
    /**
     * An object that manages how values are serialized and deserialized between threads.
     */
    /**
     * An \`AbortSignal\` that indicates whether the communication channel is still open.
     */
    get signal() {
      return __privateGet(this, _abort).signal;
    }
    /**
     * A boolean indicating whether the communication channel is still open.
     */
    get closed() {
      return __privateGet(this, _abort).signal.aborted;
    }
    /**
     * Closes the communication channel between the two threads. This will prevent
     * any further communication between the threads, and will clean up any memory
     * associated with in-progress communication. It will also reject any inflight
     * function calls between threads with a \`ThreadClosedError\`.
     */
    close() {
      __privateGet(this, _abort).abort();
    }
    /**
     * Requests that the thread provide the context needed to make a function
     * call between threads. You provide this method a function to call and the
     * unserialized arguments you wish to call it with, and the thread will call
     * the function you provided with a serialized call ID, the serialized arguments,
     * and any transferable objects that need to be passed between threads.
     */
    call(func, args) {
      if (this.closed) {
        return Promise.reject(new ThreadClosedError());
      }
      const transferable = [];
      const serialized = this.serialization.serialize(args, this, transferable);
      const id2 = nanoid();
      const done = __privateMethod(this, _Thread_instances, waitForResult_fn).call(this, id2);
      func(id2, serialized, transferable);
      return done;
    }
  };
  _abort = new WeakMap();
  _idsToResolver = new WeakMap();
  _Thread_instances = new WeakSet();
  callLocal_fn = async function(func, args, withResult) {
    try {
      const result = this.functions.call ? await this.functions.call(func, args, this) : await func(...this.serialization.deserialize(args, this));
      const transferable = [];
      const serialized = this.serialization.serialize(result, this, transferable);
      withResult(serialized, void 0, transferable);
    } catch (error) {
      withResult(void 0, this.serialization.serialize(error, this));
    }
  };
  handlerForCall_fn = function(property) {
    return (...args) => {
      try {
        if (typeof property !== "string" && typeof property !== "number") {
          throw new Error(\`Can’t call a symbol method on a thread: \${property.toString()}\`);
        }
        return this.call((id2, serializedArgs, transferable) => {
          this.messages.send([MESSAGE_CALL, id2, property, serializedArgs], transferable);
        }, args);
      } catch (error) {
        return Promise.reject(error);
      }
    };
  };
  resolveCall_fn = function(...args) {
    const callID = args[0];
    const resolver = __privateGet(this, _idsToResolver).get(callID);
    if (resolver) {
      resolver(...args);
      __privateGet(this, _idsToResolver).delete(callID);
    }
  };
  waitForResult_fn = function(id2) {
    const promise = new Promise((resolve, reject) => {
      __privateGet(this, _idsToResolver).set(id2, (_, value, error) => {
        if (error == null) {
          resolve(this.serialization.deserialize(value, this));
        } else {
          reject(this.serialization.deserialize(error, this));
        }
      });
    });
    Object.defineProperty(promise, Symbol.asyncIterator, {
      async *value() {
        const result = await promise;
        Object.defineProperty(result, Symbol.asyncIterator, {
          value: () => result
        });
        yield* result;
      }
    });
    return promise;
  };
  function createThreadImports(handlerForImport, imported) {
    let call;
    if (imported == null) {
      if (typeof Proxy !== "function") {
        throw new Error(\`You must pass an array of callable methods in environments without Proxies.\`);
      }
      const cache = /* @__PURE__ */ new Map();
      call = new Proxy({}, {
        get(_target, property) {
          if (cache.has(property)) {
            return cache.get(property);
          }
          const handler = handlerForImport(property);
          cache.set(property, handler);
          return handler;
        }
      });
    } else {
      call = {};
      for (const method of imported) {
        Object.defineProperty(call, method, {
          value: handlerForImport(method),
          writable: false,
          configurable: true,
          enumerable: true
        });
      }
    }
    return call;
  }
  function missingThreadFunction() {
    throw new Error(\`You attempted to call a function that is not stored. It may have already been released.\`);
  }

  // ../../../node_modules/.pnpm/@quilted+threads@3.1.3_@preact+signals-core@1.10.0/node_modules/@quilted/threads/build/esm/threads/window/shared.mjs
  var CHECK_MESSAGE = "quilt.threads.ping";
  var RESPONSE_MESSAGE = "quilt.threads.pong";

  // ../../../node_modules/.pnpm/@quilted+threads@3.1.3_@preact+signals-core@1.10.0/node_modules/@quilted/threads/build/esm/threads/window/ThreadNestedWindow.mjs
  function nestedWindowToThreadTarget(parent, {
    targetOrigin = "*"
  } = {}) {
    const ready = () => {
      const respond = () => parent.postMessage(RESPONSE_MESSAGE, targetOrigin);
      self.addEventListener("message", ({
        data,
        source
      }) => {
        if (source !== parent) return;
        if (data === CHECK_MESSAGE) respond();
      });
      respond();
    };
    if (document.readyState === "complete") {
      ready();
    } else {
      document.addEventListener("readystatechange", () => {
        if (document.readyState === "complete") {
          ready();
        }
      });
    }
    return {
      send(message, transfer) {
        return parent.postMessage(message, targetOrigin, transfer);
      },
      listen(listen, {
        signal
      }) {
        self.addEventListener("message", (event) => {
          if (event.data === CHECK_MESSAGE) return;
          listen(event.data);
        }, {
          signal
        });
      }
    };
  }

  // ../../../node_modules/.pnpm/@quilted+threads@3.1.3_@preact+signals-core@1.10.0/node_modules/@quilted/threads/build/esm/threads/ThreadNestedIframe.mjs
  var ThreadNestedIframe = class extends Thread {
    constructor({
      parent = globalThis.parent,
      targetOrigin = "*",
      ...options
    } = {}) {
      if (typeof self === "undefined" || parent == null) {
        throw new Error("You are not inside an iframe, because there is no parent window.");
      }
      super(nestedWindowToThreadTarget(parent, {
        targetOrigin
      }), options);
      this.parent = parent;
    }
  };

  // scripts/iframe-entry.js
  new ThreadNestedIframe({
    exports: {
      async render(options, receiver, hostApi) {
        if (options.remoteElements) {
          options.remoteElements.forEach((def) => {
            if (customElements.get(def.tagName)) return;
            const remoteElement = class extends RemoteElement {
              static get remoteAttributes() {
                return def.remoteAttributes || [];
              }
              static get remoteEvents() {
                return def.remoteEvents || [];
              }
            };
            Object.defineProperty(remoteElement, "name", {
              value: \`Remote\${def.tagName.replace(
                /(^w|-w)/g,
                (c) => c.replace("-", "").toUpperCase()
              )}\`
            });
            customElements.define(def.tagName, remoteElement);
          });
        }
        const root = document.querySelector("#root");
        const observer = new RemoteMutationObserver(receiver);
        observer.observe(root);
        const { code } = options;
        if (code && root) {
          try {
            const scriptFunction = new Function("root", "console", code);
            scriptFunction(root, console);
          } catch (e) {
            console.error("Error executing remote script:", e);
          }
        }
      }
    }
  });
})();

  <\/script>
</body>
</html>`,_e=1,Ee=2,be=3,ve=4,ye=5,Te=Symbol.for("quilt.threads.serialize"),et=Symbol.for("quilt.threads.transferable");class tt extends AbortController{constructor(...e){super();const t=e.find(r=>r.aborted);if(t)this.abort(t.reason);else{const r=o=>this.abort(o.target.reason),s={signal:this.signal};for(const o of e)o.addEventListener("abort",r,s)}}}class ge extends Error{constructor(){super("You attempted to call a function on a closed thread.")}}let rt="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";function Re(n=21){let e="",t=crypto.getRandomValues(new Uint8Array(n));for(let r=0;r<n;r++)e+=rt[63&t[r]];return e}class nt{constructor(){A(this,K);A(this,U,new Map);A(this,C,new Map);A(this,x,new Map);A(this,W,new WeakMap)}get(e){return y(this,C).get(e)}release(e){const t=y(this,C).get(e);return t&&(y(this,C).delete(e),y(this,U).delete(t)),!!t}serialize(e){let t=y(this,U).get(e);return t==null&&(t=Re(),y(this,U).set(e,t),y(this,C).set(t,e)),t}deserialize(e,t){var s,o;let r=(s=y(this,x).get(e))==null?void 0:s.deref();return r||(r=(...a)=>{if(!y(this,x).has(e))throw new Error("You attempted to call a function that was already revoked.");return t.call((d,l,h)=>{t.messages.send([be,d,e,l],h)},a)},(o=R(this,K,De).call(this,t))==null||o.register(r,e),y(this,x).set(e,new WeakRef(r)),r)}}U=new WeakMap,C=new WeakMap,x=new WeakMap,W=new WeakMap,K=new WeakSet,De=function(e){let t=y(this,W).get(e);if(!(typeof FinalizationRegistry>"u"))return t||(t=new FinalizationRegistry(r=>{e.messages.send([ye,r])}),y(this,W).set(e,t)),t};function ot(n){return n!=null&&(Symbol.asyncIterator in n||Symbol.iterator in n)&&typeof n.next=="function"}function Se(n){if(n==null||typeof n!="object")return!1;const e=Object.getPrototypeOf(n);return e==null||e===Object.prototype}const ne="_@f",we="_@i";class it{constructor(e){A(this,w);A(this,k);A(this,j);Z(this,k,e==null?void 0:e.serialize),Z(this,j,e==null?void 0:e.deserialize)}serialize(e,t,r){return R(this,w,J).call(this,e,t,r)}deserialize(e,t){return R(this,w,I).call(this,e,t)}}k=new WeakMap,j=new WeakMap,w=new WeakSet,J=function(e,t,r,s=new Map,o=!1){if(e==null)return e;if(s.has(e))return s.get(e);if(s.set(e,void 0),typeof e=="object"){if(y(this,k)&&!o){const l=y(this,k).call(this,e,h=>R(this,w,J).call(this,h,t,r,s,!0),t,r);if(l!==void 0)return s.set(e,l),l}if(e[et])return r==null||r.push(e),s.set(e,e),e;const a=l=>R(this,w,J).call(this,l,t,r,s);if(typeof e[Te]=="function"){const l=e[Te]({serialize:a});return s.set(e,l),l}if(Array.isArray(e)){const l=e.map(h=>a(h));return s.set(e,l),l}if(e instanceof Map){const l=[...e.entries()].map(([i,p])=>[a(i),a(p)]),h=new Map(l);return s.set(e,h),h}if(e instanceof Set){const l=[...e].map(i=>a(i)),h=new Set(l);return s.set(e,h),h}const d=ot(e);if(Se(e)||d){const l={};for(const h of Object.keys(e))l[h]=a(e[h]);return d&&(l.next??(l.next=a(e.next.bind(e))),l.return??(l.return=a(e.return.bind(e))),l.throw??(l.throw=a(e.throw.bind(e))),l[we]=!0),s.set(e,l),l}}if(typeof e=="function"){const a=t.functions.serialize(e,t,r),d={[ne]:a};return s.set(e,d),d}return s.set(e,e),e},I=function(e,t,r=!1){if(e==null)return e;if(typeof e=="object"){if(y(this,j)&&!r){const o=y(this,j).call(this,e,a=>R(this,w,I).call(this,a,t,!0),t);if(o!==void 0)return o}if(e==null)return e;if(Array.isArray(e))return e.map(o=>R(this,w,I).call(this,o,t));if(e instanceof Map)return new Map([...e].map(([o,a])=>[R(this,w,I).call(this,o,t),R(this,w,I).call(this,a,t)]));if(e instanceof Set)return new Set([...e].map(o=>R(this,w,I).call(this,o,t)));if(ne in e)return t.functions.deserialize(e[ne],t);if(!Se(e))return e;const s={};for(const o of Object.keys(e))o===we?s[Symbol.asyncIterator]=()=>s:s[o]=R(this,w,I).call(this,e[o],t);return s}return e};class st{constructor(e,{imports:t,exports:r,functions:s=new nt,serialization:o=new it,signal:a}={}){A(this,N);A(this,D);A(this,P,new Map);var d,l,h,i;this.messages=e,Z(this,D,a?new tt(a):new AbortController),this.exports=r??{},this.imports=at(R(this,N,Le).bind(this),t),this.functions=s,this.serialization=o,(l=(d=this.functions).start)==null||l.call(d,this),(i=(h=this.serialization).start)==null||i.call(h,this),this.signal.addEventListener("abort",()=>{for(const p of y(this,P).keys())R(this,N,ae).call(this,p,void 0,new ge);y(this,P).clear()},{once:!0}),e.listen(async p=>{if(!(Array.isArray(p)&&typeof p[0]=="number"))return;const c=p;switch(c[0]){case _e:{const[,f,b,v]=c,T=this.exports[b]??(()=>{throw new Error(`No '${b}' method is exported from this thread`)});await R(this,N,se).call(this,T,v,(g,M,S)=>{this.messages.send([Ee,f,g,M],S)});break}case be:{const[,f,b,v]=c,T=this.functions.get(b,this)??lt;await R(this,N,se).call(this,T,v,(g,M,S)=>{this.messages.send([ve,f,g,M],S)});break}case Ee:case ve:{R(this,N,ae).call(this,...c.slice(1));break}case ye:{const f=c[1];this.functions.release(f,this);break}}},{signal:this.signal})}get signal(){return y(this,D).signal}get closed(){return y(this,D).signal.aborted}close(){y(this,D).abort()}call(e,t){if(this.closed)return Promise.reject(new ge);const r=[],s=this.serialization.serialize(t,this,r),o=Re(),a=R(this,N,ze).call(this,o);return e(o,s,r),a}}D=new WeakMap,P=new WeakMap,N=new WeakSet,se=async function(e,t,r){try{const s=this.functions.call?await this.functions.call(e,t,this):await e(...this.serialization.deserialize(t,this)),o=[],a=this.serialization.serialize(s,this,o);r(a,void 0,o)}catch(s){r(void 0,this.serialization.serialize(s,this))}},Le=function(e){return(...t)=>{try{if(typeof e!="string"&&typeof e!="number")throw new Error(`Can’t call a symbol method on a thread: ${e.toString()}`);return this.call((r,s,o)=>{this.messages.send([_e,r,e,s],o)},t)}catch(r){return Promise.reject(r)}}},ae=function(...e){const t=e[0],r=y(this,P).get(t);r&&(r(...e),y(this,P).delete(t))},ze=function(e){const t=new Promise((r,s)=>{y(this,P).set(e,(o,a,d)=>{d==null?r(this.serialization.deserialize(a,this)):s(this.serialization.deserialize(d,this))})});return Object.defineProperty(t,Symbol.asyncIterator,{async*value(){const r=await t;Object.defineProperty(r,Symbol.asyncIterator,{value:()=>r}),yield*r}}),t};function at(n,e){let t;if(e==null){if(typeof Proxy!="function")throw new Error("You must pass an array of callable methods in environments without Proxies.");const r=new Map;t=new Proxy({},{get(s,o){if(r.has(o))return r.get(o);const a=n(o);return r.set(o,a),a}})}else{t={};for(const r of e)Object.defineProperty(t,r,{value:n(r),writable:!1,configurable:!0,enumerable:!0})}return t}function lt(){throw new Error("You attempted to call a function that is not stored. It may have already been released.")}const ct="quilt.threads.ping",Me="quilt.threads.pong";function dt(n,{targetOrigin:e="*"}={}){let t=!1;const r=function(a,d){n.postMessage(a,e,d)},s=new Promise(o=>{const a=new AbortController;globalThis.window.addEventListener("message",d=>{d.source===n&&d.data===Me&&(t=!0,a.abort(),o())},{signal:a.signal}),a.signal.addEventListener("abort",()=>o(),{once:!0}),r(ct)});return{send(o,a){return t?r(o,a):s.then(()=>{if(t)return r(o,a)})},listen(o,{signal:a}){self.addEventListener("message",d=>{d.source===n&&d.data!==Me&&o(d.data)},{signal:a})}}}class ut extends st{constructor(e,{targetOrigin:t="*",...r}={}){super(dt(e.contentWindow,{targetOrigin:t}),r),this.iframe=e}}const Ne=_.forwardRef(({content:n,children:e,...t},r)=>m.jsx("span",{ref:r,...t,children:n||e}));Ne.displayName="UIText";const Ae=_.forwardRef(({label:n,onPress:e,onClick:t,children:r,...s},o)=>{const a=d=>{e&&e(),t&&t(d)};return m.jsx("button",{ref:o,onClick:a,style:{padding:"8px 16px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},...s,children:n||r})});Ae.displayName="UIButton";const Pe=_.forwardRef(({direction:n="vertical",spacing:e="8",align:t="stretch",justify:r="flex-start",children:s,...o},a)=>m.jsx("div",{ref:a,style:{display:"flex",flexDirection:n==="horizontal"?"row":"column",gap:`${e}px`,alignItems:t,justifyContent:r},...o,children:s}));Pe.displayName="UIStack";const Ie=_.forwardRef(({src:n,alt:e,width:t,height:r,children:s,...o},a)=>m.jsx("img",{ref:a,src:n,alt:e,width:t,height:r,style:{maxWidth:"100%",height:"auto",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)"},...o}));Ie.displayName="UIImage";const oe={name:"basic",elements:[{tagName:"ui-text",component:Ne,propMapping:{content:"content"},eventMapping:{}},{tagName:"ui-button",component:Ae,propMapping:{label:"label"},eventMapping:{press:"onPress"}},{tagName:"ui-stack",component:Pe,propMapping:{direction:"direction",spacing:"spacing",align:"align",justify:"justify"},eventMapping:{}},{tagName:"ui-image",component:Ie,propMapping:{src:"src",alt:"alt",width:"width",height:"height"},eventMapping:{}}]},pt=({receiver:n})=>{const e=_.useRef(null);return _.useEffect(()=>{if(e.current)return n.connect(e.current),()=>{n.disconnect()}},[n]),m.jsx("div",{ref:e,"data-testid":"standard-dom-renderer-container"})},mt=({resource:n,library:e,remoteElements:t=[],onUIAction:r})=>{const s=_.useRef(null),o=_.useRef(null),[a,d]=_.useState(null),l=_.useMemo(()=>(n.mimeType||"").includes("framework=react")?"react":"webcomponents",[n.mimeType]),h=`${e==null?void 0:e.name}-${l}`,{receiver:i,components:p}=_.useMemo(()=>{switch(l){case"react":{const c=new We,f=e||oe,b=new Map;return f&&f.elements.forEach(v=>{const T=Ze(v.component);b.set(v.tagName,T)}),{receiver:c,components:b}}case"webcomponents":default:return{receiver:new He,components:null}}},[n,e,t]);_.useEffect(()=>{function c(f){var b;if(s.current&&f.source===s.current.contentWindow){const v=f.data;if(!v)return;(b=r==null?void 0:r(v))==null||b.catch(T=>{console.error("Error handling UI action result in RemoteDOMResourceRenderer:",T)})}}return window.addEventListener("message",c),()=>window.removeEventListener("message",c)},[r]),_.useEffect(()=>{const c=o.current;return o.current=null,()=>{c==null||c.close()}},[h]);const u=()=>{const c=s.current;if(!c||o.current)return;const f=new ut(c);o.current=f;const{code:b,error:v}=xe(n);if(v){d(v);return}if(b&&(i!=null&&i.connection)){const T={code:b,remoteElements:t,useReactRenderer:l==="react",componentLibrary:e==null?void 0:e.name};f.imports.render(T,i.connection).catch(g=>console.error("Error calling remote render:",g))}};return a?m.jsx("p",{className:"text-red-500",children:a}):m.jsxs(m.Fragment,{children:[m.jsx("iframe",{ref:s,srcDoc:Qe,sandbox:"allow-scripts",style:{display:"none"},title:"Remote DOM Sandbox",onLoad:u},h),l==="react"&&p?m.jsx(Xe,{receiver:i,components:p}):m.jsx(pt,{receiver:i})]})};function ft(n){var e;if(n.contentType)return n.contentType;if(n.mimeType==="text/html")return"rawHtml";if(n.mimeType==="text/uri-list")return"externalUrl";if((e=n.mimeType)!=null&&e.startsWith("application/vnd.mcp-ui.remote-dom"))return"remoteDom"}const Oe=n=>{const{resource:e,onUIAction:t,supportedContentTypes:r,htmlProps:s,remoteDomProps:o}=n,a=ft(e);if(r&&a&&!r.includes(a))return m.jsxs("p",{className:"text-red-500",children:["Unsupported content type: ",a,"."]});switch(a){case"rawHtml":{const{proxy:d,...l}=s||{};return m.jsx(X,{resource:e,onUIAction:t,...l})}case"externalUrl":return m.jsx(X,{resource:e,onUIAction:t,...s});case"remoteDom":return m.jsx(mt,{resource:e,onUIAction:t,library:(o==null?void 0:o.library)||oe,...o});default:return m.jsx("p",{className:"text-red-500",children:"Unsupported resource type."})}};Oe.displayName="UIResourceRenderer";const ht={tagName:"ui-card"},_t={tagName:"ui-button",remoteAttributes:["label"],remoteEvents:["click","press"]},Et={tagName:"ui-text",remoteAttributes:["content"]},bt={tagName:"ui-stack",remoteAttributes:["direction","spacing","align","justify"]},vt={tagName:"ui-image",remoteAttributes:["src","alt","width","height"]};E.UIResourceRenderer=Oe,E.basicComponentLibrary=oe,E.remoteButtonDefinition=_t,E.remoteCardDefinition=ht,E.remoteImageDefinition=vt,E.remoteStackDefinition=bt,E.remoteTextDefinition=Et,Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});
