import { Keyboard, Pressable, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, Button } from "../../../components/common";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../../Redux/actions";
import { Lodaing } from "../../../components/primary";

export const ForgotPassword = () => {
  const { navigate } = useNavigation();

  const [state, updateState] = useState({
    email: "",
    error: "",
  });

  const dispatch = useDispatch();

  const data = useSelector((state) => state.forgotPassword);

  const continueHandler = () => {
    if (state.email === "") {
      updateState({
        ...state,
        error: "Field must not be blank",
      });
    } else if (/^\S+@\S+\.\S+$/.test(state.email) === false) {
      updateState({
        ...state,
        error: "Invalid email",
      });
    } else {
      dispatch(forgotPassword(state, navigate));
      updateState({
        ...state,
        error: "",
      });
    }
  };

  return (
    <>
      {data.loading ? <Lodaing /> : null}
      <SafeAreaView style={SharedStyles.container}>
        <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
          <Text
            textStyle={[Fontscales.headingLargeBold, styles.headerText]}
            text={"Reset \nPassword"}
          />
          <Text
            textStyle={[styles.subText, Fontscales.paragraphSmallMedium]}
            text={"Enter the email registered with the account"}
          />

          <Text text={"Email"} textStyle={styles.label} />
          <TextInput
            autoFocus={true}
            textInputStyle={[styles.inputSpace]}
            //    inputState={}
            //   editable={}
            onChangeText={(text) => {
              updateState({
                ...state,
                email: text,
              });
            }}
            placeholder={"example@newmail.com"}
            textContentType={"emailAddress"}
            value={state.email}
            autoComplete={"email"}
            keyboardType={"email-address"}
          />

          <View style={styles.errContainer}>
            <Text
              textStyle={styles.errorText}
              text={state.error ?? data.error.message}
            />
          </View>

          <View style={styles.outterContainer}>
            <Button
              onPress={() => continueHandler()}
              textStyle={styles.btnTextStyle}
              containerStyle={styles.innerContainer}
              title={"Continue"}
            />
          </View>
        </Pressable>
      </SafeAreaView>
    </>
  );
};
