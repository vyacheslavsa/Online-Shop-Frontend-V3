import React from 'react';
import cs from 'classnames'

const Button = ({children, className, onClick}) => {
    return (
        <button className={cs("product_card_btn_add", {[className]: className})} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;