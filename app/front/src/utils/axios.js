import axios from 'axios'

// Créer une instance Axios avec une configuration de base
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000, // Temps d'attente en millisecondes
  withCredentials: true, // Assurer que les cookies de session sont envoyés avec chaque requête
})

export default axiosInstance
