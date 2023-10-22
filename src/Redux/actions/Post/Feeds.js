import { fetchGetRequestInit } from "../../../utils/requestInit";
import {
  actionTypesFeeds,
  actionTypesFeedsAnkara,
  actionTypesFeedsMen,
  actionTypesFeedsWomen,
  actionTypesFeedsNative,
} from "../../constants/PostTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchFeeds = (type, page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

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
  // console.warn(result.access);

  await fetchGetRequestInit(
    `/post/feed/${type}/?page=${page}`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesFeeds.FETCH_FEEDS_SUCCESS,
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

export const fetchFeedsMen = (type, page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  if (page === 1) {
    dispatch({
      type: actionTypesFeedsMen.FETCH_FEEDS_LOADING_MEN,
    });
  } else {
    dispatch({
      type: actionTypesFeedsMen.FETCH_FEEDS_MORE_LOADING_MEN,
    });
  }
  // console.warn("wdqwdqw", endPointData.page);
  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);
  await fetchGetRequestInit(
    `/post/feed/${type}/?page=${page}`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesFeedsMen.FETCH_FEEDS_SUCCESS_MEN,
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
            type: actionTypesFeedsMen.FETCH_FEEDS_ERROR_MEN,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesFeedsMen.FETCH_FEEDS_MORE_ERROR_MEN,
            error: err,
          });
        }
      }
    });
};

export const fetchFeedsWomen = (type, page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  if (page === 1) {
    dispatch({
      type: actionTypesFeedsWomen.FETCH_FEEDS_LOADING_WOMEN,
    });
  } else {
    dispatch({
      type: actionTypesFeedsWomen.FETCH_FEEDS_MORE_LOADING_WOMEN,
    });
  }

  // console.warn("wdqwdqw", endPointData.page);

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchGetRequestInit(
    `/post/feed/${type}/?page=${page}`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesFeedsWomen.FETCH_FEEDS_SUCCESS_WOMEN,
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
            type: actionTypesFeedsWomen.FETCH_FEEDS_ERROR_WOMEN,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesFeedsWomen.FETCH_FEEDS_MORE_ERROR_WOMEN,
            error: err,
          });
        }
      }
    });
};

export const fetchFeedsNative = (type, page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  if (page === 1) {
    dispatch({
      type: actionTypesFeedsNative.FETCH_FEEDS_LOADING_NATIVE,
    });
  } else {
    dispatch({
      type: actionTypesFeedsNative.FETCH_FEEDS_MORE_LOADING_NATIVE,
    });
  }
  // console.warn("wdqwdqw", endPointData.page);
  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchGetRequestInit(
    `/post/feed/${type}/?page=${page}`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesFeedsNative.FETCH_FEEDS_SUCCESS_NATIVE,
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
            type: actionTypesFeedsNative.FETCH_FEEDS_ERROR_NATIVE,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesFeedsNative.FETCH_FEEDS_MORE_ERROR_NATIVE,
            error: err,
          });
        }
      }
    });
};

export const fetchFeedsAnkara = (type, page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  if (page === 1) {
    dispatch({
      type: actionTypesFeedsAnkara.FETCH_FEEDS_LOADING_ANKARA,
    });
  } else {
    dispatch({
      type: actionTypesFeedsAnkara.FETCH_FEEDS_MORE_LOADING_ANKARA,
    });
  }

  // console.warn("wdqwdqw", endPointData.page);

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchGetRequestInit(
    `/post/feed/${type}/?page=${page}`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesFeedsAnkara.FETCH_FEEDS_ERROR_ANKARA,
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
            type: actionTypesFeedsAnkara.FETCH_FEEDS_ERROR_ANKARA,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesFeedsAnkara.FETCH_FEEDS_MORE_ERROR_ANKARA,
            error: err,
          });
        }
      }
    });
};
