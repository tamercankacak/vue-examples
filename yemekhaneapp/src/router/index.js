import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import AddFoodDay from '../components/AddFoodDay.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            component:Index,
            name:'Index'
        },
        {
            path:'/food-day',
            component:AddFoodDay,
            name:'AddFoodDay'
        }

    ]
})