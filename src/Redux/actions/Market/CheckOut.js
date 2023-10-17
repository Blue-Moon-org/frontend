import { fetchPostRequestInit } from "../../../utils/requestInit";
import { actionTypesCheckOut } from "../../constants/Market";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

export const checkOut = (address, billing, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  dispatch({
    type: actionTypesCheckOut.CHECK_OUT_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchPostRequestInit(
    `/api/checkout/`,
    {
      payment_method: "pay_on_delivery",
      // BillingAddress: billing,
      // ShippingAddress: billing,
    },
    "application/json",
    `Bearer ${result.access}`
  )
    .then((res) => {
      console.warn(res);
      dispatch({
        type: actionTypesCheckOut.CHECK_OUT_SUCCESS,
        payload: res,
      });
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Order has been placed successfully",
      });
      navigate("BottomTabStack", {
        screen: "Market",
      });
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesCheckOut.CHECK_OUT_ERROR,
        error: err,
      });
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong, try again",
      });
    });
};
