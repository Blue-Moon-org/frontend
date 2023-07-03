import { Keyboard, Pressable, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, Button } from "../../../components/common";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { colors } from "../../../constants/colorpallette";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordReset } from "../../../Redux/actions";

export const ResetPassword = () => {
  const { navigate } = useNavigation();

  const [newPassword, UpdateNewPassword] = useState({
    showPassword: false,
    password: "",
    confirmPassword: "",
    error: "",
  });

  const dispatch = useDispatch();

  const data = useSelector((state) => state.forgotPasswordReset);

  const route = useRoute();

  const submitHandler = () => {
    if (newPassword.password === "") {
      UpdateNewPassword({
        ...newPassword,
        error: "Password field must not be filled",
      });
    } else if (newPassword.confirmPassword === "") {
      UpdateNewPassword({
        ...newPassword,
        error: "Confirm password field must not be filled",
      });
    } else if (newPassword.password !== newPassword.confirmPassword) {
      UpdateNewPassword({
        ...newPassword,
        error: "Password does not match ",
      });
    } else {
      dispatch(forgotPasswordReset(newPassword, route.params, navigate));
      UpdateNewPassword({
        ...newPassword,
        error: "",
      });
    }
  };

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
        <View style={styles.subContainer}>
          <Text text={"Password"} textStyle={styles.label} />
          <View style={styles.showPassword}>
            <TextInput
              textInputStyle={styles.textInputStyle}
              //    inputState={}
              //   editable={}
              onChangeText={(text) => {
                const textReplace = text.replace(/ +/g, "");
                UpdateNewPassword({
                  ...newPassword,
                  password: textReplace,
                });
              }}
              placeholder={"************"}
              textContentType={"password"}
              // autoComplete={"name-given"}
              value={newPassword.password}
              clearButtonMode={false}
              secureTextEntry={!newPassword.showPassword}
            />
            <MaterialCommunityIcons
              name={
                newPassword.showPassword ? "eye-outline" : "eye-off-outline"
              }
              size={scale.fontPixel(18)}
              color={colors.blackText}
              onPress={() =>
                UpdateNewPassword({
                  ...newPassword,
                  showPassword: !newPassword.showPassword,
                })
              }
            />
          </View>

          <Text text={"Confirm Password"} textStyle={styles.label} />
          <View style={styles.showPassword}>
            <TextInput
              textInputStyle={styles.textInputStyle}
              autoComplete={"password"}
              //    inputState={}
              //   editable={}
              onChangeText={(text) => {
                const textReplace = text.replace(/ +/g, "");
                UpdateNewPassword({
                  ...newPassword,
                  confirmPassword: textReplace,
                });
              }}
              placeholder={"************"}
              textContentType={"password"}
              value={newPassword.confirmPassword}
              clearButtonMode={false}
              secureTextEntry={!newPassword.showPassword}
            />
            <MaterialCommunityIcons
              name={
                newPassword.showPassword ? "eye-outline" : "eye-off-outline"
              }
              size={scale.fontPixel(18)}
              color={colors.blackText}
              onPress={() =>
                UpdateNewPassword({
                  ...newPassword,
                  showPassword: !newPassword.showPassword,
                })
              }
            />
          </View>
        </View>

        <View style={styles.errContainer}>
          <Text
            textStyle={styles.errorText}
            text={newPassword.error ?? data.error}
          />
        </View>

        <View style={styles.outterContainer}>
          <Button
            onPress={() => submitHandler()}
            textStyle={styles.btnTextStyle}
            containerStyle={styles.innerContainer}
            title={data.loading ? "Loading" : "Submit"}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
};
