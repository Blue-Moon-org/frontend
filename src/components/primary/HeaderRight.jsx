import { StyleSheet, View } from "react-native";
import React from "react";
import { scale } from "../../utils/scale";
import { colors } from "../../constants/colorpallette";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../common";

export const HeaderRight = () => {
  return (
    <View style={styles.headerRightContainer}>
      <View style={styles.cartBargeContainer}>
        <Text text={4} textStyle={styles.text} />
      </View>
      <Ionicons name="cart-outline" size={scale.fontPixel(30)} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerRightContainer: {
    // width: "25%",
    // marginTop: scale.pixelSizeVertical(6),
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale.pixelSizeHorizontal(16),
  },
  text: {
    paddingVertical: scale.fontPixel(3),
    paddingHorizontal: scale.fontPixel(5),
    fontSize: scale.fontPixel(10),
    color: "white",
    zIndex: 1,
  },
  cartBargeContainer: {
    position: "absolute",
    backgroundColor: colors.mainPrimary,
    right: -scale.fontPixel(2),
    top: -scale.fontPixel(2),
    borderRadius: scale.fontPixel(8),
    zIndex: 1,
  },
});
