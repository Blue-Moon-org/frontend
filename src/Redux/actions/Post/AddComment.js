import { actionTypesAddComment } from "../../constants/PostTypes";
import { fetchPostRequestInit } from "../../../utils/requestInit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

export const addComment = (body, id, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesAddComment.ADD_COMMENT_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  console.warn(body, id);
  await fetchPostRequestInit(
    `/post/post-comments/${id}/`,
    {
      body: body,
      post: id,
    },
    "application/json",
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesAddComment.ADD_COMMENT_SUCCESS,
        payload: res,
      });

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Comment has been posted successfully",
      });
      //   navigate("Stacks");
    })
    .catch((err) => {
      console.warn(err);

      dispatch({ type: actionTypesAddComment.ADD_COMMENT_ERROR, payload: err });
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Comment has been posted successfully",
      });
    });
};
