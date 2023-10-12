import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesComment } from "../../constants/PostTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchComment = (page, postID, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  if (page === 1) {
    dispatch({
      type: actionTypesComment.COMMENT_LIST_LOADING,
    });
  } else {
    dispatch({
      type: actionTypesComment.COMMENT_LIST_MORE_LOADING,
    });
  }

  // console.warn("wdqwdqw", endPointData.page);

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchGetRequestInit(
    `/post/comments/${postID}/?page=${page}`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesComment.COMMENT_LIST_SUCCESS,
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
            type: actionTypesComment.COMMENT_LIST_ERROR,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesComment.COMMENT_LIST_MORE_ERROR,
            error: err,
          });
        }
      }
    });
};
