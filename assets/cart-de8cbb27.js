import{u as o,x as i}from"./index-6e8b2262.js";const{VITE_APP_URL:r,VITE_APP_PATH:u}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"brad5566",BASE_URL:"/shrimpMap/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},c=o("cart",{state:()=>({cart:{},ticketNum:1,shakeState:!1}),actions:{getCarts(){i({method:"get",url:`${r}api/${u}/cart`}).then(t=>{this.cart=t.data.data})},adjustmentTicket(t,e,a,h){const s={product_id:h,qty:a};t==="+"?(s.qty++,this.updateCartNum(s,e)):t==="-"&&(s.qty--,this.updateCartNum(s,e))},updateCartNum(t,e){i({method:"put",url:`${r}api/${u}/cart/${e}`,data:{data:t}}).then(a=>{this.getCarts()})},removeCart(t){i({method:"delete",url:`${r}api/${u}/cart/${t}`}).then(e=>{alert("已刪除該品項"),this.getCarts()})},addToCart(t){const e={product_id:t,qty:this.ticketNum};i({method:"post",url:`${r}v2/api/${u}/cart`,data:{data:e}}).then(a=>{alert(a.data.message),this.getCarts(),this.ticketNum=1,setTimeout(()=>{this.shakeState=!1},1e3),this.shakeState=!0})},adjustmentTickets(t){t==="+"?this.ticketNum++:t==="-"&&this.ticketNum>1&&this.ticketNum--}}});export{c as u};
