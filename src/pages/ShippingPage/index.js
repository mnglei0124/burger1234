import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Burger from "../../components/Burger";
import Button from "../../components/general/Button";
import ContactData from "../../components/ContactData";
import css from "./style.module.css";

export const ShippingPage = () => {
  const [ingredients, setIngredients] = useState({
    Salad: 1,
    Cheese: 1,
    Bacon: 1,
    Meat: 1,
  });
  const [price, setPrice] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const load = () => {
    const query = new URLSearchParams(location.search);

    const ingredients = {};
    let price_t = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") price_t = param[1];
      else ingredients[param[0]] = param[1];
    }
    setPrice(price_t);
    setIngredients(ingredients);
  };
  useEffect(() => load(), []);

  const showContactData = () => {
    navigate("/ship/contact", { replace: true });
  };

  return (
    <div className={css.ShippingPage}>
      <p style={{ fontSize: "24px" }}>
        <strong>Enjoy your order...</strong>
      </p>
      <p>
        <strong>{price}</strong>
      </p>
      <Burger ingredients={ingredients} />
      <Button
        clicked={() => navigate(-1)}
        btnType="Danger"
        text="ЗАХИАЛГЫГ ЦУЦЛАХ"
      />
      <Button
        clicked={showContactData}
        btnType="Success"
        text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
      />
      <Outlet />
    </div>
  );
};
