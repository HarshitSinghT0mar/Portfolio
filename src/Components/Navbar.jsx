import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav-container'>
    <h1 className='nav-title'>HarshitTomar.dev</h1> 
      <ul className='nav-container-list'>
        <a href='/'>Home</a>
        <a href='/'>Projects</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
      </ul>
    </nav>
  )
}

export default Navbar
