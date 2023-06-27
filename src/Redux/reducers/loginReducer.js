import { actionTypesLogin } from "../constants/actionTypes";

const initialState = {
  user: {},
  error: "",
  loading: false,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypesLogin.USER_LOGIN_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
      };

    case actionTypesLogin.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: "",
      };

    case actionTypesLogin.USER_LOGIN_ERROR:
      return {
        ...state,
        user: "",
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
