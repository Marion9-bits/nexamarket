export function requireAuth(to, from, next, authStore) {
  if (!authStore.token) {
    return next('/login')
  }
  next()
}

export function requireAdmin(to, from, next, authStore) {
  if (authStore.user?.role !== 'admin') {
    return next('/')
  }
  next()
}