import { actionTypesLogin, actionTypesLogout } from "../constants/actionTypes";
import { fetchPostRequestInit } from "../../utils/requestInit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userLogin = (body, navigate, replace) => async (dispatch) => {
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
      console.warn(res);
      dispatch({
        type: actionTypesLogin.USER_LOGIN_SUCCESS,
        // payload: res,
        // user: res.response.data.data,
      });
      // storedData(res.response.data.data).then(() => {
      //   // replace("Stacks");
      // });
    })
    .catch((err) => {
      console.warn(err);
      dispatch({ type: actionTypesLogin.USER_LOGIN_ERROR, payload: err });
    });
};

export const userLogout = (body, navigate, replace) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesLogout.USER_LOGOUT_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  const clearKeys = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys).then(() => {});
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  await fetchPostRequestInit(
    `/core/logout/`,
    {
      refresh_token: result.refresh,
    },
    "application/json",
    `Bearer ${result.access}`
  )
    .then((res) => {
      // replace("Auth");
      dispatch({
        type: actionTypesLogout.USER_LOGOUT_SUCCESS,
        payload: res,
        user: null,
      });
      clearKeys();
      // storedData(res.response.data.data);

      // navigate("Stacks");
    })
    .catch((err) => {
      console.warn(err);
      dispatch({ type: actionTypesLogout.USER_LOGOUT_ERROR, payload: err });
    });
};
