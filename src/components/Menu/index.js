import React, { Fragment } from "react";
import { connect } from "react-redux";

import MenuItem from "../MenuItems";
import css from "./style.module.css";

const Menu = (props) => (
  <ul className={css.Menu}>
    {props.userId ? (
      <Fragment>
        <MenuItem link="/">ШИНЭ ЗАХИАЛГА</MenuItem>
        <MenuItem link="/orders">ЗАХИАЛГУУД</MenuItem>
        <MenuItem link="/logout">ГАРАХ</MenuItem>
      </Fragment>
    ) : (
      <Fragment>
        <MenuItem link="/login">НЭВТРЭХ</MenuItem>
        <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
      </Fragment>
    )}
  </ul>
);

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

export default connect(mapStateToProps)(Menu);
