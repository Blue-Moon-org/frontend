import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesMarkets } from "../../constants/Market";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchMarkets = (type, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesMarkets.FETCH_MARKETS_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchGetRequestInit(
    `/api/products/user-products/`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesMarkets.FETCH_MARKETS_SUCCESS,
        payload: res,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesMarkets.FETCH_MARKETS_ERROR,
        error: err,
      });
    });
};
