import {
  actionTypesRegister,
  actionTypesEmailVerify,
  actionTypesPhoneNoVerify,
} from "../constants/actionTypes";
import { fetchGetRequestInit } from "../../utils/requestInit";

export const userRegistration = (body, navigate) => async (dispatch) => {
  // const { navigate } = useNavigation();
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesRegister.USER_REGISTER_LOADING,
  });

  await fetchGetRequestInit(`/register`, body)
    .then((res) => {
      dispatch({
        type: actionTypesRegister.USER_REGISTER_SUCCESS,
        payload: res,
      });
      // navigate("Login");
    })
    .catch((err) => {
      dispatch({ type: actionTypesRegister.USER_REGISTER_ERROR, payload: err });
    });
};

export const emailVerify = (state, navigate) => async (dispatch) => {
  // const { navigate } = useNavigation();
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesEmailVerify.USER_EMAILVERIFY_LOADING,
  });

  await fetchGetRequestInit(`/emailVerify`, state)
    .then((res) => {
      dispatch({
        type: actionTypesEmailVerify.USER_EMAILVERIFY_SUCCESS,
        payload: res,
      });
      // navigate("Login");
    })
    .catch((err) => {
      dispatch({
        type: actionTypesEmailVerify.USER_EMAILVERIFY_ERROR,
        payload: err,
      });
    });
};


export const phoneNoVerify = (state, navigate) => async (dispatch) => {
  // const { navigate } = useNavigation();
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesPhoneNoVerify.USER_PHONENOVERIFY_LOADING,
  });

  await fetchGetRequestInit(`/phoneNumberVerify`, state)
    .then((res) => {
      dispatch({
        type: actionTypesPhoneNoVerify.USER_PHONENOVERIFY_SUCCESS,
        payload: res,
      });
      // navigate("Login");
    })
    .catch((err) => {
      dispatch({
        type: actionTypesPhoneNoVerify.USER_PHONENOVERIFY_ERROR,
        payload: err,
      });
    });
};
