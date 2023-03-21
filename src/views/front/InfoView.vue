<script>
import PaginationComponent from '../../components/PaginationComponent.vue'
import 'bootstrap'
import { mapWritableState } from 'pinia'
import useCartStore from '../../stores/cart'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      sellInfo: [],
      timeNow: '',
      page: {}
    }
  },
  components: {
    PaginationComponent
  },
  methods: {
    getInfo (page = 1) {
      this.isLoading = true
      this.$http({
        method: 'get',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/articles?page=${page}`
      }).then(res => {
        this.sellInfo = res.data.articles
        this.page = res.data.pagination
        this.isLoading = false
      }).catch(err => {
        console.log(err)
      })
    }
  },
  computed: {
    ...mapWritableState(useCartStore, ['isLoading'])
  },
  mounted () {
    this.getInfo()
  }
}
</script>
<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class=" d-flex justify-content-center mt-8">
    <div class="col-8">
      <h2 class="text-white text-xl-start text-center">賣蝦資訊</h2>
      <div v-for="item in sellInfo" :key="item.id" class="accordion d-inline" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed d-flex" type="button" data-bs-toggle="collapse"
              :data-bs-target="`#collapseTwo${item.id}`" aria-expanded="false" aria-controls="collapseTwo">
              <div class="">
                <span class="d-block h4">{{ item.title }}</span>
                <span class="d-block">{{ item.store_name }}</span>
                <span class="d-block">{{ $filters.date(item.create_at) }} || {{ $filters.nowTime(item.create_at) }}</span>
              </div>
            </button>
          </h2>
          <div :id="`collapseTwo${item.id}`" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>蝦種：{{ item.description }}</p>
              <p>價格：{{ item.price }}{{ item.unit }}</p>
              <p>聯絡方式：{{ item.author }}</p>
              <p>備註：{{ item.tip }}</p>
              <p>等待時間：{{ item.timeWait }}分鐘</p>
            </div>
          </div>
        </div>
        <div class="mt-1 mb-4">
          <span v-if="item.isSold" class="text-danger">已售出</span>
          <span v-else class="text-success">未售出</span>
        </div>
      </div>
      <div class="mt-10">
        <PaginationComponent :pages="page" @emitPages="getInfo"></PaginationComponent>
      </div>
    </div>
  </div>
</template>
