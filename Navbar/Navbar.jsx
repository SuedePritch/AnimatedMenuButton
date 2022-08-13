import React from 'react'
import './Navbar.css'
import Menu from './Menu/Menu'

function Navbar() {
  return (
    <div className='navbar-container'>
        <h1 className='navbar-title'>James' Menu Button</h1>
        <Menu/>
    </div>
  )
}

export default Navbar