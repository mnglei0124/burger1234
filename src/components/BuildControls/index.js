import React from "react";
import BuildControl from "../BuildControl";
import { connect } from "react-redux";

import css from "./style.module.css";

const BuildControls = (props) => {
  const disabledIngredients = { ...props.ingredients };
  for (const key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }
  return (
    <div className={css.BuildControls}>
      <p>
        Burger price: <strong>{props.price ? props.price : 0}</strong>
      </p>

      {Object.keys(props.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          disabledIngredients={disabledIngredients}
          changeIngredient={props.changeIngredient}
          type={el}
          ingredient={props.ingredientNames[el]}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={props.disabled}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    ingredientNames: state.burgerReducer.ingredientNames,
    disabled: !state.burgerReducer.purchasing,
  };
};

export default connect(mapStateToProps)(BuildControls);
