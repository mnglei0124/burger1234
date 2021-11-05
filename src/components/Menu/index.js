import React from "react";
import MenuItem from "../MenuItems";
import css from "./style.module.css";

const Menu = () => (
  <ul className={css.Menu}>
    <MenuItem>Бургер</MenuItem>
    <MenuItem>Төлбөр</MenuItem>
  </ul>
);

export default Menu;
