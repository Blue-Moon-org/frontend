import { actionTypesChatImage } from "../../constants/Chat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchPostRequestInit } from "../../../utils/requestInit";
import { Platform } from "react-native";

export const chatImage =
  (id, imageData, innerRef, userId, room_name, onUploadProgress) =>
  async (dispatch) => {
    // 4 endpoint, body, content-type, token, onUploadProgress

    dispatch({
      type: actionTypesChatImage.CHAT_IMAGE_LOADING,
    });
    const jsonValue = await AsyncStorage.getItem("userTokens");
    let result = JSON.parse(jsonValue);

    const form = new FormData();

    form.append("chatId", id);

    imageData.forEach((image) => {
      form.append("images", {
        name: Platform.OS === "android" ? image.uri : image.fileName,
        type: "image/jpeg",
        uri:
          Platform.OS === "android"
            ? image.uri
            : image.uri.replace("file://", ""),
      });
    });

    const sendMessage = (data) => {
      if (innerRef.current) {
        try {
          innerRef.current.send(JSON.stringify({ ...data }));
          // console.warn("Message sent successfully");
        } catch (error) {
          console.warn(error.message);
        }
      } else {
        console.warn("connection issue");
      }
    };

    const newPictureMessage = (data) => {
      sendMessage({
        command: "new_message",
        from: userId,
        msg_type: "image",
        chatId: id,
        message: data,
        room_name: room_name,
      });
    };

    await fetchPostRequestInit(
      `/chat/image-message/`,
      form,
      "multipart/form-data",
      `Bearer ${result.access}`,
      onUploadProgress
    ) //chatImage Endpoint
      .then((res) => {
        //   console.warn(res);
        dispatch({
          type: actionTypesChatImage.CHAT_IMAGE_SUCCESS,
          payload: res,
        });
        newPictureMessage(res.response?.data.data);
      })
      .catch((err) => {
        console.warn(err);
        dispatch({
          type: actionTypesChatImage.CHAT_IMAGE_ERROR,
          error: err,
        });
      });
  };
