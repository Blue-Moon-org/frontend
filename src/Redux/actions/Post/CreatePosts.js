import { actionTypesCreatePost } from "../../constants/PostTypes";
import { fetchPostRequestInit } from "../../../utils/requestInit";
import { Alert, Platform } from "react-native";

export const createPost = (body, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  const form = new FormData();
  form.append("images", {
    name: body.Images[1].image.fileName,
    type: "image/jpeg",
    uri:
      Platform.OS === "android"
        ? body.Images[1].image.uri
        : body.Images[1].image.uri.replace("file://", ""),
  });
  form.append("images", {
    name: body.Images[2].image.fileName,
    type: "image/jpeg",
    uri:
      Platform.OS === "android"
        ? body.Images[2].image.uri
        : body.Images[2].image.uri.replace("file://", ""),
  });
  form.append("images", {
    name: body.Images[3].image.fileName,
    type: "image/jpeg",
    uri:
      Platform.OS === "android"
        ? body.Images[3].image.uri
        : body.Images[3].image.uri.replace("file://", ""),
  });
  form.append("images", {
    name: body.Images[4].image.fileName,
    type: "image/jpeg",
    uri:
      Platform.OS === "android"
        ? body.Images[4].image.uri
        : body.Images[4].image.uri.replace("file://", ""),
  });
  form.append("title", body.title);
  form.append("category", body.category);
  form.append("body", body.caption);

  console.warn(body.Images[3].image);

  dispatch({
    type: actionTypesCreatePost.CREATE_POSTS_LOADING,
  });

  await fetchPostRequestInit(
    `/post/posts/`,
    form,
    "multipart/form-data",
    `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2NDQyNzI4LCJpYXQiOjE2OTM4NTA3MjgsImp0aSI6IjgwZGY3YjZhZmFmMzQ3MGM4YzgzZjE0N2RlZDkwODBmIiwidXNlcl9pZCI6IjYwYmVhYjZmLTkxNTYtNGQ3Mi1iOWNlLTAyMDYyZmRmM2FjZSJ9.1pP07B96mJ0hNXGQ1b082dOKUQ6hrocOm_1O-qjQZJA`
  )
    .then((res) => {
      Alert.alert("Photos Alert", "Post has been created successfully 😊", [
        {
          text: "Go Home",
          onPress: () => {
            navigate("BottomTabStack", {
              screen: "Home",
            });
          },
          style: "cancel",
        },
        {
          text: "Post more",
          onPress: () => {},
        },
      ]);
      dispatch({
        type: actionTypesCreatePost.CREATE_POSTS_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesCreatePost.CREATE_POSTS_ERROR,
        payload: err,
      });
    });
};
