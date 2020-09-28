import React from 'react'

// contexts
import { useTheme } from '../Contexts/ThemeContext'
import { useAuth, useAuthUpdate } from '../Contexts/AuthContext'
import { useBooks } from '../Contexts/BookListContext'

export default function NavBar() {
  const { isLightTheme, light, dark } = useTheme()
  const theme = isLightTheme ? light : dark

  const { isAuthenticated: auth } = useAuth()

  const books = useBooks()

  return (
    <nav style={{background: theme.ui, color: theme.text}}>
      <h1>Christian's Reading List</h1>
      <div
        onClick={useAuthUpdate()}
        style={{cursor: 'pointer'}}
      >
        Click me to chnage! { auth ? 'Logged In' : 'Logged Out' }
      </div>
      <p>
        Currently you have { books.length } books to read...
      </p>
    </nav>
  )
}