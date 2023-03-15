<script>
import { RouterView } from 'vue-router'
import { mapActions } from 'pinia'
import useLoginStore from '../stores/login'
import Sidebar from './front/SidebarView.vue'
// const { VITE_APP_URL } = import.meta.env
export default {
  components: {
    RouterView,
    Sidebar
  },
  methods: {
    ...mapActions(useLoginStore, ['checkLogin'])
  },
  mounted () {
    this.checkLogin()
  }
}
</script>

<template>
  <div>
    這是後台頁面
  <router-link to="/admin/shrimps">後台產品列表</router-link> |
  <!-- <router-link to="/admin/orders">後台訂單列表</router-link> | -->
  <router-link to="/">回前台首頁</router-link> |
  <!-- <a href="#" @click.prevent="logout">登出帳號</a> -->
  <hr>
  <RouterView></RouterView>
  <Sidebar></Sidebar>
  </div>
</template>
