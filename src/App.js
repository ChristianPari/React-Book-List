import React from 'react'

// contexts
import { ThemeContextProvider } from './Contexts/ThemeContext'
import { AuthContextProvider } from './Contexts/AuthContext'

// components
import NavBar from './Components/NavBar'
import BookList from './Components/BookList'
import ThemeToggle from './Components/ThemeToggle'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;