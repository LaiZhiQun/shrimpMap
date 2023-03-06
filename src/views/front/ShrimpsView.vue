<template>
  <div class="container">
    <div class="card">
      <div class="box">
        <div class="content">
          <h2>台中市</h2>
          <h3>東明釣蝦場</h3>
          <p>台中市北屯區經貿路一段688號</p>
          <p>電話:0412345678</p>
          <p>營業時間: 24H</p>
          <p>公蝦池</p>
          <div>
            <router-link to="#">
              <span class="text-center">查看細節</span>
              <div class="wave"></div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="box">
        <div class="content">
          <h2>台中市</h2>
          <h3>東明釣蝦場</h3>
          <p>台中市北屯區經貿路一段688號</p>
          <p>電話:0412345678</p>
          <p>營業時間: 24H</p>
          <p>公蝦池</p>
          <div>
            <router-link to="#">
              <span class="text-center">查看細節</span>
              <div class="wave"></div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="box">
        <div class="content">
          <h2>台中市</h2>
          <h3>東明釣蝦場</h3>
          <p>台中市北屯區經貿路一段688號</p>
          <p>電話:0412345678</p>
          <p>營業時間: 24H</p>
          <p>公蝦池</p>
          <div>
            <router-link to="#">
              <span class="text-center">查看細節</span>
              <div class="wave"></div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="box">
        <div class="content">
          <h2>台中市</h2>
          <h3>東明釣蝦場</h3>
          <p>台中市北屯區經貿路一段688號</p>
          <p>電話:0412345678</p>
          <p>營業時間: 24H</p>
          <p>公蝦池</p>
          <div>
            <router-link to="#">
              <span class="text-center">查看細節</span>
              <div class="wave"></div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background-color: #232427;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 40px 0;
}

.container .card {
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3),
    -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 30px;
}

.container .card .box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background-color: #2a2b2f;
  border: 2px solid #1e1f23;
  border-radius: 15px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.container .card .box::before {
  content: '';
  position: absolute;
  background-color: rgba(255, 255, 255, 0.05);
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  pointer-events: none;
}

/* .container .card .box:hover {
  transform: translateY(-50px);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.5);
} */

/* .container .card .box .content {
  padding: 20px;
  text-align: center;
} */

.container .card .box .content h2 {
  position: absolute;
  top: 0px;
  /* custom */
  right: 15px;
  /* custom */
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.05);
  font-size: 80px;
  /* custom */
}

.container .card .box .content h3 {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.5);
  z-index: 1;
  transition: 0.5s;
  margin-top: 5rem; /* custom */
}

.container .card .box .content p {
  font-size: 16px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  z-index: 1;
  transition: 0.5s;
  /* margin-top: 10px; */
}

/* .container .card .box .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background-color: #000;
  margin-top: 15px;
  border-radius: 20px;
  text-decoration: none;
  color: #fff;
  bottom: 0;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.container .card:nth-child(1) .box .content a {
  background-color: #2196f3;
}

.container .card:nth-child(2) .box .content a {
  background-color: #e91e63;
}

.container .card:nth-child(3) .box .content a {
  background-color: #97dc47;
} */
a {
  position: relative;
  display: block;
  padding: 10px 60px;
  border: 2px solid #287bff;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 4px;
  color: #287bff;
  text-decoration: none;
  overflow: hidden;
  margin-top: 50px;
}

a span {
  position: relative;
  z-index: 1;
  transition: 1s;
}

a:hover span {
  color: #fff;
}

a .wave {
  position: absolute;
  top: calc(100% + 22px);
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #287bff;
  transition: 1s;
}

a:hover .wave {
  top: 0;
}

a .wave:before {
  content: '';
  position: absolute;
  top: -22px;
  left: 0;
  width: 100%;
  height: 22px;
  background: url(wave.png);
  animation: animate 0.5s linear infinite;
}

@keyframes animate {
  0% {
    background-position-x: 0;
  }

  100% {
    background-position-x: 118px;
  }
}
</style>
