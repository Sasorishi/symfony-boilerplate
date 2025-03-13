import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { userStore } from '@/stores/user/userStore'

const ProtectedRoute = () => {
  const token = userStore((state) => state.token)
  return token ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoute
