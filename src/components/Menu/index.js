import React from "react";
import MenuItem from "../MenuItems";
import css from "./style.module.css";

const Menu = () => (
  <ul className={css.Menu}>
    <MenuItem active link="/">
      ШИНЭ ЗАХИАЛГА
    </MenuItem>
    <MenuItem link="/orders">ЗАХИАЛГУУД</MenuItem>
  </ul>
);

export default Menu;
