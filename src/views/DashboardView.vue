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
  <div class="container text-white">
    <h2 class="text-center mt-10">後台管理</h2>
    <ul class="nav justify-content-center mt-5">
      <li>
        <router-link class="h4 text-decoration-none link-primary" to="/admin/adminShrimps">店家列表</router-link>
      </li>
      <li class="ms-3">
        <router-link class="h4 text-decoration-none link-primary" to="/admin/adminOrders">訂單列表</router-link>
      </li>
      <li class="ms-3">
        <router-link class="h4 text-decoration-none link-primary" to="/admin/adminCoupons">優惠券</router-link>
      </li>
      <li class="ms-3">
        <router-link class="h4 text-decoration-none link-primary" to="/admin/adminSellInfo">賣蝦資訊</router-link>
      </li>
    </ul>
  <!-- <router-link to="/admin/shrimps">後台店家列表</router-link> | -->
  <!-- <router-link to="/admin/orders">後台訂單列表</router-link> | -->
  <!-- <router-link to="/">回前台首頁</router-link> | -->
  <!-- <a href="#" @click.prevent="logout">登出帳號</a> -->
  <hr>
  <RouterView></RouterView>
  <Sidebar></Sidebar>
  </div>
</template>
<style>
body {
  background-color: #333;
}
</style>
