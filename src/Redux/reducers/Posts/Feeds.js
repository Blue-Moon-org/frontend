import { actionTypesFeeds } from "../../constants/PostTypes";

const initialState = {
  data: [],
  error: "",
  loading: false,
  moreLoading: false,
  isListEnd: false,
  moreError: false,
};

export const fetchFeedsReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesFeeds.FETCH_FEEDS_LOADING:
      return {
        ...state,
        loading: true,
        moreLoading: false,
      };
    case actionTypesFeeds.FETCH_FEEDS_MORE_LOADING:
      return {
        ...state,
        loading: false,
        moreError: false,
        moreLoading: true,
      };

    case actionTypesFeeds.FETCH_FEEDS_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
        moreLoading: false,
        moreError: false,
      };

    case actionTypesFeeds.FETCH_FEEDS_ERROR:
      return {
        ...state,
        loading: false,
        error: error,
      };
    case actionTypesFeeds.FETCH_FEEDS_MORE_ERROR:
      return {
        ...state,
        loading: false,
        moreLoading: false,
        moreError: error,
      };

    case actionTypesFeeds.FETCH_FEEDS_ENDS:
      if (payload?.response?.data?.meta?.next === null) {
        return {
          ...state,
          loading: false,
          isListEnd: true,
          moreLoading: false,
        };
      }

    default:
      return state;
  }
};
