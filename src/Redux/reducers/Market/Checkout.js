import { actionTypesCheckOut } from "../../constants/Market";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

export const checkOutReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesCheckOut.CHECK_OUT_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesCheckOut.CHECK_OUT_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesCheckOut.CHECK_OUT_ERROR:
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
