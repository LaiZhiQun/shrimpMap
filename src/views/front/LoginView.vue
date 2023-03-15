<script>
import { mapActions, mapWritableState } from 'pinia'
import useLoginStore from '../../stores/login'

export default {
  methods: {
    ...mapActions(useLoginStore, ['login'])
  },
  computed: {
    ...mapWritableState(useLoginStore, ['password', 'username'])
  }
}
</script>
<template>
  <section class="container">
    <div class="signin">
      <div class="content">
        <h2>後台登入</h2>
        <div class="form">
          <div class="inputBx">
            <input v-model="username" type="email" required>
            <i>email</i>
          </div>
          <div class="inputBx">
            <input v-model="password" type="password" required>
            <i>密碼</i>
          </div>
          <div class="links">
            <a href="#">忘記密碼</a>
            <a href="#">註冊帳號</a>
          </div>
          <div class="inputBx">
            <input @click.prevent="login" type="submit" value="Login">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000;
}

section {
  /* position: absolute; */
  width: 90vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  overflow: hidden;
}

/* section::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(#000, #0f0, #000);
  animation: animate 5s linear infinite;
} */

/* @keyframes animate {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100%);
  }
} */

/* section span {
  position: relative;
  display: block;
  width: calc(6.25vw - 2px);
  height: calc(6.25vw - 2px);
  background-color: #181818;
  z-index: 2;
  transition: 1.5s;
} */

section span:hover {
  background-color: #287bff;
  transition: 0s;
}

section .signin {
  position: absolute;
  width: 400px;
  background-color: #222;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
}

section .signin .content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
}

section .signin .content h2 {
  font-size: 2rem;
  color: #287bff;
  text-transform: uppercase;
}

section .signin .content .form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

section .signin .content .form .inputBx {
  position: relative;
  width: 100%;
}

section .signin .content .form .inputBx input {
  position: relative;
  width: 100%;
  background-color: #333;
  border: none;
  outline: none;
  padding: 25px 10px 7.5px;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
}

section .signin .content .form .inputBx i {
  position: absolute;
  left: 0;
  padding: 15px 10px;
  font-style: normal;
  color: #aaa;
  transition: 0.5s;
  pointer-events: none;
}

.signin .content .form .inputBx input:focus~i,
.signin .content .form .inputBx input:valid~i {
  transform: rotateY(-7.5px);
  font-size: 0.8rem;
  color: #287bff;
}

.signin .content .form .links {
  position: relative;
  width: 100%;
  display: flex;

  justify-content: space-between;
}

.signin .content .form .links a {
  color: #fff;
  text-decoration: none;
}

.signin .content .form .links a:nth-child(2) {
  color: #287bff;
  font-weight: 600;
}

.signin .content .form .inputBx input[type="submit"] {
  padding: 10px;
  background-color: #287bff;
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: 0.05rem;
  cursor: pointer;
}

/* @media (max-width:900px) {
  section span {
    width: calc(10vw - 2px);
    height: calc(10vw - 2px);
  }
}

@media (max-width:600px) {
  section span {
    width: calc(20vw - 2px);
    height: calc(20vw - 2px);
  }
} */
@media (max-width: 576px) {
  section {
    padding-left: 3rem;
    height: 50vh;
  }

  section .signin {
    width: 300px;
    padding: 10px;
  }

}
</style>
