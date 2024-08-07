import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

export const Feature = () => {
  const upcomingData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  return (
    <View style={styles.itemsContainer}>
      {upcomingData.map((item) => {
        return <View key={item.id} style={styles.backgroundColor} />;
      })}
    </View>
  );
};
