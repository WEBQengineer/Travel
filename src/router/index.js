import Vue from 'vue'
import Router from 'vue-router'
// import City from '@/pages/city/City.vue'
const Detail = () => import('@/pages/detail/Detail.vue');
const City = resolve=>(require(["@/pages/detail/Detail.vue"],resolve))

Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home.vue')
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      // component: () => import('@/pages/detail/Detail.vue')
      component:Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router;