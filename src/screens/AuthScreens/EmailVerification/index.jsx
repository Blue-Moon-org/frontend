import { Pressable, View, Keyboard } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { images } from "../../../constants/images";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { Button, Text, TextInput } from "../../../components/common";
import { colors } from "../../../constants/colorpallette";
import { useNavigation, useRoute } from "@react-navigation/native";
import { emailVerify, resendEmailOtp } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Lodaing } from "../../../components/primary";

export const EmailVerification = () => {
  const [otpState, updateOtpState] = useState({
    code: "",
    codeReady: false,
    codeMaxLength: 6,
    inputFocus: false,
    error: null,
  });

  const { navigate } = useNavigation();

  const route = useRoute();

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
      dispatch(emailVerify(otpState, route.params.email, " ", navigate));
      updateOtpState({
        ...otpState,
        error: null,
      });
    }
  };
  const onpress = () => {
    updateOtpState({ ...otpState, inputFocus: true });
    inputRef?.current?.focus();
  };

  const [timerState, updateTimerState] = useState({
    timeLeft: null,
    targetTime: null,
    activeResend: false,
  });

  let resendTimerInterval;

  const calculateTimeLeft = (finalTime) => {
    const difference = finalTime - +new Date();
    if (difference > 0) {
      updateTimerState({
        ...timerState,
        timeLeft: Math.round(difference / 1000),
      });
    } else {
      updateTimerState({
        ...timerState,
        timeLeft: null,
        activeResend: true,
      });
      clearInterval(resendTimerInterval);
    }
  };

  const triggerTimer = (targetTimeSeconds = 59) => {
    updateTimerState({
      ...timerState,
      activeResend: false,
      targetTime: targetTimeSeconds,
    });
    const finalTime = +new Date() + targetTimeSeconds * 1000;

    resendTimerInterval = setInterval(
      () => (calculateTimeLeft(finalTime), 1000)
    );
  };

  useEffect(() => {
    triggerTimer();

    return () => {
      clearInterval(resendTimerInterval);
    };
  }, []);

  const resendOtpHandler = () => {
    dispatch(resendEmailOtp(route.params?.email, navigate));
    triggerTimer();
  };

  return (
    <>
      {data.loading ? <Lodaing /> : null}
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
              text={"Email \nVerification"}
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
              onPress={() => resendOtpHandler()}
              textStyle={[styles.timeBtnText, Fontscales.labelSmallRegular]}
              containerStyle={[
                styles.timeBtnContainer,
                {
                  opacity: timerState.timeLeft > 0 ? 0.5 : 1,
                },
              ]}
              disabled={data.loading || timerState.timeLeft ? true : false}
              title={
                timerState.timeLeft
                  ? `Resend in ${timerState.timeLeft} s`
                  : "Resend"
              }
            />

            <Button
              onPress={() => verifyHandler()}
              textStyle={[styles.verifyBtnText, Fontscales.labelSmallRegular]}
              containerStyle={styles.VerifyBtnContainer}
              title={data.loading ? "Verifying" : "Verify"}
              disabled={data.loading ? true : false}
            />
          </View>
        </Pressable>
      </SafeAreaView>
    </>
  );
};
