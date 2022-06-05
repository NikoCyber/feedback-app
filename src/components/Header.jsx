import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ text, bgColor, textColor}) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        textDecoration: 'none'
    }

  return (
    <header style={headerStyles}>
        <div className='container'>
        <Link to="/" style={ headerStyles }><h2>{text}</h2></Link>
        </div>
    </header>
  )
}

Header.defaultProps = {
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}