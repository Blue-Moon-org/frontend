import { View, Platform } from "react-native";
import React, {useState, useEffect} from "react";
import { AppHeader } from "../../../components/primary";
import { SharedStyles } from "../../../styles";
import { PendingOrders } from "./PendingOrders";
import { Messages } from "./Messages";
import { scale } from "../../../utils/scale";
import Constants from "expo-constants";
import { styles } from "./styles";
import { Text } from "../../../components/common";
import { Fontscales } from "../../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Chat = () => {
  const add =
    Platform.OS === "ios" && Constants.statusBarHeight < 30
      ? scale.heightPixel(40)
      : scale.heightPixel(1);

        const [user, updateUser] = useState("");

        const getData = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem("user");
            updateUser(JSON.parse(jsonValue));
          } catch (e) {
            // error reading value
          }
        };

        useEffect(() => {
          let sub = true;
          if (sub) {
            getData();
          }

          return () => (sub = false);
        }, [user]);


  return (
    <View style={SharedStyles.container}>
      <View
        style={{
          height:
            Platform.OS === "ios"
              ? scale.heightPixel(210) + Constants.statusBarHeight + add
              : scale.height * 0.24 + Constants.statusBarHeight,

          zIndex: 2,
        }}
      >
        <AppHeader  user={user}/>
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
              : scale.height * 0.58 + Constants.statusBarHeight,
        }}
      >
        <Messages user={user}/>
      </View>
    </View>
  );
};
