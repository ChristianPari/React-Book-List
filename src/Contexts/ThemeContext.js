import React, { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

export function ThemeContextProvider({children}) {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { text: '#555', ui: '#ddd', bg: '#eee'},
    dark: { text: '#ddd', ui: '#333', bg: '#555'}
  });

  function toggleTheme() {
    setTheme(theme => {
      return {
        ...theme,
        isLightTheme: !theme.isLightTheme
      }
    })
  }

  return (  
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        { children }
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}