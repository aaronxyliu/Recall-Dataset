import{b as D}from"./chunk-NQT5ROMA.js";import{b as at,d as ct,e as lt,f as ut,h as dt}from"./chunk-MVDUVHI7.js";import{c as xe}from"./chunk-HAKRC5NP.js";import{d as ye,e as De}from"./chunk-PTZO4PCG.js";import"./chunk-AX7M67DE.js";import{a as P,c as F,d as ie,e as A,f as C,g as l,h as pt}from"./chunk-DGVQFQOY.js";import{a as ke}from"./chunk-OS3FCYZY.js";var Se={};ke(Se,{cssDefaults:()=>mt,lessDefaults:()=>ht,scssDefaults:()=>gt});var Y=class{constructor(t,r,n){this._onDidChange=new P,this._languageId=t,this.setOptions(r),this.setModeConfiguration(n)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this.options}get options(){return this._options}setOptions(t){this._options=t||Object.create(null),this._onDidChange.fire(this)}setDiagnosticsOptions(t){this.setOptions(t)}setModeConfiguration(t){this._modeConfiguration=t||Object.create(null),this._onDidChange.fire(this)}},we={validate:!0,lint:{compatibleVendorPrefixes:"ignore",vendorPrefix:"warning",duplicateProperties:"warning",emptyRules:"warning",importStatement:"ignore",boxModel:"ignore",universalSelector:"ignore",zeroUnits:"ignore",fontFaceProperties:"warning",hexColorLength:"error",argumentsInColorFunction:"error",unknownProperties:"warning",ieHack:"ignore",unknownVendorSpecificProperties:"ignore",propertyIgnoredDueToDisplay:"warning",important:"ignore",float:"ignore",idSelector:"ignore"},data:{useDefaultDataProvider:!0},format:{newlineBetweenSelectors:!0,newlineBetweenRules:!0,spaceAroundSelectorSeparator:!1,braceStyle:"collapse",maxPreserveNewLines:void 0,preserveNewLines:!0}},ve={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0,documentFormattingEdits:!0,documentRangeFormattingEdits:!0},mt=new Y("css",we,ve),gt=new Y("scss",we,ve),ht=new Y("less",we,ve);function _e(){return import("./cssMode-6KFFPBUW.js")}l.onLanguage("less",()=>{_e().then(e=>e.setupMode(ht))});l.onLanguage("scss",()=>{_e().then(e=>e.setupMode(gt))});l.onLanguage("css",()=>{_e().then(e=>e.setupMode(mt))});var Re={};ke(Re,{handlebarDefaults:()=>Dr,handlebarLanguageService:()=>xt,htmlDefaults:()=>yr,htmlLanguageService:()=>kt,razorDefaults:()=>wr,razorLanguageService:()=>yt,registerHTMLLanguageService:()=>ae});var Ce=class{constructor(t,r,n){this._onDidChange=new P,this._languageId=t,this.setOptions(r),this.setModeConfiguration(n)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get options(){return this._options}get modeConfiguration(){return this._modeConfiguration}setOptions(t){this._options=t||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(t){this._modeConfiguration=t||Object.create(null),this._onDidChange.fire(this)}},xr={tabSize:4,insertSpaces:!1,wrapLineLength:120,unformatted:'default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var',contentUnformatted:"pre",indentInnerHtml:!1,preserveNewLines:!0,maxPreserveNewLines:void 0,indentHandlebars:!1,endWithNewline:!1,extraLiners:"head, body, /html",wrapAttributes:"auto"},oe={format:xr,suggest:{},data:{useDefaultDataProvider:!0}};function se(e){return{completionItems:!0,hovers:!0,documentSymbols:!0,links:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,selectionRanges:!0,diagnostics:e===Q,documentFormattingEdits:e===Q,documentRangeFormattingEdits:e===Q}}var Q="html",ft="handlebars",bt="razor",kt=ae(Q,oe,se(Q)),yr=kt.defaults,xt=ae(ft,oe,se(ft)),Dr=xt.defaults,yt=ae(bt,oe,se(bt)),wr=yt.defaults;function vr(){return import("./htmlMode-GCH7IBQF.js")}function ae(e,t=oe,r=se(e)){let n=new Ce(e,t,r),o,s=l.onLanguage(e,async()=>{o=(await vr()).setupMode(n)});return{defaults:n,dispose(){s.dispose(),o==null||o.dispose(),o=void 0}}}var Fe={};ke(Fe,{getWorker:()=>Cr,jsonDefaults:()=>Dt});var Te=class{constructor(t,r,n){this._onDidChange=new P,this._languageId=t,this.setDiagnosticsOptions(r),this.setModeConfiguration(n)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this._diagnosticsOptions}setDiagnosticsOptions(t){this._diagnosticsOptions=t||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(t){this._modeConfiguration=t||Object.create(null),this._onDidChange.fire(this)}},_r={validate:!0,allowComments:!0,schemas:[],enableSchemaRequest:!1,schemaRequest:"warning",schemaValidation:"warning",comments:"error",trailingCommas:"error"},Sr={documentFormattingEdits:!0,documentRangeFormattingEdits:!0,completionItems:!0,hovers:!0,documentSymbols:!0,tokens:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0},Dt=new Te("json",_r,Sr),Cr=()=>wt().then(e=>e.getWorker());function wt(){return import("./jsonMode-LB4S6ZYB.js")}l.register({id:"json",extensions:[".json",".bowerrc",".jshintrc",".jscsrc",".eslintrc",".babelrc",".har"],aliases:["JSON","json"],mimetypes:["application/json"]});l.onLanguage("json",()=>{wt().then(e=>e.setupMode(Dt))});var vt={},Le={},Ee=class e{static getOrCreate(t){return Le[t]||(Le[t]=new e(t)),Le[t]}constructor(t){this._languageId=t,this._loadingTriggered=!1,this._lazyLoadPromise=new Promise((r,n)=>{this._lazyLoadPromiseResolve=r,this._lazyLoadPromiseReject=n})}load(){return this._loadingTriggered||(this._loadingTriggered=!0,vt[this._languageId].loader().then(t=>this._lazyLoadPromiseResolve(t),t=>this._lazyLoadPromiseReject(t))),this._lazyLoadPromise}};function i(e){let t=e.id;vt[t]=e,l.register(e);let r=Ee.getOrCreate(t);l.registerTokensProviderFactory(t,{create:async()=>(await r.load()).language}),l.onLanguageEncountered(t,async()=>{let n=await r.load();l.setLanguageConfiguration(t,n.conf)})}i({id:"abap",extensions:[".abap"],aliases:["abap","ABAP"],loader:()=>import("./abap-CARJG3JC.js")});i({id:"apex",extensions:[".cls"],aliases:["Apex","apex"],mimetypes:["text/x-apex-source","text/x-apex"],loader:()=>import("./apex-A3DGQCSV.js")});i({id:"azcli",extensions:[".azcli"],aliases:["Azure CLI","azcli"],loader:()=>import("./azcli-5CZIH2CX.js")});i({id:"bat",extensions:[".bat",".cmd"],aliases:["Batch","bat"],loader:()=>import("./bat-XSSFKPOL.js")});i({id:"bicep",extensions:[".bicep"],aliases:["Bicep"],loader:()=>import("./bicep-RDFUHSNJ.js")});i({id:"cameligo",extensions:[".mligo"],aliases:["Cameligo"],loader:()=>import("./cameligo-5L4ENW3W.js")});i({id:"clojure",extensions:[".clj",".cljs",".cljc",".edn"],aliases:["clojure","Clojure"],loader:()=>import("./clojure-6PCY6ZJT.js")});i({id:"coffeescript",extensions:[".coffee"],aliases:["CoffeeScript","coffeescript","coffee"],mimetypes:["text/x-coffeescript","text/coffeescript"],loader:()=>import("./coffee-VASWD34A.js")});i({id:"c",extensions:[".c",".h"],aliases:["C","c"],loader:()=>import("./cpp-CTQA2RHG.js")});i({id:"cpp",extensions:[".cpp",".cc",".cxx",".hpp",".hh",".hxx"],aliases:["C++","Cpp","cpp"],loader:()=>import("./cpp-CTQA2RHG.js")});i({id:"csharp",extensions:[".cs",".csx",".cake"],aliases:["C#","csharp"],loader:()=>import("./csharp-DQLDT7HS.js")});i({id:"csp",extensions:[".csp"],aliases:["CSP","csp"],loader:()=>import("./csp-R5WVMGEH.js")});i({id:"css",extensions:[".css"],aliases:["CSS","css"],mimetypes:["text/css"],loader:()=>import("./css-7VZ4XBR2.js")});i({id:"cypher",extensions:[".cypher",".cyp"],aliases:["Cypher","OpenCypher"],loader:()=>import("./cypher-B5XZBMEI.js")});i({id:"dart",extensions:[".dart"],aliases:["Dart","dart"],mimetypes:["text/x-dart-source","text/x-dart"],loader:()=>import("./dart-L4QGHGBE.js")});i({id:"dockerfile",extensions:[".dockerfile"],filenames:["Dockerfile"],aliases:["Dockerfile"],loader:()=>import("./dockerfile-O6HMMDBL.js")});i({id:"ecl",extensions:[".ecl"],aliases:["ECL","Ecl","ecl"],loader:()=>import("./ecl-IMJJLZAP.js")});i({id:"elixir",extensions:[".ex",".exs"],aliases:["Elixir","elixir","ex"],loader:()=>import("./elixir-YF2Q75JV.js")});i({id:"flow9",extensions:[".flow"],aliases:["Flow9","Flow","flow9","flow"],loader:()=>import("./flow9-RCPGKHAD.js")});i({id:"fsharp",extensions:[".fs",".fsi",".ml",".mli",".fsx",".fsscript"],aliases:["F#","FSharp","fsharp"],loader:()=>import("./fsharp-AXGFV6NR.js")});i({id:"freemarker2",extensions:[".ftl",".ftlh",".ftlx"],aliases:["FreeMarker2","Apache FreeMarker2"],loader:()=>import("./freemarker2-2SHEHXDD.js").then(e=>e.TagAutoInterpolationDollar)});i({id:"freemarker2.tag-angle.interpolation-dollar",aliases:["FreeMarker2 (Angle/Dollar)","Apache FreeMarker2 (Angle/Dollar)"],loader:()=>import("./freemarker2-2SHEHXDD.js").then(e=>e.TagAngleInterpolationDollar)});i({id:"freemarker2.tag-bracket.interpolation-dollar",aliases:["FreeMarker2 (Bracket/Dollar)","Apache FreeMarker2 (Bracket/Dollar)"],loader:()=>import("./freemarker2-2SHEHXDD.js").then(e=>e.TagBracketInterpolationDollar)});i({id:"freemarker2.tag-angle.interpolation-bracket",aliases:["FreeMarker2 (Angle/Bracket)","Apache FreeMarker2 (Angle/Bracket)"],loader:()=>import("./freemarker2-2SHEHXDD.js").then(e=>e.TagAngleInterpolationBracket)});i({id:"freemarker2.tag-bracket.interpolation-bracket",aliases:["FreeMarker2 (Bracket/Bracket)","Apache FreeMarker2 (Bracket/Bracket)"],loader:()=>import("./freemarker2-2SHEHXDD.js").then(e=>e.TagBracketInterpolationBracket)});i({id:"freemarker2.tag-auto.interpolation-dollar",aliases:["FreeMarker2 (Auto/Dollar)","Apache FreeMarker2 (Auto/Dollar)"],loader:()=>import("./freemarker2-2SHEHXDD.js").then(e=>e.TagAutoInterpolationDollar)});i({id:"freemarker2.tag-auto.interpolation-bracket",aliases:["FreeMarker2 (Auto/Bracket)","Apache FreeMarker2 (Auto/Bracket)"],loader:()=>import("./freemarker2-2SHEHXDD.js").then(e=>e.TagAutoInterpolationBracket)});i({id:"go",extensions:[".go"],aliases:["Go"],loader:()=>import("./go-ZGZOFQEI.js")});i({id:"graphql",extensions:[".graphql",".gql"],aliases:["GraphQL","graphql","gql"],mimetypes:["application/graphql"],loader:()=>import("./graphql-KJPCGGOS.js")});i({id:"handlebars",extensions:[".handlebars",".hbs"],aliases:["Handlebars","handlebars","hbs"],mimetypes:["text/x-handlebars-template"],loader:()=>import("./handlebars-AP3GUTJ6.js")});i({id:"hcl",extensions:[".tf",".tfvars",".hcl"],aliases:["Terraform","tf","HCL","hcl"],loader:()=>import("./hcl-AI4RAZPJ.js")});i({id:"html",extensions:[".html",".htm",".shtml",".xhtml",".mdoc",".jsp",".asp",".aspx",".jshtm"],aliases:["HTML","htm","html","xhtml"],mimetypes:["text/html","text/x-jshtm","text/template","text/ng-template"],loader:()=>import("./html-BS7HSWDJ.js")});i({id:"ini",extensions:[".ini",".properties",".gitconfig"],filenames:["config",".gitattributes",".gitconfig",".editorconfig"],aliases:["Ini","ini"],loader:()=>import("./ini-LSV7GWHJ.js")});i({id:"java",extensions:[".java",".jav"],aliases:["Java","java"],mimetypes:["text/x-java-source","text/x-java"],loader:()=>import("./java-VRVYTVK5.js")});i({id:"javascript",extensions:[".js",".es6",".jsx",".mjs",".cjs"],firstLine:"^#!.*\\bnode",filenames:["jakefile"],aliases:["JavaScript","javascript","js"],mimetypes:["text/javascript"],loader:()=>import("./javascript-AAQ5SSKZ.js")});i({id:"julia",extensions:[".jl"],aliases:["julia","Julia"],loader:()=>import("./julia-MDSRIK26.js")});i({id:"kotlin",extensions:[".kt",".kts"],aliases:["Kotlin","kotlin"],mimetypes:["text/x-kotlin-source","text/x-kotlin"],loader:()=>import("./kotlin-TZJ4JPWL.js")});i({id:"less",extensions:[".less"],aliases:["Less","less"],mimetypes:["text/x-less","text/less"],loader:()=>import("./less-5CU65OHB.js")});i({id:"lexon",extensions:[".lex"],aliases:["Lexon"],loader:()=>import("./lexon-EY7KCSHH.js")});i({id:"lua",extensions:[".lua"],aliases:["Lua","lua"],loader:()=>import("./lua-B7WTVZXO.js")});i({id:"liquid",extensions:[".liquid",".html.liquid"],aliases:["Liquid","liquid"],mimetypes:["application/liquid"],loader:()=>import("./liquid-QZCHYMZC.js")});i({id:"m3",extensions:[".m3",".i3",".mg",".ig"],aliases:["Modula-3","Modula3","modula3","m3"],loader:()=>import("./m3-54DLM7HQ.js")});i({id:"markdown",extensions:[".md",".markdown",".mdown",".mkdn",".mkd",".mdwn",".mdtxt",".mdtext"],aliases:["Markdown","markdown"],loader:()=>import("./markdown-7UETAU27.js")});i({id:"mdx",extensions:[".mdx"],aliases:["MDX","mdx"],loader:()=>import("./mdx-K6O3QIYM.js")});i({id:"mips",extensions:[".s"],aliases:["MIPS","MIPS-V"],mimetypes:["text/x-mips","text/mips","text/plaintext"],loader:()=>import("./mips-YOVHYCPK.js")});i({id:"msdax",extensions:[".dax",".msdax"],aliases:["DAX","MSDAX"],loader:()=>import("./msdax-D3OQXQHF.js")});i({id:"mysql",extensions:[],aliases:["MySQL","mysql"],loader:()=>import("./mysql-XD45PGL6.js")});i({id:"objective-c",extensions:[".m"],aliases:["Objective-C"],loader:()=>import("./objective-c-V2UV7LOD.js")});i({id:"pascal",extensions:[".pas",".p",".pp"],aliases:["Pascal","pas"],mimetypes:["text/x-pascal-source","text/x-pascal"],loader:()=>import("./pascal-NOZZX233.js")});i({id:"pascaligo",extensions:[".ligo"],aliases:["Pascaligo","ligo"],loader:()=>import("./pascaligo-GIGWWZB6.js")});i({id:"perl",extensions:[".pl",".pm"],aliases:["Perl","pl"],loader:()=>import("./perl-5MJ5IWFL.js")});i({id:"pgsql",extensions:[],aliases:["PostgreSQL","postgres","pg","postgre"],loader:()=>import("./pgsql-5M3XAW7Q.js")});i({id:"php",extensions:[".php",".php4",".php5",".phtml",".ctp"],aliases:["PHP","php"],mimetypes:["application/x-php"],loader:()=>import("./php-MTG4LSDL.js")});i({id:"pla",extensions:[".pla"],loader:()=>import("./pla-PQBENCEK.js")});i({id:"postiats",extensions:[".dats",".sats",".hats"],aliases:["ATS","ATS/Postiats"],loader:()=>import("./postiats-MWL42OMU.js")});i({id:"powerquery",extensions:[".pq",".pqm"],aliases:["PQ","M","Power Query","Power Query M"],loader:()=>import("./powerquery-BINHWKJS.js")});i({id:"powershell",extensions:[".ps1",".psm1",".psd1"],aliases:["PowerShell","powershell","ps","ps1"],loader:()=>import("./powershell-3XC3VBMD.js")});i({id:"proto",extensions:[".proto"],aliases:["protobuf","Protocol Buffers"],loader:()=>import("./protobuf-RD6A6ECP.js")});i({id:"pug",extensions:[".jade",".pug"],aliases:["Pug","Jade","jade"],loader:()=>import("./pug-DKUQWYV6.js")});i({id:"python",extensions:[".py",".rpy",".pyw",".cpy",".gyp",".gypi"],aliases:["Python","py"],firstLine:"^#!/.*\\bpython[0-9.-]*\\b",loader:()=>import("./python-D4O7BAXW.js")});i({id:"qsharp",extensions:[".qs"],aliases:["Q#","qsharp"],loader:()=>import("./qsharp-EWPZ7P37.js")});i({id:"r",extensions:[".r",".rhistory",".rmd",".rprofile",".rt"],aliases:["R","r"],loader:()=>import("./r-VGNY7IPA.js")});i({id:"razor",extensions:[".cshtml"],aliases:["Razor","razor"],mimetypes:["text/x-cshtml"],loader:()=>import("./razor-THGAUPEC.js")});i({id:"redis",extensions:[".redis"],aliases:["redis"],loader:()=>import("./redis-6IC36ZJ3.js")});i({id:"redshift",extensions:[],aliases:["Redshift","redshift"],loader:()=>import("./redshift-ODNTQEFK.js")});i({id:"restructuredtext",extensions:[".rst"],aliases:["reStructuredText","restructuredtext"],loader:()=>import("./restructuredtext-BULKEPLS.js")});i({id:"ruby",extensions:[".rb",".rbx",".rjs",".gemspec",".pp"],filenames:["rakefile","Gemfile"],aliases:["Ruby","rb"],loader:()=>import("./ruby-EBBDSWVJ.js")});i({id:"rust",extensions:[".rs",".rlib"],aliases:["Rust","rust"],loader:()=>import("./rust-BMTXRHN6.js")});i({id:"sb",extensions:[".sb"],aliases:["Small Basic","sb"],loader:()=>import("./sb-UZMDJVFS.js")});i({id:"scala",extensions:[".scala",".sc",".sbt"],aliases:["Scala","scala","SBT","Sbt","sbt","Dotty","dotty"],mimetypes:["text/x-scala-source","text/x-scala","text/x-sbt","text/x-dotty"],loader:()=>import("./scala-BDIMMMWE.js")});i({id:"scheme",extensions:[".scm",".ss",".sch",".rkt"],aliases:["scheme","Scheme"],loader:()=>import("./scheme-XWDTL4HA.js")});i({id:"scss",extensions:[".scss"],aliases:["Sass","sass","scss"],mimetypes:["text/x-scss","text/scss"],loader:()=>import("./scss-U7TUMDCU.js")});i({id:"shell",extensions:[".sh",".bash"],aliases:["Shell","sh"],loader:()=>import("./shell-3PMJFNHB.js")});i({id:"sol",extensions:[".sol"],aliases:["sol","solidity","Solidity"],loader:()=>import("./solidity-XHSHLB6G.js")});i({id:"aes",extensions:[".aes"],aliases:["aes","sophia","Sophia"],loader:()=>import("./sophia-OG5AKWYZ.js")});i({id:"sparql",extensions:[".rq"],aliases:["sparql","SPARQL"],loader:()=>import("./sparql-65BZRKMS.js")});i({id:"sql",extensions:[".sql"],aliases:["SQL"],loader:()=>import("./sql-GN3T7MG6.js")});i({id:"st",extensions:[".st",".iecst",".iecplc",".lc3lib",".TcPOU",".TcDUT",".TcGVL",".TcIO"],aliases:["StructuredText","scl","stl"],loader:()=>import("./st-Z3HXL64S.js")});i({id:"swift",aliases:["Swift","swift"],extensions:[".swift"],mimetypes:["text/swift"],loader:()=>import("./swift-42KEBLRW.js")});i({id:"systemverilog",extensions:[".sv",".svh"],aliases:["SV","sv","SystemVerilog","systemverilog"],loader:()=>import("./systemverilog-TDCKYZZO.js")});i({id:"verilog",extensions:[".v",".vh"],aliases:["V","v","Verilog","verilog"],loader:()=>import("./systemverilog-TDCKYZZO.js")});i({id:"tcl",extensions:[".tcl"],aliases:["tcl","Tcl","tcltk","TclTk","tcl/tk","Tcl/Tk"],loader:()=>import("./tcl-J62ZL7GW.js")});i({id:"twig",extensions:[".twig"],aliases:["Twig","twig"],mimetypes:["text/x-twig"],loader:()=>import("./twig-BVZGU2MM.js")});i({id:"typescript",extensions:[".ts",".tsx",".cts",".mts"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"],loader:()=>import("./typescript-YYRER45Z.js")});i({id:"typespec",extensions:[".tsp"],aliases:["TypeSpec"],loader:()=>import("./typespec-L6VWPPIR.js")});i({id:"vb",extensions:[".vb"],aliases:["Visual Basic","vb"],loader:()=>import("./vb-HHNPHA2Y.js")});i({id:"wgsl",extensions:[".wgsl"],aliases:["WebGPU Shading Language","WGSL","wgsl"],loader:()=>import("./wgsl-PZDMITSW.js")});i({id:"xml",extensions:[".xml",".xsd",".dtd",".ascx",".csproj",".config",".props",".targets",".wxi",".wxl",".wxs",".xaml",".svg",".svgz",".opf",".xslt",".xsl"],firstLine:"(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",aliases:["XML","xml"],mimetypes:["text/xml","application/xml","application/xaml+xml","application/xml-dtd"],loader:()=>import("./xml-4PEFXZ3E.js")});i({id:"yaml",extensions:[".yaml",".yml"],aliases:["YAML","yaml","YML","yml"],mimetypes:["application/x-yaml","text/x-yaml"],loader:()=>import("./yaml-MUTWO2XI.js")});var Fr=Object.defineProperty,Lr=(e,t,r)=>t in e?Fr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t,r)=>Lr(e,typeof t!="symbol"?t+"":t,r),ce,_t,le,Pe,ue;function Er(e){return e.method!==void 0}var St;(function(e){function t(r){return r}e.create=t})(St||(St={}));var v;(function(e){e.parseError=-32700,e.invalidRequest=-32600,e.methodNotFound=-32601,e.invalidParams=-32602,e.internalError=-32603;function t(s){return-32099<=s&&s<=-32e3}e.isServerError=t;function r(s){if(!t(s))throw new Error("Invalid range for a server error.");return s}e.serverError=r,e.unexpectedServerError=-32e3;function n(s){return!0}e.isApplicationError=n;function o(s){return s}e.applicationError=o,e.genericApplicationError=-320100})(v||(v={}));var It=class{constructor(){d(this,"listeners",new Set),d(this,"event",e=>(this.listeners.add(e),{dispose:()=>{this.listeners.delete(e)}}))}fire(e){this.listeners.forEach(t=>t(e))}},Pr=class{constructor(e){d(this,"_value"),d(this,"eventEmitter"),this._value=e,this.eventEmitter=new It}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.eventEmitter.fire(e))}get onChange(){return this.eventEmitter.event}};function Br(e,t){let r=setTimeout(t,e);return{dispose:()=>clearTimeout(r)}}function Be(e,t,r){return e instanceof Set?(e.add(t),{dispose:()=>e.delete(t)}):(e.set(t,r),{dispose:()=>e.delete(t)})}var Ir=class{constructor(){d(this,"_state","none"),d(this,"promise"),d(this,"resolve",()=>{}),d(this,"reject",()=>{}),this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}get state(){return this._state}},Yd=(ce=class{constructor(){d(this,"_unprocessedMessages",[]),d(this,"_messageListener"),d(this,"id",ce.id++),d(this,"_state",new Pr({state:"open"})),d(this,"state",this._state)}setListener(e){if(this._messageListener=e,!!e)for(;this._unprocessedMessages.length>0&&this._messageListener!==void 0;){let t=this._unprocessedMessages.shift();this._messageListener(t)}}send(e){return this._sendImpl(e)}_dispatchReceivedMessage(e){this._unprocessedMessages.length===0&&this._messageListener?this._messageListener(e):this._unprocessedMessages.push(e)}_onConnectionClosed(){this._state.value={state:"closed",error:void 0}}log(e){return new Mr(this,e!=null?e:new Or)}},d(ce,"id",0),ce),Mr=class{constructor(e,t){d(this,"baseStream"),d(this,"logger"),this.baseStream=e,this.logger=t}get state(){return this.baseStream.state}setListener(e){if(e===void 0){this.baseStream.setListener(void 0);return}this.baseStream.setListener(t=>{this.logger.log(this.baseStream,"incoming",t),e(t)})}send(e){return this.logger.log(this.baseStream,"outgoing",e),this.baseStream.send(e)}toString(){return`StreamLogger/${this.baseStream.toString()}`}},Or=class{log(e,t,r){console.log(`${t==="incoming"?"<-":"->"} [${e.toString()}] ${JSON.stringify(r)}`)}},Ar=class Mt{constructor(t){d(this,"connect"),this.connect=t}mapContext(t){return new Mt(r=>this.connect(r?jr(r,t):void 0))}};function jr(e,t){return{handleNotification:(r,n)=>e.handleNotification(r,t(n)),handleRequest:(r,n,o)=>e.handleRequest(r,n,t(o))}}var Hr=class Ot{constructor(t,r,n){d(this,"_stream"),d(this,"_listener"),d(this,"_logger"),d(this,"_unprocessedResponses",new Map),d(this,"_lastUsedRequestId",0),this._stream=t,this._listener=r,this._logger=n,this._stream.setListener(o=>{Er(o)?o.id===void 0?this._processNotification(o):this._processRequest(o):this._processResponse(o)})}static createChannel(t,r){let n=!1;return new Ar(o=>{if(n)throw new Error(`A channel to the stream ${t} was already constructed!`);return n=!0,new Ot(t,o,r)})}get state(){return this._stream.state}async _processNotification(t){if(t.id!==void 0)throw new Error;if(!this._listener){this._logger&&this._logger.debug({text:"Notification ignored",message:t});return}try{await this._listener.handleNotification({method:t.method,params:t.params||null})}catch(r){this._logger&&this._logger.warn({text:`Exception was thrown while handling notification: ${r}`,exception:r,message:t})}}async _processRequest(t){if(t.id===void 0)throw new Error;let r;if(this._listener)try{r=await this._listener.handleRequest({method:t.method,params:t.params||null},t.id)}catch(o){this._logger&&this._logger.warn({text:`Exception was thrown while handling request: ${o}`,message:t,exception:o}),r={error:{code:v.internalError,message:"An unexpected exception was thrown.",data:void 0}}}else this._logger&&this._logger.debug({text:"Received request even though not listening for requests",message:t}),r={error:{code:v.methodNotFound,message:"This endpoint does not listen for requests or notifications.",data:void 0}};let n;"result"in r?n={jsonrpc:"2.0",id:t.id,result:r.result}:n={jsonrpc:"2.0",id:t.id,error:r.error},await this._stream.send(n)}_processResponse(t){let r=""+t.id,n=this._unprocessedResponses.get(r);if(!n){this._logger&&this._logger.debug({text:"Got an unexpected response message",message:t});return}this._unprocessedResponses.delete(r),n(t)}_newRequestId(){return this._lastUsedRequestId++}sendRequest(t,r,n){let o={jsonrpc:"2.0",id:this._newRequestId(),method:t.method,params:t.params||void 0};return n&&n(o.id),new Promise((s,c)=>{let a=""+o.id;this._unprocessedResponses.set(a,p=>{"result"in p?s({result:p.result}):(p.error||c(new Error("Response had neither 'result' nor 'error' field set.")),s({error:p.error}))}),this._stream.send(o).then(void 0,p=>{this._unprocessedResponses.delete(a),c(p)})})}sendNotification(t,r){let n={jsonrpc:"2.0",id:void 0,method:t.method,params:t.params||void 0};return this._stream.send(n)}toString(){return"StreamChannel/"+this._stream.toString()}},j;(function(e){function t(){return{deserializeFromJson:o=>({hasErrors:!1,value:o}),serializeToJson:o=>o}}e.sAny=t;function r(){return{deserializeFromJson:o=>({hasErrors:!1,value:{}}),serializeToJson:o=>({})}}e.sEmptyObject=r;function n(){return{deserializeFromJson:o=>({hasErrors:!1,value:void 0}),serializeToJson:o=>null}}e.sVoidFromNull=n})(j||(j={}));var At=Symbol("OptionalMethodNotFound"),jt=class{contextualize(e){return new Nr(this,e)}},Nr=class extends jt{constructor(e,t){super(),d(this,"underylingTypedChannel"),d(this,"converters"),this.underylingTypedChannel=e,this.converters=t}async request(e,t,r){let n=await this.converters.getSendContext(r);return this.underylingTypedChannel.request(e,t,n)}async notify(e,t,r){let n=await this.converters.getSendContext(r);return this.underylingTypedChannel.notify(e,t,n)}registerNotificationHandler(e,t){return this.underylingTypedChannel.registerNotificationHandler(e,async(r,n)=>await t(r,await this.converters.getNewContext(n)))}registerRequestHandler(e,t){return this.underylingTypedChannel.registerRequestHandler(e,async(r,n,o)=>await t(r,n,await this.converters.getNewContext(o)))}},Ct=class Ht extends jt{constructor(t,r={}){super(),d(this,"channelCtor"),d(this,"_requestSender"),d(this,"_handler",new Map),d(this,"_unknownNotificationHandler",new Set),d(this,"_timeout"),d(this,"sendExceptionDetails",!1),d(this,"_logger"),d(this,"listeningDeferred",new Ir),d(this,"onListening",this.listeningDeferred.promise),d(this,"_requestDidErrorEventEmitter",new It),d(this,"onRequestDidError",this._requestDidErrorEventEmitter.event),this.channelCtor=t,this._logger=r.logger,this.sendExceptionDetails=!!r.sendExceptionDetails,this._timeout=Br(1e3,()=>{this._requestSender||console.warn(`"${this.startListen.name}" has not been called within 1 second after construction of this channel. Did you forget to call it?`,this)})}static fromTransport(t,r={}){return new Ht(Hr.createChannel(t,r.logger),r)}startListen(){if(this._requestSender)throw new Error(`"${this.startListen.name}" can be called only once, but it already has been called.`);this._timeout&&(this._timeout.dispose(),this._timeout=void 0),this._requestSender=this.channelCtor.connect({handleRequest:(t,r,n)=>this.handleRequest(t,r,n),handleNotification:(t,r)=>this.handleNotification(t,r)}),this.listeningDeferred.resolve()}checkChannel(t){if(!t)throw new Error(`"${this.startListen.name}" must be called before any messages can be sent or received.`);return!0}async handleRequest(t,r,n){let o=this._handler.get(t.method);if(!o)return this._logger&&this._logger.debug({text:`No request handler for "${t.method}".`,data:{requestObject:t}}),{error:{code:v.methodNotFound,message:`No request handler for "${t.method}".`,data:{method:t.method}}};if(o.kind!="request"){let c=`"${t.method}" is registered as notification, but was sent as request.`;return this._logger&&this._logger.debug({text:c,data:{requestObject:t}}),{error:{code:v.invalidRequest,message:c,data:{method:t.method}}}}let s=o.requestType.paramsSerializer.deserializeFromJson(t.params);if(s.hasErrors){let c=`Got invalid params: ${s.errorMessage}`;return this._logger&&this._logger.debug({text:c,data:{requestObject:t,errorMessage:s.errorMessage}}),{error:{code:v.invalidParams,message:c,data:{errors:s.errorMessage}}}}else{let c=s.value,a;try{let p=await o.handler(c,r,n);if("error"in p||"errorMessage"in p){let h=p.error?o.requestType.errorSerializer.serializeToJson(p.error):void 0;a={error:{code:p.errorCode||v.genericApplicationError,message:p.errorMessage||"An error was returned",data:h}}}else a={result:o.requestType.resultSerializer.serializeToJson(p.ok)}}catch(p){p instanceof Tt?a={error:{code:p.code,message:p.message}}:(this._logger&&this._logger.warn({text:`An exception was thrown while handling a request: ${p}.`,exception:p,data:{requestObject:t}}),a={error:{code:v.unexpectedServerError,message:this.sendExceptionDetails?`An exception was thrown while handling a request: ${p}.`:"Server has thrown an unexpected exception"}})}return a}}async handleNotification(t,r){let n=this._handler.get(t.method);if(!n){for(let c of this._unknownNotificationHandler)c(t);this._unknownNotificationHandler.size===0&&this._logger&&this._logger.debug({text:`Unhandled notification "${t.method}"`,data:{requestObject:t}});return}if(n.kind!="notification"){this._logger&&this._logger.debug({text:`"${t.method}" is registered as request, but was sent as notification.`,data:{requestObject:t}});return}let o=n.notificationType.paramsSerializer.deserializeFromJson(t.params);if(o.hasErrors){this._logger&&this._logger.debug({text:`Got invalid params: ${o}`,data:{requestObject:t,errorMessage:o.errorMessage}});return}let s=o.value;for(let c of n.handlers)try{c(s,r)}catch(a){this._logger&&this._logger.warn({text:`An exception was thrown while handling a notification: ${a}.`,exception:a,data:{requestObject:t}})}}registerUnknownNotificationHandler(t){return Be(this._unknownNotificationHandler,t)}registerRequestHandler(t,r){if(this._handler.get(t.method))throw new Error(`Handler with method "${t.method}" already registered.`);return Be(this._handler,t.method,{kind:"request",requestType:t,handler:r})}registerNotificationHandler(t,r){let n=this._handler.get(t.method);if(!n)n={kind:"notification",notificationType:t,handlers:new Set},this._handler.set(t.method,n);else{if(n.kind!=="notification")throw new Error(`Method "${t.method}" was already registered as request handler.`);if(n.notificationType!==t)throw new Error(`Method "${t.method}" was registered for a different type.`)}return Be(n.handlers,r)}getRegisteredTypes(){let t=[];for(let r of this._handler.values())r.kind==="notification"?t.push(r.notificationType):r.kind==="request"&&t.push(r.requestType);return t}async request(t,r,n){if(!this.checkChannel(this._requestSender))throw new Error("Impossible");let o=t.paramsSerializer.serializeToJson(r);Rt(o);let s=await this._requestSender.sendRequest({method:t.method,params:o},n);if("error"in s){if(t.isOptional&&s.error.code===v.methodNotFound)return At;let c;if(s.error.data!==void 0){let p=t.errorSerializer.deserializeFromJson(s.error.data);if(p.hasErrors)throw new Error(p.errorMessage);c=p.value}else c=void 0;let a=new Tt(s.error.message,c,s.error.code);throw this._requestDidErrorEventEmitter.fire({error:a}),a}else{let c=t.resultSerializer.deserializeFromJson(s.result);if(c.hasErrors)throw new Error("Could not deserialize response: "+c.errorMessage+`

${JSON.stringify(s,null,2)}`);return c.value}}async notify(t,r,n){if(!this.checkChannel(this._requestSender))throw new Error;let o=t.paramsSerializer.serializeToJson(r);Rt(o),this._requestSender.sendNotification({method:t.method,params:o},n)}};function Rt(e){if(e!==null&&Array.isArray(e)&&typeof e!="object")throw new Error("Invalid value! Only null, array and object is allowed.")}var Tt=class Nt extends Error{constructor(t,r,n=v.genericApplicationError){super(t),d(this,"data"),d(this,"code"),this.data=r,this.code=n,Object.setPrototypeOf(this,Nt.prototype)}},Vr=class je{constructor(t,r,n,o,s=!1){d(this,"method"),d(this,"paramsSerializer"),d(this,"resultSerializer"),d(this,"errorSerializer"),d(this,"isOptional"),d(this,"kind","request"),this.method=t,this.paramsSerializer=r,this.resultSerializer=n,this.errorSerializer=o,this.isOptional=s}withMethod(t){return new je(t,this.paramsSerializer,this.resultSerializer,this.errorSerializer)}optional(){return new je(this.method,this.paramsSerializer,this.resultSerializer,this.errorSerializer,!0)}},Wr=class Vt{constructor(t,r){d(this,"method"),d(this,"paramsSerializer"),d(this,"kind","notification"),this.method=t,this.paramsSerializer=r}withMethod(t){return new Vt(t,this.paramsSerializer)}};function u(e){return new Vr((e||{}).method,j.sAny(),j.sAny(),j.sAny())}function f(e){return new Wr((e||{}).method,j.sAny())}var zr=Symbol(),Ft=(_t=zr,le=class{constructor(e){d(this,"error"),d(this,_t),this.error=e}},d(le,"factory",e=>new le(e)),le);function qr(e){let t=Lt(e.server),r=Lt(e.client);return new Ur(e.tags||[],t,r)}function Lt(e){let t={};for(let[r,n]of Object.entries(e)){let o=n.method?n.method:r;t[r]=n.withMethod(o)}return t}var Ur=class Wt{constructor(t=[],r,n){d(this,"tags"),d(this,"server"),d(this,"client"),this.tags=t,this.server=r,this.client=n}_onlyDesignTime(){return new Error("This property is not meant to be accessed at runtime")}get TContractObject(){throw this._onlyDesignTime()}get TClientInterface(){throw this._onlyDesignTime()}get TServerInterface(){throw this._onlyDesignTime()}get TClientHandler(){throw this._onlyDesignTime()}get TServerHandler(){throw this._onlyDesignTime()}get TTags(){throw this._onlyDesignTime()}getInterface(t,r,n,o){let s=this.buildCounterpart(t,n),c=this.registerHandlers(t,r,o,s);return{counterpart:s,dispose:()=>c.dispose()}}buildCounterpart(t,r){let n={};for(let[o,s]of Object.entries(r)){let c;s.kind==="request"?s.isOptional?c=async(a,p)=>{a===void 0&&(a={});try{return await t.request(s,a,p)}catch(h){if(h&&h.code===v.methodNotFound)return At;throw h}}:c=(a,p)=>(a===void 0&&(a={}),t.request(s,a,p)):c=(a,p)=>(a===void 0&&(a={}),t.notify(s,a,p)),n[o]=c}return n}registerHandlers(t,r,n,o){let s=[];for(let[c,a]of Object.entries(r))if(a.kind==="request"){let p=n[c];if(!p)continue;let h=this.createRequestHandler(o,p);s.push(t.registerRequestHandler(a,h))}else{let p=n[c];p&&s.push(t.registerNotificationHandler(a,(h,y)=>{p(h,{context:y,counterpart:o})}))}return{dispose:()=>s.forEach(c=>c.dispose())}}createRequestHandler(t,r){return async(n,o,s)=>{let c=await r(n,{context:s,counterpart:t,newErr:Ft.factory,requestId:o});return c instanceof Ft?c.error:{ok:c}}}static getServerFromStream(t,r,n,o){let s=Ct.fromTransport(r,n),{server:c}=t.getServer(s,o);return s.startListen(),{channel:s,server:c}}static registerServerToStream(t,r,n,o){let s=Ct.fromTransport(r,n),{client:c}=t.registerServer(s,o);return s.startListen(),{channel:s,client:c}}getServer(t,r){let{counterpart:n,dispose:o}=this.getInterface(t,this.client,this.server,r);return{server:n,dispose:o}}registerServer(t,r){let{counterpart:n,dispose:o}=this.getInterface(t,this.server,this.client,r);return{client:n,dispose:o}}withContext(){return new Wt(this.tags,this.server,this.client)}},Ie=(function(e){return e.Comment="comment",e.Imports="imports",e.Region="region",e})({}),b=(function(e){return e[e.File=1]="File",e[e.Module=2]="Module",e[e.Namespace=3]="Namespace",e[e.Package=4]="Package",e[e.Class=5]="Class",e[e.Method=6]="Method",e[e.Property=7]="Property",e[e.Field=8]="Field",e[e.Constructor=9]="Constructor",e[e.Enum=10]="Enum",e[e.Interface=11]="Interface",e[e.Function=12]="Function",e[e.Variable=13]="Variable",e[e.Constant=14]="Constant",e[e.String=15]="String",e[e.Number=16]="Number",e[e.Boolean=17]="Boolean",e[e.Array=18]="Array",e[e.Object=19]="Object",e[e.Key=20]="Key",e[e.Null=21]="Null",e[e.EnumMember=22]="EnumMember",e[e.Struct=23]="Struct",e[e.Event=24]="Event",e[e.Operator=25]="Operator",e[e.TypeParameter=26]="TypeParameter",e})({}),Gr=(function(e){return e[e.Deprecated=1]="Deprecated",e})({}),Et=(function(e){return e[e.Type=1]="Type",e[e.Parameter=2]="Parameter",e})({});var k=(function(e){return e[e.Text=1]="Text",e[e.Method=2]="Method",e[e.Function=3]="Function",e[e.Constructor=4]="Constructor",e[e.Field=5]="Field",e[e.Variable=6]="Variable",e[e.Class=7]="Class",e[e.Interface=8]="Interface",e[e.Module=9]="Module",e[e.Property=10]="Property",e[e.Unit=11]="Unit",e[e.Value=12]="Value",e[e.Enum=13]="Enum",e[e.Keyword=14]="Keyword",e[e.Snippet=15]="Snippet",e[e.Color=16]="Color",e[e.File=17]="File",e[e.Reference=18]="Reference",e[e.Folder=19]="Folder",e[e.EnumMember=20]="EnumMember",e[e.Constant=21]="Constant",e[e.Struct=22]="Struct",e[e.Event=23]="Event",e[e.Operator=24]="Operator",e[e.TypeParameter=25]="TypeParameter",e})({}),Jr=(function(e){return e[e.Deprecated=1]="Deprecated",e})({}),Xr=(function(e){return e[e.PlainText=1]="PlainText",e[e.Snippet=2]="Snippet",e})({}),Me=(function(e){return e[e.Text=1]="Text",e[e.Read=2]="Read",e[e.Write=3]="Write",e})({}),L=(function(e){return e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll",e})({});var B=(function(e){return e[e.Error=1]="Error",e[e.Warning=2]="Warning",e[e.Information=3]="Information",e[e.Hint=4]="Hint",e})({}),Pt=(function(e){return e[e.Unnecessary=1]="Unnecessary",e[e.Deprecated=2]="Deprecated",e})({}),Oe=(function(e){return e[e.Invoked=1]="Invoked",e[e.TriggerCharacter=2]="TriggerCharacter",e[e.TriggerForIncompleteCompletions=3]="TriggerForIncompleteCompletions",e})({}),Ae=(function(e){return e[e.Invoked=1]="Invoked",e[e.TriggerCharacter=2]="TriggerCharacter",e[e.ContentChange=3]="ContentChange",e})({}),Bt=(function(e){return e[e.Invoked=1]="Invoked",e[e.Automatic=2]="Automatic",e})({});var m=class{constructor(e){this.method=e}},Yr={textDocumentImplementation:new m("textDocument/implementation"),textDocumentTypeDefinition:new m("textDocument/typeDefinition"),textDocumentDocumentColor:new m("textDocument/documentColor"),textDocumentColorPresentation:new m("textDocument/colorPresentation"),textDocumentFoldingRange:new m("textDocument/foldingRange"),textDocumentDeclaration:new m("textDocument/declaration"),textDocumentSelectionRange:new m("textDocument/selectionRange"),textDocumentPrepareCallHierarchy:new m("textDocument/prepareCallHierarchy"),textDocumentSemanticTokensFull:new m("textDocument/semanticTokens/full"),textDocumentSemanticTokensFullDelta:new m("textDocument/semanticTokens/full/delta"),textDocumentLinkedEditingRange:new m("textDocument/linkedEditingRange"),workspaceWillCreateFiles:new m("workspace/willCreateFiles"),workspaceWillRenameFiles:new m("workspace/willRenameFiles"),workspaceWillDeleteFiles:new m("workspace/willDeleteFiles"),textDocumentMoniker:new m("textDocument/moniker"),textDocumentPrepareTypeHierarchy:new m("textDocument/prepareTypeHierarchy"),textDocumentInlineValue:new m("textDocument/inlineValue"),textDocumentInlayHint:new m("textDocument/inlayHint"),textDocumentDiagnostic:new m("textDocument/diagnostic"),textDocumentInlineCompletion:new m("textDocument/inlineCompletion"),textDocumentWillSaveWaitUntil:new m("textDocument/willSaveWaitUntil"),textDocumentCompletion:new m("textDocument/completion"),textDocumentHover:new m("textDocument/hover"),textDocumentSignatureHelp:new m("textDocument/signatureHelp"),textDocumentDefinition:new m("textDocument/definition"),textDocumentReferences:new m("textDocument/references"),textDocumentDocumentHighlight:new m("textDocument/documentHighlight"),textDocumentDocumentSymbol:new m("textDocument/documentSymbol"),textDocumentCodeAction:new m("textDocument/codeAction"),workspaceSymbol:new m("workspace/symbol"),textDocumentCodeLens:new m("textDocument/codeLens"),textDocumentDocumentLink:new m("textDocument/documentLink"),textDocumentFormatting:new m("textDocument/formatting"),textDocumentRangeFormatting:new m("textDocument/rangeFormatting"),textDocumentRangesFormatting:new m("textDocument/rangesFormatting"),textDocumentOnTypeFormatting:new m("textDocument/onTypeFormatting"),textDocumentRename:new m("textDocument/rename"),workspaceExecuteCommand:new m("workspace/executeCommand"),workspaceDidCreateFiles:new m("workspace/didCreateFiles"),workspaceDidRenameFiles:new m("workspace/didRenameFiles"),workspaceDidDeleteFiles:new m("workspace/didDeleteFiles"),workspaceDidChangeConfiguration:new m("workspace/didChangeConfiguration"),textDocumentDidOpen:new m("textDocument/didOpen"),textDocumentDidChange:new m("textDocument/didChange"),textDocumentDidClose:new m("textDocument/didClose"),textDocumentDidSave:new m("textDocument/didSave"),textDocumentWillSave:new m("textDocument/willSave"),workspaceDidChangeWatchedFiles:new m("workspace/didChangeWatchedFiles")},Qd=qr({server:{textDocumentImplementation:u({method:"textDocument/implementation"}),textDocumentTypeDefinition:u({method:"textDocument/typeDefinition"}),textDocumentDocumentColor:u({method:"textDocument/documentColor"}),textDocumentColorPresentation:u({method:"textDocument/colorPresentation"}),textDocumentFoldingRange:u({method:"textDocument/foldingRange"}),textDocumentDeclaration:u({method:"textDocument/declaration"}),textDocumentSelectionRange:u({method:"textDocument/selectionRange"}),textDocumentPrepareCallHierarchy:u({method:"textDocument/prepareCallHierarchy"}),callHierarchyIncomingCalls:u({method:"callHierarchy/incomingCalls"}),callHierarchyOutgoingCalls:u({method:"callHierarchy/outgoingCalls"}),textDocumentSemanticTokensFull:u({method:"textDocument/semanticTokens/full"}),textDocumentSemanticTokensFullDelta:u({method:"textDocument/semanticTokens/full/delta"}),textDocumentSemanticTokensRange:u({method:"textDocument/semanticTokens/range"}),textDocumentLinkedEditingRange:u({method:"textDocument/linkedEditingRange"}),workspaceWillCreateFiles:u({method:"workspace/willCreateFiles"}),workspaceWillRenameFiles:u({method:"workspace/willRenameFiles"}),workspaceWillDeleteFiles:u({method:"workspace/willDeleteFiles"}),textDocumentMoniker:u({method:"textDocument/moniker"}),textDocumentPrepareTypeHierarchy:u({method:"textDocument/prepareTypeHierarchy"}),typeHierarchySupertypes:u({method:"typeHierarchy/supertypes"}),typeHierarchySubtypes:u({method:"typeHierarchy/subtypes"}),textDocumentInlineValue:u({method:"textDocument/inlineValue"}),textDocumentInlayHint:u({method:"textDocument/inlayHint"}),inlayHintResolve:u({method:"inlayHint/resolve"}),textDocumentDiagnostic:u({method:"textDocument/diagnostic"}),workspaceDiagnostic:u({method:"workspace/diagnostic"}),textDocumentInlineCompletion:u({method:"textDocument/inlineCompletion"}),initialize:u({method:"initialize"}),shutdown:u({method:"shutdown"}),textDocumentWillSaveWaitUntil:u({method:"textDocument/willSaveWaitUntil"}),textDocumentCompletion:u({method:"textDocument/completion"}),completionItemResolve:u({method:"completionItem/resolve"}),textDocumentHover:u({method:"textDocument/hover"}),textDocumentSignatureHelp:u({method:"textDocument/signatureHelp"}),textDocumentDefinition:u({method:"textDocument/definition"}),textDocumentReferences:u({method:"textDocument/references"}),textDocumentDocumentHighlight:u({method:"textDocument/documentHighlight"}),textDocumentDocumentSymbol:u({method:"textDocument/documentSymbol"}),textDocumentCodeAction:u({method:"textDocument/codeAction"}),codeActionResolve:u({method:"codeAction/resolve"}),workspaceSymbol:u({method:"workspace/symbol"}),workspaceSymbolResolve:u({method:"workspaceSymbol/resolve"}),textDocumentCodeLens:u({method:"textDocument/codeLens"}),codeLensResolve:u({method:"codeLens/resolve"}),textDocumentDocumentLink:u({method:"textDocument/documentLink"}),documentLinkResolve:u({method:"documentLink/resolve"}),textDocumentFormatting:u({method:"textDocument/formatting"}),textDocumentRangeFormatting:u({method:"textDocument/rangeFormatting"}),textDocumentRangesFormatting:u({method:"textDocument/rangesFormatting"}),textDocumentOnTypeFormatting:u({method:"textDocument/onTypeFormatting"}),textDocumentRename:u({method:"textDocument/rename"}),textDocumentPrepareRename:u({method:"textDocument/prepareRename"}),workspaceExecuteCommand:u({method:"workspace/executeCommand"}),workspaceDidChangeWorkspaceFolders:f({method:"workspace/didChangeWorkspaceFolders"}),windowWorkDoneProgressCancel:f({method:"window/workDoneProgress/cancel"}),workspaceDidCreateFiles:f({method:"workspace/didCreateFiles"}),workspaceDidRenameFiles:f({method:"workspace/didRenameFiles"}),workspaceDidDeleteFiles:f({method:"workspace/didDeleteFiles"}),notebookDocumentDidOpen:f({method:"notebookDocument/didOpen"}),notebookDocumentDidChange:f({method:"notebookDocument/didChange"}),notebookDocumentDidSave:f({method:"notebookDocument/didSave"}),notebookDocumentDidClose:f({method:"notebookDocument/didClose"}),initialized:f({method:"initialized"}),exit:f({method:"exit"}),workspaceDidChangeConfiguration:f({method:"workspace/didChangeConfiguration"}),textDocumentDidOpen:f({method:"textDocument/didOpen"}),textDocumentDidChange:f({method:"textDocument/didChange"}),textDocumentDidClose:f({method:"textDocument/didClose"}),textDocumentDidSave:f({method:"textDocument/didSave"}),textDocumentWillSave:f({method:"textDocument/willSave"}),workspaceDidChangeWatchedFiles:f({method:"workspace/didChangeWatchedFiles"}),setTrace:f({method:"$/setTrace"}),cancelRequest:f({method:"$/cancelRequest"}),progress:f({method:"$/progress"})},client:{workspaceWorkspaceFolders:u({method:"workspace/workspaceFolders"}).optional(),workspaceConfiguration:u({method:"workspace/configuration"}).optional(),workspaceFoldingRangeRefresh:u({method:"workspace/foldingRange/refresh"}).optional(),windowWorkDoneProgressCreate:u({method:"window/workDoneProgress/create"}).optional(),workspaceSemanticTokensRefresh:u({method:"workspace/semanticTokens/refresh"}).optional(),windowShowDocument:u({method:"window/showDocument"}).optional(),workspaceInlineValueRefresh:u({method:"workspace/inlineValue/refresh"}).optional(),workspaceInlayHintRefresh:u({method:"workspace/inlayHint/refresh"}).optional(),workspaceDiagnosticRefresh:u({method:"workspace/diagnostic/refresh"}).optional(),clientRegisterCapability:u({method:"client/registerCapability"}).optional(),clientUnregisterCapability:u({method:"client/unregisterCapability"}).optional(),windowShowMessageRequest:u({method:"window/showMessageRequest"}).optional(),workspaceCodeLensRefresh:u({method:"workspace/codeLens/refresh"}).optional(),workspaceApplyEdit:u({method:"workspace/applyEdit"}).optional(),windowShowMessage:f({method:"window/showMessage"}),windowLogMessage:f({method:"window/logMessage"}),telemetryEvent:f({method:"telemetry/event"}),textDocumentPublishDiagnostics:f({method:"textDocument/publishDiagnostics"}),logTrace:f({method:"$/logTrace"}),cancelRequest:f({method:"$/cancelRequest"}),progress:f({method:"$/progress"})}});var Zd=(Pe=class{constructor(){d(this,"_store",new Qr)}dispose(){this._store.dispose()}_register(e){if(e===this)throw new Error("Cannot register a disposable on itself!");return this._store.add(e)}},d(Pe,"None",Object.freeze({dispose(){}})),Pe),Qr=(ue=class{constructor(){d(this,"_toDispose",new Set),d(this,"_isDisposed",!1)}dispose(){this._isDisposed||(this._isDisposed=!0,this.clear())}clear(){if(this._toDispose.size!==0)try{for(let e of this._toDispose)e.dispose()}finally{this._toDispose.clear()}}add(e){if(!e)return e;if(e===this)throw new Error("Cannot register a disposable on itself!");return this._isDisposed?ue.DISABLE_DISPOSED_WARNING||console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack):this._toDispose.add(e),e}},d(ue,"DISABLE_DISPOSED_WARNING",!1),ue),Kd=new Map([[L.Empty,""],[L.QuickFix,"quickfix"],[L.Refactor,"refactor"],[L.RefactorExtract,"refactor.extract"],[L.RefactorInline,"refactor.inline"],[L.RefactorRewrite,"refactor.rewrite"],[L.Source,"source"],[L.SourceOrganizeImports,"source.organizeImports"],[L.SourceFixAll,"source.fixAll"]]);var $d=new Map([[l.CodeActionTriggerType.Invoke,Bt.Invoked],[l.CodeActionTriggerType.Auto,Bt.Automatic]]);var ep=new Map([[k.Text,l.CompletionItemKind.Text],[k.Method,l.CompletionItemKind.Method],[k.Function,l.CompletionItemKind.Function],[k.Constructor,l.CompletionItemKind.Constructor],[k.Field,l.CompletionItemKind.Field],[k.Variable,l.CompletionItemKind.Variable],[k.Class,l.CompletionItemKind.Class],[k.Interface,l.CompletionItemKind.Interface],[k.Module,l.CompletionItemKind.Module],[k.Property,l.CompletionItemKind.Property],[k.Unit,l.CompletionItemKind.Unit],[k.Value,l.CompletionItemKind.Value],[k.Enum,l.CompletionItemKind.Enum],[k.Keyword,l.CompletionItemKind.Keyword],[k.Snippet,l.CompletionItemKind.Snippet],[k.Color,l.CompletionItemKind.Color],[k.File,l.CompletionItemKind.File],[k.Reference,l.CompletionItemKind.Reference],[k.Folder,l.CompletionItemKind.Folder],[k.EnumMember,l.CompletionItemKind.EnumMember],[k.Constant,l.CompletionItemKind.Constant],[k.Struct,l.CompletionItemKind.Struct],[k.Event,l.CompletionItemKind.Event],[k.Operator,l.CompletionItemKind.Operator],[k.TypeParameter,l.CompletionItemKind.TypeParameter]]);var tp=new Map([[Jr.Deprecated,l.CompletionItemTag.Deprecated]]);var rp=new Map([[l.CompletionTriggerKind.Invoke,Oe.Invoked],[l.CompletionTriggerKind.TriggerCharacter,Oe.TriggerCharacter],[l.CompletionTriggerKind.TriggerForIncompleteCompletions,Oe.TriggerForIncompleteCompletions]]);var np=new Map([[Xr.Snippet,l.CompletionItemInsertTextRule.InsertAsSnippet]]);var ip=new Map([[b.File,l.SymbolKind.File],[b.Module,l.SymbolKind.Module],[b.Namespace,l.SymbolKind.Namespace],[b.Package,l.SymbolKind.Package],[b.Class,l.SymbolKind.Class],[b.Method,l.SymbolKind.Method],[b.Property,l.SymbolKind.Property],[b.Field,l.SymbolKind.Field],[b.Constructor,l.SymbolKind.Constructor],[b.Enum,l.SymbolKind.Enum],[b.Interface,l.SymbolKind.Interface],[b.Function,l.SymbolKind.Function],[b.Variable,l.SymbolKind.Variable],[b.Constant,l.SymbolKind.Constant],[b.String,l.SymbolKind.String],[b.Number,l.SymbolKind.Number],[b.Boolean,l.SymbolKind.Boolean],[b.Array,l.SymbolKind.Array],[b.Object,l.SymbolKind.Object],[b.Key,l.SymbolKind.Key],[b.Null,l.SymbolKind.Null],[b.EnumMember,l.SymbolKind.EnumMember],[b.Struct,l.SymbolKind.Struct],[b.Event,l.SymbolKind.Event],[b.Operator,l.SymbolKind.Operator],[b.TypeParameter,l.SymbolKind.TypeParameter]]);var op=new Map([[Gr.Deprecated,l.SymbolTag.Deprecated]]);var sp=new Map([[Me.Text,l.DocumentHighlightKind.Text],[Me.Read,l.DocumentHighlightKind.Read],[Me.Write,l.DocumentHighlightKind.Write]]);var ap=new Map([[Ie.Comment,l.FoldingRangeKind.Comment],[Ie.Imports,l.FoldingRangeKind.Imports],[Ie.Region,l.FoldingRangeKind.Region]]);var cp=new Map([[F.Error,B.Error],[F.Warning,B.Warning],[F.Info,B.Information],[F.Hint,B.Hint]]);var lp=new Map([[B.Error,F.Error],[B.Warning,F.Warning],[B.Information,F.Info],[B.Hint,F.Hint]]);var up=new Map([[Pt.Unnecessary,ie.Unnecessary],[Pt.Deprecated,ie.Deprecated]]);var dp=new Map([[l.SignatureHelpTriggerKind.Invoke,Ae.Invoked],[l.SignatureHelpTriggerKind.TriggerCharacter,Ae.TriggerCharacter],[l.SignatureHelpTriggerKind.ContentChange,Ae.ContentChange]]);var pp=new Map([[Et.Type,l.InlayHintKind.Type],[Et.Parameter,l.InlayHintKind.Parameter]]);var mp=new Map([...Object.values(Yr)].map(e=>[e.method,e]));var Z=null;typeof WebSocket!="undefined"?Z=WebSocket:typeof MozWebSocket!="undefined"?Z=MozWebSocket:typeof global!="undefined"?Z=global.WebSocket||global.MozWebSocket:typeof window!="undefined"?Z=window.WebSocket||window.MozWebSocket:typeof self!="undefined"&&(Z=self.WebSocket||self.MozWebSocket);function Ne(){return pt}var He=globalThis.MonacoEnvironment;He!=null&&He.globalAPI&&(globalThis.monaco=Ne());var de=Ne();de.languages.css=Se;de.languages.html=Re;de.languages.typescript=D;de.languages.json=Fe;var zt={inherit:!1,base:"vs",colors:{focusBorder:"#2188ff",foreground:"#444d56",descriptionForeground:"#6a737d",errorForeground:"#cb2431","textLink.foreground":"#0366d6","textLink.activeForeground":"#005cc5","textBlockQuote.background":"#fafbfc","textBlockQuote.border":"#e1e4e8","textCodeBlock.background":"#f6f8fa","textPreformat.foreground":"#586069","textSeparator.foreground":"#d1d5da","button.background":"#159739","button.foreground":"#ffffff","button.hoverBackground":"#138934","button.secondaryBackground":"#e1e4e8","button.secondaryForeground":"#1b1f23","button.secondaryHoverBackground":"#d1d5da","checkbox.background":"#fafbfc","checkbox.border":"#d1d5da","dropdown.background":"#fafbfc","dropdown.border":"#e1e4e8","dropdown.foreground":"#2f363d","dropdown.listBackground":"#ffffff","input.background":"#fafbfc","input.border":"#e1e4e8","input.foreground":"#2f363d","input.placeholderForeground":"#959da5","badge.foreground":"#005cc5","badge.background":"#dbedff","progressBar.background":"#2188ff","titleBar.activeForeground":"#2f363d","titleBar.activeBackground":"#ffffff","titleBar.inactiveForeground":"#6a737d","titleBar.inactiveBackground":"#f6f8fa","titleBar.border":"#e1e4e8","activityBar.foreground":"#2f363d","activityBar.inactiveForeground":"#959da5","activityBar.background":"#ffffff","activityBarBadge.foreground":"#ffffff","activityBarBadge.background":"#2188ff","activityBar.activeBorder":"#f9826c","activityBar.border":"#e1e4e8","sideBar.foreground":"#586069","sideBar.background":"#f6f8fa","sideBar.border":"#e1e4e8","sideBarTitle.foreground":"#2f363d","sideBarSectionHeader.foreground":"#2f363d","sideBarSectionHeader.background":"#f6f8fa","sideBarSectionHeader.border":"#e1e4e8","list.hoverForeground":"#2f363d","list.inactiveSelectionForeground":"#2f363d","list.activeSelectionForeground":"#2f363d","list.hoverBackground":"#ebf0f4","list.inactiveSelectionBackground":"#e8eaed","list.activeSelectionBackground":"#e2e5e9","list.inactiveFocusBackground":"#dbedff","list.focusBackground":"#cce5ff","tree.indentGuidesStroke":"#e1e4e8","notificationCenterHeader.foreground":"#6a737d","notificationCenterHeader.background":"#e1e4e8","notifications.foreground":"#2f363d","notifications.background":"#fafbfc","notifications.border":"#e1e4e8","notificationsErrorIcon.foreground":"#d73a49","notificationsWarningIcon.foreground":"#e36209","notificationsInfoIcon.foreground":"#005cc5","pickerGroup.border":"#e1e4e8","pickerGroup.foreground":"#2f363d","quickInput.background":"#fafbfc","quickInput.foreground":"#2f363d","statusBar.foreground":"#586069","statusBar.background":"#ffffff","statusBar.border":"#e1e4e8","statusBar.noFolderBackground":"#ffffff","statusBar.debuggingBackground":"#f9826c","statusBar.debuggingForeground":"#ffffff","statusBarItem.prominentBackground":"#e8eaed","editorGroupHeader.tabsBackground":"#f6f8fa","editorGroupHeader.tabsBorder":"#e1e4e8","editorGroup.border":"#e1e4e8","tab.activeForeground":"#2f363d","tab.inactiveForeground":"#6a737d","tab.inactiveBackground":"#f6f8fa","tab.activeBackground":"#ffffff","tab.hoverBackground":"#ffffff","tab.unfocusedHoverBackground":"#ffffff","tab.border":"#e1e4e8","tab.unfocusedActiveBorderTop":"#e1e4e8","tab.activeBorder":"#ffffff","tab.unfocusedActiveBorder":"#ffffff","tab.activeBorderTop":"#f9826c","breadcrumb.foreground":"#6a737d","breadcrumb.focusForeground":"#2f363d","breadcrumb.activeSelectionForeground":"#586069","breadcrumbPicker.background":"#fafbfc","editor.foreground":"#24292e","editor.background":"#ffffff","editorWidget.background":"#f6f8fa","editor.foldBackground":"#d1d5da11","editor.lineHighlightBackground":"#f6f8fa","editorLineNumber.foreground":"#1b1f234d","editorLineNumber.activeForeground":"#24292e","editorIndentGuide.background":"#eff2f6","editorIndentGuide.activeBackground":"#d7dbe0","editorWhitespace.foreground":"#d1d5da","editorCursor.foreground":"#044289","editor.findMatchBackground":"#ffdf5d","editor.findMatchHighlightBackground":"#ffdf5d66","editor.linkedEditingBackground":"#0366d611","editor.inactiveSelectionBackground":"#0366d611","editor.selectionBackground":"#0366d625","editor.selectionHighlightBackground":"#34d05840","editor.selectionHighlightBorder":"#34d05800","editor.wordHighlightBackground":"#34d05800","editor.wordHighlightStrongBackground":"#34d05800","editor.wordHighlightBorder":"#24943e99","editor.wordHighlightStrongBorder":"#24943e50","editorBracketMatch.background":"#34d05840","editorBracketMatch.border":"#34d05800","editorGutter.modifiedBackground":"#2188ff","editorGutter.addedBackground":"#28a745","editorGutter.deletedBackground":"#d73a49","diffEditor.insertedTextBackground":"#34d05822","diffEditor.removedTextBackground":"#d73a4922","scrollbar.shadow":"#6a737d33","scrollbarSlider.background":"#959da533","scrollbarSlider.hoverBackground":"#959da544","scrollbarSlider.activeBackground":"#959da588","editorOverviewRuler.border":"#ffffff","panel.background":"#f6f8fa","panel.border":"#e1e4e8","panelTitle.activeBorder":"#f9826c","panelTitle.activeForeground":"#2f363d","panelTitle.inactiveForeground":"#6a737d","panelInput.border":"#e1e4e8","terminal.foreground":"#586069","gitDecoration.addedResourceForeground":"#28a745","gitDecoration.modifiedResourceForeground":"#005cc5","gitDecoration.deletedResourceForeground":"#d73a49","gitDecoration.untrackedResourceForeground":"#28a745","gitDecoration.ignoredResourceForeground":"#959da5","gitDecoration.conflictingResourceForeground":"#e36209","gitDecoration.submoduleResourceForeground":"#959da5","debugToolBar.background":"#ffffff","editor.stackFrameHighlightBackground":"#ffd33d33","editor.focusedStackFrameHighlightBackground":"#28a74525","settings.headerForeground":"#2f363d","settings.modifiedItemIndicator":"#2188ff","welcomePage.buttonBackground":"#f6f8fa","welcomePage.buttonHoverBackground":"#e1e4e8"},rules:[{token:"comment",foreground:"#6a737d"},{token:"punctuation.definition.comment",foreground:"#6a737d"},{token:"string.comment",foreground:"#6a737d"},{token:"constant",foreground:"#005cc5"},{token:"entity.name.constant",foreground:"#005cc5"},{token:"variable.other.constant",foreground:"#005cc5"},{token:"variable.language",foreground:"#005cc5"},{token:"entity",foreground:"#6f42c1"},{token:"entity.name",foreground:"#6f42c1"},{token:"variable.parameter.function",foreground:"#24292e"},{token:"entity.name.tag",foreground:"#22863a"},{token:"keyword",foreground:"#d73a49"},{token:"storage",foreground:"#d73a49"},{token:"storage.type",foreground:"#d73a49"},{token:"storage.modifier.package",foreground:"#24292e"},{token:"storage.modifier.import",foreground:"#24292e"},{token:"storage.type.java",foreground:"#24292e"},{token:"string",foreground:"#032f62"},{token:"punctuation.definition.string",foreground:"#032f62"},{token:"string punctuation.section.embedded source",foreground:"#032f62"},{token:"support",foreground:"#005cc5"},{token:"meta.property-name",foreground:"#005cc5"},{token:"variable",foreground:"#e36209"},{token:"variable.other",foreground:"#24292e"},{token:"invalid.broken",fontStyle:"italic",foreground:"#b31d28"},{token:"invalid.deprecated",fontStyle:"italic",foreground:"#b31d28"},{token:"invalid.illegal",fontStyle:"italic",foreground:"#b31d28"},{token:"invalid.unimplemented",fontStyle:"italic",foreground:"#b31d28"},{token:"carriage-return",fontStyle:"italic underline",background:"#d73a49",foreground:"#fafbfc",content:"^M"},{token:"message.error",foreground:"#b31d28"},{token:"string source",foreground:"#24292e"},{token:"string variable",foreground:"#005cc5"},{token:"source.regexp",foreground:"#032f62"},{token:"string.regexp",foreground:"#032f62"},{token:"string.regexp.character-class",foreground:"#032f62"},{token:"string.regexp constant.character.escape",foreground:"#032f62"},{token:"string.regexp source.ruby.embedded",foreground:"#032f62"},{token:"string.regexp string.regexp.arbitrary-repitition",foreground:"#032f62"},{token:"string.regexp constant.character.escape",fontStyle:"bold",foreground:"#22863a"},{token:"support.constant",foreground:"#005cc5"},{token:"support.variable",foreground:"#005cc5"},{token:"meta.module-reference",foreground:"#005cc5"},{token:"punctuation.definition.list.begin.markdown",foreground:"#e36209"},{token:"markup.heading",fontStyle:"bold",foreground:"#005cc5"},{token:"markup.heading entity.name",fontStyle:"bold",foreground:"#005cc5"},{token:"markup.quote",foreground:"#22863a"},{token:"markup.italic",fontStyle:"italic",foreground:"#24292e"},{token:"markup.bold",fontStyle:"bold",foreground:"#24292e"},{token:"markup.raw",foreground:"#005cc5"},{token:"markup.deleted",background:"#ffeef0",foreground:"#b31d28"},{token:"meta.diff.header.from-file",background:"#ffeef0",foreground:"#b31d28"},{token:"punctuation.definition.deleted",background:"#ffeef0",foreground:"#b31d28"},{token:"markup.inserted",background:"#f0fff4",foreground:"#22863a"},{token:"meta.diff.header.to-file",background:"#f0fff4",foreground:"#22863a"},{token:"punctuation.definition.inserted",background:"#f0fff4",foreground:"#22863a"},{token:"markup.changed",background:"#ffebda",foreground:"#e36209"},{token:"punctuation.definition.changed",background:"#ffebda",foreground:"#e36209"},{token:"markup.ignored",foreground:"#f6f8fa",background:"#005cc5"},{token:"markup.untracked",foreground:"#f6f8fa",background:"#005cc5"},{token:"meta.diff.range",foreground:"#6f42c1",fontStyle:"bold"},{token:"meta.diff.header",foreground:"#005cc5"},{token:"meta.separator",fontStyle:"bold",foreground:"#005cc5"},{token:"meta.output",foreground:"#005cc5"},{token:"brackethighlighter.tag",foreground:"#586069"},{token:"brackethighlighter.curly",foreground:"#586069"},{token:"brackethighlighter.round",foreground:"#586069"},{token:"brackethighlighter.square",foreground:"#586069"},{token:"brackethighlighter.angle",foreground:"#586069"},{token:"brackethighlighter.quote",foreground:"#586069"},{token:"brackethighlighter.unmatched",foreground:"#b31d28"},{token:"constant.other.reference.link",foreground:"#032f62",fontStyle:"underline"},{token:"string.other.link",foreground:"#032f62",fontStyle:"underline"}],encodedTokensColors:[]};var qt={name:"github-dark",base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"#8B949E"},{token:"punctuation.definition.comment",foreground:"#8B949E"},{token:"string.comment",foreground:"#8B949E"},{token:"constant",foreground:"#79C0FF"},{token:"entity.name.constant",foreground:"#79C0FF"},{token:"variable.other.constant",foreground:"#79C0FF"},{token:"variable.language",foreground:"#79C0FF"},{token:"entity",foreground:"#79C0FF"},{token:"entity.name",foreground:"#FFA657"},{token:"meta.export.default",foreground:"#FFA657"},{token:"meta.definition.variable",foreground:"#FFA657"},{token:"variable.parameter.function",foreground:"#C9D1D9"},{token:"meta.jsx.children",foreground:"#C9D1D9"},{token:"meta.block",foreground:"#C9D1D9"},{token:"meta.tag.attributes",foreground:"#C9D1D9"},{token:"entity.name.constant",foreground:"#C9D1D9"},{token:"meta.object.member",foreground:"#C9D1D9"},{token:"meta.embedded.expression",foreground:"#C9D1D9"},{token:"entity.name.function",foreground:"#D2A8FF"},{token:"entity.name.tag",foreground:"#7EE787"},{token:"support.class.component",foreground:"#7EE787"},{token:"keyword",foreground:"#FF7B72"},{token:"storage",foreground:"#FF7B72"},{token:"storage.type",foreground:"#FF7B72"},{token:"storage.modifier.package",foreground:"#C9D1D9"},{token:"storage.modifier.import",foreground:"#C9D1D9"},{token:"storage.type.java",foreground:"#C9D1D9"},{token:"string",foreground:"#A5D6FF"},{token:"punctuation.definition.string",foreground:"#A5D6FF"},{token:"string punctuation.section.embedded source",foreground:"#A5D6FF"},{token:"support",foreground:"#79C0FF"},{token:"meta.property-name",foreground:"#79C0FF"},{token:"variable",foreground:"#FFA657"},{token:"variable.other",foreground:"#C9D1D9"},{token:"invalid.broken",foreground:"#FFA198",fontStyle:"italic"},{token:"invalid.deprecated",foreground:"#FFA198",fontStyle:"italic"},{token:"invalid.illegal",foreground:"#FFA198",fontStyle:"italic"},{token:"invalid.unimplemented",foreground:"#FFA198",fontStyle:"italic"},{token:"carriage-return",foreground:"#0D1117",background:"#FF7B72",fontStyle:"italic underline"},{token:"message.error",foreground:"#FFA198"},{token:"string source",foreground:"#C9D1D9"},{token:"string variable",foreground:"#79C0FF"},{token:"source.regexp",foreground:"#A5D6FF"},{token:"string.regexp",foreground:"#A5D6FF"},{token:"string.regexp.character-class",foreground:"#A5D6FF"},{token:"string.regexp constant.character.escape",foreground:"#A5D6FF"},{token:"string.regexp source.ruby.embedded",foreground:"#A5D6FF"},{token:"string.regexp string.regexp.arbitrary-repitition",foreground:"#A5D6FF"},{token:"string.regexp constant.character.escape",foreground:"#7EE787",fontStyle:"bold"},{token:"support.constant",foreground:"#79C0FF"},{token:"support.variable",foreground:"#79C0FF"},{token:"meta.module-reference",foreground:"#79C0FF"},{token:"punctuation.definition.list.begin.markdown",foreground:"#FFA657"},{token:"markup.heading",foreground:"#79C0FF",fontStyle:"bold"},{token:"markup.heading entity.name",foreground:"#79C0FF",fontStyle:"bold"},{token:"markup.quote",foreground:"#7EE787"},{token:"markup.italic",foreground:"#C9D1D9",fontStyle:"italic"},{token:"markup.bold",foreground:"#C9D1D9",fontStyle:"bold"},{token:"markup.raw",foreground:"#79C0FF"},{token:"markup.deleted",foreground:"#FFA198",background:"#490202"},{token:"meta.diff.header.from-file",foreground:"#FFA198",background:"#490202"},{token:"punctuation.definition.deleted",foreground:"#FFA198",background:"#490202"},{token:"markup.inserted",foreground:"#7EE787",background:"#04260F"},{token:"meta.diff.header.to-file",foreground:"#7EE787",background:"#04260F"},{token:"punctuation.definition.inserted",foreground:"#7EE787",background:"#04260F"},{token:"markup.changed",foreground:"#FFA657",background:"#5A1E02"},{token:"punctuation.definition.changed",foreground:"#FFA657",background:"#5A1E02"},{token:"markup.ignored",foreground:"#161B22",background:"#79C0FF"},{token:"markup.untracked",foreground:"#161B22",background:"#79C0FF"},{token:"meta.diff.range",foreground:"#D2A8FF",fontStyle:"bold"},{token:"meta.diff.header",foreground:"#79C0FF"},{token:"meta.separator",foreground:"#79C0FF",fontStyle:"bold"},{token:"meta.output",foreground:"#79C0FF"},{token:"brackethighlighter.tag",foreground:"#8B949E"},{token:"brackethighlighter.curly",foreground:"#8B949E"},{token:"brackethighlighter.round",foreground:"#8B949E"},{token:"brackethighlighter.square",foreground:"#8B949E"},{token:"brackethighlighter.angle",foreground:"#8B949E"},{token:"brackethighlighter.quote",foreground:"#8B949E"},{token:"brackethighlighter.unmatched",foreground:"#FFA198"},{token:"constant.other.reference.link",foreground:"#A5D6FF",fontStyle:"underline"},{token:"string.other.link",foreground:"#A5D6FF",fontStyle:"underline"},{token:"token.info-token",foreground:"#6796E6"},{token:"token.warn-token",foreground:"#CD9731"},{token:"token.error-token",foreground:"#F44747"},{token:"token.debug-token",foreground:"#B267E6"}],colors:{"activityBar.activeBorder":"#f78166","activityBar.background":"#0d1117","activityBar.border":"#30363d","activityBar.foreground":"#c9d1d9","activityBar.inactiveForeground":"#8b949e","activityBarBadge.background":"#1f6feb","activityBarBadge.foreground":"#f0f6fc","badge.background":"#1f6feb","badge.foreground":"#f0f6fc","breadcrumb.activeSelectionForeground":"#8b949e","breadcrumb.focusForeground":"#c9d1d9","breadcrumb.foreground":"#8b949e","breadcrumbPicker.background":"#161b22","button.background":"#238636","button.foreground":"#ffffff","button.hoverBackground":"#2ea043","button.secondaryBackground":"#282e33","button.secondaryForeground":"#c9d1d9","button.secondaryHoverBackground":"#30363d","checkbox.background":"#161b22","checkbox.border":"#30363d","debugToolBar.background":"#161b22",descriptionForeground:"#8b949e","diffEditor.insertedTextBackground":"#2ea04326","diffEditor.removedTextBackground":"#f8514926","dropdown.background":"#161b22","dropdown.border":"#30363d","dropdown.foreground":"#c9d1d9","dropdown.listBackground":"#161b22","editor.background":"#0d1117","editor.findMatchBackground":"#ffd33d44","editor.findMatchHighlightBackground":"#ffd33d22","editor.focusedStackFrameHighlightBackground":"#3fb95025","editor.foldBackground":"#6e76811a","editor.foreground":"#c9d1d9","editor.inactiveSelectionBackground":"#3392ff22","editor.lineHighlightBackground":"#6e76811a","editor.linkedEditingBackground":"#3392ff22","editor.selectionBackground":"#3392ff44","editor.selectionHighlightBackground":"#17e5e633","editor.selectionHighlightBorder":"#17e5e600","editor.stackFrameHighlightBackground":"#d2992225","editor.wordHighlightBackground":"#17e5e600","editor.wordHighlightBorder":"#17e5e699","editor.wordHighlightStrongBackground":"#17e5e600","editor.wordHighlightStrongBorder":"#17e5e666","editorBracketMatch.background":"#17e5e650","editorBracketMatch.border":"#17e5e600","editorCursor.foreground":"#58a6ff","editorGroup.border":"#30363d","editorGroupHeader.tabsBackground":"#010409","editorGroupHeader.tabsBorder":"#30363d","editorGutter.addedBackground":"#2ea04366","editorGutter.deletedBackground":"#f8514966","editorGutter.modifiedBackground":"#bb800966","editorIndentGuide.activeBackground":"#30363d","editorIndentGuide.background":"#21262d","editorLineNumber.activeForeground":"#c9d1d9","editorLineNumber.foreground":"#8b949e","editorOverviewRuler.border":"#010409","editorWhitespace.foreground":"#484f58","editorWidget.background":"#161b22",errorForeground:"#f85149",focusBorder:"#1f6feb",foreground:"#c9d1d9","gitDecoration.addedResourceForeground":"#3fb950","gitDecoration.conflictingResourceForeground":"#db6d28","gitDecoration.deletedResourceForeground":"#f85149","gitDecoration.ignoredResourceForeground":"#484f58","gitDecoration.modifiedResourceForeground":"#d29922","gitDecoration.submoduleResourceForeground":"#8b949e","gitDecoration.untrackedResourceForeground":"#3fb950","input.background":"#0d1117","input.border":"#30363d","input.foreground":"#c9d1d9","input.placeholderForeground":"#484f58","list.activeSelectionBackground":"#6e768166","list.activeSelectionForeground":"#c9d1d9","list.focusBackground":"#388bfd26","list.focusForeground":"#c9d1d9","list.highlightForeground":"#58a6ff","list.hoverBackground":"#6e76811a","list.hoverForeground":"#c9d1d9","list.inactiveFocusBackground":"#388bfd26","list.inactiveSelectionBackground":"#6e768166","list.inactiveSelectionForeground":"#c9d1d9","notificationCenterHeader.background":"#161b22","notificationCenterHeader.foreground":"#8b949e","notifications.background":"#161b22","notifications.border":"#30363d","notifications.foreground":"#c9d1d9","notificationsErrorIcon.foreground":"#f85149","notificationsInfoIcon.foreground":"#58a6ff","notificationsWarningIcon.foreground":"#d29922","panel.background":"#010409","panel.border":"#30363d","panelInput.border":"#30363d","panelTitle.activeBorder":"#f78166","panelTitle.activeForeground":"#c9d1d9","panelTitle.inactiveForeground":"#8b949e","peekViewEditor.background":"#0d111788","peekViewEditor.matchHighlightBackground":"#ffd33d33","peekViewResult.background":"#0d1117","peekViewResult.matchHighlightBackground":"#ffd33d33","pickerGroup.border":"#30363d","pickerGroup.foreground":"#8b949e","progressBar.background":"#1f6feb","quickInput.background":"#161b22","quickInput.foreground":"#c9d1d9","scrollbar.shadow":"#00000088","scrollbarSlider.activeBackground":"#484f5888","scrollbarSlider.background":"#484f5833","scrollbarSlider.hoverBackground":"#484f5844","settings.headerForeground":"#8b949e","settings.modifiedItemIndicator":"#bb800966","sideBar.background":"#010409","sideBar.border":"#30363d","sideBar.foreground":"#c9d1d9","sideBarSectionHeader.background":"#010409","sideBarSectionHeader.border":"#30363d","sideBarSectionHeader.foreground":"#c9d1d9","sideBarTitle.foreground":"#c9d1d9","statusBar.background":"#0d1117","statusBar.border":"#30363d","statusBar.debuggingBackground":"#da3633","statusBar.debuggingForeground":"#f0f6fc","statusBar.foreground":"#8b949e","statusBar.noFolderBackground":"#0d1117","statusBarItem.prominentBackground":"#161b22","tab.activeBackground":"#0d1117","tab.activeBorder":"#0d1117","tab.activeBorderTop":"#f78166","tab.activeForeground":"#c9d1d9","tab.border":"#30363d","tab.hoverBackground":"#0d1117","tab.inactiveBackground":"#010409","tab.inactiveForeground":"#8b949e","tab.unfocusedActiveBorder":"#0d1117","tab.unfocusedActiveBorderTop":"#30363d","tab.unfocusedHoverBackground":"#6e76811a","terminal.ansiBlack":"#484f58","terminal.ansiBlue":"#58a6ff","terminal.ansiBrightBlack":"#6e7681","terminal.ansiBrightBlue":"#79c0ff","terminal.ansiBrightCyan":"#56d4dd","terminal.ansiBrightGreen":"#56d364","terminal.ansiBrightMagenta":"#d2a8ff","terminal.ansiBrightRed":"#ffa198","terminal.ansiBrightWhite":"#f0f6fc","terminal.ansiBrightYellow":"#e3b341","terminal.ansiCyan":"#39c5cf","terminal.ansiGreen":"#3fb950","terminal.ansiMagenta":"#bc8cff","terminal.ansiRed":"#ff7b72","terminal.ansiWhite":"#b1bac4","terminal.ansiYellow":"#d29922","terminal.foreground":"#8b949e","textBlockQuote.background":"#010409","textBlockQuote.border":"#30363d","textCodeBlock.background":"#6e768166","textLink.activeForeground":"#58a6ff","textLink.foreground":"#58a6ff","textPreformat.foreground":"#8b949e","textSeparator.foreground":"#21262d","titleBar.activeBackground":"#0d1117","titleBar.activeForeground":"#8b949e","titleBar.border":"#30363d","titleBar.inactiveBackground":"#010409","titleBar.inactiveForeground":"#8b949e","tree.indentGuidesStroke":"#21262d","welcomePage.buttonBackground":"#21262d","welcomePage.buttonHoverBackground":"#30363d"}};var Ut="./js/ts-worker-factory.worker.js";var Ve="./js/typescript.worker.js";var Gt="./js/json.worker.js";var Jt="./js/editor.worker.js";var Xt=`type Platform = 'browser' | 'node' | 'neutral'
type Format = 'iife' | 'cjs' | 'esm'
type Loader = 'base64' | 'binary' | 'copy' | 'css' | 'dataurl' | 'default' | 'empty' | 'file' | 'js' | 'json' | 'jsx' | 'local-css' | 'text' | 'ts' | 'tsx'
type LogLevel = 'verbose' | 'debug' | 'info' | 'warning' | 'error' | 'silent'
type Charset = 'ascii' | 'utf8'
type Drop = 'console' | 'debugger'
type AbsPaths = 'code' | 'log' | 'metafile'

interface CommonOptions {
  /** Documentation: https://esbuild.github.io/api/#sourcemap */
  sourcemap?: boolean | 'linked' | 'inline' | 'external' | 'both'
  /** Documentation: https://esbuild.github.io/api/#legal-comments */
  legalComments?: 'none' | 'inline' | 'eof' | 'linked' | 'external'
  /** Documentation: https://esbuild.github.io/api/#source-root */
  sourceRoot?: string
  /** Documentation: https://esbuild.github.io/api/#sources-content */
  sourcesContent?: boolean

  /** Documentation: https://esbuild.github.io/api/#format */
  format?: Format
  /** Documentation: https://esbuild.github.io/api/#global-name */
  globalName?: string
  /** Documentation: https://esbuild.github.io/api/#target */
  target?: string | string[]
  /** Documentation: https://esbuild.github.io/api/#supported */
  supported?: Record<string, boolean>
  /** Documentation: https://esbuild.github.io/api/#platform */
  platform?: Platform

  /** Documentation: https://esbuild.github.io/api/#mangle-props */
  mangleProps?: RegExp
  /** Documentation: https://esbuild.github.io/api/#mangle-props */
  reserveProps?: RegExp
  /** Documentation: https://esbuild.github.io/api/#mangle-props */
  mangleQuoted?: boolean
  /** Documentation: https://esbuild.github.io/api/#mangle-props */
  mangleCache?: Record<string, string | false>
  /** Documentation: https://esbuild.github.io/api/#drop */
  drop?: Drop[]
  /** Documentation: https://esbuild.github.io/api/#drop-labels */
  dropLabels?: string[]
  /** Documentation: https://esbuild.github.io/api/#minify */
  minify?: boolean
  /** Documentation: https://esbuild.github.io/api/#minify */
  minifyWhitespace?: boolean
  /** Documentation: https://esbuild.github.io/api/#minify */
  minifyIdentifiers?: boolean
  /** Documentation: https://esbuild.github.io/api/#minify */
  minifySyntax?: boolean
  /** Documentation: https://esbuild.github.io/api/#line-limit */
  lineLimit?: number
  /** Documentation: https://esbuild.github.io/api/#charset */
  charset?: Charset
  /** Documentation: https://esbuild.github.io/api/#tree-shaking */
  treeShaking?: boolean
  /** Documentation: https://esbuild.github.io/api/#ignore-annotations */
  ignoreAnnotations?: boolean

  /** Documentation: https://esbuild.github.io/api/#jsx */
  jsx?: 'transform' | 'preserve' | 'automatic'
  /** Documentation: https://esbuild.github.io/api/#jsx-factory */
  jsxFactory?: string
  /** Documentation: https://esbuild.github.io/api/#jsx-fragment */
  jsxFragment?: string
  /** Documentation: https://esbuild.github.io/api/#jsx-import-source */
  jsxImportSource?: string
  /** Documentation: https://esbuild.github.io/api/#jsx-development */
  jsxDev?: boolean
  /** Documentation: https://esbuild.github.io/api/#jsx-side-effects */
  jsxSideEffects?: boolean

  /** Documentation: https://esbuild.github.io/api/#define */
  define?: { [key: string]: string }
  /** Documentation: https://esbuild.github.io/api/#pure */
  pure?: string[]
  /** Documentation: https://esbuild.github.io/api/#keep-names */
  keepNames?: boolean

  /** Documentation: https://esbuild.github.io/api/#abs-paths */
  absPaths?: AbsPaths[]
  /** Documentation: https://esbuild.github.io/api/#color */
  color?: boolean
  /** Documentation: https://esbuild.github.io/api/#log-level */
  logLevel?: LogLevel
  /** Documentation: https://esbuild.github.io/api/#log-limit */
  logLimit?: number
  /** Documentation: https://esbuild.github.io/api/#log-override */
  logOverride?: Record<string, LogLevel>

  /** Documentation: https://esbuild.github.io/api/#tsconfig-raw */
  tsconfigRaw?: string | TsconfigRaw
}

interface TsconfigRaw {
  compilerOptions?: {
    alwaysStrict?: boolean
    baseUrl?: string
    experimentalDecorators?: boolean
    importsNotUsedAsValues?: 'remove' | 'preserve' | 'error'
    jsx?: 'preserve' | 'react-native' | 'react' | 'react-jsx' | 'react-jsxdev'
    jsxFactory?: string
    jsxFragmentFactory?: string
    jsxImportSource?: string
    paths?: Record<string, string[]>
    preserveValueImports?: boolean
    strict?: boolean
    target?: string
    useDefineForClassFields?: boolean
    verbatimModuleSyntax?: boolean
  }
}

interface BuildOptions extends CommonOptions {
  /** Documentation: https://esbuild.github.io/api/#bundle */
  bundle?: boolean
  /** Documentation: https://esbuild.github.io/api/#splitting */
  splitting?: boolean
  /** Documentation: https://esbuild.github.io/api/#preserve-symlinks */
  preserveSymlinks?: boolean
  /** Documentation: https://esbuild.github.io/api/#outfile */
  outfile?: string
  /** Documentation: https://esbuild.github.io/api/#metafile */
  metafile?: boolean
  /** Documentation: https://esbuild.github.io/api/#outdir */
  outdir?: string
  /** Documentation: https://esbuild.github.io/api/#outbase */
  outbase?: string
  /** Documentation: https://esbuild.github.io/api/#external */
  external?: string[]
  /** Documentation: https://esbuild.github.io/api/#packages */
  packages?: 'bundle' | 'external'
  /** Documentation: https://esbuild.github.io/api/#alias */
  alias?: Record<string, string>
  /** Documentation: https://esbuild.github.io/api/#loader */
  loader?: { [ext: string]: Loader }
  /** Documentation: https://esbuild.github.io/api/#resolve-extensions */
  resolveExtensions?: string[]
  /** Documentation: https://esbuild.github.io/api/#main-fields */
  mainFields?: string[]
  /** Documentation: https://esbuild.github.io/api/#conditions */
  conditions?: string[]
  /** Documentation: https://esbuild.github.io/api/#write */
  write?: boolean
  /** Documentation: https://esbuild.github.io/api/#allow-overwrite */
  allowOverwrite?: boolean
  /** Documentation: https://esbuild.github.io/api/#tsconfig */
  tsconfig?: string
  /** Documentation: https://esbuild.github.io/api/#out-extension */
  outExtension?: { [ext: string]: string }
  /** Documentation: https://esbuild.github.io/api/#public-path */
  publicPath?: string
  /** Documentation: https://esbuild.github.io/api/#entry-names */
  entryNames?: string
  /** Documentation: https://esbuild.github.io/api/#chunk-names */
  chunkNames?: string
  /** Documentation: https://esbuild.github.io/api/#asset-names */
  assetNames?: string
  /** Documentation: https://esbuild.github.io/api/#inject */
  inject?: string[]
  /** Documentation: https://esbuild.github.io/api/#banner */
  banner?: { [type: string]: string }
  /** Documentation: https://esbuild.github.io/api/#footer */
  footer?: { [type: string]: string }
  /** Documentation: https://esbuild.github.io/api/#entry-points */
  entryPoints?: (string | { in: string, out: string })[] | Record<string, string>
  /** Documentation: https://esbuild.github.io/api/#stdin */
  stdin?: StdinOptions
  /** Documentation: https://esbuild.github.io/plugins/ */
  plugins?: Plugin[]
  /** Documentation: https://esbuild.github.io/api/#working-directory */
  absWorkingDir?: string
  /** Documentation: https://esbuild.github.io/api/#node-paths */
  nodePaths?: string[]; // The "NODE_PATH" variable from Node.js
}

interface StdinOptions {
  contents: string | Uint8Array
  resolveDir?: string
  sourcefile?: string
  loader?: Loader
}

interface Message {
  id: string
  pluginName: string
  text: string
  location: Location | null
  notes: Note[]

  /**
   * Optional user-specified data that is passed through unmodified. You can
   * use this to stash the original error, for example.
   */
  detail: any
}

interface Note {
  text: string
  location: Location | null
}

interface Location {
  file: string
  namespace: string
  /** 1-based */
  line: number
  /** 0-based, in bytes */
  column: number
  /** in bytes */
  length: number
  lineText: string
  suggestion: string
}

interface OutputFile {
  path: string
  contents: Uint8Array
  hash: string
  /** "contents" as text (changes automatically with "contents") */
  readonly text: string
}

interface BuildResult<ProvidedOptions extends BuildOptions = BuildOptions> {
  errors: Message[]
  warnings: Message[]
  /** Only when "write: false" */
  outputFiles: OutputFile[] | (ProvidedOptions['write'] extends false ? never : undefined)
  /** Only when "metafile: true" */
  metafile: Metafile | (ProvidedOptions['metafile'] extends true ? never : undefined)
  /** Only when "mangleCache" is present */
  mangleCache: Record<string, string | false> | (ProvidedOptions['mangleCache'] extends Object ? never : undefined)
}

/** Documentation: https://esbuild.github.io/api/#serve-arguments */
interface ServeOptions {
  port?: number
  host?: string
  servedir?: string
  keyfile?: string
  certfile?: string
  fallback?: string
  cors?: CORSOptions
  onRequest?: (args: ServeOnRequestArgs) => void
}

/** Documentation: https://esbuild.github.io/api/#cors */
interface CORSOptions {
  origin?: string | string[]
}

interface ServeOnRequestArgs {
  remoteAddress: string
  method: string
  path: string
  status: number
  /** The time to generate the response, not to send it */
  timeInMS: number
}

/** Documentation: https://esbuild.github.io/api/#serve-return-values */
interface ServeResult {
  port: number
  hosts: string[]
}

interface TransformOptions extends CommonOptions {
  /** Documentation: https://esbuild.github.io/api/#sourcefile */
  sourcefile?: string
  /** Documentation: https://esbuild.github.io/api/#loader */
  loader?: Loader
  /** Documentation: https://esbuild.github.io/api/#banner */
  banner?: string
  /** Documentation: https://esbuild.github.io/api/#footer */
  footer?: string
}

interface TransformResult<ProvidedOptions extends TransformOptions = TransformOptions> {
  code: string
  map: string
  warnings: Message[]
  /** Only when "mangleCache" is present */
  mangleCache: Record<string, string | false> | (ProvidedOptions['mangleCache'] extends Object ? never : undefined)
  /** Only when "legalComments" is "external" */
  legalComments: string | (ProvidedOptions['legalComments'] extends 'external' ? never : undefined)
}

interface Plugin {
  name: string
  setup: (build: PluginBuild) => (void | Promise<void>)
}

interface PluginBuild {
  /** Documentation: https://esbuild.github.io/plugins/#build-options */
  initialOptions: BuildOptions

  /** Documentation: https://esbuild.github.io/plugins/#resolve */
  resolve(path: string, options?: ResolveOptions): Promise<ResolveResult>

  /** Documentation: https://esbuild.github.io/plugins/#on-start */
  onStart(callback: () =>
    (OnStartResult | null | void | Promise<OnStartResult | null | void>)): void

  /** Documentation: https://esbuild.github.io/plugins/#on-end */
  onEnd(callback: (result: BuildResult) =>
    (OnEndResult | null | void | Promise<OnEndResult | null | void>)): void

  /** Documentation: https://esbuild.github.io/plugins/#on-resolve */
  onResolve(options: OnResolveOptions, callback: (args: OnResolveArgs) =>
    (OnResolveResult | null | undefined | Promise<OnResolveResult | null | undefined>)): void

  /** Documentation: https://esbuild.github.io/plugins/#on-load */
  onLoad(options: OnLoadOptions, callback: (args: OnLoadArgs) =>
    (OnLoadResult | null | undefined | Promise<OnLoadResult | null | undefined>)): void

  /** Documentation: https://esbuild.github.io/plugins/#on-dispose */
  onDispose(callback: () => void): void

  // This is a full copy of the esbuild library in case you need it
  esbuild: {
    context: typeof context,
    build: typeof build,
    buildSync: typeof buildSync,
    transform: typeof transform,
    transformSync: typeof transformSync,
    formatMessages: typeof formatMessages,
    formatMessagesSync: typeof formatMessagesSync,
    analyzeMetafile: typeof analyzeMetafile,
    analyzeMetafileSync: typeof analyzeMetafileSync,
    initialize: typeof initialize,
    version: typeof version,
  }
}

/** Documentation: https://esbuild.github.io/plugins/#resolve-options */
interface ResolveOptions {
  pluginName?: string
  importer?: string
  namespace?: string
  resolveDir?: string
  kind?: ImportKind
  pluginData?: any
  with?: Record<string, string>
}

/** Documentation: https://esbuild.github.io/plugins/#resolve-results */
interface ResolveResult {
  errors: Message[]
  warnings: Message[]

  path: string
  external: boolean
  sideEffects: boolean
  namespace: string
  suffix: string
  pluginData: any
}

interface OnStartResult {
  errors?: PartialMessage[]
  warnings?: PartialMessage[]
}

interface OnEndResult {
  errors?: PartialMessage[]
  warnings?: PartialMessage[]
}

/** Documentation: https://esbuild.github.io/plugins/#on-resolve-options */
interface OnResolveOptions {
  filter: RegExp
  namespace?: string
}

/** Documentation: https://esbuild.github.io/plugins/#on-resolve-arguments */
interface OnResolveArgs {
  path: string
  importer: string
  namespace: string
  resolveDir: string
  kind: ImportKind
  pluginData: any
  with: Record<string, string>
}

type ImportKind =
  | 'entry-point'

  // JS
  | 'import-statement'
  | 'require-call'
  | 'dynamic-import'
  | 'require-resolve'

  // CSS
  | 'import-rule'
  | 'composes-from'
  | 'url-token'

/** Documentation: https://esbuild.github.io/plugins/#on-resolve-results */
interface OnResolveResult {
  pluginName?: string

  errors?: PartialMessage[]
  warnings?: PartialMessage[]

  path?: string
  external?: boolean
  sideEffects?: boolean
  namespace?: string
  suffix?: string
  pluginData?: any

  watchFiles?: string[]
  watchDirs?: string[]
}

/** Documentation: https://esbuild.github.io/plugins/#on-load-options */
interface OnLoadOptions {
  filter: RegExp
  namespace?: string
}

/** Documentation: https://esbuild.github.io/plugins/#on-load-arguments */
interface OnLoadArgs {
  path: string
  namespace: string
  suffix: string
  pluginData: any
  with: Record<string, string>
}

/** Documentation: https://esbuild.github.io/plugins/#on-load-results */
interface OnLoadResult {
  pluginName?: string

  errors?: PartialMessage[]
  warnings?: PartialMessage[]

  contents?: string | Uint8Array
  resolveDir?: string
  loader?: Loader
  pluginData?: any

  watchFiles?: string[]
  watchDirs?: string[]
}

interface PartialMessage {
  id?: string
  pluginName?: string
  text?: string
  location?: Partial<Location> | null
  notes?: PartialNote[]
  detail?: any
}

interface PartialNote {
  text?: string
  location?: Partial<Location> | null
}

/** Documentation: https://esbuild.github.io/api/#metafile */
interface Metafile {
  inputs: {
    [path: string]: {
      bytes: number
      imports: {
        path: string
        kind: ImportKind
        external?: boolean
        original?: string
        with?: Record<string, string>
      }[]
      format?: 'cjs' | 'esm'
      with?: Record<string, string>
    }
  }
  outputs: {
    [path: string]: {
      bytes: number
      inputs: {
        [path: string]: {
          bytesInOutput: number
        }
      }
      imports: {
        path: string
        kind: ImportKind | 'file-loader'
        external?: boolean
      }[]
      exports: string[]
      entryPoint?: string
      cssBundle?: string
    }
  }
}

interface FormatMessagesOptions {
  kind: 'error' | 'warning'
  color?: boolean
  terminalWidth?: number
}

interface AnalyzeMetafileOptions {
  color?: boolean
  verbose?: boolean
}

/** Documentation: https://esbuild.github.io/api/#watch-arguments */
interface WatchOptions {
  delay?: number // In milliseconds
}

interface BuildContext<ProvidedOptions extends BuildOptions = BuildOptions> {
  /** Documentation: https://esbuild.github.io/api/#rebuild */
  rebuild(): Promise<BuildResult<ProvidedOptions>>

  /** Documentation: https://esbuild.github.io/api/#watch */
  watch(options?: WatchOptions): Promise<void>

  /** Documentation: https://esbuild.github.io/api/#serve */
  serve(options?: ServeOptions): Promise<ServeResult>

  cancel(): Promise<void>
  dispose(): Promise<void>
}

// This is a TypeScript type-level function which replaces any keys in "In"
// that aren't in "Out" with "never". We use this to reject properties with
// typos in object literals. See: https://stackoverflow.com/questions/49580725
type SameShape<Out, In extends Out> = In & { [Key in Exclude<keyof In, keyof Out>]: never }

/**
 * This function invokes the "esbuild" command-line tool for you. It returns a
 * promise that either resolves with a "BuildResult" object or rejects with a
 * "BuildFailure" object.
 *
 * - Works in node: yes
 * - Works in browser: yes
 *
 * Documentation: https://esbuild.github.io/api/#build
 */
declare function build<T extends BuildOptions>(options: SameShape<BuildOptions, T>): Promise<BuildResult<T>>

/**
 * This is the advanced long-running form of "build" that supports additional
 * features such as watch mode and a local development server.
 *
 * - Works in node: yes
 * - Works in browser: no
 *
 * Documentation: https://esbuild.github.io/api/#build
 */
declare function context<T extends BuildOptions>(options: SameShape<BuildOptions, T>): Promise<BuildContext<T>>

/**
 * This function transforms a single JavaScript file. It can be used to minify
 * JavaScript, convert TypeScript/JSX to JavaScript, or convert newer JavaScript
 * to older JavaScript. It returns a promise that is either resolved with a
 * "TransformResult" object or rejected with a "TransformFailure" object.
 *
 * - Works in node: yes
 * - Works in browser: yes
 *
 * Documentation: https://esbuild.github.io/api/#transform
 */
declare function transform<T extends TransformOptions>(input: string | Uint8Array, options?: SameShape<TransformOptions, T>): Promise<TransformResult<T>>

/**
 * Converts log messages to formatted message strings suitable for printing in
 * the terminal. This allows you to reuse the built-in behavior of esbuild's
 * log message formatter. This is a batch-oriented API for efficiency.
 *
 * - Works in node: yes
 * - Works in browser: yes
 */
declare function formatMessages(messages: PartialMessage[], options: FormatMessagesOptions): Promise<string[]>

/**
 * Pretty-prints an analysis of the metafile JSON to a string. This is just for
 * convenience to be able to match esbuild's pretty-printing exactly. If you want
 * to customize it, you can just inspect the data in the metafile yourself.
 *
 * - Works in node: yes
 * - Works in browser: yes
 *
 * Documentation: https://esbuild.github.io/api/#analyze
 */
declare function analyzeMetafile(metafile: Metafile | string, options?: AnalyzeMetafileOptions): Promise<string>

/**
 * A synchronous version of "build".
 *
 * - Works in node: yes
 * - Works in browser: no
 *
 * Documentation: https://esbuild.github.io/api/#build
 */
declare function buildSync<T extends BuildOptions>(options: SameShape<BuildOptions, T>): BuildResult<T>

/**
 * A synchronous version of "transform".
 *
 * - Works in node: yes
 * - Works in browser: no
 *
 * Documentation: https://esbuild.github.io/api/#transform
 */
declare function transformSync<T extends TransformOptions>(input: string | Uint8Array, options?: SameShape<TransformOptions, T>): TransformResult<T>

/**
 * A synchronous version of "formatMessages".
 *
 * - Works in node: yes
 * - Works in browser: no
 */
declare function formatMessagesSync(messages: PartialMessage[], options: FormatMessagesOptions): string[]

/**
 * A synchronous version of "analyzeMetafile".
 *
 * - Works in node: yes
 * - Works in browser: no
 *
 * Documentation: https://esbuild.github.io/api/#analyze
 */
declare function analyzeMetafileSync(metafile: Metafile | string, options?: AnalyzeMetafileOptions): string

/**
 * This configures the browser-based version of esbuild. It is necessary to
 * call this first and wait for the returned promise to be resolved before
 * making other API calls when using esbuild in the browser.
 *
 * - Works in node: yes
 * - Works in browser: yes ("options" is required)
 *
 * Documentation: https://esbuild.github.io/api/#browser
 */
declare function initialize(options: InitializeOptions): Promise<void>

interface InitializeOptions {
  /**
   * The URL of the "esbuild.wasm" file. This must be provided when running
   * esbuild in the browser.
   */
  wasmURL?: string | URL

  /**
   * The result of calling "new WebAssembly.Module(buffer)" where "buffer"
   * is a typed array or ArrayBuffer containing the binary code of the
   * "esbuild.wasm" file.
   *
   * You can use this as an alternative to "wasmURL" for environments where it's
   * not possible to download the WebAssembly module.
   */
  wasmModule?: WebAssembly.Module

  /**
   * By default esbuild runs the WebAssembly-based browser API in a web worker
   * to avoid blocking the UI thread. This can be disabled by setting "worker"
   * to false.
   */
  worker?: boolean
}

declare let version: string

// Note: These declarations exist to avoid type errors when you omit "dom" from
// "lib" in your "tsconfig.json" file. TypeScript confusingly declares the
// global "WebAssembly" type in "lib.dom.d.ts" even though it has nothing to do
// with the browser DOM and is present in many non-browser JavaScript runtimes
// (e.g. node and deno). Declaring it here allows esbuild's API to be used in
// these scenarios.
//
// There's an open issue about getting this problem corrected (although these
// declarations will need to remain even if this is fixed for backward
// compatibility with older TypeScript versions):
//
//   https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/826
//
declare global {
  namespace WebAssembly {
    interface Module {
    }
  }
  interface URL {
  }
}

type TemplateType = "sunburst" | "treemap" | "network";

// Note: These declarations exist to avoid type errors when you omit "dom" from
// "lib" in your "tsconfig.json" file. TypeScript confusingly declares the
// global "WebAssembly" type in "lib.dom.d.ts" even though it has nothing to do
// with the browser DOM and is present in many non-browser JavaScript runtimes
// (e.g. node and deno). Declaring it here allows esbuild's API to be used in
// these scenarios.
//
// There's an open issue about getting this problem corrected (although these
// declarations will need to remain even if this is fixed for backward
// compatibility with older TypeScript versions):
//
//   https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/826
//
declare global {
  namespace WebAssembly {
    interface Module {
    }
  }
  interface URL {
  }
}

type PackageJson = {
    name: string;
    version: string;
    description?: string;
    /** The main entry point for the package. Optional. */
    main?: string;
    /**
     * A field to define entry points for a package when it is loaded by a loader like Node.js or a bundler like Webpack. Optional.
     * It can be a string, an object or an array of strings/objects.
     * An example: \`exports: { ".": "./main.js", "./feature": "./feature/index.js" }\`
     * */
    exports?: string | string[] | {
        [key: string]: string;
    };
    /**
     * A property indicating whether the package includes assets that might have side effects when imported.
     * This can be either a boolean or an array of file paths.
     * This information is used by bundlers like webpack for tree shaking. Optional.
     */
    sideEffects?: boolean | string[];
    /**
     * An object containing script commands that are run by npm.
     * The keys are script names and the values are the scripts themselves. Optional.
     */
    scripts?: {
        [key: string]: string;
    };
    keywords?: string[];
    homepage?: string;
    bugs?: {
        url: string;
        email?: string;
    } | {
        url?: string;
        email: string;
    };
    license?: string;
    author?: string | {
        name: string;
        email?: string;
        url?: string;
    };
    contributors?: Array<string | {
        name: string;
        email?: string;
        url?: string;
    }>;
    files?: Array<string | {
        include: Array<string>;
        exclude: Array<string>;
    }>;
    dependencies?: {
        [packageName: string]: string;
    };
    devDependencies?: {
        [packageName: string]: string;
    };
    optionalDependencies?: {
        [packageName: string]: string;
    };
    peerDependencies?: {
        [packageName: string]: string;
    };
};

/** The compression algorithim to use, there are currently 4 options "gzip", "brotli", "zstd", and "lz4" */
type CompressionType = "gzip" | "brotli" | "lz4" | "zstd";
/**
* You can configure the quality of the compression using an object,
* e.g.
* \`\`\`ts
* {
*  ...
*  "compression": {
*    "type": "brotli",
*    "quality": 5
*  }
* }
* \`\`\`
*/
type CompressionOptions = {
    /** The compression algorithim to use, there are currently 4 options "gzip", "brotli", "zstd", and "lz4" */
    type: CompressionType;
    /** Compression quality ranging from 1 to 11 */
    quality: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
};
type BundleConfigOptions = {
    /** Enable using rollup for treeshaking. Only works while the \`esbuild.treeShaking\` option is true */
    /** esbuild config options https://esbuild.github.io/api/#build-api */
    esbuild?: BuildOptions;
    /** Polyfill Node Built-ins */
    polyfill?: boolean;
    /**
     * The package.json to use when trying to bundle files
     */
    "package.json"?: PackageJson;
    /**
     * Support TSX
     */
    "tsx"?: boolean;
    /** The default CDN to import packages from */
    cdn?: "https://unpkg.com" | "https://esm.run" | "https://esm.sh" | "https://esm.sh/jsr" | "https://cdn.skypack.dev" | "https://cdn.jsdelivr.net/npm" | "https://cdn.jsdelivr.net/gh" | "https://deno.land/x" | "https://raw.githubusercontent.com" | "unpkg" | "esm.run" | "esm.sh" | "esm" | "jsr" | "skypack" | "jsdelivr" | "jsdelivr.gh" | "github" | "deno" | (string & {});
    /** Aliases for replacing packages with different ones, e.g. replace "fs" with "memfs", so, it can work on the web, etc... */
    alias?: Record<string, string>;
    /**
     * The compression algorithim to use, there are currently 3 options "gzip", "brotli", and "lz4".
     * You can also configure the quality of the compression using an object,
     * e.g.
     * \`\`\`ts
     * {
     *  ...
     *  "compression": {
     *    "type": "brotli",
     *    "quality": 5
     *  }
     * }
     * \`\`\`
    */
    compression?: CompressionOptions | CompressionType;
    /**
     * Generates interactive zoomable charts displaing the size of output files.
     * It's a great way to determine what causes the bundle size to be so large.
     */
    analysis?: TemplateType | boolean;
};
declare const EasyDefaultConfig: BundleConfigOptions;
declare const DefaultConfig: BundleConfigOptions;

export { DefaultConfig, EasyDefaultConfig };
export type { BundleConfigOptions, CompressionOptions, CompressionType };
`;var $={major:Number.POSITIVE_INFINITY,minor:Number.POSITIVE_INFINITY,patch:Number.POSITIVE_INFINITY,prerelease:[],build:[]},V={major:0,minor:0,patch:0,prerelease:[],build:[]},Kt={major:Number.NEGATIVE_INFINITY,minor:Number.POSITIVE_INFINITY,patch:Number.POSITIVE_INFINITY,prerelease:[],build:[]},z={major:Number.NaN,minor:Number.NaN,patch:Number.NaN,prerelease:[],build:[]},Yt={operator:"",semver:z,min:V,max:$},Kr={operator:"<",semver:V,min:$,max:V},E=[],g=[],x=0,te=x++;g[te]="0|[1-9]\\d*";var $t=x++;g[$t]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var er=x++,We=g[te];g[er]=`(${We})\\.(${We})\\.(${We})`;var qe=x++;g[qe]="(?:"+g[te]+"|"+g[$t]+")";var Je=x++;g[Je]="(?:-("+g[qe]+"(?:\\."+g[qe]+")*))";var Ue=x++;g[Ue]="[0-9A-Za-z-]+";var Xe=x++;g[Xe]="(?:\\+("+g[Ue]+"(?:\\."+g[Ue]+")*))";var tr=x++,rr="v?"+g[er]+g[Je]+"?"+g[Xe]+"?";g[tr]="^"+rr+"$";var Ye=x++;g[Ye]="((?:<|>)?=?)";var pe=x++;g[pe]=g[te]+"|x|X|\\*";var W=x++;g[W]="[v=\\s]*("+g[pe]+")(?:\\.("+g[pe]+")(?:\\.("+g[pe]+")(?:"+g[Je]+")?"+g[Xe]+"?)?)?";var nr=x++;g[nr]="^"+g[Ye]+"\\s*"+g[W]+"$";var ir=x++;g[ir]="(?:~>?)";var or=x++;g[or]="^"+g[ir]+g[W]+"$";var sr=x++;g[sr]="(?:\\^)";var ar=x++;g[ar]="^"+g[sr]+g[W]+"$";var cr=x++;g[cr]="^"+g[Ye]+"\\s*("+rr+")$|^$";var lr=x++;g[lr]="^\\s*("+g[W]+")\\s+-\\s+("+g[W]+")\\s*$";var ur=x++;g[ur]="(<|>)?=?\\s*\\*";for(let e=0;e<x;e++)E[e]||(E[e]=new RegExp(g[e]));function ze(e){return e===Number.POSITIVE_INFINITY?"\u221E":e===Number.NEGATIVE_INFINITY?"\u29DE":e.toFixed(0)}function $r(e,t="full"){if(e===z)return"*";let r=ze(e.major),n=ze(e.minor),o=ze(e.patch),s=e.prerelease.join("."),c=e.build.join("."),a=`${r}.${n}.${o}`,p=[a,s].filter(y=>y).join("-"),h=[p,c].filter(y=>y).join("+");switch(t){case"full":return h;case"release":return p;case"primary":return a;case"build":return c;case"pre":return s;case"patch":return o;case"minor":return n;case"major":return r}}function H(e,t){let r=[...e],n=r.length;for(;--n>=0;)typeof r[n]=="number"&&(r[n]++,n=-2);return n===-1&&r.push(0),t&&(r[0]===t?isNaN(r[1])&&(r=[t,0]):r=[t,0]),r}function _(e,t){return t===void 0?e:t.split(".").filter(r=>r)}function Qt(e,t,r,n,o){let s={includePrerelease:!0},c,a;typeof r=="object"?(s=r,c=n,a=o):(c=r,a=n);let p=!1;typeof e=="string"&&(e=ee(e,s),p=!0);let h;switch(t){case"premajor":h={major:e.major+1,minor:0,patch:0,prerelease:H(e.prerelease,c),build:_(e.build,a)};break;case"preminor":h={major:e.major,minor:e.minor+1,patch:0,prerelease:H(e.prerelease,c),build:_(e.build,a)};break;case"prepatch":h={major:e.major,minor:e.minor,patch:e.patch+1,prerelease:H(e.prerelease,c),build:_(e.build,a)};break;case"prerelease":if(e.prerelease.length===0){h={major:e.major,minor:e.minor,patch:e.patch+1,prerelease:H(e.prerelease,c),build:_(e.build,a)};break}else{h={major:e.major,minor:e.minor,patch:e.patch,prerelease:H(e.prerelease,c),build:_(e.build,a)};break}case"major":if(e.minor!==0||e.patch!==0||e.prerelease.length===0){h={major:e.major+1,minor:0,patch:0,prerelease:[],build:_(e.build,a)};break}else{h={major:e.major,minor:0,patch:0,prerelease:[],build:_(e.build,a)};break}case"minor":if(e.patch!==0||e.prerelease.length===0){h={major:e.major,minor:e.minor+1,patch:0,prerelease:[],build:_(e.build,a)};break}else{h={major:e.major,minor:e.minor,patch:0,prerelease:[],build:_(e.build,a)};break}case"patch":if(e.prerelease.length===0){h={major:e.major,minor:e.minor,patch:e.patch+1,prerelease:[],build:_(e.build,a)};break}else{h={major:e.major,minor:e.minor,patch:e.patch,prerelease:[],build:_(e.build,a)};break}case"pre":h={major:e.major,minor:e.minor,patch:e.patch,prerelease:H(e.prerelease,c),build:_(e.build,a)};break;default:throw new Error(`invalid increment argument: ${t}`)}return p?$r(h):h}function en(e,t,r){return me(e,t,r)>0}function tn(e,t){if(e===z)return V;switch(t){case">":return e.prerelease.length>0?Qt(e,"pre"):Qt(e,"patch");case"!=":case"!==":case"<=":case"<":return en(e,V)?V:$;case">=":case"":case"=":case"==":case"===":return e}}function rn(e,t){if(e===z)return $;switch(t){case"!=":case"!==":case">":case">=":return $;case"":case"=":case"==":case"===":case"<=":return e;case"<":{let r=e.patch-1,n=r>=0?e.minor:e.minor-1,o=n>=0?e.major:e.major-1;return o<0?Kt:{major:o,minor:n>=0?n:Number.POSITIVE_INFINITY,patch:r>=0?r:Number.POSITIVE_INFINITY,prerelease:[],build:[]}}}}function nn(e,t,r){return me(e,t,r)<=0}function me(e,t,r){var c;let n=ee(e,r),o=ee(t,r),s=(c=r==null?void 0:r.includePrerelease)!=null?c:!0;return e===t?0:s?N(n.major,o.major)||N(n.minor,o.minor)||N(n.patch,o.patch)||xn(n.prerelease,o.prerelease)||yn(n.prerelease,o.prerelease):N(n.major,o.major)||N(n.minor,o.minor)||N(n.patch,o.patch)}function on(e,t){return e.sort((r,n)=>me(r,n,t))}function sn(e,t,r){return me(e,t,r)>=0}function an(e){var a;let t=E[cr],r=e.match(t);if(!r)return Kr;let n=(a=r[1])!=null?a:"",o=r[2]?ee(r[2]):z,s=tn(o,n),c=rn(o,n);return{operator:n,semver:o,min:s,max:c}}function cn(e,t){for(let r of t.ranges)if(r.every(n=>sn(e,n.min)&&nn(e,n.max)))return!0;return!1}function ln(e){if(e==null||Array.isArray(e)||typeof e!="object")return!1;if(e===Kt||e===z)return!0;let{major:t,minor:r,patch:n,build:o,prerelease:s}=e;return typeof t=="number"&&K(t)&&typeof r=="number"&&K(r)&&typeof n=="number"&&K(n)&&Array.isArray(s)&&Array.isArray(o)&&s.every(a=>typeof a=="string"||typeof a=="number")&&s.filter(a=>typeof a=="string").every(a=>Zt(a))&&s.filter(a=>typeof a=="number").every(a=>K(a))&&o.every(a=>typeof a=="string"&&Zt(a))}function un(e){return e.trim().split(/\s+/).map(t=>dn(t)).join(" ")}function dn(e){let t=E[or];return e.replace(t,(r,n,o,s,c)=>{let a;return w(n)?a="":w(o)?a=">="+n+".0.0 <"+(+n+1)+".0.0":w(s)?a=">="+n+"."+o+".0 <"+n+"."+(+o+1)+".0":c?a=">="+n+"."+o+"."+s+"-"+c+" <"+n+"."+(+o+1)+".0":a=">="+n+"."+o+"."+s+" <"+n+"."+(+o+1)+".0",a})}function pn(e){return e.trim().split(/\s+/).map(t=>mn(t)).join(" ")}function mn(e){let t=E[ar];return e.replace(t,(r,n,o,s,c)=>{let a;return w(n)?a="":w(o)?a=">="+n+".0.0 <"+(+n+1)+".0.0":w(s)?n==="0"?a=">="+n+"."+o+".0 <"+n+"."+(+o+1)+".0":a=">="+n+"."+o+".0 <"+(+n+1)+".0.0":c?n==="0"?o==="0"?a=">="+n+"."+o+"."+s+"-"+c+" <"+n+"."+o+"."+(+s+1):a=">="+n+"."+o+"."+s+"-"+c+" <"+n+"."+(+o+1)+".0":a=">="+n+"."+o+"."+s+"-"+c+" <"+(+n+1)+".0.0":n==="0"?o==="0"?a=">="+n+"."+o+"."+s+" <"+n+"."+o+"."+(+s+1):a=">="+n+"."+o+"."+s+" <"+n+"."+(+o+1)+".0":a=">="+n+"."+o+"."+s+" <"+(+n+1)+".0.0",a})}function gn(e){return e.split(/\s+/).map(t=>hn(t)).join(" ")}function hn(e){e=e.trim();let t=E[nr];return e.replace(t,(r,n,o,s,c,a)=>{let p=w(o),h=p||w(s),y=h||w(c),S=y;return n==="="&&S&&(n=""),p?n===">"||n==="<"?r="<0.0.0":r="*":n&&S?(h&&(s=0),c=0,n===">"?(n=">=",h?(o=+o+1,s=0,c=0):(s=+s+1,c=0)):n==="<="&&(n="<",h?o=+o+1:s=+s+1),r=n+o+"."+s+"."+c):h?r=">="+o+".0.0 <"+(+o+1)+".0.0":y&&(r=">="+o+"."+s+".0 <"+o+"."+(+s+1)+".0"),r})}function fn(e){return e.trim().replace(E[ur],"")}function bn(e,t,r,n,o,s,c,a,p,h,y,S,I){return w(r)?t="":w(n)?t=">="+r+".0.0":w(o)?t=">="+r+"."+n+".0":t=">="+t,w(p)?a="":w(h)?a="<"+(+p+1)+".0.0":w(y)?a="<"+p+"."+(+h+1)+".0":S?a="<="+p+"."+h+"."+y+"-"+S:a="<="+a,(t+" "+a).trim()}function w(e){return!e||e.toLowerCase()==="x"||e==="*"}function kn(e){return e=e.trim().replaceAll(/(?<=<|>|=) /g,""),e===""?{ranges:[[Yt]]}:{ranges:e.trim().split(/\s*\|\|\s*/).map(r=>{let n=E[lr];return r=r.replace(n,bn),r=pn(r),r=un(r),r=gn(r),r=fn(r),r===""?[Yt]:r.split(" ").filter(o=>o).map(o=>an(o))})}}function N(e,t){if(isNaN(e)||isNaN(t))throw new Error("Comparison against non-numbers");return e===t?0:e<t?-1:1}function xn(e,t){return e.length&&!t.length?-1:!e.length&&t.length?1:0}function yn(e,t){let r=0;do{let n=e[r],o=t[r];if(n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(typeof n=="string"&&typeof o=="number")return 1;if(typeof n=="number"&&typeof o=="string")return-1;if(n<o)return-1;if(n>o)return 1}while(++r);return 0}function K(e){return typeof e=="number"&&!Number.isNaN(e)&&(!Number.isFinite(e)||0<=e&&e<=Number.MAX_SAFE_INTEGER)}var Ge=256;function Zt(e){return typeof e=="string"&&e.length>0&&e.length<=Ge&&!!e.match(/[0-9A-Za-z-]+/)}function ee(e,t){var S,I,q,U,G;let r=(S=t==null?void 0:t.includePrerelease)!=null?S:!0;if(typeof e=="object"){if(ln(e))return e;throw new TypeError("not a valid SemVer object")}if(typeof e!="string")throw new TypeError("version must be a string");if(e.length>Ge)throw new TypeError(`version is longer than ${Ge} characters`);e=e.trim();let n=E[tr],o=e.match(n);if(!o)throw new TypeError(`Invalid Version: ${e}`);let s=parseInt(o[1]),c=parseInt(o[2]),a=parseInt(o[3]);if(s>Number.MAX_SAFE_INTEGER||s<0)throw new TypeError("Invalid major version");if(c>Number.MAX_SAFE_INTEGER||c<0)throw new TypeError("Invalid minor version");if(a>Number.MAX_SAFE_INTEGER||a<0)throw new TypeError("Invalid patch version");let p=new RegExp(`^${g[te]}$`),h=((I=o[4])!=null?I:"").split(".").filter(R=>R).map(R=>{let T=parseInt(R);return R.match(p)&&K(T)?T:R}),y=(G=(U=(q=o[5])==null?void 0:q.split("."))==null?void 0:U.filter(R=>R))!=null?G:[];return r?{major:s,minor:c,patch:a,prerelease:h,build:y}:{major:s,minor:c,patch:a,prerelease:[],build:[]}}function dr(e,t,r){let n=typeof t=="string"?kn(t):t,o=e.filter(c=>cn(typeof c=="string"?ee(c,r):c,n));return on(o).pop()}var ge=e=>{let t="https://registry.npmjs.com",{name:r,version:n,path:o}=ct(e),s=`${t}/-/v1/search?text=${encodeURIComponent(r)}&popularity=0.5&size=30`,c=`${t}/${r}/${n}`,a=`${t}/${r}`;return{searchURL:s,packageURL:a,packageVersionURL:c,version:n,name:r,path:o}};var Dn=async e=>{let{packageURL:t}=ge(e);try{return await(await xe(t,!1)).json()}catch(r){throw console.warn(r),r}},wn=async e=>{let{packageVersionURL:t}=ge(e);try{return await(await xe(t,!1)).json()}catch(r){throw console.warn(r),r}},vn=async e=>{try{let t=await Dn(e),r=Object.keys(t.versions),n=t["dist-tags"];return{versions:r,tags:n}}catch(t){throw console.warn(t),t}},_n=async e=>{try{let{version:t}=ge(e),r=await vn(e);if(r){let{versions:n,tags:o}=r;return t in o&&(t=o[t]),n.includes(t)?t:dr(n,t)}}catch(t){throw console.warn(t),t}},pr=async e=>{try{let{name:t}=ge(e),r=await _n(e);return await wn(`${t}@${r}`)}catch(t){throw console.warn(t),t}};var Cn=new Worker(Ve,{name:"ts-worker"}),Rn=new Intl.ListFormat("en",{style:"long",type:"conjunction"});window.MonacoEnvironment={getWorker:function(e,t){return t==="typescript"||t==="javascript"?Cn:t==="json"?new Worker(Gt,{name:"json-worker"}):(()=>{let r=new Worker(Jt,{name:"editor-worker"});return r==null||r.terminate(),r})()}};var Tn="// Output",Fn=["// Click Build for the bundled, minified and compressed package size",'export * from "spring-easing";','export { default } from "spring-easing";'].join(`
`),Ln=["// Configure Bundle",'import type { BundleConfigOptions } from "@bundlejs/core/config"',`export default (async function(): BundleConfigOptions {
 return ${JSON.stringify(at,null,"	")};
})()`].join(`
`);var sf=e=>{var y,S,I,q,U,G,R;let t=ut(e)||Fn,r=document.querySelector(".app#input #editor");r.textContent="",C.defineTheme("dark",qt),C.defineTheme("light",zt);let n=navigator&&/android/i.test(navigator.userAgent),o=C.createModel(t,"typescript",A.parse("file://input.tsx")),s=C.createModel(Tn,"typescript",A.parse("file://output.js")),c=C.createModel(Ln,"typescript",A.parse("file://config.tsx"));o.updateOptions({tabSize:2}),s.updateOptions({tabSize:2}),c.updateOptions({tabSize:2});let a={model:null,bracketPairColorization:{enabled:!0},parameterHints:{enabled:!0},quickSuggestions:{other:!n,comments:!n,strings:!n},acceptSuggestionOnCommitCharacter:!n,acceptSuggestionOnEnter:n?"off":"on",minimap:{enabled:!1},padding:{bottom:2.5,top:2.5},scrollbar:{useShadows:!1,vertical:"auto"},lightbulb:{enabled:C.ShowLightbulbIconMode.On},wordWrap:"on",roundedSelection:!0,scrollBeyondLastLine:!0,smoothScrolling:!0,theme:(()=>{let T=De();return T=="system"?ye():T})(),automaticLayout:!0,language:"typescript",lineNumbers:"on"},p=C.create(r,a);p.setModel(o),document.addEventListener("theme-change",()=>{let T=De();C.setTheme(T=="system"?ye():T)}),D.typescriptDefaults.setWorkerOptions({customWorkerPath:new URL(Ut,document.location.origin).toString()}),D.typescriptDefaults.setDiagnosticsOptions({...D.typescriptDefaults.getDiagnosticsOptions(),noSemanticValidation:!0,noSyntaxValidation:!1,noSuggestionDiagnostics:!1,diagnosticCodesToIgnore:[2354]}),D.typescriptDefaults.setCompilerOptions({moduleResolution:D.ModuleResolutionKind.NodeJs,target:D.ScriptTarget.Latest,module:D.ModuleKind.ES2015,noEmit:!0,lib:["es2021","dom","dom.iterable","webworker","esnext","node"],exclude:["node_modules"],resolveJsonModule:!0,allowNonTsExtensions:!0,esModuleInterop:!0,noResolve:!0,allowSyntheticDefaultImports:!0,isolatedModules:!0,experimentalDecorators:!0,emitDecoratorMetadata:!0,jsx:D.JsxEmit.ReactJSX}),(y=D)==null||y.typescriptDefaults.setInlayHintsOptions({includeInlayParameterNameHints:"literals",includeInlayParameterNameHintsWhenArgumentMatchesName:!0}),(I=(S=D)==null?void 0:S.typescriptDefaults)==null||I.setEagerModelSync(!0),(U=(q=D)==null?void 0:q.typescriptDefaults)==null||U.addExtraLib(`declare module 'https://*' {
	export * from "https://unpkg.com/*";
}`,"file://node_modules/@types/http/https.d.ts"),(R=(G=D)==null?void 0:G.typescriptDefaults)==null||R.addExtraLib(`declare module '@bundlejs/core/config' {
	${Xt}
}`,"file://node_modules/@types/config/config.d.ts");let h=/(?:(?:import|export|require)(?:.)*?(?:from\s+|\((?:\s+)?)["']([^"']+)["'])\)?/g;return l.registerHoverProvider("typescript",{provideHover(T,mr){var Ze;let he=T.getLineContent(mr.lineNumber);if(typeof he!="string"||he.length==0)return;let Qe=(Ze=Array.from(he.matchAll(h)))!=null?Ze:[];if(Qe.length<=0)return;let M=Qe.map(([,Ke])=>Ke)[0];if(!/^\.|http(s)?\:/.test(M))return/^(skypack|unpkg|jsdelivr|esm|esm\.run|esm\.sh)\:/.test(M)&&(M=M.replace(/^(skypack|unpkg|jsdelivr|esm|esm\.run|esm\.sh)\:/,"")),(async()=>{var ne,nt,it,ot;let{url:Ke,version:$e}=lt(M),re;try{re=await pr(M)}catch(X){console.warn(X);return}let{name:J,description:gr,version:O,date:Pn,repository:fe,bugs:be,homepage:hr,readme:et,maintainers:fr}=re!=null?re:{},tt=Array.from(fr,X=>{let st=X==null?void 0:X.name;return`[@${st}](https://www.npmjs.com/~${st})`}),br=tt.length>0?"by "+Rn.format(tt):"",rt=(ot=(it=(nt=(ne=fe==null?void 0:fe.url)==null?void 0:ne.replace)==null?void 0:nt.call(ne,/^git\+/,""))!=null?it:be==null?void 0:be.url)!=null?ot:hr,kr=rt?`[GitHub](${rt})  |`:"";return{contents:[].concat({value:`### [${J}](https://npmjs.com/package/${J}${O?`/v/${O}`:""}) v${O||$e}
${gr}

Published ${br}

${kr}  [NPM](https://npmjs.com/package/${J}${O?`/v/${O}`:""})  |  [Skypack](https://skypack.dev/view/${J})  |  [Unpkg](https://unpkg.com/browse/${J}@${O||$e}/)

${et?`~~~

## Documentation

`+et:""}`})}})()}}),[p,o,s,c]};export{C as Editor,Cn as TS_WORKER,A as Uri,sf as build,Ln as configModelResetValue,Fn as inputModelResetValue,Tn as outputModelResetValue,D as typescript};
//# sourceMappingURL=monaco-ZJ4QYA6X.js.map
