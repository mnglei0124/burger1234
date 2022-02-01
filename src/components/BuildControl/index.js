import React, { useContext } from "react";
import css from "./style.module.css";
import BurgerContext from "../../context/BurgerContext";

const BuildControl = (props) => {
  const burgerContext = useContext(BurgerContext);
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.ingredient}</div>
      <button
        disabled={props.disabledIngredients[props.type]}
        onClick={() => burgerContext.changeIngredient(props.type, 0)}
        className={css.Less}
      >
        Хасах
      </button>
      <button
        onClick={() => burgerContext.changeIngredient(props.type, 1)}
        className={css.More}
      >
        Нэмэх
      </button>
    </div>
  );
};
export default BuildControl;
