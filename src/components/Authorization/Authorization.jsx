import React, {useState, useEffect} from 'react';
import './Authorization.css'
import {NavLink, useNavigate, useLocation} from "react-router-dom";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import { login, registration, logout} from "../../api";
import Loading from '../Loading/Loading';

const Authorization = () => {
    const location = useLocation()
    const isLogin = location.pathname === '/login'
    const dispatch = useDispatch()

    const [loginField, setLoginField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const navigate = useNavigate();


    const loginUser = () => {
        dispatch(login({loginField, passwordField}))
    
        
    }

    const registrationUser = () => {
        dispatch(registration({loginField, passwordField}))
    }

    const isAuth = useSelector(state => state.data.auth.isAuth)

    const isloading = useSelector(state => state.data.loadings.authLoading)


    useEffect(() => {
        if(!isAuth)return
        navigate('/products')
    }, [isAuth]);



    return (

        !isloading && 
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
                    <Button className="authorization__button" onClick={isLogin ? loginUser : registrationUser}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
                    <NavLink to={isLogin ? '/registration' : '/login'} >
                        {isLogin ? 'Зарегистрироваться' : 'Войти'}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Authorization;