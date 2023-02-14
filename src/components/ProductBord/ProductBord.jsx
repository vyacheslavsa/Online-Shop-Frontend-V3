import React, {useEffect} from 'react'
import './ProductBord.css'
import {useDispatch, useSelector} from "react-redux";
import Loading from "../Loading/Loading"
import ProductCard from "../ProductCard/ProductCard";
import {getProducts} from "../../api";
import {ALL_CATEGORIES} from "../../constans";

const ProductBord = () => {
    const {products, loadings, activeTabProducts} = useSelector(state => state.data);
    const filteredData = products.filter(item => item.category === activeTabProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(ALL_CATEGORIES.products));
    }, [dispatch]);

    return (
        <main className={loadings.productsLoading ? "loading_board" : "products_board"}>
            {loadings.productsLoading ? <Loading/> : filteredData.map(card => <ProductCard info={card} key={card._id}/>)}
        </main>
    )
}

export default ProductBord
