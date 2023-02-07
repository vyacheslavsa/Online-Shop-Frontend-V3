import React from 'react'
import './ProductBord.css'
import {useDispatch, useSelector} from "react-redux";
import Loading from "../Loading/Loading.jsx";

const ProductBord = () => {

    const dispatch = useDispatch();
    const {menu ,loadings} = useSelector(state => state.data)

    return (
        <main className="products_board">
            {<Loading/>}
            {/*{loadings.menuLoading ? <Loading/> : menu.map(card => <ProductCard info={card} key={card._id}/>)}*/}
        </main>
    )
}

export default ProductBord
