import React, { useState, useEffect, Suspense, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Toolbar from "../../components/Toolbar";
import SideBar from "../../components/SideBar";
import ContactData from "../../components/ContactData";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import css from "./style.module.css";
import Logout from "../../components/Logout";
import { BurgerStore } from "../../context/BurgerContext";
import { OrderStore } from "../../context/OrderContext";
import UserContext from "../../context/UserContext";

const BurgerPage = React.lazy(() => {
  return import("../BurgerPage");
});
const SignupPage = React.lazy(() => {
  return import("../SignupPage");
});
const OrderPage = React.lazy(() => {
  return import("../OrderPage");
});

const App = (props) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
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
    const refreshToken = localStorage.getItem("refreshToken");

    if (token) {
      if (expdireDate > new Date()) {
        userContext.loginUserSurccess(token, userId, expdireDate, refreshToken);
        userContext.autoRenewTokenAfterMilliSec(
          expdireDate.getTime() - new Date().getTime()
        );
      } else {
        userContext.autoRenewTokenAfterMilliSec(3600000);
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
        <Suspense fallback={<div>Wait a moment...</div>}>
          {userContext.state.userId ? (
            <Routes>
              <Route path="/logout" element={<Logout />} />
              <Route
                path="/orders"
                element={
                  <OrderStore>
                    <OrderPage />
                  </OrderStore>
                }
              />

              <Route
                path="/ship"
                element={
                  <BurgerStore>
                    <ShippingPage />
                  </BurgerStore>
                }
              >
                <Route path="/ship/contact" element={<ContactData />} />
              </Route>
              <Route
                path="/"
                element={
                  <BurgerStore>
                    <BurgerPage />
                  </BurgerStore>
                }
              />
            </Routes>
          ) : (
            <Routes>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          )}
        </Suspense>
      </main>
    </div>
  );
};

export default App;
