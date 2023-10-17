import { actionTypesLike } from "../../constants/LikeTypes";

const initialState = {
  data: {},
  error: "",
  loading: false,

  //comment
  dataComment: {},
  errorComment: "",
  loadingComment: false,
};

export const fetchLikeReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesLike.LIKE_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesLike.LIKE_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesLike.LIKE_ERROR:
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
export const fetchCommentLikeReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesLike.LIKE_LOADING:
      return {
        ...state,
        dataComment: null,
        loadingComment: true,
        errorComment: "",
      };

    case actionTypesLike.LIKE_SUCCESS:
      return {
        ...state,
        dataComment: payload,
        loadingComment: false,
        errorComment: "",
      };

    case actionTypesLike.LIKE_ERROR:
      return {
        ...state,
        dataComment: null,
        loadingComment: false,
        errorComment: error,
      };

    default:
      return state;
  }
};
