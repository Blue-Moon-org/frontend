import { actionTypesLogin } from "../constants/actionTypes";
import { fetchPostRequestInit } from "../../utils/requestInit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userLogin = (body, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesLogin.USER_LOGIN_LOADING,
  });

  const storedData = async (value) => {
    try {
      const userValue = JSON.stringify(value);
      await AsyncStorage.setItem("user", userValue);
    } catch (e) {
      console.warn(e);
      dispatch({ type: actionTypesLogin.USER_LOGIN_ERROR, payload: e });
    }
  };

  await fetchPostRequestInit(`/core/login/`, {
    email: body.email,
    password: body.password,
  })
    .then((res) => {
      console.warn(res);
      dispatch({ type: actionTypesLogin.USER_LOGIN_SUCCESS, payload: res });
      storedData({});

      // navigate("Stacks");
    })
    .catch((err) => {
      console.warn(err);
      dispatch({ type: actionTypesLogin.USER_LOGIN_ERROR, payload: err });
    });
};
