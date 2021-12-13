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
};

const INGREDIENT_PRICES = { Salad: 150, Cheese: 250, Bacon: 1800, Meat: 1500 };

const reducer = (state = initialState, action) => {
  if (action.btnType) {
    if (!state.totalPrice) state.totalPrice = 0;
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.type]: state.ingredients[action.type] + 1,
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.type],
      purchasing: true,
    };
  } else {
    const newPrice = state.totalPrice - INGREDIENT_PRICES[action.type];
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.type]: state.ingredients[action.type] - 1,
      },
      totalPrice: newPrice,
      purchasing: newPrice > 0 ? true : false,
    };
  }
};

export default reducer;
