import { actionTypesRegister } from "../constants/actionTypes";

const initialState = {
  user: {},
  error: "",
  loading: false,
};

export const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypesRegister.USER_REGISTER_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
      };

    case actionTypesRegister.USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: "",
      };

    case actionTypesRegister.USER_REGISTER_ERROR:
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
