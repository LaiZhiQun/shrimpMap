<template>
  <div class="d-flex justify-content-end mt-5">
    <RouterLink to="/form">
      <span>填寫資料</span>
      <div class="liquid"></div>
    </RouterLink>
  </div>
</template>

<style scoped>
a {
  position: relative;
  padding: 20px 35px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  width: 200px;
  overflow: hidden;
}

a span {
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 20px;
  letter-spacing: 10px;
  padding-left: 10px;
}

a .liquid {
  position: absolute;
  left: 0;
  top: -80px;
  width: 200px;
  height: 200px;
  background: #287bff;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, .5);
  transition: 0.5s;
}

a:hover .liquid {
  top: -120px;
}

a .liquid:before,
a .liquid:after {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
  background-color: #333;
}

a .liquid:before {
  border-radius: 45%;
  background: #2a2727;
  animation: animate 5s linear infinite;
}

a .liquid:after {
  border-radius: 40%;
  background: #333;
    animation: animate 10s linear infinite;
}

@keyframes animate {
  0%{
    transform: translate(-50%,-75%) rotate(0deg);
  }
  100%{
    transform: translate(-50%,-75%) rotate(360deg);
  }
}
</style>
