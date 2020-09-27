import React from 'react'

// contexts
import { useTheme } from '../Contexts/ThemeContext'
import { useAuth, useAuthUpdate } from '../Contexts/AuthContext'

export default function NavBar() {
  const { isLightTheme, light, dark } = useTheme()
  const theme = isLightTheme ? light : dark

  const { isAuthenticated: auth } = useAuth()

  return (
    <nav style={{background: theme.ui, color: theme.text}}>
      <h1>Context App</h1>
      <div
        onClick={useAuthUpdate()}
        style={{cursor: 'pointer'}}
      >
        { auth ? 'Logged In' : 'Logged Out' }
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}