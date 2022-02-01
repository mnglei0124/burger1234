import React, { useState } from "react";
import axios from "../axios-orders";

const BurgerContext = React.createContext();

const INGREDIENT_PRICES = { Salad: 150, Cheese: 250, Bacon: 1800, Meat: 1500 };
const initialState = {
  ingredients: { Salad: 0, Cheese: 0, Bacon: 0, Meat: 0 },
  totalPrice: 0,
  purchasing: false,
  ingredientNames: {
    Salad: "Салад",
    Cheese: "Бяслаг",
    Bacon: "Гахайн мах",
    Meat: "Үхрийн мах",
  },
  saving: false,
  finished: false,
  error: null,
};

export const BurgerStore = (props) => {
  const [burger, setBurger] = useState(initialState);
  const saveBurger = (newOrder) => {
    setBurger({ ...burger, saving: true });

    //const token = getState().signupLoginReducer.token;
    // /orders.json?auth=${token}

    axios
      .post(`/orders.json`, newOrder)
      .then((response) => {
        setBurger({ ...burger, saving: false, finished: true, error: null });
      })
      .catch((error) => {
        setBurger({ ...burger, saving: false, finished: true, error });
      });
  };

  const clearBurger = () => {
    setBurger(initialState);
  };

  const changeIngredient = (type, btnType) => {
    if (btnType) {
      if (!burger.totalPrice) burger.totalPrice = 0;
      setBurger({
        ...burger,
        ingredients: {
          ...burger.ingredients,
          [type]: burger.ingredients[type] + 1,
        },
        totalPrice: burger.totalPrice + INGREDIENT_PRICES[type],
        purchasing: true,
      });
    } else {
      const newPrice = burger.totalPrice - INGREDIENT_PRICES[type];
      setBurger({
        ...burger,
        ingredients: {
          ...burger.ingredients,
          [type]: burger.ingredients[type] - 1,
        },
        totalPrice: newPrice,
        purchasing: newPrice > 0 ? true : false,
      });
    }
  };

  return (
    <BurgerContext.Provider
      value={{ burger, changeIngredient, saveBurger, clearBurger }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};

export default BurgerContext;
