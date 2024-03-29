<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { RouterLink } from 'vue-router'
import useCartStore from '@/stores/cart'
import useIntoCityStore from '@/stores/intoCity'
import useLoginStore from '@/stores/login'

export default {
  components: {
    RouterLink
  },
  methods: {
    ...mapActions(useCartStore, ['getCarts']),
    ...mapActions(useIntoCityStore, ['searchShrimp', 'toggleActive']),
    ...mapActions(useLoginStore, ['logout'])
  },
  computed: {
    ...mapState(useCartStore, ['cart', 'shakeState']),
    ...mapState(useIntoCityStore, ['shrimpFilter']),
    ...mapState(useLoginStore, ['loginStatus']),
    ...mapWritableState(useIntoCityStore, ['isActive', 'searchQuery'])
  }
}
</script>

<template>
  <div class="navigation" :class="{ active: isActive }">
    <ul>
      <li>
        <RouterLink to="#" class="customMouse">
          <span class="icon h3"><i class="fa-solid fa-shrimp"></i></span>
          <span class="title">Shrimping Map</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/">
          <span class="icon"><i class="bi bi-geo-alt-fill"></i></span>
          <span class="title">首頁</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="#">
          <span @click.prevent="searchShrimp(searchQuery)" class="icon"><i class="bi bi-search"></i></span>
          <input v-model="searchQuery" class="form-control ms-4 border-0" type="text" placeholder="輸入店家名稱"
            aria-label="Search">
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/info">
          <span class="icon"><i class="bi bi-info-square"></i></span>
          <span class="title">賣蝦資訊</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/cart">
          <span class="icon">
            <span :class="{ 'custom-shake': shakeState }"
              class="shake-position position-absolute badge rounded-circle bg-danger">
              {{ Array.isArray(this.cart.carts) ? this.cart.carts.length : '0' }}
              <span class="visually-hidden">unread messages</span>
            </span>
            <i class="bi bi-cart4"></i>
          </span>
          <span class="title">購物車</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/login">
          <span class="icon"><i class="bi bi-box-arrow-right"></i></span>
          <span class="title">登入</span>
        </RouterLink>
      </li>
      <li v-show="loginStatus">
        <RouterLink @click.prevent="logout" to="#">
          <span class="icon"><i class="bi bi-box-arrow-left"></i></span>
          <span class="title">登出</span>
        </RouterLink>
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
  height: 35rem;
  /* custom */
  top: 10vh;
  /* custom */
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

@media (max-width: 576px) {
  .navigation {
    inset: 0px;
    border-left: 10px solid #287bff;
    height: 32rem;
    z-index: 3000;
    width: 50px;
    top: 5rem;
    opacity: 50%;
  }

  .navigation.active {
    opacity: 100%;
  }

  .navigation ul li a .icon {
    min-width: 30px;
  }

  .toggle {
    right: 10px;
    width: 30px;
    height: 30px;
  }
}

.shake-position {
  top: 0;
  left: 50%;
}

.custom-shake {
  animation: shake 1s linear;
  animation-iteration-count: 1;
}

@keyframes shake {
  0% {
    left: 40%;
  }

  5% {
    left: 60%;
  }

  10% {
    left: 40%;
  }

  15% {
    left: 60%;
  }

  20% {
    left: 40%;
  }

  25% {
    left: 60%;
  }

  30% {
    left: 40%;
  }

  35% {
    left: 60%;
  }

  40% {
    left: 40%;
  }

  45% {
    left: 60%;
  }

  50% {
    left: 40%;
  }

  55% {
    left: 60%;
  }

  60% {
    left: 40%;
  }

  65% {
    left: 60%;
  }

  70% {
    left: 40%;
  }

  75% {
    left: 60%;
  }

  80% {
    left: 40%;
  }

  85% {
    left: 60%;
  }

  90% {
    left: 40%;
  }

  95% {
    left: 60%;
  }

  100% {
    left: 40%;
  }
}
.customMouse {
  cursor: auto;
}
</style>
