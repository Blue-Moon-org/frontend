import { View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "../../../components/common";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const LocationCard = (item) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.locationCardContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.placeImage }}
          cachePolicy={"memory-disk"}
          contentFit="cover"
        />
      </View>
      <View style={styles.iconTextContainer}>
        <AntDesign
          name="star"
          size={scale.fontPixel(10)}
          color={colors.mainPrimary}
        />
        <Text textStyle={styles.ratingText} text={item.rating} />
      </View>
    </TouchableOpacity>
  );
};
// r