import React from "react";
import { Text as MainText } from "react-native";

export const Text = ({
  text,
  color,
  textAlign,
  textStyle,
  letterSpacing,
  ellipsizeMode,
  numberOfLines,
  onPress,
  ...others
}) => {
  return (
    <MainText
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[color, textStyle]}
      onPress={onPress}
      {...others}
    >
      {text}
    </MainText>
  );
};
