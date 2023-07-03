import {
  actionTypesForgotPasswordVerification,
  actionTypesForgotPasswordReset,
  actionTypesForgotPassword,
} from "../constants/actionTypes";
import {
  fetchGetRequestInit,
  fetchPatchRequestInit,
} from "../../utils/requestInit";

export const forgotPassword = (state, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesForgotPassword.USER_FORGOTPASSWORD_LOADING,
  });

  await fetchGetRequestInit(`/core/forgot-password/`, {
    email: state.email,
  })
    .then((res) => {
      dispatch({
        type: actionTypesForgotPassword.USER_FORGOTPASSWORD_SUCCESS,
        payload: res,
      });
      navigate("ForgotPasswordVerification", state.email);
    })
    .catch((err) => {
      dispatch({
        type: actionTypesForgotPassword.USER_FORGOTPASSWORD_ERROR,
        payload: err,
      });
    });
};

export const forgotPasswordReset =
  (state, email, navigate) => async (dispatch) => {
    // 4; endpoint, body, content-type, token
    dispatch({
      type: actionTypesForgotPasswordReset.USER_FORGOTPASSWORDRESET_LOADING,
    });

    await fetchPatchRequestInit(`/core/set-new-password/`, {
      email: email,
      password: state.password,
    })
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
