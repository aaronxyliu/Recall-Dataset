import{a as X}from"./chunk-ZESNIKYM.js";import{a as W}from"./chunk-3VIWJVLU.js";import{ba as J}from"./chunk-GTKEHP76.js";import{Aa as U,Ba as k,Ra as q,Ua as K,Wa as a,Xa as Y}from"./chunk-LGF24A6L.js";import{$b as u,Ab as _,Bb as C,Cb as D,Hc as j,Ib as v,Lb as z,N as w,Nb as g,O as I,Oa as c,P as E,Pc as B,Qb as P,Qc as $,R as O,Sb as m,T as s,Tb as h,ab as M,ac as R,bb as S,bc as G,eb as A,fa as N,fb as F,gb as y,id as Q,kc as H,mc as x,na as p,nd as V,rb as T,ub as b,vb as f,zb as l}from"./chunk-E5EQ6YZU.js";var Z=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var it=`
    ${Z}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,lt={root:({instance:o})=>["p-togglebutton p-component",{"p-togglebutton-checked":o.checked,"p-invalid":o.invalid(),"p-disabled":o.$disabled(),"p-togglebutton-sm p-inputfield-sm":o.size==="small","p-togglebutton-lg p-inputfield-lg":o.size==="large","p-togglebutton-fluid":o.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},L=(()=>{class o extends q{name="togglebutton";style=it;classes=lt;static \u0275fac=(()=>{let t;return function(e){return(t||(t=p(o)))(e||o)}})();static \u0275prov=I({token:o,factory:o.\u0275fac})}return o})();var at=["icon"],rt=["content"],ot=o=>({$implicit:o});function dt(o,r){o&1&&v(0)}function ct(o,r){if(o&1&&D(0,"span",0),o&2){let t=g(3);u(t.cn(t.cx("icon"),t.checked?t.onIcon:t.offIcon,t.iconPos==="left"?t.cx("iconLeft"):t.cx("iconRight"))),l("pBind",t.ptm("icon"))}}function gt(o,r){if(o&1&&b(0,ct,1,3,"span",2),o&2){let t=g(2);f(t.onIcon||t.offIcon?0:-1)}}function ut(o,r){o&1&&v(0)}function st(o,r){if(o&1&&y(0,ut,1,0,"ng-container",1),o&2){let t=g(2);l("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",x(2,ot,t.checked))}}function pt(o,r){if(o&1&&(b(0,gt,1,1)(1,st,1,4,"ng-container"),_(2,"span",0),R(3),C()),o&2){let t=g();f(t.iconTemplate?1:0),c(2),u(t.cx("label")),l("pBind",t.ptm("label")),c(),G(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var tt=new O("TOGGLEBUTTON_INSTANCE"),bt={provide:W,useExisting:w(()=>et),multi:!0},et=(()=>{class o extends X{componentName="ToggleButton";$pcToggleButton=s(tt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(a,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}toggle(t){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=j(void 0,{transform:B});onChange=new N;iconTemplate;contentTemplate;templates;checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=s(L);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}writeControlValue(t,n){this.checked=t,n(t),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size]:this.size})}static \u0275fac=(()=>{let t;return function(e){return(t||(t=p(o)))(e||o)}})();static \u0275cmp=M({type:o,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,e,d){if(n&1&&P(d,at,4)(d,rt,4)(d,U,4),n&2){let i;m(i=h())&&(e.iconTemplate=i.first),m(i=h())&&(e.contentTemplate=i.first),m(i=h())&&(e.templates=i)}},hostVars:11,hostBindings:function(n,e){n&1&&z("keydown",function(i){return e.onKeyDown(i)})("click",function(i){return e.toggle(i)}),n&2&&(T("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("aria-pressed",e.checked?"true":"false")("role","button")("tabindex",e.tabindex!==void 0?e.tabindex:e.$disabled()?-1:0)("data-pc-name","togglebutton")("data-p-checked",e.active)("data-p-disabled",e.$disabled())("data-p",e.dataP),u(e.cn(e.cx("root"),e.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",$],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",B],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[H([bt,L,{provide:tt,useExisting:o},{provide:K,useExisting:o}]),A([J,a]),F],decls:3,vars:9,consts:[[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pBind"]],template:function(n,e){n&1&&(_(0,"span",0),y(1,dt,1,0,"ng-container",1),b(2,pt,4,5),C()),n&2&&(u(e.cx("content")),l("pBind",e.ptm("content")),T("data-p",e.dataP),c(),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",x(7,ot,e.checked)),c(),f(e.contentTemplate?-1:2))},dependencies:[V,Q,k,Y,a],encapsulation:2,changeDetection:0})}return o})(),jt=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=S({type:o});static \u0275inj=E({imports:[et,k,k]})}return o})();export{et as a,jt as b};
//# sourceMappingURL=chunk-3IIC2Y3P.js.map
