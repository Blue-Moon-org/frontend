import {
  fetchGetRequestInit,
  fetchPostRequestInit,
} from "../../../utils/requestInit";
import { actionTypesAddReview, actionTypesReiew } from "../../constants/review";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetReviews = (page, id, navigate) => async (dispatch) => {
  // 4 endpoint,  content-type, token

  if (page === 1) {
    dispatch({
      type: actionTypesReiew.REVIEW_LOADING,
    });
  } else {
    dispatch({
      type: actionTypesReiew.REVIEW_MORE_LOADING,
    });
  }

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchGetRequestInit(
    `/api/reviews/${id}/`, // /api/add-to-cart/product-title/
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesReiew.REVIEW_SUCCESS,
        payload: res,
        isListEnd: res?.response.data.meta.next,
      });

      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      if (err) {
        if (page === 1) {
          dispatch({
            type: actionTypesReiew.REVIEW_ERROR,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesReiew.REVIEW_MORE_ERROR,
            error: err,
          });
        }
      }
    });
};

export const AddReview = (body, id, navigate) => async (dispatch) => {
  // 4 endpoint,  content-type, token

  dispatch({
    type: actionTypesAddReview.ADD_REVIEW_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchPostRequestInit(
    `/api/review/create/`,
    {
      product: id,
      rating: body.rating,
      review: body.review,
    },
    "application/json",
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesAddReview.ADD_REVIEW_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesAddReview.ADD_REVIEW_ERROR,
        error: err,
      });
    });
};
