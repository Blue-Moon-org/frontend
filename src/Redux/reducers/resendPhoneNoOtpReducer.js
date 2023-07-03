import { actionTypesResendPhoneNoOtp } from "../constants/actionTypes";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const resendPhoneNoOtpReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypesResendPhoneNoOtp.RESENDPHONENO_OTP_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };

    case actionTypesResendPhoneNoOtp.RESENDPHONENO_OTP_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };

    case actionTypesResendPhoneNoOtp.RESENDPHONENO_OTP_ERROR:
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
