import React, { useState } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/general/Modal";
import OrderSummary from "../../components/OrderSummary";
import { useNavigate } from "react-router-dom";
//import axios from "../../axios-orders";

const INGREDIENT_PRICES = { Salad: 150, Cheese: 250, Bacon: 1800, Meat: 1500 };
const INGREDIENT_NAMES = {
  Salad: "Салад",
  Cheese: "Бяслаг",
  Bacon: "Гахайн мах",
  Meat: "Үхрийн мах",
};

const BurgerBuilder = () => {
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
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   location: {
    //     name: "Mnglei",
    //     city: "UB",
    //     street: "2nd 40k 10-16",
    //   },
    // };
    // this.setState({ loading_summay: true });
    // axios
    //   .post("/orders.json", order)
    //   .then((response) => {
    //     // alert("nice!");
    //   })
    //   .finally(() => this.setState({ loading_summay: false }));
    // console.log("continue done");
    const params = [];
    for (let name in ingredients) {
      params.push(name + "=" + ingredients[name]);
    }
    const query = params.join("&");
    console.log(query);
    navigate({
      pathname: "/ship",
      search: query,
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

export default BurgerBuilder;
