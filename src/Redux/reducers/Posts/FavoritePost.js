import { actionTypesAddFavorite } from "../../constants/PostTypes";

const initialState = {
  data: {},
  error: "",
  loading: false,
};

export const favoritePostReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesAddFavorite.ADD_FAVOURITE_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesAddFavorite.ADD_FAVOURITE_SUCCESS:
      return {
        ...state,
        data: payload.response?.data?.data,
        loading: false,
        error: "",
      };

    case actionTypesAddFavorite.ADD_FAVOURITE_ERROR:
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
