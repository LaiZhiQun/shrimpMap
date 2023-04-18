import axios from 'axios'
import { defineStore } from 'pinia'
import { createDiscreteApi } from 'naive-ui'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

// 購物車頁面功能
const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cart: {},
      ticketNum: 1,
      shakeState: false,
      isLoading: false,
      isAdjustQty: false
    }
  },
  actions: {
    getCarts () {
      this.isLoading = true
      axios({
        method: 'get',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/cart`
      }).then(res => {
        this.cart = res.data.data
        this.isLoading = false
      })
    },
    // 購物車頁面的數量調整
    adjustmentTicket (state, cartId, qty, productId) {
      this.isAdjustQty = true
      this.cart.carts.forEach(item => {
        if (item.id === cartId) {
          if (state === '+') {
            item.qty++
          } else if (state === '-') {
            item.qty--
          }
        }
      })
    },
    updateCartQty () {
      this.isAdjustQty = false
      const confirmQty = 'confirmQty'
      Promise.all(
        this.cart.carts.map(item => {
          const data = {
            product_id: item.product.id,
            qty: item.qty
          }
          return axios({
            method: 'put',
            url: `${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${item.id}`,
            data: { data }
          }).then(res => {
            this.success(confirmQty)
            this.getCarts()
          }).catch(err => {
            console.log(err)
            this.getCarts()
          })
        })
      )
    },
    removeCart (cartId) {
      this.isLoading = true
      axios({
        method: 'delete',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${cartId}`
      }).then(res => {
        alert('已刪除該品項')
        this.isLoading = false
        this.getCarts()
      })
    },
    // 在 shrimpView.vue 使用的，將產品加入購物車功能
    addToCart (id) {
      const data = {
        product_id: id,
        qty: this.ticketNum
      }
      axios({
        method: 'post',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/cart`,
        data: { data }
      }).then(res => {
        this.getCarts() // 重新渲染購物車內產品的數量，使 sidebar 的數字即時更新
        const addCart = 'addCart'
        this.success(addCart)
        this.ticketNum = 1
        setTimeout(() => {
          this.shakeState = false
        }, 1000)
        this.shakeState = true
      }).catch(err => {
        console.log(err)
      })
    },
    // 單一產品頁面的數量調整
    adjustmentTickets (state) {
      if (state === '+') {
        this.ticketNum++
      } else if (state === '-' && this.ticketNum > 1) {
        this.ticketNum--
      }
    },
    success (act) {
      const { message } = createDiscreteApi(['message'])
      if (act === 'addCart') {
        message.success('加入購物車成功')
      } else if (act === 'confirmQty') {
        message.success('更改數量成功')
      }
    }
  }
})
export default useCartStore
