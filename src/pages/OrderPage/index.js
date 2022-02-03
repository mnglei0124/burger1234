import React, { useEffect, useContext } from "react";
import Spinner from "../../components/general/Spinner";
import Order from "../../components/Order";
import OrderContext from "../../context/OrderContext";
import UserContext from "../../context/UserContext";
//import css from "./style.module.css";
const OrderPage = (props) => {
  const orderContext = useContext(OrderContext);
  const userContext = useContext(UserContext);
  useEffect(() => {
    orderContext.loadOrders(userContext.state.userId, userContext.state.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {orderContext.state.loading ? (
        <Spinner />
      ) : (
        orderContext.state.orders.map((el) => (
          <Order key={el[0]} order={el[1]} />
        ))
      )}
    </div>
  );
};

export default OrderPage;
