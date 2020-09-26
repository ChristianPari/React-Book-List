import React from 'react'

// contexts
import { useTheme } from '../Contexts/ThemeContext'

export default function NavBar() {
  const { isLightTheme, light, dark } = useTheme();
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{background: theme.ui, color: theme.text}}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}