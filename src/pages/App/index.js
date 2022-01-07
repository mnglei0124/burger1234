import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
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

class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={css.Content}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <strong>UserID: {this.props.userId}</strong>
          </div>
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/ship" element={<ShippingPage />}>
              <Route path="/ship/contact" element={<ContactData />} />
            </Route>
            <Route path="/" element={<BurgerPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

export default connect(mapStateToProps)(App);
