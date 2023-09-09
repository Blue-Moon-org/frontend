import { fetchPostRequestInit } from "../../../utils/requestInit";
import { actionTypesAddFavorite } from "../../constants/PostTypes";

export const fetchLikes = (body, id, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  dispatch({
    type: actionTypesAddFavorite.ADD_COMMENT_LOADING,
  });

  await fetchPostRequestInit(`/post/favorite/${id}/`)
    .then((res) => {
      dispatch({
        type: actionTypesAddFavorite.ADD_COMMENT_SUCCESS,
        payload: res,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesAddFavorite.ADD_COMMENT_ERROR,
        error: err,
      });
    });
};
