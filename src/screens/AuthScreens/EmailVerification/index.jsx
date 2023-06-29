import { Pressable, View, Keyboard } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { images } from "../../../constants/images";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { Button, Text, TextInput } from "../../../components/common";
import { colors } from "../../../constants/colorpallette";
import { useNavigation } from "@react-navigation/native";
import { emailVerify } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const EmailVerification = () => {
  const [otpState, updateOtpState] = useState({
    code: "",
    codeReady: false,
    codeMaxLength: 5,
    inputFocus: false,
    error: null,
  });

  const { navigate } = useNavigation();

  useEffect(() => {
    updateOtpState(
      {
        ...otpState,
        codeReady: otpState.code.length === otpState.codeMaxLength,
      },
      [otpState.code]
    );

    return () => updateOtpState({ ...otpState, codeReady: false });
  }, [otpState.code]);

  const eachDigit = new Array(otpState.codeMaxLength).fill(0);

  const eachInputDigit = (_currentDgit, index) => {
    const emptyChar = " ";
    const digit = otpState.code[index] || emptyChar;

    const isCurrentDigit = index === otpState.code.length;
    const isLastDigit = index === otpState.codeMaxLength - 1;
    const codeFull = otpState.code.length === otpState.codeMaxLength;
    const isDigitFocus = isCurrentDigit || (isLastDigit && codeFull);

    return (
      <View
        key={index}
        style={[
          styles.innerView,
          {
            borderColor:
              isDigitFocus && otpState.inputFocus
                ? colors.mainPrimary
                : colors.lightPrimary,
          },
        ]}
      >
        <Text
          textStyle={[Fontscales.headingSmallMedium, styles.innerText]}
          text={digit}
        />
      </View>
    );
  };

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.emailVerify);

  const handleBlur = () => {
    updateOtpState({ ...otpState, inputFocus: false });
  };

  const verifyHandler = () => {
    if (otpState.codeReady === false) {
      updateOtpState({
        ...otpState,
        error: "Inavlid code",
      });
    } else {
      dispatch(emailVerify(otpState, navigate));
      updateOtpState({
        ...otpState,
        error: null,
      });
      navigate("PhoneNoVerification");
    }
  };

  const onpress = () => {
    updateOtpState({ ...otpState, inputFocus: true });
    inputRef?.current?.focus();
  };

  return (
    <SafeAreaView style={SharedStyles.container}>
      <Pressable
        style={{
          height: "100%",
        }}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            contentFit="contain"
            style={styles.image}
            source={images.email}
            cachePolicy={"memory-disk"}
          />
        </View>

        <View style={styles.titleText}>
          <Text
            textStyle={[Fontscales.headingLargeBold, styles.headerText]}
            text={"Email \nVerification "}
          />
          <Text
            textStyle={[styles.subText, Fontscales.paragraphSmallMedium]}
            text={"Enter the verification code sent to your mail"}
          />
        </View>

        <View style={styles.otpContainer}>
          <Pressable
            onPress={() => onpress()}
            style={styles.pressableContainer}
          >
            {eachDigit.map(eachInputDigit)}
          </Pressable>
          <TextInput
            value={otpState.code}
            onChangeText={(text) => {
              let onlyNums = text.replace(/[^0-9]/g, "");
              updateOtpState({ ...otpState, code: onlyNums });
            }}
            maxLength={otpState.codeMaxLength}
            keyboardType={"number-pad"}
            textContentType={"oneTimeCode"}
            onBlur={() => handleBlur()}
            refs={inputRef}
            textInputStyle={styles.textInputStyle}
            autoFocus={true}
          />
        </View>

        <View style={styles.errContainer}>
          <Text
            textStyle={styles.errorText}
            text={otpState.error ?? data?.error?.message}
          />
        </View>

        <View style={styles.btnContainer}>
          <Button
            textStyle={[styles.timeBtnText, Fontscales.labelSmallRegular]}
            containerStyle={styles.timeBtnContainer}
            title={"Resend in 54s"}
          />

          <Button
            onPress={() => verifyHandler()}
            textStyle={[styles.verifyBtnText, Fontscales.labelSmallRegular]}
            containerStyle={styles.VerifyBtnContainer}
            title={"Verify"}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
};
