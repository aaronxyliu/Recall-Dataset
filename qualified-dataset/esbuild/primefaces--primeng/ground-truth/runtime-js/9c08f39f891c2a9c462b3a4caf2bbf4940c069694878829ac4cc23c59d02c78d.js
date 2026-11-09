import{X as oe}from"./chunk-GTKEHP76.js";import{Aa as Z,Ba as C,Ca as ee,Ra as ne,Ua as te,Va as ie,Wa as v}from"./chunk-LGF24A6L.js";import{$ as A,$b as m,Ab as _,Bb as g,Cb as R,Gb as w,Hb as T,Ja as N,Jb as h,Lb as u,Nb as r,O as S,Oa as p,Ob as K,P,Pb as L,Pc as B,Qb as O,R as M,Sb as k,T as b,Tb as E,Xb as Q,Z as s,_ as l,_b as H,ab as j,ac as $,bb as F,bc as q,bd as J,eb as z,ed as W,fa as I,fb as D,gb as d,id as X,kc as G,na as y,nd as Y,rb as f,zb as c,zc as U}from"./chunk-E5EQ6YZU.js";var re=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var pe={root:({instance:n})=>({display:!n.visible&&"none"})},se={root:({instance:n})=>["p-chip p-component",{"p-disabled":n.disabled}],image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},V=(()=>{class n extends ne{name="chip";style=re;classes=se;inlineStyles=pe;static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(n)))(i||n)}})();static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();var le=["removeicon"],me=["*"];function de(n,a){if(n&1){let e=h();_(0,"img",4),u("error",function(i){s(e);let o=r();return l(o.imageError(i))}),g()}if(n&2){let e=r();m(e.cx("image")),c("pBind",e.ptm("image"))("src",e.image,N)("alt",e.alt)}}function _e(n,a){if(n&1&&R(0,"span",6),n&2){let e=r(2);m(e.icon),c("pBind",e.ptm("icon"))("ngClass",e.cx("icon"))}}function ge(n,a){if(n&1&&d(0,_e,1,4,"span",5),n&2){let e=r();c("ngIf",e.icon)}}function fe(n,a){if(n&1&&(_(0,"div",7),$(1),g()),n&2){let e=r();m(e.cx("label")),c("pBind",e.ptm("label")),p(),q(e.label)}}function he(n,a){if(n&1){let e=h();_(0,"span",11),u("click",function(i){s(e);let o=r(3);return l(o.close(i))})("keydown",function(i){s(e);let o=r(3);return l(o.onKeydown(i))}),g()}if(n&2){let e=r(3);m(e.removeIcon),c("pBind",e.ptm("removeIcon"))("ngClass",e.cx("removeIcon")),f("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function ue(n,a){if(n&1){let e=h();A(),_(0,"svg",12),u("click",function(i){s(e);let o=r(3);return l(o.close(i))})("keydown",function(i){s(e);let o=r(3);return l(o.onKeydown(i))}),g()}if(n&2){let e=r(3);m(e.cx("removeIcon")),c("pBind",e.ptm("removeIcon")),f("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function ve(n,a){if(n&1&&(w(0),d(1,he,1,6,"span",9)(2,ue,1,5,"svg",10),T()),n&2){let e=r(2);p(),c("ngIf",e.removeIcon),p(),c("ngIf",!e.removeIcon)}}function xe(n,a){}function be(n,a){n&1&&d(0,xe,0,0,"ng-template")}function ye(n,a){if(n&1){let e=h();_(0,"span",13),u("click",function(i){s(e);let o=r(2);return l(o.close(i))})("keydown",function(i){s(e);let o=r(2);return l(o.onKeydown(i))}),d(1,be,1,0,null,14),g()}if(n&2){let e=r(2);m(e.cx("removeIcon")),c("pBind",e.ptm("removeIcon")),f("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel),p(),c("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function Ce(n,a){if(n&1&&(w(0),d(1,ve,3,2,"ng-container",3)(2,ye,2,6,"span",8),T()),n&2){let e=r();p(),c("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),p(),c("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var ce=new M("CHIP_INSTANCE"),Ie=(()=>{class n extends ie{componentName="Chip";$pcChip=b(ce,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=b(v,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;alt;styleClass;disabled=!1;removable=!1;removeIcon;onRemove=new I;onImageError=new I;visible=!0;get removeAriaLabel(){return this.config.getTranslation(ee.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([t,i])=>this[`_${t}`]!==i&&(this[`_${t}`]=i))}_chipProps;_componentStyle=b(V);removeIconTemplate;templates;_removeIconTemplate;onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="removeicon"?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}onChanges(e){if(e.chipProps&&e.chipProps.currentValue){let{currentValue:t}=e.chipProps;t.label!==void 0&&(this.label=t.label),t.icon!==void 0&&(this.icon=t.icon),t.image!==void 0&&(this.image=t.image),t.alt!==void 0&&(this.alt=t.alt),t.styleClass!==void 0&&(this.styleClass=t.styleClass),t.removable!==void 0&&(this.removable=t.removable),t.removeIcon!==void 0&&(this.removeIcon=t.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.removable})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(n)))(i||n)}})();static \u0275cmp=j({type:n,selectors:[["p-chip"]],contentQueries:function(t,i,o){if(t&1&&O(o,le,4)(o,Z,4),t&2){let x;k(x=E())&&(i.removeIconTemplate=x.first),k(x=E())&&(i.templates=x)}},hostVars:6,hostBindings:function(t,i){t&2&&(f("aria-label",i.label)("data-p",i.dataP),H(i.sx("root")),m(i.cn(i.cx("root"),i.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",styleClass:"styleClass",disabled:[2,"disabled","disabled",B],removable:[2,"removable","removable",B],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[G([V,{provide:ce,useExisting:n},{provide:te,useExisting:n}]),z([v]),D],ngContentSelectors:me,decls:6,vars:4,consts:[["iconTemplate",""],[3,"pBind","class","src","alt","error",4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"],[4,"ngIf"],[3,"error","pBind","src","alt"],[3,"pBind","class","ngClass",4,"ngIf"],[3,"pBind","ngClass"],[3,"pBind"],["role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"pBind","class","ngClass","click","keydown",4,"ngIf"],["data-p-icon","times-circle","role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"click","keydown","pBind","ngClass"],["data-p-icon","times-circle","role","button",3,"click","keydown","pBind"],["role","button",3,"click","keydown","pBind"],[4,"ngTemplateOutlet"]],template:function(t,i){if(t&1&&(K(),L(0),d(1,de,1,5,"img",1)(2,ge,1,1,"ng-template",null,0,U)(4,fe,2,4,"div",2)(5,Ce,3,2,"ng-container",3)),t&2){let o=Q(3);p(),c("ngIf",i.image)("ngIfElse",o),p(3),c("ngIf",i.label),p(),c("ngIf",i.removable)}},dependencies:[Y,J,W,X,oe,C,v],encapsulation:2,changeDetection:0})}return n})(),$e=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=F({type:n});static \u0275inj=P({imports:[Ie,C,C]})}return n})();export{Ie as a,$e as b};
//# sourceMappingURL=chunk-EUCU27CG.js.map
