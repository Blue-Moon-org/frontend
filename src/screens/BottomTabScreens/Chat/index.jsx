import { View, Text } from "react-native";
import React from "react";
import { AppHeader } from "../../../components/primary";
import { SharedStyles } from "../../../styles";
import { PendingOrders } from "./PendingOrders";
import { Messages } from "./Messages";

export const Chat = () => {
  return (
    <View style={SharedStyles.container}>
      <AppHeader />
      <PendingOrders />
      <Messages />
    </View>
  );
};
