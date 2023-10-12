import {
  actionTypesPhoneNoCheck,
  actionTypesEmailCheck,
} from "../constants/actionTypes";
import { fetchGetRequestInit } from "../../utils/requestInit";

export const PhoneCheck = (phone) => async (dispatch) => {
  // const { navigate } = useNavigation();
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesPhoneNoCheck.USER_PHONENO_CHECK_LOADING,
  });

  await fetchGetRequestInit(`/core/checkphone/${phone}/`)
    .then((res) => {
      dispatch({
        type: actionTypesPhoneNoCheck.USER_PHONENO_CHECK_SUCCESS,
        status: res,
      });
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesPhoneNoCheck.USER_PHONENO_CHECK_ERROR,
        error: err,
      });
    });
};

export const EmailCheck = (email) => async (dispatch) => {
  // const { navigate } = useNavigation();
  // 4 endpoint, body, content-type, token
  console.warn(email);

  dispatch({
    type: actionTypesEmailCheck.USER_EMAIL_CHECK_LOADING,
  });

  await fetchGetRequestInit(`/core/checkemail/${email}/`)
    .then((res) => {
      console.warn(res);
      dispatch({
        type: actionTypesEmailCheck.USER_EMAIL_CHECK_SUCCESS,
        status: res,
      });
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesEmailCheck.USER_EMAIL_CHECK_ERROR,
        error: err,
      });
    });
};
