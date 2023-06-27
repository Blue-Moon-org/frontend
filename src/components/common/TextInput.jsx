import { TextInput as Input, StyleSheet } from "react-native";
import React from "react";
import { scale } from "../../utils/scale";
import { colors } from "../../constants/colorpallette";

export const TextInput = ({
  onChangeText,
  value,
  secureTextEntry,
  caretHidden,
  inlineImageLeft,
  editable,
  defaultValue,
  key,
  refs,
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
  autoComplete,
  autoFocus,
  clearButtonMode,
  returnKeyType,
  returnKeyLabel,
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
      cursorColor={colors.grey1}
      defaultValue={defaultValue}
      key={key}
      inlineImagePadding={inlineImagePadding}
      multiline={multiline}
      maxLength={maxLength}
      clearButtonMode={clearButtonMode ? "while-editing" : "never"}
      selectionColor={colors.gray}
      textContentType={textContentType}
      returnKeyType={returnKeyType}
      returnKeyLabel={returnKeyLabel}
      placeholder={placeholder}
      placeholderTextColor={"#838383"}
      onBlur={onBlur}
      onFocus={onFocus}
      autoComplete={autoComplete}
      ref={refs}
      autoFocus={autoFocus}
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
    height: scale.heightPixel(47),
    borderRadius: scale.fontPixel(5),
    paddingVertical: scale.pixelSizeVertical(4),
    borderWidth: scale.widthPixel(1),
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(13),
    paddingHorizontal: scale.pixelSizeHorizontal(16),
    paddingVertical: scale.pixelSizeVertical(14),
    borderColor: "#F0F0F0",
  },
});
