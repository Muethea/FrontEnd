import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/pages/Login.vue'
import Signup from './components/pages/Signup.vue'
import Home from './components/pages/Home.vue'
import Dashboard from './components/pages/Dashboard.vue'
import Whiteboard from './components/pages/Whiteboard.vue'

import store from './store/store'
import { IS_USER_AUTHENTICATE_GETTER } from './store/storeconstants'

const routes = [
  { path: '/', component: Home },

  { path: '/login', component: Login },
  { path: '/sigunp', component: Signup },
  { path: '/dashboard', component: Dashboard, meta: { auth: true } },
  { path: '/whiteboard', component: Whiteboard, meta: { auth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (
    'auth' in to.meta &&
    to.meta.auth &&
    !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
  ) {
    next('/login')
  } else if (
    'auth' in to.meta &&
    !to.meta.auth &&
    store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
  ) {
    next('/dashboard')
  } else {
    next()
  }
})
export default router
