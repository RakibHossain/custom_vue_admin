import Vue from 'vue'
import App from './App.vue'
import router from './router'
import helper from './helper'

Vue.config.productionTip = false

new Vue({
	helper: helper,
	router: router,
  	render: h => h(App),
}).$mount('#app')
