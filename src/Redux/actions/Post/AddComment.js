import { actionTypesAddComment } from "../../constants/PostTypes";
import { fetchPostRequestInit } from "../../../utils/requestInit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addComment = (body, id, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesAddComment.ADD_COMMENT_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchPostRequestInit(
    `/post/comments/${id}/`,
    {
      email: body,
    },
    "application/json",
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesAddComment.ADD_COMMENT_SUCCESS,
        payload: res,
      });
      //   navigate("Stacks");
    })
    .catch((err) => {
      console.warn(err);

      dispatch({ type: actionTypesAddComment.ADD_COMMENT_ERROR, payload: err });
    });
};
