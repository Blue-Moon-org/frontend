import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { scale } from "../../utils/scale";

export const KeyBoardAvoidingWrapper = ({ children, offset }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "none"}
      // behavior={Platform.OS === "android" ? "height" : "padding"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.select({
        ios: offset ? offset : scale.heightPixel(240),
        android: scale.heightPixel(200),
      })}
    >
      <ScrollView
        style={{ flex: 1 }}
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
