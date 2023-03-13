import axios from 'axios'
import { defineStore } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

// 購物車頁面功能
const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cart: {},
      ticketNum: 1,
      shakeState: false
    }
  },
  actions: {
    getCarts () {
      axios({
        method: 'get',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/cart`
      }).then(res => {
        this.cart = res.data.data
      })
    },
    // 購物車頁面的數量調整
    adjustmentTicket (state, cartId, qty, productId) {
      const data = {
        product_id: productId,
        qty
      }
      if (state === '+') {
        data.qty++
        this.updateCartNum(data, cartId)
      } else if (state === '-') {
        data.qty--
        this.updateCartNum(data, cartId)
      }
    },
    updateCartNum (data, cartId) {
      axios({
        method: 'put',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${cartId}`,
        data: { data }
      }).then(res => {
        this.getCarts()
      })
    },
    removeCart (cartId) {
      axios({
        method: 'delete',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${cartId}`
      }).then(res => {
        alert('已刪除該品項')
        this.getCarts()
      })
    },
    // 在 shrimpView.vue 使用的，將產品加入購物車功能
    addToCart (id) {
      const itemIndex = this.cart.carts.findIndex(item => item.product.id === id)
      let data = {}
      if (itemIndex === -1) {
        data = {
          product_id: id,
          qty: this.ticketNum
        }
      } else {
        data = {
          product_id: id,
          qty: this.cart.carts[itemIndex].qty += this.ticketNum - this.cart.carts[itemIndex].qty
        }
      }
      axios({
        method: 'post',
        url: `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`,
        data: { data }
      }).then(res => {
        alert(res.data.message)
        this.getCarts() // 重新渲染購物車內產品的數量，使 sidebar 的數字即時更新
        setTimeout(() => {
          this.shakeState = false
        }, 1000)
        this.shakeState = true
      })
    },
    // 單一產品頁面的數量調整
    adjustmentTickets (state) {
      if (state === '+') {
        this.ticketNum++
      } else if (state === '-' && this.ticketNum > 1) {
        this.ticketNum--
      }
    }
  }
})
export default useCartStore
