import { View, KeyboardAvoidingView, Platform, FlatList } from "react-native";
import React from "react";
import { FindHeader } from "../../../components/primary";
import { KeyBoardAvoidingWrapper, Text } from "../../../components/common";
import { SharedStyles } from "../../../styles";
import { ChatHeader } from "../../../components/primary/ChatHeader";
import { Interactions } from "./Interactions";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useKeyboardHeight } from "../../../customHooks";
import { scale } from "../../../utils/scale";
import { chatData } from "./data";
import { RendenChat } from "./RendenChat";

export const Chat = () => {
  const { keyboardHeight, show } = useKeyboardHeight();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          overflow: "hidden",
          paddingBottom: 2,
        }}
      >
        <ChatHeader />
      </View>
      <View
        style={{
          borderColor: "red",
          borderWidth: 1,
          flex: Platform.OS === "android" ? 14 : 9,
          marginBottom:
            Platform.OS === "android"
              ? scale.pixelSizeVertical(35)
              : Platform.OS === "ios" && show
              ? scale.pixelSizeVertical(keyboardHeight - 10)
              : 1,
        }}
      >
        <FlatList
          data={chatData}
          renderItem={RendenChat}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginHorizontal: scale.pixelSizeHorizontal(16),
          }}
        />
      </View>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={[
            styles.interactContainer,
            {
              bottom:
                Platform.OS === "ios" && show
                  ? scale.pixelSizeVertical(keyboardHeight - 20)
                  : scale.pixelSizeVertical(15),
            },
          ]}
        >
          <Interactions />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
