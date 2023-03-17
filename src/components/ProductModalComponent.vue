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
                <form action="/api/thisismycourse2/admin/upload" enctype="multipart/form-data"  method="post">
                  <input @change="handleUpload($event)" class="mx-5" type="file" name="file-to-upload">
                </form>
                <!-- <button @click="imagePut(tempProduct)" class="mx-5 mt-3" type="button">上傳</button> -->
              </div>
              <!-- 新增的圖片欄位 -->

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
                  <input id="category" v-model="tempProduct.category" type="text" class="form-control"
                    placeholder="請輸入縣市名">
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
                  <input id="businessTime" v-model="tempProduct.business_data.all" type="text" min="0" class="form-control"
                    placeholder="請輸入營業時間">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="restTime" class="form-label text-dark">休息日</label>
                  <input id="restTime" v-model="tempProduct.business_data.rest" type="text" min="0" class="form-control"
                    placeholder="請輸入休息日">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label text-dark">店家電話</label>
                  <input id="price" v-model="tempProduct.phone" type="text" min="0" class="form-control"
                    placeholder="請輸入售價">
                </div>
                <!-- <div class="mb-3 col-md-6">
                  <label for="cast" class="form-label text-dark">消費方式</label>
                  <input id="cast" v-model="tempProduct.shrimp_price" type="text" min="0" class="form-control"
                    placeholder="池種 售價">
                </div> -->
              </div>
              <hr>

              <div class="mb-3">
                <label for="description" class="form-label text-dark">蝦池種類</label>
                <input id="description" v-model="tempProduct.description" type="text" class="form-control"
                  placeholder="請輸入釣池種類">
              </div>
              <div class="mb-3">
                <label for="content" class="form-label text-dark">地址</label>
                <input id="description" v-model="tempProduct.content" type="text" class="form-control"
                  placeholder="請輸入店家地址">
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
        business_data: {}
      },
      newImage: ''
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
        this.newImage = res.data.imageUrl
      }).catch(err => {
        console.log(err)
      })
    }
    // 上傳圖片
    // imagePut (tempProduct) {
    //   const data = {
    //     title: tempProduct.title,
    //     category: tempProduct.category,
    //     unit: tempProduct.unit,
    //     origin_price: tempProduct.origin_price,
    //     price: tempProduct.price,
    //     imageUrl: this.newImage
    //   }
    //   this.$http({
    //     method: 'put',
    //     url: `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product/${tempProduct.id}`,
    //     data: { data }
    //   }).then(res => {
    //     alert('圖片更改成功')
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
  }
}
</script>
