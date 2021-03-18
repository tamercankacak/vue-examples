import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import AddFoodDay from '../components/AddFoodDay.vue'
import EditFoodDay from '../components/EditFoodDay.vue'

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
        },
        {
            path:'/edit-food-day/:food_day_slug',
            component:EditFoodDay,
            name:'EditFoodDay'
        }

    ]
})