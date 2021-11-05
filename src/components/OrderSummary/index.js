import React from "react";
import Button from "../general/Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд: </p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <h3>Захиалгын үнэ: {props.price}₮</h3>
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
