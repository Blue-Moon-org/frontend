import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesMarkets } from "../../constants/Market";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchMarkets = (type, page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  dispatch({
    type: actionTypesMarkets.FETCH_MARKET_CATEGORY,
    category: type,
  });
  if (page === 1) {
    dispatch({
      type: actionTypesMarkets.FETCH_MARKET_LOADING,
    });
  } else {
    dispatch({
      type: actionTypesMarkets.FETCH_MARKET_MORE_LOADING,
    });
  }

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchGetRequestInit(
    `/api/productfeed/${type}/?page=${page}`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type:
          type === "All"
            ? actionTypesMarkets.FETCH_MARKET_SUCCESS
            : type === "Men"
            ? actionTypesMarkets.FETCH_MARKET_SUCCESS_MEN
            : type === "Women"
            ? actionTypesMarkets.FETCH_MARKET_SUCCESS_WOMEN
            : type === "Native"
            ? actionTypesMarkets.FETCH_MARKET_SUCCESS_NATIVE
            : type === "Ankara"
            ? actionTypesMarkets.FETCH_MARKET_SUCCESS_ANKARA
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
            type: actionTypesMarkets.FETCH_MARKET_ERROR,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesMarkets.FETCH_MARKET_MORE_ERROR,
            error: err,
          });
        }
      }
    });
};
