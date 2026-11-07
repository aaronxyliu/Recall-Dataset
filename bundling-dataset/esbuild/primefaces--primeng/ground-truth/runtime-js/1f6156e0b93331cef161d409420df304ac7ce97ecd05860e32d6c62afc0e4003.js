import{a as he,c as fe}from"./chunk-CXSS7KAI.js";import{d as k}from"./chunk-B6CBLI2Q.js";import{A as le,D as pe,ba as ue}from"./chunk-GTKEHP76.js";import{Ba as B,O as y,P as Q,Q as O,Ra as se,Ua as F,Va as M,Wa as c,Xa as v,pa as de}from"./chunk-LGF24A6L.js";import{$ as V,$b as s,Ab as Z,Bb as ee,Cb as N,Dc as d,Gb as R,Hb as $,Hc as P,Lb as L,Lc as U,N as b,Nb as u,O as G,Oa as p,Ob as w,P as W,Pb as I,Qb as ne,R as C,Sb as oe,T as a,Tb as te,Yb as ie,ab as x,bb as J,eb as D,ed as re,fa as j,fb as E,gb as A,id as ce,ja as z,kc as H,mc as ae,na as m,nd as T,rb as g,ub as X,vb as Y,zb as r}from"./chunk-E5EQ6YZU.js";import{a as _}from"./chunk-CIY7H4US.js";var ge=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`;var _e=`
${ge}

/* For PrimeNG */
.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: dt('accordion.header.padding');
}

.p-accordionheader.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-accordioncontent .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`,Ce={root:"p-accordion p-component",panel:({instance:n})=>["p-accordionpanel",{"p-accordionpanel-active":n.active(),"p-disabled":n.disabled()}],header:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon",contentContainer:"p-accordioncontent",contentWrapper:"p-accordioncontent-wrapper",content:"p-accordioncontent-content"},h=(()=>{class n extends se{name="accordion";style=_e;classes=Ce;static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(n)))(o||n)}})();static \u0275prov=G({token:n,factory:n.\u0275fac})}return n})();var S=["*"],xe=["toggleicon"],De=n=>({active:n});function Ee(n,l){}function Ne(n,l){n&1&&A(0,Ee,0,0,"ng-template")}function we(n,l){if(n&1&&A(0,Ne,1,0,null,0),n&2){let e=u();r("ngTemplateOutlet",e.toggleicon)("ngTemplateOutletContext",ae(2,De,e.active()))}}function Ie(n,l){if(n&1&&N(0,"span",4),n&2){let e=u(3);s(e.cn(e.cx("toggleicon"),e.pcAccordion.collapseIcon)),r("pBind",e.ptm("toggleicon")),g("aria-hidden",!0)}}function He(n,l){if(n&1&&(V(),N(0,"svg",5)),n&2){let e=u(3);s(e.cx("toggleicon")),r("pBind",e.ptm("toggleicon")),g("aria-hidden",!0)}}function Pe(n,l){if(n&1&&(R(0),A(1,Ie,1,4,"span",2)(2,He,1,4,"svg",3),$()),n&2){let e=u(2);p(),r("ngIf",e.pcAccordion.collapseIcon),p(),r("ngIf",!e.pcAccordion.collapseIcon)}}function Te(n,l){if(n&1&&N(0,"span",4),n&2){let e=u(3);s(e.cn(e.cx("toggleicon"),e.pcAccordion.expandIcon)),r("pBind",e.ptm("toggleicon")),g("aria-hidden",!0)}}function Oe(n,l){if(n&1&&(V(),N(0,"svg",7)),n&2){let e=u(3);r("pBind",e.ptm("toggleicon")),g("aria-hidden",!0)}}function Fe(n,l){if(n&1&&(R(0),A(1,Te,1,4,"span",2)(2,Oe,1,2,"svg",6),$()),n&2){let e=u(2);p(),r("ngIf",e.pcAccordion.expandIcon),p(),r("ngIf",!e.pcAccordion.expandIcon)}}function Me(n,l){if(n&1&&A(0,Pe,3,2,"ng-container",1)(1,Fe,3,2,"ng-container",1),n&2){let e=u();r("ngIf",e.active()),p(),r("ngIf",!e.active())}}var me=new C("ACCORDION_PANEL_INSTANCE"),ve=new C("ACCORDION_HEADER_INSTANCE"),be=new C("ACCORDION_CONTENT_INSTANCE"),Ae=new C("ACCORDION_INSTANCE"),q=(()=>{class n extends M{$pcAccordionPanel=a(me,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(c,{self:!0});componentName="AccordionPanel";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=a(b(()=>K));value=U(void 0);disabled=P(!1,{transform:e=>k(e)});active=d(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,t){return Array.isArray(e)?e.includes(t):e===t}_componentStyle=a(h);static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(n)))(o||n)}})();static \u0275cmp=x({type:n,selectors:[["p-accordion-panel"],["p-accordionpanel"]],hostVars:4,hostBindings:function(t,o){t&2&&(g("data-p-disabled",o.disabled())("data-p-active",o.active()),s(o.cx("panel")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[H([h,{provide:me,useExisting:n},{provide:F,useExisting:n}]),D([c]),E],ngContentSelectors:S,decls:1,vars:0,template:function(t,o){t&1&&(w(),I(0))},dependencies:[T,v],encapsulation:2,changeDetection:0})}return n})(),Be=(()=>{class n extends M{$pcAccordionHeader=a(ve,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(c,{self:!0});componentName="AccordionHeader";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=a(b(()=>K));pcAccordionPanel=a(b(()=>q));id=d(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=d(()=>this.pcAccordionPanel.active());disabled=d(()=>this.pcAccordionPanel.disabled());ariaControls=d(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){if(this.disabled())return;let t=this.active();this.changeActiveValue();let o=this.active(),i=this.pcAccordionPanel.value();!t&&o?this.pcAccordion.onOpen.emit({originalEvent:e,index:i}):t&&!o&&this.pcAccordion.onClose.emit({originalEvent:e,index:i})}onFocus(){!this.disabled()&&this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case"ArrowDown":this.arrowDownKey(e);break;case"ArrowUp":this.arrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnterKey(e);break;default:break}}_componentStyle=a(h);changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest('[data-pc-name="accordionpanel"]')}findHeader(e){return y(e,'[data-pc-name="accordionheader"]')}findNextPanel(e,t=!1){let o=t?e:e.nextElementSibling;return o?O(o,"data-p-disabled")?this.findNextPanel(o):this.findHeader(o):null}findPrevPanel(e,t=!1){let o=t?e:e.previousElementSibling;return o?O(o,"data-p-disabled")?this.findPrevPanel(o):this.findHeader(o):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,t){Q(t)}arrowDownKey(e){let t=this.findNextPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let t=this.findPrevPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let t=this.findFirstPanel();this.changeFocusedPanel(e,t),e.preventDefault()}onEndKey(e){let t=this.findLastPanel();this.changeFocusedPanel(e,t),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}get dataP(){return this.cn({active:this.active()})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(n)))(o||n)}})();static \u0275cmp=x({type:n,selectors:[["p-accordion-header"],["p-accordionheader"]],contentQueries:function(t,o,i){if(t&1&&ne(i,xe,5),t&2){let f;oe(f=te())&&(o.toggleicon=f.first)}},hostVars:13,hostBindings:function(t,o){t&1&&L("click",function(f){return o.onClick(f)})("focus",function(){return o.onFocus()})("keydown",function(f){return o.onKeydown(f)}),t&2&&(g("id",o.id())("aria-expanded",o.active())("aria-controls",o.ariaControls())("aria-disabled",o.disabled())("role","button")("tabindex",o.disabled()?"-1":"0")("data-p-active",o.active())("data-p-disabled",o.disabled())("data-p",o.dataP),s(o.cx("header")),ie("user-select","none"))},features:[H([h,{provide:ve,useExisting:n},{provide:F,useExisting:n}]),D([ue,c]),E],ngContentSelectors:S,decls:3,vars:1,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-up",3,"class","pBind",4,"ngIf"],[3,"pBind"],["data-p-icon","chevron-up",3,"pBind"],["data-p-icon","chevron-down",3,"pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"]],template:function(t,o){t&1&&(w(),I(0),X(1,we,1,4)(2,Me,2,2)),t&2&&(p(),Y(o.toggleicon?1:2))},dependencies:[T,re,ce,le,pe,v,c],encapsulation:2,changeDetection:0})}return n})(),ke=(()=>{class n extends M{$pcAccordionContent=a(be,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(c,{self:!0});componentName="AccordionContent";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=a(b(()=>K));pcAccordionPanel=a(b(()=>q));active=d(()=>this.pcAccordionPanel.active());ariaLabelledby=d(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=d(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);_componentStyle=a(h);ptParams=d(()=>({context:this.active()}));computedMotionOptions=d(()=>_(_({},this.ptm("motion",this.ptParams())),this.pcAccordion.computedMotionOptions()));static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(n)))(o||n)}})();static \u0275cmp=x({type:n,selectors:[["p-accordion-content"],["p-accordioncontent"]],hostVars:6,hostBindings:function(t,o){t&2&&(g("id",o.id())("role","region")("data-p-active",o.active())("aria-labelledby",o.ariaLabelledby()),s(o.cx("contentContainer")))},features:[H([h,{provide:be,useExisting:n},{provide:F,useExisting:n}]),D([c]),E],ngContentSelectors:S,decls:4,vars:10,consts:[["name","p-collapsible","hideStrategy","visibility",3,"visible","mountOnEnter","unmountOnLeave","options"],[3,"pBind"]],template:function(t,o){t&1&&(w(),Z(0,"p-motion",0)(1,"div",1)(2,"div",1),I(3),ee()()()),t&2&&(r("visible",o.active())("mountOnEnter",!1)("unmountOnLeave",!1)("options",o.computedMotionOptions()),p(),s(o.cx("contentWrapper")),r("pBind",o.ptm("contentWrapper",o.ptParams())),p(),s(o.cx("content")),r("pBind",o.ptm("content",o.ptParams())))},dependencies:[T,v,c,fe,he],encapsulation:2,changeDetection:0})}return n})(),K=(()=>{class n extends M{componentName="Accordion";$pcAccordion=a(Ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}value=U(void 0);multiple=P(!1,{transform:e=>k(e)});styleClass;expandIcon;collapseIcon;selectOnFocus=P(!1,{transform:e=>k(e)});transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";motionOptions=P(void 0);computedMotionOptions=d(()=>_(_({},this.ptm("motion")),this.motionOptions()));onClose=new j;onOpen=new j;id=z(de("pn_id_"));_componentStyle=a(h);onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let t=this.findNextHeaderAction(e.target.parentElement);t?this.changeFocusedTab(t):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let t=this.findPrevHeaderAction(e.target.parentElement);t?this.changeFocusedTab(t):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let t=this.findFirstHeaderAction();this.changeFocusedTab(t),e.preventDefault()}changeFocusedTab(e){e&&Q(e)}findNextHeaderAction(e,t=!1){let o=t?e:e.nextElementSibling,i=y(o,'[data-pc-section="accordionheader"]');return i?O(i,"data-p-disabled")?this.findNextHeaderAction(i.parentElement):y(i.parentElement,'[data-pc-section="accordionheader"]'):null}findPrevHeaderAction(e,t=!1){let o=t?e:e.previousElementSibling,i=y(o,'[data-pc-section="accordionheader"]');return i?O(i,"data-p-disabled")?this.findPrevHeaderAction(i.parentElement):y(i.parentElement,'[data-pc-section="accordionheader"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let t=this.findLastHeaderAction();this.changeFocusedTab(t),e.preventDefault()}getBlockableElement(){return this.el.nativeElement.children[0]}updateValue(e){let t=this.value();if(this.multiple()){let o=Array.isArray(t)?[...t]:[],i=o.indexOf(e);i!==-1?o.splice(i,1):o.push(e),this.value.set(o)}else t===e?this.value.set(void 0):this.value.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(n)))(o||n)}})();static \u0275cmp=x({type:n,selectors:[["p-accordion"]],hostVars:2,hostBindings:function(t,o){t&1&&L("keydown",function(f){return o.onKeydown(f)}),t&2&&s(o.cn(o.cx("root"),o.styleClass))},inputs:{value:[1,"value"],multiple:[1,"multiple"],styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",selectOnFocus:[1,"selectOnFocus"],transitionOptions:"transitionOptions",motionOptions:[1,"motionOptions"]},outputs:{value:"valueChange",onClose:"onClose",onOpen:"onOpen"},features:[H([h,{provide:Ae,useExisting:n},{provide:F,useExisting:n}]),D([c]),E],ngContentSelectors:S,decls:1,vars:0,template:function(t,o){t&1&&(w(),I(0))},dependencies:[T,B,v],encapsulation:2,changeDetection:0})}return n})(),hn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=J({type:n});static \u0275inj=W({imports:[K,B,q,Be,ke,v,B,v]})}return n})();export{q as a,Be as b,ke as c,K as d,hn as e};
//# sourceMappingURL=chunk-YOVHLGQ7.js.map
