import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.prototype.API_URL = '/api'

new Vue({
	el: '#app',

	router: new VueRouter(routes),
})
