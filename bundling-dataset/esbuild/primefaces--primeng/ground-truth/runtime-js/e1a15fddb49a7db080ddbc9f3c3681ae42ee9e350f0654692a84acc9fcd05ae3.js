import{Ba as g,Ra as O,Ua as U,Va as $,Wa as l}from"./chunk-LGF24A6L.js";import{$b as m,Ab as u,Bb as x,Cb as F,Ja as C,Jb as M,Lb as j,Nb as i,O as y,Oa as v,Ob as D,P as I,Pb as L,R as z,T as s,Xb as h,Z as E,_ as B,ab as T,ac as V,bb as A,bc as k,bd as R,eb as N,ed as H,fa as w,fb as S,gb as d,kc as P,na as c,nd as q,rb as o,zb as r,zc as _}from"./chunk-E5EQ6YZU.js";var G=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var Q={root:({instance:t})=>["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},b=(()=>{class t extends O{name="avatar";style=G;classes=Q;static \u0275fac=(()=>{let a;return function(e){return(a||(a=c(t)))(e||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var W=["*"];function X(t,p){if(t&1&&(u(0,"span",3),V(1),x()),t&2){let a=i();m(a.cx("label")),r("pBind",a.ptm("label")),o("data-p",a.dataP),v(),k(a.label)}}function Y(t,p){if(t&1&&F(0,"span",5),t&2){let a=i(2);m(a.icon),r("pBind",a.ptm("icon"))("ngClass",a.cx("icon")),o("data-p",a.dataP)}}function Z(t,p){if(t&1&&d(0,Y,1,5,"span",4),t&2){let a=i(),n=h(5);r("ngIf",a.icon)("ngIfElse",n)}}function tt(t,p){if(t&1){let a=M();u(0,"img",7),j("error",function(e){E(a);let f=i(2);return B(f.imageError(e))}),x()}if(t&2){let a=i(2);r("pBind",a.ptm("image"))("src",a.image,C),o("aria-label",a.ariaLabel)("data-p",a.dataP)}}function at(t,p){if(t&1&&d(0,tt,1,4,"img",6),t&2){let a=i();r("ngIf",a.image)}}var J=new z("AVATAR_INSTANCE"),et=(()=>{class t extends ${componentName="Avatar";$pcAvatar=s(J,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(l,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new w;_componentStyle=s(b);imageError(a){this.onImageError.emit(a)}get dataP(){return this.cn({[this.shape]:this.shape,[this.size]:this.size})}static \u0275fac=(()=>{let a;return function(e){return(a||(a=c(t)))(e||t)}})();static \u0275cmp=T({type:t,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(n,e){n&2&&(o("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("data-p",e.dataP),m(e.cn(e.cx("root"),e.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[P([b,{provide:J,useExisting:t},{provide:U,useExisting:t}]),N([l]),S],ngContentSelectors:W,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"pBind","class",4,"ngIf","ngIfElse"],[3,"pBind"],[3,"pBind","class","ngClass",4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","src","error",4,"ngIf"],[3,"error","pBind","src"]],template:function(n,e){if(n&1&&(D(),L(0),d(1,X,2,5,"span",2)(2,Z,1,2,"ng-template",null,0,_)(4,at,1,1,"ng-template",null,1,_)),n&2){let f=h(3);v(),r("ngIf",e.label)("ngIfElse",f)}},dependencies:[q,R,H,g,l],encapsulation:2,changeDetection:0})}return t})(),yt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=A({type:t});static \u0275inj=I({imports:[et,g,g]})}return t})();export{et as a,yt as b};
//# sourceMappingURL=chunk-V32IWFRN.js.map
