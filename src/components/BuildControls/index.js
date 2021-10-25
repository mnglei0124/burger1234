import React from "react";
import BuildControl from "../BuildControl";

import css from "./style.module.css";

const BuildControls = (props) => (
  <div className={css.BuildControls}>
    <BuildControl
      changeIngredient={props.changeIngredient}
      type="Salad"
      ingredient="Салад"
    />
    <BuildControl
      changeIngredient={props.changeIngredient}
      type="Bacon"
      ingredient="Гахайн мах"
    />
    <BuildControl
      changeIngredient={props.changeIngredient}
      type="Cheese"
      ingredient="Бяслаг"
    />
    <BuildControl
      changeIngredient={props.changeIngredient}
      type="Meat"
      ingredient="Үхрийн мах"
    />
  </div>
);

export default BuildControls;
