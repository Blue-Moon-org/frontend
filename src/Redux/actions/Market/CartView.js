import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesCartView } from "../../constants/Market";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartView = (navigate) => async (dispatch) => {
  // 4 endpoint,  content-type, token

  dispatch({
    type: actionTypesCartView.CART_VIEW_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchGetRequestInit(
    `/api/order-summary/`, // /api/add-to-cart/product-title/
    `Bearer ${result.access}`
  )
    .then((res) => {
      if (res?.response?.data?.message) {
        dispatch({
          type: actionTypesCartView.CART_VIEW_SUCCESS,
          message: res?.response.data.message,
        });
      } else {
        dispatch({
          type: actionTypesCartView.CART_VIEW_SUCCESS,
          payload: res?.response?.data?.data?.order_products,
        });
      }
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesCartView.CART_VIEW_ERROR,
        error: err,
      });
    });
};
