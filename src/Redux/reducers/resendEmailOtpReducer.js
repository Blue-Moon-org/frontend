import { actionTypesResendEmailOtp } from "../constants/actionTypes";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const resendEmailOtpReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypesResendEmailOtp.RESENDEMAILOTP_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };

    case actionTypesResendEmailOtp.RESENDEMAILOTP_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };

    case actionTypesResendEmailOtp.RESENDEMAILOTP_ERROR:
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
