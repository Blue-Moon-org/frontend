import { actionTypesAddComment } from "../../constants/PostTypes";
import { fetchPostRequestInit } from "../../../utils/requestInit";

export const addComment = (body, id, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesAddComment.ADD_COMMENT_LOADING,
  });

  await fetchPostRequestInit(
    `/post/comments/${id}/`,
    {
      email: body,
    },
    "application/json",
    `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2NDQyNzI4LCJpYXQiOjE2OTM4NTA3MjgsImp0aSI6IjgwZGY3YjZhZmFmMzQ3MGM4YzgzZjE0N2RlZDkwODBmIiwidXNlcl9pZCI6IjYwYmVhYjZmLTkxNTYtNGQ3Mi1iOWNlLTAyMDYyZmRmM2FjZSJ9.1pP07B96mJ0hNXGQ1b082dOKUQ6hrocOm_1O-qjQZJA`
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
