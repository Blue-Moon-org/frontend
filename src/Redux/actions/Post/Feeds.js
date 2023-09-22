import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesFeeds } from "../../constants/PostTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchFeeds = (type, page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  dispatch({
    type: actionTypesFeeds.FETCH_FEEDS_CATEGORY,
    category: type,
  });
  if (page === 1) {
    dispatch({
      type: actionTypesFeeds.FETCH_FEEDS_LOADING,
    });
  } else {
    dispatch({
      type: actionTypesFeeds.FETCH_FEEDS_MORE_LOADING,
    });
  }
  // console.warn("wdqwdqw", endPointData.page);

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchGetRequestInit(
    `/post/feed/${type}/?page=${page}`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type:
          type === "All"
            ? actionTypesFeeds.FETCH_FEEDS_SUCCESS
            : type === "Men"
            ? actionTypesFeeds.FETCH_FEEDS_SUCCESS_MEN
            : type === "Women"
            ? actionTypesFeeds.FETCH_FEEDS_SUCCESS_WOMEN
            : type === "Native"
            ? actionTypesFeeds.FETCH_FEEDS_SUCCESS_NATIVE
            : type === "Ankara"
            ? actionTypesFeeds.FETCH_FEEDS_SUCCESS_ANKARA
            : null,
        payload: res,
        isListEnd: res?.response.data.meta.next,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      if (err) {
        if (page === 1) {
          dispatch({
            type: actionTypesFeeds.FETCH_FEEDS_ERROR,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesFeeds.FETCH_FEEDS_MORE_ERROR,
            error: err,
          });
        }
      }
    });
};
