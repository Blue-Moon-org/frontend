import { actionTypesFeedback } from "../constants/Notification";
import { fetchPostRequestInit } from "../../utils/requestInit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

export const Feedback = (body, goBack) => async (dispatch) => {
  // const { navigate } = useNavigation();
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesFeedback.FEED_BACK_LOADING,
  });

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);
  // console.warn(result.access);

  await fetchPostRequestInit(
    `/notification/list/`,
    {
      title: body.title,
      text: body.message,
    },
    `Bearer ${result.access}`
  )
    .then((res) => {
      dispatch({
        type: actionTypesFeedback.FEED_BACK_SUCCESS,
        payload: res,
      });
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Your feedback has been sent successfully",
      });
      goBack();
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesFeedback.FEED_BACK_ERROR,
        error: err,
      });
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong, try again",
      });
    });
};
