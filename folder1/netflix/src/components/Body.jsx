import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { useSelector } from 'react-redux'

const Body = ({ loading }) => {
  const user = useSelector((state) => state.user.user);

  console.log('Current user state:', user);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-600 text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/browse" replace /> : <Login />}
        />
        <Route
          path="/browse"
          element={user ? <Browse /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Body