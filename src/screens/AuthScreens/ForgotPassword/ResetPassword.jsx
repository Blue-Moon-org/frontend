import { Keyboard, Pressable, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, Button } from "../../../components/common";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../constants/colorpallette";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";

export const ResetPassword = () => {
  const { navigate } = useNavigation();

  const [newPassword, UpdateNewPassword] = useState({
    showPassword: false,
  });

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
              // onChangeText={}
              placeholder={"************"}
              textContentType={"password"}
              // autoComplete={"name-given"}
              // value={""}
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
              // onChangeText={}
              placeholder={"************"}
              textContentType={"password"}
              // value={""}
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

        <View style={styles.outterContainer}>
          <Button
            onPress={() => {
              navigate("Login");
            }}
            textStyle={styles.btnTextStyle}
            containerStyle={styles.innerContainer}
            title={"Submit"}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
};
