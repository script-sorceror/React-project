import React from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'
import { NavLink } from 'react-router-dom'


const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-options">
          <img src={assets.add_icon} alt="" />
          <p>Add items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-options">
          <img src={assets.list_icon} width="27px" alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-optiNavLink">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default sidebar