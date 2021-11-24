import React from "react";
import Button from "../general/Button";
import css from "./style.module.css";

class ContactData extends React.Component {
  state = {
    price: 0,
    name: null,
    city: null,
    street: null,
  };
  changeName = (e) => {
    this.setState({ name: e.target.value });
  };
  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };
  changeStreet = (e) => {
    this.setState({ street: e.target.value });
  };
  render() {
    return (
      <div className={css.ContactData}>
        {this.props.ingredients}
        <br />
        {this.props.price}

        <input
          onChange={this.changeName}
          type="text"
          name="name"
          placeholder="Name"
        ></input>
        <input
          onChange={this.changeCity}
          type="text"
          name="street"
          placeholder="Address"
        ></input>
        <input
          onChange={this.changeStreet}
          type="text"
          name="city"
          placeholder="City"
        ></input>
        <Button text="SUBMIT" btnType="Success" />
      </div>
    );
  }
}

export default ContactData;
