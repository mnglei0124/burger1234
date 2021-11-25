import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Burger from "../../components/Burger";
import Button from "../../components/general/Button";
import css from "./style.module.css";

export const ShippingPage = () => {
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const load = () => {
    const query = new URLSearchParams(location.search);

    const ingredients = {};
    for (let param of query.entries()) {
      if (param[0] === "price") setPrice(param[1]);
      else ingredients[param[0]] = param[1];
    }
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
      <p style={{ fontSize: "24px" }}>
        Total:<strong> {price}₮</strong>
      </p>
      <Burger ingredients={ingredients} />
      <Button
        clicked={() => navigate(-1)}
        btnType="Danger"
        text="ЗАХИАЛГЫГ ЦУЦЛАХ"
      />
      <Link to="/ship/contact" state={{ price, ingredients }}>
        <Button
          clicked={showContactData}
          btnType="Success"
          text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
        />
      </Link>
      <Outlet />
    </div>
  );
};
