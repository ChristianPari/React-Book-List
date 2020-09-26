import React, { useState, useContext, createContext } from 'react'

const AuthContext = createContext()
const AuthUpdateContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function useAuthUpdate() {
  return useContext(AuthUpdateContext)
}

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({isAuthenticated: false})

  function toggleAuth() {
    setAuth({isAuthenticated: !auth.isAuthenticated})
  }

  return (
    <AuthContext.Provider value={auth}>
      <AuthUpdateContext.Provider value={toggleAuth}>
        { children }
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  )
}