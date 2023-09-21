import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../common";
import { Fontscales } from "../../styles";
import { scale } from "../../utils/scale";

export const ErrorMore = ({ state }) => {
  return (
    state.moreLoading === false && (
      <View style={styles.container}>
        <Text
          text={"Error fecthing more posts, check your network connection"}
          textStyle={Fontscales.labelSmallRegular}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    height: scale.heightPixel(20),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: scale.pixelSizeVertical(15),
  },
});
