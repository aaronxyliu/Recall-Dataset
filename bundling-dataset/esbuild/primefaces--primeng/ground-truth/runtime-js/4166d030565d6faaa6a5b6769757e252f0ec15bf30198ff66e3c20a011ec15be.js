import{b as fe,c as me}from"./chunk-CXSS7KAI.js";import{c as y}from"./chunk-B6CBLI2Q.js";import{d as ue}from"./chunk-GTKEHP76.js";import{Aa as le,B as ie,Ba as v,H as b,Ma as pe,O as ne,Ra as ce,Ua as de,Va as he,Wa as c,Z as M,ha as re,ia as se,s as oe,wa as ae}from"./chunk-LGF24A6L.js";import{$b as O,Ab as k,Bb as j,Dc as S,Hc as L,Jb as Q,Lb as u,Na as H,Nb as r,O as E,Oa as _,Ob as W,P as V,Pb as q,Pc as f,Qb as K,Qc as G,R as P,Sb as x,T as a,Tb as T,Z as l,_ as p,_b as U,ab as B,bb as N,eb as R,fa as C,fb as z,ga as A,gb as w,hd as J,id as ee,kc as X,mc as Y,na as d,nd as te,rb as Z,rd as m,ub as F,vb as $,zb as h}from"./chunk-E5EQ6YZU.js";import{a as g}from"./chunk-CIY7H4US.js";var be=`
    .p-popover {
        margin-block-start: dt('popover.gutter');
        background: dt('popover.background');
        color: dt('popover.color');
        border: 1px solid dt('popover.border.color');
        border-radius: dt('popover.border.radius');
        box-shadow: dt('popover.shadow');
        will-change: transform;
    }

    .p-popover-content {
        padding: dt('popover.content.padding');
    }

    .p-popover-flipped {
        margin-block-start: calc(dt('popover.gutter') * -1);
        margin-block-end: dt('popover.gutter');
    }

    .p-popover:after,
    .p-popover:before {
        bottom: 100%;
        left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-popover:after {
        border-width: calc(dt('popover.gutter') - 2px);
        margin-left: calc(-1 * (dt('popover.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.background');
    }

    .p-popover:before {
        border-width: dt('popover.gutter');
        margin-left: calc(-1 * dt('popover.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.border.color');
    }

    .p-popover-flipped:after,
    .p-popover-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-popover.p-popover-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('popover.background');
    }

    .p-popover.p-popover-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('popover.border.color');
    }
`;var ge={root:()=>({position:"absolute"})},Ce={root:"p-popover p-component",content:"p-popover-content"},I=(()=>{class o extends ce{name="popover";style=be;classes=Ce;inlineStyles=ge;static \u0275fac=(()=>{let e;return function(i){return(e||(e=d(o)))(i||o)}})();static \u0275prov=E({token:o,factory:o.\u0275fac})}return o})();var _e=["content"],we=["*"],ke=o=>({closeCallback:o});function xe(o,D){}function Te(o,D){o&1&&w(0,xe,0,0,"ng-template")}function Oe(o,D){if(o&1){let e=Q();k(0,"div",1),u("click",function(i){l(e);let n=r();return p(n.onOverlayClick(i))})("pMotionOnEnter",function(i){l(e);let n=r();return p(n.onAnimationStart(i))})("pMotionOnAfterLeave",function(){l(e);let i=r();return p(i.onAnimationEnd())}),k(1,"div",2),u("click",function(i){l(e);let n=r();return p(n.onContentClick(i))})("mousedown",function(i){l(e);let n=r();return p(n.onContentClick(i))}),q(2),w(3,Te,1,0,null,3),j()()}if(o&2){let e=r();U(e.sx("root")),O(e.cn(e.cx("root"),e.styleClass)),h("pBind",e.ptm("root"))("ngStyle",e.style)("pMotion",e.overlayVisible)("pMotionAppear",!0)("pMotionOptions",e.computedMotionOptions()),Z("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),_(),O(e.cx("content")),h("pBind",e.ptm("content")),_(2),h("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Y(17,ke,e.onCloseClick.bind(e)))}}var ve=new P("POPOVER_INSTANCE"),Se=(()=>{class o extends he{componentName="Popover";$pcPopover=a(ve,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo=L("body");autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";motionOptions=L(void 0);computedMotionOptions=S(()=>g(g({},this.ptm("motion")),this.motionOptions()));onShow=new C;onHide=new C;$appendTo=S(()=>this.appendTo()||this.config.overlayAppendTo());container;overlayVisible=!1;render=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=a(I);zone=a(A);overlayService=a(ae);onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="content"&&(this._contentTemplate=e.template)})}bindDocumentClickListener(){if(m(this.platformId)&&!this.documentClickListener){let e=re()?"touchstart":"click",t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(t,e,i=>{this.dismissable&&(!this.container?.contains(i.target)&&this.target!==i.target&&!this.target.contains(i.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,t){this.overlayVisible?(this.hasTargetChanged(e,t)&&(this.destroyCallback=()=>{this.show(null,t||e.currentTarget||e.target)}),this.hide()):this.show(e,t)}show(e,t){t&&e&&e.stopPropagation(),this.container&&!this.overlayVisible&&(this.container=null),this.target=t||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck()}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let t=e.target;this.selfClick=e.offsetX<t.clientWidth&&e.offsetY<t.clientHeight}hasTargetChanged(e,t){return this.target!=null&&this.target!==(t||e.currentTarget||e.target)}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?b(this.document.body,this.container):b(this.$appendTo(),this.container))}restoreAppend(){this.container&&this.$appendTo()&&this.$appendTo()!=="self"&&b(this.el.nativeElement,this.container)}setZIndex(){this.autoZIndex&&y.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay)}align(){if(this.target&&this.container){ie(this.container,this.target,!1);let e=M(this.container),t=M(this.target),i=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),n=0;e.left<t.left&&(n=t.left-e.left-parseFloat(i)*2),this.container.style.setProperty(pe("popover.arrow.left").name,`${n}px`),e.top<t.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.$unstyled()&&oe(this.container,"p-popover-flipped"))}}onAnimationStart(e){this.container=e.element,this.container?.setAttribute(this.$attrSelector,""),this.appendOverlay(),this.align(),this.setZIndex(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=t=>{this.container&&this.container.contains(t.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)}onAnimationEnd(){this.overlayVisible||(this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.autoZIndex&&y.clear(this.container),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1,this.container=null)}focus(){let e=ne(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!se()&&this.hide()}bindDocumentResizeListener(){if(m(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){m(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new ue(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&y.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=d(o)))(i||o)}})();static \u0275cmp=B({type:o,selectors:[["p-popover"]],contentQueries:function(t,i,n){if(t&1&&K(n,_e,4)(n,le,4),t&2){let s;x(s=T())&&(i.contentTemplate=s.first),x(s=T())&&(i.templates=s)}},hostBindings:function(t,i){t&1&&u("keydown.escape",function(s){return i.onEscapeKeydown(s)},H)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",f],style:"style",styleClass:"styleClass",appendTo:[1,"appendTo"],autoZIndex:[2,"autoZIndex","autoZIndex",f],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",G],focusOnShow:[2,"focusOnShow","focusOnShow",f],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"]},outputs:{onShow:"onShow",onHide:"onHide"},features:[X([I,{provide:ve,useExisting:o},{provide:de,useExisting:o}]),R([c]),z],ngContentSelectors:we,decls:1,vars:1,consts:[["role","dialog","pMotionName","p-anchored-overlay",3,"pBind","class","style","ngStyle","pMotion","pMotionAppear","pMotionOptions"],["role","dialog","pMotionName","p-anchored-overlay",3,"click","pMotionOnEnter","pMotionOnAfterLeave","pBind","ngStyle","pMotion","pMotionAppear","pMotionOptions"],[3,"click","mousedown","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,i){t&1&&(W(),F(0,Oe,4,19,"div",0)),t&2&&$(i.render?0:-1)},dependencies:[te,ee,J,v,c,me,fe],encapsulation:2,changeDetection:0})}return o})(),tt=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=N({type:o});static \u0275inj=V({imports:[Se,v,v]})}return o})();export{Se as a,tt as b};
//# sourceMappingURL=chunk-P62DCXWY.js.map
