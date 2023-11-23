import { actionTypesFollowers } from "../constants/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const FollowersReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesFollowers.FOLLOWERS_LOADING:
      return {
        ...state,
        data: [],
        loading: true,
        error: "",
      };

    case actionTypesFollowers.FOLLOWERS_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesFollowers.FOLLOWERS_ERROR:
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
