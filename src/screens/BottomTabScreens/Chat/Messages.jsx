import { FlatList, Platform, RefreshControl, View } from "react-native";
import React, { useCallback, useContext } from "react";
import { messagesData } from "./data";
import { scale } from "../../../utils/scale";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../constants/colorpallette";
import RenderMessages from "./RenderMessages";
import { useDispatch, useSelector } from "react-redux";
import { chatList } from "../../../Redux/actions/Chat/ChatList";
import { AuthContext } from "../../../Context";

export const Messages = ({ user, data }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.chatList);

  const {
    currentUser,
    updateCurrentUser,
    addCallbacks,
    disconnect,
    socketNewMessage,
    connect,
    ref,
  } = useContext(AuthContext);

  const sendMessage = (data) => {
    if (ref.current) {
      try {
        ref.current.send(JSON.stringify({ ...data }));
        // console.warn("Message sent successfully");
      } catch (error) {
        console.warn(error.message);
      }
    } else {
      console.warn("connection issue");
    }
  };

  const fetchChatList = (chatId) => {
    sendMessage({
      command: "chat_list",
    });
  };

  const customCompare = (a, b) => {
    const timestampA = new Date(a.last_message.timestamp);
    const timestampB = new Date(b.last_message.timestamp);
    return timestampB - timestampA;
  };

  return (
    <View style={{ height: "100%" }}>
      <FlatList
        data={data ? data?.sort(customCompare) : []}
        renderItem={({ item, index }) => (
          <RenderMessages index={index} item={item} />
        )}
        showsVerticalScrollIndicator={false}
        key={(item, index) => item.id}
        contentContainerStyle={{
          marginTop: scale.pixelSizeVertical(10),
        }}
        refreshControl={
          <RefreshControl
            refreshing={state.loadingChatList}
            onRefresh={() => fetchChatList()}
            color={colors.blackText}
            colors={
              Platform.OS === "android"
                ? [colors.mainPrimary, colors.blackText, colors.fadedPrimary]
                : colors.mainPrimary
            }
            tintColor={colors.mainPrimary}
          />
        }
      />
    </View>
  );
};
