import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

api.interceptors.response.use(
  res => res,
  err => {
    console.error("API Error:", err.message)
    return Promise.reject(err)
  }
)

export default api