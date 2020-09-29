import React from 'react'

// contexts
import { useBooksUpdate } from '../Contexts/BookListContext'
import { useTheme } from '../Contexts/ThemeContext'

export default function BookDetails({ book }) {
  const dispatch = useBooksUpdate()

  const { isLightTheme, light, dark } = useTheme();
  const theme = isLightTheme ? light : dark;

  return (
    <li
      style={{background: theme.ui}}
      onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}
    >
      <div className='title'>{book.title}</div>
      <div className='author' >
        <small>{book.author}</small>
      </div>
    </li>
  )
}