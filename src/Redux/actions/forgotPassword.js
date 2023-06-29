import {
  actionTypesForgotPasswordVerification,
  actionTypesForgotPasswordReset,
  actionTypesForgotPassword,
} from "../constants/actionTypes";
import { fetchGetRequestInit } from "../../utils/requestInit";

export const forgotPassword = (state, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesForgotPassword.USER_FORGOTPASSWORD_LOADING,
  });

  await fetchGetRequestInit(`/forgotPassword`, state)
    .then((res) => {
      dispatch({
        type: actionTypesForgotPassword.USER_FORGOTPASSWORD_SUCCESS,
        payload: res,
      });
      navigate("ForgotPasswordVerification");
    })
    .catch((err) => {
      dispatch({
        type: actionTypesForgotPassword.USER_FORGOTPASSWORD_ERROR,
        payload: err,
      });
    });
};

export const forgotPasswordVerification =
  (state, navigate) => async (dispatch) => {
    // 4; endpoint, body, content-type, token
    dispatch({
      type: actionTypesForgotPasswordVerification.USER_FORGOTPASSWORDVERIFICATION_LOADING,
    });

    await fetchGetRequestInit(`/forgotPassword`, state)
      .then((res) => {
        dispatch({
          type: actionTypesForgotPasswordVerification.USER_FORGOTPASSWORDVERIFICATION_SUCCESS,
          payload: res,
        });
        navigate("ResetPassword");
      })
      .catch((err) => {
        dispatch({
          type: actionTypesForgotPasswordVerification.USER_FORGOTPASSWORDVERIFICATION_ERROR,
          payload: err,
        });
      });
  };

export const forgotPasswordReset = (state, navigate) => async (dispatch) => {
  // 4; endpoint, body, content-type, token
  dispatch({
    type: actionTypesForgotPasswordReset.USER_FORGOTPASSWORDRESET_LOADING,
  });

  await fetchGetRequestInit(`/forgotPassword`, state)
    .then((res) => {
      dispatch({
        type: actionTypesForgotPasswordReset.USER_FORGOTPASSWORDRESET_SUCCESS,
        payload: res,
      });
      navigate("Login");
    })
    .catch((err) => {
      dispatch({
        type: actionTypesForgotPasswordReset.USER_FORGOTPASSWORDRESET_ERROR,
        payload: err,
      });
    });
};
