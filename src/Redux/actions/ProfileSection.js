import {
  actionTypesForSale,
  actionTypesSelfLiked,
  actionTypesSelfPosts,
} from "../constants/ProfileSection";
import { fetchGetRequestInit } from "../../utils/requestInit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchSelfPosts = (id, page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  if (page === 1) {
    dispatch({
      type: actionTypesSelfPosts.SELF_POST_LOADING,
    });
  } else {
    dispatch({
      type: actionTypesSelfPosts.SELF_POST_MORE_LOADING,
    });
  }

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchGetRequestInit(
    `/post/user-posts/${id}/?page=${page}`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesSelfPosts.SELF_POST_SUCCESS,
        payload: res,
        isListEnd: res?.response.data.meta.next,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      if (err) {
        if (page === 1) {
          dispatch({
            type: actionTypesSelfPosts.SELF_POST_ERROR,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesSelfPosts.SELF_POST_MORE_ERROR,
            error: err,
          });
        }
      }
    });
};

export const fetchForSale = (id, page, navigate) => async (dispatch) => {
  if (page === 1) {
    dispatch({
      type: actionTypesForSale.FOR_SALE_LOADING,
    });
  } else {
    dispatch({
      type: actionTypesForSale.FOR_SALE_MORE_LOADING,
    });
  }

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchGetRequestInit(
    `/api/for-sale/${id}/?page=${page}`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesForSale.FOR_SALE_SUCCESS,
        payload: res,
        isListEnd: res?.response.data.meta.next,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      if (err) {
        if (page === 1) {
          dispatch({
            type: actionTypesForSale.FOR_SALE_ERROR,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesForSale.FOR_SALE_MORE_ERROR,
            error: err,
          });
        }
      }
    });
};

export const fetchSelfLike = (id, page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  if (page === 1) {
    dispatch({
      type: actionTypesSelfLiked.SELF_LIKE_LOADING,
    });
  } else {
    dispatch({
      type: actionTypesSelfLiked.SELF_LIKE_MORE_LOADING,
    });
  }

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchGetRequestInit(
    `/post/mylike/${id}/?page=${page}`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesSelfLiked.SELF_LIKE_SUCCESS,
        payload: res,
        isListEnd: res?.response.data.meta.next,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      if (err) {
        if (page === 1) {
          dispatch({
            type: actionTypesSelfLiked.SELF_LIKE_MORE_ERROR,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesSelfLiked.SELF_LIKE_MORE_ERROR,
            error: err,
          });
        }
      }
    });
};
