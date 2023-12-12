import { actionTypesFavs } from "../../constants/Fav";

const initialState = {
  data: [],
  moreLoading: false,
  isListEnd: "",
  moreError: false,
  error: "",
  loading: false,
};

export const fetchFavReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesFavs.FAVS_LIST_LOADING:
      return {
        ...state,
        data: [],
        moreLoading: false,
        isListEnd: "",
        moreError: false,
        error: "",
        loading: true,
      };

    case actionTypesFavs.FAVS_LIST_MORE_LOADING:
      return {
        ...state,
        moreLoading: true,
        isListEnd: "",
        moreError: false,
        error: "",
        loading: false,
      };

    case actionTypesFavs.FAVS_LIST_SUCCESS:
      return {
        ...state,
        data: payload.response?.data.data?.posts,
        moreLoading: false,
        isListEnd: isListEnd,
        moreError: false,
        error: "",
        loading: false,
      };

    case actionTypesFavs.FAVS_LIST_ERROR:
      return {
        ...state,
        data: [],
        moreLoading: false,
        isListEnd: "",
        moreError: false,
        error: error,
        loading: false,
      };

    case actionTypesFavs.FAVS_LIST_MORE_ERROR:
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
