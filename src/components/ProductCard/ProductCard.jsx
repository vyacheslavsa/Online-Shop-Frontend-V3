import React from 'react';
import './ProductCard.css'

const ProductCard = ({info}) => {

    return (
        <article className="product_card" id={info._id}>
            <div className="product_card__logo__show">
                <img src="" />
            </div>
            <div className="product_card__image">
                <img src={info.image} alt="no_image" />
            </div>
            <div className="product_card__name">
                <p>{info.name}</p>
            </div>
            <div className="product_card__description__show">
                <a>{info.description}</a>
            </div>
            <p className="product_card__price">Цена: {info.price} руб.</p>
            <div className="product_card__count">
                <p>КОЛИЧЕСТВО</p>
                <div className="product_card__board">
                    <button className="product_card__inc-dec product_dec">-</button>
                    <p className="product_card__value">1</p>
                    <button className="product_card__inc-dec product_inc">+</button>
                </div>
            </div>
            <button className="product_card_btn_add">
                СОБРАТЬ
            </button>
        </article>
    );
};

export default ProductCard;