import{_,m as h,r as i,o as b,c as V,d as o,b as e,i as v,F as x,n as m,k as g,v as P,u as d}from"./index-55a00b2a.js";import{u as y}from"./cart-3b47baf0.js";const{VITE_APP_URL:E,VITE_APP_PATH:L}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"brad5566",BASE_URL:"/shrimpMap/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},A={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""},isLoading:!1}},methods:{createOrder(){this.isLoading=!0;const c=this.form;this.$http({method:"post",url:`${E}api/${L}/order`,data:{data:c}}).then(s=>{this.$refs.form.resetForm(),this.form.message="",this.getCarts(),this.isLoading=!1,this.$router.push("/orderSuccess")})},...h(y,["getCarts"])}},F={class:"my-5 row justify-content-center text-white"},T=e("div",{class:"text-end mt-10 mb-5"},[e("span",{class:"text-primary"},"1. 選購商品 > "),e("span",{class:"text-primary"},"2. 填寫資料 > "),e("span",{class:"text-secondary"},"3. 訂單完成")],-1),U=e("p",{class:"text-danger"},"*為必填選項",-1),k={class:"mb-3"},S=e("label",{for:"email",class:"form-label"},[e("span",{class:"text-danger"},"*"),d(" Email")],-1),w={class:"mb-3"},C=e("label",{for:"name",class:"form-label"},[e("span",{class:"text-danger"},"*"),d(" 收件人姓名")],-1),R={class:"mb-3"},q=e("label",{for:"tel",class:"form-label"},[e("span",{class:"text-danger"},"*"),d(" 收件人電話")],-1),B={class:"mb-3"},D=e("label",{for:"address",class:"form-label"},[e("span",{class:"text-danger"},"*"),d(" 收件人地址")],-1),I={class:"mb-3"},O=e("label",{for:"message",class:"form-label"},"留言",-1),M=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function N(c,s,z,H,a,u){const f=i("Loading"),t=i("VField"),r=i("error-message"),p=i("VForm");return b(),V(x,null,[o(f,{active:a.isLoading,"z-index":1060},null,8,["active"]),e("div",F,[o(p,{ref:"form",class:"col-md-6 col-7",onSubmit:u.createOrder},{default:v(({errors:n})=>[T,U,e("div",k,[S,o(t,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":n.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:a.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=l=>a.form.user.email=l)},null,8,["class","modelValue"]),o(r,{name:"email",class:"invalid-feedback"})]),e("div",w,[C,o(t,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":n.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:a.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=l=>a.form.user.name=l)},null,8,["class","modelValue"]),o(r,{name:"姓名",class:"invalid-feedback"})]),e("div",R,[q,o(t,{id:"tel",name:"電話",type:"text",class:m(["form-control",{"is-invalid":n.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:a.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=l=>a.form.user.tel=l)},null,8,["class","modelValue"]),o(r,{name:"電話",class:"invalid-feedback"})]),e("div",B,[D,o(t,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":n.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:a.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=l=>a.form.user.address=l)},null,8,["class","modelValue"]),o(r,{name:"地址",class:"invalid-feedback"})]),e("div",I,[O,g(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=l=>a.form.message=l)},null,512),[[P,a.form.message]])]),M]),_:1},8,["onSubmit"])])],64)}const J=_(A,[["render",N]]);export{J as default};
