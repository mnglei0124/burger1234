import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";

import Button from "../../components/general/Button";
import Spinner from "../../components/general/Spinner";
import UserContext from "../../context/UserContext";
import css from "./style.module.css";

const Signup = (props) => {
  const userContext = useContext(UserContext);
  const [state, setState] = useState({
    email: "",
    password0: "",
    password1: "",
    error: "",
  });
  const navigate = useNavigate();

  const signup = () => {
    if (state.password0 === state.password1) {
      userContext.signupUser(state.email, state.password0);
    } else alert("password no match");

    navigate("/");
  };

  return (
    <div className={css.Signup}>
      <h1>Бүртгэлийн Форм</h1>
      <div>Та өөрийн мэдээллээ оруулна уу</div>
      <input
        onChange={(e) => setState({ ...state, email: e.target.value })}
        type="text"
        placeholder="Имайл хаяг"
      ></input>
      <input
        onChange={(e) => setState({ ...state, password0: e.target.value })}
        type="password"
        placeholder="Нууц үгээ оруулна уу"
      ></input>
      <input
        onChange={(e) => setState({ ...state, password1: e.target.value })}
        type="password"
        placeholder="Нууц үгээ давтана уу"
      ></input>
      {state.error && <div style={{ color: "red" }}>{state.error}</div>}
      {userContext.state.error && (
        <div style={{ color: "red" }}>{userContext.state.error}</div>
      )}
      {userContext.state.saving ? (
        <Spinner />
      ) : (
        <Button text="Бүртгүүлэх" btnType="Success" clicked={signup} />
      )}
    </div>
  );
};

export default Signup;
