import {
  actionTypesRegister,
  actionTypesEmailVerify,
  actionTypesPhoneNoVerify,
} from "../constants/actionTypes";

const initialState = {
  user: {},
  error: "",
  loading: false,
};

export const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypesRegister.USER_REGISTER_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
      };

    case actionTypesRegister.USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: "",
      };

    case actionTypesRegister.USER_REGISTER_ERROR:
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

export const emailVerifyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypesEmailVerify.USER_EMAILVERIFY_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
      };

    case actionTypesEmailVerify.USER_EMAILVERIFY_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: "",
      };

    case actionTypesEmailVerify.USER_EMAILVERIFY_ERROR:
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

export const phoneNoVerifyReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypesPhoneNoVerify.USER_PHONENOVERIFY_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
      };

    case actionTypesPhoneNoVerify.USER_PHONENOVERIFY_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: "",
      };

    case actionTypesPhoneNoVerify.USER_PHONENOVERIFY_ERROR:
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
