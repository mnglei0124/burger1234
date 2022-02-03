import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import MenuItem from "../MenuItems";
import css from "./style.module.css";

const Menu = (props) => {
  const userContext = useContext(UserContext);
  return (
    <ul className={css.Menu}>
      {userContext.state.userId ? (
        <>
          <MenuItem link="/">ШИНЭ ЗАХИАЛГА</MenuItem>
          <MenuItem link="/orders">ЗАХИАЛГУУД</MenuItem>
          <MenuItem link="/logout">ГАРАХ</MenuItem>
        </>
      ) : (
        <>
          <MenuItem link="/login">НЭВТРЭХ</MenuItem>
          <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
        </>
      )}
    </ul>
  );
};

export default Menu;
