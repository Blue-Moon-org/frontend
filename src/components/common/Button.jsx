import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "./Text";

export const Button = ({
  title,
  onPress,
  textStyle,
  containerStyle,
  disabled,
  ...others
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[containerStyle]}
      onPress={onPress}
      disabled={disabled}
      {...others}
    >
      <Text text={title} style={[textStyle]} />
    </TouchableOpacity>
  );
};
