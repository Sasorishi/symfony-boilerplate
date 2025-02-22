import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const token = localStorage.getItem('token') // Vérifie si un token existe
  console.log(token)

  return token ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoute
