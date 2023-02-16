import React from "react";
import "./ShoppingCart.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setShoppingCart } from "../../features/rootSlice";

const ShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.data.shoppingCart);
  const dispatch = useDispatch();

  const calculatePrice = () => {
    let sum = 0;
    if (shoppingCart.length) {
      const arrPrice = shoppingCart.map((item) => item.price * item.count);
      sum = arrPrice.reduce((acc, cur) => acc + cur);
    }
    return sum;
  };

  const deleteElement = (id) => {
    const copyArr = [...shoppingCart];
    const index = shoppingCart.findIndex((item) => item._id === id);
    copyArr.splice(index, 1);
    dispatch(setShoppingCart(copyArr));
  };

  return (
    <div className="shopping_cart">
      <div className="shopping_cart__header">
        <div className="shopping_cart__box_shadow"></div>
        <img src="/i/shopping_cart.png" alt="no_image_shop-card" />
        <p className="shopping_cart__name">Корзина</p>
      </div>
      <div className="shopping_cart__columns">
        <p>Название</p>
        <p>Количество</p>
      </div>
      <div className="shopping_cart__content">
        {shoppingCart.map((item) => (
          <div className="shopping_cart__item" id={item._id} key={item._id}>
            <p>{item.name}</p>
            <div>
              <p>{item.count}</p>
              <img
                className="shopping_cart__delete_icon"
                src="./i/trash_icon.png"
                onClick={() => deleteElement(item._id)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="shopping_cart__footer">
        <p className="shopping_cart__price">Итого: {calculatePrice()} руб.</p>
        <Button disabled>ОФОРМИТЬ ЗАКАЗ</Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
