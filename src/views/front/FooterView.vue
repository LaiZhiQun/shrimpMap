<template>
  <footer>
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social_icon">
      <!-- <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
      <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
      <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
      <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li> -->
      <li><p>本網站僅為個人學習練習之用，所使用之所有圖片、文字、影音、任何商標、標誌、產品名稱等，均來自於網路上公開資源，均屬於其各自所有者的財產，如有不當使用，請來信告知後立即移除。</p></li>
    </ul>
    <!-- <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Team</a></li>
      <li><a href="#">Contact</a></li>
    </ul> -->
    <p>@2023 Vue side project | All Rights Reserved</p>
  </footer>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-height: 100vh;
  background: #333;
}

footer {
  position: relative;
  width: 100%;
  background: #3586ff;
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30vh; /* custom */
}

/* footer .social_icon, footer .menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
} */

footer .social_icon li, footer .menu li {
  list-style: none;
}

/* footer .social_icon li a {
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
} */

/* footer .social_icon li a:hover {
  transform: translateY(-10px);
} */

/* footer .menu li a {
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
} */

/* footer .menu li a:hover {
  opacity: 1;
} */

footer p {
  color: #fff;
  text-align: start;
  /* margin-top: 15px; */
  /* margin-bottom: 10px; */
  font-size: 1.1rem;
}

footer .wave {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('../../../public/wave.png');
  background-size: 1000px 100px; /* 對應(1000px) */
}

footer .wave#wave1 {
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: animateWave 4s linear infinite;
}

footer .wave#wave2 {
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: animateWave_02 4s linear infinite;
}

footer .wave#wave3 {
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: animateWave 3s linear infinite;
}

footer .wave#wave4 {
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: animateWave_02 3s linear infinite;
}

@keyframes animateWave {
  0% {
    background-position-x: 1000px; /* 對應(1000px) */
  }
  100% {
    background-position-x: 0px;
  }
}

@keyframes animateWave_02 {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 1000px;
  }
}
</style>
