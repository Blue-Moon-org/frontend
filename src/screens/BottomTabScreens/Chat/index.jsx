import { View, Text } from "react-native";
import React from "react";
import { AppHeader } from "../../../components/primary";
import { SharedStyles } from "../../../styles";

export const Chat = () => {
  return (
    <View style={SharedStyles.container}>
      <AppHeader />
      <Text>index</Text>
    </View>
  );
};
