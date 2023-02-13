import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../api";
import { ALL_CATEGORIES } from "../constans";
import MainLayout from "./MainLayout/MainLayout";
import ProductBord from "./ProductBord/ProductBord";
import {Navigate, Route, Routes} from "react-router-dom";
import Authorization from "./Authorization/Authorization";

const App = () => (
    <Routes>
        <Route path="/products" element={<MainLayout children={<ProductBord/>}/>} />
        <Route path="/login" element={<Authorization/>} />
        <Route path="/registration" element={<Authorization/>} />
        <Route path="/" element={<Navigate to="/products" />} /> {/*redirect to home*/}
    </Routes>
);

export default App;
