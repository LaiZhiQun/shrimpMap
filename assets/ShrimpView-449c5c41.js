import{_ as u,m,g as f,o as d,c as l,b as s,t as a,F as r,h as p,w as c,k as b,v,a as k,p as x,e as y,l as g}from"./index-6e8b2262.js";import{u as h}from"./cart-de8cbb27.js";const{VITE_APP_URL:w,VITE_APP_PATH:R}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"brad5566",BASE_URL:"/shrimpMap/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},S={data(){return{shrimp:{},business_data:{},days:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"]}},methods:{getShrimp(){const{id:t}=this.$route.params;this.$http({method:"get",url:`${w}api/${R}/product/${t}`}).then(e=>{this.shrimp=e.data.product,this.business_data=e.data.product.business_data})},getBusinessHour(t){return this.business_data.rest===t?`${t}：休息`:`${t}：${this.business_data.all}`},...m(h,["addToCart","adjustmentTickets"])},computed:{...f(h,["ticketNum"])},mounted(){this.getShrimp()}},n=t=>(x("data-v-1af42d7f"),t=t(),y(),t),T={class:"container mt-8"},P={class:"row"},V={class:"col-xl-6 text-white"},A={class:"d-flex justify-content-center"},E=["src"],I={class:"m-5"},N=n(()=>s("h4",null,"其他資訊",-1)),B={class:"row mt-3"},C={class:"col-6"},D=n(()=>s("h5",null,"營業時間：",-1)),H={key:0},O={key:1},U={class:"col-6"},j=n(()=>s("h5",null,"消費方式：",-1)),L={class:"col-xl-6 text-white position-relative"},M=n(()=>s("a",{class:"text-decoration-none d-block p-3 position-absolute bottom-0 end-0 text-white",href:"#"},[s("i",{class:"bi bi-clipboard"}),g(" 我要賣蝦")],-1)),$={class:"m-5"},F={class:"mb-5"},q=k('<hr class="mx-5 opacity-25" data-v-1af42d7f><div class="m-5" data-v-1af42d7f><h4 data-v-1af42d7f>優惠套票</h4><div class="mt-4" data-v-1af42d7f><button type="button" class="btn btn-primary" data-v-1af42d7f>1小時</button><button type="button" class="btn ms-xl-4 ms-1 btn-primary" disabled data-v-1af42d7f>2小時</button><button type="button" class="btn ms-xl-4 ms-1 btn-primary" disabled data-v-1af42d7f>3小時</button></div><div class="mt-4" data-v-1af42d7f><div class="form-check form-check-inline" data-v-1af42d7f><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked data-v-1af42d7f><label class="form-check-label" for="inlineRadio1" data-v-1af42d7f>泰國蝦池</label></div><div class="form-check form-check-inline" data-v-1af42d7f><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" disabled data-v-1af42d7f><label class="form-check-label" for="inlineRadio2" data-v-1af42d7f>龍蝦池</label></div><div class="form-check form-check-inline" data-v-1af42d7f><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled data-v-1af42d7f><label class="form-check-label" for="inlineRadio3" data-v-1af42d7f>其他池種</label></div></div></div>',2),z={class:"m-5"},G=n(()=>s("span",{class:"d-inline-block pe-3"},"數量",-1)),J=n(()=>s("i",{class:"bi bi-dash-lg"},null,-1)),K=[J],Q=n(()=>s("i",{class:"bi bi-plus-lg"},null,-1)),W=[Q],X={class:"m-5 ps-3 ps-xl-0"},Y={class:"d-block fs-6 text-decoration-line-through"},Z={class:"fs-4"},ss=n(()=>s("i",{class:"bi bi-cart4"},null,-1)),ts=n(()=>s("span",{class:"text-white ms-2"},"加入購物車",-1)),es=[ss,ts];function is(t,e,os,as,i,_){return d(),l("div",T,[s("div",P,[s("div",V,[s("div",A,[s("img",{style:{width:"400px"},class:"d-block img-fluid",src:i.shrimp.imageUrl,alt:""},null,8,E)]),s("div",I,[N,s("div",B,[s("div",C,[D,i.business_data.all==="24H"?(d(),l("p",H,a(i.business_data.all),1)):(d(),l("div",O,[(d(!0),l(r,null,p(i.days,o=>(d(),l("p",{key:o},a(_.getBusinessHour(o)),1))),128))]))]),s("div",U,[j,(d(!0),l(r,null,p(i.shrimp.shrimp_price,o=>(d(),l("div",{key:o},[s("p",null,a(o)+a(i.shrimp.unit),1)]))),128))])])])]),s("div",L,[M,s("div",$,[s("h2",F,a(i.shrimp.title),1),s("p",null,a(i.shrimp.content),1),s("p",null,a(i.shrimp.phone),1)]),q,s("div",z,[G,s("a",{onClick:e[0]||(e[0]=c(o=>t.adjustmentTickets("-"),["prevent"])),class:"d-inline-block border border-white py-xl-3 px-xl-4 py-2 px-3",href:"#"},K),b(s("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=o=>t.ticketNum=o),class:"d-inline-block border border-white py-xl-3 py-2 text-center text-white",disabled:""},null,512),[[v,t.ticketNum]]),s("a",{onClick:e[2]||(e[2]=c(o=>t.adjustmentTickets("+"),["prevent"])),class:"d-inline-block border border-white py-xl-3 px-xl-4 py-2 px-3",href:"#"},W)]),s("div",X,[s("span",Y,"原價NT$ "+a(i.shrimp.origin_price),1),s("span",Z,"NT$ "+a(i.shrimp.price),1),s("button",{onClick:e[3]||(e[3]=c(o=>t.addToCart(i.shrimp.id),["prevent"])),class:"btn btn-lg btn-outline-primary ms-xl-5 my-3 my-lx-0",type:"button"},es)])])])])}const ls=u(S,[["render",is],["__scopeId","data-v-1af42d7f"]]);export{ls as default};
