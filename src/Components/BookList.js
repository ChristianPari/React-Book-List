import React from 'react';

// contexts
import { useTheme } from '../Contexts/ThemeContext'

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
        <li style={liStyle}>The Lighting Thief</li>
        <li style={liStyle}>Sea of Monsters</li>
        <li style={liStyle}>The Titan's Curse</li>
      </ul>
    </div>
  )
}