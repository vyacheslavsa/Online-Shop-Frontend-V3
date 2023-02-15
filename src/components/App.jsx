import React, {useEffect} from "react";
import MainLayout from "./MainLayout/MainLayout";
import ProductBord from "./ProductBord/ProductBord";
import {Navigate, Route, Routes} from "react-router-dom";
import Authorization from "./Authorization/Authorization";


const App = () => {

    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     console.log(localStorage.getItem('token'))
    //     if(!localStorage.getItem('token')){
    //
    //         dispatch(checkAuth())
    //     }
    // },[])

    return(
        <Routes>
            <Route path="/products" element={<MainLayout children={<ProductBord/>}/>} />
            <Route path="/login" element={<Authorization/>} />
            <Route path="/registration" element={<Authorization/>} />
            <Route path="/" element={<Navigate to="/products" />} /> {/*redirect to home*/}
        </Routes>
    );
}

export default App;
