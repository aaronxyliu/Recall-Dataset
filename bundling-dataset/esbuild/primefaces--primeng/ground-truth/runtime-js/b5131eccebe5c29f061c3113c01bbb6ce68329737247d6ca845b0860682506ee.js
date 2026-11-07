import{h as w,i as F}from"./chunk-GTKEHP76.js";import{Ba as r,Ra as M,Ua as N,Va as j,Wa as a}from"./chunk-LGF24A6L.js";import{$b as C,Ab as b,Bb as S,Cb as D,O as d,Oa as g,Ob as z,P as p,Pb as B,Pc as I,R as c,T as s,_b as h,ab as u,bb as y,eb as f,fb as v,kc as E,na as m,nd as A,zb as n}from"./chunk-E5EQ6YZU.js";var k=`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: dt('overlaybadge.outline.width');
    outline-style: solid;
    outline-color: dt('overlaybadge.outline.color');
}
`,V={root:"p-overlaybadge"},l=(()=>{class e extends M{name="overlaybadge";style=k;classes=V;static \u0275fac=(()=>{let i;return function(t){return(i||(i=m(e)))(t||e)}})();static \u0275prov=d({token:e,factory:e.\u0275fac})}return e})();var R=["*"],O=new c("OVERLAYBADGE_INSTANCE"),_=(()=>{class e extends j{componentName="OverlayBadge";$pcOverlayBadge=s(O,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(a,{self:!0});styleClass;style;badgeSize;severity;value;badgeDisabled=!1;set size(i){this._size=i,!this.badgeSize&&this.size&&console.log("size property is deprecated and will removed in v18, use badgeSize instead.")}get size(){return this._size}_size;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}_componentStyle=s(l);constructor(){super()}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=u({type:e,selectors:[["p-overlayBadge"],["p-overlay-badge"],["p-overlaybadge"]],inputs:{styleClass:"styleClass",style:"style",badgeSize:"badgeSize",severity:"severity",value:"value",badgeDisabled:[2,"badgeDisabled","badgeDisabled",I],size:"size"},features:[E([l,{provide:O,useExisting:e},{provide:N,useExisting:e}]),f([a]),v],ngContentSelectors:R,decls:3,vars:11,consts:[[3,"pBind"],[3,"pt","styleClass","badgeSize","severity","value","badgeDisabled"]],template:function(o,t){o&1&&(z(),b(0,"div",0),B(1),D(2,"p-badge",1),S()),o&2&&(C(t.cx("root")),n("pBind",t.ptm("root")),g(2),h(t.style),n("pt",t.ptm("pcBadge"))("styleClass",t.styleClass)("badgeSize",t.badgeSize)("severity",t.severity)("value",t.value)("badgeDisabled",t.badgeDisabled))},dependencies:[A,F,w,r,a],encapsulation:2,changeDetection:0})}return e})(),te=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=y({type:e});static \u0275inj=p({imports:[_,r,r]})}return e})();export{_ as a,te as b};
//# sourceMappingURL=chunk-GBBWPMJI.js.map
