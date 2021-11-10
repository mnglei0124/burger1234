import React from "react";
import Shadow from "../general/Shadow";
import Logo from "../Logo";
import Menu from "../Menu";

import css from "./style.module.css";

const SideBar = (props) => {
  let classes = [css.SideBar, css.Close];
  if (props.showSidebar) classes = [css.SideBar, css.Open];
  return (
    <div>
      <Shadow onClick={props.toggleSideBar} show={props.showSidebar} />

      <div onClick={props.toggleSideBar} className={classes.join(" ")}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
