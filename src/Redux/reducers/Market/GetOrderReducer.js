import { actionTypesGetOrders } from "../../constants/Market";

const initialState = {
  data: null,
  error: "",
  loading: false,
};

export const getOrderReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesGetOrders.GET_ORDERS_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesGetOrders.GET_ORDERS_SUCCESS:
      return {
        ...state,
        data: payload.response?.data?.data?.order_items,
        loading: false,
        error: "",
      };

    case actionTypesGetOrders.GET_ORDERS_ERROR:
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
