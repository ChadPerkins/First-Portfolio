import React from 'react'
import { IconContext } from "react-icons";
import { BsArrowsMove } from "react-icons/bs";
import {  FaGithub, FaHome, FaLinkedin } from 'react-icons/fa'
import { VscProject } from "react-icons/vsc"
import { IoIosContact } from "react-icons/io"
import { Link } from 'react-router-dom'
 
import './Navbar.css'

function Header() {
  return (
    <nav className="navbar">
      <ul className='navbar-nav'>
        <li className="logo">
          <Link className='nav-link' to='/'>
            <span className="logo-text">Navigate</span>
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
        <div className="social-list">
        <li className='nav-item'>
          <a className='nav-link' href="https://github.com/ChadPerkins">
            <IconContext.Provider value={{ className: 'svg'}}>
              <FaGithub />
            </IconContext.Provider>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href="https://www.linkedin.com/in/chad-perkins-259307231/">
            <IconContext.Provider value={{ className: 'svg'}}>
              <FaLinkedin />
            </IconContext.Provider>
          </a>
        </li>
        </div>
      </ul>
    </nav>
  )
}

export default Header