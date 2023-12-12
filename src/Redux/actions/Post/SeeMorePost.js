import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesSeeMorePosts } from "../../constants/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const seeMorePost = (id) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  dispatch({
    type: actionTypesSeeMorePosts.SEE_MORE_POSTS_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchGetRequestInit(`/post/see-more/${id}/`, `Bearer ${result.access}`)
    .then((res) => {
      dispatch({
        type: actionTypesSeeMorePosts.SEE_MORE_POSTS_SUCCESS,
        payload: res,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesSeeMorePosts.SEE_MORE_POSTS_ERROR,
        error: err,
      });
    });
};
