import React, { useState } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/general/Modal";
import OrderSummary from "../../components/OrderSummary";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const INGREDIENT_PRICES = { Salad: 150, Cheese: 250, Bacon: 1800, Meat: 1500 };
const INGREDIENT_NAMES = {
  Salad: "Салад",
  Cheese: "Бяслаг",
  Bacon: "Гахайн мах",
  Meat: "Үхрийн мах",
};

const BurgerPage = (props) => {
  const [ingredients, changeIngredients] = useState({
    Salad: 0,
    Cheese: 0,
    Bacon: 0,
    Meat: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchasing, setPurchasing] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  let navigate = useNavigate();

  const continueOrder = () => {
    const params = [];
    for (let name in ingredients) {
      params.push(name + "=" + ingredients[name]);
    }

    params.push("price=" + totalPrice);

    console.log(params.join("&"));
    navigate({
      pathname: "/ship",
      search: params.join("&"),
    });
    closeConfirmModal();
  };

  const showConfirmModal = () => {
    setConfirmOrder(true);
  };

  const closeConfirmModal = () => {
    setConfirmOrder(false);
  };

  const changeIngredient = (type, btnType) => {
    const newIngredients = { ...ingredients };

    if (btnType) {
      newIngredients[type]++;
      const newPrice = totalPrice + INGREDIENT_PRICES[type];
      setPurchasing(true);
      setTotalPrice(newPrice);
    } else if (newIngredients[type] > 0) {
      newIngredients[type]--;
      const newPrice = totalPrice - INGREDIENT_PRICES[type];
      setPurchasing(newPrice > 0 ? true : false);
      setTotalPrice(newPrice);
    }

    changeIngredients(newIngredients);
  };

  const disabled = { ...ingredients };
  for (const key in disabled) {
    disabled[key] = disabled[key] <= 0;
  }
  console.log(props);
  return (
    <div>
      <Modal close={closeConfirmModal} show={confirmOrder}>
        <OrderSummary
          onCancel={closeConfirmModal}
          onContinue={continueOrder}
          price={totalPrice}
          ingredientNames={INGREDIENT_NAMES}
          ingredients={ingredients}
        />
      </Modal>

      <Burger ingredients={ingredients} />
      <BuildControls
        showConfirmModal={showConfirmModal}
        ingredientNames={INGREDIENT_NAMES}
        disabled={!purchasing}
        price={totalPrice}
        disabledIngredients={disabled}
        changeIngredient={changeIngredient}
      />
    </div>
  );
};

const first = (state) => {
  return {
    burgerIngredients: state.ingredients,
    price: state.totalPrice,
  };
};

const second = (dispatch) => {
  return {
    addIngredient: (ingredientName) => dispatch({ type: "ADD_INGREDIENT" }),
    removeIngredient: (ingredientName) =>
      dispatch({ type: "REMOVE_INGREDIENT" }),
  };
};

export default connect(first, second)(BurgerPage);
