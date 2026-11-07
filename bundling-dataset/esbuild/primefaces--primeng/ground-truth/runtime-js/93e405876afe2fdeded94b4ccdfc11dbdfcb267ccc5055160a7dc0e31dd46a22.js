import{a as St}from"./chunk-3JZZC3ZC.js";import{b as At,c as Dt}from"./chunk-CXSS7KAI.js";import{c as Q}from"./chunk-B6CBLI2Q.js";import{d as kt,ga as Lt,ha as Rt}from"./chunk-GTKEHP76.js";import{Aa as Bt,B as Tt,Ba as M,Ca as $,H as P,O as z,P as H,Ra as Pt,Ua as Mt,Va as Ot,Wa as T,Z,ha as jt,ia as wt,ra as Et,s as vt,wa as It}from"./chunk-LGF24A6L.js";import{$b as u,Ab as d,Bb as _,Cb as w,Cc as dt,Dc as I,Gb as S,Hb as A,Hc as B,Ib as D,Ic as N,Jb as E,Lb as v,Mc as _t,Na as tt,Nb as r,O as K,Oa as l,P as W,Pc as ht,Qb as at,Qc as gt,R as J,Sb as C,T as j,Tb as y,Vb as st,Wa as et,Wb as lt,Xa as f,Xb as V,Z as g,_ as b,ab as nt,ac as ut,bb as it,bc as mt,ca as G,eb as ot,ed as bt,fa as k,fb as rt,gb as s,hd as Ct,id as yt,ja as L,kc as ft,la as X,mc as F,na as Y,nd as xt,pa as m,rb as R,ub as ct,vb as pt,zb as o,zc as h}from"./chunk-E5EQ6YZU.js";import{a as O}from"./chunk-CIY7H4US.js";var Vt=`
    .p-confirmpopup {
        position: absolute;
        margin-top: dt('confirmpopup.gutter');
        top: 0;
        left: 0;
        background: dt('confirmpopup.background');
        color: dt('confirmpopup.color');
        border: 1px solid dt('confirmpopup.border.color');
        border-radius: dt('confirmpopup.border.radius');
        box-shadow: dt('confirmpopup.shadow');
        will-change: transform;
    }

    .p-confirmpopup-content {
        display: flex;
        align-items: center;
        padding: dt('confirmpopup.content.padding');
        gap: dt('confirmpopup.content.gap');
    }

    .p-confirmpopup-icon {
        font-size: dt('confirmpopup.icon.size');
        width: dt('confirmpopup.icon.size');
        height: dt('confirmpopup.icon.size');
        color: dt('confirmpopup.icon.color');
    }

    .p-confirmpopup-footer {
        display: flex;
        justify-content: flex-end;
        gap: dt('confirmpopup.footer.gap');
        padding: dt('confirmpopup.footer.padding');
    }

    .p-confirmpopup-footer button {
        width: auto;
    }

    .p-confirmpopup-footer button:last-child {
        margin: 0;
    }

    .p-confirmpopup-flipped {
        margin-block-start: calc(dt('confirmpopup.gutter') * -1);
        margin-block-end: dt('confirmpopup.gutter');
    }

    .p-confirmpopup:after,
    .p-confirmpopup:before {
        bottom: 100%;
        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-confirmpopup:after {
        border-width: calc(dt('confirmpopup.gutter') - 2px);
        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.background');
    }

    .p-confirmpopup:before {
        border-width: dt('confirmpopup.gutter');
        margin-left: calc(-1 * dt('confirmpopup.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.border.color');
    }

    .p-confirmpopup-flipped:after,
    .p-confirmpopup-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-confirmpopup-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.background');
    }

    .p-confirmpopup-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.border.color');
    }
`;var Zt={root:()=>["p-confirmpopup p-component"],content:"p-confirmpopup-content",icon:({instance:e})=>["p-confirmpopup-icon",e.confirmation?.icon],message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},q=(()=>{class e extends Pt{name="confirmpopup";style=Vt;classes=Zt;static \u0275fac=(()=>{let t;return function(i){return(t||(t=Y(e)))(i||e)}})();static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})();var $t=["content"],Qt=["accepticon"],qt=["rejecticon"],Ut=["headless"],Kt=["acceptButton"],Wt=["rejectButton"],Nt=e=>({$implicit:e});function Jt(e,c){e&1&&D(0)}function Gt(e,c){if(e&1&&(S(0),s(1,Jt,1,0,"ng-container",9),A()),e&2){let t=r(2);l(),o("ngTemplateOutlet",t.headlessTemplate||t._headlessTemplate)("ngTemplateOutletContext",F(2,Nt,t.confirmation))}}function Xt(e,c){e&1&&D(0)}function Yt(e,c){if(e&1&&(S(0),s(1,Xt,1,0,"ng-container",9),A()),e&2){let t=r(3);l(),o("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",F(2,Nt,t.confirmation))}}function te(e,c){if(e&1&&w(0,"i",10),e&2){let t=r(4);u(t.cx("icon")),o("pBind",t.ptm("icon"))}}function ee(e,c){if(e&1&&(s(0,te,1,3,"i",13),d(1,"span",10),ut(2),_()),e&2){let t=r(3);o("ngIf",t.confirmation==null?null:t.confirmation.icon),l(),u(t.cx("message")),o("pBind",t.ptm("message")),l(),mt(t.confirmation==null?null:t.confirmation.message)}}function ne(e,c){if(e&1&&w(0,"i"),e&2){let t=r(5);u(t.confirmation==null?null:t.confirmation.rejectIcon)}}function ie(e,c){}function oe(e,c){e&1&&s(0,ie,0,0,"ng-template",null,4,h)}function re(e,c){if(e&1&&s(0,ne,1,2,"i",15)(1,oe,2,0,null,16),e&2){let t=r(4);o("ngIf",t.confirmation==null?null:t.confirmation.rejectIcon)("ngIfElse",t.rejecticon),l(),o("ngTemplateOutlet",t.rejectIconTemplate||t._rejectIconTemplate)}}function ce(e,c){if(e&1){let t=E();d(0,"p-button",14),v("onClick",function(){g(t);let i=r(3);return b(i.onReject())}),s(1,re,2,3,"ng-template",null,3,h),_()}if(e&2){let t=r(3);u(t.cx("pcRejectButton")),o("label",t.rejectButtonLabel)("pt",t.ptm("pcRejectButton"))("styleClass",t.confirmation==null?null:t.confirmation.rejectButtonStyleClass)("size",(t.confirmation==null||t.confirmation.rejectButtonProps==null?null:t.confirmation.rejectButtonProps.size)||"small")("text",(t.confirmation==null||t.confirmation.rejectButtonProps==null?null:t.confirmation.rejectButtonProps.text)||!1)("buttonProps",t.getRejectButtonProps())("autofocus",t.autoFocusReject)("unstyled",t.unstyled()),R("aria-label",t.rejectButtonLabel)}}function pe(e,c){if(e&1&&w(0,"i"),e&2){let t=r(5);u(t.confirmation==null?null:t.confirmation.acceptIcon)}}function ae(e,c){}function se(e,c){e&1&&s(0,ae,0,0,"ng-template",null,5,h)}function le(e,c){if(e&1&&s(0,pe,1,2,"i",15)(1,se,2,0,null,16),e&2){let t=r(4);o("ngIf",t.confirmation==null?null:t.confirmation.acceptIcon)("ngIfElse",t.accepticontemplate),l(),o("ngTemplateOutlet",t.acceptIconTemplate||t._acceptIconTemplate)}}function ue(e,c){if(e&1){let t=E();d(0,"p-button",17),v("onClick",function(){g(t);let i=r(3);return b(i.onAccept())}),s(1,le,2,3,"ng-template",null,3,h),_()}if(e&2){let t=r(3);u(t.cx("pcAcceptButton")),o("label",t.acceptButtonLabel)("pt",t.ptm("pcAcceptButton"))("styleClass",t.confirmation==null?null:t.confirmation.acceptButtonStyleClass)("size",(t.confirmation==null||t.confirmation.acceptButtonProps==null?null:t.confirmation.acceptButtonProps.size)||"small")("buttonProps",t.getAcceptButtonProps())("autofocus",t.autoFocusAccept)("unstyled",t.unstyled()),R("aria-label",t.acceptButtonLabel)}}function me(e,c){if(e&1&&(d(0,"div",10,1),s(2,Yt,2,4,"ng-container",8)(3,ee,3,5,"ng-template",null,2,h),_(),d(5,"div",10),s(6,ce,3,11,"p-button",11)(7,ue,3,10,"p-button",12),_()),e&2){let t=V(4),n=r(2);u(n.cx("content")),o("pBind",n.ptm("content")),l(2),o("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",t),l(3),u(n.cx("footer")),o("pBind",n.ptm("footer")),l(),o("ngIf",(n.confirmation==null?null:n.confirmation.rejectVisible)!==!1),l(),o("ngIf",(n.confirmation==null?null:n.confirmation.acceptVisible)!==!1)}}function fe(e,c){if(e&1){let t=E();d(0,"div",7),v("pMotionOnBeforeEnter",function(i){g(t);let p=r();return b(p.onBeforeEnter(i))})("pMotionOnAfterLeave",function(){g(t);let i=r();return b(i.onAfterLeave())})("click",function(i){g(t);let p=r();return b(p.onOverlayClick(i))}),s(1,Gt,2,4,"ng-container",8)(2,me,8,10,"ng-template",null,0,h),_()}if(e&2){let t=V(3),n=r();u(n.cn(n.cx("root"),n.styleClass)),o("pMotion",n.computedVisible())("pMotionAppear",!0)("pMotionName","p-anchored-overlay")("pMotionOptions",n.computedMotionOptions())("pBind",n.ptm("root"))("ngStyle",n.style),l(),o("ngIf",n.headlessTemplate||n._headlessTemplate)("ngIfElse",t)}}var Ft=new J("CONFIRMPOPUP_INSTANCE"),de=(()=>{class e extends Ot{el;confirmationService;renderer;cd;overlayService;document;componentName="ConfirmPopup";$pcConfirmPopup=j(Ft,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=j(T,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}key;defaultFocus="accept";showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autoZIndex=!0;baseZIndex=0;style;styleClass;visible=B();_visible=L(!1);computedVisible=I(()=>this.visible()??this._visible());render=L(!1);motionOptions=B(void 0);computedMotionOptions=I(()=>O(O({},this.ptm("motion")),this.motionOptions()));appendTo=B("body");$appendTo=I(()=>this.appendTo()||this.config.overlayAppendTo());container;subscription;confirmation;autoFocusAccept=!1;autoFocusReject=!1;contentTemplate;acceptIconTemplate;rejectIconTemplate;headlessTemplate;acceptButtonViewChild=N("acceptButton",{read:m});rejectButtonViewChild=N("rejectButton",{read:m});_contentTemplate;_acceptIconTemplate;_rejectIconTemplate;_headlessTemplate;documentClickListener;documentResizeListener;scrollHandler;window;_componentStyle=j(q);constructor(t,n,i,p,a,zt){super(),this.el=t,this.confirmationService=n,this.renderer=i,this.cd=p,this.overlayService=a,this.document=zt,this.window=this.document.defaultView,this.subscription=this.confirmationService.requireConfirmation$.subscribe(x=>{if(!x){this.hide();return}this.computedVisible()&&requestAnimationFrame(()=>{this.alignOverlay(),this.cd.markForCheck()}),x.key===this.key&&(this.confirmation=x,Object.keys(x).forEach(U=>{this[U]=x[U]}),this.confirmation.accept&&(this.confirmation.acceptEvent=new k,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new k,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this._visible.set(!0))}),X(()=>{this.computedVisible()&&dt(()=>{this.render()||this.render.set(!0)})})}templates;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"rejecticon":this._rejectIconTemplate=t.template;break;case"accepticon":this._acceptIconTemplate=t.template;break;case"headless":this._headlessTemplate=t.template;break}})}option(t,n){let i=this;if(i.hasOwnProperty(t))return n?i[n]:i[t]}onEscapeKeydown(t){this.confirmation&&this.confirmation.closeOnEscape!==!1&&this.onReject()}onBeforeEnter(t){if(this.confirmation){let n=this.confirmation.defaultFocus??this.defaultFocus;this.autoFocusAccept=n==="accept",this.autoFocusReject=n==="reject"}this.container=t.element,this.appendOverlay(),this.alignOverlay(),this.alignArrow(),this.setZIndex(),this.handleFocus(),this.bindListeners()}handleFocus(){this.defaultFocus&&(this.acceptButtonViewChild()||this.rejectButtonViewChild())&&(this.defaultFocus==="accept"?z(this.acceptButtonViewChild()?.nativeElement,'[data-pc-section="root"]'):z(this.rejectButtonViewChild()?.nativeElement,'[data-pc-section="root"]')).focus()}onAfterLeave(){this.autoFocusAccept=!1,this.autoFocusReject=!1,this.restoreAppend(),this.onContainerDestroy()}getAcceptButtonProps(){return this.option("acceptButtonProps")}getRejectButtonProps(){return this.option("rejectButtonProps")}alignOverlay(){!this.confirmation||!this.confirmation.target||Tt(this.container,this.confirmation?.target,!1)}setZIndex(){this.autoZIndex&&Q.set("overlay",this.container,this.config.zIndex.overlay)}alignArrow(){let t=Z(this.container),n=Z(this.confirmation?.target),i=0;t&&n&&t.left<n.left&&(i=n.left-t.left),this.container&&this.container.style.setProperty("--p-confirmpopup-arrow-left",`${i}px`),t&&n&&t.top<n.top&&(this.container.setAttribute("data-p-confirmpopup-flipped","true"),!this.$unstyled()&&vt(this.container,"p-confirm-popup-flipped"))}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?P(this.document.body,this.container):P(this.$appendTo(),this.container))}restoreAppend(){this.container&&this.$appendTo()!=="self"&&P(this.el.nativeElement,this.container),this.onContainerDestroy()}hide(){this._visible.set(!1)}onAccept(){this.confirmation?.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide(),H(this.confirmation?.target)}onReject(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide(),H(this.confirmation?.target)}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}bindListeners(){setTimeout(()=>{this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()})}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let t=jt()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,t,i=>{if(this.confirmation&&this.confirmation.dismissableMask!==!1){let p=this.confirmation.target;this.container!==i.target&&!this.container?.contains(i.target)&&p!==i.target&&!p.contains(i.target)&&this.hide()}})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.computedVisible()&&!wt()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new kt(this.confirmation?.target,()=>{this.computedVisible()&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&Q.clear(this.container),this.confirmation=null,this.render.set(!1),this.container=null}get acceptButtonLabel(){return this.confirmation?.acceptLabel||this.config.getTranslation($.ACCEPT)}get rejectButtonLabel(){return this.confirmation?.rejectLabel||this.config.getTranslation($.REJECT)}onDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(n){return new(n||e)(f(m),f(Et),f(et),f(_t),f(It),f(G))};static \u0275cmp=nt({type:e,selectors:[["p-confirmpopup"]],contentQueries:function(n,i,p){if(n&1&&at(p,$t,4)(p,Qt,4)(p,qt,4)(p,Ut,4)(p,Bt,4),n&2){let a;C(a=y())&&(i.contentTemplate=a.first),C(a=y())&&(i.acceptIconTemplate=a.first),C(a=y())&&(i.rejectIconTemplate=a.first),C(a=y())&&(i.headlessTemplate=a.first),C(a=y())&&(i.templates=a)}},viewQuery:function(n,i){n&1&&st(i.acceptButtonViewChild,Kt,5,m)(i.rejectButtonViewChild,Wt,5,m),n&2&&lt(2)},hostBindings:function(n,i){n&1&&v("keydown.Escape",function(a){return i.onEscapeKeydown(a)},tt)},inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:[2,"autoZIndex","autoZIndex",ht],baseZIndex:[2,"baseZIndex","baseZIndex",gt],style:"style",styleClass:"styleClass",visible:[1,"visible"],motionOptions:[1,"motionOptions"],appendTo:[1,"appendTo"]},features:[ft([q,{provide:Ft,useExisting:e},{provide:Mt,useExisting:e}]),ot([T]),rt],decls:1,vars:1,consts:[["notHeadless",""],["content",""],["withoutContentTemplate",""],["icon",""],["rejecticon",""],["accepticontemplate",""],["pFocusTrap","","role","alertdialog",3,"pMotion","pMotionAppear","pMotionName","pMotionOptions","pBind","class","ngStyle"],["pFocusTrap","","role","alertdialog",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","click","pMotion","pMotionAppear","pMotionName","pMotionOptions","pBind","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],["type","button",3,"label","pt","class","styleClass","size","text","buttonProps","autofocus","unstyled","onClick",4,"ngIf"],["type","button",3,"label","pt","class","styleClass","size","buttonProps","autofocus","unstyled","onClick",4,"ngIf"],[3,"pBind","class",4,"ngIf"],["type","button",3,"onClick","label","pt","styleClass","size","text","buttonProps","autofocus","unstyled"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["type","button",3,"onClick","label","pt","styleClass","size","buttonProps","autofocus","unstyled"]],template:function(n,i){n&1&&ct(0,fe,4,10,"div",6),n&2&&pt(i.render()?0:-1)},dependencies:[xt,bt,yt,Ct,M,Rt,Lt,St,T,Dt,At],encapsulation:2,changeDetection:0})}return e})(),qe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=it({type:e});static \u0275inj=W({imports:[de,M,M]})}return e})();export{de as a,qe as b};
//# sourceMappingURL=chunk-55D5KRPE.js.map
