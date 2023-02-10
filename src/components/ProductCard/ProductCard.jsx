import React from 'react';
import './ProductCard.css'
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {setCustomSandwich, setProducts, setOpenModal, setShoppingCart} from "../../features/rootSlice";
import CountBoard from "../CountBoard/CountBoard";
import cs from 'classnames'

const {v4: uuidv4} = require('uuid');

const ProductCard = ({info, variant = "menu", onClick}) => {
    const {shoppingCart, customSandwich, products} = useSelector(state => state.data)

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

    const collectSandwich = (currentProduct) => {
        dispatch(setOpenModal(true))
        dispatch(setCustomSandwich({
            allIdIngredients: [],
            count: currentProduct.count,
            image: currentProduct.image,
            name: currentProduct.name,
            price: currentProduct.price,
            _id: uuidv4(),
            defaultPrice: currentProduct.price
        }))
    }


    const addProductInShoppingCart = (currentProduct) => {
        const findElement = [...shoppingCart].find(item => item._id === currentProduct._id)
        if (!findElement) {
            dispatch(setShoppingCart([...shoppingCart, {...currentProduct}]))
        } else {
            const copyShoppingCart = [...shoppingCart]
            const index = copyShoppingCart.findIndex(item => item._id === findElement._id)
            const countInShoppingCart = shoppingCart.find(item => item._id === {...currentProduct}._id)
            const copyFindElement = {...findElement}
            copyFindElement.count = currentProduct.count + countInShoppingCart.count
            copyShoppingCart[index] = copyFindElement
            dispatch(setShoppingCart([...copyShoppingCart]))
        }
    }

    const selectedIngredient = (id) => customSandwich.allIdIngredients.find(item => item === id)

    const changeCount = (id, event) => {
        const copyProducts = [...products]
        const resultSearch = copyProducts.find(item => item._id === id)
        const indexElement = copyProducts.findIndex(item => item._id === resultSearch._id)
        const copyResult = {...resultSearch}
        event === 'inc' ? copyResult.count++ : copyResult.count>1 && copyResult.count--
        copyProducts[indexElement] = copyResult
        dispatch(setMenu(copyProducts))
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
                    <CountBoard count={info.count} decClick={() => changeCount(info._id, 'dec')} incClick={() => changeCount(info._id, 'inc')}/>
                    <Button onClick={isSandwiches ? () => collectSandwich(info) : () => addProductInShoppingCart(info)}>
                        {isSandwiches ? "СОБРАТЬ" : "В КОРЗИНУ"}
                    </Button>
                </article>
                :
                <div
                    className={cs("modal_window__card", {["selected_ingredient"]: customSandwich.hasOwnProperty('allIdIngredients') && selectedIngredient(info._id)})}
                    id={info._id}
                    onClick={() => onClick(info)}
                >
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