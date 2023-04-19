<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import CartToForm from '@/components/CartToForm.vue'
import useCartStore from '@/stores/cart'
import useIntoCityStore from '@/stores/intoCity'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      coupon_code: ''
    }
  },
  components: {
    CartToForm
  },
  computed: {
    ...mapState(useCartStore, ['cart', 'isLoading', 'isAdjustQty']),
    ...mapWritableState(useCartStore, ['isLoading'])
  },
  methods: {
    ...mapActions(useCartStore, ['adjustmentTicket', 'getCarts', 'removeCart', 'updateCartNum', 'updateCartQty', 'updateCartQty']),
    ...mapActions(useIntoCityStore, ['closeSidebar']),
    addCouponCode () {
      this.isLoading = true
      const coupon = {
        code: this.coupon_code
      }
      this.$http({
        method: 'post',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/coupon`,
        data: { data: coupon }
      }).then(res => {
        alert('加入優惠券')
        this.getCarts()
        this.isLoading = false
      })
    }
  },
  mounted () {
    this.getCarts()
    this.closeSidebar()
  }
}
</script>

<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
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
              <img class="d-block" :src="item.product.imageUrl" alt="" style="width: 80px;">
              <div class="text-end text-xl-start ms-2">
                <p class="h6 mt-1">{{ item.product.title }}</p>
                <button @click.prevent="removeCart(item.id)" class="btn btn-sm btn-danger mt-2" type="button">移除</button>
              </div>
            </div>
          </th>
          <td class="align-middle">
            <a @click.prevent="adjustmentTicket('-', item.id, item.qty, item.product.id)"
              :class="{ 'mouse-disabled': item.qty == 1 }" class="d-inline-block px-xl-3 px-2" href="#"><i
                class="bi bi-dash-lg"></i></a>
            <input :value="item.qty" type="number" class="h6 text-center input-size ps-xl-3" disabled>
            <span class="h6 text-center input-size ps-xl-3"></span>
            <a @click.prevent="adjustmentTicket('+', item.id, item.qty, item.product.id)"
              class="d-inline-block px-xl-3 px-2" href="#"><i class="bi bi-plus-lg"></i></a>
          </td>
          <td class="text-xl-end text-center align-middle pe-xl-5 h4">
            ${{ $filters.currency(item.final_total) }}
            <div v-if="item.coupon" class="text-end h6 mt-2 text-success">套用優惠券</div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" class="text-end h5">總計</td>
          <td class="text-xl-end text-center px-xl-5 h5">$ {{ $filters.currency(cart.total) }}</td>
        </tr>
        <tr v-if="cart.final_total !== cart.total">
          <td colspan="2" class="text-end h5 text-success">折價後</td>
          <td class="text-xl-end text-center px-xl-5 h5">$ {{ $filters.currency(cart.final_total) }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="input-group mb-3 input-group-sm col-xl-6 col-12 ps-xl-0 ps-5 ms-auto">
      <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼 goodprice" />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary text-white" type="button" @click="addCouponCode">
          套用優惠碼
        </button>
      </div>
    </div>
    <div v-show="isAdjustQty" class="text-end mb-3 mb-xl-0">
      <button @click.prevent="updateCartQty" class="btn btn-outline-primary text-white" type="button">點選更新購物車數量與金額</button>
    </div>
    <div v-show="!isAdjustQty">
      <CartToForm></CartToForm>
    </div>
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
    width: 2rem;
  }
}
</style>
