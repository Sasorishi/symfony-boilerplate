import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '@/utils/axios'
import { userStore } from '@/stores/user/userStore'

const Dashboard = () => {
  const logout = userStore((state) => state.logout)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await axiosInstance.get('/api/auth/user', {
          withCredentials: true,
        })
      } catch (error) {
        console.error(
          'Erreur lors de la vérification de la connexion:',
          error.response.data,
        )
      }
    }

    fetchUserData()
  }, [])

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/api/logout')
      logout()
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
