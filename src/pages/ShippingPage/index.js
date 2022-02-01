import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import BurgerContext from "../../context/BurgerContext";
import Burger from "../../components/Burger";
import Button from "../../components/general/Button";
import css from "./style.module.css";

const ShippingPage = (props) => {
  const navigate = useNavigate();
  const burgerContext = useContext(BurgerContext).burger;
  const showContactData = () => {
    navigate("/ship/contact", { replace: true });
  };

  return (
    <div className={css.ShippingPage}>
      <p style={{ fontSize: "24px" }}>
        <strong>Enjoy your order...</strong>
      </p>
      <p style={{ fontSize: "24px" }}>
        Total:
        <strong>
          {" "}
          {burgerContext.totalPrice ? burgerContext.totalPrice : 0}₮
        </strong>
      </p>
      <Burger />
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

export default ShippingPage;
