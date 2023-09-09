import { actionTypesAddComment } from "../../constants/PostTypes";

const initialState = {
  data: {},
  error: "",
  loading: false,
};

export const addCommentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypesAddComment.ADD_COMMENT_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesAddComment.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesAddComment.ADD_COMMENT_ERROR:
      return {
        ...state,
        data: null,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
