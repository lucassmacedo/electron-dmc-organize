import Vue from 'vue'
import Router from 'vue-router'
import localforage from '../datastore'

Vue.use(Router)

const header = require('@/components/Header').default
const home = require('@/components/Home').default
const equipe = require('@/components/Equipe').default
const directories = require('@/components/Directores').default
const config = require('@/components/Config').default
const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: home,
      menuView: header
    }
  },
  {
    path: '/equipe',
    name: 'equipe',
    components: {
      default: equipe,
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
    path: '/config',
    name: 'config',
    components: {
      default: config,
      menuView: header
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  localforage.getItem('config').then((response) => {
    if (!response && to.name !== 'config') {
      next({name: 'config'})
    }
  })
  next()
})
// router.afterEach(afterEach)

export default router
