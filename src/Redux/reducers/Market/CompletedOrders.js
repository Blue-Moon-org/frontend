import { actionTypesCompletedOrders } from "../../constants/Completed";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

export const getCompletedOrderReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesCompletedOrders.COMPLETED_ORDERS_LOADING:
      return {
        ...state,
        data: [],
        loading: true,
        error: "",
      };

    case actionTypesCompletedOrders.COMPLETED_ORDERS_SUCCESS:
      return {
        ...state,
        data: payload?.response?.data?.data?.order_items,
        loading: false,
        error: "",
      };

    case actionTypesCompletedOrders.COMPLETED_ORDERS_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: error,
      };

    default:
      return state;
  }
};
