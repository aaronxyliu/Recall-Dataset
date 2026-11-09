import{c as ge}from"./chunk-CXSS7KAI.js";import{W as de,ba as pe}from"./chunk-GTKEHP76.js";import{Aa as ce,Ba as T,Ra as re,Ua as le,Va as me,Wa as v}from"./chunk-LGF24A6L.js";import{$ as N,$b as g,Ab as f,Bb as b,Cb as h,Dc as ne,Hc as te,Ia as D,Ib as C,Jb as L,Lb as q,Nb as a,O as z,Oa as c,Ob as G,P as B,Pb as W,Pc as I,Qb as $,R as E,Sb as _,T as y,Tb as x,Xb as J,Z as O,Zb as K,_ as S,ab as F,ac as U,bb as j,bc as X,bd as se,eb as R,ed as oe,fa as P,fb as H,gb as u,id as ie,ja as A,kc as Y,mc as Z,na as w,nd as ae,rb as r,sb as Q,tb as V,ub as d,vb as p,zb as o,zc as ee}from"./chunk-E5EQ6YZU.js";import{a as k}from"./chunk-CIY7H4US.js";var ue=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var he={root:({instance:n})=>["p-message p-component p-message-"+n.severity,n.variant&&"p-message-"+n.variant,{"p-message-sm":n.size==="small","p-message-lg":n.size==="large"}],contentWrapper:"p-message-content-wrapper",content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},M=(()=>{class n extends re{name="message";style=ue;classes=he;static \u0275fac=(()=>{let e;return function(t){return(e||(e=w(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac})}return n})();var _e=["container"],xe=["icon"],ve=["closeicon"],ye=["*"],we=n=>({closeCallback:n});function Ce(n,i){n&1&&C(0)}function Te(n,i){if(n&1&&u(0,Ce,1,0,"ng-container",4),n&2){let e=a();o("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}function ke(n,i){if(n&1&&h(0,"i",1),n&2){let e=a();g(e.cn(e.cx("icon"),e.icon)),o("pBind",e.ptm("icon")),r("data-p",e.dataP)}}function Ie(n,i){n&1&&C(0)}function Me(n,i){if(n&1&&u(0,Ie,1,0,"ng-container",5),n&2){let e=a();o("ngTemplateOutlet",e.containerTemplate||e._containerTemplate)("ngTemplateOutletContext",Z(2,we,e.closeCallback))}}function ze(n,i){if(n&1&&h(0,"span",9),n&2){let e=a(3);o("pBind",e.ptm("text"))("ngClass",e.cx("text"))("innerHTML",e.text,D),r("data-p",e.dataP)}}function Be(n,i){if(n&1&&(f(0,"div"),u(1,ze,1,4,"span",8),b()),n&2){let e=a(2);c(),o("ngIf",!e.escape)}}function Ee(n,i){if(n&1&&(f(0,"span",7),U(1),b()),n&2){let e=a(3);o("pBind",e.ptm("text"))("ngClass",e.cx("text")),r("data-p",e.dataP),c(),X(e.text)}}function Oe(n,i){if(n&1&&u(0,Ee,2,4,"span",10),n&2){let e=a(2);o("ngIf",e.escape&&e.text)}}function Se(n,i){if(n&1&&(u(0,Be,2,1,"div",6)(1,Oe,1,1,"ng-template",null,0,ee),f(3,"span",7),W(4),b()),n&2){let e=J(2),s=a();o("ngIf",!s.escape)("ngIfElse",e),c(3),o("pBind",s.ptm("text"))("ngClass",s.cx("text")),r("data-p",s.dataP)}}function Ne(n,i){if(n&1&&h(0,"i",7),n&2){let e=a(2);g(e.cn(e.cx("closeIcon"),e.closeIcon)),o("pBind",e.ptm("closeIcon"))("ngClass",e.closeIcon),r("data-p",e.dataP)}}function Pe(n,i){n&1&&C(0)}function Ae(n,i){if(n&1&&u(0,Pe,1,0,"ng-container",4),n&2){let e=a(2);o("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function De(n,i){if(n&1&&(N(),h(0,"svg",14)),n&2){let e=a(2);g(e.cx("closeIcon")),o("pBind",e.ptm("closeIcon")),r("data-p",e.dataP)}}function Fe(n,i){if(n&1){let e=L();f(0,"button",11),q("click",function(t){O(e);let l=a();return S(l.close(t))}),d(1,Ne,1,5,"i",12),d(2,Ae,1,1,"ng-container"),d(3,De,1,4,":svg:svg",13),b()}if(n&2){let e=a();g(e.cx("closeButton")),o("pBind",e.ptm("closeButton")),r("aria-label",e.closeAriaLabel)("data-p",e.dataP),c(),p(e.closeIcon?1:-1),c(),p(e.closeIconTemplate||e._closeIconTemplate?2:-1),c(),p(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var fe=new E("MESSAGE_INSTANCE"),je=(()=>{class n extends me{componentName="Message";_componentStyle=y(M);bindDirectiveInstance=y(v,{self:!0});$pcMessage=y(fe,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;motionOptions=te(void 0);computedMotionOptions=ne(()=>k(k({},this.ptm("motion")),this.motionOptions()));onClose=new P;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=A(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant==="outlined",simple:this.variant==="simple",[this.severity]:this.severity,[this.size]:this.size})}static \u0275fac=(()=>{let e;return function(t){return(e||(e=w(n)))(t||n)}})();static \u0275cmp=F({type:n,selectors:[["p-message"]],contentQueries:function(s,t,l){if(s&1&&$(l,_e,4)(l,xe,4)(l,ve,4)(l,ce,4),s&2){let m;_(m=x())&&(t.containerTemplate=m.first),_(m=x())&&(t.iconTemplate=m.first),_(m=x())&&(t.closeIconTemplate=m.first),_(m=x())&&(t.templates=m)}},hostAttrs:["role","alert","aria-live","polite"],hostVars:5,hostBindings:function(s,t){s&1&&(Q(function(){return"p-message-enter-active"}),V(function(){return"p-message-leave-active"})),s&2&&(r("data-p",t.dataP),g(t.cn(t.cx("root"),t.styleClass)),K("p-message-leave-active",!t.visible()))},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",I],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",I],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant",motionOptions:[1,"motionOptions"]},outputs:{onClose:"onClose"},features:[Y([M,{provide:fe,useExisting:n},{provide:le,useExisting:n}]),R([v]),H],ngContentSelectors:ye,decls:7,vars:12,consts:[["escapeOut",""],[3,"pBind"],[3,"pBind","class"],["pRipple","","type","button",3,"pBind","class"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","ngClass","innerHTML",4,"ngIf"],[3,"pBind","ngClass","innerHTML"],[3,"pBind","ngClass",4,"ngIf"],["pRipple","","type","button",3,"click","pBind"],[3,"pBind","class","ngClass"],["data-p-icon","times",3,"pBind","class"],["data-p-icon","times",3,"pBind"]],template:function(s,t){s&1&&(G(),f(0,"div",1)(1,"div",1),d(2,Te,1,1,"ng-container"),d(3,ke,1,4,"i",2),d(4,Me,1,4,"ng-container")(5,Se,5,5),d(6,Fe,4,8,"button",3),b()()),s&2&&(g(t.cx("contentWrapper")),o("pBind",t.ptm("contentWrapper")),r("data-p",t.dataP),c(),g(t.cx("content")),o("pBind",t.ptm("content")),r("data-p",t.dataP),c(),p(t.iconTemplate||t._iconTemplate?2:-1),c(),p(t.icon?3:-1),c(),p(t.containerTemplate||t._containerTemplate?4:5),c(2),p(t.closable?6:-1))},dependencies:[ae,se,oe,ie,de,pe,T,v,ge],encapsulation:2,changeDetection:0})}return n})(),ln=(()=>{class n{static \u0275fac=function(s){return new(s||n)};static \u0275mod=j({type:n});static \u0275inj=B({imports:[je,T,T]})}return n})();export{je as a,ln as b};
//# sourceMappingURL=chunk-YHH2LQ77.js.map
