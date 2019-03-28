import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import routing components
import Dashboard from './components/pages/Dashboard.vue'
import Chart from './components/pages/Chart.vue'

const router = new VueRouter({
  	mode: 'history',
  	base: process.env.BASE_URL,
  	routes: [
  		{ 
  			path: '/', 
  			component: Dashboard, 
  			name: 'dashboard' 
    	}, 
      { 
  			path: '/chart', 
  			component: Chart, 
  			name: 'chart' 
    	}
  	]
});

export default router
