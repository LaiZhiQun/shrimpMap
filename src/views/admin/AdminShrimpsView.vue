<script>
import { mapActions } from 'pinia'
import useLoginStore from '../../stores/login'
import PaginationComponent from '../../components/PaginationComponent.vue'
import ProductModalComponent from '../../components/ProductModalComponent.vue'
import DelComponent from '../../components/DelComponent.vue'
import { Modal } from 'bootstrap'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      page: {},
      tempProduct: {
        imagesUrl: [],
        business_data: {
          rest: '',
          all: ''
        }
      },
      isNew: false
      // delProductModal: {}
    }
  },
  components: {
    PaginationComponent,
    ProductModalComponent,
    DelComponent
  },
  methods: {
    ...mapActions(useLoginStore, ['checkLogin']),
    getProductsList (page = 1) {
      this.$http({
        method: 'get',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/products/?page=${page}`
        // url: `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/products/?page=${page}`
      }).then(res => {
        this.products = res.data.products
        this.page = res.data.pagination
      }).catch(err => {
        alert(err.data.message)
      })
    },
    openModal (isNew, item) {
      if (isNew === 'edit') {
        this.tempProduct = { ...item }
        this.isNew = false
        this.$refs.productModal.openModal()
      } else if (isNew === 'delete') { // 為了顯示 title，需先將資料帶入 tempProduct
        this.tempProduct = { ...item }
        this.delProductModal.show()
      } else if (isNew === 'new') { // 新增時，則清空 tempProduct
        this.tempProduct = {
          imagesUrl: [],
          business_data: {},
          shrimp_type: {}
        }
        this.isNew = true
        this.$refs.productModal.openModal()
      }
    },
    updateProduct () {
      if (!this.isNew) {
        // 編輯資料 put
        this.$http({
          method: 'put',
          url: `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`,
          data: {
            data: this.tempProduct
          }
        }).then(res => {
          alert(res.data.message)
          this.$refs.productModal.hideModal()
          this.getProductsList()
        })
          .catch(err => {
            alert(err.data.message)
          })
      } else {
        // 新增資料 post
        this.$http({
          method: 'post',
          url: `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product`,
          data: {
            data: this.tempProduct
          }
        }).then(res => {
          // alert(res.data.message)
          alert('已新增店家')
          this.$refs.productModal.hideModal()
          this.getProductsList()
        }).catch(err => {
          alert(err.data.message)
        })
      }
    },
    closeModal (state) {
      if (state === 'del') {
        this.delProductModal.hide()
      }
    }
  },
  mounted () {
    this.checkLogin() // checkLogin() 需要放在 getShrimps() 前
    this.getProductsList()
    this.delProductModal = new Modal(this.$refs.DelComponent.$refs.delProductModal)
  }
}
</script>
<template>
  <div class="container">
    <div class="text-end mt-4">
      <button @click="openModal('new')" class="btn btn-primary">
        建立新的店家
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
            啟用
          </th>
          <th>
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
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
    <PaginationComponent :pages="page" @emitPages="getProductsList"></PaginationComponent>
    <ProductModalComponent ref="productModal" @updateProduct="updateProduct" :product="tempProduct">
    </ProductModalComponent>
    <DelComponent ref="DelComponent" @closeModal="closeModal" :tempProduct="tempProduct"
      :getProductsList="getProductsList"></DelComponent>
  </div>
</template>
