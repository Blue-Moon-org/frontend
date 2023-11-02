import { actionTypesCreateMarket } from "../../constants/Market";
import { fetchPostRequestInit } from "../../../utils/requestInit";
import { Alert, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createMarket = (body, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  const form = new FormData();
  form.append("images", {
    name:
      Platform.OS === "android"
        ? body.Images[1].image.uri
        : body.Images[1].image.fileName,
    type: "image/jpeg",
    uri:
      Platform.OS === "android"
        ? body.Images[1].image.uri
        : body.Images[1].image.uri.replace("file://", ""),
  });
  form.append("images", {
    name:
      Platform.OS === "android"
        ? body.Images[2].image.uri
        : body.Images[2].image.fileName,
    type: "image/jpeg",
    uri:
      Platform.OS === "android"
        ? body.Images[2].image.uri
        : body.Images[2].image.uri.replace("file://", ""),
  });
  form.append("images", {
    name:
      Platform.OS === "android"
        ? body.Images[3].image.uri
        : body.Images[3].image.fileName,
    type: "image/jpeg",
    uri:
      Platform.OS === "android"
        ? body.Images[3].image.uri
        : body.Images[3].image.uri.replace("file://", ""),
  });
  form.append("images", {
    name:
      Platform.OS === "android"
        ? body.Images[4].image.uri
        : body.Images[4].image.fileName,
    type: "image/jpeg",
    uri:
      Platform.OS === "android"
        ? body.Images[4].image.uri
        : body.Images[4].image.uri.replace("file://", ""),
  });
  form.append("title", body.title);
  form.append("category", body.category);
  form.append("description", body.caption);
  form.append("price", body.price);
  form.append("discount_price", 0);
  form.append("stock", body.stock);
  form.append("label", "");

  dispatch({
    type: actionTypesCreateMarket.CREATE_MARKET_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchPostRequestInit(
    `/api/products/create/`,
    form,
    "multipart/form-data",
    `Bearer ${result.access}`
  )
    .then((res) => {
      Alert.alert("Photos Alert", "Post has been created successfully 😊", [
        {
          text: "Go Market",
          onPress: () => {
            navigate("BottomTabStack", {
              screen: "Market",
            });
          },
          style: "cancel",
        },
        {
          text: "Sell more",
          onPress: () => {},
        },
      ]);
      dispatch({
        type: actionTypesCreateMarket.CREATE_MARKET_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      console.warn(err);

      Alert.alert("Photos Alert", "Error occured", [
        {
          text: "Close",
          onPress: () => {},
        },
      ]);
      dispatch({
        type: actionTypesCreateMarket.CREATE_MARKET_ERROR,
        payload: err,
      });
    });
};
