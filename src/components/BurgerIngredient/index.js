import React from "react";

import css from "./style.module.css";

const BurgerIngredient = ({ type = false }) => {
  return (
    <div className={css[type]}>
      {type === "BreadTop" &&
        [...Array(4)].map((_, i) => (
          <div
            className={i !== 0 ? `${css.Seed} ${css[`_${i + 1}`]}` : css.Seed}
            key={i}
          ></div>
        ))}
    </div>
  );
};

export default BurgerIngredient;
