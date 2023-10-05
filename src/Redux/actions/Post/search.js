import { fetchGetRequestInit } from "../../../utils/requestInit";
import {
  actionTypesPostSearch,
  actionTypesPeoleSearch,
  actionTypesProductSearch,
  actionTypesLatestSearch,
} from "../../constants/search";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const productSeatch = (text, page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  if (page === 1) {
    dispatch({
      type: actionTypesProductSearch.PRODUCT_SEARCH_LOADING,
    });
  } else {
    dispatch({
      type: actionTypesProductSearch.PRODUCT_SEARCH_MORE_LOADING,
    });
  }

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchGetRequestInit(
    `/search/products/?search=${text}`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      // console.warn(res);
      dispatch({
        type: actionTypesProductSearch.PRODUCT_SEARCH_SUCCESS,
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
            type: actionTypesProductSearch.PRODUCT_SEARCH_ERROR,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesProductSearch.PRODUCT_SEARCH_MORE_ERROR,
            error: err,
          });
        }
      }
    });
};

export const latestSeatch = (text, page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  if (page === 1) {
    dispatch({
      type: actionTypesLatestSearch.LATEST_SEARCH_LOADING,
    });
  } else {
    dispatch({
      type: actionTypesLatestSearch.LATEST_SEARCH_MORE_LOADING,
    });
  }

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchGetRequestInit(
    `/search/latest/?search=${text}`, //  /search/latest/?search=tile
    `Bearer ${result.access}`
  )
    .then((res) => {
      // console.warn(res);
      dispatch({
        type: actionTypesLatestSearch.LATEST_SEARCH_SUCCESS,
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
            type: actionTypesLatestSearch.LATEST_SEARCH_ERROR,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesLatestSearch.LATEST_SEARCH_MORE_ERROR,
            error: err,
          });
        }
      }
    });
};
export const peopleSearch = (text, page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  if (page === 1) {
    dispatch({
      type: actionTypesPeoleSearch.PEOPLE_SEARCH_LOADING,
    });
  } else {
    dispatch({
      type: actionTypesPeoleSearch.PEOPLE_SEARCH_MORE_LOADING,
    });
  }

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchGetRequestInit(
    `/search/users/?search=${text}`, //  /search/users/?search=tile
    `Bearer ${result.access}`
  )
    .then((res) => {
      // console.warn(res);
      dispatch({
        type: actionTypesPeoleSearch.PEOPLE_SEARCH_SUCCESS,
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
            type: actionTypesPeoleSearch.PEOPLE_SEARCH_ERROR,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesPeoleSearch.PEOPLE_SEARCH_MORE_ERROR,
            error: err,
          });
        }
      }
    });
};
export const postSearch = (text, page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  if (page === 1) {
    dispatch({
      type: actionTypesPostSearch.POST_SEARCH_LOADING,
    });
  } else {
    dispatch({
      type: actionTypesPostSearch.POST_SEARCH_MORE_LOADING,
    });
  }

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchGetRequestInit(
    `/search/posts/?search=${text}`, //  /search/posts/?search=tile
    `Bearer ${result.access}`
  )
    .then((res) => {
      // console.warn(res);
      dispatch({
        type: actionTypesPostSearch.POST_SEARCH_SUCCESS,
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
            type: actionTypesPostSearch.POST_SEARCH_ERROR,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesPostSearch.POST_SEARCH_MORE_ERROR,
            error: err,
          });
        }
      }
    });
};
