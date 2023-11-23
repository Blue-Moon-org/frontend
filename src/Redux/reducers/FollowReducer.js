import { actionTypesFollow } from "../constants/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const FollowReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesFollow.FOLOW_LOADING:
      return {
        ...state,
        data: [],
        loading: true,
        error: "",
      };

    case actionTypesFollow.FOLOW_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesFollow.FOLOW_ERROR:
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
