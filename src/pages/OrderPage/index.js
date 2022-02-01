import React, { useEffect, useContext } from "react";
import Spinner from "../../components/general/Spinner";
import Order from "../../components/Order";
import OrderContext from "../../context/OrderContext";
//import css from "./style.module.css";
const OrderPage = (props) => {
  const orderContext = useContext(OrderContext);
  useEffect(() => {
    orderContext.loadOrders();
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

// const mapStateToProps = (state) => {
//   return {
//     orders: state.orderReducer.orders,
//     loading: state.orderReducer.loading,
//     userId: state.signupLoginReducer.userId,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadOrders: (userId) => dispatch(actions.loadOrders(userId)),
//   };
// };

export default OrderPage;
