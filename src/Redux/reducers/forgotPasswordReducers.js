import {
  actionTypesForgotPassword,
  actionTypesForgotPasswordReset,
  actionTypesForgotPasswordVerification,
} from "../constants/actionTypes";

const initialState = {
  data: {},
  error: "",
  loading: false,
};

export const forgotPasswordReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypesForgotPassword.USER_FORGOTPASSWORD_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesForgotPassword.USER_FORGOTPASSWORD_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesForgotPassword.USER_FORGOTPASSWORD_ERROR:
      return {
        ...state,
        data: "",
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const forgotPasswordVerificationReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypesForgotPasswordVerification.USER_FORGOTPASSWORDVERIFICATION_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesForgotPasswordVerification.USER_FORGOTPASSWORDVERIFICATION_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesForgotPasswordVerification.USER_FORGOTPASSWORDVERIFICATION_ERROR:
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

export const forgotPasswordResetReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypesForgotPasswordReset.USER_FORGOTPASSWORDRESET_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesForgotPasswordReset.USER_FORGOTPASSWORDRESET_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesForgotPasswordReset.USER_FORGOTPASSWORDRESET_ERROR:
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
