import { actionTypesUpdate } from "../constants/Update";

const initialState = {
  user: {},
  error: "",
  loading: false,
};

export const userUpdateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypesUpdate.DETAILS_UPDATE_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
      };

    case actionTypesUpdate.DETAILS_UPDATE_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: "",
      };

    case actionTypesUpdate.DETAILS_UPDATE_ERROR:
      return {
        ...state,
        user: "",
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
