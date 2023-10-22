import {
  actionTypesPhoneNoVerify,
  actionTypesVerifyPhone,
} from "../constants/actionTypes";

const initialState = {
  data: null,
  error: null,
  loading: false,

  dataVerifyPhone: null,
  errorVerifyPhone: null,
  loadingVerifyPhone: false,
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

export const verifyPhoneReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypesVerifyPhone.USER_VERIFY_PHONE_LOADING:
      return {
        ...state,
        dataVerifyPhone: null,
        errorVerifyPhone: null,
        loadingVerifyPhone: true,
      };

    case actionTypesVerifyPhone.USER_VERIFY_PHONE_SUCCESS:
      return {
        ...state,
        dataVerifyPhone: payload,
        errorVerifyPhone: null,
        loadingVerifyPhone: false,
      };

    case actionTypesVerifyPhone.USER_VERIFY_PHONE_ERROR:
      return {
        ...state,
        dataVerifyPhone: null,
        errorVerifyPhone: payload,
        loadingVerifyPhone: false,
      };

    default:
      return state;
  }
};
