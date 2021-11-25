import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Button from "../general/Button";
import css from "./style.module.css";
import axios from "../../axios-orders";
import Spinner from "../general/Spinner";

const ContactData = (props) => {
  const location = useLocation();
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
    const order = {
      ingredients: location.state.ingredients,
      price: location.state.price,
      location: {
        ...address,
      },
    };
    setLoading(true);
    axios
      .post("/orders.json", order)
      .then((response) => {
        // alert("nice!");
      })
      .finally(() => {
        setLoading(false);
        navigate("/orders", { replace: true });
      });
    console.log("continue done");
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

export default ContactData;
