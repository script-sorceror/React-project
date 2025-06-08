import React from 'react'
import {assets} from "../../assets/assets"
import './navbar.css'

const navbar = () => {
  return (
    <div className="navbar">
      <img className="logo"src={assets.logo} alt="" />
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default navbar;