import{Aa as G,Ba as m,Ra as H,Ua as $,Va as J,Wa as s}from"./chunk-LGF24A6L.js";import{$b as c,Ab as f,Bb as y,Cb as S,Gb as E,Hb as M,Nb as u,O as h,Oa as i,Ob as A,P as C,Pb as F,Pc as Q,Qb as j,R as x,Sb as T,T as l,Tb as _,ab as I,ac as D,bb as k,bc as z,bd as O,eb as B,ed as R,fb as w,gb as r,id as V,kc as P,na as g,nd as q,rb as N,zb as a}from"./chunk-E5EQ6YZU.js";var K=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var W={root:({instance:t})=>["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}],icon:"p-tag-icon",label:"p-tag-label"},v=(()=>{class t extends H{name="tag";style=K;classes=W;static \u0275fac=(()=>{let e;return function(n){return(e||(e=g(t)))(n||t)}})();static \u0275prov=h({token:t,factory:t.\u0275fac})}return t})();var X=["icon"],Y=["*"];function Z(t,p){if(t&1&&S(0,"span",4),t&2){let e=u(2);c(e.cx("icon")),a("ngClass",e.icon)("pBind",e.ptm("icon"))}}function tt(t,p){if(t&1&&(E(0),r(1,Z,1,4,"span",3),M()),t&2){let e=u();i(),a("ngIf",e.icon)}}function et(t,p){}function nt(t,p){t&1&&r(0,et,0,0,"ng-template")}function ot(t,p){if(t&1&&(f(0,"span",2),r(1,nt,1,0,null,5),y()),t&2){let e=u();c(e.cx("icon")),a("pBind",e.ptm("icon")),i(),a("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}var L=new x("TAG_INSTANCE"),at=(()=>{class t extends J{componentName="Tag";$pcTag=l(L,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=l(s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=l(v);onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="icon"&&(this._iconTemplate=e.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=g(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-tag"]],contentQueries:function(o,n,b){if(o&1&&j(b,X,4)(b,G,4),o&2){let d;T(d=_())&&(n.iconTemplate=d.first),T(d=_())&&(n.templates=d)}},hostVars:3,hostBindings:function(o,n){o&2&&(N("data-p",n.dataP),c(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",Q]},features:[P([v,{provide:L,useExisting:t},{provide:$,useExisting:t}]),B([s]),w],ngContentSelectors:Y,decls:5,vars:6,consts:[[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind"],[4,"ngTemplateOutlet"]],template:function(o,n){o&1&&(A(),F(0),r(1,tt,2,1,"ng-container",0)(2,ot,2,4,"span",1),f(3,"span",2),D(4),y()),o&2&&(i(),a("ngIf",!n.iconTemplate&&!n._iconTemplate),i(),a("ngIf",n.iconTemplate||n._iconTemplate),i(),c(n.cx("label")),a("pBind",n.ptm("label")),i(),z(n.value))},dependencies:[q,O,R,V,m,s],encapsulation:2,changeDetection:0})}return t})(),It=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=k({type:t});static \u0275inj=C({imports:[at,m,m]})}return t})();export{at as a,It as b};
//# sourceMappingURL=chunk-CKGIEZZR.js.map
