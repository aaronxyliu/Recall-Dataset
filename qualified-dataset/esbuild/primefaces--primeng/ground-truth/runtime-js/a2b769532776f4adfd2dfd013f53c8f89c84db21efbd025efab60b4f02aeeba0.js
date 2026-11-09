import{b as se,c as ce}from"./chunk-CXSS7KAI.js";import{K as de,L as pe}from"./chunk-GTKEHP76.js";import{Aa as oe,Ba as C,Ra as le,Ua as ae,Va as re,Wa as h,Xa as w,pa as ie}from"./chunk-LGF24A6L.js";import{$ as F,$b as p,Ab as g,Bb as f,Cb as S,Dc as X,Gb as v,Hb as I,Hc as Y,Ib as b,Jb as P,Lb as O,Nb as s,O as V,Oa as l,Ob as G,P as Q,Pb as k,Pc as D,Qb as K,R as L,Rb as z,Sb as m,T as y,Tb as u,Xb as A,Z as E,_ as B,ab as j,ac as H,bb as W,bc as $,eb as R,ed as Z,fa as T,fb as q,gb as c,hd as ee,id as te,kc as J,na as x,nd as ne,rb as _,zb as i,zc as U}from"./chunk-E5EQ6YZU.js";import{a as M}from"./chunk-CIY7H4US.js";var ge=`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        color: dt('fieldset.legend.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-fieldset-content-wrapper {
        min-height: 0;
    }

    .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`;var ue={root:({instance:t})=>["p-fieldset p-component",{"p-fieldset-toggleable":t.toggleable,"p-fieldset-collapsed":t.collapsed&&t.toggleable}],legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",contentWrapper:"p-fieldset-content-wrapper",content:"p-fieldset-content"},N=(()=>{class t extends le{name="fieldset";style=ge;classes=ue;static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var _e=["header"],be=["expandicon"],he=["collapseicon"],ye=["content"],Te=["contentWrapper"],xe=["*",[["p-header"]]],ve=["*","p-header"];function Ie(t,d){if(t&1&&(F(),S(0,"svg",11)),t&2){let e=s(3);p(e.cx("toggleIcon")),i("pBind",e.ptm("toggleIcon"))}}function Ce(t,d){t&1&&b(0)}function we(t,d){if(t&1&&(g(0,"span",3),c(1,Ce,1,0,"ng-container",6),f()),t&2){let e=s(3);p(e.cx("toggleIcon")),i("pBind",e.ptm("toggleIcon")),l(),i("ngTemplateOutlet",e.expandIconTemplate||e._expandIconTemplate)}}function Me(t,d){if(t&1&&(v(0),c(1,Ie,1,3,"svg",9)(2,we,2,4,"span",10),I()),t&2){let e=s(2);l(),i("ngIf",!e.expandIconTemplate&&!e._expandIconTemplate),l(),i("ngIf",e.expandIconTemplate||e._expandIconTemplate)}}function Ee(t,d){if(t&1&&(F(),S(0,"svg",13)),t&2){let e=s(3);p(e.cx("toggleIcon")),i("pBind",e.ptm("toggleIcon")),_("aria-hidden",!0)}}function Be(t,d){t&1&&b(0)}function Fe(t,d){if(t&1&&(g(0,"span",3),c(1,Be,1,0,"ng-container",6),f()),t&2){let e=s(3);p(e.cx("toggleIcon")),i("pBind",e.ptm("toggleIcon")),l(),i("ngTemplateOutlet",e.collapseIconTemplate||e._collapseIconTemplate)}}function Se(t,d){if(t&1&&(v(0),c(1,Ee,1,4,"svg",12)(2,Fe,2,4,"span",10),I()),t&2){let e=s(2);l(),i("ngIf",!e.collapseIconTemplate&&!e._collapseIconTemplate),l(),i("ngIf",e.collapseIconTemplate||e._collapseIconTemplate)}}function Oe(t,d){t&1&&b(0)}function ke(t,d){if(t&1){let e=P();v(0),g(1,"button",7),O("click",function(n){E(e);let a=s();return B(a.toggle(n))})("keydown",function(n){E(e);let a=s();return B(a.onKeyDown(n))}),c(2,Me,3,2,"ng-container",8)(3,Se,3,2,"ng-container",8)(4,Oe,1,0,"ng-container",6),f(),I()}if(t&2){let e=s(),o=A(4);l(),p(e.cx("toggleButton")),i("pBind",e.ptm("toggleButton")),_("id",e.id+"_header")("aria-controls",e.id+"_content")("aria-expanded",!e.collapsed)("aria-label",e.buttonAriaLabel),l(),i("ngIf",e.collapsed),l(),i("ngIf",!e.collapsed),l(),i("ngTemplateOutlet",o)}}function Ae(t,d){t&1&&b(0)}function De(t,d){if(t&1&&(g(0,"span",3),H(1),f(),k(2,1),c(3,Ae,1,0,"ng-container",6)),t&2){let e=s();p(e.cx("legendLabel")),i("pBind",e.ptm("legendLabel")),l(),$(e.legend),l(2),i("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Ne(t,d){t&1&&b(0)}var fe=new L("FIELDSET_INSTANCE"),Ve=(()=>{class t extends re{componentName="Fieldset";$pcFieldset=y(fe,{optional:!0,skipSelf:!0})??void 0;_componentStyle=y(N);bindDirectiveInstance=y(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}get dataP(){return this.cn({toggleable:this.toggleable})}legend;toggleable;style;styleClass;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";motionOptions=Y(void 0);computedMotionOptions=X(()=>M(M({},this.ptm("motion")),this.motionOptions()));collapsedChange=new T;onBeforeToggle=new T;onAfterToggle=new T;contentWrapperViewChild;_id=ie("pn_id_");get id(){return this._id}get buttonAriaLabel(){return this.legend}_collapsed;get collapsed(){return this._collapsed}set collapsed(e){this._collapsed=e}headerTemplate;expandIconTemplate;collapseIconTemplate;contentTemplate;toggle(e){this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed}),this.collapsed?this.expand():this.collapse(),e.preventDefault()}onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}expand(){this._collapsed=!1,this.collapsedChange.emit(!1),this.updateTabIndex()}collapse(){this._collapsed=!0,this.collapsedChange.emit(!0),this.updateTabIndex()}getBlockableElement(){return this.el.nativeElement.children[0]}updateTabIndex(){this.contentWrapperViewChild&&this.contentWrapperViewChild.nativeElement.querySelectorAll("input, button, select, a, textarea, [tabindex]").forEach(o=>{this.collapsed?o.setAttribute("tabindex","-1"):o.removeAttribute("tabindex")})}onToggleDone(e){this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed})}_headerTemplate;_expandIconTemplate;_collapseIconTemplate;_contentTemplate;templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"expandicon":this._expandIconTemplate=e.template;break;case"collapseicon":this._collapseIconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=x(t)))(n||t)}})();static \u0275cmp=j({type:t,selectors:[["p-fieldset"]],contentQueries:function(o,n,a){if(o&1&&K(a,_e,4)(a,be,4)(a,he,4)(a,ye,4)(a,oe,4),o&2){let r;m(r=u())&&(n.headerTemplate=r.first),m(r=u())&&(n.expandIconTemplate=r.first),m(r=u())&&(n.collapseIconTemplate=r.first),m(r=u())&&(n.contentTemplate=r.first),m(r=u())&&(n.templates=r)}},viewQuery:function(o,n){if(o&1&&z(Te,5),o&2){let a;m(a=u())&&(n.contentWrapperViewChild=a.first)}},inputs:{legend:"legend",toggleable:[2,"toggleable","toggleable",D],style:"style",styleClass:"styleClass",transitionOptions:"transitionOptions",motionOptions:[1,"motionOptions"],collapsed:[2,"collapsed","collapsed",D]},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[J([N,{provide:fe,useExisting:t},{provide:ae,useExisting:t}]),R([h]),q],ngContentSelectors:ve,decls:11,vars:28,consts:[["legendContent",""],["contentWrapper",""],[3,"ngStyle","pBind"],[3,"pBind"],[4,"ngIf","ngIfElse"],["pMotionName","p-collapsible","role","region",3,"pMotionOnAfterEnter","pMotionOnAfterLeave","pBind","pMotion","pMotionOptions","id"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown","pBind"],[4,"ngIf"],["data-p-icon","plus",3,"class","pBind",4,"ngIf"],[3,"class","pBind",4,"ngIf"],["data-p-icon","plus",3,"pBind"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],["data-p-icon","minus",3,"pBind"]],template:function(o,n){if(o&1&&(G(xe),g(0,"fieldset",2)(1,"legend",3),c(2,ke,5,10,"ng-container",4)(3,De,4,5,"ng-template",null,0,U),f(),g(5,"div",5),O("pMotionOnAfterEnter",function(r){return n.onToggleDone(r)})("pMotionOnAfterLeave",function(r){return n.onToggleDone(r)}),g(6,"div",3)(7,"div",3,1),k(9),c(10,Ne,1,0,"ng-container",6),f()()()()),o&2){let a=A(4);p(n.cn(n.cx("root"),n.styleClass)),i("ngStyle",n.style)("pBind",n.ptm("root")),_("id",n.id)("data-p",n.dataP),l(),p(n.cx("legend")),i("pBind",n.ptm("legend")),_("data-p",n.dataP),l(),i("ngIf",n.toggleable)("ngIfElse",a),l(3),p(n.cx("contentContainer")),i("pBind",n.ptm("contentContainer"))("pMotion",!n.toggleable||n.toggleable&&!n.collapsed)("pMotionOptions",n.computedMotionOptions())("id",n.id+"_content"),_("aria-labelledby",n.id+"_header")("aria-hidden",n.collapsed)("tabindex",n.collapsed?"-1":void 0),l(),p(n.cx("contentWrapper")),i("pBind",n.ptm("contentWrapper")),l(),p(n.cx("content")),i("pBind",n.ptm("content")),l(3),i("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)}},dependencies:[ne,Z,te,ee,de,pe,C,w,h,ce,se],encapsulation:2,changeDetection:0})}return t})(),pt=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=W({type:t});static \u0275inj=Q({imports:[Ve,C,w,C,w]})}return t})();export{Ve as a,pt as b};
//# sourceMappingURL=chunk-B76O6XSF.js.map
