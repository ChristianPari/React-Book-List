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
    { title: 'The Lighting Thief', id: 1},
    { title: 'Sea of Monsters', id: 2},
    { title: "The Titan's Curse", id: 3}
  ])
  
  const addBook = (title) => {
    setBooks([...books, { title, id: v1() }])
  }

  return (
    <BooksContext.Provider value={books}>
      <BooksUpdateContext.Provider value={addBook}>
        { children }
      </BooksUpdateContext.Provider >
    </BooksContext.Provider>
  )
}