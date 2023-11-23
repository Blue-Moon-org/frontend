import { actionTypesFollowing } from "../constants/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const FollowingReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesFollowing.FOLLOWING_LOADING:
      return {
        ...state,
        data: [],
        loading: true,
        error: "",
      };

    case actionTypesFollowing.FOLLOWING_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesFollowing.FOLLOWING_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: error,
      };

    default:
      return state;
  }
};
