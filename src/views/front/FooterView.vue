<template>
  <footer>
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social_icon">
      <li><p>本網站僅為個人學習練習之用，所使用之所有圖片、文字、影音、任何商標、標誌、產品名稱等，均來自於網路上公開資源，均屬於其各自所有者的財產，如有不當使用，請來信告知後立即移除。</p></li>
    </ul>
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
  margin-top: 50vh; /* custom */
}

footer .social_icon li, footer .menu li {
  list-style: none;
}

footer p {
  color: #fff;
  text-align: start;
  font-size: 1.1rem;
}

footer .wave {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('https://storage.googleapis.com/vue-course-api.appspot.com/brad5566/1678991768040.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=H6CZXBoAbBlUXI6Po2a1kgG%2FA2%2FJdS1FI%2F4wTEsbSTLLw%2Fyh6SBFVdT05KebHtROM8vqpFJ3i%2FrXjCD11Qp3Wa%2F34OQA66Hol%2BIKyfqMTBuLypTP9Z6LPnw9kf4h5QA8AGY9liEWdyxXLlyleHrZjL2shvHLt3f6h%2BqCZ7tST4UKxzJU9NHF6aTzemtDshrniJe5WPtvEDKc27gdCEoT2ReTOFx4g1MzVQxsuPx7u9VN3UFxiXPO5Pb707Q80ff4nrPIpUeMxBV3cs4z6yGQFFj%2Bda6RDh%2Fm4vOLihPK5IbsLmM3s89dZ8Q7LodHicoqlMqOJ5VLMOeGp6Jcc1oBHQ%3D%3D');
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
