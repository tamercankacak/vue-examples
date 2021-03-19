import Vue from 'vue'
import App from './App.vue'
import firebasedb from './firebase/init'
import router from './router'
import firebase from "firebase/app";
import "firebase/auth";

Vue.config.productionTip = false
Vue.use(firebasedb)
let app = null;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})


