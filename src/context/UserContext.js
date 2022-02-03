import React, { useState } from "react";
import axios from "../axios-orders";

const UserContext = React.createContext();

const initialState = {
  saving: false,
  logginIn: false,
  error: null,
  token: null,
  userId: null,
  isOut: false,
  expdireDate: null,
};

export const UserStore = (props) => {
  const [state, setState] = useState(initialState);

  const loginUserSurccess = (token, userId, expdireDate, refreshToken) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("expdireDate", expdireDate);
    localStorage.setItem("refreshToken", refreshToken);

    setState({
      ...state,
      loggingIn: false,
      error: null,

      token,
      userId,
      expdireDate,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expdireDate");
    localStorage.removeItem("refreshToken");

    setState({
      ...state,
      saving: false,
      logginIn: false,
      error: null,
      token: null,
      userId: null,
      isOut: true,
      expdireDate: null,
    });
  };
  const autoRenewTokenAfterMilliSec = (ms) => {
    axios
      .post(
        "https://securetoken.googleapis.com/v1/token?key=AIzaSyDPo-Nat60N-Ogk97QIIuWcPAyGn7SMnJE",
        {
          grant_type: "refresh_token",
          refresh_token: localStorage.getItem("refreshToken"),
        }
      )
      .then((result) => {
        const token = result.data.id_token;
        const userId = result.data.user_id;
        const expiresIn = result.data.expires_In;
        const expdireDate = new Date(new Date().getTime() + expiresIn * 1000);
        const refreshToken = result.data.refresh_token;

        loginUserSurccess(token, userId, expdireDate, refreshToken);
      })
      .catch((err) => {
        setState({
          ...state,
          error: err.message,
          token: null,
          expdireDate: null,
          userId: null,
        });
      });

    setTimeout(() => {
      autoRenewTokenAfterMilliSec(3600000);
    }, ms);
  };

  const loginUser = (email, password) => {
    setState({ ...state, logginIn: true });

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPo-Nat60N-Ogk97QIIuWcPAyGn7SMnJE",
        data
      )
      .then((result) => {
        const token = result.data.idToken;
        const userId = result.data.localId;
        const expiresIn = result.data.expiresIn;
        const expdireDate = new Date(new Date().getTime() + expiresIn * 1000);
        const refreshToken = result.data.refreshToken;

        loginUserSurccess(token, userId, expdireDate, refreshToken);

        //dispatch(actions.autoLogoutAfterMilliSec(expiresIn * 1000));
      })
      .catch((err) => {
        setState({
          ...state,
          error: err.message,
          token: null,
          expdireDate: null,
          userId: null,
        });
      });
  };

  const signupUser = (email, password) => {
    setState({ ...state, saving: true });

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPo-Nat60N-Ogk97QIIuWcPAyGn7SMnJE",
        data
      )
      .then((result) => {
        const token = result.data.idToken;
        const userId = result.data.localId;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);

        setState({
          ...state,
          saving: false,
          token,
          userId,
          error: null,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          saving: false,
          error: err.message,
          token: null,
          userId: null,
        });
      });
  };

  return (
    <UserContext.Provider
      value={{
        state,
        signupUser,
        loginUser,
        logout,
        loginUserSurccess,
        autoRenewTokenAfterMilliSec,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
