import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import { ImageZoom } from "@likashefqet/react-native-image-zoom";

export const ImagePreview = () => {
  const { params } = useRoute();
  const { goBack } = useNavigation();

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
