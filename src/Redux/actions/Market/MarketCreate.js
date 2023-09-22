import { actionTypesCreatePost } from "../../constants/PostTypes";
import { fetchPostRequestInit } from "../../../utils/requestInit";
import { Alert, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  dispatch({
    type: actionTypesCreatePost.CREATE_POSTS_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchPostRequestInit(
    `/post/posts/`,
    form,
    "multipart/form-data",
    `Bearer ${result.access}`
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
