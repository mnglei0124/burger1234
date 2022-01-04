import React, { useState } from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";

import Button from "../general/Button";
import css from "./style.module.css";
import axios from "../../axios-orders";
import Spinner from "../general/Spinner";

const ContactData = (props) => {
  const [address, setAddress] = useState({
    name: "",
    city: "",
    street: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const saveOrder = () => {
    const ingredients = (({ Salad, Cheese, Bacon, Meat }) => ({
      Salad,
      Cheese,
      Bacon,
      Meat,
    }))(props.ingredients);
    const order = {
      ingredients: ingredients,
      price: props.price,
      location: {
        ...address,
      },
    };
    console.log(props.ingredients);
    setLoading(true);
    axios
      .post("/orders.json", order)
      .then((response) => {
        alert("done!");
      })
      .finally(() => {
        setLoading(false);
        navigate("/orders", { replace: true });
      });
  };

  return (
    <div className={css.ContactData}>
      {loading ? (
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

const mapStateToProps = (state) => {
  return {
    price: state.totalPrice,
    ingredients: state.ingredients,
  };
};

export default connect(mapStateToProps)(ContactData);
