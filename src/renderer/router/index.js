import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const header = require('@/components/Header').default
const home = require('@/components/Home').default
const directories = require('@/components/Directores').default
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: home,
        menuView: header
      }
    },
    {
      path: '/directories',
      name: 'directories',
      components: {
        default: directories,
        menuView: header
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
