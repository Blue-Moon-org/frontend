import { actionTypesAddReview, actionTypesReiew } from "../../constants/review";

const initialState = {
  dataReview: null,
  errorReview: "",
  moreErrorReview: "",
  loadingReview: false,
  moreLoadingReview: false,
  reviewIsListEnd: "",

  dataAddReview: null,
  errorAddReview: "",
  loadingAddReview: false,
};

export const ReviewsReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesReiew.REVIEW_LOADING:
      return {
        ...state,
        dataReview: null,
        errorReview: "",
        moreErrorReview: "",
        loadingReview: true,
        moreLoadingReview: false,
        reviewIsListEnd: "",
      };

    case actionTypesReiew.REVIEW_MORE_LOADING:
      return {
        ...state,
        dataReview: null,
        errorReview: "",
        moreErrorReview: "",
        loadingReview: false,
        moreLoadingReview: true,
        reviewIsListEnd: "",
      };

    case actionTypesReiew.REVIEW_SUCCESS:
      return {
        ...state,
        dataReview: payload.response?.data?.data?.reviews,
        errorReview: "",
        moreErrorReview: "",
        loadingReview: false,
        moreLoadingReview: false,
        reviewIsListEnd: isListEnd,
      };

    case actionTypesReiew.REVIEW_ERROR:
      return {
        ...state,
        dataReview: null,
        errorReview: error,
        moreErrorReview: "",
        loadingReview: false,
        moreLoadingReview: false,
        reviewIsListEnd: "",
      };

    case actionTypesReiew.REVIEW_MORE_ERROR:
      return {
        ...state,
        dataReview: null,
        errorReview: "",
        moreErrorReview: error,
        loadingReview: false,
        moreLoadingReview: false,
        reviewIsListEnd: "",
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
