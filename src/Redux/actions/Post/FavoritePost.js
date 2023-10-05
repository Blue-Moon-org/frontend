import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchPostRequestInit } from "../../../utils/requestInit";
import { actionTypesAddFavorite } from "../../constants/PostTypes";

export const addFavourite = (id, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  dispatch({
    type: actionTypesAddFavorite.ADD_FAVOURITE_LOADING,
  });
  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  dispatch({
    type: actionTypesAddFavorite.ITEM_ADDED_TO_FAVOURITE_ALL,
    id: id,
  });
  dispatch({
    type: actionTypesAddFavorite.ITEM_ADDED_TO_FAVOURITE_MEN,
    id: id,
  });
  dispatch({
    type: actionTypesAddFavorite.ITEM_ADDED_TO_FAVOURITE_WOMEN,
    id: id,
  });
  dispatch({
    type: actionTypesAddFavorite.ITEM_ADDED_TO_FAVOURITE_NATIVE,
    id: id,
  });
  dispatch({
    type: actionTypesAddFavorite.ITEM_ADDED_TO_FAVOURITE_ANKARA,
    id: id,
  });
  await fetchPostRequestInit(
    `/post/favorite/${id}/`,
    "",
    "application/json",
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesAddFavorite.ADD_FAVOURITE_SUCCESS,
        payload: res,
        id: id,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesAddFavorite.ADD_FAVOURITE_ERROR,
        error: err,
        id: id,
      });
    });
};
