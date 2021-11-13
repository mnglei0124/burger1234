import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";

const MenuItems = (props) => (
  <li className={css.MenuItem}>
    <NavLink
      className={({ isActive }) => (isActive ? css.active : null)}
      to={props.link}
    >
      {props.children}
    </NavLink>
  </li>
);

export default MenuItems;
