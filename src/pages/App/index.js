import React, { Component } from "react";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import { Routes, Route } from "react-router-dom";

import css from "./style.module.css";
import { ShippingPage } from "../ShippingPage";

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
          <Routes>
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/ship" element={<ShippingPage />} />
            <Route path="/" element={<BurgerPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
