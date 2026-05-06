import { useAuthStore } from '../store/auth'

export function useAuth() {
  const auth = useAuthStore()

  const login = (email) => {
    const role = email === "admin@mail.com" ? "admin" : "user"

    auth.login({
      email,
      role
    })
  }

  return {
    user: auth.user,
    login,
    logout: auth.logout
  }
}