
import axios from 'axios'
import { defineStore } from 'pinia'
import router from '../router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const useIntoCityStore = defineStore('intoCity', {
  state: () => {
    return {
      shrimps: [],
      shrimpFilter: [],
      isLoading: false,
      isActive: false
    }
  },
  actions: {
    intoCity (city) {
      this.isLoading = true
      axios({
        method: 'get',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`
      }).then(res => {
        this.shrimps = res.data.products
        this.shrimpFilter = this.shrimps.filter(function (item) {
          return item.category === city
        })
        this.isLoading = false
        router.push({ path: '/shrimps', query: { city } })
      })
    },
    searchShrimp (searchQuery) {
      this.isLoading = true
      if (searchQuery !== '') {
        axios({
          method: 'get',
          url: `${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`
        }).then(res => {
          this.shrimps = res.data.products
          this.shrimpFilter = this.shrimps.filter(shrimp => shrimp.title.includes(searchQuery))
          this.isLoading = false
          router.push({ path: '/shrimps', query: { searchQuery } })
        })
      } else if (searchQuery === '') {
        this.isActive = true
        this.isLoading = false
      }
    },
    toggleActive () {
      this.isActive = !this.isActive
    }
  }
})
export default useIntoCityStore
