<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleActive () {
      this.isActive = !this.isActive
    }
  }
}
</script>
<template>
  <div class="navigation" :class="{ active: isActive }">
    <ul>
      <li>
        <a href="/">
          <span class="icon h3"><i class="fa-solid fa-shrimp"></i></span>
          <span class="title">Shrimping Map</span>
        </a>
      </li>
      <li>
        <router-link to="/">
          <span class="icon"><i class="bi bi-geo-alt-fill"></i></span>
          <span class="title">首頁</span>
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <span class="icon"><i class="bi bi-search"></i></span>
          <input class="form-control ms-4 border-0 rounded-3" type="text" placeholder="搜尋店家" aria-label="Search">
            <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <span class="icon"><i class="bi bi-info-square"></i></span>
          <span class="title">賣蝦資訊</span>
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <span class="icon"><i class="bi bi-cart4"></i></span>
          <span class="title">購物車</span>
        </router-link>
      </li>
      <li>
        <router-link to="login">
          <span class="icon"><i class="bi bi-box-arrow-right"></i></span>
          <span class="title">登入</span>
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <span class="icon"><i class="bi bi-box-arrow-left"></i></span>
          <span class="title">登出</span>
        </router-link>
      </li>
    </ul>
    <div @click.prevent="toggleActive" class="toggle"></div>
  </div>
</template>

<style scoped>
.navigation {
  position: fixed;
  inset: 20px;
  background: #287bff;
  width: 80px;
  border-left: 10px solid #287bff;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 15px 15px 25px rgba(0, 0, 0, 0, 05);
  transition: 0.5s;
  height: 60vh; /* custom */
  top: 10vh; /* custom */
}

.navigation.active {
  width: 300px;
  border-radius: 20px;
}

.toggle {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle::before {
  content: '';
  position: absolute;
  width: 26px;
  height: 3px;
  border-radius: 3px;
  background: #365fa1;
  transform: translateY(-5px);
  transition: 1s;
}

.toggle::after {
  content: '';
  position: absolute;
  width: 26px;
  height: 3px;
  border-radius: 3px;
  background: #365fa1;
  transform: translateY(5px);
  transition: 1s;
}

.navigation.active .toggle::before {
  transform: translateY(0px) rotate(-405deg);
}

.navigation.active .toggle::after {
  transform: translateY(0px) rotate(225deg);
}

.navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.navigation ul li {
  position: relative;
  list-style: none;
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  /* background: #fff; */
}

.navigation ul li:hover {
  background: #fff;
}

.navigation ul li:nth-child(1) {
  top: 20px;
  margin-bottom: 40px;
  background: none;
}

.navigation ul li:not(:first-child):hover::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: -20px;
  right: 0;
  background: transparent;
  border-bottom-right-radius: 20px;
  box-shadow: 7.5px 7.5px 0 7.5px #fff;
}

.navigation ul li:not(:first-child):hover::after {
  content: '';
  position: absolute;
  bottom: -20px;
  right: 0;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-right-radius: 20px;
  box-shadow: 7.5px -7.5px 0 7.5px #fff;
}

.navigation ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #fff;
}

.navigation ul li:hover:not(:first-child) a {
  color: #365fa1;
}

.navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.navigation ul li a .icon i {
  font-size: 1.75rem;
}

.navigation ul li a .title {
  position: relative;
  display: block;
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  text-align: start;
  white-space: nowrap;
}

ol,
ul {
  padding-left: 0rem;
}
@media (max-width: 576px)  {
  .navigation {
    inset: 0px;
    border-left: 10px solid #287bff;
    height: 65vh;
    z-index: 3000;
  }
}
</style>
