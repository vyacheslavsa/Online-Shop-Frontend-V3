import React, {useEffect} from 'react';
import { useDispatch} from "react-redux";
import { getMenu } from '../api';
import MainLayout from './MainLayout/MainLayout.jsx';
import ProductBord from './ProductBord/ProductBord.jsx';

const App = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getMenu())
    },[dispatch])



    return (
        <>
            <MainLayout content={<ProductBord/>}/>
        </>
    );
};

export default App;