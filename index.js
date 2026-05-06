import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Admin from '../views/Admin.vue'
import { useAuthStore } from '../store/auth'
import { requireAuth, requireAdmin } from '../utils/guards'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const auth = useAuthStore()
      requireAuth(to, from, next, auth)
    }
  },
  {
    path: '/admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      const auth = useAuthStore()
      requireAuth(to, from, next, auth)
      requireAdmin(to, from, next, auth)
    }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})