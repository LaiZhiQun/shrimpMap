import{_ as f,o as a,c as r,b as t,k as d,v as i,a3 as v,a4 as U,a as y,q as g,t as P,m as V,r as m,F as A,h as T,d as _}from"./index-2149ffc1.js";import{u as L}from"./login-cf5c991e.js";import{P as E}from"./PaginationComponent-5645ad98.js";import{m as C}from"./modalMixin-3edd4f47.js";import{M as w}from"./bootstrap.esm-434bcbc7.js";const{VITE_APP_URL:D,VITE_APP_PATH:R}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"brad5566",BASE_URL:"/shrimpMap/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},$={props:["product","isNew"],data(){return{tempProduct:{imagesUrl:[],business_data:{},shrimp_type:{}}}},watch:{product(){this.tempProduct=this.product}},mixins:[C],emits:["updateProduct"],computed:{isDisabled(){return Array.isArray(this.tempProduct.imagesUrl)?this.tempProduct.imagesUrl.slice(-1)[0]==="":!1}},methods:{handleUpload(l){const o=l.target.files[0],c=new FormData;c.append("file-to-upload",o),this.$http({method:"post",url:`${D}api/${R}/admin/upload`,data:c}).then(u=>{console.log(u.data.imageUrl)}).catch(u=>{console.log(u)})}}},I={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},S={class:"modal-dialog modal-xl"},H={class:"modal-content border-0"},N={class:"modal-header bg-dark text-white"},B={id:"productModalLabel",class:"modal-title"},O={key:0},F={key:1},q=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),j={class:"modal-body"},z={class:"row"},G={class:"col-sm-4"},J={class:"mb-3"},K=t("label",{for:"imageUrl",class:"form-label text-dark"},"店家圖片",-1),Q=["src"],W={action:"/api/thisismycourse2/admin/upload",enctype:"multipart/form-data",method:"post"},X={class:"col-sm-8"},Y={class:"mb-3"},Z=t("label",{for:"title",class:"form-label text-dark"},"店家名稱",-1),tt={class:"row"},ot={class:"mb-3 col-md-6"},et=t("label",{for:"category",class:"form-label text-dark"},"縣市",-1),st=y('<option disabled value="">請選擇縣市</option><option value="基隆市">基隆市</option><option value="台北市">台北市</option><option value="新北市">新北市</option><option value="桃園市">桃園市</option><option value="新竹縣">新竹縣</option><option value="新竹市">新竹市</option><option value="苗栗縣">苗栗縣</option><option value="台中市">台中市</option><option value="彰化縣">彰化縣</option><option value="南投縣">南投縣</option><option value="雲林縣">雲林縣</option><option value="嘉義縣">嘉義縣</option><option value="嘉義市">嘉義市</option><option value="台南市">台南市</option><option value="高雄市">高雄市</option><option value="屏東縣">屏東縣</option><option value="台東縣">台東縣</option><option value="花蓮縣">花蓮縣</option><option value="宜蘭縣">宜蘭縣</option>',20),lt=[st],dt={class:"mb-3 col-md-6"},it=t("label",{for:"price",class:"form-label text-dark"},"單位(元/H)",-1),nt={class:"row"},at={class:"mb-3 col-md-6"},rt=t("label",{for:"origin_price",class:"form-label text-dark"},"原價",-1),ct={class:"mb-3 col-md-6"},pt=t("label",{for:"price",class:"form-label text-dark"},"售價",-1),ut={class:"mb-3 col-md-6"},mt=t("label",{for:"businessTime",class:"form-label text-dark"},"營業時間",-1),_t={class:"mb-3 col-md-6"},ht=t("label",{for:"restTime",class:"form-label text-dark"},"休息日",-1),bt=y('<option disabled value="">請選擇休息日</option><option value="星期一">星期一</option><option value="星期二">星期二</option><option value="星期三">星期三</option><option value="星期四">星期四</option><option value="星期五">星期五</option><option value="星期六">星期六</option><option value="星期日">星期日</option>',8),Pt=[bt],ft={class:"mb-3 col-md-6"},vt=t("label",{for:"price",class:"form-label text-dark"},"店家電話",-1),gt={class:"mb-3"},yt=t("label",{for:"content",class:"form-label text-dark"},"地址",-1),xt=t("hr",null,null,-1),Mt={class:"mb-3"},kt=t("label",{for:"description",class:"form-label text-dark"},"蝦池種類描述",-1),Ut={class:"row"},Vt={class:"mb-3 col-md-6"},At=t("label",{for:"cast1",class:"form-label text-dark"},"蝦池1",-1),Tt={class:"mb-3 col-md-6"},Lt=t("label",{for:"cast2",class:"form-label text-dark"},"蝦池2",-1),Et={class:"mb-3 col-md-6"},Ct=t("label",{for:"cast3",class:"form-label text-dark"},"蝦池3",-1),wt={class:"mb-3 col-md-6"},Dt=t("label",{for:"cast4",class:"form-label text-dark"},"蝦池4",-1),Rt={class:"mb-3"},$t={class:"form-check"},It=t("label",{class:"form-check-label text-dark",for:"is_enabled"},"是否啟用",-1),St={class:"modal-footer"},Ht=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Nt(l,o,c,u,e,n){return a(),r("div",I,[t("div",S,[t("div",H,[t("div",N,[t("h5",B,[c.isNew?(a(),r("span",O,"新增店家")):(a(),r("span",F,"編輯店家"))]),q]),t("div",j,[t("div",z,[t("div",G,[t("div",J,[K,d(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProduct.imageUrl=s),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[i,e.tempProduct.imageUrl]]),t("img",{class:"img-fluid",src:e.tempProduct.imageUrl},null,8,Q)]),t("div",null,[t("form",W,[t("input",{onChange:o[1]||(o[1]=s=>n.handleUpload(s)),class:"mx-5",type:"file",name:"file-to-upload"},null,32)])])]),t("div",X,[t("div",Y,[Z,d(t("input",{id:"title","onUpdate:modelValue":o[2]||(o[2]=s=>e.tempProduct.title=s),type:"text",class:"form-control",placeholder:"請輸入店家名稱"},null,512),[[i,e.tempProduct.title]])]),t("div",tt,[t("div",ot,[et,d(t("select",{id:"category","onUpdate:modelValue":o[3]||(o[3]=s=>e.tempProduct.category=s),class:"form-select"},lt,512),[[v,e.tempProduct.category]])]),t("div",dt,[it,d(t("input",{id:"unit","onUpdate:modelValue":o[4]||(o[4]=s=>e.tempProduct.unit=s),type:"text",class:"form-control",placeholder:"請輸入(多少錢/時間)"},null,512),[[i,e.tempProduct.unit]])])]),t("div",nt,[t("div",at,[rt,d(t("input",{id:"origin_price","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProduct.origin_price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[i,e.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",ct,[pt,d(t("input",{id:"price","onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProduct.price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[i,e.tempProduct.price,void 0,{number:!0}]])]),t("div",ut,[mt,d(t("input",{id:"businessTime","onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProduct.business_data.all=s),type:"text",class:"form-control",placeholder:"請輸入營業時間"},null,512),[[i,e.tempProduct.business_data.all]])]),t("div",_t,[ht,d(t("select",{id:"restTime","onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProduct.business_data.rest=s),class:"form-select"},Pt,512),[[v,e.tempProduct.business_data.rest]])]),t("div",ft,[vt,d(t("input",{id:"price","onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProduct.phone=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入電話"},null,512),[[i,e.tempProduct.phone]])])]),t("div",gt,[yt,d(t("input",{id:"description","onUpdate:modelValue":o[10]||(o[10]=s=>e.tempProduct.content=s),type:"text",class:"form-control",placeholder:"請輸入店家地址"},null,512),[[i,e.tempProduct.content]])]),xt,t("div",Mt,[kt,d(t("input",{id:"description","onUpdate:modelValue":o[11]||(o[11]=s=>e.tempProduct.description=s),type:"text",class:"form-control",placeholder:"請輸入釣池種類"},null,512),[[i,e.tempProduct.description]])]),t("div",Ut,[t("div",Vt,[At,d(t("input",{id:"cast1","onUpdate:modelValue":o[12]||(o[12]=s=>e.tempProduct.shrimp_type.male=s),type:"text",class:"form-control",placeholder:"公蝦池 售價"},null,512),[[i,e.tempProduct.shrimp_type.male]])]),t("div",Tt,[Lt,d(t("input",{id:"cast2","onUpdate:modelValue":o[13]||(o[13]=s=>e.tempProduct.shrimp_type.female=s),type:"text",class:"form-control",placeholder:"母蝦池 售價"},null,512),[[i,e.tempProduct.shrimp_type.female]])]),t("div",Et,[Ct,d(t("input",{id:"cast3","onUpdate:modelValue":o[14]||(o[14]=s=>e.tempProduct.shrimp_type.mix=s),type:"text",class:"form-control",placeholder:"綜合池 售價"},null,512),[[i,e.tempProduct.shrimp_type.mix]])]),t("div",wt,[Dt,d(t("input",{id:"cast4","onUpdate:modelValue":o[15]||(o[15]=s=>e.tempProduct.shrimp_type.dragon=s),type:"text",class:"form-control",placeholder:"龍蝦池 售價"},null,512),[[i,e.tempProduct.shrimp_type.dragon]])])]),t("div",Rt,[t("div",$t,[d(t("input",{id:"is_enabled","onUpdate:modelValue":o[16]||(o[16]=s=>e.tempProduct.is_enabled=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[U,e.tempProduct.is_enabled]]),It])])])])]),t("div",St,[Ht,t("button",{type:"button",class:"btn btn-primary",onClick:o[17]||(o[17]=s=>l.$emit("updateProduct",e.tempProduct))}," 確認 ")])])])],512)}const Bt=f($,[["render",Nt]]),{VITE_APP_URL:Ot,VITE_APP_PATH:Ft}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"brad5566",BASE_URL:"/shrimpMap/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},qt={props:["tempProduct","getProductsList"],methods:{delProduct(){this.$http({method:"delete",url:`${Ot}api/${Ft}/admin/product/${this.tempProduct.id}`}).then(l=>{alert(l.data.message),this.$emit("closeModal","del"),this.getProductsList()}).catch(l=>{console.log(l.data),alert(l.data.message)})}}},jt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},zt={class:"modal-dialog"},Gt={class:"modal-content border-0"},Jt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除店家")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Kt={class:"modal-body text-dark"},Qt={class:"text-danger text-dark"},Wt={class:"modal-footer"},Xt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Yt(l,o,c,u,e,n){return a(),r("div",jt,[t("div",zt,[t("div",Gt,[Jt,t("div",Kt,[g(" 是否刪除 "),t("strong",Qt,P(c.tempProduct.title),1),g(" 店家(刪除後將無法恢復)。 ")]),t("div",Wt,[Xt,t("button",{type:"button",onClick:o[0]||(o[0]=(...s)=>n.delProduct&&n.delProduct(...s)),class:"btn btn-danger"}," 確認刪除 ")])])])],512)}const Zt=f(qt,[["render",Yt]]),{VITE_APP_URL:h,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"brad5566",BASE_URL:"/shrimpMap/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},to={data(){return{products:[],page:{},tempProduct:{imagesUrl:[],business_data:{rest:"",all:""}},isNew:!1}},components:{PaginationComponent:E,ProductModalComponent:Bt,DelComponent:Zt},methods:{...V(L,["checkLogin"]),getProductsList(l=1){this.$http({method:"get",url:`${h}api/${b}/admin/products/?page=${l}`}).then(o=>{this.products=o.data.products,this.page=o.data.pagination}).catch(o=>{alert(o.data.message)})},openModal(l,o){l==="edit"?(this.tempProduct={...o},this.isNew=!1,this.$refs.productModal.openModal()):l==="delete"?(this.tempProduct={...o},this.delProductModal.show()):l==="new"&&(this.tempProduct={imagesUrl:[],business_data:{},shrimp_type:{}},this.isNew=!0,this.$refs.productModal.openModal())},updateProduct(){this.isNew?this.$http({method:"post",url:`${h}api/${b}/admin/product`,data:{data:this.tempProduct}}).then(l=>{alert("已新增店家"),this.$refs.productModal.hideModal(),this.getProductsList()}).catch(l=>{alert(l.data.message)}):this.$http({method:"put",url:`${h}api/${b}/admin/product/${this.tempProduct.id}`,data:{data:this.tempProduct}}).then(l=>{alert(l.data.message),this.$refs.productModal.hideModal(),this.getProductsList()}).catch(l=>{alert(l.data.message)})},closeModal(l){l==="del"&&this.delProductModal.hide()}},mounted(){this.checkLogin(),this.getProductsList(),this.delProductModal=new w(this.$refs.DelComponent.$refs.delProductModal)}},oo={class:"container"},eo={class:"text-end mt-4"},so={class:"table mt-4 text-white"},lo=t("thead",null,[t("tr",null,[t("th",{width:"70"}," 城市 "),t("th",null,"店名"),t("th",null," 啟用 "),t("th",null," 編輯 ")])],-1),io={key:0,class:"text-success"},no={key:1},ao={class:"btn-group"},ro=["onClick"],co=["onClick"];function po(l,o,c,u,e,n){const s=m("PaginationComponent"),x=m("ProductModalComponent"),M=m("DelComponent");return a(),r("div",oo,[t("div",eo,[t("button",{onClick:o[0]||(o[0]=p=>n.openModal("new")),class:"btn btn-primary"}," 建立新的店家 ")]),t("table",so,[lo,t("tbody",null,[(a(!0),r(A,null,T(e.products,p=>(a(),r("tr",{key:p.id},[t("td",null,P(p.category),1),t("td",null,P(p.title),1),t("td",null,[p.is_enabled?(a(),r("span",io,"啟用")):(a(),r("span",no,"不啟用"))]),t("td",null,[t("div",ao,[t("button",{onClick:k=>n.openModal("edit",p),type:"button",class:"btn btn-outline-primary btn-sm"}," 編輯 ",8,ro),t("button",{onClick:k=>n.openModal("delete",p),type:"button",class:"btn btn-outline-danger btn-sm"}," 刪除 ",8,co)])])]))),128))])]),_(s,{pages:e.page,onEmitPages:n.getProductsList},null,8,["pages","onEmitPages"]),_(x,{ref:"productModal",onUpdateProduct:n.updateProduct,product:e.tempProduct},null,8,["onUpdateProduct","product"]),_(M,{ref:"DelComponent",onCloseModal:n.closeModal,tempProduct:e.tempProduct,getProductsList:n.getProductsList},null,8,["onCloseModal","tempProduct","getProductsList"])])}const Po=f(to,[["render",po]]);export{Po as default};
