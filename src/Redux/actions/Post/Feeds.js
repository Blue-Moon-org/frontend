import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesFeeds } from "../../constants/PostTypes";

export const fetchFeeds = (navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesFeeds.FETCH_FEEDS_LOADING,
  });

  await fetchGetRequestInit(`/post/feed/`)
    .then((res) => {
      dispatch({
        type: actionTypesFeeds.FETCH_FEEDS_SUCCESS,
        payload: res,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesFeeds.FETCH_FEEDS_ERROR,
        error: err,
      });
    });
};
