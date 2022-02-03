import React, { useContext, useMemo } from "react";
import BurgerIngredient from "../BurgerIngredient";

import BurgerContext from "../../context/BurgerContext";
import css from "./style.module.css";

const Burger = (props) => {
  const burgerContext = useContext(BurgerContext);
  return useMemo(() => {
    let content = [];
    const item = Object.entries(burgerContext.burger.ingredients);
    item.map((el) => {
      for (let i = 0; i < el[1]; i++) {
        content.push(
          <BurgerIngredient type={el[0]} key={`${el[0]}${i + 1}`} />
        );
      }
      return null;
    });
    if (content.length === 0) content = <p>Choose ingredients of Burger...</p>;
    return (
      <div className={css.Burger}>
        <BurgerIngredient type="BreadTop" />
        {content}
        <BurgerIngredient type="BreadBottom" />
      </div>
    );
  }, [burgerContext.burger.ingredients]);
};

export default Burger;
