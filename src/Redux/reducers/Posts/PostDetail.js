import { actionTypesPostDetail } from "../../constants/PostTypes";

const initialState = {
  data: {},
  error: "",
  loading: false,
};

export const postDetailReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesPostDetail.POST_DETAIL_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesPostDetail.POST_DETAIL_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesPostDetail.POST_DETAIL_ERROR:
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
