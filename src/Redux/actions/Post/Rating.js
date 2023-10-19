import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesFetchRating } from "../../constants/Rating";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchRating = (id, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  dispatch({
    type: actionTypesFetchRating.FETCH_RATING_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchGetRequestInit(`/api/rating/${id}/`, `Bearer ${result.access}`)
    .then((res) => {
      dispatch({
        type: actionTypesFetchRating.FETCH_RATING_SUCCESS,
        payload: res,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesFetchRating.FETCH_RATING_ERROR,
        error: err,
      });
    });
};
