import{a as K}from"./chunk-ZESNIKYM.js";import{a as J}from"./chunk-3VIWJVLU.js";import{e as U}from"./chunk-GTKEHP76.js";import{Aa as R,Ba as w,Ra as $,Ua as q,Wa as r,Xa as W}from"./chunk-LGF24A6L.js";import{$b as s,Ab as b,Bb as f,Hc as Q,Ib as L,Lb as m,N as v,Nb as N,O as T,Oa as h,P as C,Pc as k,Qb as x,Qc as j,R as _,Rb as H,Sb as u,T as c,Tb as p,_b as O,ab as E,bb as B,eb as I,fa as S,fb as V,gb as F,id as G,kc as z,mc as D,na as g,nd as P,rb as a,ub as M,vb as A,zb as d}from"./chunk-E5EQ6YZU.js";var X=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var ie=`
    ${X}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,oe={root:{position:"relative"}},ne={root:({instance:t})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":t.checked(),"p-disabled":t.$disabled(),"p-invalid":t.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},y=(()=>{class t extends ${name="toggleswitch";style=ie;classes=ne;inlineStyles=oe;static \u0275fac=(()=>{let i;return function(e){return(i||(i=g(t)))(e||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var le=["handle"],re=["input"],ae=t=>({checked:t});function de(t,ee){t&1&&L(0)}function se(t,ee){if(t&1&&F(0,de,1,0,"ng-container",3),t&2){let i=N();d("ngTemplateOutlet",i.handleTemplate||i._handleTemplate)("ngTemplateOutletContext",D(2,ae,i.checked()))}}var Y=new _("TOGGLESWITCH_INSTANCE"),ce={provide:J,useExisting:v(()=>Z),multi:!0},Z=(()=>{class t extends K{componentName="ToggleSwitch";$pcToggleSwitch=c(Y,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=Q();ariaLabelledBy;autofocus;onChange=new S;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=c(y);templates;onHostClick(i){this.onClick(i)}onAfterContentInit(){this.templates.forEach(i=>{i.getType()==="handle"?this._handleTemplate=i.template:this._handleTemplate=i.template})}onClick(i){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:i,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(i,o){o(i),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.checked(),disabled:this.$disabled(),invalid:this.invalid()})}static \u0275fac=(()=>{let i;return function(e){return(i||(i=g(t)))(e||t)}})();static \u0275cmp=E({type:t,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(o,e,n){if(o&1&&x(n,le,4)(n,R,4),o&2){let l;u(l=p())&&(e.handleTemplate=l.first),u(l=p())&&(e.templates=l)}},viewQuery:function(o,e){if(o&1&&H(re,5),o&2){let n;u(n=p())&&(e.input=n.first)}},hostVars:7,hostBindings:function(o,e){o&1&&m("click",function(l){return e.onHostClick(l)}),o&2&&(a("data-p-checked",e.checked())("data-p-disabled",e.$disabled())("data-p",e.dataP),O(e.sx("root")),s(e.cn(e.cx("root"),e.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",j],inputId:"inputId",readonly:[2,"readonly","readonly",k],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",k]},outputs:{onChange:"onChange"},features:[z([ce,y,{provide:Y,useExisting:t},{provide:q,useExisting:t}]),I([r]),V],decls:5,vars:22,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,e){o&1&&(b(0,"input",1,0),m("focus",function(){return e.onFocus()})("blur",function(){return e.onBlur()}),f(),b(2,"div",2)(3,"div",2),M(4,se,1,4,"ng-container"),f()()),o&2&&(s(e.cx("input")),d("checked",e.checked())("pAutoFocus",e.autofocus)("pBind",e.ptm("input")),a("id",e.inputId)("required",e.required()?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-checked",e.checked())("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("name",e.name())("tabindex",e.tabindex),h(2),s(e.cx("slider")),d("pBind",e.ptm("slider")),a("data-p",e.dataP),h(),s(e.cx("handle")),d("pBind",e.ptm("handle")),a("data-p",e.dataP),h(),A(e.handleTemplate||e._handleTemplate?4:-1))},dependencies:[P,G,U,w,W,r],encapsulation:2,changeDetection:0})}return t})(),Oe=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=B({type:t});static \u0275inj=C({imports:[Z,w,w]})}return t})();export{Z as a,Oe as b};
//# sourceMappingURL=chunk-OKVX5LJC.js.map
