const initialState = {
  orders: [
    [
      "-MsZOJ26N9Pd09QsEURE",
      {
        ingredients: { Bacon: 1, Cheese: 1, Meat: 1, Salad: 1 },
        location: { city: "ff", name: "ff", street: "ff" },
        price: 3700,
      },
    ],
  ],
  loading: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "LOAD_ACTIONS")
    return {
      ...state,
      loading: true,
    };
  return state;
};

export default reducer;
