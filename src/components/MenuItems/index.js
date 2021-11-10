import React from "react";
import css from "./style.module.css";

const MenuItems = (props) => (
  <li className={css.MenuItem}>
    <a className={props.active ? css.active : null} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default MenuItems;
