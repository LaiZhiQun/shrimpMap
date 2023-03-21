<template>
  <div id="delSellModal" ref="delSellModal" class="modal fade" tabindex="-1" aria-labelledby="delSellModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delSellModal" class="modal-title">
            <span>刪除店家</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-dark">
          是否刪除
          <strong class="text-danger text-dark">{{ tempProduct.store_name }}</strong> 店家(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" @click="delProduct" class="btn btn-danger">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  props: ['tempProduct', 'getProductsList'],
  methods: {
    delProduct () {
      this.$http({
        method: 'delete',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article/${this.tempProduct.id}`
      }).then(res => {
        alert(res.data.message)
        this.$emit('closeModal', 'del')
        this.getProductsList()
      }).catch(err => {
        console.log(err)
        alert(err.data.message)
      })
    }
  }
}
</script>
