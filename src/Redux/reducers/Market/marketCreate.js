import { actionTypesCreateMarket } from "../../constants/Market";

const initialState = {
  data: {},
  error: "",
  loading: false,
};

export const createMarketReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesCreateMarket.CREATE_MARKET_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesCreateMarket.CREATE_MARKET_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesCreateMarket.CREATE_MARKET_ERROR:
      return {
        ...state,
        data: "",
        loading: false,
        error: error,
      };

    default:
      return state;
  }
};
