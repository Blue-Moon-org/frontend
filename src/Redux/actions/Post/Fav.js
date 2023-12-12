import { fetchGetRequestInit } from "../../../utils/requestInit";
import { actionTypesFavs } from "../../constants/Fav";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchFavs = (page, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  if (page === 1) {
    dispatch({
      type: actionTypesFavs.FAVS_LIST_LOADING,
    });
  } else {
    dispatch({
      type: actionTypesFavs.FAVS_LIST_MORE_LOADING,
    });
  }

  // console.warn("wdqwdqw", endPointData.page);

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchGetRequestInit(
    `/post/myfavorites/?page=${page}`,
    `Bearer ${result.access}`
  )
    .then((res) => {
      
      dispatch({
        type: actionTypesFavs.FAVS_LIST_SUCCESS,
        payload: res,
        isListEnd: res?.response.data.meta.next,
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      if (err) {
        if (page === 1) {
          dispatch({
            type: actionTypesFavs.FAVS_LIST_ERROR,
            error: err,
          });
        } else {
          dispatch({
            type: actionTypesFavs.FAVS_LIST_MORE_ERROR,
            error: err,
          });
        }
      }
    });
};
