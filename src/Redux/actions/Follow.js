import { actionTypesFollow } from "../constants/actionTypes";
import { fetchPostRequestInit } from "../../utils/requestInit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Follow = (id) => async (dispatch) => {
  dispatch({
    type: actionTypesFollow.FOLOW_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchPostRequestInit(
    `/core/follow/user/`,
    {
      id: id,
    },
    "application/json",
    `Bearer ${result.access}`
  )
    .then((res) => {
        console.warn(res)
      dispatch({
        type: actionTypesFollow.FOLOW_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesFollow.FOLOW_ERROR,
        error: err,
      });
    });
};
