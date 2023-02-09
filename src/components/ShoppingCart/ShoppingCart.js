import React from 'react';
import './ShoppingCart.css'
import Button from "../Button/Button";

const ShoppingCart = () => {
    return (
        <div className="shopping_cart">
            <div className="shopping_cart__header">
                <div className="shopping_cart__box_shadow"></div>
                <img src="/i/shopping_cart.png" alt="no_image_shop-card"/>
                    <p className="shopping_cart__name">Корзина</p>
            </div>
            <div className="shopping_cart__columns">
                <p>Название</p>
                <p>Количество</p>
            </div>
            <div className="shopping_cart__content">
                {/*<div className="shopping_cart__item" id="6415339990000326000">*/}
                {/*    <p>Pizza Spot (фирм) 35см</p>*/}
                {/*    <div>*/}
                {/*        <p>1</p>*/}
                {/*        <img className="shopping_cart__delete_icon" src="./i/trash_icon.png">*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className="shopping_cart__footer">
                <p className="shopping_cart__price">Итого: 0 руб.</p>
                {/*<button>ОФОРМИТЬ ЗАКАЗ</button>*/}
                <Button disabled>ОФОРМИТЬ ЗАКАЗ</Button>
            </div>
        </div>
    );
};

export default ShoppingCart;