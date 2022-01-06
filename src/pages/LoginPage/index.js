import React, { useState } from "react";

import Button from "../../components/general/Button";
import css from "./style.module.css";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const changeEmail = (e) => {
    setState({ ...state, email: e.target.value });
  };

  const changePassword = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const login = () => {
    alert(state.email + " " + state.password);
  };
  return (
    <div className={css.Login}>
      <input
        onChange={changeEmail}
        type="text"
        placeholder="Имайл хаяг"
      ></input>
      <input
        onChange={changePassword}
        type="password"
        placeholder="Нууц үг"
      ></input>
      <Button text="Нэвтрэх" btnType="Success" clicked={login} />
    </div>
  );
};
export default Login;
