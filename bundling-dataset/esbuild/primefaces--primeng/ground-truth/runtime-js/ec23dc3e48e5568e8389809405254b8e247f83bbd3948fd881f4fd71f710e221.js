import{Aa as Z,Ba as x,Ra as ee,Ua as te,Va as R,Wa as _,_ as Y}from"./chunk-LGF24A6L.js";import{$b as c,Ab as y,Bb as C,Cb as f,Gb as O,Hb as M,Ib as u,N as D,Nb as p,O as $,Oa as o,P as A,Qb as q,R as Q,Sb as d,T as b,Tb as g,ab as F,ac as H,bb as V,bd as X,dc as U,dd as z,eb as j,ed as E,fb as B,gb as m,hd as N,id as L,kc as J,mc as G,na as v,nc as K,nd as w,oc as h,rb as T,sc as W,ub as k,vb as S,zb as a}from"./chunk-E5EQ6YZU.js";var ne=`
    .p-metergroup {
        display: flex;
        gap: dt('metergroup.gap');
    }

    .p-metergroup-meters {
        display: flex;
        background: dt('metergroup.meters.background');
        border-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-label-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-metergroup-label {
        display: inline-flex;
        align-items: center;
        gap: dt('metergroup.label.gap');
    }

    .p-metergroup-label-marker {
        display: inline-flex;
        width: dt('metergroup.label.marker.size');
        height: dt('metergroup.label.marker.size');
        border-radius: 100%;
    }

    .p-metergroup-label-icon {
        font-size: dt('metergroup.label.icon.size');
        width: dt('metergroup.label.icon.size');
        height: dt('metergroup.label.icon.size');
    }

    .p-metergroup-horizontal {
        flex-direction: column;
    }

    .p-metergroup-label-list-horizontal {
        gap: dt('metergroup.label.list.horizontal.gap');
    }

    .p-metergroup-horizontal .p-metergroup-meters {
        height: dt('metergroup.meters.size');
    }

    .p-metergroup-horizontal .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-end-start-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-horizontal .p-metergroup-meter:last-of-type {
        border-start-end-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical {
        flex-direction: row;
    }

    .p-metergroup-label-list-vertical {
        flex-direction: column;
        gap: dt('metergroup.label.list.vertical.gap');
    }

    .p-metergroup-vertical .p-metergroup-meters {
        flex-direction: column;
        width: dt('metergroup.meters.size');
        height: 100%;
    }

    .p-metergroup-vertical .p-metergroup-label-list {
        align-items: flex-start;
    }

    .p-metergroup-vertical .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-start-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical .p-metergroup-meter:last-of-type {
        border-end-start-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }
`;var oe={root:({instance:t})=>["p-metergroup p-component",{"p-metergroup-horizontal":t.orientation==="horizontal","p-metergroup-vertical":t.orientation==="vertical"}],meters:"p-metergroup-meters",meter:"p-metergroup-meter",labelList:({instance:t})=>["p-metergroup-label-list",{"p-metergroup-label-list-vertical":t.labelOrientation==="vertical","p-metergroup-label-list-horizontal":t.labelOrientation==="horizontal"}],label:"p-metergroup-label",labelIcon:"p-metergroup-label-icon",labelMarker:"p-metergroup-label-marker",labelText:"p-metergroup-label-text"},I=(()=>{class t extends ee{name="metergroup";style=ne;classes=oe;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var le=(t,i)=>({$implicit:t,icon:i}),pe=t=>({color:t}),me=t=>({backgroundColor:t});function ce(t,i){if(t&1&&f(0,"i",6),t&2){let e=p(2).$implicit,r=p();c(e.icon),a("ngClass",r.cx("labelIcon"))("pBind",r.ptm("labelIcon"))("ngStyle",G(5,pe,e.color))}}function se(t,i){if(t&1&&f(0,"span",7),t&2){let e=p(2).$implicit,r=p();c(r.cx("labelMarker")),a("pBind",r.ptm("labelMarker"))("ngStyle",G(4,me,e.color))}}function ue(t,i){if(t&1&&(O(0),m(1,ce,1,7,"i",4)(2,se,1,6,"span",5),M()),t&2){let e=p().$implicit;o(),a("ngIf",e.icon),o(),a("ngIf",!e.icon)}}function de(t,i){t&1&&u(0)}function ge(t,i){if(t&1&&(y(0,"li",0),m(1,ue,3,2,"ng-container",2)(2,de,1,0,"ng-container",3),y(3,"span",0),H(4),C()()),t&2){let e=i.$implicit,r=p();c(r.cx("label")),a("pBind",r.ptm("label")),o(),a("ngIf",!r.iconTemplate),o(),a("ngTemplateOutlet",r.iconTemplate)("ngTemplateOutletContext",K(11,le,e,e.icon)),o(),c(r.cx("labelText")),a("pBind",r.ptm("labelText")),o(),U("",e.label," (",r.parentInstance.percentValue(e.value),")")}}var be=["label"],fe=["meter"],_e=["end"],Te=["start"],ye=["icon"],P=(t,i,e)=>({$implicit:t,totalPercent:i,percentages:e}),he=(t,i,e,r,n,s,l)=>({$implicit:t,index:i,orientation:e,class:r,size:n,totalPercent:s,dataP:l});function xe(t,i){if(t&1&&f(0,"p-meterGroupLabel",4),t&2){let e=p(2);a("value",e.value)("labelPosition",e.labelPosition)("labelOrientation",e.labelOrientation)("min",e.min)("max",e.max)("iconTemplate",e.iconTemplate||e._iconTemplate)("pt",e.pt)("unstyled",e.unstyled())}}function ve(t,i){t&1&&u(0)}function Ce(t,i){if(t&1&&m(0,xe,1,8,"p-meterGroupLabel",3)(1,ve,1,0,"ng-container",0),t&2){let e=p();a("ngIf",!e.labelTemplate&&!e._labelTemplate),o(),a("ngTemplateOutlet",e.labelTemplate||e.labelTemplate)("ngTemplateOutletContext",h(3,P,e.value,e.totalPercent(),e.percentages()))}}function Oe(t,i){t&1&&u(0)}function Me(t,i){t&1&&u(0)}function Ie(t,i){if(t&1&&(O(0),f(1,"span",6),M()),t&2){let e=p().$implicit,r=p();o(),c(r.cx("meter")),a("pBind",r.ptm("meter"))("ngStyle",r.meterStyle(e)),T("data-p",r.dataP)}}function Pe(t,i){if(t&1&&(O(0),m(1,Me,1,0,"ng-container",0)(2,Ie,2,5,"ng-container",5),M()),t&2){let e=i.$implicit,r=i.index,n=p();o(),a("ngTemplateOutlet",n.meterTemplate||n._meterTemplate)("ngTemplateOutletContext",W(3,he,e,r,n.orientation,n.cx("meter"),n.percentValue(e.value),n.totalPercent(),n.dataP)),o(),a("ngIf",!n.meterTemplate&&!n._meterTemplate&&e.value>0)}}function Fe(t,i){t&1&&u(0)}function Be(t,i){if(t&1&&f(0,"p-meterGroupLabel",4),t&2){let e=p(2);a("value",e.value)("labelPosition",e.labelPosition)("labelOrientation",e.labelOrientation)("min",e.min)("max",e.max)("iconTemplate",e.iconTemplate||e._iconTemplate)("pt",e.pt)("unstyled",e.unstyled())}}function ke(t,i){t&1&&u(0)}function Se(t,i){if(t&1&&m(0,Be,1,8,"p-meterGroupLabel",3)(1,ke,1,0,"ng-container",0),t&2){let e=p();a("ngIf",!e.labelTemplate&&!e._labelTemplate),o(),a("ngTemplateOutlet",e.labelTemplate||e._labelTemplate)("ngTemplateOutletContext",h(3,P,e.value,e.totalPercent(),e.percentages()))}}var re=new Q("METERGROUP_INSTANCE"),Ge=(()=>{class t extends R{value=[];labelPosition="end";labelOrientation="horizontal";min;max;iconTemplate;parentInstance=b(D(()=>ie));_componentStyle=b(I);get dataP(){return this.cn({[this.labelOrientation]:this.labelOrientation})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=F({type:t,selectors:[["p-meterGroupLabel"],["p-metergrouplabel"]],inputs:{value:"value",labelPosition:"labelPosition",labelOrientation:"labelOrientation",min:"min",max:"max",iconTemplate:"iconTemplate"},features:[B],decls:2,vars:6,consts:[[3,"pBind"],[3,"class","pBind",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass","pBind","ngStyle",4,"ngIf"],[3,"class","pBind","ngStyle",4,"ngIf"],[3,"ngClass","pBind","ngStyle"],[3,"pBind","ngStyle"]],template:function(r,n){r&1&&(y(0,"ol",0),m(1,ge,5,14,"li",1),C()),r&2&&(c(n.cx("labelList")),a("pBind",n.ptm("labelList")),T("data-p",n.dataP),o(),a("ngForOf",n.value)("ngForTrackBy",n.parentInstance.trackByFn))},dependencies:[w,X,z,E,L,N,x,_],encapsulation:2})}return t})(),ie=(()=>{class t extends R{componentName="MeterGroup";$pcMeterGroup=b(re,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=b(_,{self:!0});value;min=0;max=100;orientation="horizontal";labelPosition="end";labelOrientation="horizontal";styleClass;get vertical(){return this.orientation==="vertical"}labelTemplate;meterTemplate;endTemplate;startTemplate;iconTemplate;templates;_labelTemplate;_meterTemplate;_endTemplate;_startTemplate;_iconTemplate;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=b(I);constructor(){super()}onAfterViewInit(){let e=this.el.nativeElement,r=Y(e);this.vertical&&(e.style.height=r+"px")}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"label":this._labelTemplate=e.template;break;case"meter":this._meterTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break}})}percent(e=0){if(this.max===this.min)return 100;let r=(e-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,r)))}percentValue(e){return this.percent(e)+"%"}meterStyle(e){return{backgroundColor:e.color,width:this.orientation==="horizontal"&&this.percentValue(e.value||0),height:this.orientation==="vertical"&&this.percentValue(e.value||0)}}totalPercent(){return this.value?this.percent(this.value.reduce((e,r)=>e+(r.value||0),0)):0}percentages(){if(!this.value)return[];let e=0,r=[];return this.value.forEach(n=>{e+=n.value||0,r.push(e)}),r}trackByFn(e){return e}get dataP(){return this.cn({[this.orientation]:this.orientation})}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=F({type:t,selectors:[["p-meterGroup"],["p-metergroup"],["p-meter-group"]],contentQueries:function(r,n,s){if(r&1&&q(s,be,4)(s,fe,4)(s,_e,4)(s,Te,4)(s,ye,4)(s,Z,4),r&2){let l;d(l=g())&&(n.labelTemplate=l.first),d(l=g())&&(n.meterTemplate=l.first),d(l=g())&&(n.endTemplate=l.first),d(l=g())&&(n.startTemplate=l.first),d(l=g())&&(n.iconTemplate=l.first),d(l=g())&&(n.templates=l)}},hostVars:7,hostBindings:function(r,n){r&2&&(T("aria-valuemin",n.min)("role","meter")("aria-valuemax",n.max)("aria-valuenow",n.totalPercent())("data-p",n.dataP),c(n.cn(n.cx("root"),n.styleClass)))},inputs:{value:"value",min:"min",max:"max",orientation:"orientation",labelPosition:"labelPosition",labelOrientation:"labelOrientation",styleClass:"styleClass"},features:[J([I,{provide:re,useExisting:t},{provide:te,useExisting:t}]),j([_]),B],decls:6,vars:20,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"value","labelPosition","labelOrientation","min","max","iconTemplate","pt","unstyled",4,"ngIf"],[3,"value","labelPosition","labelOrientation","min","max","iconTemplate","pt","unstyled"],[4,"ngIf"],[3,"pBind","ngStyle"]],template:function(r,n){r&1&&(k(0,Ce,2,7),m(1,Oe,1,0,"ng-container",0),y(2,"div",1),m(3,Pe,3,11,"ng-container",2),C(),m(4,Fe,1,0,"ng-container",0),k(5,Se,2,7)),r&2&&(S(n.labelPosition==="start"?0:-1),o(),a("ngTemplateOutlet",n.startTemplate||n._startTemplate)("ngTemplateOutletContext",h(12,P,n.value,n.totalPercent(),n.percentages())),o(),c(n.cx("meters")),a("pBind",n.ptm("meters")),T("data-p",n.dataP),o(),a("ngForOf",n.value)("ngForTrackBy",n.trackByFn),o(),a("ngTemplateOutlet",n.endTemplate||n._endTemplate)("ngTemplateOutletContext",h(16,P,n.value,n.totalPercent(),n.percentages())),o(),S(n.labelPosition==="end"?5:-1))},dependencies:[w,z,E,L,N,Ge,x,_],encapsulation:2,changeDetection:0})}return t})(),Ze=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=V({type:t});static \u0275inj=A({imports:[ie,x,x]})}return t})();export{ie as a,Ze as b};
//# sourceMappingURL=chunk-BGG4RAHN.js.map
