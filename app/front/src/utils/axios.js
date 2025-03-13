import axios from 'axios'
import { userStore } from '@/stores/user/userStore'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = userStore.getState().token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
