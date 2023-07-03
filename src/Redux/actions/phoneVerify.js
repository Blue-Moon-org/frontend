import { actionTypesPhoneNoVerify } from "../constants/actionTypes";
import { fetchGetRequestInit } from "../../utils/requestInit";

export const phoneVerify = (email) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesPhoneNoVerify.USER_PHONENOVERIFY_LOADING,
  });

  await fetchGetRequestInit(`/core/phone-verify/`, {
    email,
  })
    .then((res) => {
      dispatch({
        type: actionTypesPhoneNoVerify.USER_PHONENOVERIFY_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypesPhoneNoVerify.USER_PHONENOVERIFY_ERROR,
        payload: err,
      });
    });
};
