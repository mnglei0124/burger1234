import React, { useContext } from "react";
import BurgerContext from "../../context/BurgerContext";
import Button from "../general/Button";

const OrderSummary = (props) => {
  const burgerContext = useContext(BurgerContext).burger;
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд: </p>
      <ul>
        {Object.keys(burgerContext.ingredients).map((el, i) => {
          if (i === Object.keys(burgerContext.ingredients).length) return null;
          else
            return (
              <li key={el}>
                {burgerContext.ingredientNames[el]} :{" "}
                {burgerContext.ingredients[el]}
              </li>
            );
        })}
      </ul>
      <h3>Захиалгын үнэ: {burgerContext.totalPrice}₮</h3>
      <p>Үргэлжлүүлэх үү?</p>
      <Button clicked={props.onCancel} btnType="Danger" text="Татгалзах" />
      <Button
        clicked={props.onContinue}
        btnType="Success"
        text="Үргэлжлүүлэх"
      />
    </div>
  );
};

export default OrderSummary;
