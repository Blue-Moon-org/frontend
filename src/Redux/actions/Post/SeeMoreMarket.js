import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesSeeMoreMarket } from "../../constants/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const seeMoreMarket = (id) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  dispatch({
    type: actionTypesSeeMoreMarket.SEE_MORE_MARKET_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchGetRequestInit(`/api/see-more/${id}/`, `Bearer ${result.access}`)
    .then((res) => {
      dispatch({
        type: actionTypesSeeMoreMarket.SEE_MORE_MARKET_SUCCESS,
        payload: res,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesSeeMoreMarket.SEE_MORE_MARKET_ERROR,
        error: err,
      });
    });
};
