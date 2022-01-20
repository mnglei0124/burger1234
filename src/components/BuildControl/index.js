import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerActions";
import css from "./style.module.css";

const BuildControl = (props) => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.ingredient}</div>
    <button
      disabled={props.disabledIngredients[props.type]}
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
const mapDispatchToProps = (dispatch) => {
  return {
    changeIngredient: (type, btnType) =>
      dispatch(actions.changeIngredient(type, btnType)),
  };
};
export default connect(null, mapDispatchToProps)(BuildControl);
