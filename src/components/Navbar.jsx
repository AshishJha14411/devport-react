import React from 'react'
import logo from '../assests/Logo.png'
export const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="logo" />
      <div className="icon-menu">
        <i className="fas fa-bars"></i>
      </div>
      <div className="nav-menu">
        <ul className="nav-items">
          <li className="nav-item"><a href="#">HOME</a></li>
          <li className="nav-item"><a href="#">PROJECT</a></li>
          <li className="nav-item"><a href="#">ABOUT</a></li>
          <li className="nav-item"><a href="#">CONTACT</a></li>
          <li className="nav-item"><a href="https://productdesignlp.netlify.app/" target='_blank'>HTML VERSION</a></li>
        </ul>
      </div>
    </div>
  )
}