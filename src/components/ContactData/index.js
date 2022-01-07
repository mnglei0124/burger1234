import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";

import Button from "../general/Button";
import css from "./style.module.css";
import Spinner from "../general/Spinner";
import * as actions from "../../redux/actions/orderActions";

const ContactData = (props) => {
  const [address, setAddress] = useState({
    name: "",
    city: "",
    street: "",
  });
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

    const newOrder = {
      userId: props.userId,
      ingredients: ingredients,
      price: props.price,
      location: {
        ...address,
      },
    };
    props.saveOrderAction(newOrder);
  };
  useEffect(() => {
    if (props.newOrderStatus.finished && !props.newOrderStatus.error)
      navigate("/orders", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveOrder]);
  return (
    <div className={css.ContactData}>
      {props.price ? `Дүн: ${props.price}₮` : null}
      {props.newOrderStatus.error &&
        `Хадгалах явцад алдаа гарлаа: ${props.newOrderStatus.error}`}
      {props.newOrderStatus.saving ? (
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
    price: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
