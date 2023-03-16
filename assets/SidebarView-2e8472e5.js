import{f,m as r,g as d,_ as b,r as S,o as k,c as y,b as s,d as i,i as l,w as p,k as _,v as C,n as h,l as A,t as w,s as x,p as I,e as V}from"./index-0b0c79b6.js";import{u as m}from"./cart-f9808174.js";import{u as g}from"./intoCity-75b54b71.js";import{u as v}from"./login-fbec036f.js";const L={data(){return{isActive:!1,searchQuery:""}},components:{RouterLink:f},methods:{toggleActive(){this.isActive=!this.isActive},...r(m,["getCarts"]),...r(g,["searchShrimp"]),...r(v,["logout"])},computed:{...d(m,["cart","shakeState"]),...d(g,["shrimpFilter"]),...d(v,["loginStatus"])},mounted(){this.getCarts()}},t=e=>(I("data-v-65da84ac"),e=e(),V(),e),Q=t(()=>s("li",null,[s("a",{href:"/"},[s("span",{class:"icon h3"},[s("i",{class:"fa-solid fa-shrimp"})]),s("span",{class:"title"},"Shrimping Map")])],-1)),B=t(()=>s("span",{class:"icon"},[s("i",{class:"bi bi-geo-alt-fill"})],-1)),M=t(()=>s("span",{class:"title"},"首頁",-1)),N=t(()=>s("i",{class:"bi bi-search"},null,-1)),R=[N],D=t(()=>s("span",{class:"icon"},[s("i",{class:"bi bi-info-square"})],-1)),T=t(()=>s("span",{class:"title"},"賣蝦資訊",-1)),q={class:"icon"},z=t(()=>s("span",{class:"visually-hidden"},"unread messages",-1)),E=t(()=>s("i",{class:"bi bi-cart4"},null,-1)),F=t(()=>s("span",{class:"title"},"購物車",-1)),U=t(()=>s("span",{class:"icon"},[s("i",{class:"bi bi-box-arrow-right"})],-1)),j=t(()=>s("span",{class:"title"},"登入",-1)),G=t(()=>s("span",{class:"icon"},[s("i",{class:"bi bi-box-arrow-left"})],-1)),H=t(()=>s("span",{class:"title"},"登出",-1));function J(e,a,K,O,n,u){const o=S("RouterLink");return k(),y("div",{class:h(["navigation",{active:n.isActive}])},[s("ul",null,[Q,s("li",null,[i(o,{to:"/"},{default:l(()=>[B,M]),_:1})]),s("li",null,[i(o,{to:"#"},{default:l(()=>[s("span",{onClick:a[0]||(a[0]=p(c=>e.searchShrimp(n.searchQuery),["prevent"])),class:"icon"},R),_(s("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>n.searchQuery=c),class:"form-control ms-4 border-0",type:"text",placeholder:"輸入店家名稱","aria-label":"Search"},null,512),[[C,n.searchQuery]])]),_:1})]),s("li",null,[i(o,{to:"#"},{default:l(()=>[D,T]),_:1})]),s("li",null,[i(o,{to:"/cart"},{default:l(()=>[s("span",q,[s("span",{class:h([{"custom-shake":e.shakeState},"shake-position position-absolute badge rounded-circle bg-danger"])},[A(w(Array.isArray(this.cart.carts)?this.cart.carts.length:"0")+" ",1),z],2),E]),F]),_:1})]),s("li",null,[i(o,{to:"/login"},{default:l(()=>[U,j]),_:1})]),_(s("li",null,[i(o,{onClick:p(e.logout,["prevent"]),to:"#"},{default:l(()=>[G,H]),_:1},8,["onClick"])],512),[[x,e.loginStatus]])]),s("div",{onClick:a[2]||(a[2]=p((...c)=>u.toggleActive&&u.toggleActive(...c),["prevent"])),class:"toggle"})],2)}const Z=b(L,[["render",J],["__scopeId","data-v-65da84ac"]]);export{Z as S};
