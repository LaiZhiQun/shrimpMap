<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      shrimp: {},
      business_data: {},
      days: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
    }
  },
  methods: {
    getShrimp () {
      const { id } = this.$route.params
      this.$http({
        method: 'get',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/product/${id}`
      }).then((res) => {
        this.shrimp = res.data.product
        this.business_data = res.data.product.business_data
      })
    },
    getBusinessHour (day) {
      const hour = this.business_data[day]
      const isRest = this.business_data.rest === day
      return isRest ? `${day}：休息` : `${day}：${hour || this.business_data.all}`
    }
  },
  mounted () {
    this.getShrimp()
  }
}
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-6 border border-white text-white">
        <div class="d-flex justify-content-center">
          <img style="width: 400px;" class="d-block img-fluid"
            :src="shrimp.imageUrl"
            alt="">
        </div>
        <div class="m-5 ps-6">
          <h4>其他資訊</h4>
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
              <div v-for="shrimpType in shrimp.shrimp_price" :key="shrimpType">
                <p>{{ shrimpType }}{{ shrimp.unit }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 border text-white  position-relative">
        <a class="text-decoration-none d-block p-3 position-absolute bottom-0 end-0 text-white" href="#"><i class="bi bi-clipboard"></i> 我要賣蝦</a>
        <div class="m-5">
          <h2 class="mb-5">{{ shrimp.title }}</h2>
          <p>{{ shrimp.content }}</p>
          <p>{{ shrimp.phone }}</p>
        </div>
        <hr class="border-white">
        <div class="m-5">
          <h4>優惠套票</h4>
          <div class="mt-4">
            <button type="button" class="btn btn-primary">1小時</button>
            <button type="button" class="btn ms-4 btn-primary" disabled>2小時</button>
            <button type="button" class="btn ms-4 btn-primary" disabled>3小時</button>
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
        <div class="m-5">
          <span class="d-inline-block me-5">數量</span>
          <a class="d-inline-block border border-white py-3 px-4" href="#"><i class="bi bi-dash-lg"></i></a>
          <span class="d-inline-block border border-white py-3 px-8">1</span>
          <a class="d-inline-block border border-white py-3 px-4" href="#"><i class="bi bi-plus-lg"></i></a>
        </div>
        <div class="m-5">
          <span class="fs-4">NT$ 500</span>
          <button class="btn btn-lg btn-outline-primary ms-5" type="button"><i class="bi bi-cart4"></i><span class="text-white ms-2">加入購物車</span></button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
div a i {
  color: white
}

div a:hover i {
  color: #0d6efd
}</style>
