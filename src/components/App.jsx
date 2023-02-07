import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { getBreads, getFillings, getMenu, getSauces, getVegetables } from '../api';
import Header from './Header/Header.jsx';
import MainLayout from './MainLayout/MainLayout.jsx';
import ProductBord from './ProductBord/ProductBord.jsx';

const App = () => {
    const data = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSauces())
    },[dispatch])

    console.log(data)

    return (
        <MainLayout content={<ProductBord/>}/>
    );
};

export default App;