import { actionTypesSeeMoreMarket } from "../../constants/actionTypes";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

export const seeMoreMarketReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesSeeMoreMarket.SEE_MORE_MARKET_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesSeeMoreMarket.SEE_MORE_MARKET_SUCCESS:
      return {
        ...state,
        data: payload?.response?.data?.recommendations,
        loading: false,
        error: "",
      };

    case actionTypesSeeMoreMarket.SEE_MORE_MARKET_ERROR:
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
