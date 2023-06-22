import { View, Text as BaseText } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedStyles, Fontscales } from "../../../styles";
import { Button, Text, TextInput } from "../../../components/common";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
  const [state, updateState] = useState({
    showPassword: false,
    rememberMe: true,
  });

  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={[SharedStyles.container]}>
      <View style={{ height: "100%" }}>
        <Text
          textStyle={[styles.headerText, Fontscales.headingLargeBold]}
          text={"Log in your \n account"}
        />
        <Text
          textStyle={[styles.subText, Fontscales.paragraphSmallMedium]}
          text={"Create a buyer’s or designer’s account"}
        />

        <View style={styles.inputContainer}>
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

          <Text text={"Password"} textStyle={styles.label} />
          <View style={styles.showPassword}>
            <TextInput
              textInputStyle={styles.textInputStyle}
              autoComplete={"password"}
              //    inputState={}
              //   editable={}
              // onChangeText={}
              placeholder={"************"}
              textContentType={"password"}
              // value={""}
              clearButtonMode={false}
              secureTextEntry={!state.showPassword}
            />
            <MaterialCommunityIcons
              name={state.showPassword ? "eye-outline" : "eye-off-outline"}
              size={scale.fontPixel(18)}
              color={colors.blackText}
              onPress={() =>
                updateState({
                  ...state,
                  showPassword: !state.showPassword,
                })
              }
            />
          </View>

          <View style={styles.condtionContainer}>
            <View style={styles.rememberMeContainer}>
              <MaterialCommunityIcons
                name={
                  !state.rememberMe
                    ? "checkbox-blank-outline"
                    : "checkbox-marked"
                }
                size={scale.fontPixel(20)}
                color={colors.fadedPrimary}
                onPress={() =>
                  updateState({
                    ...state,
                    rememberMe: !state.rememberMe,
                  })
                }
              />
              <Text textStyle={styles.rememberMeText} text={"Remember me"} />
            </View>
            <Text textStyle={styles.forgotPassword} text="forgot password?" />
          </View>

          <View style={styles.outterContainer}>
            <Button
              textStyle={styles.btnTextStyle}
              containerStyle={styles.innerContainer}
              title={"Log in"}
            />
          </View>
        </View>
        <View style={styles.bottomTextContainer}>
          <BaseText style={styles.bottomText}>
            Don’t have an account?
            <Text
              onPress={() => {
                navigate("Register");
              }}
              textStyle={styles.signUpText}
              text={" Sign Up"}
            />
          </BaseText>
        </View>
      </View>
    </SafeAreaView>
  );
};
