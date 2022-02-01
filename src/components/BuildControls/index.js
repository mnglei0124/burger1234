import React, { useContext } from "react";
import BuildControl from "../BuildControl";
import BurgerContext from "../../context/BurgerContext";

import css from "./style.module.css";

const BuildControls = (props) => {
  const burgerContext = useContext(BurgerContext).burger;
  const disabledIngredients = { ...burgerContext.ingredients };
  for (const key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }
  return (
    <div className={css.BuildControls}>
      <p>
        Burger price:{" "}
        <strong>
          {burgerContext.totalPrice ? burgerContext.totalPrice : 0}
        </strong>
      </p>

      {Object.keys(burgerContext.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          disabledIngredients={disabledIngredients}
          type={el}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={!burgerContext.purchasing} 
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;
