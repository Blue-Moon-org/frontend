import { View, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import { ImageZoom } from "@likashefqet/react-native-image-zoom";
import Toast from "react-native-toast-message";

export const ImagePreview = () => {
  const { params } = useRoute();
  const { goBack, navigate } = useNavigation();

  useEffect(() => {
    const backAction = () => {
      Toast.show({
        text1: "Prompt",
        text2:
          "Press the back button on the screen to go back to the previous screen",
        type: "warn",
      });
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);

  return (
    <SafeAreaView
      style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
    >
      <Ionicons
        name="chevron-back"
        size={scale.fontPixel(24)}
        color={colors.blackText}
        style={styles.icon}
        onPress={() => goBack()}
      />
      <View style={styles.imageContainer}>
        <ImageZoom
          source={{ uri: params.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
};
