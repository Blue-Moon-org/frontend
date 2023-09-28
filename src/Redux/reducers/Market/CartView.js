import { actionTypesCartView } from "../../constants/Market";

const initialState = {
  data: null,
  error: "",
  loading: false,
  message: "",
};

export const cartViewReducer = (
  state = initialState,
  { type, payload, error, message }
) => {
  switch (type) {
    case actionTypesCartView.CART_VIEW_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
        message: "",
      };

    case actionTypesCartView.CART_VIEW_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
        message: "",
      };

    case actionTypesCartView.CART_EMPTY_SUCCESS:
      return {
        ...state,
        data: null,
        loading: false,
        error: "",
        message: message,
      };
    case actionTypesCartView.CART_VIEW_ERROR:
      return {
        ...state,
        data: null,
        loading: false,
        error: error,
        message: "",
      };

    default:
      return state;
  }
};
