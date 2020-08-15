'use strict'

import Vue from 'vue'

import App from './../components/app'

import test from './../test'
console.log(test)

Vue.config.productionTip = false

window.vm = new Vue({
  render: h => h(App)
}).$mount('#app')
