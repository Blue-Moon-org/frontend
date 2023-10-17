import { fetchPostRequestInit } from "../../../utils/requestInit";
import {
  actionTypesLike,
  actionTypeCommentLike,
} from "../../constants/LikeTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchLikes = (id, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  dispatch({
    type: actionTypesLike.LIKE_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchPostRequestInit(
    `/post/like/${id}/`,
    "",
    "application/json",
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesLike.LIKE_SUCCESS,
        payload: res,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesLike.LIKE_ERROR,
        error: err,
      });
    });
};

export const fetchCommentLikes = (id, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  dispatch({
    type: actionTypeCommentLike.COMMENT_LIKE_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchPostRequestInit(
    `/post/like-comment/${id}/`,
    "",
    "application/json",
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypeCommentLike.COMMENT_LIKE_SUCCESS,
        payload: res,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypeCommentLike.COMMENT_LIKE_ERROR,
        error: err,
      });
    });
};
