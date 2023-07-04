import { View, Text } from "react-native";
import React from "react";
import { AppHeader } from "../../../components/primary";
import { SharedStyles } from "../../../styles";

export const Market = () => {
  return (
    <View style={SharedStyles.container}>
      <AppHeader />
      <Text>Market</Text>
    </View>
  );
};
