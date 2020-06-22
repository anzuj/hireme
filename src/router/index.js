import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/IntroKitty.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
