import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import References from '../views/References.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reference',
    name: 'References',
    component: References
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
