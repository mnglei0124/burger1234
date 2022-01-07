import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import Button from "../../components/general/Button";
import Spinner from "../../components/general/Spinner";
import * as actions from "../../redux/actions/signupActions";
import css from "./style.module.css";

const Signup = (props) => {
  const [state, setState] = useState({
    email: "",
    password0: "",
    password1: "",
    error: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    props.userId && navigate("/");
  }, [props.userId]);

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
    if (state.password0 === state.password1) {
      props.signupUser(state.email, state.password0);
    } else alert("password no match");

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
      {state.error && <div style={{ color: "red" }}>{state.error}</div>}
      {props.firebaseError && (
        <div style={{ color: "red" }}>{props.firebaseError}</div>
      )}
      {props.saving ? (
        <Spinner />
      ) : (
        <Button text="Бүртгүүлэх" btnType="Success" clicked={signup} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.signupLoginReducer.saving,
    firebaseError: state.signupLoginReducer.firebaseError,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
