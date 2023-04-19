<script>
export default {
  props: ['sell', 'isNew'],
  data () {
    return {
      tempSell: {}
    }
  },
  emits: ['updateSell'],
  watch: {
    sell () {
      this.tempSell = this.sell
    }
  }
}
</script>

<template>
  <div class="modal fade" id="sellInfoModal" tabindex="-1" role="dialog" aria-labelledby="sellModalLabel"
    aria-hidden="true" ref="sellInfoModal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="sellModalLabel" class="modal-title">
            <!-- 判斷是否為新增產品 -->
            <span v-if="isNew">新增店家</span>
            <span v-else>編輯店家</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row justify-content-center">
            <!-- 表單 -->
            <!-- 將所有欄位與 tempProduct 雙向綁定 -->
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label text-dark">店家名稱</label>
                <input id="title" v-model="tempSell.store_name" type="text" class="form-control" placeholder="請輸入店家名稱">
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="city" class="form-label text-dark">縣市</label>
                  <select id="city" v-model="tempSell.title" class="form-select">
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
                  <label for="price" class="form-label text-dark">單位</label>
                  <input id="unit" v-model="tempSell.unit" type="text" class="form-control" placeholder="請輸入(多少錢/幾斤)">
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label text-dark">售價</label>
                  <input id="origin_price" v-model.number="tempSell.price" type="number" min="0" class="form-control"
                    placeholder="請輸入售價">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="businessTime" class="form-label text-dark">等待時間</label>
                  <input id="businessTime" v-model="tempSell.timeWait" type="text" class="form-control"
                    placeholder="單位: 分鐘">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label text-dark">聯絡方式</label>
                  <input id="price" v-model="tempSell.author" type="text" class="form-control" placeholder="請輸入line">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="description" class="form-label text-dark">蝦種</label>
                  <input id="description" v-model="tempSell.description" type="text" class="form-control"
                    placeholder="公蝦、母蝦或綜合">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="content" class="form-label text-dark">備註</label>
                  <input id="content" v-model="tempSell.content" type="text" class="form-control" placeholder="備註">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="tip" class="form-label text-dark">備註</label>
                  <input id="tip" v-model="tempSell.tip" type="text" class="form-control" placeholder="備註">
                </div>
              </div>
              <hr>
              <div class="mb-3">
                <div class="form-check">
                  <input id="is_enabled" v-model="tempSell.isPublic" class="form-check-input" type="checkbox"
                    :true-value="true" :false-value="false">
                  <label class="form-check-label text-dark" for="is_enabled">是否公開</label>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input id="is_enabled" v-model="tempSell.isSold" class="form-check-input" type="checkbox"
                    :true-value="true" :false-value="false">
                  <label class="form-check-label text-dark" for="is_enabled">是否售出</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="$emit('updateSell', tempSell)">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
