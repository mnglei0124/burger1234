import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import * as actions from "../../redux/actions/loginActions";

import Button from "../../components/general/Button";
import css from "./style.module.css";
import Spinner from "../../components/general/Spinner";

const Login = (props) => {
  const [state, setState] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  useEffect(() => {
    props.userId && navigate("/");
  }, [props.userId]);

  const changeEmail = (e) => {
    setState({ ...state, email: e.target.value });
  };

  const changePassword = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const login = () => {
    props.login(state.email, state.password);
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
      {props.logginIn && <Spinner />}

      {props.firebaseError && (
        <div style={{ color: "red" }}>{props.firebaseError}</div>
      )}
      <Button text="Нэвтрэх" btnType="Success" clicked={login} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    logginIn: state.signupLoginReducer.logginIn,
    firebaseError: state.signupLoginReducer.firebaseError,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
