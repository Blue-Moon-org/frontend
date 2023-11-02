import { fetchGetRequestInit } from "../../../utils/requestInit";
import {
  actionTypesGetOrders,
  actionTypesTrackStatus,
} from "../../constants/Market";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetOrders = (navigate) => async (dispatch) => {
  // 4 endpoint,  content-type, token

  dispatch({
    type: actionTypesGetOrders.GET_ORDERS_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  const Value = await AsyncStorage.getItem("user");
  let result = JSON.parse(jsonValue);
  let user = JSON.parse(Value);

  await fetchGetRequestInit(
    user.account_type === "Designer"
      ? "/api/orders/get_my_orders/"
      : `/api/orders/get_orders/`, // /api/add-to-cart/product-title/
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesGetOrders.GET_ORDERS_SUCCESS,
        payload: res,
      });

      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesGetOrders.GET_ORDERS_ERROR,
        error: err,
      });
    });
};

export const CheckOrder = (T_N, navigate) => async (dispatch) => {
  // 4 endpoint,  content-type, token

  dispatch({
    type: actionTypesTrackStatus.TRACK_ORDER_STATUS_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchGetRequestInit(
    `/api/order-status/${T_N}/`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesTrackStatus.TRACK_ORDER_STATUS_SUCCESS,
        payload: res,
      });

      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesTrackStatus.TRACK_ORDER_STATUS_ERROR,
        error: err,
      });
    });
};
