/*
 * @Description: 
 * @Autor: yllz
 * @Date: 2020-02-08 14:30:55
 * @LastEditors: yllz
 * @LastEditTime: 2020-02-09 15:22:23
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
