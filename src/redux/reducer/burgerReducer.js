const initialState = {
  ingredients: { Salad: 0, Cheese: 0, Bacon: 0, Meat: 0 },
  totalPrice: 0,
};

const INGREDIENT_PRICES = { Salad: 150, Cheese: 250, Bacon: 1800, Meat: 1500 };

const reducer = (state = initialState, action) => {
  console.log("reducer ", action);

  if (action.btnType) {
    if (!state.totalPrice) state.totalPrice = 0;
    return {
      ingredients: {
        ...state.ingredients,
        [action.type]: state.ingredients[action.type] + 1,
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.type],
    };
  } else {
    console.log(state.totalPrice);
    return {
      ingredients: {
        ...state.ingredients,
        [action.type]: state.ingredients[action.type] - 1,
      },
      totalPrice: state.totalPrice - INGREDIENT_PRICES[action.type],
    };
  }
};

export default reducer;
