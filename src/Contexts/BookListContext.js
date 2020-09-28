import React, { useState, useContext, createContext } from 'react'
import { v1 } from 'uuid'

const BooksContext = createContext()
const BooksUpdateContext = createContext()

export function useBooks() {
  return useContext(BooksContext)
}

export function useBooksUpdate() {
  return useContext(BooksUpdateContext)
}

export function BookListContextProvider({ children }) {
  const [books, setBooks] = useState([
    { 
      title: 'The Lighting Thief', 
      author: 'Rick Riordan', 
      id: 1},
    { 
      title: 'Sea of Monsters', 
      author: 'Rick Riordan', 
      id: 2},
    { 
      title: "The Titan's Curse", 
      author: 'Rick Riordan', 
      id: 3}
  ])
  
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: v1() }])
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <BooksContext.Provider value={books}>
      <BooksUpdateContext.Provider value={{addBook, removeBook}}>
        { children }
      </BooksUpdateContext.Provider >
    </BooksContext.Provider>
  )
}