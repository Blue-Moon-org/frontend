import {
  actionTypesPhoneNoVerify,
  actionTypesVerifyPhone,
} from "../constants/actionTypes";
import { fetchPostRequestInit } from "../../utils/requestInit";

export const phoneVerify = (email, code, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesPhoneNoVerify.USER_PHONENOVERIFY_LOADING,
  });

  await fetchPostRequestInit(`/core/verify-phone/`, {
    email,
    otp: parseFloat(code),
  })
    .then((res) => {
      dispatch({
        type: actionTypesPhoneNoVerify.USER_PHONENOVERIFY_SUCCESS,
        payload: res,
      });
      navigate("Login");
    })
    .catch((err) => {
      dispatch({
        type: actionTypesPhoneNoVerify.USER_PHONENOVERIFY_ERROR,
        payload: err,
      });
    });
};

export const Verifyphone = (email) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesVerifyPhone.USER_VERIFY_PHONE_LOADING,
  });

  await fetchPostRequestInit(`/core/phone-verify/`, {
    email,
  })
    .then((res) => {
      dispatch({
        type: actionTypesVerifyPhone.USER_VERIFY_PHONE_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypesVerifyPhone.USER_VERIFY_PHONE_ERROR,
        payload: err,
      });
    });
};
