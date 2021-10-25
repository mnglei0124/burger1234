import React from "react";

import css from "./style.module.css";

const BuildControl = (props) => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.ingredient}</div>
    <button
      onClick={() => props.changeIngredient(props.type, 0)}
      className={css.Less}
    >
      Хасах
    </button>
    <button
      onClick={() => props.changeIngredient(props.type, 1)}
      className={css.More}
    >
      Нэмэх
    </button>
  </div>
);

export default BuildControl;
