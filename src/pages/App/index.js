import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import ContactData from "../../components/ContactData";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import css from "./style.module.css";
import Logout from "../../components/Logout";
import * as actions from "../../redux/actions/loginActions";
import * as signupActions from "../../redux/actions/signupActions";

const App = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({ showSidebar: false });
  const toggleSideBar = () => {
    setState((prevState) => ({
      ...prevState,
      showSidebar: !prevState.showSidebar,
    }));
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expdireDate = new Date(localStorage.getItem("expdireDate"));
    //const refreshToken = localStorage.getItem("refreshToken");

    if (token) {
      if (expdireDate > new Date()) {
        props.autoLogin(token, userId);
        props.autoLogoutAfterMilliSec(
          expdireDate.getTime() - new Date().getTime()
        );
      } else {
        props.logout();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!props.userId) navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userId]);
  return (
    <div>
      <Toolbar toggleSideBar={toggleSideBar} />
      <SideBar showSidebar={state.showSidebar} toggleSideBar={toggleSideBar} />
      <main className={css.Content}>
        {props.userId ? (
          <Routes>
            <Route path="/logout" element={<Logout />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/ship" element={<ShippingPage />}>
              <Route path="/ship/contact" element={<ContactData />} />
            </Route>
            <Route path="/" element={<BurgerPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        )}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(signupActions.logout()),
    autoLogoutAfterMilliSec: () =>
      dispatch(signupActions.autoLogoutAfterMilliSec()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
