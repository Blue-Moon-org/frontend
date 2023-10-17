import { actionTypesAddReview, actionTypesReiew } from "../../constants/review";

const initialState = {
  dataReview: null,
  errorReview: "",
  loadingReview: false,

  dataAddReview: null,
  errorAddReview: "",
  loadingAddReview: false,
};

export const ReviewsReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesReiew.REVIEW_LOADING:
      return {
        ...state,
        dataReview: null,
        errorReview: "",
        loadingReview: true,
      };

    case actionTypesReiew.REVIEW_SUCCESS:
      return {
        ...state,
        dataReview: payload,
        errorReview: "",
        loadingReview: false,
      };

    case actionTypesReiew.REVIEW_ERROR:
      return {
        ...state,
        dataReview: null,
        errorReview: error,
        loadingReview: false,
      };

    default:
      return state;
  }
};

export const AddReviewsReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesAddReview.ADD_REVIEW_LOADING:
      return {
        ...state,
        dataAddReview: null,
        errorAddReview: "",
        loadingAddReview: true,
      };

    case actionTypesAddReview.ADD_REVIEW_SUCCESS:
      return {
        ...state,
        dataAddReview: payload,
        errorAddReview: "",
        loadingAddReview: false,
      };

    case actionTypesAddReview.ADD_REVIEW_ERROR:
      return {
        ...state,
        dataAddReview: null,
        errorAddReview: error,
        loadingAddReview: false,
      };

    default:
      return state;
  }
};
