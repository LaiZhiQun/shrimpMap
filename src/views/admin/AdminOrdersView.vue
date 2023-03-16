<script>
import { mapActions } from 'pinia'
import useLoginStore from '../../stores/login'
import DelModal from '../../components/DelOrderModal.vue'
import OrderModal from '../../components/OrderModal.vue'
import PaginationComponent from '../../components/PaginationComponent.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      orders: {},
      isNew: false,
      pagination: {},
      tempOrder: {},
      currentPage: 1
    }
  },
  components: {
    PaginationComponent,
    DelModal,
    OrderModal
  },
  methods: {
    ...mapActions(useLoginStore, ['checkLogin']),
    getOrders (currentPage = 1) {
      this.currentPage = currentPage
      this.$http({
        method: 'get',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/orders?page=${currentPage}`
      }).then((res) => {
        this.orders = res.data.orders
        this.pagination = res.data.pagination
      }).catch((error) => {
        alert(error.response)
      })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      this.isNew = false
      this.$refs.orderModal.openModal()
    },
    // 打開刪除的 modal
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      this.$refs.delModal.openModal()
    },
    // 更改付款狀態
    updatePaid (item) {
      const paid = {
        is_paid: item.is_paid
      }
      this.$http({
        method: 'put',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/order/${item.id}`,
        data: { data: paid }
      }).then(res => {
        this.$refs.orderModal.hideModal()
        this.getOrders(this.currentPage)
      }).catch((err) => {
        alert(err.response)
      })
    },
    // 按下確認刪除後觸發此函式
    delOrder () {
      this.$http({
        method: 'delete',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`
      }).then(res => {
        this.$refs.delModal.hideModal()
        this.getOrders(this.currentPage)
      }).catch(err => {
        console.log(err)
        alert(err.response)
      })
    }
  },
  mounted () {
    this.checkLogin()
    this.getOrders()
  }
}
</script>
<template>
  <div class="container">
    <table class="table mt-4 text-white">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }" class="text-white">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                張
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }} 元</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`" v-model="item.is_paid"
                @change="updatePaid(item)" />
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" type="button" @click="openModal(item)">
                檢視
              </button>
              <button class="btn btn-outline-danger btn-sm" type="button" @click="openDelOrderModal(item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal :order="tempOrder" ref="orderModal" @update-paid="updatePaid"></OrderModal>
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
  <PaginationComponent :pages="pagination" @emitPages="getOrders"></PaginationComponent>
  </div>
</template>
