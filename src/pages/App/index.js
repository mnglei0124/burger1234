import React, { useState } from "react";
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

const App = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({ showSidebar: false });
  const toggleSideBar = () => {
    setState((prevState) => ({
      ...prevState,
      showSidebar: !prevState.showSidebar,
    }));
  };
  props.userId && navigate("/login");
  return (
    <div>
      <Toolbar toggleSideBar={toggleSideBar} />
      <SideBar showSidebar={state.showSidebar} toggleSideBar={toggleSideBar} />
      <main className={css.Content}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <strong>UserID: {props.userId}</strong>
        </div>

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

export default connect(mapStateToProps)(App);
