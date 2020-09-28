import React, { useState } from 'react'

// contexts
import { useTheme } from '../Contexts/ThemeContext'

export default function NewBookForm(props) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addBook(title, author)
    setTitle('')
    setAuthor('')
  }

  const { isLightTheme, light, dark } = useTheme()
  const theme = isLightTheme ? light : dark

  const formStyle = {
    background: theme.bg,
    border: 'solid',
    borderColor: theme.ui,
    padding: '5px'
  }

  const labelStyle = {
    color: theme.text,
    padding: 0,
    margin: 0
  }

  const btnStyle = {
    color: theme.text, 
    background: theme.bg, 
    border: 'solid', 
    borderColor: theme.ui, 
    padding: '5px',
    margin: '5px',
    cursor: 'pointer'
  }

  const inputStyle = {
    border: 'solid',
    borderColor: theme.ui,
    color: theme.text,
    background: theme.bg,
    padding: '5px',
    margin: '5px'
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={formStyle}
    >
      <p style={labelStyle}>Book</p>
      <input 
        required 
        type='text' 
        value={title}
        placeholder='Title'
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <input 
        required 
        type='text' 
        value={author}
        placeholder='Author'
        onChange={(e) => setAuthor(e.target.value)}
        style={inputStyle}
      />
      <input 
        type='submit' 
        value='Add Book'
        style={btnStyle}
      />
    </form>
  )
}