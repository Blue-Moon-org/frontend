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
      await AsyncStorage.setItem("user", JSON.stringify(value.user_data));
      await AsyncStorage.setItem("userTokens", JSON.stringify(value.tokens));
    } catch (e) {
      console.warn(e);
    }
  };

  await fetchPostRequestInit(`/core/login/`, {
    email: body.email,
    password: body.password,
  })
    .then((res) => {
      dispatch({
        type: actionTypesLogin.USER_LOGIN_SUCCESS,
        payload: res,
        user: res.response.data.data,
      });
      storedData(res.response.data.data);

      // navigate("Stacks");
    })
    .catch((err) => {
      console.warn(err);
      dispatch({ type: actionTypesLogin.USER_LOGIN_ERROR, payload: err });
    });
};
