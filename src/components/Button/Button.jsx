import React from 'react';
import cs from 'classnames'
import './Button.css'

const Button = ({children, className, onClick, disabled = false}) => {
    return (
        <button className={cs("product_card_btn_add", {[className]: className}, {["disabled_btn"]: disabled})} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;