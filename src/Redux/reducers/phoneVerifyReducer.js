import { actionTypesPhoneNoVerify } from "../constants/actionTypes";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const phoneNoVerifyReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypesPhoneNoVerify.USER_PHONENOVERIFY_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };

    case actionTypesPhoneNoVerify.USER_PHONENOVERIFY_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };

    case actionTypesPhoneNoVerify.USER_PHONENOVERIFY_ERROR:
      return {
        ...state,
        data: null,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
