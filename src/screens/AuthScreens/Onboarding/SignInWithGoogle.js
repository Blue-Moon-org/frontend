import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { scale } from "../../../utils/scale";
import { Text } from "../../../components/common";
import { Fontscales } from "../../../styles";
// import {
//   Google,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
import * as Google from "expo-auth-session/providers/google";
import { useNavigation } from "@react-navigation/native";

export const SignInWithGoogle = () => {
  // const initializeGoogle = async () => {
  //   Google.configure({
  //     scopes: ["email", "profile"], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId:
  //       "360260392873-aik05jirnejikm5ete6d6i7r8p82ecte.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     // androidClientId:
  //     //   "360260392873-jortvdmktsgctjdarndv7fsnvkplrkni.apps.googleusercontent.com",
  //     iosClientId:
  //       "360260392873-3bm7i91s264h344hsvlq67h14q62p7ei.apps.googleusercontent.com",
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     hostedDomain: "", // specifies a hosted domain restriction
  //     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  //     loginHint: "Continue to account with Google",
  //     // accountName: "", // [Android] specifies an account name on the device that should be used
  //     // googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  //     // openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  //     profileImageSize: scale.fontPixel(80), // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  //   });
  // };

  // const [requesst, response, propmtAsync] = Google.useAuthRequest({
  //   webClientId:
  //     "360260392873-aik05jirnejikm5ete6d6i7r8p82ecte.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
  //   androidClientId:
  //     "360260392873-jortvdmktsgctjdarndv7fsnvkplrkni.apps.googleusercontent.com",
  //   iosClientId:
  //     "360260392873-3bm7i91s264h344hsvlq67h14q62p7ei.apps.googleusercontent.com",
  // });

  // const loginWithGoogle = () => {
  //   console.warn("Inside loginWithGoogle");
  //   initializeGoogle()
  //     .then(async () => {
  //       try {
  //         await Google.hasPlayServices();
  //         const userInfo = await Google.signIn();
  //         console.warn("userInfo", userInfo);
  //       } catch (error) {
  //         console.warn(error);
  //       }
  //     })
  //     .catch((err) => {
  //       console.warn(err);
  //     });
  // };

  const { navigate } = useNavigation();
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => {}} //propmtAsync() loginWithGoogle()}
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
      <TouchableOpacity
        onPress={() => navigate("Register")}
        activeOpacity={0.7}
        style={styles.registerButton}
      >
        {/* <Ionicons name="logo-google" size={scale.fontPixel(22)} color="white" /> */}
        <Text
          textAlign={"center"}
          textStyle={[styles.registerText, Fontscales.labelSmallRegular]}
          text={"Register"}
        />
      </TouchableOpacity>
    </View>
  );
};
