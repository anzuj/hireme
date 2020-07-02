import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter)

const routes = [

  // {
  //   path: '/',
  //   redirect: { name: 'Home'}
  // },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '*',
    redirect: { name: 'Home' }
  },

]

const router = new VueRouter({
  routes,
  mode:"history",
  // scrollBehavior: (to, from, savedPosition) => {
  //   let scrollTo = 0

  //   if (to.hash) {
  //     scrollTo = to.hash
  //   } else if (savedPosition) {
  //     scrollTo = savedPosition.y
  //   }

  //   return goTo(scrollTo)
  // },
})

export default router
