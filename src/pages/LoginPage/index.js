import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../context/UserContext";
import Button from "../../components/general/Button";
import css from "./style.module.css";
import Spinner from "../../components/general/Spinner";

const Login = (props) => {
  const userContext = useContext(UserContext);
  const [state, setState] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const changeEmail = (e) => {
    const value = e.target.value;
    setState((formBefore) => ({
      email: value,
      password: formBefore.password,
    }));
  };

  const changePassword = (e) => {
    const value = e.target.value;
    setState({ ...state, password: value });
  };

  const login = () => {
    navigate("/orders");
    userContext.loginUser(state.email, state.password);
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
      {userContext.state.logginIn && <Spinner />}

      {userContext.state.error && (
        <div style={{ color: "red" }}>{userContext.state.error}</div>
      )}
      {/* <div className={css.Remember}>
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div> */}
      <Button text="Нэвтрэх" btnType="Success" clicked={login} />
    </div>
  );
};

export default Login;
