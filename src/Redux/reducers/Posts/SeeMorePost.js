import { actionTypesSeeMorePosts } from "../../constants/actionTypes";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

export const seeMorePostReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesSeeMorePosts.SEE_MORE_POSTS_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesSeeMorePosts.SEE_MORE_POSTS_SUCCESS:
      return {
        ...state,
        data: payload?.response?.data?.recommendations,
        loading: false,
        error: "",
      };

    case actionTypesSeeMorePosts.SEE_MORE_POSTS_ERROR:
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
