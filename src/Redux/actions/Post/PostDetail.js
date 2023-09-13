import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesPostDetail } from "../../constants/PostTypes";

export const postDetail = (id, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesPostDetail.POST_DETAIL_LOADING,
  });

  await fetchGetRequestInit(
    `/post/posts/${id}/`,
    `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2NDQyNzI4LCJpYXQiOjE2OTM4NTA3MjgsImp0aSI6IjgwZGY3YjZhZmFmMzQ3MGM4YzgzZjE0N2RlZDkwODBmIiwidXNlcl9pZCI6IjYwYmVhYjZmLTkxNTYtNGQ3Mi1iOWNlLTAyMDYyZmRmM2FjZSJ9.1pP07B96mJ0hNXGQ1b082dOKUQ6hrocOm_1O-qjQZJA`
  )
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
