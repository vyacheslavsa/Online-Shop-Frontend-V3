import React from 'react'
import './Header.css'
import {NavLink} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../api';
import Button from '../Button/Button';

const Header = ({text}) => {
  const auth = useSelector(state => state.data.auth)
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.data.loadings.authLoading)
  return (
    <header>
        <h1>{text}</h1>
        <div className="header__navbar">
            {
            
            !isLoading ?
              !auth.isAuth ? 
              <>
                <NavLink to={'/login'}>Login</NavLink>
                <NavLink to={'/registration'}>Registration</NavLink>
              </>
              : 
              <div className="header__auth">
                <div>Здравствуйте, {auth.user.login}</div>
                <Button onClick={()=>dispatch(logout())}>Выйти</Button>
              </div>
              :
              <div>loding...</div>
            }
        </div>
    </header>
  )
}

export default Header
