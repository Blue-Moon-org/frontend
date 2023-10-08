import { fetchPostRequestInit } from "../../../utils/requestInit";
import { actionTypesCheckOut } from "../../constants/Market";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      payment_method: address,
      BillingAddress: billing,
      ShippingAddress: billing,
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
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesCheckOut.CHECK_OUT_ERROR,
        error: err,
      });
    });
};
