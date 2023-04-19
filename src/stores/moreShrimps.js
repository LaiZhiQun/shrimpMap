import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

const moreShrimpsStore = defineStore('moreShrimps', {
  state: () => {
    return {
      shrimps: [],
      randomShrimps: []
    }
  },
  actions: {
    getRandomShrimps () {
      axios({
        method: 'get',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`
      }).then(res => {
        this.shrimps = res.data.products
        const shrimps = [...this.shrimps]
        const randomShrimps = []
        for (let i = 0; i < 3; i++) {
          const index = Math.floor(Math.random() * shrimps.length)
          randomShrimps.push(shrimps[index])
          shrimps.splice(index, 1)
        }
        this.randomShrimps = randomShrimps
      })
    }
  }
})

export default moreShrimpsStore
