/*
 * @Description: 
 * @Autor: yllz
 * @Date: 2020-02-08 14:30:55
 * @LastEditors: yll
 * @LastEditTime: 2020-03-08 16:28:10
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
