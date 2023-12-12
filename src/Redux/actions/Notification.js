import { actionTypesNotification } from "../constants/Notification";
import { fetchGetRequestInit } from "../../utils/requestInit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const notification = (navigate) => async (dispatch) => {
  // const { navigate } = useNavigation();
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesNotification.NOTIFICATION_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchGetRequestInit(`/notification/list/`, `Bearer ${result.access}`)
    .then((res) => {
      // console.warn(res);

      dispatch({
        type: actionTypesNotification.NOTIFICATION_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesNotification.NOTIFICATION_ERROR,
        error: err,
      });
    });
};
