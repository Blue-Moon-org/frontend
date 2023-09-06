import { actionTypesLogin } from "../constants/actionTypes";
import { fetchPostRequestInit } from "../../utils/requestInit";

export const userLogin = (body, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesLogin.USER_LOGIN_LOADING,
  });

  await fetchPostRequestInit(`/core/login/`, {
    email: body.email,
    password: body.password,
  })
    .then((res) => {
      console.warn(res);
      dispatch({ type: actionTypesLogin.USER_LOGIN_SUCCESS, payload: res });
      navigate("Stacks");
    })
    .catch((err) => {
      console.warn(err);

      dispatch({ type: actionTypesLogin.USER_LOGIN_ERROR, payload: err });
    });
};
