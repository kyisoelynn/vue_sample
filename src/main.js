import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.feather = require('feather-icons');

new Vue({
  render: h => h(App),
}).$mount('#app')
