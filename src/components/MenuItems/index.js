import React from "react";
import css from "./style.module.css";

const MenuItems = (props) => <li>{props.children.toUpperCase()}</li>;

export default MenuItems;
