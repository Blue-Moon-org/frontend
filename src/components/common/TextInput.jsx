import { TextInput as Input, StyleSheet } from "react-native";
import React from "react";
import { scale } from "../../utils/scale";

export const TextInput = ({
  onChangeText,
  value,
  secureTextEntry,
  caretHidden,
  inlineImageLeft,
  editable,
  defaultValue,
  key,
  inlineImagePadding,
  multiline,
  maxLength,
  textContentType,
  placeholder,
  textInputStyle,
  onBlur,
  onFocus,
  keyboardType,
  onContentSizeChange,
  inputState,
  others,
}) => {
  return (
    <Input
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      caretHidden={caretHidden}
      inlineImageLeft={inlineImageLeft}
      enablesReturnKeyAutomatically={false}
      blurOnSubmit={true}
      editable={editable}
      cursorColor={theme.dark1}
      defaultValue={defaultValue}
      key={key}
      inlineImagePadding={inlineImagePadding}
      multiline={multiline}
      maxLength={maxLength}
      clearButtonMode={"while-editing"}
      //   selectionColor={theme.gray1}
      textContentType={textContentType}
      placeholder={placeholder}
      placeholderTextColor={"#838383"}
      onBlur={onBlur}
      onFocus={onFocus}
      style={[
        styles.textInputStyle,
        textInputStyle,
        {
          borderColor:
            inputState === "success"
              ? "#00A520"
              : inputState === "error"
              ? "#E6353D"
              : "#F0F0F0",
        },
      ]}
      keyboardType={keyboardType}
      onContentSizeChange={onContentSizeChange}
      {...others}
    />
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    height: scale.heightPixel(52),
    borderRadius: scale.fontPixel(1),
    paddingVertical: scale.pixelSizeVertical(4),
    borderWidth: scale.widthPixel(1),
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(16),
    lineHeight: scale.lineSize.lh1,
    paddingHorizontal: scale.pixelSizeHorizontal(16),
    paddingVertical: scale.pixelSizeVertical(14),
    borderColor: "#F0F0F0",
  },
});
