import { actionTypesComment } from "../../constants/PostTypes";

const initialState = {
  data: [],
  moreLoading: false,
  isListEnd: "",
  moreError: false,
  error: "",
  loading: false,
};

export const fetchCommentReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesComment.COMMENT_LIST_LOADING:
      return {
        ...state,
        data: [],
        moreLoading: false,
        isListEnd: "",
        moreError: false,
        error: "",
        loading: true,
      };

    case actionTypesComment.COMMENT_LIST_MORE_LOADING:
      return {
        ...state,
        moreLoading: true,
        isListEnd: "",
        moreError: false,
        error: "",
        loading: false,
      };

    case actionTypesComment.COMMENT_LIST_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...payload.response?.data.data.comments],
        moreLoading: false,
        isListEnd: isListEnd,
        moreError: false,
        error: "",
        loading: false,
      };

    case actionTypesComment.COMMENT_LIST_ERROR:
      return {
        ...state,
        data: [],
        moreLoading: false,
        isListEnd: "",
        moreError: false,
        error: error,
        loading: false,
      };

    case actionTypesComment.COMMENT_LIST_MORE_ERROR:
      return {
        ...state,
        moreLoading: false,
        isListEnd: "",
        moreError: false,
        error: error,
        loading: false,
      };

    default:
      return state;
  }
};
