import{a as re}from"./chunk-3IIC2Y3P.js";import{a as ae}from"./chunk-ZESNIKYM.js";import{a as ne,f as le,i as oe,u as se}from"./chunk-3VIWJVLU.js";import{Aa as Z,Ba as f,Ra as ee,Ua as te,Wa as b,Xa as ie,f as m,g as d}from"./chunk-LGF24A6L.js";import{$b as U,Ab as K,Bb as R,Hc as C,Ib as j,Jb as q,Lb as P,N as T,Nb as u,O as S,Oa as V,P as B,Pc as r,Qb as Q,Qc as W,R as w,Sb as x,T as p,Tb as v,Z as O,_ as L,ab as F,bb as N,eb as D,fa as g,fb as M,gb as y,id as X,kc as H,na as c,nc as G,nd as Y,rb as A,ub as I,vb as k,xb as $,yb as z,zb as _,zc as J}from"./chunk-E5EQ6YZU.js";var ue=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var me=`
    ${ue}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,fe={root:({instance:i})=>["p-selectbutton p-component",{"p-invalid":i.invalid(),"p-selectbutton-fluid":i.fluid()}]},E=(()=>{class i extends ee{name="selectbutton";style=me;classes=fe;static \u0275fac=(()=>{let e;return function(n){return(e||(e=c(i)))(n||i)}})();static \u0275prov=S({token:i,factory:i.\u0275fac})}return i})();var be=["item"],he=(i,s)=>({$implicit:i,index:s});function ge(i,s){return this.getOptionLabel(s)}function ye(i,s){i&1&&j(0)}function _e(i,s){if(i&1&&y(0,ye,1,0,"ng-container",3),i&2){let e=u(2),t=e.$implicit,n=e.$index,l=u();_("ngTemplateOutlet",l.itemTemplate||l._itemTemplate)("ngTemplateOutletContext",G(2,he,t,n))}}function xe(i,s){i&1&&y(0,_e,1,5,"ng-template",null,0,J)}function ve(i,s){if(i&1){let e=q();K(0,"p-togglebutton",2),P("onChange",function(n){let l=O(e),o=l.$implicit,a=l.$index,h=u();return L(h.onOptionSelect(n,o,a))}),I(1,xe,2,0),R()}if(i&2){let e=s.$implicit,t=u();_("autofocus",t.autofocus)("styleClass",t.styleClass)("ngModel",t.isSelected(e))("onLabel",t.getOptionLabel(e))("offLabel",t.getOptionLabel(e))("disabled",t.$disabled()||t.isOptionDisabled(e))("allowEmpty",t.getAllowEmpty())("size",t.size())("fluid",t.fluid())("pt",t.ptm("pcToggleButton"))("unstyled",t.unstyled()),V(),k(t.itemTemplate||t._itemTemplate?1:-1)}}var de=new w("SELECTBUTTON_INSTANCE"),Ce={provide:ne,useExisting:T(()=>pe),multi:!0},pe=(()=>{class i extends ae{componentName="SelectButton";options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=C();fluid=C(void 0,{transform:r});onOptionClick=new g;onChange=new g;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=p(E);$pcSelectButton=p(de,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(b,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?m(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?m(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?m(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,t,n){if(this.$disabled()||this.isOptionDisabled(t))return;let l=this.isSelected(t);if(l&&this.unselectable)return;let o=this.getOptionValue(t),a;if(this.multiple)l?a=this.value.filter(h=>!d(h,o,this.equalityKey||void 0)):a=this.value?[...this.value,o]:[o];else{if(l&&!this.allowEmpty)return;a=l?null:o}this.focusedIndex=n,this.value=a,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:t,index:n})}changeTabIndexes(e,t){let n,l;for(let o=0;o<=this.el.nativeElement.children.length-1;o++)this.el.nativeElement.children[o].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[o],index:o});t==="prev"?n.index===0?l=this.el.nativeElement.children.length-1:l=n.index-1:n.index===this.el.nativeElement.children.length-1?l=0:l=n.index+1,this.focusedIndex=l,this.el.nativeElement.children[l].focus()}onFocus(e,t){this.focusedIndex=t}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(t=>!d(t,this.getOptionValue(e),this.dataKey))}isSelected(e){let t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let l of this.value)if(d(l,n,this.dataKey)){t=!0;break}}}else t=d(this.getOptionValue(e),this.value,this.equalityKey||void 0);return t}templates;onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="item"&&(this._itemTemplate=e.template)})}writeControlValue(e,t){this.value=e,t(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=c(i)))(n||i)}})();static \u0275cmp=F({type:i,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(t,n,l){if(t&1&&Q(l,be,4)(l,Z,4),t&2){let o;x(o=v())&&(n.itemTemplate=o.first),x(o=v())&&(n.templates=o)}},hostVars:5,hostBindings:function(t,n){t&2&&(A("role","group")("aria-labelledby",n.ariaLabelledBy)("data-p",n.dataP),U(n.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",r],tabindex:[2,"tabindex","tabindex",W],multiple:[2,"multiple","multiple",r],allowEmpty:[2,"allowEmpty","allowEmpty",r],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",r],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[H([Ce,E,{provide:de,useExisting:i},{provide:te,useExisting:i}]),D([b]),M],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt","unstyled"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt","unstyled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){t&1&&$(0,ve,2,12,"p-togglebutton",1,ge,!0),t&2&&z(n.options)},dependencies:[re,se,le,oe,Y,X,f,ie],encapsulation:2,changeDetection:0})}return i})(),Ge=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=N({type:i});static \u0275inj=B({imports:[pe,f,f]})}return i})();export{pe as a,Ge as b};
//# sourceMappingURL=chunk-EUJR53NQ.js.map
