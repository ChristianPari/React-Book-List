import React, { useReducer, useContext, createContext, useEffect } from 'react'

// reducers
import { bookReducer } from '../reducers/bookReducer'

const BooksContext = createContext()
const BooksUpdateContext = createContext()

export function useBooks() {
  return useContext(BooksContext)
}

export function useBooksUpdate() {
  return useContext(BooksUpdateContext)
}

export function BookListContextProvider({ children }) {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  return (
    <BooksContext.Provider value={books}>
      <BooksUpdateContext.Provider value={dispatch}>
        { children }
      </BooksUpdateContext.Provider >
    </BooksContext.Provider>
  )
}