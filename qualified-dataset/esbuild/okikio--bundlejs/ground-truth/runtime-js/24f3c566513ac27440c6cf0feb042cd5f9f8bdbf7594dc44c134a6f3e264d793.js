(()=>{var Lt=Object.create;var lt=Object.defineProperty;var Wt=Object.getOwnPropertyDescriptor;var zt=Object.getOwnPropertyNames;var Gt=Object.getPrototypeOf,Jt=Object.prototype.hasOwnProperty;var qt=(U,W)=>()=>(W||U((W={exports:{}}).exports,W),W.exports);var Yt=(U,W,K,Q)=>{if(W&&typeof W=="object"||typeof W=="function")for(let X of zt(W))!Jt.call(U,X)&&X!==K&&lt(U,X,{get:()=>W[X],enumerable:!(Q=Wt(W,X))||Q.enumerable});return U};var Ht=(U,W,K)=>(K=U!=null?Lt(Gt(U)):{},Yt(W||!U||!U.__esModule?lt(K,"default",{value:U,enumerable:!0}):K,U));var ot=qt((tn,We)=>{(U=>{"use strict";var W=Object.defineProperty,K=Object.getOwnPropertyDescriptor,Q=Object.getOwnPropertyNames,X=Object.prototype.hasOwnProperty,Se=(e,t)=>{for(var r in t)W(e,r,{get:t[r],enumerable:!0})},ce=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let m of Q(t))!X.call(e,m)&&m!==r&&W(e,m,{get:()=>t[m],enumerable:!(a=K(t,m))||a.enumerable});return e},je=e=>ce(W({},"__esModule",{value:!0}),e),oe=(e,t,r)=>new Promise((a,m)=>{var p=i=>{try{x(r.next(i))}catch(b){m(b)}},f=i=>{try{x(r.throw(i))}catch(b){m(b)}},x=i=>i.done?a(i.value):Promise.resolve(i.value).then(p,f);x((r=r.apply(e,t)).next())}),ge={};Se(ge,{analyzeMetafile:()=>Ct,analyzeMetafileSync:()=>Rt,build:()=>Tt,buildSync:()=>At,context:()=>$t,default:()=>Ft,formatMessages:()=>Pt,formatMessagesSync:()=>Ut,initialize:()=>Mt,stop:()=>It,transform:()=>Ot,transformSync:()=>Dt,version:()=>jt}),U.exports=je(ge);function xe(e){let t=a=>{if(a===null)r.write8(0);else if(typeof a=="boolean")r.write8(1),r.write8(+a);else if(typeof a=="number")r.write8(2),r.write32(a|0);else if(typeof a=="string")r.write8(3),r.write(Z(a));else if(a instanceof Uint8Array)r.write8(4),r.write(a);else if(a instanceof Array){r.write8(5),r.write32(a.length);for(let m of a)t(m)}else{let m=Object.keys(a);r.write8(6),r.write32(m.length);for(let p of m)r.write(Z(p)),t(a[p])}},r=new Te;return r.write32(0),r.write32(e.id<<1|+!e.isRequest),t(e.value),Le(r.buf,r.len-4,0),r.buf.subarray(0,r.len)}function Ce(e){let t=()=>{switch(r.read8()){case 0:return null;case 1:return!!r.read8();case 2:return r.read32();case 3:return z(r.read());case 4:return r.read();case 5:{let f=r.read32(),x=[];for(let i=0;i<f;i++)x.push(t());return x}case 6:{let f=r.read32(),x={};for(let i=0;i<f;i++)x[z(r.read())]=t();return x}default:throw new Error("Invalid packet")}},r=new Te(e),a=r.read32(),m=(a&1)===0;a>>>=1;let p=t();if(r.ptr!==e.length)throw new Error("Invalid packet");return{id:a,isRequest:m,value:p}}var Te=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let t=new Uint8Array((this.len+e)*2);t.set(this.buf),this.buf=t}return this.len+=e,this.len-e}write8(e){let t=this._write(1);this.buf[t]=e}write32(e){let t=this._write(4);Le(this.buf,e,t)}write(e){let t=this._write(4+e.length);Le(this.buf,e.length,t),this.buf.set(e,t+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return qe(this.buf,this._read(4))}read(){let e=this.read32(),t=new Uint8Array(e),r=this._read(t.length);return t.set(this.buf.subarray(r,r+e)),t}},Z,z,Ve;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let e=new TextEncoder,t=new TextDecoder;Z=r=>e.encode(r),z=r=>t.decode(r),Ve='new TextEncoder().encode("")'}else if(typeof Buffer<"u")Z=e=>Buffer.from(e),z=e=>{let{buffer:t,byteOffset:r,byteLength:a}=e;return Buffer.from(t,r,a).toString()},Ve='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(Z("")instanceof Uint8Array))throw new Error(`Invariant violation: "${Ve} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function qe(e,t){return(e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24)>>>0}function Le(e,t,r){e[r++]=t,e[r++]=t>>8,e[r++]=t>>16,e[r++]=t>>24}var ue=String.fromCharCode;function se(e,t,r){let a=e[t],m=1,p=0;for(let f=0;f<t;f++)e[f]===10?(m++,p=0):p++;throw new SyntaxError(r||(t===e.length?"Unexpected end of input while parsing JSON":a>=32&&a<=126?`Unexpected character ${ue(a)} in JSON at position ${t} (line ${m}, column ${p})`:`Unexpected byte 0x${a.toString(16)} in JSON at position ${t} (line ${m}, column ${p})`))}function ft(e){if(!(e instanceof Uint8Array))throw new Error("JSON input must be a Uint8Array");let t=[],r=[],a=[],m=e.length,p=null,f=0,x,i=0;for(;i<m;){let b=e[i++];if(b<=32)continue;let k;switch(f===2&&p===null&&b!==34&&b!==125&&se(e,--i),b){case 116:{(e[i++]!==114||e[i++]!==117||e[i++]!==101)&&se(e,--i),k=!0;break}case 102:{(e[i++]!==97||e[i++]!==108||e[i++]!==115||e[i++]!==101)&&se(e,--i),k=!1;break}case 110:{(e[i++]!==117||e[i++]!==108||e[i++]!==108)&&se(e,--i),k=null;break}case 45:case 46:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:{let j=i;for(k=ue(b),b=e[i];;){switch(b){case 43:case 45:case 46:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 101:case 69:{k+=ue(b),b=e[++i];continue}}break}k=+k,isNaN(k)&&se(e,--j,"Invalid number");break}case 34:{for(k="";i>=m&&se(e,m),b=e[i++],b!==34;)if(b===92)switch(e[i++]){case 34:k+='"';break;case 47:k+="/";break;case 92:k+="\\";break;case 98:k+="\b";break;case 102:k+="\f";break;case 110:k+=`
`;break;case 114:k+="\r";break;case 116:k+="	";break;case 117:{let j=0;for(let N=0;N<4;N++)b=e[i++],j<<=4,b>=48&&b<=57?j|=b-48:b>=97&&b<=102?j|=b+-87:b>=65&&b<=70?j|=b+-55:se(e,--i);k+=ue(j);break}default:se(e,--i);break}else if(b<=127)k+=ue(b);else if((b&224)===192)k+=ue((b&31)<<6|e[i++]&63);else if((b&240)===224)k+=ue((b&15)<<12|(e[i++]&63)<<6|e[i++]&63);else if((b&248)==240){let j=(b&7)<<18|(e[i++]&63)<<12|(e[i++]&63)<<6|e[i++]&63;j>65535&&(j-=65536,k+=ue(j>>10&1023|55296),j=56320|j&1023),k+=ue(j)}k[0];break}case 91:{k=[],t.push(p),r.push(x),a.push(f),p=null,x=k,f=1;continue}case 123:{k={},t.push(p),r.push(x),a.push(f),p=null,x=k,f=2;continue}case 93:{f!==1&&se(e,--i),k=x,p=t.pop(),x=r.pop(),f=a.pop();break}case 125:{f!==2&&se(e,--i),k=x,p=t.pop(),x=r.pop(),f=a.pop();break}default:se(e,--i)}for(b=e[i];b<=32;)b=e[++i];switch(f){case 0:{if(i===m)return k;break}case 1:{if(x.push(k),b===44){i++;continue}if(b===93)continue;break}case 2:{if(p===null){if(p=k,b===58){i++;continue}}else{if(x[p]=k,p=null,b===44){i++;continue}if(b===125)continue}break}}break}se(e,i)}var H=JSON.stringify,Ye="warning",He="silent";function ke(e,t){let r=[];for(let a of e){if(te(a,t),a.indexOf(",")>=0)throw new Error(`Invalid ${t}: ${a}`);r.push(a)}return r.join(",")}var Ae=()=>null,G=e=>typeof e=="boolean"?null:"a boolean",C=e=>typeof e=="string"?null:"a string",De=e=>e instanceof RegExp?null:"a RegExp object",ye=e=>typeof e=="number"&&e===(e|0)?null:"an integer",dt=e=>typeof e=="number"&&e===(e|0)&&e>=0&&e<=65535?null:"a valid port number",Ke=e=>typeof e=="function"?null:"a function",fe=e=>Array.isArray(e)?null:"an array",ee=e=>Array.isArray(e)&&e.every(t=>typeof t=="string")?null:"an array of strings",re=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",ht=e=>typeof e=="object"&&e!==null?null:"an array or an object",mt=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",Qe=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",Xe=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",pt=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",Ze=e=>typeof e=="string"||Array.isArray(e)&&e.every(t=>typeof t=="string")?null:"a string or an array of strings",et=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array",gt=e=>typeof e=="string"||e instanceof URL?null:"a string or a URL";function s(e,t,r,a){let m=e[r];if(t[r+""]=!0,m===void 0)return;let p=a(m);if(p!==null)throw new Error(`${H(r)} must be ${p}`);return m}function q(e,t,r){for(let a in e)if(!(a in t))throw new Error(`Invalid option ${r}: ${H(a)}`)}function yt(e){let t=Object.create(null),r=s(e,t,"wasmURL",gt),a=s(e,t,"wasmModule",mt),m=s(e,t,"worker",G);return q(e,t,"in initialize() call"),{wasmURL:r,wasmModule:a,worker:m}}function tt(e){let t;if(e!==void 0){t=Object.create(null);for(let r in e){let a=e[r];if(typeof a=="string"||a===!1)t[r]=a;else throw new Error(`Expected ${H(r)} in mangle cache to map to either a string or false`)}}return t}function Ue(e,t,r,a,m){let p=s(t,r,"color",G),f=s(t,r,"logLevel",C),x=s(t,r,"logLimit",ye);p!==void 0?e.push(`--color=${p}`):a&&e.push("--color=true"),e.push(`--log-level=${f||m}`),e.push(`--log-limit=${x||0}`)}function te(e,t,r){if(typeof e!="string")throw new Error(`Expected value for ${t}${r!==void 0?" "+H(r):""} to be a string, got ${typeof e} instead`);return e}function nt(e,t,r){let a=s(t,r,"legalComments",C),m=s(t,r,"sourceRoot",C),p=s(t,r,"sourcesContent",G),f=s(t,r,"target",Ze),x=s(t,r,"format",C),i=s(t,r,"globalName",C),b=s(t,r,"mangleProps",De),k=s(t,r,"reserveProps",De),j=s(t,r,"mangleQuoted",G),N=s(t,r,"minify",G),R=s(t,r,"minifySyntax",G),B=s(t,r,"minifyWhitespace",G),V=s(t,r,"minifyIdentifiers",G),P=s(t,r,"lineLimit",ye),J=s(t,r,"drop",ee),O=s(t,r,"dropLabels",ee),$=s(t,r,"charset",C),y=s(t,r,"treeShaking",G),h=s(t,r,"ignoreAnnotations",G),l=s(t,r,"jsx",C),u=s(t,r,"jsxFactory",C),d=s(t,r,"jsxFragment",C),w=s(t,r,"jsxImportSource",C),E=s(t,r,"jsxDev",G),c=s(t,r,"jsxSideEffects",G),g=s(t,r,"define",re),_=s(t,r,"logOverride",re),D=s(t,r,"supported",re),n=s(t,r,"pure",ee),o=s(t,r,"keepNames",G),v=s(t,r,"platform",C),T=s(t,r,"tsconfigRaw",pt),I=s(t,r,"absPaths",ee);if(a&&e.push(`--legal-comments=${a}`),m!==void 0&&e.push(`--source-root=${m}`),p!==void 0&&e.push(`--sources-content=${p}`),f&&e.push(`--target=${ke(Array.isArray(f)?f:[f],"target")}`),x&&e.push(`--format=${x}`),i&&e.push(`--global-name=${i}`),v&&e.push(`--platform=${v}`),T&&e.push(`--tsconfig-raw=${typeof T=="string"?T:JSON.stringify(T)}`),N&&e.push("--minify"),R&&e.push("--minify-syntax"),B&&e.push("--minify-whitespace"),V&&e.push("--minify-identifiers"),P&&e.push(`--line-limit=${P}`),$&&e.push(`--charset=${$}`),y!==void 0&&e.push(`--tree-shaking=${y}`),h&&e.push("--ignore-annotations"),J)for(let S of J)e.push(`--drop:${te(S,"drop")}`);if(O&&e.push(`--drop-labels=${ke(O,"drop label")}`),I&&e.push(`--abs-paths=${ke(I,"abs paths")}`),b&&e.push(`--mangle-props=${Me(b)}`),k&&e.push(`--reserve-props=${Me(k)}`),j!==void 0&&e.push(`--mangle-quoted=${j}`),l&&e.push(`--jsx=${l}`),u&&e.push(`--jsx-factory=${u}`),d&&e.push(`--jsx-fragment=${d}`),w&&e.push(`--jsx-import-source=${w}`),E&&e.push("--jsx-dev"),c&&e.push("--jsx-side-effects"),g)for(let S in g){if(S.indexOf("=")>=0)throw new Error(`Invalid define: ${S}`);e.push(`--define:${S}=${te(g[S],"define",S)}`)}if(_)for(let S in _){if(S.indexOf("=")>=0)throw new Error(`Invalid log override: ${S}`);e.push(`--log-override:${S}=${te(_[S],"log override",S)}`)}if(D)for(let S in D){if(S.indexOf("=")>=0)throw new Error(`Invalid supported: ${S}`);let L=D[S];if(typeof L!="boolean")throw new Error(`Expected value for supported ${H(S)} to be a boolean, got ${typeof L} instead`);e.push(`--supported:${S}=${L}`)}if(n)for(let S of n)e.push(`--pure:${te(S,"pure")}`);o&&e.push("--keep-names")}function wt(e,t,r,a,m){var p;let f=[],x=[],i=Object.create(null),b=null,k=null;Ue(f,t,i,r,a),nt(f,t,i);let j=s(t,i,"sourcemap",Xe),N=s(t,i,"bundle",G),R=s(t,i,"splitting",G),B=s(t,i,"preserveSymlinks",G),V=s(t,i,"metafile",G),P=s(t,i,"outfile",C),J=s(t,i,"outdir",C),O=s(t,i,"outbase",C),$=s(t,i,"tsconfig",C),y=s(t,i,"resolveExtensions",ee),h=s(t,i,"nodePaths",ee),l=s(t,i,"mainFields",ee),u=s(t,i,"conditions",ee),d=s(t,i,"external",ee),w=s(t,i,"packages",C),E=s(t,i,"alias",re),c=s(t,i,"loader",re),g=s(t,i,"outExtension",re),_=s(t,i,"publicPath",C),D=s(t,i,"entryNames",C),n=s(t,i,"chunkNames",C),o=s(t,i,"assetNames",C),v=s(t,i,"inject",ee),T=s(t,i,"banner",re),I=s(t,i,"footer",re),S=s(t,i,"entryPoints",ht),L=s(t,i,"absWorkingDir",C),F=s(t,i,"stdin",re),M=(p=s(t,i,"write",G))!=null?p:m,ne=s(t,i,"allowOverwrite",G),Y=s(t,i,"mangleCache",re);if(i.plugins=!0,q(t,i,`in ${e}() call`),j&&f.push(`--sourcemap${j===!0?"":`=${j}`}`),N&&f.push("--bundle"),ne&&f.push("--allow-overwrite"),R&&f.push("--splitting"),B&&f.push("--preserve-symlinks"),V&&f.push("--metafile"),P&&f.push(`--outfile=${P}`),J&&f.push(`--outdir=${J}`),O&&f.push(`--outbase=${O}`),$&&f.push(`--tsconfig=${$}`),w&&f.push(`--packages=${w}`),y&&f.push(`--resolve-extensions=${ke(y,"resolve extension")}`),_&&f.push(`--public-path=${_}`),D&&f.push(`--entry-names=${D}`),n&&f.push(`--chunk-names=${n}`),o&&f.push(`--asset-names=${o}`),l&&f.push(`--main-fields=${ke(l,"main field")}`),u&&f.push(`--conditions=${ke(u,"condition")}`),d)for(let A of d)f.push(`--external:${te(A,"external")}`);if(E)for(let A in E){if(A.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${A}`);f.push(`--alias:${A}=${te(E[A],"alias",A)}`)}if(T)for(let A in T){if(A.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${A}`);f.push(`--banner:${A}=${te(T[A],"banner",A)}`)}if(I)for(let A in I){if(A.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${A}`);f.push(`--footer:${A}=${te(I[A],"footer",A)}`)}if(v)for(let A of v)f.push(`--inject:${te(A,"inject")}`);if(c)for(let A in c){if(A.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${A}`);f.push(`--loader:${A}=${te(c[A],"loader",A)}`)}if(g)for(let A in g){if(A.indexOf("=")>=0)throw new Error(`Invalid out extension: ${A}`);f.push(`--out-extension:${A}=${te(g[A],"out extension",A)}`)}if(S)if(Array.isArray(S))for(let A=0,me=S.length;A<me;A++){let ie=S[A];if(typeof ie=="object"&&ie!==null){let ae=Object.create(null),pe=s(ie,ae,"in",C),le=s(ie,ae,"out",C);if(q(ie,ae,"in entry point at index "+A),pe===void 0)throw new Error('Missing property "in" for entry point at index '+A);if(le===void 0)throw new Error('Missing property "out" for entry point at index '+A);x.push([le,pe])}else x.push(["",te(ie,"entry point at index "+A)])}else for(let A in S)x.push([A,te(S[A],"entry point",A)]);if(F){let A=Object.create(null),me=s(F,A,"contents",et),ie=s(F,A,"resolveDir",C),ae=s(F,A,"sourcefile",C),pe=s(F,A,"loader",C);q(F,A,'in "stdin" object'),ae&&f.push(`--sourcefile=${ae}`),pe&&f.push(`--loader=${pe}`),ie&&(k=ie),typeof me=="string"?b=Z(me):me instanceof Uint8Array&&(b=me)}let he=[];if(h)for(let A of h)A+="",he.push(A);return{entries:x,flags:f,write:M,stdinContents:b,stdinResolveDir:k,absWorkingDir:L,nodePaths:he,mangleCache:tt(Y)}}function bt(e,t,r,a){let m=[],p=Object.create(null);Ue(m,t,p,r,a),nt(m,t,p);let f=s(t,p,"sourcemap",Xe),x=s(t,p,"sourcefile",C),i=s(t,p,"loader",C),b=s(t,p,"banner",C),k=s(t,p,"footer",C),j=s(t,p,"mangleCache",re);return q(t,p,`in ${e}() call`),f&&m.push(`--sourcemap=${f===!0?"external":f}`),x&&m.push(`--sourcefile=${x}`),i&&m.push(`--loader=${i}`),b&&m.push(`--banner=${b}`),k&&m.push(`--footer=${k}`),{flags:m,mangleCache:tt(j)}}function vt(e){let t={},r={didClose:!1,reason:""},a={},m=0,p=0,f=new Uint8Array(16*1024),x=0,i=$=>{let y=x+$.length;if(y>f.length){let l=new Uint8Array(y*2);l.set(f),f=l}f.set($,x),x+=$.length;let h=0;for(;h+4<=x;){let l=qe(f,h);if(h+4+l>x)break;h+=4,B(f.subarray(h,h+l)),h+=l}h>0&&(f.copyWithin(0,h,x),x-=h)},b=$=>{r.didClose=!0,$&&(r.reason=": "+($.message||$));let y="The service was stopped"+r.reason;for(let h in a)a[h](y,null);a={}},k=($,y,h)=>{if(r.didClose)return h("The service is no longer running"+r.reason,null);let l=m++;a[l]=(u,d)=>{try{h(u,d)}finally{$&&$.unref()}},$&&$.ref(),e.writeToStdin(xe({id:l,isRequest:!0,value:y}))},j=($,y)=>{if(r.didClose)throw new Error("The service is no longer running"+r.reason);e.writeToStdin(xe({id:$,isRequest:!1,value:y}))},N=($,y)=>oe(null,null,function*(){try{if(y.command==="ping"){j($,{});return}if(typeof y.key=="number"){let h=t[y.key];if(!h)return;let l=h[y.command];if(l){yield l($,y);return}}throw new Error("Invalid command: "+y.command)}catch(h){let l=[we(h,e,null,void 0,"")];try{j($,{errors:l})}catch{}}}),R=!0,B=$=>{if(R){R=!1;let h=String.fromCharCode(...$);if(h!=="0.28.0")throw new Error(`Cannot start service: Host version "0.28.0" does not match binary version ${H(h)}`);return}let y=Ce($);if(y.isRequest)N(y.id,y.value);else{let h=a[y.id];delete a[y.id],y.value.error?h(y.value.error,{}):h(null,y.value)}};return{readFromStdout:i,afterClose:b,service:{buildOrContext:({callName:$,refs:y,options:h,isTTY:l,defaultWD:u,callback:d})=>{let w=0,E=p++,c={},g={ref(){++w===1&&y&&y.ref()},unref(){--w===0&&(delete t[E],y&&y.unref())}};t[E]=c,g.ref(),xt($,E,k,j,g,e,c,h,l,u,(_,D)=>{try{d(_,D)}finally{g.unref()}})},transform:({callName:$,refs:y,input:h,options:l,isTTY:u,fs:d,callback:w})=>{let E=rt(),c=g=>{try{if(typeof h!="string"&&!(h instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:_,mangleCache:D}=bt($,l,u,He),n={command:"transform",flags:_,inputFS:g!==null,input:g!==null?Z(g):typeof h=="string"?Z(h):h};D&&(n.mangleCache=D),k(y,n,(o,v)=>{if(o)return w(new Error(o),null);let T=_e(v.errors,E),I=_e(v.warnings,E),S=1,L=()=>{if(--S===0){let F={warnings:I,code:v.code,map:v.map,mangleCache:void 0,legalComments:void 0};"legalComments"in v&&(F.legalComments=v==null?void 0:v.legalComments),v.mangleCache&&(F.mangleCache=v==null?void 0:v.mangleCache),w(null,F)}};if(T.length>0)return w($e("Transform failed",T,I),null);v.codeFS&&(S++,d.readFile(v.code,(F,M)=>{F!==null?w(F,null):(v.code=M,L())})),v.mapFS&&(S++,d.readFile(v.map,(F,M)=>{F!==null?w(F,null):(v.map=M,L())})),L()})}catch(_){let D=[];try{Ue(D,l,{},u,He)}catch{}let n=we(_,e,E,void 0,"");k(y,{command:"error",flags:D,error:n},()=>{n.detail=E.load(n.detail),w($e("Transform failed",[n],[]),null)})}};if((typeof h=="string"||h instanceof Uint8Array)&&h.length>1024*1024){let g=c;c=()=>d.writeFile(h,g)}c(null)},formatMessages:({callName:$,refs:y,messages:h,options:l,callback:u})=>{if(!l)throw new Error(`Missing second argument in ${$}() call`);let d={},w=s(l,d,"kind",C),E=s(l,d,"color",G),c=s(l,d,"terminalWidth",ye);if(q(l,d,`in ${$}() call`),w===void 0)throw new Error(`Missing "kind" in ${$}() call`);if(w!=="error"&&w!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${$}() call`);let g={command:"format-msgs",messages:de(h,"messages",null,"",c),isWarning:w==="warning"};E!==void 0&&(g.color=E),c!==void 0&&(g.terminalWidth=c),k(y,g,(_,D)=>{if(_)return u(new Error(_),null);u(null,D.messages)})},analyzeMetafile:({callName:$,refs:y,metafile:h,options:l,callback:u})=>{l===void 0&&(l={});let d={},w=s(l,d,"color",G),E=s(l,d,"verbose",G);q(l,d,`in ${$}() call`);let c={command:"analyze-metafile",metafile:h};w!==void 0&&(c.color=w),E!==void 0&&(c.verbose=E),k(y,c,(g,_)=>{if(g)return u(new Error(g),null);u(null,_.result)})}}}}function xt(e,t,r,a,m,p,f,x,i,b,k){let j=rt(),N=e==="context",R=(P,J)=>{let O=[];try{Ue(O,x,{},i,Ye)}catch{}let $=we(P,p,j,void 0,J);r(m,{command:"error",flags:O,error:$},()=>{$.detail=j.load($.detail),k($e(N?"Context failed":"Build failed",[$],[]),null)})},B;if(typeof x=="object"){let P=x.plugins;if(P!==void 0){if(!Array.isArray(P))return R(new Error('"plugins" must be an array'),"");B=P}}if(B&&B.length>0){if(p.isSync)return R(new Error("Cannot use plugins in synchronous API calls"),"");kt(t,r,a,m,p,f,x,B,j).then(P=>{if(!P.ok)return R(P.error,P.pluginName);try{V(P.requestPlugins,P.runOnEndCallbacks,P.scheduleOnDisposeCallbacks)}catch(J){R(J,"")}},P=>R(P,""));return}try{V(null,(P,J)=>J([],[]),()=>{})}catch(P){R(P,"")}function V(P,J,O){let $=p.hasFS,{entries:y,flags:h,write:l,stdinContents:u,stdinResolveDir:d,absWorkingDir:w,nodePaths:E,mangleCache:c}=wt(e,x,i,Ye,$);if(l&&!p.hasFS)throw new Error('The "write" option is unavailable in this environment');let g={command:"build",key:t,entries:y,flags:h,write:l,stdinContents:u,stdinResolveDir:d,absWorkingDir:w||b,nodePaths:E,context:N};P&&(g.plugins=P),c&&(g.mangleCache=c);let _=(o,v)=>{let T={errors:_e(o.errors,j),warnings:_e(o.warnings,j),outputFiles:void 0,metafile:void 0,mangleCache:void 0},I=T.errors.slice(),S=T.warnings.slice();o.outputFiles&&(T.outputFiles=o.outputFiles.map(Et)),o.metafile&&o.metafile.length&&(T.metafile=St(o.metafile)),o.mangleCache&&(T.mangleCache=o.mangleCache),o.writeToStdout!==void 0&&console.log(z(o.writeToStdout).replace(/\n$/,"")),J(T,(L,F)=>{if(I.length>0||L.length>0){let M=$e("Build failed",I.concat(L),S.concat(F));return v(M,null,L,F)}v(null,T,L,F)})},D,n;N&&(f["on-end"]=(o,v)=>new Promise(T=>{_(v,(I,S,L,F)=>{let M={errors:L,warnings:F};n&&n(I,S),D=void 0,n=void 0,a(o,M),T()})})),r(m,g,(o,v)=>{if(o)return k(new Error(o),null);if(!N)return _(v,(S,L)=>(O(),k(S,L)));if(v.errors.length>0)return k($e("Context failed",v.errors,v.warnings),null);let T=!1,I={rebuild:()=>(D||(D=new Promise((S,L)=>{let F;n=(ne,Y)=>{F||(F=()=>ne?L(ne):S(Y))};let M=()=>{r(m,{command:"rebuild",key:t},(Y,he)=>{Y?L(new Error(Y)):F?F():M()})};M()})),D),watch:(S={})=>new Promise((L,F)=>{if(!p.hasFS)throw new Error('Cannot use the "watch" API in this environment');let M={},ne=s(S,M,"delay",ye);q(S,M,"in watch() call");let Y={command:"watch",key:t};ne&&(Y.delay=ne),r(m,Y,he=>{he?F(new Error(he)):L(void 0)})}),serve:(S={})=>new Promise((L,F)=>{if(!p.hasFS)throw new Error('Cannot use the "serve" API in this environment');let M={},ne=s(S,M,"port",dt),Y=s(S,M,"host",C),he=s(S,M,"servedir",C),A=s(S,M,"keyfile",C),me=s(S,M,"certfile",C),ie=s(S,M,"fallback",C),ae=s(S,M,"cors",re),pe=s(S,M,"onRequest",Ke);q(S,M,"in serve() call");let le={command:"serve",key:t,onRequest:!!pe};if(ne!==void 0&&(le.port=ne),Y!==void 0&&(le.host=Y),he!==void 0&&(le.servedir=he),A!==void 0&&(le.keyfile=A),me!==void 0&&(le.certfile=me),ie!==void 0&&(le.fallback=ie),ae){let Pe={},Ee=s(ae,Pe,"origin",Ze);q(ae,Pe,'on "cors" object'),Array.isArray(Ee)?le.corsOrigin=Ee:Ee!==void 0&&(le.corsOrigin=[Ee])}r(m,le,(Pe,Ee)=>{if(Pe)return F(new Error(Pe));pe&&(f["serve-request"]=(Bt,Vt)=>{pe(Vt.args),a(Bt,{})}),L(Ee)})}),cancel:()=>new Promise(S=>{if(T)return S();r(m,{command:"cancel",key:t},()=>{S()})}),dispose:()=>new Promise(S=>{if(T)return S();T=!0,r(m,{command:"dispose",key:t},()=>{S(),O(),m.unref()})})};m.ref(),k(null,I)})}}var kt=(e,t,r,a,m,p,f,x,i)=>oe(null,null,function*(){let b=[],k=[],j={},N={},R=[],B=0,V=0,P=[],J=!1;x=[...x];for(let y of x){let h={};if(typeof y!="object")throw new Error(`Plugin at index ${V} must be an object`);let l=s(y,h,"name",C);if(typeof l!="string"||l==="")throw new Error(`Plugin at index ${V} is missing a name`);try{let u=s(y,h,"setup",Ke);if(typeof u!="function")throw new Error("Plugin is missing a setup function");q(y,h,`on plugin ${H(l)}`);let d={name:l,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};V++;let E=u({initialOptions:f,resolve:(c,g={})=>{if(!J)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof c!="string")throw new Error("The path to resolve must be a string");let _=Object.create(null),D=s(g,_,"pluginName",C),n=s(g,_,"importer",C),o=s(g,_,"namespace",C),v=s(g,_,"resolveDir",C),T=s(g,_,"kind",C),I=s(g,_,"pluginData",Ae),S=s(g,_,"with",re);return q(g,_,"in resolve() call"),new Promise((L,F)=>{let M={command:"resolve",path:c,key:e,pluginName:l};if(D!=null&&(M.pluginName=D),n!=null&&(M.importer=n),o!=null&&(M.namespace=o),v!=null&&(M.resolveDir=v),T!=null)M.kind=T;else throw new Error('Must specify "kind" when calling "resolve"');I!=null&&(M.pluginData=i.store(I)),S!=null&&(M.with=_t(S,"with")),t(a,M,(ne,Y)=>{ne!==null?F(new Error(ne)):L({errors:_e(Y.errors,i),warnings:_e(Y.warnings,i),path:Y.path,external:Y.external,sideEffects:Y.sideEffects,namespace:Y.namespace,suffix:Y.suffix,pluginData:i.load(Y.pluginData)})})})},onStart(c){let g='This error came from the "onStart" callback registered here:',_=Re(new Error(g),m,"onStart");b.push({name:l,callback:c,note:_}),d.onStart=!0},onEnd(c){let g='This error came from the "onEnd" callback registered here:',_=Re(new Error(g),m,"onEnd");k.push({name:l,callback:c,note:_}),d.onEnd=!0},onResolve(c,g){let _='This error came from the "onResolve" callback registered here:',D=Re(new Error(_),m,"onResolve"),n={},o=s(c,n,"filter",De),v=s(c,n,"namespace",C);if(q(c,n,`in onResolve() call for plugin ${H(l)}`),o==null)throw new Error("onResolve() call is missing a filter");let T=B++;j[T]={name:l,callback:g,note:D},d.onResolve.push({id:T,filter:Me(o),namespace:v||""})},onLoad(c,g){let _='This error came from the "onLoad" callback registered here:',D=Re(new Error(_),m,"onLoad"),n={},o=s(c,n,"filter",De),v=s(c,n,"namespace",C);if(q(c,n,`in onLoad() call for plugin ${H(l)}`),o==null)throw new Error("onLoad() call is missing a filter");let T=B++;N[T]={name:l,callback:g,note:D},d.onLoad.push({id:T,filter:Me(o),namespace:v||""})},onDispose(c){R.push(c)},esbuild:m.esbuild});E&&(yield E),P.push(d)}catch(u){return{ok:!1,error:u,pluginName:l}}}p["on-start"]=(y,h)=>oe(null,null,function*(){i.clear();let l={errors:[],warnings:[]};yield Promise.all(b.map(u=>oe(null,[u],function*({name:d,callback:w,note:E}){try{let c=yield w();if(c!=null){if(typeof c!="object")throw new Error(`Expected onStart() callback in plugin ${H(d)} to return an object`);let g={},_=s(c,g,"errors",fe),D=s(c,g,"warnings",fe);q(c,g,`from onStart() callback in plugin ${H(d)}`),_!=null&&l.errors.push(...de(_,"errors",i,d,void 0)),D!=null&&l.warnings.push(...de(D,"warnings",i,d,void 0))}}catch(c){l.errors.push(we(c,m,i,E&&E(),d))}}))),r(y,l)}),p["on-resolve"]=(y,h)=>oe(null,null,function*(){let l={},u="",d,w;for(let E of h.ids)try{({name:u,callback:d,note:w}=j[E]);let c=yield d({path:h.path,importer:h.importer,namespace:h.namespace,resolveDir:h.resolveDir,kind:h.kind,pluginData:i.load(h.pluginData),with:h.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onResolve() callback in plugin ${H(u)} to return an object`);let g={},_=s(c,g,"pluginName",C),D=s(c,g,"path",C),n=s(c,g,"namespace",C),o=s(c,g,"suffix",C),v=s(c,g,"external",G),T=s(c,g,"sideEffects",G),I=s(c,g,"pluginData",Ae),S=s(c,g,"errors",fe),L=s(c,g,"warnings",fe),F=s(c,g,"watchFiles",ee),M=s(c,g,"watchDirs",ee);q(c,g,`from onResolve() callback in plugin ${H(u)}`),l.id=E,_!=null&&(l.pluginName=_),D!=null&&(l.path=D),n!=null&&(l.namespace=n),o!=null&&(l.suffix=o),v!=null&&(l.external=v),T!=null&&(l.sideEffects=T),I!=null&&(l.pluginData=i.store(I)),S!=null&&(l.errors=de(S,"errors",i,u,void 0)),L!=null&&(l.warnings=de(L,"warnings",i,u,void 0)),F!=null&&(l.watchFiles=Ie(F,"watchFiles")),M!=null&&(l.watchDirs=Ie(M,"watchDirs"));break}}catch(c){l={id:E,errors:[we(c,m,i,w&&w(),u)]};break}r(y,l)}),p["on-load"]=(y,h)=>oe(null,null,function*(){let l={},u="",d,w;for(let E of h.ids)try{({name:u,callback:d,note:w}=N[E]);let c=yield d({path:h.path,namespace:h.namespace,suffix:h.suffix,pluginData:i.load(h.pluginData),with:h.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onLoad() callback in plugin ${H(u)} to return an object`);let g={},_=s(c,g,"pluginName",C),D=s(c,g,"contents",et),n=s(c,g,"resolveDir",C),o=s(c,g,"pluginData",Ae),v=s(c,g,"loader",C),T=s(c,g,"errors",fe),I=s(c,g,"warnings",fe),S=s(c,g,"watchFiles",ee),L=s(c,g,"watchDirs",ee);q(c,g,`from onLoad() callback in plugin ${H(u)}`),l.id=E,_!=null&&(l.pluginName=_),D instanceof Uint8Array?l.contents=D:D!=null&&(l.contents=Z(D)),n!=null&&(l.resolveDir=n),o!=null&&(l.pluginData=i.store(o)),v!=null&&(l.loader=v),T!=null&&(l.errors=de(T,"errors",i,u,void 0)),I!=null&&(l.warnings=de(I,"warnings",i,u,void 0)),S!=null&&(l.watchFiles=Ie(S,"watchFiles")),L!=null&&(l.watchDirs=Ie(L,"watchDirs"));break}}catch(c){l={id:E,errors:[we(c,m,i,w&&w(),u)]};break}r(y,l)});let O=(y,h)=>h([],[]);k.length>0&&(O=(y,h)=>{oe(null,null,function*(){let l=[],u=[];for(let{name:d,callback:w,note:E}of k){let c,g;try{let _=yield w(y);if(_!=null){if(typeof _!="object")throw new Error(`Expected onEnd() callback in plugin ${H(d)} to return an object`);let D={},n=s(_,D,"errors",fe),o=s(_,D,"warnings",fe);q(_,D,`from onEnd() callback in plugin ${H(d)}`),n!=null&&(c=de(n,"errors",i,d,void 0)),o!=null&&(g=de(o,"warnings",i,d,void 0))}}catch(_){c=[we(_,m,i,E&&E(),d)]}if(c){l.push(...c);try{y.errors.push(...c)}catch{}}if(g){u.push(...g);try{y.warnings.push(...g)}catch{}}}h(l,u)})});let $=()=>{for(let y of R)setTimeout(()=>y(),0)};return J=!0,{ok:!0,requestPlugins:P,runOnEndCallbacks:O,scheduleOnDisposeCallbacks:$}});function rt(){let e=new Map,t=0;return{clear(){e.clear()},load(r){return e.get(r)},store(r){if(r===void 0)return-1;let a=t++;return e.set(a,r),a}}}function Re(e,t,r){let a,m=!1;return()=>{if(m)return a;m=!0;try{let p=(e.stack+"").split(`
`);p.splice(1,1);let f=st(t,p,r);if(f)return a={text:e.message,location:f},a}catch{}}}function we(e,t,r,a,m){let p="Internal error",f=null;try{p=(e&&e.message||e)+""}catch{}try{f=st(t,(e.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:m,text:p,location:f,notes:a?[a]:[],detail:r?r.store(e):-1}}function st(e,t,r){let a="    at ";if(e.readFileSync&&!t[0].startsWith(a)&&t[1].startsWith(a))for(let m=1;m<t.length;m++){let p=t[m];if(p.startsWith(a))for(p=p.slice(a.length);;){let f=/^(?:new |async )?\S+ \((.*)\)$/.exec(p);if(f){p=f[1];continue}if(f=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(p),f){p=f[1];continue}if(f=/^(\S+):(\d+):(\d+)$/.exec(p),f){let x;try{x=e.readFileSync(f[1],"utf8")}catch{break}let i=x.split(/\r\n|\r|\n|\u2028|\u2029/)[+f[2]-1]||"",b=+f[3]-1,k=i.slice(b,b+r.length)===r?r.length:0;return{file:f[1],namespace:"file",line:+f[2],column:Z(i.slice(0,b)).length,length:Z(i.slice(b,b+k)).length,lineText:i+`
`+t.slice(1).join(`
`),suggestion:""}}break}}return null}function $e(e,t,r){let a=5;e+=t.length<1?"":` with ${t.length} error${t.length<2?"":"s"}:`+t.slice(0,a+1).map((p,f)=>{if(f===a)return`
...`;if(!p.location)return`
error: ${p.text}`;let{file:x,line:i,column:b}=p.location,k=p.pluginName?`[plugin: ${p.pluginName}] `:"";return`
${x}:${i}:${b}: ERROR: ${k}${p.text}`}).join("");let m=new Error(e);for(let[p,f]of[["errors",t],["warnings",r]])Object.defineProperty(m,p,{configurable:!0,enumerable:!0,get:()=>f,set:x=>Object.defineProperty(m,p,{configurable:!0,enumerable:!0,value:x})});return m}function _e(e,t){for(let r of e)r.detail=t.load(r.detail);return e}function it(e,t,r){if(e==null)return null;let a={},m=s(e,a,"file",C),p=s(e,a,"namespace",C),f=s(e,a,"line",ye),x=s(e,a,"column",ye),i=s(e,a,"length",ye),b=s(e,a,"lineText",C),k=s(e,a,"suggestion",C);if(q(e,a,t),b){let j=b.slice(0,(x&&x>0?x:0)+(i&&i>0?i:0)+(r&&r>0?r:80));!/[\x7F-\uFFFF]/.test(j)&&!/\n/.test(b)&&(b=j)}return{file:m||"",namespace:p||"",line:f||0,column:x||0,length:i||0,lineText:b||"",suggestion:k||""}}function de(e,t,r,a,m){let p=[],f=0;for(let x of e){let i={},b=s(x,i,"id",C),k=s(x,i,"pluginName",C),j=s(x,i,"text",C),N=s(x,i,"location",Qe),R=s(x,i,"notes",fe),B=s(x,i,"detail",Ae),V=`in element ${f} of "${t}"`;q(x,i,V);let P=[];if(R)for(let J of R){let O={},$=s(J,O,"text",C),y=s(J,O,"location",Qe);q(J,O,V),P.push({text:$||"",location:it(y,V,m)})}p.push({id:b||"",pluginName:k||a,text:j||"",location:it(N,V,m),notes:P,detail:r?r.store(B):-1}),f++}return p}function Ie(e,t){let r=[];for(let a of e){if(typeof a!="string")throw new Error(`${H(t)} must be an array of strings`);r.push(a)}return r}function _t(e,t){let r=Object.create(null);for(let a in e){let m=e[a];if(typeof m!="string")throw new Error(`key ${H(a)} in object ${H(t)} must be a string`);r[a]=m}return r}function Et({path:e,contents:t,hash:r}){let a=null;return{path:e,contents:t,hash:r,get text(){let m=this.contents;return(a===null||m!==t)&&(t=m,a=z(m)),a}}}function Me(e){let t=e.source;return e.flags&&(t=`(?${e.flags})${t}`),t}function St(e){let t;try{t=z(e)}catch{return ft(e)}return JSON.parse(t)}var jt="0.28.0",Tt=e=>Oe().build(e),$t=e=>Oe().context(e),Ot=(e,t)=>Oe().transform(e,t),Pt=(e,t)=>Oe().formatMessages(e,t),Ct=(e,t)=>Oe().analyzeMetafile(e,t),At=()=>{throw new Error('The "buildSync" API only works in node')},Dt=()=>{throw new Error('The "transformSync" API only works in node')},Ut=()=>{throw new Error('The "formatMessagesSync" API only works in node')},Rt=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},It=()=>(Ne&&Ne(),Promise.resolve()),be,Ne,Fe,Oe=()=>{if(Fe)return Fe;throw be?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},Mt=e=>{e=yt(e||{});let t=e.wasmURL,r=e.wasmModule,a=e.worker!==!1;if(!t&&!r)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(be)throw new Error('Cannot call "initialize" more than once');return be=Nt(t||"",r,a),be.catch(()=>{be=void 0}),be},Nt=(e,t,r)=>oe(null,null,function*(){let a,m,p=new Promise(j=>m=j);if(r){let j=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1, O_DIRECTORY: -1 },
            // unused
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substring(0, nl));
                outputBuf = outputBuf.substring(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.path) {
          globalThis.path = {
            resolve(...pathSegments) {
              return pathSegments.join("/");
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const setInt32 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const testCallExport = (a, b) => {
              this._inst.exports.testExport0();
              return this._inst.exports.testExport(a, b);
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              _gotest: {
                add: (a, b) => a + b,
                callExport: testCallExport
              },
              gojs: {
                // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                // This changes the SP, thus we have to update the SP used by the imported function.
                // func wasmExit(code int32)
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                // func resetMemoryDataView()
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                // func nanotime1() int64
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                // func walltime() (sec int64, nsec int32)
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = (/* @__PURE__ */ new Date()).getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                // func scheduleTimeoutEvent(delay int64) int32
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8)
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                // func clearTimeoutEvent(id int32)
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                // func getRandomData(r []byte)
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                // func finalizeRef(v ref)
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                // func stringVal(value string) ref
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                // func valueGet(v ref, p string) ref
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                // func valueSet(v ref, p string, x ref)
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                // func valueDelete(v ref, p string)
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                // func valueIndex(v ref, i int) ref
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                // valueSetIndex(v ref, i int, x ref)
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                // func valueCall(v ref, m string, args []ref) (ref, bool)
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                // func valueInvoke(v ref, args []ref) (ref, bool)
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueNew(v ref, args []ref) (ref, bool)
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueLength(v ref) int
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                // valuePrepareString(v ref) (ref, int)
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                // valueLoadString(v ref, b []byte)
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                // func valueInstanceOf(v ref, t ref) bool
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                // func copyBytesToGo(dst []byte, src ref) (int, bool)
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                // func copyBytesToJS(dst ref, src []byte) (int, bool)
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                // JS values that Go currently has references to, indexed by reference id
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                // mapping from JS values to reference ids
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1) console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin) resumeStdin();
          }
          return go;
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.28.0"}\`];
        tryToInstantiateModule(wasm, go).then(
          (instance) => {
            postMessage(null);
            go.run(instance);
          },
          (error) => {
            postMessage(error);
          }
        );
        return go;
      };
      function tryToInstantiateModule(wasm, go) {
        return __async(this, null, function* () {
          if (wasm instanceof WebAssembly.Module) {
            return WebAssembly.instantiate(wasm, go.importObject);
          }
          const res = yield fetch(wasm);
          if (!res.ok) throw new Error(\`Failed to download \${JSON.stringify(wasm)}\`);
          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
            return result2.instance;
          }
          const bytes = yield res.arrayBuffer();
          const result = yield WebAssembly.instantiate(bytes, go.importObject);
          return result.instance;
        });
      }
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});a=new Worker(URL.createObjectURL(j))}else{let j=(R=>{var B=(O,$,y)=>new Promise((h,l)=>{var u=E=>{try{w(y.next(E))}catch(c){l(c)}},d=E=>{try{w(y.throw(E))}catch(c){l(c)}},w=E=>E.done?h(E.value):Promise.resolve(E.value).then(u,d);w((y=y.apply(O,$)).next())});let V,P={};for(let O=self;O;O=Object.getPrototypeOf(O))for(let $ of Object.getOwnPropertyNames(O))$ in P||Object.defineProperty(P,$,{get:()=>self[$]});(()=>{let O=()=>{let h=new Error("not implemented");return h.code="ENOSYS",h};if(!P.fs){let h="";P.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1,O_DIRECTORY:-1},writeSync(l,u){h+=y.decode(u);let d=h.lastIndexOf(`
`);return d!=-1&&(console.log(h.substring(0,d)),h=h.substring(d+1)),u.length},write(l,u,d,w,E,c){if(d!==0||w!==u.length||E!==null){c(O());return}let g=this.writeSync(l,u);c(null,g)},chmod(l,u,d){d(O())},chown(l,u,d,w){w(O())},close(l,u){u(O())},fchmod(l,u,d){d(O())},fchown(l,u,d,w){w(O())},fstat(l,u){u(O())},fsync(l,u){u(null)},ftruncate(l,u,d){d(O())},lchown(l,u,d,w){w(O())},link(l,u,d){d(O())},lstat(l,u){u(O())},mkdir(l,u,d){d(O())},open(l,u,d,w){w(O())},read(l,u,d,w,E,c){c(O())},readdir(l,u){u(O())},readlink(l,u){u(O())},rename(l,u,d){d(O())},rmdir(l,u){u(O())},stat(l,u){u(O())},symlink(l,u,d){d(O())},truncate(l,u,d){d(O())},unlink(l,u){u(O())},utimes(l,u,d,w){w(O())}}}if(P.process||(P.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw O()},pid:-1,ppid:-1,umask(){throw O()},cwd(){throw O()},chdir(){throw O()}}),P.path||(P.path={resolve(...h){return h.join("/")}}),!P.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!P.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!P.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!P.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");let $=new TextEncoder("utf-8"),y=new TextDecoder("utf-8");P.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=n=>{n!==0&&console.warn("exit code:",n)},this._exitPromise=new Promise(n=>{this._resolveExitPromise=n}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;let h=(n,o)=>{this.mem.setUint32(n+0,o,!0),this.mem.setUint32(n+4,Math.floor(o/4294967296),!0)},l=(n,o)=>{this.mem.setUint32(n+0,o,!0)},u=n=>{let o=this.mem.getUint32(n+0,!0),v=this.mem.getInt32(n+4,!0);return o+v*4294967296},d=n=>{let o=this.mem.getFloat64(n,!0);if(o===0)return;if(!isNaN(o))return o;let v=this.mem.getUint32(n,!0);return this._values[v]},w=(n,o)=>{if(typeof o=="number"&&o!==0){if(isNaN(o)){this.mem.setUint32(n+4,2146959360,!0),this.mem.setUint32(n,0,!0);return}this.mem.setFloat64(n,o,!0);return}if(o===void 0){this.mem.setFloat64(n,0,!0);return}let T=this._ids.get(o);T===void 0&&(T=this._idPool.pop(),T===void 0&&(T=this._values.length),this._values[T]=o,this._goRefCounts[T]=0,this._ids.set(o,T)),this._goRefCounts[T]++;let I=0;switch(typeof o){case"object":o!==null&&(I=1);break;case"string":I=2;break;case"symbol":I=3;break;case"function":I=4;break}this.mem.setUint32(n+4,2146959360|I,!0),this.mem.setUint32(n,T,!0)},E=n=>{let o=u(n+0),v=u(n+8);return new Uint8Array(this._inst.exports.mem.buffer,o,v)},c=n=>{let o=u(n+0),v=u(n+8),T=new Array(v);for(let I=0;I<v;I++)T[I]=d(o+I*8);return T},g=n=>{let o=u(n+0),v=u(n+8);return y.decode(new DataView(this._inst.exports.mem.buffer,o,v))},_=(n,o)=>(this._inst.exports.testExport0(),this._inst.exports.testExport(n,o)),D=Date.now()-performance.now();this.importObject={_gotest:{add:(n,o)=>n+o,callExport:_},gojs:{"runtime.wasmExit":n=>{n>>>=0;let o=this.mem.getInt32(n+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(o)},"runtime.wasmWrite":n=>{n>>>=0;let o=u(n+8),v=u(n+16),T=this.mem.getInt32(n+24,!0);P.fs.writeSync(o,new Uint8Array(this._inst.exports.mem.buffer,v,T))},"runtime.resetMemoryDataView":n=>{n>>>=0,this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":n=>{n>>>=0,h(n+8,(D+performance.now())*1e6)},"runtime.walltime":n=>{n>>>=0;let o=new Date().getTime();h(n+8,o/1e3),this.mem.setInt32(n+16,o%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":n=>{n>>>=0;let o=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(o,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(o);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},u(n+8))),this.mem.setInt32(n+16,o,!0)},"runtime.clearTimeoutEvent":n=>{n>>>=0;let o=this.mem.getInt32(n+8,!0);clearTimeout(this._scheduledTimeouts.get(o)),this._scheduledTimeouts.delete(o)},"runtime.getRandomData":n=>{n>>>=0,crypto.getRandomValues(E(n+8))},"syscall/js.finalizeRef":n=>{n>>>=0;let o=this.mem.getUint32(n+8,!0);if(this._goRefCounts[o]--,this._goRefCounts[o]===0){let v=this._values[o];this._values[o]=null,this._ids.delete(v),this._idPool.push(o)}},"syscall/js.stringVal":n=>{n>>>=0,w(n+24,g(n+8))},"syscall/js.valueGet":n=>{n>>>=0;let o=Reflect.get(d(n+8),g(n+16));n=this._inst.exports.getsp()>>>0,w(n+32,o)},"syscall/js.valueSet":n=>{n>>>=0,Reflect.set(d(n+8),g(n+16),d(n+32))},"syscall/js.valueDelete":n=>{n>>>=0,Reflect.deleteProperty(d(n+8),g(n+16))},"syscall/js.valueIndex":n=>{n>>>=0,w(n+24,Reflect.get(d(n+8),u(n+16)))},"syscall/js.valueSetIndex":n=>{n>>>=0,Reflect.set(d(n+8),u(n+16),d(n+24))},"syscall/js.valueCall":n=>{n>>>=0;try{let o=d(n+8),v=Reflect.get(o,g(n+16)),T=c(n+32),I=Reflect.apply(v,o,T);n=this._inst.exports.getsp()>>>0,w(n+56,I),this.mem.setUint8(n+64,1)}catch(o){n=this._inst.exports.getsp()>>>0,w(n+56,o),this.mem.setUint8(n+64,0)}},"syscall/js.valueInvoke":n=>{n>>>=0;try{let o=d(n+8),v=c(n+16),T=Reflect.apply(o,void 0,v);n=this._inst.exports.getsp()>>>0,w(n+40,T),this.mem.setUint8(n+48,1)}catch(o){n=this._inst.exports.getsp()>>>0,w(n+40,o),this.mem.setUint8(n+48,0)}},"syscall/js.valueNew":n=>{n>>>=0;try{let o=d(n+8),v=c(n+16),T=Reflect.construct(o,v);n=this._inst.exports.getsp()>>>0,w(n+40,T),this.mem.setUint8(n+48,1)}catch(o){n=this._inst.exports.getsp()>>>0,w(n+40,o),this.mem.setUint8(n+48,0)}},"syscall/js.valueLength":n=>{n>>>=0,h(n+16,parseInt(d(n+8).length))},"syscall/js.valuePrepareString":n=>{n>>>=0;let o=$.encode(String(d(n+8)));w(n+16,o),h(n+24,o.length)},"syscall/js.valueLoadString":n=>{n>>>=0;let o=d(n+8);E(n+16).set(o)},"syscall/js.valueInstanceOf":n=>{n>>>=0,this.mem.setUint8(n+24,d(n+8)instanceof d(n+16)?1:0)},"syscall/js.copyBytesToGo":n=>{n>>>=0;let o=E(n+8),v=d(n+32);if(!(v instanceof Uint8Array||v instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}let T=v.subarray(0,o.length);o.set(T),h(n+40,T.length),this.mem.setUint8(n+48,1)},"syscall/js.copyBytesToJS":n=>{n>>>=0;let o=d(n+8),v=E(n+16);if(!(o instanceof Uint8Array||o instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}let T=v.subarray(0,o.length);o.set(T),h(n+40,T.length),this.mem.setUint8(n+48,1)},debug:n=>{console.log(n)}}}}run(h){return B(this,null,function*(){if(!(h instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=h,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,P,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[P,5],[this,6]]),this._idPool=[],this.exited=!1;let l=4096,u=_=>{let D=l,n=$.encode(_+"\0");return new Uint8Array(this.mem.buffer,l,n.length).set(n),l+=n.length,l%8!==0&&(l+=8-l%8),D},d=this.argv.length,w=[];this.argv.forEach(_=>{w.push(u(_))}),w.push(0),Object.keys(this.env).sort().forEach(_=>{w.push(u(`${_}=${this.env[_]}`))}),w.push(0);let c=l;if(w.forEach(_=>{this.mem.setUint32(l,_,!0),this.mem.setUint32(l+4,0,!0),l+=8}),l>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(d,c),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(h){let l=this;return function(){let u={id:h,this:this,args:arguments};return l._pendingEvent=u,l._resume(),u.result}}}})(),V=({data:O})=>{let $=new TextDecoder,y=P.fs,h="";y.writeSync=(E,c)=>{if(E===1)R(c);else if(E===2){h+=$.decode(c);let g=h.split(`
`);g.length>1&&console.log(g.slice(0,-1).join(`
`)),h=g[g.length-1]}else throw new Error("Bad write");return c.length};let l=[],u,d=0;V=({data:E})=>(E.length>0&&(l.push(E),u&&u()),w),y.read=(E,c,g,_,D,n)=>{if(E!==0||g!==0||_!==c.length||D!==null)throw new Error("Bad read");if(l.length===0){u=()=>y.read(E,c,g,_,D,n);return}let o=l[0],v=Math.max(0,Math.min(_,o.length-d));c.set(o.subarray(d,d+v),g),d+=v,d===o.length&&(l.shift(),d=0),n(null,v)};let w=new P.Go;return w.argv=["","--service=0.28.0"],J(O,w).then(E=>{R(null),w.run(E)},E=>{R(E)}),w};function J(O,$){return B(this,null,function*(){if(O instanceof WebAssembly.Module)return WebAssembly.instantiate(O,$.importObject);let y=yield fetch(O);if(!y.ok)throw new Error(`Failed to download ${JSON.stringify(O)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(y.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(y,$.importObject)).instance;let h=yield y.arrayBuffer();return(yield WebAssembly.instantiate(h,$.importObject)).instance})}return O=>V(O)})(R=>a.onmessage({data:R})),N;a={onmessage:null,postMessage:R=>setTimeout(()=>{try{N=j({data:R})}catch(B){m(B)}}),terminate(){if(N)for(let R of N._scheduledTimeouts.values())clearTimeout(R)}}}let f,x,i=new Promise((j,N)=>{f=j,x=N});a.onmessage=({data:j})=>{a.onmessage=({data:N})=>b(N),j?x(j):f()},a.postMessage(t||new URL(e,location.href).toString());let{readFromStdout:b,service:k}=vt({writeToStdin(j){a.postMessage(j)},isSync:!1,hasFS:!1,esbuild:ge});yield i,Ne=()=>{a.terminate(),be=void 0,Ne=void 0,Fe=void 0},Fe={build:j=>new Promise((N,R)=>{p.then(R),k.buildOrContext({callName:"build",refs:null,options:j,isTTY:!1,defaultWD:"/",callback:(B,V)=>B?R(B):N(V)})}),context:j=>new Promise((N,R)=>{p.then(R),k.buildOrContext({callName:"context",refs:null,options:j,isTTY:!1,defaultWD:"/",callback:(B,V)=>B?R(B):N(V)})}),transform:(j,N)=>new Promise((R,B)=>{p.then(B),k.transform({callName:"transform",refs:null,input:j,options:N||{},isTTY:!1,fs:{readFile(V,P){P(new Error("Internal error"),null)},writeFile(V,P){P(null)}},callback:(V,P)=>V?B(V):R(P)})}),formatMessages:(j,N)=>new Promise((R,B)=>{p.then(B),k.formatMessages({callName:"formatMessages",refs:null,messages:j,options:N,callback:(V,P)=>V?B(V):R(P)})}),analyzeMetafile:(j,N)=>new Promise((R,B)=>{p.then(B),k.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof j=="string"?j:JSON.stringify(j),options:N,callback:(V,P)=>V?B(V):R(P)})})}}),Ft=ge})(typeof We=="object"?We:{set exports(U){(typeof self<"u"?self:this).esbuild=U}})});var Be=Ht(ot(),1);var ze=U=>typeof U=="object"&&U!=null,Kt=U=>typeof U=="object"?U===null:typeof U!="function",Qt=U=>U!=="__proto__"&&U!=="constructor"&&U!=="prototype";var Ge=(U,...W)=>{let K=0;for(Kt(U)&&(U=W[K++]),U||(U={});K<W.length;K++)if(ze(W[K]))for(let Q of Object.keys(W[K]))Qt(Q)&&(ze(U[Q])&&ze(W[K][Q])?U[Q]=Ge(Array.isArray(U[Q])?[]:{},U[Q],W[K][Q]):U[Q]=W[K][Q]);return U};var at="https://unpkg.com";var Xt={cdn:at,compression:"gzip",analysis:!1,polyfill:!1,tsx:!1,"package.json":{name:"bundled-code",version:"0.0.0"},esbuild:{target:["esnext"],format:"esm",bundle:!0,minify:!0,treeShaking:!0,platform:"browser"}},ve=Ge({},Xt,{esbuild:{color:!0,globalName:"BundledCode",logLevel:"info",sourcemap:!1}});var ct=!1,Zt=(async()=>{try{ct||(await(0,Be.initialize)({worker:!1,wasmURL:"./esbuild.wasm"}),ct=!0)}catch(U){console.warn("Sandbox",U)}})(),Je=new Map,ut=async U=>{let W,K=X=>async function({data:Se}){try{await Zt;let[ce,je,oe,ge,xe,Ce,Te]=Se,Z=Je.has(ce)?Je.get(ce):(await(0,Be.transform)(ce,{loader:"ts",format:"iife",globalName:"std_global",treeShaking:!0})).code;console.log({analysis:je,data:ce,sourcemap:xe,config:Z});let z=await Function('"use strict";return (async function () { "use strict";'+Z+"return (await std_global?.default); })()")();z.analysis=je||z.analysis||(je??z.analysis??ve.analysis),z.polyfill=oe||z.polyfill||(oe??z.polyfill??ve.polyfill),z.tsx=ge||z.tsx||(ge??z.tsx??ve.tsx),z.esbuild||(z.esbuild??(z.esbuild={})),z.esbuild.sourcemap=xe||z.esbuild.sourcemap||(xe??z.esbuild.sourcemap??ve.esbuild.sourcemap),z.esbuild.minify=Ce||z.esbuild.minify||(Ce??z.esbuild.minify??ve.esbuild.minify),z.esbuild.format=Te||z.esbuild.format||(Te??z.esbuild.format??ve.esbuild.format),Je.set(ce,Z),console.log({result:z}),X.postMessage(z)}catch(ce){console.warn(ce),X.postMessage({})}},Q=K(U);U.onmessage=({data:X})=>{if(X!=null&&X.port){let{port:Se}=X;W=Se,W.start(),W.onmessage=K(W)}else Q({data:X})}};self.onconnect=U=>{let[W]=U.ports;ut(W)};"SharedWorkerGlobalScope"in self||ut(self);})();
/*!
 * Based on assign-deep <https://github.com/jonschlinkert/assign-deep>
 *
 * Copyright (c) 2017-present, Jon Schlinkert.
 * Released under the MIT License.
 */
//# sourceMappingURL=sandbox.worker.js.map
