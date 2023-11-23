import {
  actionTypesFollowing,
  actionTypesFollowers,
} from "../constants/actionTypes";
import { fetchGetRequestInit } from "../../utils/requestInit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Followers = (id) => async (dispatch) => {
  dispatch({
    type: actionTypesFollowers.FOLLOWERS_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);
  await fetchGetRequestInit(
    `/core/followers/${id}`,
    "application/json",
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesFollowers.FOLLOWERS_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesFollowers.FOLLOWERS_ERROR,
        error: err,
      });
    });
};

export const Following = (id) => async (dispatch) => {
  dispatch({
    type: actionTypesFollowing.FOLLOWING_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);
  await fetchGetRequestInit(
    `/core/following/${id}`,
    "application/json",
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesFollowing.FOLLOWING_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesFollowing.FOLLOWING_ERROR,
        error: err,
      });
    });
};
