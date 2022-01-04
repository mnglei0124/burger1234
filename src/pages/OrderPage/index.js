import React from "react";
import { connect } from "react-redux";
//import axios from "../../axios-orders";
import Spinner from "../../components/general/Spinner";
import Order from "../../components/Order";
import * as actions from "../../redux/actions/orderActions";

//import css from "./style.module.css";
class OrderPage extends React.Component {
  // state = {
  //   orders: [],
  //   loading: false,
  // };

  componentDidMount() {
    this.props.loadOrders();
    // this.setState({ loading: true });
    // axios
    //   .get("/orders.json")
    //   .then((response) => {
    //     this.setState({ orders: Object.entries(response.data).reverse() });
    //     console.log(this.state.orders);
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    //     this.setState({ loading: false });
    //   });
    // console.log(this.state.orders);
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          this.props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: () => dispatch(actions.loadOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
