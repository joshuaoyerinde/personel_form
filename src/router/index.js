import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../components/Form.vue'
import Login from '../components/admin/Login.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    redirect:'/form',
    path:'/'
  },

  {
    path:'/form',
    name:'form',
    component:Form
  },
  // routing from admi
  {
    path:'/admin/login',
    component:Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
