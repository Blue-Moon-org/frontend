import { TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { scale } from "../../../utils/scale";
import { Text } from "../../../components/common";
import { Fontscales } from "../../../styles";
import * as Google from "expo-auth-session/providers/google";

// ios  :
// android  :

export const SignInWithGoogle = () => {
  const [request, response, propmtAsync] = Google.useAuthRequest({
    androidClientId:
      "360260392873-jortvdmktsgctjdarndv7fsnvkplrkni.apps.googleusercontent.com",
    iosClientId:
      "360260392873-3bm7i91s264h344hsvlq67h14q62p7ei.apps.googleusercontent.com",
  });

  useEffect(() => {
    googleSignInHandler();
  }, [response]);

  const googleSignInHandler = async () => {
    await getUserDetail(response.authentication.accessToken);
  };

  const getUserDetail = async (token) => {
    if (!token) {
      return;
    } else {
      try {
        const response = await fetch(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.warn(response);
      } catch (error) {
        console.warn(error);
      }
    }
  };
  return (
    <TouchableOpacity
      onPress={() => propmtAsync()}
      activeOpacity={0.7}
      style={styles.googleSignInButton}
    >
      <Ionicons name="logo-google" size={scale.fontPixel(22)} color="white" />
      <Text
        textAlign={"center"}
        textStyle={[styles.googleSignUpText, Fontscales.labelSmallRegular]}
        text={"Sign up with Google"}
      />
    </TouchableOpacity>
  );
};
