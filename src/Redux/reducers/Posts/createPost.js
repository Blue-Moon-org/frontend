import { actionTypesCreatePost } from "../../constants/PostTypes";

const initialState = {
  user: {},
  error: "",
  loading: false,
};

export const createPostReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesCreatePost.CREATE_POSTS_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
      };

    case actionTypesCreatePost.CREATE_POSTS_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: "",
      };

    case actionTypesCreatePost.CREATE_POSTS_ERROR:
      return {
        ...state,
        user: "",
        loading: false,
        error: error,
      };

    default:
      return state;
  }
};
