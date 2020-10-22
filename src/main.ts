import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import VueRouter from 'vue-router';
import {routes} from './routes'; 

Vue.config.productionTip = false

Vue.use(Router); 

const router = new VueRouter({
  routes, 
  mode: 'history'
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
