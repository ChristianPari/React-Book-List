import React from 'react'

// contexts
import { useTheme, useThemeUpdate } from '../Contexts/ThemeContext'

export default function ThemeToggle() {
  const { isLightTheme, light, dark } = useTheme()
  const theme = isLightTheme ? light : dark

  return (
    <button
      onClick={useThemeUpdate()}
      style={{
        color: theme.text, 
        background: theme.bg, 
        border: 'solid', 
        borderColor: theme.ui, 
        padding: 5,
        cursor: 'pointer'
      }}
    >
      Toggle Theme
    </button>
  )
}