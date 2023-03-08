import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav>
        <h1>MOFA</h1>
        <ul className='nav-links'>
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
        </ul>
        <AiOutlineMenu style={{'cursor': 'pointer'}} className='navbar-menu-logo' fontSize={27}/>
        {/* <div>
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Product</Link>
        </div> */}
    </nav>
  )
}

export default Navbar