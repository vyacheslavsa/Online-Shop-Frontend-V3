import React from 'react';
import './ProductCard.css'
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {setOpenModal} from "../../features/rootSlice";
import CountBoard from "../CountBoard/CountBoard";

const ProductCard = ({info, variant = "menu"}) => {
    const dispatch = useDispatch()
    const getLinkLogo = (currentCategory) => {
        switch (currentCategory) {
            case "doner":
                return "i/markets/doner.png";
            case "subway":
                return "i/markets/subway_logo.png";
            case "sfc":
                return "i/markets/south_fried_chicken.png";
            default:
                return "";
        }
    }

    const isSandwiches = info.category === 'sandwiches'

    const collectSandwich = () => {
        dispatch(setOpenModal(true))
    }

    const addProductInShoppingCart = () => {
        console.log('addProductInShoppingCart')
    }

    return (
        <>
            {variant === "menu" ?
                <article className="product_card" id={info._id}>
                    {info.market &&
                        <div className="product_card__logo__show">
                            <img src={getLinkLogo(info.market)} alt="no_image"/>
                        </div>}
                    <div className="product_card__image">
                        <img src={info.image} alt="no_image"/>
                    </div>
                    <div className="product_card__name">
                        <p>{info.name}</p>
                    </div>
                    {info.description &&
                        <div className="product_card__description__show">
                            <a>{info.description}</a>
                        </div>}
                    <p className="product_card__price">Цена: {info.price} руб.</p>
                    <CountBoard count={1} decClick={()=>console.log('dec')} incClick={()=>console.log('inc')}/>
                    <Button onClick={isSandwiches ? () => collectSandwich() : () => addProductInShoppingCart()}>
                        {isSandwiches ? "СОБРАТЬ" : "В КОРЗИНУ"}
                    </Button>
                </article>
                :
                <div className="modal_window__card" id={info._id}>
                    <div className="product_card__image modal_image">
                        <img src={info.image} alt="no_image"/>
                    </div>
                    <div className="modal_window__description">
                        <p className="modal_window__text">{info.name}</p>
                        <p className="modal_window__price">Цена: {info.price} руб.</p>
                    </div>
                </div>
            }
        </>
    );
};

export default ProductCard;