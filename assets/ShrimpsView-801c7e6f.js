import{_,f as h,g as m,m as v,r as i,o as n,c as a,d as c,b as t,F as r,h as f,t as s,i as y,p as S,e as g}from"./index-d8cf28b1.js";import{u as d}from"./intoCity-b05301d8.js";const L={components:{RouterLink:h},computed:{...m(d,["shrimpFilter","isLoading"])},methods:{...v(d,["intoCity","searchShrimp"])},mounted(){const{city:e}=this.$route.query;e?this.intoCity(e):this.searchShrimp(this.$route.query.searchQuery)}},l=e=>(S("data-v-aaa56cf7"),e=e(),g(),e),$={class:"container"},k={class:"box"},w={class:"content"},x=l(()=>t("span",null,"店家資訊",-1)),C=l(()=>t("div",{class:"wave"},null,-1));function I(e,F,V,B,R,b){const p=i("Loading"),u=i("RouterLink");return n(),a(r,null,[c(p,{active:e.isLoading,"z-index":1060},null,8,["active"]),t("div",$,[(n(!0),a(r,null,f(e.shrimpFilter,o=>(n(),a("div",{key:o.id,class:"custom-card"},[t("div",k,[t("div",w,[t("h2",null,s(o.category),1),t("h3",null,s(o.title),1),t("p",null,"地址: "+s(o.content),1),t("p",null,"電話: 0"+s(o.phone),1),t("p",null,"種類: "+s(o.description),1),t("div",null,[c(u,{to:`/shrimp/${o.id}`},{default:y(()=>[x,C]),_:2},1032,["to"])])])])]))),128))])],64)}const z=_(L,[["render",I],["__scopeId","data-v-aaa56cf7"]]);export{z as default};