import { FlatList, Platform, RefreshControl, View } from "react-native";
import React, { useCallback } from "react";
import { messagesData } from "./data";
import { scale } from "../../../utils/scale";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../constants/colorpallette";
import RenderMessages from "./RenderMessages";
import { useDispatch, useSelector } from "react-redux";
import { chatList } from "../../../Redux/actions/Chat/ChatList";

export const Messages = ({ user, data }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.chatList);

  const onRefresh = useCallback(() => {
    dispatch(chatList());
  }, []);

  // dataChatList: null,
  // errorChatList: payload,
  // loadingChatList: false,
  // console.warn(data.map((ea) => ea.participants));


  return (
    <View>
      <View>
        <FlatList
          data={data}
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
              onRefresh={onRefresh}
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
    </View>
  );
};
