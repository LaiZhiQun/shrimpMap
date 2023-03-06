<script>
import { RouterView } from 'vue-router'
import Sidebar from '../views/front/SidebarView.vue'
import FooterView from '../views/front/FooterView.vue'
export default {
  components: {
    RouterView,
    Sidebar,
    FooterView
  }
}
</script>

<template>
  <div class="container">
    <h1 class="text-white text-center m-3">釣蝦場地圖</h1>
    <!-- <MapView></MapView> -->
    <RouterView></RouterView>
  </div>
  <Sidebar></Sidebar>
  <FooterView></FooterView>
</template>

<style>
body {
  background-color: black;
}
</style>
