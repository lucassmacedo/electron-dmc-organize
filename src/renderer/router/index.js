import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      components: {
        default: require('@/components/LandingPage').default,
        menuView: require('@/components/Header').default
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
