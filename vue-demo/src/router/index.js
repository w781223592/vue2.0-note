import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Parent from '@/components/Parent'
import Child from '@/components/Children'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'parent',
    component: Parent,
    children: [{
      path: '/child',
      name: 'child',
      component: Child
    }]
  }, 
 {
    path: '/home',
    name: 'home',
    component: Home
  }, 
//   {
//     path: '/home',
//     component: () => import('../views/Home.vue')
//   }, 
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  routes,
  // mode: 'history'
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
