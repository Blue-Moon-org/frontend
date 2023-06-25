import { Keyboard, Pressable, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, Button } from "../../../components/common";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { useNavigation } from "@react-navigation/native";

export const ForgotPassword = () => {
  const { navigate } = useNavigation();

  return (
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
          // onChangeText={}
          placeholder={"example@newmail.com"}
          textContentType={"name"}
          // value={""}
          autoComplete={"email"}
        />

        <View style={styles.outterContainer}>
          <Button
            onPress={() => {
              navigate("ForgotPasswordVerification");
            }}
            textStyle={styles.btnTextStyle}
            containerStyle={styles.innerContainer}
            title={"Continue"}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
};
