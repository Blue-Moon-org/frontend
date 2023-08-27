import { View } from "react-native";
import React from "react";
import { Text } from "../../../components/common";
import { Fontscales } from "../../../styles";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const ChatHeading = () => {
  return (
    <View>
      <Text
        text={
          "Lorem ipsum dolor sit amet consectetur. Sit blandit blandit enim urna euismod ut. Amet laoreet nunc sit "
        }
        textStyle={[
          Fontscales.labelSmallRegular,
          {
            textAlign: "center",
            marginTop: scale.pixelSizeVertical(10),
            marginBottom: scale.pixelSizeVertical(20),
            color: colors.grey1,
          },
        ]}
      />
    </View>
  );
};
