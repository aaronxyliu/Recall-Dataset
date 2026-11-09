import{a as F}from"./chunk-54ANHTEW.js";import{e as w}from"./chunk-3VIWJVLU.js";import{j as S}from"./chunk-GTKEHP76.js";import{Ra as N,Ua as k,Wa as d}from"./chunk-LGF24A6L.js";import{$b as I,Dc as y,Hc as i,Lb as b,O as l,P as s,Pc as u,R as c,T as o,bb as f,cb as g,eb as h,fb as v,kc as T,la as p,na as x,rb as m}from"./chunk-E5EQ6YZU.js";var M=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var z=`
    ${M}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,C={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},a=(()=>{class t extends N{name="inputtext";style=z;classes=C;static \u0275fac=(()=>{let n;return function(r){return(n||(n=x(t)))(r||t)}})();static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})();var D=new c("INPUTTEXT_INSTANCE"),Q=(()=>{class t extends F{componentName="InputText";hostName="";ptInputText=i();pInputTextPT=i();pInputTextUnstyled=i();bindDirectiveInstance=o(d,{self:!0});$pcInputText=o(D,{optional:!0,skipSelf:!0})??void 0;ngControl=o(w,{optional:!0,self:!0});pcFluid=o(S,{optional:!0,host:!0,skipSelf:!0});pSize;variant=i();fluid=i(void 0,{transform:u});invalid=i(void 0,{transform:u});$variant=y(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=o(a);constructor(){super(),p(()=>{let n=this.ptInputText()||this.pInputTextPT();n&&this.directivePT.set(n)}),p(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(e){return new(e||t)};static \u0275dir=g({type:t,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(e,r){e&1&&b("input",function(){return r.onInput()}),e&2&&(m("data-p",r.dataP),I(r.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[T([a,{provide:D,useExisting:t},{provide:k,useExisting:t}]),h([d]),v]})}return t})(),W=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=f({type:t});static \u0275inj=s({})}return t})();export{Q as a,W as b};
//# sourceMappingURL=chunk-HDR4XZHF.js.map
