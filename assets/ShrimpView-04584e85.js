import{_ as f,m as y,g as k,j as x,r as h,o as a,c as n,d as m,b as s,t as i,F as _,h as g,l as c,w as r,k as S,v as w,a as R,p as T,e as V,q as L}from"./index-d8cf28b1.js";import{u as p}from"./cart-9e63bab8.js";import{S as P}from"./SellInfoModal-a76393ca.js";const{VITE_APP_URL:N,VITE_APP_PATH:I}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"brad5566",BASE_URL:"/shrimpMap/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},A={data(){return{shrimp:{},business_data:{},shrimp_type:{},days:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"]}},components:{SellShrimp:P},methods:{getShrimp(){this.isLoading=!0;const{id:e}=this.$route.params;this.$http({method:"get",url:`${N}api/${I}/product/${e}`}).then(o=>{this.shrimp=o.data.product,this.business_data=o.data.product.business_data,this.shrimp_type=o.data.product.shrimp_type,this.isLoading=!1})},getBusinessHour(e){return this.business_data.rest===e?`${e}：休息`:`${e}：${this.business_data.all}`},...y(p,["addToCart","adjustmentTickets"])},computed:{...k(p,["ticketNum","isLoading"]),...x(p,["isLoading"])},mounted(){this.getShrimp()}},l=e=>(T("data-v-3ba49f8a"),e=e(),V(),e),C={class:"container mt-8"},E={class:"row"},B={class:"col-xl-6 text-white"},M={class:"d-flex justify-content-center"},j=["src"],D={class:"m-5"},H=l(()=>s("h4",null,[L("其他資訊 "),s("span",{class:"text-danger h6"},"( 實際資訊以店家為主 )")],-1)),O={class:"row mt-3"},U={class:"col-6"},F=l(()=>s("h5",null,"營業時間：",-1)),q={key:0},z={key:1},W={class:"col-6"},G=l(()=>s("h5",null,"消費方式：",-1)),J={key:0},K={key:1},Q={key:2},X={key:3},Y={class:"col-xl-6 text-white position-relative"},Z={class:"m-5"},$={class:"mb-5"},ss=R('<hr class="mx-5 opacity-25" data-v-3ba49f8a><div class="m-5" data-v-3ba49f8a><h4 data-v-3ba49f8a>優惠套票</h4><div class="mt-4" data-v-3ba49f8a><button type="button" class="btn btn-primary" data-v-3ba49f8a>1小時</button><button type="button" class="btn ms-xl-4 ms-1 btn-primary" disabled data-v-3ba49f8a>2小時</button><button type="button" class="btn ms-xl-4 ms-1 btn-primary" disabled data-v-3ba49f8a>3小時</button></div><div class="mt-4" data-v-3ba49f8a><div class="form-check form-check-inline" data-v-3ba49f8a><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked data-v-3ba49f8a><label class="form-check-label" for="inlineRadio1" data-v-3ba49f8a>泰國蝦池</label></div><div class="form-check form-check-inline" data-v-3ba49f8a><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" disabled data-v-3ba49f8a><label class="form-check-label" for="inlineRadio2" data-v-3ba49f8a>龍蝦池</label></div><div class="form-check form-check-inline" data-v-3ba49f8a><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled data-v-3ba49f8a><label class="form-check-label" for="inlineRadio3" data-v-3ba49f8a>其他池種</label></div></div></div>',2),ts={class:"m-xl-5 m-1"},es=l(()=>s("span",{class:"d-inline-block pe-3"},"數量",-1)),is=l(()=>s("i",{class:"bi bi-dash-lg"},null,-1)),os=[is],as=l(()=>s("i",{class:"bi bi-plus-lg"},null,-1)),ns=[as],ls={class:"m-5 ps-3 ps-xl-0"},ds={class:"d-block fs-6 text-decoration-line-through"},cs={class:"fs-4"},rs=l(()=>s("i",{class:"bi bi-cart4"},null,-1)),ps=l(()=>s("span",{class:"text-white ms-2"},"加入購物車",-1)),hs=[rs,ps];function ms(e,o,_s,us,t,u){const b=h("Loading"),v=h("SellShrimp");return a(),n(_,null,[m(b,{active:e.isLoading,"z-index":1060},null,8,["active"]),s("div",C,[s("div",E,[s("div",B,[s("div",M,[s("img",{style:{width:"400px"},class:"d-block img-fluid",src:t.shrimp.imageUrl,alt:""},null,8,j)]),s("div",D,[H,s("div",O,[s("div",U,[F,t.business_data.all==="24H"?(a(),n("p",q,i(t.business_data.all),1)):(a(),n("div",z,[(a(!0),n(_,null,g(t.days,d=>(a(),n("p",{key:d},i(u.getBusinessHour(d)),1))),128))]))]),s("div",W,[G,t.shrimp_type.male?(a(),n("div",J,i(t.shrimp_type.male)+i(t.shrimp.unit),1)):c("",!0),t.shrimp_type.female?(a(),n("div",K,i(t.shrimp_type.female)+i(t.shrimp.unit),1)):c("",!0),t.shrimp_type.mix?(a(),n("div",Q,i(t.shrimp_type.mix)+i(t.shrimp.unit),1)):c("",!0),t.shrimp_type.dragon?(a(),n("div",X,i(t.shrimp_type.dragon)+i(t.shrimp.unit),1)):c("",!0)])])])]),s("div",Y,[s("div",Z,[s("h2",$,i(t.shrimp.title),1),s("p",null,i(t.shrimp.content),1),s("p",null,"0"+i(t.shrimp.phone),1)]),ss,s("div",ts,[es,s("a",{onClick:o[0]||(o[0]=r(d=>e.adjustmentTickets("-"),["prevent"])),class:"d-inline-block border border-white py-xl-3 px-xl-4 py-2 px-3",href:"#"},os),S(s("input",{type:"number","onUpdate:modelValue":o[1]||(o[1]=d=>e.ticketNum=d),class:"d-inline-block border border-white py-xl-3 py-2 text-center text-white",disabled:""},null,512),[[w,e.ticketNum]]),s("a",{onClick:o[2]||(o[2]=r(d=>e.adjustmentTickets("+"),["prevent"])),class:"d-inline-block border border-white py-xl-3 px-xl-4 py-2 px-3",href:"#"},ns)]),s("div",ls,[s("span",ds,"原價NT$ "+i(t.shrimp.origin_price),1),s("span",cs,"NT$ "+i(t.shrimp.price),1),s("button",{onClick:o[3]||(o[3]=r(d=>e.addToCart(t.shrimp.id),["prevent"])),class:"btn btn-lg btn-outline-primary ms-xl-5 my-3 my-lx-0",type:"button"},hs)])])])]),m(v,{ref:"sellModal"},null,512)],64)}const ys=f(A,[["render",ms],["__scopeId","data-v-3ba49f8a"]]);export{ys as default};
