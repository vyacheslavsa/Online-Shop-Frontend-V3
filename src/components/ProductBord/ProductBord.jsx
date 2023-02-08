import React from 'react'
import './ProductBord.css'
import {useSelector} from "react-redux";
import Loading from "../Loading/Loading"
import ProductCard from "../ProductCard/ProductCard";

const ProductBord = () => {
    const {menu, loadings, activeTabProducts} = useSelector(state => state.data);
    const filteredData = menu.filter(item => item.category === activeTabProducts);

    return (
        <main className={loadings.menuLoading ? "loading_board" : "products_board"}>
            {loadings.menuLoading ? <Loading/> : filteredData.map(card => <ProductCard info={card} key={card._id}/>)}
        </main>
    )
}

export default ProductBord
