import React from 'react'
import { IconContext } from "react-icons";
import { BsArrowsMove } from "react-icons/bs";
import {  FaHome } from 'react-icons/fa'
import { VscProject } from "react-icons/vsc"
import { IoIosContact } from "react-icons/io"
import { Link } from 'react-router-dom'

import './Navbar.css'

function Header() {
  return (
    <nav className="navbar">
      <ul className='navbar-nav'>
        <li class="logo">
          <Link className='nav-link' to='/'>
            <span class="logo-text">Navigate</span>
            <IconContext.Provider value={{ className: 'logo-svg'}}>
              <BsArrowsMove />
            </IconContext.Provider>
          </Link>
        </li>  
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            <IconContext.Provider value={{ className: 'svg'}}>
              <FaHome />
            </IconContext.Provider>
            <span className='link-text'>Home</span>
          </Link>
        </li>       
        <li className='nav-item'>
          <Link className='nav-link' to='/projects'>
          <IconContext.Provider value={{ className: 'svg'}}>
              <VscProject />
            </IconContext.Provider>
          <span className='link-text'>Projects</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/contact'>
          <IconContext.Provider value={{ className: 'svg'}}>
            <IoIosContact />
          </IconContext.Provider>
          <span className='link-text'>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header