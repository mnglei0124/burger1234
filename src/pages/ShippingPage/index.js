import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Burger from "../../components/Burger";

import Button from "../../components/general/Button";
import css from "./style.module.css";

export const ShippingPage = () => {
  const [ingredients, setIngredients] = useState({
    Salad: 1,
    Cheese: 1,
    Bacon: 1,
    Meat: 1,
  });

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const query = new URLSearchParams(location.search);

    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = param[1];
    }

    setIngredients(ingredients);
  }, [location.search]);

  const showContactData = () => {
    navigate("contact");
  };

  return (
    <div className={css.ShippingPage}>
      <p style={{ fontSize: "24px" }}>
        <strong>Enjoy your order...</strong>
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
