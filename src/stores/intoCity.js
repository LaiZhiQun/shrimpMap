
import axios from 'axios'
import { defineStore } from 'pinia'
import router from '../router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

const useIntoCityStore = defineStore('intoCity', {
  state: () => {
    return {
      shrimps: [],
      shrimpFilter: []
      // searchQuery: ''
    }
  },
  actions: {
    intoCity (city) {
      axios({
        method: 'get',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`
      }).then(res => {
        this.shrimps = res.data.products
        this.shrimpFilter = this.shrimps.filter(function (item) {
          return item.category === city
        })
        router.push({ path: '/shrimps', query: { city } })
      })
    },
    searchShrimp (search) {
      if (search !== '') {
        axios({
          method: 'get',
          url: `${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`
        }).then(res => {
          this.shrimps = res.data.products
          this.shrimpFilter = this.shrimps.filter(shrimp => shrimp.title.includes(search))
          router.push({ path: '/shrimps' })
        })
      }
    }
  }
})
export default useIntoCityStore
