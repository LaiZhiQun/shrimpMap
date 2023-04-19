<script>
import SellInfoModal from '@/components/SellInfoModal.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import { mapActions } from 'pinia'
import useLoginStore from '@/stores/login'
import delSell from '@/components/DelSell.vue'
import { Modal } from 'bootstrap'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      articles: [],
      page: {},
      tempSell: {},
      isNew: false,
      time: ''
    }
  },
  components: {
    SellInfoModal,
    PaginationComponent,
    delSell
  },
  methods: {
    ...mapActions(useLoginStore, ['checkLogin']),
    getArticles (page = 1) {
      this.$http({
        method: 'get',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/articles/?page=${page}`
      }).then(res => {
        this.articles = res.data.articles
        this.page = res.data.pagination
      }).catch(err => {
        console.log(err)
      })
    },
    openModal (isNew, item) {
      if (isNew === 'edit') {
        this.tempSell = { ...item }
        this.isNew = false
        this.sellModal.show()
      } else if (isNew === 'delete') { // 為了顯示 title，需先將資料帶入 tempProduct
        this.tempSell = { ...item }
        this.dellSell.show()
      } else if (isNew === 'new') { // 新增時，則清空 tempProduct
        this.tempSell = {}
        this.isNew = true
        this.sellModal.show()
      }
    },
    updateSell () {
      if (!this.isNew) {
        // 編輯資料 put
        this.$http({
          method: 'put',
          url: `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article/${this.tempSell.id}`,
          data: {
            data: this.tempSell
          }
        }).then(res => {
          alert(res.data.message)
          this.sellModal.hide()
          this.getArticles()
        }).catch(err => {
          console.log(err)
          // alert(err.data.message)
        })
      } else {
        // 新增資料 post
        const now = new Date()
        const createTime = Math.floor(now.getTime() / 1000)
        this.tempSell.create_at = createTime
        this.$http({
          method: 'post',
          url: `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article`,
          data: {
            data: this.tempSell
          }
        }).then(res => {
          // alert(res.data.message)
          alert('已新增店家')
          this.sellModal.hide()
          this.getArticles()
        }).catch(err => {
          // alert(err.data.message)
          console.log(err)
        })
      }
    },
    closeModal (state) {
      if (state === 'del') {
        this.dellSell.hide()
      }
    }
  },
  mounted () {
    this.checkLogin()
    this.getArticles()
    this.sellModal = new Modal(this.$refs.SellInfoModal.$refs.sellInfoModal)
    this.dellSell = new Modal(this.$refs.dellSell.$refs.delSellModal)
  }
}
</script>

<template>
  <div class="container">
    <div class="text-end mt-4">
      <button @click="openModal('new')" class="btn btn-primary">
        建立新的文章
      </button>
    </div>
    <table class="table mt-4 text-white">
      <thead>
        <tr>
          <th width="70">
            城市
          </th>
          <th>店名</th>
          <th>
            時間
          </th>
          <th>
            公開
          </th>
          <th>
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in articles" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.store_name }}</td>
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>
            <span v-if="item.isPublic" class="text-success">啟用</span>
            <span v-else>不啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button @click="openModal('edit', item)" type="button" class="btn btn-outline-primary btn-sm">
                編輯
              </button>
              <button @click="openModal('delete', item)" type="button" class="btn btn-outline-danger btn-sm">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 元件 -->
  </div>
  <PaginationComponent :pages="page" @emitPages="getArticles"></PaginationComponent>
  <SellInfoModal ref="SellInfoModal" @updateSell="updateSell" :sell="tempSell" :isNew="isNew"></SellInfoModal>
  <delSell ref="dellSell" @closeModal="closeModal" :tempProduct="tempSell" :getProductsList="getArticles"></delSell>
</template>
