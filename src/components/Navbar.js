import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/logo/partyTyme.png"


export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='partytyme logo' className='logo' />
        </Link>

        <ul className='nav-links'>
          <li>
            <NavLink
              to='/'
              exact

            >home</NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              exact
            >about</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  )
}
