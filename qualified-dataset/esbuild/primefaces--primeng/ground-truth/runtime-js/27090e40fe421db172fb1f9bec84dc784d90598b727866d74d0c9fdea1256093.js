import{a as Ie}from"./chunk-7PMVKBD4.js";import{a as we}from"./chunk-HDR4XZHF.js";import{a as xe,e as ye}from"./chunk-3VIWJVLU.js";import{W as ge,e as fe,q as _e,t as be}from"./chunk-GTKEHP76.js";import{$ as pe,Aa as ce,Ba as z,Ra as me,Ua as de,Wa as L,Xa as he}from"./chunk-LGF24A6L.js";import{$ as S,$b as y,Ab as E,Bb as V,Cb as C,Gb as k,Hb as M,Jb as F,Lb as D,N as j,Nb as s,O as q,Oa as d,P as Q,Pc as B,Qb as ne,Qc as $,R as H,Rb as ie,Sb as R,T as A,Tb as U,Xa as X,Z as h,_ as f,ab as Y,ba as W,bb as Z,bd as oe,eb as ee,ed as ue,fa as N,fb as te,gb as b,hd as se,id as ae,kc as re,na as J,nd as le,rb as T,zb as a}from"./chunk-E5EQ6YZU.js";import{a as O,b as K}from"./chunk-CIY7H4US.js";var Ce=`
    .p-inputnumber {
        display: inline-flex;
        position: relative;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        cursor: pointer;
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
        border: 0 none;
    }

    .p-inputnumber-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
        position: absolute;
        inset-block-start: 1px;
        inset-inline-end: 1px;
        height: calc(100% - 2px);
        z-index: 1;
    }

    .p-inputnumber-stacked .p-inputnumber-increment-button {
        padding: 0;
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-end: 0 none;
    }

    .p-inputnumber-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-vertical .p-inputnumber-decrement-button {
        order: 3;
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-start: 0 none;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-inputnumber-fluid {
        width: 100%;
    }

    .p-inputnumber-fluid .p-inputnumber-input {
        width: 1%;
    }

    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
        width: 100%;
    }

    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-stacked:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + (dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`;var Ve=`
    ${Ce}

    /* For PrimeNG */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,De={root:({instance:r})=>["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":r.$filled()||r.allowEmpty===!1,"p-inputwrapper-focus":r.focused,"p-inputnumber-stacked":r.showButtons&&r.buttonLayout==="stacked","p-inputnumber-horizontal":r.showButtons&&r.buttonLayout==="horizontal","p-inputnumber-vertical":r.showButtons&&r.buttonLayout==="vertical","p-inputnumber-fluid":r.hasFluid,"p-invalid":r.invalid()}],pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:r})=>["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":r.showButtons&&r.max()!=null&&r.maxlength()}],decrementButton:({instance:r})=>["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":r.showButtons&&r.min()!=null&&r.minlength()}],clearIcon:"p-inputnumber-clear-icon"},P=(()=>{class r extends me{name="inputnumber";style=Ve;classes=De;static \u0275fac=(()=>{let e;return function(t){return(e||(e=J(r)))(t||r)}})();static \u0275prov=q({token:r,factory:r.\u0275fac})}return r})();var Se=["clearicon"],Ne=["incrementbuttonicon"],ke=["decrementbuttonicon"],Me=["input"];function Fe(r,m){if(r&1){let e=F();S(),E(0,"svg",7),D("click",function(){h(e);let t=s(2);return f(t.clear())}),V()}if(r&2){let e=s(2);y(e.cx("clearIcon")),a("pBind",e.ptm("clearIcon"))}}function Re(r,m){}function Ue(r,m){r&1&&b(0,Re,0,0,"ng-template")}function Le(r,m){if(r&1){let e=F();E(0,"span",8),D("click",function(){h(e);let t=s(2);return f(t.clear())}),b(1,Ue,1,0,null,9),V()}if(r&2){let e=s(2);y(e.cx("clearIcon")),a("pBind",e.ptm("clearIcon")),d(),a("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Ae(r,m){if(r&1&&(k(0),b(1,Fe,1,3,"svg",5)(2,Le,2,4,"span",6),M()),r&2){let e=s();d(),a("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),d(),a("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function $e(r,m){if(r&1&&C(0,"span",13),r&2){let e=s(2);a("pBind",e.ptm("incrementButtonIcon"))("ngClass",e.incrementButtonIcon)}}function ze(r,m){if(r&1&&(S(),C(0,"svg",15)),r&2){let e=s(3);a("pBind",e.ptm("incrementButtonIcon"))}}function Pe(r,m){}function Ge(r,m){r&1&&b(0,Pe,0,0,"ng-template")}function Oe(r,m){if(r&1&&(k(0),b(1,ze,1,1,"svg",14)(2,Ge,1,0,null,9),M()),r&2){let e=s(2);d(),a("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),d(),a("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Ke(r,m){if(r&1&&C(0,"span",13),r&2){let e=s(2);a("pBind",e.ptm("decrementButtonIcon"))("ngClass",e.decrementButtonIcon)}}function je(r,m){if(r&1&&(S(),C(0,"svg",17)),r&2){let e=s(3);a("pBind",e.ptm("decrementButtonIcon"))}}function qe(r,m){}function Qe(r,m){r&1&&b(0,qe,0,0,"ng-template")}function He(r,m){if(r&1&&(k(0),b(1,je,1,1,"svg",16)(2,Qe,1,0,null,9),M()),r&2){let e=s(2);d(),a("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),d(),a("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function We(r,m){if(r&1){let e=F();E(0,"span",10)(1,"button",11),D("mousedown",function(t){h(e);let i=s();return f(i.onUpButtonMouseDown(t))})("mouseup",function(){h(e);let t=s();return f(t.onUpButtonMouseUp())})("mouseleave",function(){h(e);let t=s();return f(t.onUpButtonMouseLeave())})("keydown",function(t){h(e);let i=s();return f(i.onUpButtonKeyDown(t))})("keyup",function(){h(e);let t=s();return f(t.onUpButtonKeyUp())}),b(2,$e,1,2,"span",12)(3,Oe,3,2,"ng-container",2),V(),E(4,"button",11),D("mousedown",function(t){h(e);let i=s();return f(i.onDownButtonMouseDown(t))})("mouseup",function(){h(e);let t=s();return f(t.onDownButtonMouseUp())})("mouseleave",function(){h(e);let t=s();return f(t.onDownButtonMouseLeave())})("keydown",function(t){h(e);let i=s();return f(i.onDownButtonKeyDown(t))})("keyup",function(){h(e);let t=s();return f(t.onDownButtonKeyUp())}),b(5,Ke,1,2,"span",12)(6,He,3,2,"ng-container",2),V()()}if(r&2){let e=s();y(e.cx("buttonGroup")),a("pBind",e.ptm("buttonGroup")),T("data-p",e.dataP),d(),y(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),a("pBind",e.ptm("incrementButton")),T("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-p",e.dataP),d(),a("ngIf",e.incrementButtonIcon),d(),a("ngIf",!e.incrementButtonIcon),d(),y(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),a("pBind",e.ptm("decrementButton")),T("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-p",e.dataP),d(),a("ngIf",e.decrementButtonIcon),d(),a("ngIf",!e.decrementButtonIcon)}}function Je(r,m){if(r&1&&C(0,"span",13),r&2){let e=s(2);a("pBind",e.ptm("incrementButtonIcon"))("ngClass",e.incrementButtonIcon)}}function Xe(r,m){if(r&1&&(S(),C(0,"svg",15)),r&2){let e=s(3);a("pBind",e.ptm("incrementButtonIcon"))}}function Ye(r,m){}function Ze(r,m){r&1&&b(0,Ye,0,0,"ng-template")}function et(r,m){if(r&1&&(k(0),b(1,Xe,1,1,"svg",14)(2,Ze,1,0,null,9),M()),r&2){let e=s(2);d(),a("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),d(),a("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function tt(r,m){if(r&1){let e=F();E(0,"button",11),D("mousedown",function(t){h(e);let i=s();return f(i.onUpButtonMouseDown(t))})("mouseup",function(){h(e);let t=s();return f(t.onUpButtonMouseUp())})("mouseleave",function(){h(e);let t=s();return f(t.onUpButtonMouseLeave())})("keydown",function(t){h(e);let i=s();return f(i.onUpButtonKeyDown(t))})("keyup",function(){h(e);let t=s();return f(t.onUpButtonKeyUp())}),b(1,Je,1,2,"span",12)(2,et,3,2,"ng-container",2),V()}if(r&2){let e=s();y(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),a("pBind",e.ptm("incrementButton")),T("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-p",e.dataP),d(),a("ngIf",e.incrementButtonIcon),d(),a("ngIf",!e.incrementButtonIcon)}}function nt(r,m){if(r&1&&C(0,"span",13),r&2){let e=s(2);a("pBind",e.ptm("decrementButtonIcon"))("ngClass",e.decrementButtonIcon)}}function it(r,m){if(r&1&&(S(),C(0,"svg",17)),r&2){let e=s(3);a("pBind",e.ptm("decrementButtonIcon"))}}function rt(r,m){}function ot(r,m){r&1&&b(0,rt,0,0,"ng-template")}function ut(r,m){if(r&1&&(k(0),b(1,it,1,1,"svg",16)(2,ot,1,0,null,9),M()),r&2){let e=s(2);d(),a("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),d(),a("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function st(r,m){if(r&1){let e=F();E(0,"button",11),D("mousedown",function(t){h(e);let i=s();return f(i.onDownButtonMouseDown(t))})("mouseup",function(){h(e);let t=s();return f(t.onDownButtonMouseUp())})("mouseleave",function(){h(e);let t=s();return f(t.onDownButtonMouseLeave())})("keydown",function(t){h(e);let i=s();return f(i.onDownButtonKeyDown(t))})("keyup",function(){h(e);let t=s();return f(t.onDownButtonKeyUp())}),b(1,nt,1,2,"span",12)(2,ut,3,2,"ng-container",2),V()}if(r&2){let e=s();y(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),a("pBind",e.ptm("decrementButton")),T("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-p",e.dataP),d(),a("ngIf",e.decrementButtonIcon),d(),a("ngIf",!e.decrementButtonIcon)}}var Be=new H("INPUTNUMBER_INSTANCE"),at={provide:xe,useExisting:j(()=>ve),multi:!0},ve=(()=>{class r extends Ie{injector;componentName="InputNumber";$pcInputNumber=A(Be,{optional:!0,skipSelf:!0})??void 0;_componentStyle=A(P);bindDirectiveInstance=A(L,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;placeholder;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;autocomplete;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;onInput=new N;onFocus=new N;onBlur=new N;onKeyDown=new N;onClear=new N;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar="";_group;_minusSign;_currency;_prefix;_suffix;_index;ngControl=null;constructor(e){super(),this.injector=e}onChanges(e){["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(t=>!!e[t])&&this.updateConstructParser()}onInit(){this.ngControl=this.injector.get(ye,null,{optional:!0}),this.constructParser(),this.initialized=!0}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){let e=(o,u,l)=>{if(!(o==null||isNaN(o)||!isFinite(o)))return Math.max(u,Math.min(l,Math.floor(o)))},n=e(this.minFractionDigits,0,20),t=e(this.maxFractionDigits,0,100),i=n!=null&&t!=null&&n>t?t:n;return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:i,maximumFractionDigits:t}}constructParser(){let e=this.getOptions(),n=Object.fromEntries(Object.entries(e).filter(([o,u])=>u!==void 0));this.numberFormat=new Intl.NumberFormat(this.locale,n);let t=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),i=new Map(t.map((o,u)=>[o,u]));this._numeral=new RegExp(`[${t.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=o=>i.get(o)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,K(O({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let t=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(t=this.prefix+t),this.suffix&&e!=this.suffix&&(t=t+this.suffix),t}return e.toString()}return""}parseValue(e){let n=this._suffix?new RegExp(this._suffix,""):/(?:)/,t=this._prefix?new RegExp(this._prefix,""):/(?:)/,i=this._currency?new RegExp(this._currency,""):/(?:)/,o=e.replace(n,"").replace(t,"").trim().replace(/\s/g,"").replace(i,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(o){if(o==="-")return o;let u=+o;return isNaN(u)?null:u}return null}repeat(e,n,t){if(this.readonly)return;let i=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,t)},i),this.spin(e,t)}spin(e,n){let t=(this.step()??1)*n,i=this.parseValue(this.input?.nativeElement.value)||0,o=this.validateValue(i+t),u=this.maxlength();u&&u<this.formatValue(o).length||(this.updateInput(o,null,"spin",null),this.updateModel(e,o),this.handleOnInput(e,i,o))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,t=e.target.selectionEnd,i=e.target.value,o=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let u=n;u<=i.length;u++){let l=u===0?0:u-1;if(this.isNumeralChar(i.charAt(l))){this.input.nativeElement.setSelectionRange(u,u);break}}break;case"ArrowRight":for(let u=t;u>=0;u--)if(this.isNumeralChar(i.charAt(u))){this.input.nativeElement.setSelectionRange(u,u);break}break;case"Tab":case"Enter":o=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(o),this.input.nativeElement.setAttribute("aria-valuenow",o),this.updateModel(e,o);break;case"Backspace":{if(e.preventDefault(),n===t){if(n==1&&this.prefix||n==i.length&&this.suffix)break;let u=i.charAt(n-1),{decimalCharIndex:l,decimalCharIndexWithoutPrefix:c}=this.getDecimalCharIndexes(i);if(this.isNumeralChar(u)){let p=this.getDecimalLength(i);if(this._group.test(u))this._group.lastIndex=0,o=i.slice(0,n-2)+i.slice(n-1);else if(this._decimal.test(u))this._decimal.lastIndex=0,p?this.input?.nativeElement.setSelectionRange(n-1,n-1):o=i.slice(0,n-1)+i.slice(n);else if(l>0&&n>l){let g=this.isDecimalMode()&&(this.minFractionDigits||0)<p?"":"0";o=i.slice(0,n-1)+g+i.slice(n)}else c===1?(o=i.slice(0,n-1)+"0"+i.slice(n),o=this.parseValue(o)>0?o:""):o=i.slice(0,n-1)+i.slice(n)}else this.mode==="currency"&&this._currency&&u.search(this._currency)!=-1&&(o=i.slice(1));this.updateValue(e,o,null,"delete-single")}else o=this.deleteRange(i,n,t),this.updateValue(e,o,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===t){if(n==0&&this.prefix||n==i.length-1&&this.suffix)break;let u=i.charAt(n),{decimalCharIndex:l,decimalCharIndexWithoutPrefix:c}=this.getDecimalCharIndexes(i);if(this.isNumeralChar(u)){let p=this.getDecimalLength(i);if(this._group.test(u))this._group.lastIndex=0,o=i.slice(0,n)+i.slice(n+2);else if(this._decimal.test(u))this._decimal.lastIndex=0,p?this.input?.nativeElement.setSelectionRange(n+1,n+1):o=i.slice(0,n)+i.slice(n+1);else if(l>0&&n>l){let g=this.isDecimalMode()&&(this.minFractionDigits||0)<p?"":"0";o=i.slice(0,n)+g+i.slice(n+1)}else c===1?(o=i.slice(0,n)+"0"+i.slice(n+1),o=this.parseValue(o)>0?o:""):o=i.slice(0,n)+i.slice(n+1)}this.updateValue(e,o,null,"delete-back-single")}else o=this.deleteRange(i,n,t),this.updateValue(e,o,null,"delete-range");break;case"Home":this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case"End":this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let n=e.which||e.keyCode,t=String.fromCharCode(n),i=this.isDecimalSign(t),o=this.isMinusSign(t);n!=13&&e.preventDefault(),!i&&e.code==="NumpadDecimal"&&(i=!0,t=this._decimalChar,n=t.charCodeAt(0));let{value:u,selectionStart:l,selectionEnd:c}=this.input.nativeElement,p=this.parseValue(u+t),g=p!=null?p.toString():"",v=u.substring(l,c),_=this.parseValue(v),I=_!=null?_.toString():"";if(l!==c&&I.length>0){this.insert(e,t,{isDecimalSign:i,isMinusSign:o});return}let x=this.maxlength();x&&g.length>x||(48<=n&&n<=57||o||i)&&this.insert(e,t,{isDecimalSign:i,isMinusSign:o})}onPaste(e){if(!this.$disabled()&&!this.readonly){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(this.inputId==="integeronly"&&/[^\d-]/.test(n))return;if(n){this.maxlength()&&(n=n.toString().substring(0,this.maxlength()));let t=this.parseValue(n);t!=null&&this.insert(e,t.toString())}}}allowMinusSign(){let e=this.min();return e==null||e<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let i=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:i}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let t=e.search(this._minusSign);this._minusSign.lastIndex=0;let i=e.search(this._suffix);this._suffix.lastIndex=0;let o=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:t,suffixCharIndex:i,currencyCharIndex:o}}insert(e,n,t={isDecimalSign:!1,isMinusSign:!1}){let i=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&i!==-1)return;let o=this.input?.nativeElement.selectionStart,u=this.input?.nativeElement.selectionEnd,l=this.input?.nativeElement.value.trim(),{decimalCharIndex:c,minusCharIndex:p,suffixCharIndex:g,currencyCharIndex:v}=this.getCharIndexes(l),_;if(t.isMinusSign)o===0&&(_=l,(p===-1||u!==0)&&(_=this.insertText(l,n,0,u)),this.updateValue(e,_,n,"insert"));else if(t.isDecimalSign)c>0&&o===c?this.updateValue(e,l,n,"insert"):c>o&&c<u?(_=this.insertText(l,n,o,u),this.updateValue(e,_,n,"insert")):c===-1&&this.maxFractionDigits&&(_=this.insertText(l,n,o,u),this.updateValue(e,_,n,"insert"));else{let I=this.numberFormat.resolvedOptions().maximumFractionDigits,x=o!==u?"range-insert":"insert";if(c>0&&o>c){if(o+n.length-(c+1)<=I){let w=v>=o?v-1:g>=o?g:l.length;_=l.slice(0,o)+n+l.slice(o+n.length,w)+l.slice(w),this.updateValue(e,_,n,x)}}else _=this.insertText(l,n,o,u),this.updateValue(e,_,n,x)}}insertText(e,n,t,i){if((n==="."?n:n.split(".")).length===2){let u=e.slice(t,i).search(this._decimal);return this._decimal.lastIndex=0,u>0?e.slice(0,t)+this.formatValue(n)+e.slice(i):e||this.formatValue(n)}else return i-t===e.length?this.formatValue(n):t===0?n+e.slice(i):i===e.length?e.slice(0,t)+n:e.slice(0,t)+n+e.slice(i)}deleteRange(e,n,t){let i;return t-n===e.length?i="":n===0?i=e.slice(t):t===e.length?i=e.slice(0,n):i=e.slice(0,n)+e.slice(t),i}initCursor(){let e=this.input?.nativeElement.selectionStart,n=this.input?.nativeElement.selectionEnd,t=this.input?.nativeElement.value,i=t.length,o=null,u=(this.prefixChar||"").length;t=t.replace(this._prefix,""),(e===n||e!==0||n<u)&&(e-=u);let l=t.charAt(e);if(this.isNumeralChar(l))return e+u;let c=e-1;for(;c>=0;)if(l=t.charAt(c),this.isNumeralChar(l)){o=c+u;break}else c--;if(o!==null)this.input?.nativeElement.setSelectionRange(o+1,o+1);else{for(c=e;c<i;)if(l=t.charAt(c),this.isNumeralChar(l)){o=c+u;break}else c++;o!==null&&this.input?.nativeElement.setSelectionRange(o,o)}return o||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==pe()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,t,i){let o=this.input?.nativeElement.value,u=null;n!=null&&(u=this.parseValue(n),u=!u&&!this.allowEmpty?0:u,this.updateInput(u,t,i,n),this.handleOnInput(e,o,u))}handleOnInput(e,n,t){this.isValueChanged(n,t)&&(this.input.nativeElement.value=this.formatValue(t),this.input?.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,t),this.onInput.emit({originalEvent:e,value:t,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null){let t=typeof e=="string"?this.parseValue(e):e;return n!==t}return!1}validateValue(e){if(e==="-"||e==null)return null;let n=this.min(),t=this.max();return n!=null&&e<n?this.min():t!=null&&e>t?t:e}updateInput(e,n,t,i){n=n||"";let o=this.input?.nativeElement.value,u=this.formatValue(e),l=o.length;if(u!==i&&(u=this.concatValues(u,i)),l===0){this.input.nativeElement.value=u,this.input.nativeElement.setSelectionRange(0,0);let p=this.initCursor()+n.length;this.input.nativeElement.setSelectionRange(p,p)}else{let c=this.input.nativeElement.selectionStart,p=this.input.nativeElement.selectionEnd,g=this.maxlength();if(g&&u.length>g&&(u=u.slice(0,g),c=Math.min(c,g),p=Math.min(p,g)),g&&g<u.length)return;this.input.nativeElement.value=u;let v=u.length;if(t==="range-insert"){let _=this.parseValue((o||"").slice(0,c)),x=(_!==null?_.toString():"").split("").join(`(${this.groupChar})?`),w=new RegExp(x,"g");w.test(u);let Te=n.split("").join(`(${this.groupChar})?`),G=new RegExp(Te,"g");G.test(u.slice(w.lastIndex)),p=w.lastIndex+G.lastIndex,this.input.nativeElement.setSelectionRange(p,p)}else if(v===l)t==="insert"||t==="delete-back-single"?this.input.nativeElement.setSelectionRange(p+1,p+1):t==="delete-single"?this.input.nativeElement.setSelectionRange(p-1,p-1):(t==="delete-range"||t==="spin")&&this.input.nativeElement.setSelectionRange(p,p);else if(t==="delete-back-single"){let _=o.charAt(p-1),I=o.charAt(p),x=l-v,w=this._group.test(I);w&&x===1?p+=1:!w&&this.isNumeralChar(_)&&(p+=-1*x+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(p,p)}else if(o==="-"&&t==="insert"){this.input.nativeElement.setSelectionRange(0,0);let I=this.initCursor()+n.length+1;this.input.nativeElement.setSelectionRange(I,I)}else p=p+(v-l),this.input.nativeElement.setSelectionRange(p,p)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,n){if(e&&n){let t=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?t!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(t)+this.suffixChar:e:t!==-1?e.split(this._decimal)[0]+n.slice(t):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input.nativeElement.value)),t=n?.toString();this.input.nativeElement.value=this.formatValue(t),this.input.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,n){let t=this.ngControl?.control?.updateOn==="blur";this.value!==n?(this.value=n,t&&this.focused||this.onModelChange(n)):t&&this.onModelChange(n)}writeControlValue(e,n){this.value=e&&Number(e),n(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}get dataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()==="filled",empty:!this.$filled(),[this.size()]:this.size(),[this.buttonLayout]:this.showButtons&&this.buttonLayout})}static \u0275fac=function(n){return new(n||r)(X(W))};static \u0275cmp=Y({type:r,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(n,t,i){if(n&1&&ne(i,Se,4)(i,Ne,4)(i,ke,4)(i,ce,4),n&2){let o;R(o=U())&&(t.clearIconTemplate=o.first),R(o=U())&&(t.incrementButtonIconTemplate=o.first),R(o=U())&&(t.decrementButtonIconTemplate=o.first),R(o=U())&&(t.templates=o)}},viewQuery:function(n,t){if(n&1&&ie(Me,5),n&2){let i;R(i=U())&&(t.input=i.first)}},hostVars:3,hostBindings:function(n,t){n&2&&(T("data-p",t.dataP),y(t.cn(t.cx("root"),t.styleClass)))},inputs:{showButtons:[2,"showButtons","showButtons",B],format:[2,"format","format",B],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",tabindex:[2,"tabindex","tabindex",$],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",B],autocomplete:"autocomplete",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",B],allowEmpty:[2,"allowEmpty","allowEmpty",B],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",B],minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>$(e,void 0)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>$(e,void 0)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",B],autofocus:[2,"autofocus","autofocus",B]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[re([at,P,{provide:Be,useExisting:r},{provide:de,useExisting:r}]),ee([L]),te],decls:6,vars:38,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","value","ngStyle","variant","invalid","pSize","pt","unstyled","pAutoFocus","fluid"],[4,"ngIf"],[3,"pBind","class",4,"ngIf"],["type","button","tabindex","-1",3,"pBind","class","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],["data-p-icon","times",3,"pBind","class","click",4,"ngIf"],[3,"pBind","class","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet"],[3,"pBind"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup","pBind"],[3,"pBind","ngClass",4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","angle-up",3,"pBind",4,"ngIf"],["data-p-icon","angle-up",3,"pBind"],["data-p-icon","angle-down",3,"pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"]],template:function(n,t){n&1&&(E(0,"input",1,0),D("input",function(o){return t.onUserInput(o)})("keydown",function(o){return t.onInputKeyDown(o)})("keypress",function(o){return t.onInputKeyPress(o)})("paste",function(o){return t.onPaste(o)})("click",function(){return t.onInputClick()})("focus",function(o){return t.onInputFocus(o)})("blur",function(o){return t.onInputBlur(o)}),V(),b(2,Ae,3,2,"ng-container",2)(3,We,7,20,"span",3)(4,tt,3,8,"button",4)(5,st,3,8,"button",4)),n&2&&(y(t.cn(t.cx("pcInputText"),t.inputStyleClass)),a("value",t.formattedValue())("ngStyle",t.inputStyle)("variant",t.$variant())("invalid",t.invalid())("pSize",t.size())("pt",t.ptm("pcInputText"))("unstyled",t.unstyled())("pAutoFocus",t.autofocus)("fluid",t.hasFluid),T("id",t.inputId)("aria-valuemin",t.min())("aria-valuemax",t.max())("aria-valuenow",t.value)("placeholder",t.placeholder)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy)("aria-describedby",t.ariaDescribedBy)("title",t.title)("size",t.inputSize())("name",t.name())("autocomplete",t.autocomplete)("maxlength",t.maxlength())("minlength",t.minlength())("tabindex",t.tabindex)("aria-required",t.ariaRequired)("min",t.min())("max",t.max())("step",t.step()??1)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("data-p",t.dataP),d(2),a("ngIf",t.buttonLayout!="vertical"&&t.showClear&&t.value),d(),a("ngIf",t.showButtons&&t.buttonLayout==="stacked"),d(),a("ngIf",t.showButtons&&t.buttonLayout!=="stacked"),d(),a("ngIf",t.showButtons&&t.buttonLayout!=="stacked"))},dependencies:[le,oe,ue,ae,se,we,fe,ge,be,_e,z,he,L],encapsulation:2,changeDetection:0})}return r})(),Lt=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Z({type:r});static \u0275inj=Q({imports:[ve,z,z]})}return r})();export{ve as a,Lt as b};
//# sourceMappingURL=chunk-A4VH74HS.js.map
