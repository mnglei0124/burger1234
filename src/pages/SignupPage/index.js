import React, { useState } from "react";

import Button from "../../components/general/Button";
import css from "./style.module.css";

const Signup = () => {
  const [state, setState] = useState({
    email: "",
    password0: "",
    password1: "",
  });

  const changeEmail = (e) => {
    setState({ ...state, email: e.target.value });
  };

  const changePassword0 = (e) => {
    setState({ ...state, password0: e.target.value });
  };
  const changePassword1 = (e) => {
    setState({ ...state, password1: e.target.value });
  };

  const signup = () => {
    console.log(state.email);

    console.log(state.password0);
  };

  return (
    <div className={css.Signup}>
      <h1>Бүртгэлийн Форм</h1>
      <div>Та өөрийн мэдээллээ оруулна уу</div>
      <input
        onChange={changeEmail}
        type="text"
        placeholder="Имайл хаяг"
      ></input>
      <input
        onChange={changePassword0}
        type="password"
        placeholder="Нууц үгээ оруулна уу"
      ></input>
      <input
        onChange={changePassword1}
        type="password"
        placeholder="Нууц үгээ давтана уу"
      ></input>
      <Button text="Бүртгүүлэх" btnType="Success" clicked={signup} />
    </div>
  );
};
export default Signup;
