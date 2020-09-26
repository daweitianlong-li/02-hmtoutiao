import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false// 关闭控制台提示消息

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
