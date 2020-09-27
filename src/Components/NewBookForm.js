import React, { useState } from 'react'

// contexts
import { useTheme } from '../Contexts/ThemeContext'

export default function NewBookForm(props) {
  const [title, setTitle] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addBook(title)
    setTitle('')
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
    color: theme.text
  }

  const btnStyle = {
    color: theme.text, 
    background: theme.bg, 
    border: 'solid', 
    borderColor: theme.ui, 
    padding: 5,
    marginLeft: 5,
    cursor: 'pointer'
  }

  const inputStyle = {
    border: 'solid',
    borderColor: theme.ui,
    color: theme.text,
    background: theme.bg,
    padding: '5px'
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={formStyle}
    >
      <label
        style={labelStyle}
      >Book Name: </label>
      <input 
        required 
        type='text' 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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