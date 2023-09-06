import { actionTypesFeeds } from "../../constants/PostTypes";

const initialState = {
  data: {},
  error: "",
  loading: false,
};

export const fetchFeedsReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesFeeds.FETCH_FEEDS_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesFeeds.FETCH_FEEDS_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesFeeds.FETCH_FEEDS_ERROR:
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
