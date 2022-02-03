import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";

import Button from "../general/Button";
import css from "./style.module.css";
import Spinner from "../general/Spinner";
import BurgerContext from "../../context/BurgerContext";
import UserContext from "../../context/UserContext";

const ContactData = (props) => {
  const burgerContext = useContext(BurgerContext);
  const userContext = useContext(UserContext);
  const [address, setAddress] = useState({
    name: "",
    city: "",
    street: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (burgerContext.burger.finished && !burgerContext.burger.error) {
      navigate("/orders", { replace: true });
    }

    return () => {
      burgerContext.clearBurger();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [burgerContext.burger.finished]);

  const onChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const saveOrder = () => {
    const newOrder = {
      userId: userContext.state.userId,
      ingredients: burgerContext.burger.ingredients,
      price: burgerContext.burger.totalPrice,
      location: {
        ...address,
      },
    };
    burgerContext.saveBurger(newOrder, userContext.state.token);
  };

  return (
    <div className={css.ContactData}>
      {burgerContext.burger.totalPrice
        ? `Дүн: ${burgerContext.burger.totalPrice}₮`
        : null}
      {burgerContext.burger.error &&
        `Хадгалах явцад алдаа гарлаа: ${burgerContext.burger.error}`}
      {burgerContext.burger.saving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={onChange}
            type="text"
            name="name"
            placeholder="Name"
          ></input>
          <input
            onChange={onChange}
            type="text"
            name="street"
            placeholder="Address"
          ></input>
          <input
            onChange={onChange}
            type="text"
            name="city"
            placeholder="City"
          ></input>
          <Button text="SUBMIT" btnType="Success" clicked={saveOrder} />
        </div>
      )}
    </div>
  );
};

export default ContactData;
