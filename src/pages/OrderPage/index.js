import React from "react";
import axios from "../../axios-orders";
import Spinner from "../../components/general/Spinner";
import Order from "../../components/Order";

//import css from "./style.module.css";
class OrderPage extends React.Component {
  state = {
    orders: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("/orders.json")
      .then((response) => {
        this.setState({ orders: Object.entries(response.data).reverse() });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}

export default OrderPage;
