import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Kripto from '../components/Kripto'
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            component: HomePage,
            name: 'HomePage',
            meta: {
                admin: true
            }
        },
        {
            path: '/signup',
            component: Signup,
            name: 'Signup'
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/kripto',
            component: Kripto,
            name: 'Kripto',
            meta: {
                admin: true
            }
        },


    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(rec => rec.meta.admin)) {
        let user = firebase.auth().currentUser
        if(user){
            next()
        }else{
            next({name:'Login'})
        }
    } else {
        next()
    }
})

export default router