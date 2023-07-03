import { actionTypesResendPhoneNoOtp } from "../constants/actionTypes";
import { fetchGetRequestInit } from "../../utils/requestInit";

export const resendPhoneOtp = (email, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesResendPhoneNoOtp.RESENDPHONENO_OTP_LOADING,
  });

  await fetchGetRequestInit(`/core/resend-otp/phone/`, email)
    .then((res) => {
      dispatch({
        type: actionTypesResendPhoneNoOtp.RESENDPHONENO_OTP_SUCCESS,
        payload: res,
      });
      // navigate("Home")
      console.warn(res, email);
    })
    .catch((err) => {
      dispatch({
        type: actionTypesResendPhoneNoOtp.RESENDPHONENO_OTP_ERROR,
        payload: err,
      });
      console.warn(err, email);
    });
};
