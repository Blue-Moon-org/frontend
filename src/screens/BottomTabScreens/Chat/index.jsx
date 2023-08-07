import { View, Platform } from "react-native";
import React from "react";
import { AppHeader } from "../../../components/primary";
import { SharedStyles } from "../../../styles";
import { PendingOrders } from "./PendingOrders";
import { Messages } from "./Messages";
import { scale } from "../../../utils/scale";
import Constants from "expo-constants";
import { styles } from "./styles";
import { Text } from "../../../components/common";
import { Fontscales } from "../../../styles";

export const Chat = () => {
  console.warn(Constants.statusBarHeight);
  const add =
    Platform.OS === "ios" && Constants.statusBarHeight < 30
      ? scale.heightPixel(40)
      : scale.heightPixel(1);

  return (
    <View style={SharedStyles.container}>
      <View
        style={{
          height:
            Platform.OS === "ios"
              ? scale.heightPixel(210) + Constants.statusBarHeight + add
              : scale.heightPixel(210) + Constants.statusBarHeight,
          zIndex: 2,
          backgroundColor: "white",
        }}
      >
        <AppHeader />
        <PendingOrders />

        <Text
          text={"Messages"}
          textStyle={[Fontscales.labelLargeRegular, styles.messageText]}
        />
      </View>
      <View
        style={{
          height:
            Platform.OS === "ios"
              ? scale.height -
                (scale.heightPixel(302) + Constants.statusBarHeight) -
                add
              : scale.height -
                scale.heightPixel(342) +
                Constants.statusBarHeight,
        }}
      >
        <Messages />
      </View>
    </View>
  );
};
