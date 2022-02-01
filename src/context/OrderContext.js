import React, { useState } from "react";
import axios from "../axios-orders";

const OrderContext = React.createContext();

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export const OrderStore = (props) => {
  const [state, setState] = useState(initialState);

  const loadOrders = () => {
    setState({ ...state, loading: true });

    //const token = getState().signupLoginReducer.token;
    // ?&auth=${token}&orderBy="userId"&equalTo="${userId}

    axios
      .get(`orders.json`)
      .then((response) => {
        const loadedOrders = Object.entries(response.data).reverse();
        setState({ ...state, orders: loadedOrders, loading: false });
      })
      .catch((error) => setState({ ...state, error }));
  };

  return (
    <OrderContext.Provider value={{ state, loadOrders }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
