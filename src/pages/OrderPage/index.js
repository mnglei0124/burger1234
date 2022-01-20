import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../../components/general/Spinner";
import Order from "../../components/Order";
import * as actions from "../../redux/actions/orderActions";

//import css from "./style.module.css";
const OrderPage = (props) => {
  useEffect(() => {
    props.loadOrders(props.userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {props.loading ? (
        <Spinner />
      ) : (
        props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    userId: state.signupLoginReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (userId) => dispatch(actions.loadOrders(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
