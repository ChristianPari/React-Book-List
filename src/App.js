import React from 'react'

// contexts
import { ThemeContextProvider } from './Contexts/ThemeContext'
import { AuthContextProvider } from './Contexts/AuthContext'
import { BookListContextProvider } from './Contexts/BookListContext'

// components
import NavBar from './Components/NavBar'
import BookList from './Components/BookList'
import ThemeToggle from './Components/ThemeToggle'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <BookListContextProvider>
            <NavBar />
            <BookList />
            <ThemeToggle />
          </BookListContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;