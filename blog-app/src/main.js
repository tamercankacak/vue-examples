import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.use(VueResource)
Vue.use(VueRouter)

const router=new VueRouter({
  routes:Routes,
  //history alınca url'deki hash(#) kayboluyor.
  mode:'history'
})

Vue.filter('uppercase',function(value){
  return value.toUpperCase();
})

Vue.filter('snippet',function(value){
  return value.slice(0,200) + '...';
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
