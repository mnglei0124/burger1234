import React from "react";
import MenuItem from "../MenuItems";
import css from "./style.module.css";

const Menu = () => (
  <ul className={css.Menu}>
    <MenuItem link="/">ШИНЭ ЗАХИАЛГА</MenuItem>
    <MenuItem link="/orders">ЗАХИАЛГУУД</MenuItem>
    <MenuItem link="/login">НЭВТРЭХ</MenuItem>
    <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
  </ul>
);

export default Menu;
