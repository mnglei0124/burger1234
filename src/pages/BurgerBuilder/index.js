import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 0,
      Cheese: 0,
      Bacon: 0,
      Meat: 0,
    },
  };

  changeIngredient = (type, btnType) => {
    const newIngredients = { ...this.state.ingredients };

    if (btnType) newIngredients[type]++;
    else if (newIngredients[type] > 0) newIngredients[type]--;

    this.setState({ ingredients: newIngredients });
  };
  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls changeIngredient={this.changeIngredient} />
      </div>
    );
  }
}

export default BurgerBuilder;
