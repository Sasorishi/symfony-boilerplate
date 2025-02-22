import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@/css/index.css'
import ProtectedRoute from '@/utils/ProtectedRoute'
import App from '@/pages/App.jsx'
import LoginPage from '@/pages/Login.jsx'
import RegisterPage from '@/pages/Register.jsx'
import DashboardPage from '@/pages/Dashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/main" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
