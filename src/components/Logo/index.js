import React from "react";
import logo from "../../assets/images/logo.png";
import css from "./style.module.css";

const Logo = (props) => {
  return (
    <div className={css.Logo}>
      <img src={logo} alt="pic" />
    </div>
  );
};

export default Logo;
