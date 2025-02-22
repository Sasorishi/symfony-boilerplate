import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '@/utils/axios'

const Dashboard = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get('/api/user', {
          withCredentials: true,
        })
        console.log('Utilisateur connecté:', response.data)
      } catch (error) {
        console.error(
          'Erreur lors de la vérification de la connexion:',
          error.response.data,
        )
      }
    }

    fetchUserData()
  }, [token])

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/api/logout')

      // Supprimer le token du stockage local
      localStorage.removeItem('token')

      // Rediriger l'utilisateur vers la page de login
      navigate('/login')
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error)
    }
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <p>ok</p>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  )
}

export default Dashboard
