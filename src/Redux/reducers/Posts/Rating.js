import { actionTypesFetchRating } from "../../constants/Rating";

const initialState = {
  data: null,
  error: "",
  loading: false,
};

export const fetchRatingReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesFetchRating.FETCH_RATING_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesFetchRating.FETCH_RATING_SUCCESS:
      return {
        ...state,
        data: payload.response.data.rating,
        loading: false,
        error: "",
      };

    case actionTypesFetchRating.FETCH_RATING_ERROR:
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
