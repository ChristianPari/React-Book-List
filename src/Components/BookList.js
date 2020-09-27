import React from 'react'

// contexts
import { useTheme } from '../Contexts/ThemeContext'
import { useBooks, useBooksUpdate } from '../Contexts/BookListContext'

// components
import NewBookForm from './NewBookForm'

export default function BookList() {
  const { isLightTheme, light, dark } = useTheme();
  const theme = isLightTheme ? light : dark;

  const divStyle =  {
    background: theme.bg, 
    color: theme.text
  }
  const liStyle = {
    background: theme.ui
  }

  return (
    <div className='book-list' style={divStyle}>
      <ul>
        { useBooks().map(book => {
          return (
            <li
              key={book.id}
              style={liStyle}
            >
              {book.title}
            </li>
          )
        })}
      </ul>
      <NewBookForm 
        addBook={useBooksUpdate()}
      />
    </div>
  )
}