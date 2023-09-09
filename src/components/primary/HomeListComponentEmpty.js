import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../common";
import { Fontscales } from "../../styles";
import { scale } from "../../utils/scale";

export const HomeListComponentEmpty = ({ state }) => {
  return (
    state.loading === false && (
      <View style={styles.container}>
        <Text
          text={"Oooopsss!!! 🥺"}
          textStyle={[
            Fontscales.headingLargeBold,
            {
              marginBottom: scale.pixelSizeVertical(10),
            },
          ]}
        />
        <Text
          text={"This Category is Empty"}
          textStyle={[
            Fontscales.paragraphMediumRegular,
            {
              marginBottom: scale.pixelSizeVertical(3),
            },
          ]}
        />
        <Text
          text={"Explore amazing products in other categories 😊"}
          textStyle={Fontscales.paragraphMediumRegular}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: scale.pixelSizeVertical(80),
  },
});
