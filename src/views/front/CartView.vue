<script>
// import { debounce } from 'lodash'
import CartToForm from '../../components/CartToForm.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      cart: {}
    }
  },
  components: {
    CartToForm
  },
  methods: {
    getCarts () {
      this.$http({
        method: 'get',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/cart`
      }).then(res => {
        this.cart = res.data.data
      })
    },
    adjustmentTicket (state, cartId, qty, productId) {
      const data = {
        product_id: productId,
        qty
      }
      if (state === '+') {
        data.qty++
        this.updateCartNum(data, cartId)
      } else if (state === '-') {
        data.qty--
        this.updateCartNum(data, cartId)
      }
    },
    updateCartNum (data, cartId) {
      this.$http({
        method: 'put',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${cartId}`,
        data: { data }
      }).then(res => {
        this.getCarts()
      })
    },
    removeCart (cartId) {
      this.$http({
        method: 'delete',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${cartId}`
      }).then(res => {
        alert('已刪除該品項')
        this.getCarts()
      })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
<template>
  <div v-if="cart.carts && cart.carts.length > 0" class="container">
    <table class="table bg-white caption-top">
      <caption class="ms-5 text-white h2">購物車</caption>
      <thead>
        <tr class="bg-title h4">
          <th class="ps-xl-5 text-center text-xl-start" scope="col">店家</th>
          <th class="ps-xl-4 text-center text-xl-start" scope="col">數量</th>
          <th class="text-center text-xl-end pe-xl-5" scope="col">金額</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart.carts" :key="item.id">
          <th class="text-end" scope="row">
            <div class="d-xl-flex flex-xl-row justify-content-xl-start d-flex flex-column align-items-end  ms-xl-5">
              <img class="d-block"
                :src="item.product.imageUrl"
                alt="" style="width: 80px;">
              <div class="text-end text-xl-start ms-2">
                <p class="h6 mt-1">{{ item.product.title }}</p>
                <button @click.prevent="removeCart(item.id)" class="btn btn-sm btn-danger mt-2" type="button">移除</button>
              </div>
            </div>
          </th>
          <td class="align-middle">
            <a @click.prevent="adjustmentTicket('-', item.id, item.qty, item.product.id)" :class="{ 'mouse-disabled': item.qty == 1}" class="d-inline-block px-xl-3 px-2" href="#"><i class="bi bi-dash-lg"></i></a>
            <input :value="item.qty" type="number" class="h6 text-center input-size ps-xl-3" disabled>
            <span class="h6 text-center input-size ps-xl-3"></span>
            <a @click.prevent="adjustmentTicket('+', item.id, item.qty, item.product.id)" class="d-inline-block px-xl-3 px-2" href="#"><i class="bi bi-plus-lg"></i></a>
          </td>
          <td class="text-xl-end text-center align-middle pe-xl-5 h4">
            ${{ item.final_total }}
          </td>
        </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="2" class="text-end h5">總計</td>
        <td class="text-xl-end text-center px-xl-5 h5">$ {{ cart.total }}</td>
      </tr>
    </tfoot>
    </table>
    <CartToForm></CartToForm>
  </div>
  <div v-else class="d-flex justify-content-center align-items-center">
    <h2 class="text-white py-10">目前購物車是空的</h2>
  </div>
</template>
<style scoped>
.bg-title {
  background-color: #287bff;
}
.input-size {
  width: 4rem;
}
.mouse-disabled {
  pointer-events: none
}
@media (max-width: 576px) {
  .input-size {
    width: 1rem;
  }
}
</style>
