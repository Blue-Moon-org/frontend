import { View, Text } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { Fontscales } from "../../../styles";

export const Comments = () => {
  const route = useRoute();

  const { navigate, setOptions } = useNavigation();
  setOptions({
    headerShown: true,
    title: "Comment",
    headerTitleAlign: "left",
    headerTitleAllowFontScaling: true,
    headerTitleStyle: Fontscales.paragraphLargeMedium,
    headerLeft: () => (
      <MaterialCommunityIcons
        onPress={() => navigate("PostDetail", { item: route.params.item })}
        style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
        name="keyboard-backspace"
        size={scale.fontPixel(24)}
        color="black"
      />
    ),
  });
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};
