import React, {useState} from 'react';
import './Authorization.css'
import {NavLink, useLocation} from "react-router-dom";
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {login} from "../../api";

const Authorization = () => {
    const location = useLocation()
    const isLogin = location.pathname === '/login'
    const dispatch = useDispatch()

    const [loginField, setLoginField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const test = () => {
        dispatch(login({loginField, passwordField}))
    }

    return (
        <div className="authorization">
            <div className="authorization__button_back">
                <NavLink to={'/products'}>
                    <Button>Вернуться</Button>
                </NavLink>
            </div>
            <div className="authorization__content">
                <div>{isLogin ? 'Login' : 'Registration'}</div>
                <div>
                    <p>Логин</p>
                    <input type="text" placeholder="Login" onChange={(e) => setLoginField(e.target.value)}/>
                </div>
                <div>
                    <p>Пароль</p>
                    <input type="password" placeholder="Password" onChange={(e) => setPasswordField(e.target.value)}/>
                </div>
                <div className="authorization__btn">
                    <Button className="authorization__button" onClick={test}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
                    <NavLink to={isLogin ? '/registration' : '/login'} >
                        {isLogin ? 'Зарегистрироваться' : 'Войти'}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Authorization;