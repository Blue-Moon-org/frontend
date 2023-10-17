import { View, Text as BaseText } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedStyles, Fontscales } from "../../../styles";
import { Button, Text, TextInput } from "../../../components/common";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../Redux/actions";
import { Lodaing } from "../../../components/primary";
import { PhoneCheck } from "../../../Redux/actions/DetailCheck";
import { AuthContext } from "../../../Context";

export const Login = () => {
  const [state, updateState] = useState({
    showPassword: false,
    rememberMe: true,
    email: "",
    password: "",
    error: null,
  });

  const dispatch = useDispatch();

  const { currentUser, updateCurrentUser } = useContext(AuthContext);

  const loginData = useSelector((state) => state.loginState);
  const { navigate, replace } = useNavigation();

  const loginHandler = () => {
    if (state.email === "") {
      updateState({
        ...state,
        error: "email field may not be blank",
      });
    } else if (/^\S+@\S+\.\S+$/.test(state.email) === false) {
      updateState({
        ...state,
        error: "Invalid email",
      });
    } else if (state.password === "") {
      updateState({
        ...state,
        error: "password field may not be blank",
      });
    } else {
      updateState({
        ...state,
        error: null,
      });
      dispatch(userLogin(state, navigate, replace));
    }
  };
  updateCurrentUser(loginData.user);
  return (
    <>
      {loginData.loading ? <Lodaing /> : null}
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
              keyboardType={"email-address"}
              placeholder={"Example@newmail.com"}
              textContentType={"emailAddress"}
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
                  const textReplace = text.replace(/ +/g, "");
                  updateState({
                    ...state,
                    password: textReplace,
                  });
                }}
                placeholder={"************"}
                textContentType={"password"}
                value={state.password}
                clearButtonMode={false}
                secureTextEntry={state.showPassword ? true : false}
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
              {/* <View style={styles.rememberMeContainer}>
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
              </View> */}
              <Text
                onPress={() => navigate("ForgotPassword")}
                textStyle={styles.forgotPassword}
                text="forgot password?"
              />
            </View>

            <View style={styles.errContainer}>
              <Text
                textStyle={styles.errorText}
                text={state.error ?? loginData.error}
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
    </>
  );
};
