import React from "react";
import Button from "../general/Button";
import css from "./style.module.css";

class ContactData extends React.Component {
  state = {
    dun: 0,
    addr: { name: null, city: null, street: null },
  };
  render() {
    return (
      <div className={css.ContactData}>
        <input type="text" name="name" placeholder="Name"></input>
        <input type="text" name="street" placeholder="Address"></input>
        <input type="text" name="city" placeholder="City"></input>
        <Button text="SUBMIT" btnType="Success" />
      </div>
    );
  }
}

export default ContactData;
