import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/general/Modal";
import OrderSummary from "../../components/OrderSummary";

const INGREDIENT_PRICES = { Salad: 150, Cheese: 250, Bacon: 1800, Meat: 1500 };
const INGREDIENT_NAMES = {
  Salad: "Салад",
  Cheese: "Бяслаг",
  Bacon: "Гахайн мах",
  Meat: "Үхрийн мах",
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 0,
      Cheese: 0,
      Bacon: 0,
      Meat: 0,
    },

    totalPrice: 0,
    purchasing: false,
    confirmOrder: false,
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  changeIngredient = (type, btnType) => {
    const newIngredients = { ...this.state.ingredients };

    if (btnType) {
      newIngredients[type]++;
      const newPrices = this.state.totalPrice + INGREDIENT_PRICES[type];
      this.setState({ purchasing: true, totalPrice: newPrices });
    } else if (newIngredients[type] > 0) {
      newIngredients[type]--;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({
        purchasing: newPrice > 0 ? true : false,
        totalPrice: newPrice,
      });
    }

    this.setState({ ingredients: newIngredients });
  };
  render() {
    const disabled = { ...this.state.ingredients };
    for (const key in disabled) {
      disabled[key] = disabled[key] <= 0;
    }

    return (
      <div>
        <Modal close={this.closeConfirmModal} show={this.state.confirmOrder}>
          <OrderSummary
            price={this.state.totalPrice}
            ingredientNames={INGREDIENT_NAMES}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientNames={INGREDIENT_NAMES}
          disabled={!this.state.purchasing}
          price={this.state.totalPrice}
          disabledIngredients={disabled}
          changeIngredient={this.changeIngredient}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
