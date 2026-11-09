import{b as It,c as wt}from"./chunk-CXSS7KAI.js";import{c as E}from"./chunk-B6CBLI2Q.js";import{E as yt,J as xt,W as Tt,X as Ct,z as vt}from"./chunk-GTKEHP76.js";import{Aa as ht,Ba as C,Ra as _t,Ua as bt,Va as Q,Wa as I,b as ut,oa as G,pa as gt,va as ft}from"./chunk-LGF24A6L.js";import{$ as u,$b as d,Ab as g,Bb as f,Cb as m,Dc as lt,Gb as tt,Gc as $,Hb as et,Hc as M,Ib as z,Jb as P,Lb as k,Nb as a,O as H,Oa as l,P as R,Pc as S,Qb as nt,Qc as T,R as q,Sb as A,T as h,Tb as O,Xa as J,Z as _,_ as b,_b as ot,ab as V,ac as Z,bb as K,bc as st,bd as ct,cc as it,dd as dt,eb as W,ed as pt,fa as D,fb as F,ga as Y,gb as x,id as mt,ja as N,kc as L,la as X,mc as at,na as U,nc as rt,nd as j,rb as c,ub as v,vb as y,zb as i}from"./chunk-E5EQ6YZU.js";import{a as B}from"./chunk-CIY7H4US.js";var kt=`
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        margin: 0 0 1rem 0;
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
        min-height: 0;
        overflow: hidden;
        transition: padding 250ms ease-in;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: -25% 0 0 0;
        right: -25%;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        margin: -25% 0 0 auto;
        left: -25%;
        right: auto;
    }

    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }
    
    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-message-enter-active {
        animation: p-animate-toast-enter 300ms ease-out;
    }

    .p-toast-message-leave-active {
        animation: p-animate-toast-leave 250ms ease-in;
    }

    .p-toast-message-leave-to .p-toast-message-content {
        padding-top: 0;
        padding-bottom: 0;
    }

    @keyframes p-animate-toast-enter {
        from {
            opacity: 0;
            transform: scale(0.6);
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

     @keyframes p-animate-toast-leave {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            margin-bottom: 0;
            grid-template-rows: 0fr;
            transform: translateY(-100%) scale(0.6);
        }
    }
`;var Mt={root:({instance:e})=>{let{_position:s}=e;return{position:"fixed",top:s==="top-right"||s==="top-left"||s==="top-center"?"20px":s==="center"?"50%":null,right:(s==="top-right"||s==="bottom-right")&&"20px",bottom:(s==="bottom-left"||s==="bottom-right"||s==="bottom-center")&&"20px",left:s==="top-left"||s==="bottom-left"?"20px":s==="center"||s==="top-center"||s==="bottom-center"?"50%":null}}},St={root:({instance:e})=>["p-toast p-component",`p-toast-${e._position}`],message:({instance:e})=>({"p-toast-message":!0,"p-toast-message-info":e.message.severity==="info"||e.message.severity===void 0,"p-toast-message-warn":e.message.severity==="warn","p-toast-message-error":e.message.severity==="error","p-toast-message-success":e.message.severity==="success","p-toast-message-secondary":e.message.severity==="secondary","p-toast-message-contrast":e.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:e})=>({"p-toast-message-icon":!0,[`pi ${e.message.icon}`]:!!e.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:e})=>({"p-toast-close-icon":!0,[`pi ${e.message.closeIcon}`]:!!e.message.closeIcon})},w=(()=>{class e extends _t{name="toast";style=kt;classes=St;inlineStyles=Mt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=U(e)))(n||e)}})();static \u0275prov=H({token:e,factory:e.\u0275fac})}return e})();var Et=(e,s)=>({$implicit:e,closeFn:s}),Bt=e=>({$implicit:e});function Dt(e,s){e&1&&z(0)}function Nt(e,s){if(e&1&&x(0,Dt,1,0,"ng-container",3),e&2){let t=a();i("ngTemplateOutlet",t.headlessTemplate)("ngTemplateOutletContext",rt(2,Et,t.message,t.onCloseIconClick))}}function Vt(e,s){if(e&1&&m(0,"span",4),e&2){let t=a(3);d(t.cn(t.cx("messageIcon"),t.message==null?null:t.message.icon)),i("pBind",t.ptm("messageIcon"))}}function Ft(e,s){if(e&1&&(u(),m(0,"svg",11)),e&2){let t=a(4);d(t.cx("messageIcon")),i("pBind",t.ptm("messageIcon")),c("aria-hidden",!0)}}function zt(e,s){if(e&1&&(u(),m(0,"svg",12)),e&2){let t=a(4);d(t.cx("messageIcon")),i("pBind",t.ptm("messageIcon")),c("aria-hidden",!0)}}function Pt(e,s){if(e&1&&(u(),m(0,"svg",13)),e&2){let t=a(4);d(t.cx("messageIcon")),i("pBind",t.ptm("messageIcon")),c("aria-hidden",!0)}}function Zt(e,s){if(e&1&&(u(),m(0,"svg",14)),e&2){let t=a(4);d(t.cx("messageIcon")),i("pBind",t.ptm("messageIcon")),c("aria-hidden",!0)}}function Lt(e,s){if(e&1&&(u(),m(0,"svg",12)),e&2){let t=a(4);d(t.cx("messageIcon")),i("pBind",t.ptm("messageIcon")),c("aria-hidden",!0)}}function $t(e,s){if(e&1&&v(0,Ft,1,4,":svg:svg",7)(1,zt,1,4,":svg:svg",8)(2,Pt,1,4,":svg:svg",9)(3,Zt,1,4,":svg:svg",10)(4,Lt,1,4,":svg:svg",8),e&2){let t,o=a(3);y((t=o.message.severity)==="success"?0:t==="info"?1:t==="error"?2:t==="warn"?3:4)}}function jt(e,s){if(e&1&&(tt(0),v(1,Vt,1,3,"span",2)(2,$t,5,1),g(3,"div",6)(4,"div",6),Z(5),f(),g(6,"div",6),Z(7),f()(),et()),e&2){let t=a(2);l(),y(t.message.icon?1:2),l(2),i("pBind",t.ptm("messageText"))("ngClass",t.cx("messageText")),c("data-p",t.dataP),l(),i("pBind",t.ptm("summary"))("ngClass",t.cx("summary")),c("data-p",t.dataP),l(),it(" ",t.message.summary," "),l(),i("pBind",t.ptm("detail"))("ngClass",t.cx("detail")),c("data-p",t.dataP),l(),st(t.message.detail)}}function Gt(e,s){e&1&&z(0)}function Qt(e,s){if(e&1&&m(0,"span",4),e&2){let t=a(4);d(t.cn(t.cx("closeIcon"),t.message==null?null:t.message.closeIcon)),i("pBind",t.ptm("closeIcon"))}}function Ht(e,s){if(e&1&&x(0,Qt,1,3,"span",17),e&2){let t=a(3);i("ngIf",t.message.closeIcon)}}function Rt(e,s){if(e&1&&(u(),m(0,"svg",18)),e&2){let t=a(3);d(t.cx("closeIcon")),i("pBind",t.ptm("closeIcon")),c("aria-hidden",!0)}}function qt(e,s){if(e&1){let t=P();g(0,"div")(1,"button",15),k("click",function(n){_(t);let r=a(2);return b(r.onCloseIconClick(n))})("keydown.enter",function(n){_(t);let r=a(2);return b(r.onCloseIconClick(n))}),v(2,Ht,1,1,"span",2)(3,Rt,1,4,":svg:svg",16),f()()}if(e&2){let t=a(2);l(),i("pBind",t.ptm("closeButton")),c("class",t.cx("closeButton"))("aria-label",t.closeAriaLabel)("data-p",t.dataP),l(),y(t.message.closeIcon?2:3)}}function Yt(e,s){if(e&1&&(g(0,"div",4),x(1,jt,8,12,"ng-container",5)(2,Gt,1,0,"ng-container",3),v(3,qt,4,5,"div"),f()),e&2){let t=a();d(t.cn(t.cx("messageContent"),t.message==null?null:t.message.contentStyleClass)),i("pBind",t.ptm("messageContent")),l(),i("ngIf",!t.template),l(),i("ngTemplateOutlet",t.template)("ngTemplateOutletContext",at(7,Bt,t.message)),l(),y((t.message==null?null:t.message.closable)!==!1?3:-1)}}var Xt=["message"],Ut=["headless"];function Jt(e,s){if(e&1){let t=P();g(0,"p-toastItem",1),k("onClose",function(n){_(t);let r=a();return b(r.onMessageClose(n))})("onAnimationEnd",function(){_(t);let n=a();return b(n.onAnimationEnd())})("onAnimationStart",function(){_(t);let n=a();return b(n.onAnimationStart())}),f()}if(e&2){let t=s.$implicit,o=s.index,n=a();i("message",t)("index",o)("life",n.life)("clearAll",n.clearAllTrigger())("template",n.template||n._template)("headlessTemplate",n.headlessTemplate||n._headlessTemplate)("pt",n.pt)("unstyled",n.unstyled())("motionOptions",n.computedMotionOptions())}}var At=new q("TOAST_INSTANCE"),Kt=(()=>{class e extends Q{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;motionOptions=M();clearAll=M(null);onAnimationStart=$();onAnimationEnd=$();onBeforeEnter(t){this.onAnimationStart.emit(t.element)}onAfterLeave(t){!this.visible()&&!this.isDestroyed&&(this.onClose.emit({index:this.index,message:this.message}),this.isDestroyed||this.onAnimationEnd.emit(t.element))}onClose=new D;_componentStyle=h(w);timeout;visible=N(void 0);isDestroyed=!1;isClosing=!1;constructor(t){super(),this.zone=t,X(()=>{this.clearAll()&&this.visible.set(!1)})}onAfterViewInit(){this.message?.sticky&&this.visible.set(!0),this.initTimeout()}initTimeout(){this.message?.sticky||(this.clearTimeout(),this.zone.runOutsideAngular(()=>{this.visible.set(!0),this.timeout=setTimeout(()=>{this.visible.set(!1)},this.message?.life||this.life||3e3)}))}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.isClosing||this.initTimeout()}onCloseIconClick=t=>{this.isClosing=!0,this.clearTimeout(),this.visible.set(!1),t.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onDestroy(){this.isDestroyed=!0,this.clearTimeout(),this.visible.set(!1)}get dataP(){return this.cn({[this.message?.severity]:this.message?.severity})}static \u0275fac=function(o){return new(o||e)(J(Y))};static \u0275cmp=V({type:e,selectors:[["p-toastItem"]],inputs:{message:"message",index:[2,"index","index",T],life:[2,"life","life",T],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],clearAll:[1,"clearAll"]},outputs:{onAnimationStart:"onAnimationStart",onAnimationEnd:"onAnimationEnd",onClose:"onClose"},features:[L([w]),F],decls:4,vars:10,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","mouseenter","mouseleave","pMotion","pMotionAppear","pMotionName","pMotionOptions","pBind"],[3,"pBind","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","check",3,"pBind","class"],["data-p-icon","info-circle",3,"pBind","class"],["data-p-icon","times-circle",3,"pBind","class"],["data-p-icon","exclamation-triangle",3,"pBind","class"],["data-p-icon","check",3,"pBind"],["data-p-icon","info-circle",3,"pBind"],["data-p-icon","times-circle",3,"pBind"],["data-p-icon","exclamation-triangle",3,"pBind"],["type","button","autofocus","",3,"click","keydown.enter","pBind"],["data-p-icon","times",3,"pBind","class"],[3,"pBind","class",4,"ngIf"],["data-p-icon","times",3,"pBind"]],template:function(o,n){o&1&&(g(0,"div",1,0),k("pMotionOnBeforeEnter",function(p){return n.onBeforeEnter(p)})("pMotionOnAfterLeave",function(p){return n.onAfterLeave(p)})("mouseenter",function(){return n.onMouseEnter()})("mouseleave",function(){return n.onMouseLeave()}),v(2,Nt,1,5,"ng-container")(3,Yt,4,9,"div",2),f()),o&2&&(d(n.cn(n.cx("message"),n.message==null?null:n.message.styleClass)),i("pMotion",n.visible())("pMotionAppear",!0)("pMotionName","p-toast-message")("pMotionOptions",n.motionOptions())("pBind",n.ptm("message")),c("id",n.message==null?null:n.message.id)("data-p",n.dataP),l(2),y(n.headlessTemplate?2:3))},dependencies:[j,ct,pt,mt,vt,yt,xt,Tt,Ct,C,I,wt,It],encapsulation:2,changeDetection:0})}return e})(),Wt=(()=>{class e extends Q{componentName="Toast";$pcToast=h(At,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(I,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}key;autoZIndex=!0;baseZIndex=0;life=3e3;styleClass;get position(){return this._position}set position(t){this._position=t,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";motionOptions=M(void 0);computedMotionOptions=lt(()=>B(B({},this.ptm("motion")),this.motionOptions()));breakpoints;onClose=new D;template;headlessTemplate;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=h(ft);_componentStyle=h(w);styleElement;id=gt("pn_id_");templates;clearAllTrigger=N(null);constructor(){super()}onInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(t=>{if(t)if(Array.isArray(t)){let o=t.filter(n=>this.canAdd(n));this.add(o)}else this.canAdd(t)&&this.add([t])}),this.clearSubscription=this.messageService.clearObserver.subscribe(t=>{t?this.key===t&&this.clearAll():this.clearAll(),this.cd.markForCheck()})}clearAll(){this.clearAllTrigger.set({})}_template;_headlessTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"message":this._template=t.template;break;case"headless":this._headlessTemplate=t.template;break;default:this._template=t.template;break}})}onAfterViewInit(){this.breakpoints&&this.createStyle()}add(t){this.messages=this.messages?[...this.messages,...t]:[...t],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...t]:[...t]),this.cd.markForCheck()}canAdd(t){let o=this.key===t.key;return o&&this.preventOpenDuplicates&&(o=!this.containsMessage(this.messages,t)),o&&this.preventDuplicates&&(o=!this.containsMessage(this.messagesArchieve,t)),o}containsMessage(t,o){return t?t.find(n=>n.summary===o.summary&&n.detail==o.detail&&n.severity===o.severity)!=null:!1}onMessageClose(t){this.messages?.splice(t.index,1),this.onClose.emit({message:t.message}),this.onAnimationEnd(),this.cd.detectChanges()}onAnimationStart(){this.renderer.setAttribute(this.el?.nativeElement,this.id,""),this.autoZIndex&&this.el?.nativeElement.style.zIndex===""&&E.set("modal",this.el?.nativeElement,this.baseZIndex||this.config.zIndex.modal)}onAnimationEnd(){this.autoZIndex&&ut(this.messages)&&E.clear(this.el?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",G(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let t="";for(let o in this.breakpoints){let n="";for(let r in this.breakpoints[o])n+=r+":"+this.breakpoints[o][r]+" !important;";t+=`
                    @media screen and (max-width: ${o}) {
                        .p-toast[${this.id}] {
                           ${n}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",t),G(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.el&&this.autoZIndex&&E.clear(this.el.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}get dataP(){return this.cn({[this.position]:this.position})}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=V({type:e,selectors:[["p-toast"]],contentQueries:function(o,n,r){if(o&1&&nt(r,Xt,5)(r,Ut,5)(r,ht,4),o&2){let p;A(p=O())&&(n.template=p.first),A(p=O())&&(n.headlessTemplate=p.first),A(p=O())&&(n.templates=p)}},hostVars:5,hostBindings:function(o,n){o&2&&(c("data-p",n.dataP),ot(n.sx("root")),d(n.cn(n.cx("root"),n.styleClass)))},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",S],baseZIndex:[2,"baseZIndex","baseZIndex",T],life:[2,"life","life",T],styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",S],preventDuplicates:[2,"preventDuplicates","preventDuplicates",S],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[L([w,{provide:At,useExisting:e},{provide:bt,useExisting:e}]),W([I]),F],decls:1,vars:1,consts:[[3,"message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions","onClose","onAnimationEnd","onAnimationStart",4,"ngFor","ngForOf"],[3,"onClose","onAnimationEnd","onAnimationStart","message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions"]],template:function(o,n){o&1&&x(0,Jt,1,9,"p-toastItem",0),o&2&&i("ngForOf",n.messages)},dependencies:[j,dt,Kt,C],encapsulation:2,changeDetection:0})}return e})(),we=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=K({type:e});static \u0275inj=R({imports:[Wt,C,C]})}return e})();export{Wt as a,we as b};
//# sourceMappingURL=chunk-SDOYLP4J.js.map
