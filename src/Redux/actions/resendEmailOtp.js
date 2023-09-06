import { actionTypesResendEmailOtp } from "../constants/actionTypes";
import { fetchPostRequestInit } from "../../utils/requestInit";

export const resendEmailOtp = (email, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesResendEmailOtp.RESENDEMAILOTP_LOADING,
  });

  await fetchPostRequestInit(`/core/resend-otp/email/`, {
    email: email,
  })
    .then((res) => {
      dispatch({
        type: actionTypesResendEmailOtp.RESENDEMAILOTP_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypesResendEmailOtp.RESENDEMAILOTP_ERROR,
        payload: err,
      });
    });
};
