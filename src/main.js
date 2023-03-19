// eslint-disable-next-line import/no-duplicates
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import './assets/all.scss'

import 'bootstrap-icons/font/bootstrap-icons.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from './assets/zh_TW.json'

import { date, currency } from './methods/filters'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
setLocale('zh_TW') // 設定預設語系

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueAxios, axios)

app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Loading', Loading)
// 全域註冊 $filters
app.config.globalProperties.$filters = {
  date,
  currency
}
app.mount('#app')
