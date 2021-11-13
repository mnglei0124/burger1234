import React from "react";

import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Орц: Гахайн мах : {props.order.ingredients.Bacon}, Салад :{" "}
        {props.order.ingredients.Salad}, Үхрийн мах :{" "}
        {props.order.ingredients.Meat}, Бяслаг :{" "}
        {props.order.ingredients.Cheese}
      </p>
      <p>
        Хаяг: {props.order.location.name}, {props.order.location.street},{" "}
        {props.order.location.city}
      </p>
      <p>
        Үнийн дүн: <strong>{props.order.price}₮</strong>
      </p>
    </div>
  );
};

export default Order;
