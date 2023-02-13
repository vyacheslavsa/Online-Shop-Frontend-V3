import React from 'react';
import './Authorization.css'
import {NavLink, useLocation} from "react-router-dom";
import Button from "../Button/Button";

const Authorization = () => {
    const location = useLocation()

    const isLogin = location.pathname === '/login'
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
                    <input type="text"/>
                </div>
                <div>
                    <p>Пароль</p>
                    <input type="password"/>
                </div>
                <div className="authorization__btn">
                    <Button className="authorization__button">{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
                    <NavLink to={isLogin ? '/registration' : '/login'}>
                        {isLogin ? 'Зарегистрироваться' : 'Войти'}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Authorization;