import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesLike } from "../../constants/LikeTypes";


export const fetchLikes = (id, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesLike.LIKE_LOADING,
  });

  await fetchGetRequestInit(`/post/like/${id}/`)
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
