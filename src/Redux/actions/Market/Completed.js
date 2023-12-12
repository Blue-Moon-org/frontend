import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesCompletedOrders } from "../../constants/Completed";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetCompletedOrders = (navigate) => async (dispatch) => {
  // 4 endpoint,  content-type, token

  dispatch({
    type: actionTypesCompletedOrders.COMPLETED_ORDERS_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  const Value = await AsyncStorage.getItem("user");
  let result = JSON.parse(jsonValue);
  let user = JSON.parse(Value);

  await fetchGetRequestInit(
    user.account_type === "Designer"
      ? `/api/orders/get_my_orders/?status=Delivered`
      : "/api/orders/get_orders/?status=Delivered", // /api/add-to-cart/product-title/
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesCompletedOrders.COMPLETED_ORDERS_SUCCESS,
        payload: res,
      });

      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesCompletedOrders.COMPLETED_ORDERS_ERROR,
        error: err,
      });
    });
};

//
//   ? "/api/orders/get_my_orders/"
//   : `/api/orders/get_orders/`, /
