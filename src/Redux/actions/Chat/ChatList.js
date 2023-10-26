import { actionTypesChatList } from "../../constants/Chat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchGetRequestInit } from "../../../utils/requestInit";

export const chatList = (navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  dispatch({
    type: actionTypesChatList.CHAT_LIST_LOADING,
  });
  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchGetRequestInit(`/chat/`, `Bearer ${result.access}`)
    .then((res) => {
      //   console.warn(res);
      dispatch({
        type: actionTypesChatList.CHAT_LIST_SUCCESS,
        payload: res,
      });
      //   navigate("BottomTabStack", {
      //     screen: "Chat",
      //   });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesChatList.CHAT_LIST_ERROR,
        error: err,
      });
    });
};
