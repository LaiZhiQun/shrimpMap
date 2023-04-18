<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import useCartStore from '@/stores/cart'
import SellShrimp from '@/components/SellInfoModal.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      shrimp: {},
      business_data: {},
      shrimp_type: {},
      days: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
    }
  },
  components: {
    SellShrimp
  },
  methods: {
    getShrimp () {
      this.isLoading = true
      const { id } = this.$route.params
      this.$http({
        method: 'get',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/product/${id}`
      }).then((res) => {
        this.shrimp = res.data.product
        this.business_data = res.data.product.business_data
        this.shrimp_type = res.data.product.shrimp_type
        this.isLoading = false
      })
    },
    getBusinessHour (day) {
      const isRest = this.business_data.rest === day
      return isRest ? `${day}：休息` : `${day}：${this.business_data.all}`
    },
    ...mapActions(useCartStore, ['addToCart', 'adjustmentTickets', 'success'])
  },
  computed: {
    ...mapState(useCartStore, ['ticketNum', 'isLoading']),
    ...mapWritableState(useCartStore, ['isLoading'])
  },
  mounted () {
    this.getShrimp()
  }
}
</script>
<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container mt-8">
    <div class="row">
      <div class="col-xl-6 text-white">
        <div class="d-flex justify-content-center">
          <img style="width: 400px;" class="d-block img-fluid" :src="shrimp.imageUrl" alt="">
        </div>
        <div class="m-5">
          <h4>其他資訊 <span class="text-danger h6">( 實際資訊以店家為主 )</span></h4>
          <div class="row mt-3">
            <div class="col-6">
              <h5>營業時間：</h5>
              <p v-if="business_data.all === '24H'">{{ business_data.all }}</p>
              <div v-else>
                <p v-for="day in days" :key="day">{{ getBusinessHour(day) }}</p>
              </div>
            </div>
            <div class="col-6">
              <h5>消費方式：</h5>
              <div v-if="shrimp_type.male">{{ shrimp_type.male }}{{ shrimp.unit }}</div>
              <div v-if="shrimp_type.female">{{ shrimp_type.female }}{{ shrimp.unit }}</div>
              <div v-if="shrimp_type.mix">{{ shrimp_type.mix }}{{ shrimp.unit }}</div>
              <div v-if="shrimp_type.dragon">{{ shrimp_type.dragon }}{{ shrimp.unit }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 text-white  position-relative">
        <div class="m-5">
          <h2 class="mb-5">{{ shrimp.title }}</h2>
          <p>{{ shrimp.content }}</p>
          <p>0{{ shrimp.phone }}</p>
        </div>
        <hr class="mx-5 opacity-25">
        <div class="m-5">
          <h4>優惠套票</h4>
          <div class="mt-4">
            <button type="button" class="btn btn-primary">1小時</button>
            <button type="button" class="btn ms-xl-4 ms-1 btn-primary" disabled>2小時</button>
            <button type="button" class="btn ms-xl-4 ms-1 btn-primary" disabled>3小時</button>
          </div>
          <div class="mt-4">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"
                checked>
              <label class="form-check-label" for="inlineRadio1">泰國蝦池</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"
                disabled>
              <label class="form-check-label" for="inlineRadio2">龍蝦池</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"
                disabled>
              <label class="form-check-label" for="inlineRadio3">其他池種</label>
            </div>
          </div>
        </div>
        <div class="m-xl-5 m-1">
          <span class="d-inline-block pe-3">數量</span>
          <a @click.prevent="adjustmentTickets('-')" class="d-inline-block border border-white py-xl-3 px-xl-4 py-2 px-3"
            href="#"><i class="bi bi-dash-lg"></i></a>
          <input type="number" v-model="ticketNum"
            class="d-inline-block border border-white py-xl-3 py-2 text-center text-white" disabled>
          <a @click.prevent="adjustmentTickets('+')" class="d-inline-block border border-white py-xl-3 px-xl-4 py-2 px-3"
            href="#"><i class="bi bi-plus-lg"></i></a>
        </div>
        <div class="m-5 ps-3 ps-xl-0">
          <span class="d-block fs-6 text-decoration-line-through">原價NT$ {{ shrimp.origin_price }}</span>
          <span class="fs-4">NT$ {{ shrimp.price }}</span>
          <button @click.prevent="addToCart(shrimp.id)" class="btn btn-lg btn-outline-primary ms-xl-5 my-3 my-lx-0"
            type="button"><i class="bi bi-cart4"></i><span class="text-white ms-2">加入購物車</span></button>
        </div>
      </div>
    </div>
  </div>
  <SellShrimp ref="sellModal"></SellShrimp>
</template>

<style scoped>
div a i {
  color: white
}

div a:hover i {
  color: #0d6efd
}

hr {
  border: 0;
  border-top: 1px dashed #a2a9b6;
}</style>
