import React from "react";
import { useSelector } from "react-redux";
import "./CardModal.css";
import cs from "classnames";

const CardModal = ({ info, onClick }) => {
  const customSandwich = useSelector((state) => state.data.customSandwich);
  const selectedIngredient = (id) => customSandwich.allIdIngredients.find((item) => item === id);

  return (
    <div
      className={cs("modal_window__card", {
        ["selected_ingredient"]: customSandwich.hasOwnProperty("allIdIngredients") && selectedIngredient(info._id),
      })}
      id={info._id}
      onClick={() => onClick(info)}
    >
      <div className="product_card__image modal_image">
        <img src={info.image} alt="no_image" />
      </div>
      <div className="modal_window__description">
        <p className="modal_window__text">{info.name}</p>
        <p className="modal_window__price">Цена: {info.price} руб.</p>
      </div>
    </div>
  );
};

export default CardModal;
