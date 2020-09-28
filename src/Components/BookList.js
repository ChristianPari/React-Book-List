import React from 'react'

// contexts
import { useTheme } from '../Contexts/ThemeContext'
import { useBooks, useBooksUpdate } from '../Contexts/BookListContext'

// components
import NewBookForm from './NewBookForm'
import BookDetails from './BookDetails'

export default function BookList() {
  const { isLightTheme, light, dark } = useTheme();
  const theme = isLightTheme ? light : dark;

  const books = useBooks()
  const addBook = useBooksUpdate().addBook

  const divStyle =  {
    background: theme.bg, 
    color: theme.text
  }

  return books.length ? (
    <div 
      className='book-list' 
      style={divStyle}
    >
      <ul>
        { books.map(book => {
          return (
            <BookDetails 
              book={book} 
              key={book.id}
            />
          )
        })}
      </ul>
      <NewBookForm 
        addBook={addBook}
      />
    </div>
  ) : (
    <div 
      className='empty'
      style={{...divStyle,
        padding: '10px',
        marginBottom: '20px'
      }}  
    >
      <p>No books to read. Hello free time!</p>
      <NewBookForm 
        addBook={addBook}
      />
    </div>
  )
}