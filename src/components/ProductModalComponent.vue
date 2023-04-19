<template>
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <!-- 判斷是否為新增產品 -->
            <span v-if="isNew">新增店家</span>
            <span v-else>編輯店家</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">

              <div class="mb-3">
                <label for="imageUrl" class="form-label text-dark">店家圖片</label>
                <input v-model="tempProduct.imageUrl" type="text" class="form-control mb-2" placeholder="請輸入圖片連結">
                <!-- 顯示放入 tempProduct.imageUrl 的圖片 -->
                <img class="img-fluid" :src="tempProduct.imageUrl">
              </div>
              <div>
                <form action="/api/thisismycourse2/admin/upload" enctype="multipart/form-data" method="post">
                  <input @change="handleUpload($event)" class="mx-5" type="file" name="file-to-upload">
                </form>
              </div>

            </div>
            <!-- 表單 -->
            <!-- 將所有欄位與 tempProduct 雙向綁定 -->
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label text-dark">店家名稱</label>
                <input id="title" v-model="tempProduct.title" type="text" class="form-control" placeholder="請輸入店家名稱">
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label text-dark">縣市</label>
                  <select id="category" v-model="tempProduct.category" class="form-select">
                    <option disabled value="">請選擇縣市</option>
                    <option value="基隆市">基隆市</option>
                    <option value="台北市">台北市</option>
                    <option value="新北市">新北市</option>
                    <option value="桃園市">桃園市</option>
                    <option value="新竹縣">新竹縣</option>
                    <option value="新竹市">新竹市</option>
                    <option value="苗栗縣">苗栗縣</option>
                    <option value="台中市">台中市</option>
                    <option value="彰化縣">彰化縣</option>
                    <option value="南投縣">南投縣</option>
                    <option value="雲林縣">雲林縣</option>
                    <option value="嘉義縣">嘉義縣</option>
                    <option value="嘉義市">嘉義市</option>
                    <option value="台南市">台南市</option>
                    <option value="高雄市">高雄市</option>
                    <option value="屏東縣">屏東縣</option>
                    <option value="台東縣">台東縣</option>
                    <option value="花蓮縣">花蓮縣</option>
                    <option value="宜蘭縣">宜蘭縣</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label text-dark">單位(元/H)</label>
                  <input id="unit" v-model="tempProduct.unit" type="text" class="form-control" placeholder="請輸入(多少錢/時間)">
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label text-dark">原價</label>
                  <input id="origin_price" v-model.number="tempProduct.origin_price" type="number" min="0"
                    class="form-control" placeholder="請輸入原價">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label text-dark">售價</label>
                  <input id="price" v-model.number="tempProduct.price" type="number" min="0" class="form-control"
                    placeholder="請輸入售價">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="businessTime" class="form-label text-dark">營業時間</label>
                  <input id="businessTime" v-model="tempProduct.business_data.all" type="text" class="form-control"
                    placeholder="請輸入營業時間">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="restTime" class="form-label text-dark">休息日</label>
                  <select id="restTime" v-model="tempProduct.business_data.rest" class="form-select">
                    <option disabled value="">請選擇休息日</option>
                    <option value="星期一">星期一</option>
                    <option value="星期二">星期二</option>
                    <option value="星期三">星期三</option>
                    <option value="星期四">星期四</option>
                    <option value="星期五">星期五</option>
                    <option value="星期六">星期六</option>
                    <option value="星期日">星期日</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label text-dark">店家電話</label>
                  <input id="price" v-model="tempProduct.phone" type="number" min="0" class="form-control"
                    placeholder="請輸入電話">
                </div>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label text-dark">地址</label>
                <input id="description" v-model="tempProduct.content" type="text" class="form-control"
                  placeholder="請輸入店家地址">
              </div>
              <hr>
              <div class="mb-3">
                <label for="description" class="form-label text-dark">蝦池種類描述</label>
                <input id="description" v-model="tempProduct.description" type="text" class="form-control"
                  placeholder="請輸入釣池種類">
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="cast1" class="form-label text-dark">蝦池1</label>
                  <input id="cast1" v-model="tempProduct.shrimp_type.male" type="text" class="form-control"
                    placeholder="公蝦池 售價">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="cast2" class="form-label text-dark">蝦池2</label>
                  <input id="cast2" v-model="tempProduct.shrimp_type.female" type="text" class="form-control"
                    placeholder="母蝦池 售價">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="cast3" class="form-label text-dark">蝦池3</label>
                  <input id="cast3" v-model="tempProduct.shrimp_type.mix" type="text" class="form-control"
                    placeholder="綜合池 售價">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="cast4" class="form-label text-dark">蝦池4</label>
                  <input id="cast4" v-model="tempProduct.shrimp_type.dragon" type="text" class="form-control"
                    placeholder="龍蝦池 售價">
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input id="is_enabled" v-model="tempProduct.is_enabled" class="form-check-input" type="checkbox"
                    :true-value="1" :false-value="0">
                  <label class="form-check-label text-dark" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="$emit('updateProduct', tempProduct)">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '../mixins/modalMixin'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  props: ['product', 'isNew'],
  data () {
    return {
      tempProduct: {
        imagesUrl: [],
        business_data: {},
        shrimp_type: {}
      }
    }
  },
  watch: {
    product () {
      this.tempProduct = this.product
    }
  },
  mixins: [modalMixin],
  emits: ['updateProduct'],
  computed: {
    isDisabled () {
      // 判斷是否為陣列
      if (!Array.isArray(this.tempProduct.imagesUrl)) {
        return false
      }
      // 判斷陣列最後一個值是否為空字串
      return this.tempProduct.imagesUrl.slice(-1)[0] === ''
    }
  },
  methods: {
    handleUpload (event) {
      const file = event.target.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)
      this.$http({
        method: 'post',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/upload`,
        data: formData
      }).then(res => {
        console.log(res.data.imageUrl)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
