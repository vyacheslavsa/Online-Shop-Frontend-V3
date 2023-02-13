import React from 'react'
import './Header.css'
import {NavLink} from "react-router-dom";

const Header = ({text}) => {
  return (
    <header>
        <h1>{text}</h1>
        <div className="header__navbar">
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/registration'}>Registration</NavLink>
        </div>
    </header>
  )
}

export default Header
