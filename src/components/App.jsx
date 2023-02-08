import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getMenu} from '../api';
import MainLayout from './MainLayout/MainLayout';
import ProductBord from './ProductBord/ProductBord';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMenu())
    }, [dispatch])

    return (
        <MainLayout>
            <ProductBord/>
        </MainLayout>
    )
};

export default App;