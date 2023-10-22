import { actionTypesCreateChat } from "../../constants/Chat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchPostRequestInit } from "../../../utils/requestInit";

export const createChat = (id, navigate) => async (dispatch) => {
  // 4 endpoint, body, content-type, token

  dispatch({
    type: actionTypesCreateChat.CREATE_CHAT_LOADING,
  });
  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchPostRequestInit(
    `/chat/create/`,
    {
      id: id,
    },
    "application/json",
    `Bearer ${result.access}`
  )
    .then((res) => {
      console.warn(res);
      dispatch({
        type: actionTypesCreateChat.CREATE_CHAT_SUCCESS,
        payload: res,
      });
      navigate("BottomTabStack", {
        screen: "Chat",
      });
      //   navigate("ForgotPasswordVerification",);
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesCreateChat.CREATE_CHAT_ERROR,
        error: err,
      });
    });
};
