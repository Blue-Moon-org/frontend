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
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../Redux/actions";

export const Login = () => {
  const [state, updateState] = useState({
    showPassword: false,
    rememberMe: true,
    email: "",
    password: "",
    error: "",
  });

  const dispatch = useDispatch();

  const loginData = useSelector((state) => state.loginState);
  console.warn(loginData);
  const { navigate } = useNavigation();

  const loginHandler = () => {
    if (state.email === "") {
      updateState({
        ...state,
        error: "email field can not be enter",
      });
    } else if (state.password === "") {
      updateState({
        ...state,
        error: "password field can not be enter",
      });
    } else {
      updateState({
        ...state,
        error: "",
      });
      dispatch(userLogin(state));
    }
  };

  return (
    <SafeAreaView style={[SharedStyles.container]}>
      <View style={{ height: "100%" }}>
        <Text
          textStyle={[styles.headerText, Fontscales.headingLargeBold]}
          text={"Log in your \nAccount"}
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
            onChangeText={(text) => {
              updateState({
                ...state,
                email: text,
              });
            }}
            keyboardType={"email"}
            placeholder={"example@newmail.com"}
            textContentType={"email"}
            value={state.email}
            autoComplete={"email"}
          />

          <Text text={"Password"} textStyle={styles.label} />
          <View style={styles.showPassword}>
            <TextInput
              textInputStyle={styles.textInputStyle}
              autoComplete={"password"}
              //    inputState={}
              //   editable={}
              onChangeText={(text) => {
                updateState({
                  ...state,
                  password: text,
                });
              }}
              placeholder={"************"}
              textContentType={"password"}
              value={state.password}
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
            <Text
              onPress={() => navigate("ForgotPassword")}
              textStyle={styles.forgotPassword}
              text="forgot password?"
            />
          </View>

          <View style={styles.outterContainer}>
            <Button
              onPress={() => loginHandler()}
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
