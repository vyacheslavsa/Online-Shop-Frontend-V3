import React from 'react';
import  './CountBoard.css'

const CountBoard = ({count, incClick , decClick}) => {
    return (
        <div className="product_card__count">
            <p>КОЛИЧЕСТВО</p>
            <div className="product_card__board">
                <button className="product_card__inc-dec product_dec" onClick={()=>incClick()}>-</button>
                <p className="product_card__value">{count}</p>
                <button className="product_card__inc-dec product_inc" onClick={()=>decClick()}>+</button>
            </div>
        </div>
    );
};

export default CountBoard;