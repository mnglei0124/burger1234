import React, { useContext } from "react";
import BurgerIngredient from "../BurgerIngredient";
//import { connect } from "react-redux";

import BurgerContext from "../../context/BurgerContext";
import css from "./style.module.css";

const Burger = (props) => {
  const burgerContext = useContext(BurgerContext);
  console.log(burgerContext);
  let content = [];
  const item = Object.entries(burgerContext.burger.ingredients);
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

// const mapStateToProps = (state) => {
//   return { ingredients: state.burgerReducer.ingredients };
// };

export default Burger;
