import React from 'react'
import { Routes, Route } from 'react-router'
import ProtectedRoute from '@/utils/ProtectedRoute'
import AppPage from '@/pages/App.jsx'
import LoginPage from '@/pages/Login.jsx'
import RegisterPage from '@/pages/Register.jsx'
import DashboardPage from '@/pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/main" element={<AppPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}

export default App
