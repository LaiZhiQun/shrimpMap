import{_ as f,r as n,o as _,c as p,d as a,i as b,b as e,n as i,k as h,v as V}from"./index-8d9ace54.js";const{VITE_APP_URL:v,VITE_APP_PATH:x}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"brad5566",BASE_URL:"/https://github.com/LaiZhiQun/shrimpMap.git/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},g={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{createOrder(){const d=this.form;this.$http({method:"post",url:`${v}api/${x}/order`,data:{data:d}}).then(s=>{alert(s.data.message),this.$refs.form.resetForm(),this.form.message="",this.$router.push("/")})}}},P={class:"my-5 row justify-content-center text-white"},E={class:"mb-3"},U=e("label",{for:"email",class:"form-label"},"Email",-1),k={class:"mb-3"},y=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),A={class:"mb-3"},T=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),w={class:"mb-3"},F=e("label",{for:"address",class:"form-label"},"收件人地址",-1),R={class:"mb-3"},S=e("label",{for:"message",class:"form-label"},"留言",-1),q=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function B(d,s,D,I,l,c){const t=n("VField"),r=n("error-message"),u=n("VForm");return _(),p("div",P,[a(u,{ref:"form",class:"col-md-6 col-7",onSubmit:c.createOrder},{default:b(({errors:m})=>[e("div",E,[U,a(t,{id:"email",name:"email",type:"email",class:i(["form-control",{"is-invalid":m.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=o=>l.form.user.email=o)},null,8,["class","modelValue"]),a(r,{name:"email",class:"invalid-feedback"})]),e("div",k,[y,a(t,{id:"name",name:"姓名",type:"text",class:i(["form-control",{"is-invalid":m.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=o=>l.form.user.name=o)},null,8,["class","modelValue"]),a(r,{name:"姓名",class:"invalid-feedback"})]),e("div",A,[T,a(t,{id:"tel",name:"電話",type:"text",class:i(["form-control",{"is-invalid":m.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:l.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=o=>l.form.user.tel=o)},null,8,["class","modelValue"]),a(r,{name:"電話",class:"invalid-feedback"})]),e("div",w,[F,a(t,{id:"address",name:"地址",type:"text",class:i(["form-control",{"is-invalid":m.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=o=>l.form.user.address=o)},null,8,["class","modelValue"]),a(r,{name:"地址",class:"invalid-feedback"})]),e("div",R,[S,h(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=o=>l.form.message=o)},null,512),[[V,l.form.message]])]),q]),_:1},8,["onSubmit"])])}const O=f(g,[["render",B]]);export{O as default};
