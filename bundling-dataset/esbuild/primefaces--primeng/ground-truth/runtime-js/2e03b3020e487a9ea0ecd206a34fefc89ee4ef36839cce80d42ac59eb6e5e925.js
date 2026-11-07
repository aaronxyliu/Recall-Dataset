import{Ba as S,Ra as B,Ua as M,Va as j,Wa as r,Xa as l}from"./chunk-LGF24A6L.js";import{$b as a,Ab as b,Bb as x,O as p,Ob as I,P as c,Pb as D,R as v,T as o,_b as z,ab as u,bb as f,eb as y,fb as g,kc as k,na as d,nd as C,rb as m,zb as h}from"./chunk-E5EQ6YZU.js";var E=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var w={root:({instance:t})=>({justifyContent:t.layout==="horizontal"?t.align==="center"||t.align==null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align==null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null})},A={root:({instance:t})=>["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}],content:"p-divider-content"},s=(()=>{class t extends B{name="divider";style=E;classes=A;inlineStyles=w;static \u0275fac=(()=>{let i;return function(e){return(i||(i=d(t)))(e||t)}})();static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})();var T=["*"],F=new v("DIVIDER_INSTANCE"),V=(()=>{class t extends j{componentName="Divider";$pcDivider=o(F,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;layout="horizontal";type="solid";align;_componentStyle=o(s);get dataP(){return this.cn({[this.align]:this.align,[this.layout]:this.layout,[this.type]:this.type})}static \u0275fac=(()=>{let i;return function(e){return(i||(i=d(t)))(e||t)}})();static \u0275cmp=u({type:t,selectors:[["p-divider"]],hostAttrs:["role","separator"],hostVars:6,hostBindings:function(n,e){n&2&&(m("aria-orientation",e.layout)("data-p",e.dataP),z(e.sx("root")),a(e.cn(e.cx("root"),e.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[k([s,{provide:F,useExisting:t},{provide:M,useExisting:t}]),y([r]),g],ngContentSelectors:T,decls:2,vars:3,consts:[[3,"pBind"]],template:function(n,e){n&1&&(I(),b(0,"div",0),D(1),x()),n&2&&(a(e.cx("content")),h("pBind",e.ptm("content")))},dependencies:[C,S,l,r],encapsulation:2,changeDetection:0})}return t})(),tt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=f({type:t});static \u0275inj=c({imports:[V,l,l]})}return t})();export{V as a,tt as b};
//# sourceMappingURL=chunk-JF4YXIDK.js.map
