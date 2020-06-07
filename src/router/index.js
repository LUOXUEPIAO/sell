import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/views/goods'
import rating from '@/views/rating'
import seller from '@/views/seller'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/rating',
      name: 'rating',
      component: rating
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }

  ]
})
