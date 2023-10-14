import { View, TextInput as Input, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { TextInput, Button, Text } from "../../../components/common";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { scale } from "../../../utils/scale";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { feedBack } from "../../../Redux/actions/Feedback";
import { colors } from "../../../constants/colorpallette";

export const Feedback = () => {
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.feedback);
  const [values, updateValues] = useState({
    // email: "",
    title: "",
    message: "",
    error: "",
  });

  const _feedbackHandler = () => {
    if (values.message === "") {
      updateValues({ ...values, error: "Message can not be empty" });
    } else if (values.title === "") {
      updateValues({ ...values, error: "Message can not be empty" });
    } else {
      dispatch(feedBack(values, goBack));
      updateValues({ ...values, error: "" });
    }
  };

  return (
    <View
      style={[
        SharedStyles.container,
        {
          paddingVertical: scale.pixelSizeVertical(20),
        },
      ]}
    >
      {/* <TextInput
        textInputStyle={styles.TextInput}
        value={values.email}
        onChangeText={(text) => {
          updateValues({ ...values, email: text });
        }}
        placeholder={"Email"}
      /> */}
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

      <Text textStyle={styles.errorText} text={values.error} />

      <Button
        onPress={() => _feedbackHandler()}
        textStyle={[Fontscales.labelSmallRegular]}
        containerStyle={styles.btnContainer}
        title={
          state.loading ? (
            <ActivityIndicator color={"with"} size={scale.fontPixel(20)} />
          ) : (
            "Send"
          )
        }
        disabled={state.loading ? true : false}
      />
    </View>
  );
};
