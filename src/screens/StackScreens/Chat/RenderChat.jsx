import { View } from "react-native";
import React from "react";
import { Text } from "../../../components/common";
import { styles } from "./styles";

export const RenderChat = ({ item, index, separator }) => {
  return (
    <View>
      {item.condition === "me" ? (
        <View style={styles.meMessageContainer}>
          <Text text={item.message} textStyle={styles.meMessage} />
          <Text text={item.time} textStyle={styles.meMessageTime} />
        </View>
      ) : item.condition === "day" ? (
        <View style={styles.newDayContainer}>
          <Text text={item.date} textStyle={styles.newDayTime} />
        </View>
      ) : (
        <View style={styles.youMessageContainer}>
          <Text text={item.message} textStyle={styles.youMessage} />
          <Text text={item.time} textStyle={styles.youMessageTime} />
        </View>
      )}
    </View>
  );
};
