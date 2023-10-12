import { View, TextInput as Input } from "react-native";
import React, { useState } from "react";
import {  TextInput, Button } from "../../../components/common";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { scale } from "../../../utils/scale";

export const Feedback = () => {
  const [values, updateValues] = useState({
    email: "",
    title: "",
    message: "",
  });
  return (
    <View
      style={[
        SharedStyles.container,
        {
          paddingVertical: scale.pixelSizeVertical(20),
        },
      ]}
    >
      <TextInput
        textInputStyle={styles.TextInput}
        value={values.email}
        onChangeText={(text) => {
          updateValues({ ...values, email: text });
        }}
        placeholder={"Email"}
      />
      <TextInput
        textInputStyle={styles.TextInput}
        value={values.title}
        onChangeText={(text) => {
          updateValues({ ...values, title: text });
        }}
        placeholder={"What issue do you have?"}
      />
      <Input
        style={styles.Input}
        placeholder={"Write more about the issue"}
        multiline={true}
        numberOfLines={5}
        value={values.message}
        onChangeText={(text) => {
          updateValues({ ...values, message: text });
        }}
        spellCheck={true}
      />
      <Button
        onPress={() => {}}
        textStyle={[Fontscales.labelSmallRegular]}
        containerStyle={styles.btnContainer}
        title={"Send"}
        // disabled={}
      />
    </View>
  );
};
