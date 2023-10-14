import { fetchPutRequestInit } from "../../../utils/requestInit";
import { actionTypesTrackorder } from "../../constants/Market";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TrackOrders = (id, orderType, navigate) => async (dispatch) => {
  // 4 endpoint,  content-type, token

  dispatch({
    type: actionTypesTrackorder.TRACK_ORDER_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchPutRequestInit(
    `/api/update_order_status/${id}/`,
    {
      order_status: orderType,
    },
    "application/json",
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
