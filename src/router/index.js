import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Orders from '@/components/orders'
import Products from '@/components/products'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    }
  ]
})
