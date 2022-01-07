const initialState = {
  saving: false,
  logginIn: false,
  firebaseError: null,
  token: null,
  userId: null,
  isOut: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true,
      };

    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.data.Idtoken,
        userId: action.data.localId,
      };

    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        firebaseError: action.error.response.data.error.message,
      };

    case "LOGIN_USER_START":
      return {
        ...state,
        logginIn: true,
      };

    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        logginIn: false,
        token: action.data.Idtoken,
        userId: action.data.localId,
      };

    case "LOGIN_USER_ERROR":
      return {
        ...state,
        logginIn: false,
        firebaseError: action.error.response.data.error.message,
      };

    case "LOGOUT":
      return {
        ...state,
        token: null,
        userId: null,
        isOut: true,
      };

    default:
      return state;
  }
};

export default reducer;
