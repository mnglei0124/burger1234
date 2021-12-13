import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import { connect } from "react-redux";

import css from "./style.module.css";

const Burger = (props) => {
  let content = [];
  const item = Object.entries(props.ingredients);
  item.map((el) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(<BurgerIngredient type={el[0]} key={`${el[0]}${i + 1}`} />);
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
};

const mapStateToProps = (state) => {
  return { ingredients: state.ingredients };
};

export default connect(mapStateToProps)(Burger);
