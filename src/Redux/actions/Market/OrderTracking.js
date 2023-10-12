import { fetchPostRequestInit } from "../../../utils/requestInit";
import { actionTypesTrackorder } from "../../constants/Market";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const trackOrders = (id, orderType, navigate) => async (dispatch) => {
  // 4 endpoint,  content-type, token

  dispatch({
    type: actionTypesTrackorder.TRACK_ORDER_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchPostRequestInit(
    `/api/update_order_status/${id}/`,
    "application/json",
    {
      order_status: orderType,
    },
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesTrackorder.TRACK_ORDER_SUCCESS,
        payload: res,
      });

      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesTrackorder.TRACK_ORDER_ERROR,
        error: err,
      });
    });
};
