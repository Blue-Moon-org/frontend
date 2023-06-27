import { actionTypesRegister } from "../constants/actionTypes";
import { fetchGetRequestInit } from "../../utils/requestInit";

export const userRegistration = (body) => async (dispatch) => {
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
    })
    .catch((err) => {
      dispatch({ type: actionTypesRegister.USER_REGISTER_ERROR, payload: err });
    });
};
