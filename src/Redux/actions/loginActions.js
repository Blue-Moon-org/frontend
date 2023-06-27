import { actionTypesLogin } from "../constants/actionTypes";
import { fetchGetRequestInit } from "../../utils/requestInit";

export const userLogin = (body) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesLogin.USER_LOGIN_LOADING,
  });

  await fetchGetRequestInit(`/login`, body)
    .then((res) => {
      dispatch({ type: actionTypesLogin.USER_LOGIN_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: actionTypesLogin.USER_LOGIN_ERROR, payload: err });
    });
};
