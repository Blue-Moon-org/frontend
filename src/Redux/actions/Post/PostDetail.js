import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesPostDetail } from "../../constants/PostTypes";

export const postDetail = (id, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesPostDetail.POST_DETAIL_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchGetRequestInit(`/post/posts/${id}/`, `Bearer ${result.access}`)
    .then((res) => {
      dispatch({
        type: actionTypesPostDetail.POST_DETAIL_SUCCESS,
        payload: res,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesPostDetail.POST_DETAIL_ERROR,
        error: err,
      });
    });
};
