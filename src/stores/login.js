import axios from 'axios'
import { defineStore } from 'pinia'
import router from '../router'

const { VITE_APP_URL } = import.meta.env

const useLoginStore = defineStore('login', {
  state: () => {
    return {
      username: '',
      password: '',
      loginStatus: false
    }
  },
  actions: {
    login () {
      axios({
        method: 'post',
        url: `${VITE_APP_URL}admin/signin`,
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        const { token, expired } = res.data
        document.cookie = `myToken=${token};expires=${new Date(expired)}; path=/`
        alert(res.data.message)
        this.loginStatus = true
        router.push('/admin/shrimps')
      }).catch(err => {
        alert(err.response.data.message)
      })
    },
    logout () {
      document.cookie = `myToken=;expires=${new Date()}; path=/`
      alert('已登出')
      this.username = ''
      this.password = ''
      this.loginStatus = false
      router.push('/login')
    },
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      axios.defaults.headers.common.Authorization = token
      axios({
        method: 'post',
        url: `${VITE_APP_URL}api/user/check`
      }).then(res => {
        if (!res.data.success) {
          router.push('/login')
          this.username = ''
          this.password = ''
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
})

export default useLoginStore
