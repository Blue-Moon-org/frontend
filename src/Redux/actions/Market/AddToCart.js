import { fetchPostRequestInit } from "../../../utils/requestInit";
import { actionTypesAddToCart } from "../../constants/Market";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartView } from "./CartView";

export const AddToCart = (slug, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  dispatch({
    type: actionTypesAddToCart.ADD_TO_CART_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchPostRequestInit(
    `/api/add-to-cart/${slug}/`,
    {
      variation: [],
      quantity: 1,
    },
    "application/json",
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesAddToCart.ADD_TO_CART_SUCCESS,
        payload: res,
      });
      dispatch(CartView(navigate));
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesAddToCart.ADD_TO_CART_ERROR,
        error: err,
      });
    });
};
