import { actionTypesLogin } from "../constants/actionTypes";

const initialState = {
  user: {},
  error: "",
  loading: false,
  user: null,
};

export const loginReducer = (state = initialState, { type, payload, user }) => {
  switch (type) {
    case actionTypesLogin.USER_LOGIN_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
        user: null,
      };

    case actionTypesLogin.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: "",
        user: user,
      };

    case actionTypesLogin.USER_LOGIN_ERROR:
      return {
        ...state,
        user: "",
        loading: false,
        error: payload,
        user: null,
      };

    default:
      return state;
  }
};

export const logoutReducer = (
  state = initialState,
  { type, payload, user }
) => {
  switch (type) {
    case actionTypesLogin.USER_LOGIN_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
        user: null,
      };

    case actionTypesLogin.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: null,
        loading: false,
        error: "",
        user: null,
      };

    case actionTypesLogin.USER_LOGIN_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: payload,
        user: null,
      };

    default:
      return state;
  }
};
