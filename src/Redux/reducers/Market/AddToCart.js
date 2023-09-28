import { actionTypesAddToCart } from "../../constants/Market";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

export const addToCartReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesAddToCart.ADD_TO_CART_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesAddToCart.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesAddToCart.ADD_TO_CART_ERROR:
      return {
        ...state,
        data: null,
        loading: false,
        error: error,
      };

    default:
      return state;
  }
};
