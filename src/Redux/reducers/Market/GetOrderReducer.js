import {
  actionTypesGetOrders,
  actionTypesTrackStatus,
} from "../../constants/Market";

const initialState = {
  data: [],
  error: "",
  loading: false,

  //
  statuData: null,
  statusError: "",
  statusLoading: false,
};

export const getOrderReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesGetOrders.GET_ORDERS_LOADING:
      return {
        ...state,
        data: [],
        loading: true,
        error: "",
      };

    case actionTypesGetOrders.GET_ORDERS_SUCCESS:
      return {
        ...state,
        data: payload?.response?.data?.data.order_items,
        loading: false,
        error: "",
      };

    case actionTypesGetOrders.GET_ORDERS_ERROR:
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

export const getOrderStatusReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesTrackStatus.TRACK_ORDER_STATUS_LOADING:
      return {
        ...state,
        statuData: [],
        statusError: "",
        statusLoading: true,
      };

    case actionTypesTrackStatus.TRACK_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        statuData: payload?.response?.data?.data,
        statusLoading: false,
        statusError: "",
      };

    case actionTypesTrackStatus.TRACK_ORDER_STATUS_ERROR:
      return {
        ...state,
        statuData: [],
        statusLoading: false,
        statusError: error,
      };

    default:
      return state;
  }
};
